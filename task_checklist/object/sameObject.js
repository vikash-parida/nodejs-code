function address(State,City,Zepcode) {
    return  {
          State,
          City,
          Zepcode,
    }
  }

//   function Address(State,City,Zipcode){
//        this.State = State,
//        this.City = City,
//        this.Zipcode = Zipcode
//   }
   
  
  //create object
  const Address1 =  address('Andheri','Mumbai',400053);
  const Address2 =  address('Andheri','Mumbai',400053);
  
  function sameObject(Address1,Address2) {
      return Address1 === Address2;
  }

  console.log(sameObject(Address1,Address2));