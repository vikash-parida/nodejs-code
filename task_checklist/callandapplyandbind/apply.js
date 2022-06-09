let persion1 = {
    fitrstName:"vikash",
    lastName:"parida"
   }
   
   let persion2 = {
       fitrstName:"rakesh",
       lastName:"parida"
   }
   
   
   let fullName = function(address , mobileNo){
       console.log(`fullNmae:${this.fitrstName} ${this.lastName}  Address: ${address} MobNo:${mobileNo}`)
          }
   
   fullName.call(persion1,["Andheri",8898005488]);
   fullName.apply(persion2,["jogeshwari",7858485548]);