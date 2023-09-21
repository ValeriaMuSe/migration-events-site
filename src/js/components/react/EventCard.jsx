import '../../../styles/css/styles.css'

const EventCard = (props) => {
    const { image, title, date, address, city, state, price } = props;
  
    return (
      <div className='gallery '>
        <div className='gallery__card '>
        <img src={image} />
        <div className="gallery__text">
          <div className="event__info">
            <h3>{title}</h3>
            <p className="date">{date}.</p>
            <p>{address}  {city}, {state}.</p>
            <strong>{price}</strong>
          </div>
          </div>
        </div>
       
      </div>
      
    );
  }
  
  export { EventCard };