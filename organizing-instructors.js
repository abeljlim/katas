const organizeInstructors = function(instructors) {
  let coursesOrganized = {};
  for (let instructor of instructors) {
    if (coursesOrganized[instructor.course] === undefined) { // Out of bounds array access returns undefined
      coursesOrganized[instructor.course] = [];
    }
    coursesOrganized[instructor.course].push(instructor.name);
  }
  return coursesOrganized;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));