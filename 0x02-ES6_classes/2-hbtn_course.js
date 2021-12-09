export default class HolbertonCourse {
  constructor(name = '', length = 0, students = []) {
    if (typeof (name) !== 'string') {
      throw TypeError('Name must be a string');
    }

    if (!Number.isInteger(length)) {
      throw TypeError('Length must be a number');
    }

    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array object');
    }

    for (const student in students) {
      if (typeof (student) !== 'string') {
        throw TypeError('student name is not a string');
      }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name = '') {
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length = 0) {
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students = []) {
    this._students = students;
  }
}
