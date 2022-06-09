// Factory function
function address(State,City,Zepcode) {
  return  {
        State,
        City,
        Zepcode,
  }
}

//create object
const Address = address('Andheri','Mumbai',400053);
const Address1 = address('jogeshwari','MUmbai',400102);

//create a function show address
function showAddress(Address){
    for(let key in Address1){                 
        console.log(key,Address[key]);
    }
}

showAddress(Address1);