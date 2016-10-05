/*
 * Chess Board
 * Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
 */

exports.chessBoard = function () {
  var count = 0
  while (count < 8) {
    if (count % 2 === 0) {
      console.log(' # # # #')
    } else {
      console.log('# # # # ')
    }
    count++
  }
}
