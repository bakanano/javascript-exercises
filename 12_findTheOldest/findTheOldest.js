const findTheOldest = function(people) {
    people.sort((a, b) => getAge(b) - getAge(a)); //desc ordering, biggest -> smallest
    return people[0];
}

function getAge(person) {
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    }
    return new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
