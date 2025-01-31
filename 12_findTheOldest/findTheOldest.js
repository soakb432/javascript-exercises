const findTheOldest = function(array) {
    let oldest = array.sort(function(a, b) {
        if (!a.yearOfDeath) {a.yearOfDeath = new Date().getFullYear()};
        if (!b.yearOfDeath) {b.yearOfDeath = new Date().getFullYear()};

        let lastPerson = a.yearOfDeath - a.yearOfBirth;
        let nextPerson = b.yearOfDeath - b.yearOfBirth;

        return lastPerson > nextPerson ? -1 : 1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;