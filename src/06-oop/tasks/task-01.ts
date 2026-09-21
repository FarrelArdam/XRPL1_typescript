/**
 * A school wants to create a simple student profile system. 
 * Every student has a student ID, name, age, major, and current grade level. 
 * The school also wants the system to display a student's profile.
 * For example, a student named Lionel Messi has the following information:
 * | Property   | Value                |
 * | ---------- | -------------------- |
 * | Student ID | ST001                |
 * | Name       | Lionel Messi         |
 * | Age        | 17                   |
 * | Major      | Software Engineering |
 * | Grade      | 11                   |
 * 
 * The program should allow the school to create multiple student objects with different information..,
 * Student Tasks
 * Create a class named with "Student"
 * 
 * The class should have:
 * studentId
 * name
 * age
 * major
 * grade
 * 
 * Use a constructor to initialize all properties.
 * Create a method: showProfile()
 * that displays the student's information.
 * Then create at least three student objects.
 */

class student {
    studentID: string;
    name: string;
    age: number;
    major: string;
    grade: number;
    
    constructor(
        studentID: string,
        name: string,
        age: number,
        major: string,
        grade : number
    ) {
        this.studentID = studentID;
        this.name = name;
        this.age = age;
        this.major = major;
        this.grade = grade;
    }

    showProfile(): void {
        console.log("studentID", this.studentID);
        console.log("name", this.name);
        console.log("age", this.age);
        console.log("major", this.major);
        console.log("grade", this.grade);
    }

}

const student1 = new student(
    "ST011",
    "Lionel Messi",
    17,
    "Softwate Engineer",
    11
)

const student2 = new student(
    "ST067",
    "Elon Musk",
    32,
    "Ceo BatuBara",
    12
)

const student3 = new student (
    "ST069",
    "Siswantoroni",
    15,
    "Orang Sukses",
    10
)

student1.showProfile();

console.log("------------------------")

student2.showProfile();

console.log("------------------------")

student3.showProfile();