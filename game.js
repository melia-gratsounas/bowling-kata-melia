// Score 64 (simple game):
// const frames = [
// [2, 0],
//[4, 2],
//[6, 0],
//[2, 4],
//[1, 5],
//[7, 0],
//[5, 2],
//[7, 0],
//[2, 6],
// [8, 1],
// ]

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

// console.log(totalScore(frames))

// Score 71 (with spares):
// const frames = [
// [6, 1],
//[4, 0],
//[6, 4],
//[2, 7],
//[3, 5],
//[5, 0],
//[5, 5],
//[0, 0],
//[1, 6],
//[7, 2],
//]

function isSpare(frame) {
  return frame[0] + frame[1] === 10
}

function scoreWithSpares(frames) {
  let totalScore = 0

  for (let i = 0; i < frames.length - 1; i++) {
    const spareFrame = frames[i]
    // If it's a spare, score = 10 + first ball of next frame
    // Otherwise, just add the pins knocked down
    if (isSpare(spareFrame)) {
      totalScore += 10 + frames[i + 1][0]
    } else {
      totalScore = totalScore + frames[i][0] + frames[i][1]
    }
  }

  const lastFrame = frames[frames.length - 1]

  totalScore += lastFrame[0] + lastFrame[1]

  return totalScore
}

// console.log(scoreWithSpares(frames))

// Score 104 (with spares and strikes):
const frames = [
  [6, 4],
  [8, 0],
  [10, 0],
  [2, 7],
  [5, 5],
  [4, 0],
  [10, 0],
  [2, 1],
  [2, 6],
  [4, 4],
]

function isStrike(frame) {
  return frame[0] === 10
}

function scoreWithStrikesAndSpares(frames) {
  let totalScore = 0

  for (let i = 0; i < frames.length - 1; i++) {
    const strikeAndSpareFrame = frames[i]
    // If it's a strike, score = 10 + next two balls
    if (isStrike(strikeAndSpareFrame)) {
      totalScore += 10 + frames[i + 1][0] + frames[i + 1][1]
      // If it's a spare, score = 10 + next one ball
    } else if (isSpare(strikeAndSpareFrame)) {
      totalScore += 10 + frames[i + 1][0]
    } else {
      totalScore += strikeAndSpareFrame[0] + strikeAndSpareFrame[1]
    }
  }

  const lastFrame = frames[frames.length - 1]
  totalScore += lastFrame[0] + lastFrame[1]

  return totalScore
}

console.log(scoreWithStrikesAndSpares(frames))
