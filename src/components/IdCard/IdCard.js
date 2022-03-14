import './IdCard.css'

export function IdCard ({lastName, firstName, gender, height, birth, picture}) {
    return (
        <div className="IdCardContainer">
            <div className="IdCardPic">
                <img src={picture} alt={picture}/>
            </div>
            <div className="IdCardInfo">
                <p><b>First name:</b> {firstName}</p>
                <p><b>Last name:</b> {lastName}</p>
                <p><b>Gender:</b> {gender}</p>
                <p><b>Height:</b> {height}cm</p>
                <p><b>Birthday:</b> {birth}</p>
            </div>
            
        </div>
    )
}