import styles from './Keyboard.module.css'

const KEYS = 'abcdefghijklmnopqrstuvwxyz'.split('')

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

const Keyboard = ({
  disabled,
  activeLetters,
  inactiveLetters,
  addGuessedLetter
}: KeyboardProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr)',
        gap: '.5rem'
      }}
    >
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`
              ${styles.btn} 
              ${isActive ? styles.active : ''} 
              ${isInactive ? styles.inactive : ''}
            `}
            disabled={disabled || isInactive || isActive}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard
