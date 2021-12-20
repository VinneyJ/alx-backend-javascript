// create getlist that returns ids from a list of obj

// arg must be an array
// the arr must be same format as getListStudents
// if arg not array return empty arr
// must use map

export default function getListStudentIds(callback) {
  if (!Array.isArray(callback)) {
    return [];
  }

  //   if (!Object.is(callback, getListStudents)) {
  //     return [];
  //   }

  return callback.map((value) => value.id);
}
