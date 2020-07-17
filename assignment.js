
/***********************************************
 * /** Feet to mile conversation code starts here
 * *********************************************/
const feetToMile = lengthInFeet => {
    if(lengthInFeet < 0){
        return "You forgot!  Try with positive number";
    }
    else{
        return lengthInFeet / 5280;
    }    
};
console.log(feetToMile(528000));
console.log(feetToMile(0));
console.log(feetToMile(-5));





/***********************************************
 * /** Wood Calculation Code starts from here 
 * *********************************************/
const woodCalculator = (numberOfChair, numberOfTable, numberOfBed) => {
    
    let woodForSingleChair = numberOfChair * 1;
    let woodForSingleTable = numberOfTable * 3;
    let woodForSingleBed = numberOfBed * 5;

    //prevents inputs less than zero
    if(numberOfChair < 0 || numberOfTable < 0 || numberOfBed < 0){
        return "You forgot! Quantity can't be a negative number";
    }
    else{
        return woodForSingleChair + woodForSingleTable + woodForSingleBed;
    }
};
console.log("Number of wood needed for 1 of each types of furniture: ",woodCalculator(1, 1, 1));
console.log("Number of wood needed for 2 of each types of furniture: ",woodCalculator(2, 2, 2));
console.log("Number of wood needed for 10 of each types of furniture: ",woodCalculator(10, 10, 10));
console.log("With negative value as input: ", woodCalculator(-5, 5, 10));






/***********************************************
 *  Bricks Calculation code starts here
 * *********************************************/
const brickCalculator = (numberOfFloor) => {

    let numberOfBricksPerFeet = 1000;
    let bricksPerFloorUpto10 = numberOfBricksPerFeet * 15;
    let bricksPerFloorUpto20 = numberOfBricksPerFeet * 12;
    let bricksPerFloorAfter20 = numberOfBricksPerFeet * 10;
    if(numberOfFloor < 0){
        return "You forgot! Number of floor can't be negative"
    }
    else{
        if(numberOfFloor >= 0 && numberOfFloor <= 10){
            return bricksPerFloorUpto10 * numberOfFloor;
        }
        else if(numberOfFloor >= 11 && numberOfFloor <= 20){
            return (bricksPerFloorUpto10 * 10) + (bricksPerFloorUpto20 * (numberOfFloor - 10));
        }
        else if(numberOfFloor > 20 ){  
            return (bricksPerFloorUpto10 * 10) + (bricksPerFloorUpto20 * 10) + (bricksPerFloorAfter20 * (numberOfFloor - 20)) ;
        }
    }    
}
console.log("Number of bricks needed for -1 floor :",brickCalculator(-1));
console.log("Number of bricks needed for 0 floor :",brickCalculator(0));
console.log("Number of bricks needed for 10 floor :",brickCalculator(10));
console.log("Number of bricks needed for 11 floor :",brickCalculator(11));
console.log("Number of bricks needed for 20 floor :",brickCalculator(20));
console.log("Number of bricks needed for 25 floor :",brickCalculator(25));




/***********************************************
 *  Tiny friends code starts here
 * *********************************************/

 
const tinyFriend = (names) => {
    //find out the smallest string length
    let lengthOfTinyFriend = names[0].length;
    for(let i = 0; i < names.length; i++){
        if(names[i].length < lengthOfTinyFriend){
            lengthOfTinyFriend = names[i].length; 
        }
    }

    //testing if smallest name is an empty string
    if(lengthOfTinyFriend === 0){
        return "You can't use empty string";
    }
    //matching the minimum length with the name;
    else {
        for(let i = 0; i < names.length; i++){
            if (lengthOfTinyFriend === names[i].length){
                return names[i];
            }
        }
    }
}

//testing with regular names
let friends = ["Shakib", "Tamim", "LM10", "CR7", "Mushi"];
console.log("Most tiny name is : ",tinyFriend(friends));

//Testing with empty names in the string
let emptyFriends = ["", "Tamim"];
console.log("Most tiny name is(with empty string in the array) : ",tinyFriend(emptyFriends));