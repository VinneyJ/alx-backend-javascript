import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classroom = [];
  classroom.push(new ClassRoom(19));
  classroom.push(new ClassRoom(20));
  classroom.push(new ClassRoom(34));
  return classroom;
}
