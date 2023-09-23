import formatDate from '../../utils/format-date';

const EventCard = (props) => {
    return (
      <div>
      <img src={props.image} alt={props.title}/>
      <div className="gallery__text">
        <div className="event__info">
          <h3>{props.title}</h3>
          {/* <p className="date">${formatDate(new Date(props.date))}.</p> */}
          <p>{props.location.address} • {props.location.city}, {props.location.state}.</p>
          <strong>{props.price}</strong>
        </div>
        <div className="interactions-container" data-id="${id}">
          <div className="going-and-interested" data-id="${id}">
            <button className="going">Going!</button>
            <button className="interested">Interested</button>
          </div>
          <button className="heart" aria-label='Favorite'></button>
        </div>
      </div>
      </div>
    );
  }
  
  export { EventCard };