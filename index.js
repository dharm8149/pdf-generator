const {app, BrowserWindow,ipcMain} = require('electron')
const url = require("url");
const path = require("path");
const { create } = require('domain');
var event_
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation : false
    }
  })

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `pdf/dist/pdf/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  mainWindow.maximize()
  // Open the DevTools.
mainWindow.webContents.openDevTools()
  mainWindow.removeMenu()

  mainWindow.on('closed', function () {
    mainWindow = null
  })

 const dialog_box=require('electron').dialog
//  dialog_box.showErrorBox=function(title,content){
//   event_.reply('create',["Project Creation Failled \n Please Check Path"])
//  }
  mainWindow.webContents.on('new-window', function(e, url) {
    e.preventDefault();
    require('electron').shell.openExternal(url);
  });
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})



async function select(event){
    var sql=require('./sqliteOperation')
    var sid=await sql.getCurrent();
    console.log("select pid,name,quan,reta,whol,purc,add_ as 'add' from 'created' where sid="+sid.sid+" union SELECT pid,name,quan,reta,whol,purc,false as 'add' FROM 'data' where pid not in(select  pid from 'created' where sid="+sid.sid+")")
    var data=await sql.select("select pid,name,quan,reta,whol,purc,add_ as 'add' from 'created' where sid="+sid.sid+" union SELECT pid,name,quan,reta,whol,purc,false as 'add' FROM 'data' where pid not in(select  pid from 'created' where sid="+sid.sid+")")
   console.log(data)
    data=JSON.parse(data)
    data.name=sid.name;
   
    data=JSON.stringify(data)
    event.reply("select",data)
}
async function insert(event,arg){

  var sql=require('./sqliteOperation')
  var check="select * from data where name='"+arg["name"]+"'";
  var data1=await sql.select(check)
  console.log(data1)
  data1=JSON.parse(data1)
  
  if(data1.msg!=''){
  event.reply("insert",`{"status":false,"msg":"Name already Exits"}`)
  }
  else{
    var query=`insert into data(name,quan,reta,whol,purc) values('${arg["name"]}',${arg["quan"]},${arg["reta"]},${arg["whol"]},${arg["purc"]})`;
    //console.log(query)
    var sql=require('./sqliteOperation')
    var data=await sql.insert(query,'data')
    var data=await sql.select("select seq from sqlite_sequence WHERE name = 'data'")
    event.reply("insert",data)
  }




  
}

async function update(event,arg){
  var query=`update data set name='${arg["name"]}',quan=${arg["quan"]},reta=${arg["reta"]},whol=${arg["whol"]},purc=${arg["purc"]} where pid=${arg['pid']}`;
  console.log(query)
  var sql=require('./sqliteOperation')
  var sid=await sql.getCurrent();
  var data=await sql.insert(query,'data')
  data=await sql.insert(`update created set name='${arg["name"]}',quan=${arg["quan"]},reta=${arg["reta"]},whol=${arg["whol"]},purc=${arg["purc"]} where pid=${arg['pid']} and sid=${sid.sid}`)
  console.log(data)
  event.reply("update",JSON.stringify({"status":true,data:arg}))
}


async function addToList(arg){
  var sql=require('./sqliteOperation')
  var sid=await sql.getCurrent();
  await sql.insert(`delete from created where sid =${sid.sid} and pid =${arg['pid']}`)
  var query=`insert into created(gpid,sid,pid,name,quan,reta,whol,purc,'add_') values(null,${sid.sid},${arg['pid']},'${arg["name"]}',${arg["quan"]},${arg["reta"]},${arg["whol"]},${arg["purc"]},1)`;
  //console.log(query)
  
 // var data=await 
 sql.insert(query,'data')
  // var data=await sql.select("select seq from sqlite_sequence WHERE name = 'data'")
  // event.reply("insert",data)
}

async function deleteToList(arg){
  var sql=require('./sqliteOperation')
  var sid=await sql.getCurrent();
  var query=`update created set add_=0 where sid =${sid.sid} and pid =${arg['pid']}`;
  //console.log(query)
  
 // var data=await 
 sql.insert(query,'data')
  // var data=await sql.select("select seq from sqlite_sequence WHERE name = 'data'")
  // event.reply("insert",data)
}

async function updateq(arg,event){
  var query=arg;
  //console.log(query)
  var sql=require('./sqliteOperation')
  var data=await sql.uQname(query)
  event.reply('updateq',data)
  
 
}


async function newQuatation(event){
  var sql=require('./sqliteOperation')
  var sid=await sql.getCurrent();
  var query=`update save_list set status='F' where sid =${sid.sid}`;
  //console.log(query)
  await sql.insert(query)
 // var data=await 
 select(event);
  // var data=await sql.select("select seq from sqlite_sequence WHERE name = 'data'")
  // event.reply("insert",data)
}


ipcMain.on('select',(event,arg)=>{
    select(event)
  

  })


  ipcMain.on('insert',(event,arg)=>{
    insert(event,arg)
  

  })
  ipcMain.on('update',(event,arg)=>{
    update(event,arg)
  

  })
  ipcMain.on('updateq',(event,arg)=>{
    updateq(arg,event)
  

  })

  ipcMain.on('addToList',(event,arg)=>{
    console.log(arg)
    addToList(arg)
  

  })

  ipcMain.on('deleteToList',(event,arg)=>{
    console.log(arg)
    deleteToList(arg)
  

  })

  ipcMain.on('newQuatation',(event,arg)=>{
   
    newQuatation(event)
  

  })



async function create_pdf(event,response){
  var sql=require('./sqliteOperation')
  var sid=await sql.getCurrent();
  var data =await sql.select(`select pid,name,quan,reta,whol,purc from 'created' where sid=${sid.sid} and add_=1`)
  console.log(data)
  data=JSON.parse(data)


  var pdf=require('./pdf')
 data= pdf.createPdf(response.filePaths[0]+"/"+sid.name+".pdf",data.msg)
 console.log(data)
 data=JSON.parse(data)
 if(data.status){
 event.reply("create_pdf",`{"status":false,"msg":"Pdf is Saved Successfully"}`);//
 }
 else{
  event.reply("create_pdf",`{"status":false,"msg":"Error Occured while creating A Pdf"}`);//
 }
}





  ipcMain.on('create_pdf',(event,arg)=>{
    
    const { dialog } = require('electron')
     
    dialog.showOpenDialog({properties: ['openDirectory'] }).then(function (response) {
      if (!response.canceled) {
       create_pdf(event,response)
      } else {
        console.log("no file selected");
       event.reply("create_pdf",`{"status":false,"msg":"Error Occured while creating A Pdf"}`);
      }
  

  })

  });
