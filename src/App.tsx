import { useState } from 'react'
import words from './words'
import Keyboard from './components/Keyboard'
import { englishAlphabet } from './conts'

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(():string => {
    return words[Math.floor(Math.random()* words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])


  // console.log(wordToGuess);
  return (
    <Keyboard alphabet={englishAlphabet}/>
  )
}

export default App
