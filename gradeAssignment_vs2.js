//create a program that prompts the user to enter their grade.

function gradeAssignment_v2() {
  let score = parseInt(prompt("Enter your score: "));
  let grade;
  let remarks;

  if (score >= 97) {
    grade = "1.00";
    remarks = "HIGH PASS, Candidate for Cum Laude";
  } else if (score >= 94) {
    grade = "1.25";
    remarks = "HIGH PASS, Candidate for Cum Laude";
  } else if (score >= 91) {
    grade = "1.50";
    remarks = "AVERAGE PASS";
  } else if (score >= 88) {
    grade = "1.75";
    remarks = "AVERAGE PASS";
  } else if (score >= 85) {
    grade = "2.00";
    remarks = "AVERAGE PASS";
  } else if (score >= 82) {
    grade = "2.25";
    remarks = "AVERAGE PASS";
  } else if (score >= 79) {
    grade = "2.50";
    remarks = "LOW PASS";
  } else if (score >= 76) {
    grade = "2.75";
    remarks = "LOW PASS";
  } else if (score >= 75) {
    grade = "3.00";
    remarks = "LOW PASS";
  } else if (score >= 72) {
    grade = "4.00";
    remarks = "FAILED, Needs Improvement";
  } else {
    grade = "5.00";
    remarks = "FAILED, Needs Improvement";
  }

  console.log("Your equivalent Grade is " + grade);
  console.log("Final Remarks: " + remarks);
}

gradeAssignment_v2();
