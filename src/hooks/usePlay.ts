import { useEffect, useRef, useState } from 'react'
import { colors } from '../consts'
import { delay, generateNextSequence } from '../utils/utils'
import errorSound from '../assets/audio/error.mp3'

const usePlay = () => {
  const [isStart, setStart] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [currentButton, setCurrentButton] = useState<number | null>(null)
  const [isTurnPlayer, setTurnPlayer] = useState<boolean>(false)
  const [sequence, setSequence] = useState<number[]>([])
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const timeout = useRef<number>()

  const playSound = (sound: HTMLAudioElement) => {
    sound.play()
  }

  const paintButton = async (buttonNumber: number) => {
    setCurrentButton(buttonNumber)
    await delay(1000)
    setCurrentButton(null)
    await delay(200)
  }

  const displayColors = async () => {
    for (const buttonNumber of sequence) {
      playSound(colors[buttonNumber].sound)
      await paintButton(buttonNumber)
    }
  }

  const play = async (color: number, sound: HTMLAudioElement) => {
    if (!isTurnPlayer || error) {
      return
    }

    clearTimeout(timeout.current)

    if (sequence[currentIndex] != color) {
      setError(true)
      setCurrentButton(sequence[currentIndex])
      await new Audio(errorSound).play()
      return
    }

    playSound(sound)

    const newCurrentIndex = currentIndex + 1

    if (newCurrentIndex < sequence.length) {
      setCurrentIndex(newCurrentIndex)
      timeout.current = setTimeout(() => {
        setError(true)
        setCurrentButton(sequence[newCurrentIndex])
        new Audio(errorSound).play()
      }, 8000)
      return
    }

    await delay(1500)
    setTurnPlayer(false)
    setCurrentIndex(0)
  }

  const restart = () => {
    setError(false)
    setCurrentButton(null)
    setTurnPlayer(false)
    setSequence([])
    setCurrentIndex(0)
  }

  const handleStart = () => {
    if (!isStart) {
      setStart(true)
      return
    }

    restart()
  }

  // Se ejecuta al iniciar el juego y cuando el turno del jugador cambia
  useEffect(() => {
    if (isStart && !isTurnPlayer) {
      const nextSequence = generateNextSequence(sequence)
      setSequence(nextSequence)
    }
  }, [isStart, isTurnPlayer])

  // Se deberia ejecutar para que se pinten los botones
  useEffect(() => {
    if (isStart && !error) {
      displayColors().then(() => setTurnPlayer(true))
    }
  }, [sequence])

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [])

  return {
    isTurnPlayer,
    error,
    handleStart,
    play,
    currentButton
  }
}

export default usePlay
