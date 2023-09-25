import { useState } from "react"

const GoingInteraction = () => {
  return (
    <div>
      <p>You're going to this event.</p>
      <button className="button-link">Changed your mind?</button>
    </div>
  )
}

const InterestedInteraction = () => {
  return (
    <>
      <div>
        <p>You're interested this event.</p>
        <button className="button-link">Changed your mind?</button>
      </div>
      <button className="going">Going!</button>
    </>
  )
}

const ButtonInteractions = () => {
const [going, setGoing] = useState(false);
const [favorite, setFavorite] = useState(false);
const [interested, setInterested] = useState(false);

const handleGoingClick = () => setGoing(true);

const handleFavoriteClick = () => {
  setFavorite(!favorite)
};

const handleInterestedClick = () => setInterested(true);

  return (
    <>
      <div className="interactions-container">
        <div className="going-and-interested">
          <button className="going" onClick={handleGoingClick}>Going!</button>
          <button className="interested" onClick={handleInterestedClick}>Interested</button>
        </div>
        <button className={`heart ${favorite ? "heart-blue" : ""}`} 
        aria-label='Favorite' 
        onClick={handleFavoriteClick}>
        </button>
      </div>

      { going ? <GoingInteraction /> : null }
      { interested ? <InterestedInteraction /> : null}
    </>
  )
}

export { ButtonInteractions }