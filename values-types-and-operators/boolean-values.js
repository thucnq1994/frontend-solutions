/*
 * Ranking
 * Write a program that ranks student's grade
 *  if grade is less than 60, return "Average"
 *  if grade is greater than or equals 60, and less than 90, return "Good"
 *  else return "Excellent"
 */

exports.rank = function (grade) {
  if (grade < 60) {
    return 'Average'
  } else if (grade >= 60 && grade < 90) {
    return 'Good'
  } else {
    return 'Excellent'
  }
}
