/*import logo from './logo.svg';*/
import Canvas from './Canvas';
import './App.css';
import Board from './backend/Board.mjs';
import { useEffect, useState } from 'react';
const colorConversionDict = { 'T': 'brown', 'I': 'blue', 'O': 'purple', 'L': 'orange', 'S': 'green', 'A': 'cyan', 'K': 'yellow', }
const width = 10;
const height = 20;
const board = new Board(width, height)


function App() {
  const [points, setPoints] = useState(0)
  const [level, setLevel] = useState(0)
  useEffect(() => {
    document.addEventListener("keydown", _handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", _handleKeyDown, false);
    }
  }, [])
  const observer = {
    scoreChanged: function (points) {
      setPoints(points)
    },
    levelChanged: function (level) {
      console.log('level', level)
      setLevel(level)
    }
  }
  board.score.addObserver('scorechanged', observer)
  board.score.addObserver('levelchanged', observer)
  const draw = (ctx, frameCount) => {
    /*ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)*/
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "green";
    ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.stroke();
    let blocksize = ctx.canvas.width / width
    let blockheight = ctx.canvas.height / height
    if (blocksize > blockheight) {
      blocksize = blockheight
    }
    let rows = (board.toString()).split('\n')
    for (let r = 0; r < rows.length; r++) {
      let row = rows[r]
      for (let c = 0; c < row.length; c++) {
        const char = row[c]
        if (char === '.') {
          continue
        }
        ctx.fillStyle = colorConversionDict[row[c]]
        ctx.fillRect(c * blocksize, r * blocksize, blocksize, blocksize)
      }
    }
    if (frameCount % (50 - level * 10) == 0) {
      if (board.hasFalling()) {
        board.tick()
      } else {
        board.dropRandom()
      }
    }
  }

  const _handleKeyDown = (e) => {
    const { key, ...rest } = e
    switch (key) {
      case ('a'):
        board.moveLeft()
        break
      case ('w'):
        board.moveDown()
        break
      case ('d'):
        board.moveRight()
        break
      case ('q'):
        board.rotateLeft()
        break
      case ('e'):
        board.rotateRight()
        break
      case ('s'):
        board.moveToBottom()
        break
    }
  }

  return (
    <div style={{ marginLeft: 10 }}>
      <div>a move to left d move to right</div>
      <div>q rotate to left e rotate to right</div>
      <div>s move down space drop to bottom</div>
      <div>points: {points} level: {level}</div>
      <Canvas /*style={styles.canvas}*/ draw={draw} />
      <div>copyright 2022 Juho Taipale</div>
    </div>
  )
}

export default App;
