function car(modelName, year, brand){
    this.modelName = modelName;
    this.year = year;
    this.brand = brand;
}

const motion = new car("Toyota camry" , 2006, "toyota")
console.log(motion);


 const shoe = {
    color:'red',
    name:'Nike Addidas',
    brand:'addidas'
}
console.log(delete shoe.color);
console.log(shoe);

const car = {
    modelName : 'Toyota Camry',
    year : 2006,
    brand : 'Toyota',
    start :function() {
        console.log(`${this.modelName} Engine Started!!`);
    }
}
car.start();

