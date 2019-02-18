const numberToReversedDigits = (number) => {
    const numberToString = number.toString()
    const stringSplit = numberToString.split("")
    const StringReverse = stringSplit.reverse()
    return StringReverse.map(Number)
    }
module.exports = numberToReversedDigits;
