import formatDate from '../../utils/format-date';
import { ButtonInteractions } from './ButtonInteractions';

const EventCard = (props) => {
  const eventDate = new Date(props.date);  
  
  return (
    <div>
      <img src={props.image} alt={props.title}/>
      <div className="gallery__text">
        <div className="event__info">
          <h3>{props.title}</h3>
          <p className="date">{formatDate(eventDate)}</p>
          <p>{props.location.address} • {props.location.city}, {props.location.state}.</p>
          <strong>{props.price}</strong>
        </div>
        <ButtonInteractions />
      </div>
    </div>
    );
  }
  
  export { EventCard };