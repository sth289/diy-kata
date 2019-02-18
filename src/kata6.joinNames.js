const joinNames = (namesObj) => {
    return namesObj.map(person => person.name).join(', ').replace(/,(?=[^,]*$)/, ' &');

}

module.exports = joinNames;
