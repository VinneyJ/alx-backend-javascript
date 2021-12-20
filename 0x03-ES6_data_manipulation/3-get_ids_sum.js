function getSum(total, item) {
  return total + item.id;
}

export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce(getSum, 0);
}
