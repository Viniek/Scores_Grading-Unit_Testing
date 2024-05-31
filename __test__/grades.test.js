const calculateGradesAndAverage = require('./grades');

describe("calculateGradesAndAverage", () => {
  test("should calculate grades and average points correctly for Vee", () => {
    const studentScore = {
      name: "Vee",
      math: 98,
      eng: 88,
      kisw: 86,
      phy: 94,
      chem: 46,
      re: 80,
      comp: 58
    };

    const output = calculateGradesAndAverage(studentScore);
    expect(output).toEqual({
      name: "Vee",
      math: "A",
      eng: "A",
      kisw: "A",
      phy: "A",
      chem: "Pass",
      re: "A",
      comp: "C",
      avgPts: 78
    });
  });

  test("should calculate grades and average points correctly for Njeri", () => {
    const studentScore = {
      name: "Njeri",
      math: 72,
      eng: 74,
      kisw: 64,
      phy: 68,
      chem: 57,
      re: 75,
      comp: 69
    };

    const output = calculateGradesAndAverage(studentScore);
    expect(output).toEqual({
      name: "Njeri",
      math: "A",
      eng: "B",
      kisw: "C",
      phy: "B",
      chem: "C",
      re: "B",
      comp: "B",
      avgPts: 68
    });
  });
});
