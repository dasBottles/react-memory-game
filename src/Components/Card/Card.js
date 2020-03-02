import React from 'react'

const style = {
    width: '18rem'
}

const Card = (props) => {
    const {image, alt} = props;
    return (
        <div className="card img-fluid" style={style}>
            <img src={image} className="card-img-top" alt={alt} />
        </div>
    )
}

export default Card
