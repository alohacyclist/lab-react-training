import './CreditCard.css'
import visa from '../../assets/images/visa.png'
import mastercard from '../../assets/images/mastercard.png'

export function CreditCard(props) {

    let fourDigits = props.number.substr(-4)

    let cardTypeLogo;
    props.type === 'Visa' ? cardTypeLogo = visa : cardTypeLogo = mastercard;
    
    let textColor;
    props.type === 'Visa' ? textColor = 'white' : textColor = 'black';
    
    return (
        <div style={{backgroundColor: `${props.bgColor}`}} className="creditCard">
            <img style={{width: "50px", color:{textColor}}} src={cardTypeLogo} alt={cardTypeLogo} />
            <h3>**** **** **** {fourDigits}</h3>
            <div className="creditCardInfo">
                <p>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</p>
                <p>{props.owner}</p>
            </div>
            
        </div>
    )
}