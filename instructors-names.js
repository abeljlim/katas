const instructorWithLongestName = function(instructors) {
  let longestNameInstructor = instructors[0]; // assumes that there is an object
  for (let instructorObj of instructors) {
    if (instructorObj.name.length > longestNameInstructor.name.length) {
      longestNameInstructor = instructorObj;
    }
  }
  return longestNameInstructor;
};

console.log(instructorWithLongestName([
  { name: "Samuel", course: "iOS" },
  { name: "Jeremiah", course: "Web" },
  { name: "Ophilia", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(instructorWithLongestName([
  { name: "Matthew", course: "Web" },
  { name: "David", course: "iOS" },
  { name: "Domascus", course: "Web" }
]));