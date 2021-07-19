const sqlite3 = require('sqlite3').verbose();

var mquery=`create TABLE if not exists data(pid integer PRIMARY KEY AUTOINCREMENT,name text,quan real,reta real,whol real,purc real);
create TABLE if not exists history(pid integer,name text,quan real,reta real,whol real,purc real,date DATE,FOREIGN KEY(pid) REFERENCES data(pid));
create table if not exists save_list(sid integer primary key  AUTOINCREMENT,name text,date Date,status char(1));
create table if not exists gen_pdf(gpid integer primary key AUTOINCREMENT,name text,date Date);
create TABLE if not exists created(gpid integer,sid integer, pid integer,name text,quan real,reta real,whol real,purc real,add_ integer,FOREIGN KEY(gpid) REFERENCES gen_pdf(gpid),FOREIGN KEY(sid) REFERENCES save_list(sid),FOREIGN KEY(pid) REFERENCES data(pid));
CREATE TRIGGER if not exists add_to_history
  AFTER INSERT ON data
  Begin
	insert into history VALUES(new.pid,new.name,new.quan,new.reta,new.whol,new.purc,datetime('now','localtime'));
   end;
CREATE TRIGGER if not exists add_to_history1
  AFTER UPDATE ON data
  Begin
      insert into history VALUES(new.pid,new.name,new.quan,new.reta,new.whol,new.purc,datetime('now','localtime'));
  end;
`
async function getCurrent(){
var data=await select("select * from save_list where status='T'")
//console.log(data)
data=JSON.parse(data)
//console.log("data0 "+data.status+data+" "+data.msg+JSON.stringify(data))
if(data.msg==[]||data.msg==null||data.msg==""){
  //console.log("come here")
data=await select("select seq from sqlite_sequence WHERE name = 'save_list'")
data=JSON.parse(data)
//console.log("data1 "+data)
if(data.msg!=""){
  val={"sid":(data.msg[0].seq)+1,"name":"Quatation "+((data.msg[0].seq)+1)}
    await insert(`insert into save_list(name,date,status) values ('Quatation ${(data.msg[0].seq)+1}',datetime('now','localtime'),'T')`)
    return val
  }

else{
  val={"sid":1,"name":"Quatation 1"}
  await insert(`insert into save_list(sid,name,date,status) values (1,'Quatation 1',datetime('now','localtime'),'T')`)
  return val
}
}
else
{
  return data.msg[0];
}
}


function select(query){

return new Promise((resolve,reject)=>{
var db =new sqlite3.Database("data.db",(err)=>{
  if(err)
  resolve(`{"status":false,
"msg":${err.toString()}}`)
})

db.serialize(()=>{
  db.exec(mquery,(err)=>{
    if(err)
    resolve(`{"status":false,
    "msg":${err.toString()}}`)
    //console.log("Database Connected")
  })
var data=[]
  db.all(query,[],(err,rows)=>{
    if(err)
    resolve(`{"status":false,
    "msg":${err.toString()}}`)
    else{
      rows.forEach(row => {
        data.push(row);
      });
    }
    //console.log("selected Successfully\n"+JSON.stringify(data))
    resolve(`{"status":true,
  "msg":${JSON.stringify(data)}}`)
  })


  db.close();
})

}
)
}

function insert(query,data1){
  
  return new Promise((resolve,reject)=>{
    var db =new sqlite3.Database("data.db",(err)=>{
      if(err)
      resolve(`{"status":false,
    "msg":${err.toString()}}`)
    })
    
    db.serialize(()=>{
      db.exec(mquery,(err)=>{
        if(err)
        resolve(`{"status":false,
        "msg":${err.toString()}}`)
        //console.log("Database Connected")
      })
      db.run(query,(err)=>{
        if(err){
        //console.log(err.message+query)
        resolve(`{"status":false,
        "msg":${err.toString()}}`)
        }
        else{
         
         
          resolve(`{"status":true,
        "msg":"Done"}`)
        }
        
      })
    
      db.close();
    })
    
    }
    )
}


async function uQname(query){
 var data=await getCurrent();
 ////console.log(data)
// data=JSON.parse(data)
var check="select * from save_list where name='"+query+"'";
var data1=await select(check)
console.log(data1)
data1=JSON.parse(data1)
if(data1.msg!=''){
return `{"status":false,"msg":"Name already Exits"}`
}
else{
data1=await insert(`update save_list set name='${query}' where sid = ${data.sid}`)
 return data1
}
}


module.exports={
    insert,select,getCurrent,uQname
}
