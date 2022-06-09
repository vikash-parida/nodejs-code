

async function fun1(){
    console.log("1");
    console.log(await fun2());
    console.log("3");
}

function fun2(){
    return new Promise(function(resolve,reject){

        setTimeout(() => {
            resolve('2')
        },2000);

    })
}

fun1();


// error first call back
function fun(num,callback){
    if(num > 10){
        return callback(null,"number is more then 10");
    }else{
        return callback("number is less then 10");
    }

}

function fun1(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
}


fun(100,fun1);








