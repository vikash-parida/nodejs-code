const Address = {
    street: 'Andheri',
    city: 'Mumbai',
    ZipCode: '100212',
}

function showAddress(Address) {
    for(let key in Address){
    console.log(key,Address[key]);
    }
}

showAddress(Address);