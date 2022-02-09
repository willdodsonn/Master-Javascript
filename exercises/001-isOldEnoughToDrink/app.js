function isOldEnoughToDrink(){
    // your code here	
    let legalAge = 21;
    let base = 0;
    if(legalAge < 21){
        return "you aren't old enough yet"
    }
    else if(age >= 21){
        return "drinks on you!"
    }
}
console.log(isOldEnoughToDrink(11));