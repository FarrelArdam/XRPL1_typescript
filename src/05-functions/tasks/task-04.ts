/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport(attendances: { name: string; present: boolean }[]): void {

    let presentCount: number = 0;
    let absentCount: number = 0;

    console.log("=== Attendance Report ===");

    console.log("Absent Students:");

    for (let i = 0; i < attendances.length; i++) {

        if (attendances[i].present) {
            presentCount++;
        } else {
            absentCount++;
            console.log(attendances[i].name);
        }
    }

    console.log("Total Present:", presentCount);
    console.log("Total Absent:", absentCount);
}

printAttendanceReport(attendances);