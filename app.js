
// My First JavaScript Project

console.log("================================");
console.log("     STUDENT INFORMATION SYSTEM");
console.log("================================");

const student = {
    name: "Elijah Concepcion",
    course: "BS Information Technology",
    year: 2,
    section: "ORACLE"
};

function displayStudent() {
    console.log("Student Name: " + student.name);
    console.log("Course: " + student.course);
    console.log("Year Level: " + student.year);
    console.log("Section: " + student.section);
}

function calculateGrade(grade) {
    if (grade >= 90) {
        return "Excellent";
    } else if (grade >= 80) {
        return "Very Good";
    } else if (grade >= 75) {
        return "Passed";
    } else {
        return "Failed";
    }
}

displayStudent();

console.log("--------------------------------");
console.log("Grade: 92");
console.log("Remarks: " + calculateGrade(92));
console.log("--------------------------------");
console.log("Project successfully executed!");
