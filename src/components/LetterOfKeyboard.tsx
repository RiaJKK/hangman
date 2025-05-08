import styles from "../styles/LetterOfKeyboard.module.scss"

interface LetterOfKeyboard {
    letter: string;
    isChoosen?: boolean
}

const LetterOfKeyboard = ({letter, isChoosen = false} : LetterOfKeyboard) => {
    return ( 

    <div className={`${styles.letter} ${isChoosen ? styles.choosen_letter : ""}`}>{letter}</div>

 );
}
 
export default LetterOfKeyboard;