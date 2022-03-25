import { useState } from 'react'

export function Carousel (props) {
    console.log(props.images[0])

    const [imagePosition, setImagePosition] = useState(0)
    const [image, setImage] = useState(props.images[imagePosition])

    const handleNextImageLeft = () => {
        imagePosition !== 0 ? setImagePosition(imagePosition - 1) : setImagePosition(props.images.length - 1)
        setImage(props.images[imagePosition])
    }

    const handleNextImageRight = () => {
        imagePosition < props.images.length - 1 ? setImagePosition(imagePosition + 1) : setImagePosition(0)
        setImage(props.images[imagePosition])
    }

    return (
        <div>
            <div style={{margin: '0px 40px', display: 'flex', gap: '20px'}} className='leftRightBtns'>
                <button className='nextImgBtn' onClick={handleNextImageLeft}>LEFT</button>
                <button className='nextImgBtn' onClick={handleNextImageRight}>RIGHT</button>
            </div>
            <img style={{margin: '20px 40px'}} src={image} alt={image} />
        </div>
    )
}