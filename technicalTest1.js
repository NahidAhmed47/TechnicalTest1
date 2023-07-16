// Students names array
const students = ['Imam', 'Shamim', 'Showrob', 'Salman', 'Mahim', 'Samad', 'Showrob', 'Salman','Ishtiak', 'Mahim'];

// Remove the duplicate students name by the function
const removeDuplicateStudents = (students) => {
    const uniqueStudents = [];
    for (const student of students) {
        if (uniqueStudents.indexOf(student) == -1) {
            uniqueStudents.push(student);
        }
    }
    return uniqueStudents;
};

// Call the function and store the result in a variable
const uniqueStudents = removeDuplicateStudents(students);
console.log(uniqueStudents)