const humanCatDogYears = (number) => {
    const oneYear = 15
    const twoYear = 24
    const catYear = (number - 2)*4+twoYear
    const dogYear = (number - 2)*5+twoYear
    const humanCatDogY = []
    if (number <= 1){
        humanCatDogY.push(number, oneYear, oneYear)
    }
    if (number <= 2){
        humanCatDogY.push(number, twoYear, twoYear)
    }
    if (number >=3){
        humanCatDogY.push(number, catYear, dogYear)
    }
    return humanCatDogY;
   
}
    
module.exports = humanCatDogYears;
