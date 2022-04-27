student_course_pairs_1 = [
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
  ["58", "Software Design"],
]

student_course_pairs_2 = [
  ["0", "Advanced Mechanics"],
  ["0", "Art History"],
  ["1", "Course 1"],
  ["1", "Course 2"],
  ["2", "Computer Architecture"],
  ["3", "Course 1"],
  ["3", "Course 2"],
  ["4", "Algorithms"],
]

student_course_pairs_3 = [
  ["23", "Software Design"], 
  ["3", "Advanced Mechanics"], 
  ["2", "Art History"], 
  ["33", "Another"],
]

const buildMap = pairs => {
  let studentMap = {};
  for (let i = 0; i < pairs.length; i++) {
    if ( !studentMap[pairs[i][0]] ){
      studentMap[pairs[i][0]] = [];
    } 
    studentMap[pairs[i][0]].push(pairs[i][1])
    
  }
  return studentMap;
};

const combine = (studMap) => {
  let keys = Object.keys(studMap);
  const commonCourses = {};
  for ( let i = 0; i < keys.length; i++ ) {
    for ( let j = i + 1; j < keys.length; j++ ) {    
      commonCourses[`${keys[i]}, ${keys[j]}`] = [];
      let intersection = studMap[keys[i]].filter(function(n) {
        return studMap[keys[j]].indexOf(n) !== -1;
    });
      
    commonCourses[`${keys[i]}, ${keys[j]}`].push(...intersection)
      
    }
  }

  return commonCourses;
}
const find_pairs = student_course_pairs_1 =>  {
  const studentMap = buildMap(student_course_pairs_1)
  const commonCourses = combine(studentMap);

  return commonCourses;
}

console.log(find_pairs(student_course_pairs_3))