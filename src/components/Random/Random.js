import './Random.css'

export function Random(props) {

    let number = Math.floor(Math.random() * (props.max - props.min)) + props.min;

    return(
        <div className="randomNumber">
            <p>Your Random Number between {props.min} and {props.max} is: <strong>{number}</strong></p>
        </div>
    )
}