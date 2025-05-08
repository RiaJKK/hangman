import styles from "../styles/Keyboard.module.scss"
import LetterOfKeyboard from "./LetterOfKeyboard";

interface Keyboard {
    alphabet: string[];
}

const Keyboard = ({alphabet} : Keyboard) => {
    return ( 
    <div className={styles.keyboard}>
        {alphabet.map((letter) => {
            return <LetterOfKeyboard letter={letter}/>
        })}
    </div> );
}
 
export default Keyboard;