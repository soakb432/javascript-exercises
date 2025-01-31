const findTheOldest = function(array) {
    let oldest = array.toSorted(function(a, b) {
        a.yearOfDeath ??= a.yearOfDeath = new Date().getFullYear();
        b.yearOfDeath ??= b.yearOfDeath = new Date().getFullYear();

        let lastPerson = a.yearOfDeath - a.yearOfBirth;
        let nextPerson = b.yearOfDeath - b.yearOfBirth;

        return lastPerson > nextPerson ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;