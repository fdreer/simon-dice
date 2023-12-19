import { StartButton, StyledButton } from './Button'
import { colors } from '../../consts'
import usePlay from '../../hooks/usePlay'

const Board = () => {
  const { play, handleStart, currentButton } = usePlay()

  const onPlay = (color: number, sound: HTMLAudioElement) => {
    play(color, sound)
  }

  return (
    <>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '15px',
          paddingBottom: '20px'
        }}
      >
        <StartButton onClick={() => handleStart()} />
        <span>START / RESTART</span>
      </section>
      <section
        style={{
          width: '300px',
          height: '300px',
          position: 'relative'
        }}
      >
        {Object.entries(colors).map(([color, { hex, sound }], i) => (
          <StyledButton
            key={color}
            $hex={hex}
            $i={i}
            $active={currentButton === i + 1}
            onClick={() => {
              onPlay(color, sound)
            }}
          />
        ))}
      </section>
    </>
  )
}

export default Board
