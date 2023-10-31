import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Student {
  static nextStudentID = 10001;

  studentID: number;
  name: string;
  courses: string[];
  balance: number;

  constructor(name: string) {
    this.studentID = Student.nextStudentID++;
    this.name = name;
    this.courses = [];
    this.balance = 0;
  }

  enroll(course: string) {
    this.courses.push(course);
  }

  payTuition(amount: number) {
    this.balance -= amount;
  }

  showStatus() {
    console.log('Student Status:');
    console.log(`Name: ${this.name}`);
    console.log(`Student ID: ${this.studentID}`);
    console.log('Courses Enrolled: ');
    this.courses.forEach((course) => console.log(course));
    console.log(`Balance: $${this.balance.toFixed(2)}`);
  }
}

const students: Student[] = [];

function addStudent() {
  rl.question('Enter student name: ', (name) => {
    const newStudent = new Student(name);
    students.push(newStudent);
    console.log(`Student added with ID ${newStudent.studentID}`);
    showMenu();
  });
}

function enrollStudent() {
  rl.question('Enter student ID: ', (studentIDStr) => {
    const studentID = parseInt(studentIDStr);
    const student = students.find((s) => s.studentID === studentID);
    if (!student) {
      console.log('Student not found.');
      showMenu();
    } else {
      rl.question('Enter course name to enroll: ', (course) => {
        student.enroll(course);
        console.log(`${student.name} has been enrolled in ${course}`);
        showMenu();
      });
    }
  });
}

function payTuition() {
  rl.question('Enter student ID: ', (studentIDStr) => {
    const studentID = parseInt(studentIDStr);
    const student = students.find((s) => s.studentID === studentID);
    if (!student) {
      console.log('Student not found.');
      showMenu();
    } else {
      rl.question('Enter the amount to pay: ', (amountStr) => {
        const amount = parseFloat(amountStr);
        if (isNaN(amount) || amount <= 0) {
          console.log('Invalid amount. Please try again.');
          showMenu();
        } else {
          student.payTuition(amount);
          console.log(`${student.name} has paid $${amount.toFixed(2)}.`);

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

  rl.question('Select an option (1-5): ', (choice) => {
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
        rl.question('Enter student ID: ', (studentIDStr) => {
          const studentID = parseInt(studentIDStr);
          const student = students.find((s) => s.studentID === studentID);
          if (!student) {
            console.log('Student not found.');
            showMenu();
          } else {
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
