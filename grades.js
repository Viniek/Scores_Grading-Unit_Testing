const sciencesGrades = {
    "A": [70, 100],
    "B": [60, 69],
    "C": [50, 59],
    "Pass": [40, 49],
    "Sup": [0, 39]
  };
  
  const reGrades = {
    "A": [80, 100],
    "B": [70, 79],
    "C": [60, 69],
    "Pass": [50, 59],
    "Sup": [0, 49]
  };
  
  const languagesGrades = {
    "A": [75, 100],
    "B": [65, 74],
    "C": [55, 64],
    "Pass": [45, 54],
    "Sup": [0, 44]
  };
  
  function calculateGrade(score, gradingTable) {
    for (const [grade, range] of Object.entries(gradingTable)) {
      if (score >= range[0] && score <= range[1]) {
        return grade;
      }
    }
    return "Fail";
  }
  
  function calculateGradesAndAverage(studentScore) {
    const grades = {
      name: studentScore.name,
      math: calculateGrade(studentScore.math, sciencesGrades),
      eng: calculateGrade(studentScore.eng, languagesGrades),
      kisw: calculateGrade(studentScore.kisw, languagesGrades),
      phy: calculateGrade(studentScore.phy, sciencesGrades),
      chem: calculateGrade(studentScore.chem, sciencesGrades),
      re: calculateGrade(studentScore.re, reGrades),
      comp: calculateGrade(studentScore.comp, languagesGrades)
    };
  
    const totalScore = studentScore.math + studentScore.eng + studentScore.kisw + studentScore.phy + studentScore.chem + studentScore.re + studentScore.comp;
    grades.avgPts = Math.floor(totalScore / 7);
  
    return grades;
  }
  
  module.exports = calculateGradesAndAverage;
  