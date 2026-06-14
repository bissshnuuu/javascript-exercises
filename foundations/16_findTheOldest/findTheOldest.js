const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    let oldest = array[0];
    for (let i = 1; i < array.length; i++) {
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        const currentAge = (array[i].yearOfDeath || currentYear) - array[i].yearOfBirth;
        if (currentAge > oldestAge) {
            oldest = array[i];
        }
    }
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
