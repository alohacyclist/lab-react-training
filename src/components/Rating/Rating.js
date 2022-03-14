import './Rating.css'

export function Rating(props) {
    
    const renderRating = () => {

        let stars = ''
        for (let i = 1; i <= 5; i++) {
           Math.round(props.children) < i ? stars += '☆' : stars += '★'
        }
        return stars
    }
    
    return (
        <div className="rating">
            <h2>{renderRating()} - Rating: {(props.children)}</h2>
        </div>
    )
}