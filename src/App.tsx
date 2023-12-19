import './App.css'
import Board from './components/game/Board'

const App = () => {
  return (
    <main style={{ height: '100dvh', paddingTop: '45px' }}>
      <h1>Simon Dice</h1>
      <Board />
    </main>
  )
}

export default App
