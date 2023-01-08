// run `node index.js` in the terminal

let testCase2 = [
  {
    name: 'Leo Messi',
    dob: '31-12-1995',
    biology: 100,
    chemistry: 80,
    totalMarks: 180,
  },
  {
    name: 'Cristiano Ronaldo',
    dob: '31-05-1992',
    biology: 80,
    chemistry: 100,
    totalMarks: 180,
  },
  {
    name: 'Virat Kohli',
    dob: '31-12-1995',
    biology: 30,
    chemistry: 40,
    totalMarks: 70,
  },
  {
    name: 'Rohit Sharma',
    dob: '31-12-1995',
    biology: 40,
    chemistry: 30,
    totalMarks: 70,
  },
  {
    name: 'Viswanathan Anand',
    dob: '12-12-1994',
    biology: 99,
    chemistry: 10,
    totalMarks: 109,
  },
];

testCase2.sort((a, b) => {
  // if (a.totalMarks == b.totalMarks) return 1;
  if (a.biology < b.biology) return 1;
  return -1;
});
console.log(testCase2);

console.log(`Hello Node.js v${process.versions.node}!`);
