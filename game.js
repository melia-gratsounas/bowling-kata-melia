// Score 64 (simple game):
const frames = [
  [2, 0],
  [4, 2],
  [6, 0],
  [2, 4],
  [1, 5],
  [7, 0],
  [5, 2],
  [7, 0],
  [2, 6],
  [8, 1],
]

function scoreBasicFrame(frame) {
  return frame[0] + frame[1]
}

function totalScore(gameFrames) {
  let total = 0
  gameFrames.forEach((frame) => {
    total += scoreBasicFrame(frame)
  })
  return total
}

console.log(totalScore(frames))
