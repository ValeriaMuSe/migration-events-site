const EventCard = (props) => {
    const { image, title, date, address, city, state, price } = props;
  
    return (
      <div>
        <img src={image} />
        <div className="gallery__text">
          <div className="event__info">
            <h3>{title}</h3>
            <p className="date">{date}.</p>
            <p>{address} • {city}, {state}.</p>
            <strong>{price}</strong>
          </div>
        </div>
      </div>
    );
  }
  
  export { EventCard };