import green_sound from './assets/audio/green.mp3'
import red_sound from './assets/audio/red.mp3'
import blue_sound from './assets/audio/blue.mp3'
import yellow_sound from './assets/audio/yellow.mp3'
import { Color } from './typs'

export const colors = {
  1: {
    hex: '#1B5E20',
    sound: new Audio(green_sound)
  },
  2: {
    hex: '#B71C1C',
    sound: new Audio(red_sound)
  },
  3: {
    hex: '#0D47A1',
    sound: new Audio(blue_sound)
  },
  4: {
    hex: '#F9A825',
    sound: new Audio(yellow_sound)
  }
} as {
  [key: number]: Color
}
