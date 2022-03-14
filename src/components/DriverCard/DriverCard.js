import './DriverCard.css';

export function DriverCard(props) {

    const renderRating = () => {
        let stars = ''
        for (let i = 1; i <= 5; i++) {
            if(Math.round(props.rating) < i ) {
                stars += '☆'
           } else {
                stars += '★'
           }
        }
        return stars
    }

    return(
        <div className="driverCard">
            <img style={{borderRadius: '50%', width: '150px', height: '150px', margin: '25px'}}src={props.img} alt={props.img}/>
            <div className="driverCardInfo">
                <h2>{props.name}</h2>
                <h2>{renderRating()}</h2>
                <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
            
            
        </div>
    )
}