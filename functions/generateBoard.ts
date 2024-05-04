export default function generateBoard(size: number): number[][] {
  const boardArray: number[][] = []
  for (let i = 0; i < size; ++i) {
    boardArray.push(Array(size).fill(0))
  }
  return boardArray
}