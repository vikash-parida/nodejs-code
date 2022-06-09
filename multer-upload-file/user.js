function show(){
    return new Promise(function(resolve,reject){
   if(true){
       resolve("hii")
        }else{
        reject("error");
        }
     
    })
}
async function s(){
 try { let b = await show();
    console.log(b);
}catch(e){ console.log(e)}
}


s();

