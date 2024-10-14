/**
 * Problem 6: Custom Sorting
 * 
 * Given a list students, sort the students by their grade (descending).
 * Use the .sort function.
 * 
 * @example [{name: "Chase", grade: 89}, {name: "Raman", grade: 92}] -> [{name: "Raman", grade: 92}, {name: "Chase", grade: 89}]
*/
function problem(students) {
    students.sort((a, b) => {
        if (a.grade > b.grade) {
            return -1;
        } else if (a.grade < b.grade) {
            return 1;
        }
        else {
            return 0;
        }
    })
    return students;
}

const tests = [
    [[{name: "Chase", grade: 89}, {name: "Raman", grade: 92}], [{name: "Raman", grade: 92}, {name: "Chase", grade: 89}]],
    [[{name: "Peter", grade: 92}, {name: "Gillman", grade: 70}, {name: "Pattis", grade: 100}], [{name: "Pattis", grade: 100}, {name: "Peter", grade: 92}, {name: "Gillman", grade: 70}]]
]

module.exports = {problem, tests};