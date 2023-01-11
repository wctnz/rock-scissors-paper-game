import styles from "../styles/Index.module.css"
import React, { useState } from 'react';

const Index = () => {
    const [choiceH, setChoiceH] = useState("")
    const [choiceC, setChoiceC] = useState("")
    const [result, setResult] = useState("")
    const [loader, setLoader] = useState(false)
    const [counterH, setCounterH] = useState(0)
    const [counterC, setCounterC] = useState(0)

    const words = ["Rock", "Scissors", "Paper"]

    let word = words[Math.floor(Math.random() * words.length)];

    const handleChoiceHSelect = (event) => {
        setResult("")
        setLoader(false)
        setChoiceH(event.target.value)
        setChoiceC(word)
    }

    let combo = choiceH + choiceC

    const handlePlayClick = () => {
        setLoader(true)
        
        if (combo === "PaperPaper" || combo === "ScissorsScissors" || combo === "RockRock") {
            setTimeout(() => {
                setResult("Ничья!")
                setLoader(false)
            }, 3000)
        } else
            if (combo === "PaperRock" || combo === "ScissorsPaper" || combo === "RockScissors") {
                setTimeout(() => {
                    setResult("Победа!")
                    setCounterH(prev=>prev+1)
                    setLoader(false)
                }, 3000)
            } else
                if (combo === "PaperScissors" || combo === "ScissorsRock" || combo === "RockPaper") {
                    setTimeout(() => {
                        setResult("Сегодня ты проиграл!")
                        setCounterC(prev=>prev+1)
                        setLoader(false)
                    }, 3000)
                }
                setChoiceH("")
    }

    return (
        <>
            <div>
                <form>
                    <select className={styles.select} value={choiceH} onChange={handleChoiceHSelect}>
                        <option value="">Сделайте выбор</option>
                        <option value="Rock">камень</option>
                        <option value="Scissors">ножницы</option>
                        <option value="Paper">бумага</option>
                    </select>
                </form>
                <div className={styles.scoreCard}>
                <h1 className={styles.score}>Счет</h1>
                {<p>Вы: {counterH} Компьютер: {counterC}</p>}
                </div>
                
                {choiceH && <h1>Вы выбрали: {choiceH}</h1>}
                {result &&<h1>{choiceC}</h1>}
                {loader ? <h1>Компьютер выбирает...</h1> : <h1>{result}</h1>}
            
                <button className={styles.btn} disabled={!choiceH} onClick={handlePlayClick}>Играть</button>
                
            </div>
        </>
    );
};

export default Index;
