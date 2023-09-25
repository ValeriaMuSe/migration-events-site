import { useState } from "react"

const GoingInteraction = ({handleGoingClick}) => {
  return (
    <div>
      <p>You're going to this event.</p>
      <button className="button-link" onClick={handleGoingClick}>Changed your mind?</button>
    </div>
  )
}

const InterestedInteraction = ({handleInterestedClick}) => {
  return (
    <>
      <div>
        <p>You're interested this event.</p>
        <button className="button-link" onClick={handleInterestedClick}>Changed your mind?</button>
      </div>
      <button className="going">Going!</button>
    </>
  )
}

const ButtonInteractions = () => {
const [going, setGoing] = useState(false);
const [favorite, setFavorite] = useState(false);
const [interested, setInterested] = useState(false);

const handleGoingClick = () => setGoing(!going);

const handleFavoriteClick = () => {
  setFavorite(!favorite)
};

const handleInterestedClick = () => setInterested(!interested);

  return (
    <>
      <div className="interactions-container">
        {going || interested ? null : (
          <div className="going-and-interested">
            <button className="going" onClick={handleGoingClick}>Going!</button>
            <button className="interested" onClick={handleInterestedClick}>Interested</button>
          </div>
        )}

        <button className={`heart ${favorite ? "heart-blue" : ""}`} 
        aria-label='Favorite' 
        onClick={handleFavoriteClick}>
        </button>
      </div>

      { going ? <GoingInteraction  handleGoingClick={handleGoingClick} /> : null }
      { interested ? <InterestedInteraction  handleInterestedClick={handleInterestedClick} /> : null}
    </>
  )
}

export { ButtonInteractions }