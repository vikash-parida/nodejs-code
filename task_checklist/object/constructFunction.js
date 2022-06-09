function Address(state,city,code){
    this.State=state,
    this.City = city,
    this.Zipcode = code
}

const address1 = new Address('Andheri','Mumbai',400102);

function showAddress(address){
    for(let key in address){
        console.log(key, address[key]);
    }
}

showAddress(address1)