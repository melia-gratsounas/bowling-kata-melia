# Bowling kata

In this challenge we're going to score a bowling game, given a set of frames. Easier said than done.

## Rules of bowling

Depending on where you're from (or your interests) you might either be very familiar or not at all certain about the rules of bowling. 

<details>
  <summary>The rules of ten-pin bowling</summary>
  
  Here we're **not** speaking of cricket, or lawn bowls! Ten pins in a lane, rental shoes that smell of disinfectant, coloured balls with holes that never seem to quite fit your fingers... **that's** the kind of bowling we want to score.

  * Each player usually gets two balls per **frame**. There are ten frames.
  * If a player knocks down all the pins with **one** ball, that's a **strike**.
    * A strike scores ten points **plus the score for the next two balls**.
  * If a player knocks down all the pins with **two** balls, that's a **spare**.
    * A spare scores ten points **plus the score for the next ball**.
  * If a player doesn't knock down all the pins in a frame, they just get one point for each pin they do manage to knock down.
  * On the tenth frame, if the first two balls contain a strike or make a spare, the player gets a third ball.
  * The maximum possible score (a "perfect game" of all strikes) is 300.

  [This WikiHow page](http://www.wikihow.com/Score-Bowling) has some more detail on how to keep score.
</details>
<br />

----

## Choose Your Challenge Level

This kata can be approached in two ways depending on your confidence level, you can also start with it being an independent challenge, and swap later on.

<details>
  <summary><strong>🚀 Option A: Independent Challenge</strong> - Figure it out yourself</summary>
  
  If you're feeling confident and want to tackle the full problem, jump straight to the [Requirements](#requirements) section below. This is the traditional kata approach - you get the problem description and examples, then solve it your way.
  
  This is a great choice for students who want to practise breaking down complex problems independently.
  
</details>

<details>
  <summary><strong>🛤️ Option B: Guided Step-by-Step</strong> - Build up gradually</summary>
  
  If you're finding this challenge overwhelming or want more structure, follow the Step-by-Step Guide below. We'll break the problem into smaller, manageable pieces with validation at each step.
  
  Go with this option if you're uncertain on where to start or how to approach this problem
  
</details>

---

<details>
  <summary><strong>📖 Step-by-Step Guide</strong> - Click to expand</summary>

*Choose this path if you want guided assistance building up to the full solution.*

### Overview: What We're Building

We need to calculate a bowling score by handling three types of frames:
1. **Normal frames** - Just add up the pins knocked down  
2. **Spares** - 10 pins in two balls, plus bonus from next ball
3. **Strikes** - 10 pins in one ball, plus bonus from next two balls

### Step 1: Basic Frame Scoring

Let's start simple - score frames with NO strikes or spares.

**Write your code in `game.js`** - you can uncomment and complete the guided functions provided there.

**Your task:** Write a function that calculates the total score for simple frames.

```javascript
function scoreSimpleGame(frames) {
  // Your code here
  // For now, ignore strikes and spares - just add up all the pins
}

// Test it with this simple game (expected score: 64)
const simpleFrames = [
  [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
]
console.log(scoreSimpleGame(simpleFrames)) // Should output: 64
```

**How to test:** Add this code to your `game.js`, then run `node game.js` to see the output.

**Note about the code examples:** In the steps below, we show example functions and test calls. These are just demonstrations - you should write your actual code in `game.js` and test it there by running the file.

**Checkpoint:** Before moving on, make sure your function correctly adds up all the individual pin counts.

### Step 2: Identify Spares

Now let's detect when a frame is a spare (two balls total 10 pins).

**Your task:** Write a function to identify spare frames.

```javascript
function isSpare(frame) {
  // Your code here
  // Return true if this frame is a spare (two balls sum to 10)
}

function scoreWithSpares(frames) {
  let totalScore = 0
  
  for (let i = 0; i < frames.length - 1; i++) { // Note: skip last frame for now
    // Your code here
    // If it's a spare, score = 10 + first ball of next frame
    // Otherwise, just add the pins knocked down
  }
  
  return totalScore
}

// Test it with this game that has spares (expected score: 71)
const framesWithSpares = [
  [6, 1], [4, 0], [6, 4], [2, 7], [3, 5], [5, 0], [5, 5], [0, 0], [1, 6], [7, 2]
]
console.log(scoreWithSpares(framesWithSpares)) // Should output: 62 (with 7 and 2 in the uncounted last frame to make up 71)
```

**Checkpoint:** Your function should correctly identify `[6, 4]` and `[5, 5]` as spares and add the appropriate bonus.

### Step 3: Identify Strikes

Now add strike detection (first ball knocks down 10 pins).

**Your task:** Write functions to identify strikes and calculate their bonus.

```javascript
function isStrike(frame) {
  // Your code here
  // Return true if first ball is 10
}

function scoreWithStrikesAndSpares(frames) {
  let totalScore = 0
  
  for (let i = 0; i < frames.length - 1; i++) { // Still skipping 10th frame
    // Your code here
    // If it's a strike, score = 10 + next two balls
    // If it's a spare, score = 10 + next one ball  
    // Otherwise, just add the pins
  }
  
  return totalScore
}

// Test it (expected score: 104)
const framesWithStrikes = [
  [6, 4], [8, 0], [10, 0], [2, 7], [5, 5], [4, 0], [10, 0], [2, 1], [2, 6], [4, 4]
]
console.log(scoreWithStrikesAndSpares(framesWithStrikes)) // Should output: 96 (with 4 and 4 in the uncounted last frame to make up 104)
```

**Checkpoint:** Your function should handle both strikes (`[10, 0]`) and spares, calculating the correct bonuses.

### Step 4: Handle Consecutive Strikes

The tricky part - when you have strikes in a row, the bonus calculation gets complex.

**The Problem:** When you have consecutive strikes, finding the "next two balls" becomes challenging:
- If frame 4 is a strike `[10, 0]`, you need the next two balls
- If frame 5 is also a strike `[10, 0]`, the first bonus ball is 10, but what's the second?
- You need to look at frame 6 for the second bonus ball!

**Example walkthrough:**
```javascript
// Frame 6: [10, 0] (strike) - need next two balls
// Frame 7: [10, 0] (strike) - first bonus ball = 10
// Frame 8: [5, 2] (normal) - second bonus ball = 5
// So frame 6 score = 10 + 10 + 5 = 25
```

**Your task:** Write helper functions to handle this complexity.

```javascript
function getNextTwoBalls(frames, frameIndex) {
  // Helper function to get the next two balls for strike bonus
  // Hint: You might need to look ahead more than one frame
  
  let balls = []
  let nextFrameIndex = frameIndex + 1
  
  // Your code here:
  // 1. Get first ball from next frame
  // 2. If next frame is a strike, get first ball from frame after that
  // 3. If next frame is normal, get second ball from same frame
  // 4. Return array of two ball values
  
  return balls
}

function getNextOneBall(frames, frameIndex) {
  // Helper function for spare bonus - simpler than strikes!
  // Just need the first ball of the next frame
}

function scoreNineFrames(frames) {
  let totalScore = 0
  
  for (let i = 0; i < 9; i++) { // Only frames 1-9 for now
    // If it's a strike, score = 10 + next two balls
    // If it's a spare, score = 10 + next one ball  
    // Otherwise, just add the pins

    // Hint: Be careful with consecutive strikes!
  }
  
  return totalScore
}

// Test it (expected score: 119)
const framesWithDoubleStrike = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]
console.log(scoreNineFrames(framesWithDoubleStrike)) // Should output: 111 (with 4 and 4 in the last frame to make 119)
```

**Debugging tip:** If you're getting the wrong score, trace through manually:
- Frame 6: strike `[10, 0]` → 10 + (next two balls: 10 + 10) = 30
- Frame 7: strike `[10, 0]` → 10 + (next two balls: 10 + 5) = 25

**Checkpoint:** Your function should correctly handle consecutive strikes and calculate the right bonuses.

### Step 5: The 10th Frame 

Finally, handle the special 10th frame rules.

**Your task:** Complete the full scoring function including the 10th frame.

```javascript
function scoreBowlingGame(frames) {
  // Your complete solution
  // Frames 1-9: Use your logic from Step 4
  // Frame 10: Special rules - can have up to 3 balls if strike/spare
}

// Test with 10th frame strike (expected score: 141)
const framesWithTenthStrike = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
]
console.log(scoreBowlingGame(framesWithTenthStrike)) // Should output: 141

// Test perfect game (expected score: 300)
const perfectGame = [
  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
]
console.log(scoreBowlingGame(perfectGame)) // Should output: 300
```

**Final Checkpoint:** Your complete solution should handle all test cases correctly!

</details>

---

## Requirements

### 1. Score a game

We can write our code in `game.js`

- [ ] Using what we know about JavaScript, write a program which scores a full game, given all frames
  <details style="padding-left: 2em">
    <summary>More about scoring a game</summary>

    Assume we already know how many pins were knocked down in each frame. You can come up with your own way to represent that data, but we suggest you use something like this example:

    ```js
      const frames = [
        [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
      ]
    ```

    The score for this game is 119.
  </details>

### 2. Complex endings

- [ ] Try scoring a game with a more complex ending
  <details style="padding-left: 2em">
    <summary>A game with a complex ending</summary>

    The frames of a game with a more complex ending might look like:
    ```js
      const frames = [
        [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
      ]
    ```
    
    The score for this game is 141.
  </details>

### 3. A perfect game

- [ ] Try scoring a perfect game
  <details style="padding-left: 2em">
    <summary>A perfect game</summary>

    The frames of a perfect game would look like:
    ```js
    const frames = [
      [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
    ]
    ```

    The score for this game is 300.
  </details>

If you would benefit from an interactive illustration, check out this [Bowling Score Calculator](http://www.bowlinggenius.com/).

---
## Checking your work

If we've written our code in `game.js`, we can execute it by running:
```
node game.js
```
Remember, we will only see output from running our `game.js` file if our code has `console.log` calls.

---
[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=bowling-kata)
