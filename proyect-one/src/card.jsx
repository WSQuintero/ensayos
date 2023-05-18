import './card.css'
/* eslint-disable react/prop-types */
export function Card ({ image, actor, name }) {
  return (
    <article className="card">
      <img src={image} className="cardImage" />
      <h1>{name}</h1>
      <span>{actor}</span>
    </article>
  )
}
