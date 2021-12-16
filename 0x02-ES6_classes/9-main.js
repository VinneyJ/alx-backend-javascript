import listOfStudents from './9-hoisting';

console.log(listOfStudents);
if (listOfStudents) {
  const listPrinted = listOfStudents.map(
    (student) => student.fullStudentDescription,
  );
  console.log(listPrinted);
}
console.log('Nothing to print');
