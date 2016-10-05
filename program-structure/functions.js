/*
 * Venus Age
 * Write a program that, given an age in seconds, calculates how old someone is in Venus. Know that:
 *  Earth: orbital period 365.25 Earth days, or 31557600 seconds
 *  Venus: orbital period 0.61519726 Earth years
 * You need to round the result by using Math.round
 */

exports.ageOnVenus = function (ageInSeconds) {
  return Math.round(ageInSeconds / 31557600 / 0.61519726)
}
