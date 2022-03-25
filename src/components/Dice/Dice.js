import { useState } from "react"
import emptyDice from '../../assets/images/dice-empty.png'
import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'

export function Dice () {
    const [dice, setDice] = useState(emptyDice)
    const diceValues = [dice1, dice2, dice3, dice4, dice5, dice6]

    const handleClick = () => {
        const randomDice = Math.floor(Math.random()*(diceValues.length - 1)+1)
        const displayDice = diceValues[randomDice]
        setTimeout(() => {
            console.log(randomDice)
            setDice(displayDice)
        }, 1000)
    }

    return (
        <div>
            <img src={dice} alt={dice} onClick={handleClick}/>
        </div>
    )
}