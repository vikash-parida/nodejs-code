// function mycar(){
//     this.fuel = 10

//     this.refuel = function(){
//         setTimeout(()=>{
//             this.fuel += 100;
//             console.log("refuel the time  "+ this.fuel);
//         },1000)
//     }
// }

// const newCar = new mycar();


function mycar(){
    this.fuel = 10

    this.refuel = function(){
        const _this = this;
        setTimeout(()=>{
            _this.fuel += 100;
            console.log("refuel the time  "+ _this.fuel);
        },1000)
    }
}

const newCar = new mycar();

newCar.refuel()