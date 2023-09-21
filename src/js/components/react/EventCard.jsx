import '../../../styles/css/styles.css'

const EventCard = (props) => {
    const { image, title, date, address, city, state, price } = props;
  
    return (
      <div>
        <img src={image} />
        <div class="gallery__text">
          <div class="event__info">
            <h3>{title}</h3>
            <p class="date">{date}.</p>
            <p>{address} • {city}, {state}.</p>
            <strong>{price}</strong>
          </div>
        </div>
      </div>
    );
  }
  
  export { EventCard };