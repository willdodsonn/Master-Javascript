function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  if(age <= 15) return "damn you can do either youngin";
  else if(age >= 16 < 20) return "you can drive but cannot drink";
  else return "good luck on the road idiot!";
}
console.log(isOldEnoughToDrinkAndDrive(21));

