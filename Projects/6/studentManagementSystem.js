"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var Student = /** @class */ (function () {
    function Student(name) {
        this.studentID = Student.nextStudentID++;
        this.name = name;
        this.courses = [];
        this.balance = 0;
    }
    Student.prototype.enroll = function (course) {
        this.courses.push(course);
    };
    Student.prototype.payTuition = function (amount) {
        this.balance -= amount;
    };
    Student.prototype.showStatus = function () {
        console.log('Student Status:');
        console.log("Name: ".concat(this.name));
        console.log("Student ID: ".concat(this.studentID));
        console.log('Courses Enrolled: ');
        this.courses.forEach(function (course) { return console.log(course); });
        console.log("Balance: $".concat(this.balance.toFixed(2)));
    };
    Student.nextStudentID = 10001;
    return Student;
}());
var students = [];
function addStudent() {
    rl.question('Enter student name: ', function (name) {
        var newStudent = new Student(name);
        students.push(newStudent);
        console.log("Student added with ID ".concat(newStudent.studentID));
        showMenu();
    });
}
function enrollStudent() {
    rl.question('Enter student ID: ', function (studentIDStr) {
        var studentID = parseInt(studentIDStr);
        var student = students.find(function (s) { return s.studentID === studentID; });
        if (!student) {
            console.log('Student not found.');
            showMenu();
        }
        else {
            rl.question('Enter course name to enroll: ', function (course) {
                student.enroll(course);
                console.log("".concat(student.name, " has been enrolled in ").concat(course));
                showMenu();
            });
        }
    });
}
function payTuition() {
    rl.question('Enter student ID: ', function (studentIDStr) {
        var studentID = parseInt(studentIDStr);
        var student = students.find(function (s) { return s.studentID === studentID; });
        if (!student) {
            console.log('Student not found.');
            showMenu();
        }
        else {
            rl.question('Enter the amount to pay: ', function (amountStr) {
                var amount = parseFloat(amountStr);
                if (isNaN(amount) || amount <= 0) {
                    console.log('Invalid amount. Please try again.');
                    showMenu();
                }
                else {
                    student.payTuition(amount);
                    console.log("".concat(student.name, " has paid $").concat(amount.toFixed(2), "."));
                    showMenu();
                }
            });
        }
    });
}
function showMenu() {
    console.log('\nStudent Management System Menu:');
    console.log('1. Add Student');
    console.log('2. Enroll Student in Course');
    console.log('3. Pay Tuition Fees');
    console.log('4. Show Student Status');
    console.log('5. Exit');
    rl.question('Select an option (1-5): ', function (choice) {
        switch (choice) {
            case '1':
                addStudent();
                break;
            case '2':
                enrollStudent();
                break;
            case '3':
                payTuition();
                break;
            case '4':
                rl.question('Enter student ID: ', function (studentIDStr) {
                    var studentID = parseInt(studentIDStr);
                    var student = students.find(function (s) { return s.studentID === studentID; });
                    if (!student) {
                        console.log('Student not found.');
                        showMenu();
                    }
                    else {
                        student.showStatus();
                        showMenu();
                    }
                });
                break;
            case '5':
                console.log('Exiting Student Management System.');
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please select a valid option (1-5).');
                showMenu();
                break;
        }
    });
}
showMenu();
