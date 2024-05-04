export default function getNeighbours(row : number, col: number, board : number[][]): void {
  const directions : number[][] = [[-1, 0], [1, 0], [0, 1], [0, -1]]
  const surroundingCells : number[] = []
  const currentCell = board[row][col]
}