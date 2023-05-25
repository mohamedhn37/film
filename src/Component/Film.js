import React  from 'react'


export const Film = (props) => {
  return (
    <div className="col-md-3 mt-5">
        <div className="card">
            <img src={props.image} className="card-img-top img" alt='img'/>
            <div className='card-body'>
                <h5 className='card-title'>{props.title}</h5>
                <p className='card-text'>{props.description}</p>
                <p className='card-text'>la durée est {props.duration}</p>
                <p className='card-text'>prix est : {props.price}</p>
                <a href="/#" className="btn btn-primary">Voir Film</a>
            </div>
        </div>
    </div>
  )
}
