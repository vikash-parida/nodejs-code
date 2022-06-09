// let a =['vikash','rakesh','sandhya',25,36,14,78,98,45];

// let [first,second,third] = a;
// console.log(first,second,third);

// function showName([]){
//   return z;
// }

// let [n1,n2,n3] = showName(a);

// console.log(n1,n2,n3);


// function showName([n1,n2,n3,...args]) {
//     console.log(n1);
//     console.log(args[0]);

// }
  


// showName(a);


// let name = {
//     firstName:'vikash',
//     lastName:'parida',
//     contact:'1121548721'
// }
// function showDetails({firstName,lastName,contact}) {
//     return [firstName,lastName,contact]
// }
// console.log(showDetails(name));


// function myfun(){
//     console.log(" inner function");
// }

// example  asynchronized

// console.log("start function");
// setTimeout(function(){
//     console.log("middelfunction");
// },10000)

// console.log("end function");

//example synchronized


   //1 example callbacks syn
// console.log("start");

// let num = [12,52,63,45,78,96,65,45,85,25,14,36,95,25,15,36,78];

// num.forEach((k)=>{
//     console.log(k);
// })

// console.log("end");


//  // asynchronized opration handling using callbacks
// console.log('start');

// function showName(name,callbacks){
//     setTimeout(()=>{
//         console.log("inner name function");
//         callbacks(name);
//     },1000);
// }

// function  showHobbies(nm,callbacks){
//     setTimeout(()=>{
//       console.log("inner hobbies function");  
//       callbacks(['cooking','carDetailings','music']);
//     })
// }
// let nm = showName("vikash",(nm)=>{console.log(nm);
// showHobbies(nm,(hobbie)=>{console.log(hobbie)})
// });

// console.log("end");


//  //                                promises is used 
//  console.log('start');

//  function showName(name){
//    return new Promise((resolve, reject) =>{
//       setTimeout(()=>{
//          console.log("inner name function");
//        resolve(name);
//      },1000)
//    })
//  }
 
//  function showHobbies(nm){
//     return new Promise((resolve, reject)=>{
//        setTimeout(()=>{
//           console.log("inner hobbies function");  
//           resolve(['cooking','carDetailings','music']);
//         },1000)
//     })
   
//  } 
 
//  showName('vikash')
//  .then( nm => showHobbies(nm))
//  .then(hobbies => console.log(hobbies));













//  //                                  asynchronized use
// console.log('start');

// function showName(name){
//    return new Promise((resolve, reject) =>{
//       setTimeout(()=>{
//          console.log("inner name function");
//        resolve(name);
//      },1000)
//    })
// }

// function showHobbies(nm){
//    return new Promise((resolve, reject) =>{
//       setTimeout(()=>{
//          console.log("inner hobbies function");  
//          resolve(['cooking','carDetailings','music']);
//        },1000)
//    })
  
// }

// async function showAll(){
//  const nm = await showName("vikash");
//  const hobbie = await showHobbies(nm);
//  console.log(hobbie);
// }

//  showAll();

//  console.log("end");

