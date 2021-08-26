import React from 'react'

const Card = (props) => {
    console.log(props)
    
    return (
        <>
        <div className = "cards">
            <div className= " card">
                <img  style = {props.style} src = {props.imgSrc} alt = 'image'/>
                <div className = "card__info">
                    <span className="card__category">{props.title}</span>
                    <h3 className = "card__title">{props.sname}</h3>
                    <a href = {props.link} target= "_blank" rel = "link">
                            <button> Watch Now { props.date}</button><p/>
                    </a>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Card
