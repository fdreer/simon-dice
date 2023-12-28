import './App.css'
import Footer from './components/Footer'
import Board from './components/game/Board'

const App = () => {
  return (
    <>
      <main>
        <h1>Simon Dice</h1>
        <Board />
      </main>
      <Footer />
    </>
  )
}

export default App
