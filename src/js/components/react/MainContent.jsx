import { EventCard } from "./EventCard"
const MainContent = () => {
  return (
    <main id="main-gallery" className="main-gallery main-container">
      <EventCard  image="https://res.cloudinary.com/iireii/image/upload/v1686104576/Cetav/events/music-001_w50seu.jpg"  title="2023 Dallas Soul Flower Music Fest" date="1687032000000" address="Main Street Garden Park" city="Dallas"  state="TX" price="$10" />
      <EventCard  image="https://res.cloudinary.com/iireii/image/upload/v1686105236/Cetav/events/music-002_wex6ub.jpg"  title="Hookie DC (2023): Cloud 9" date="1686938400000" address="Festival Grounds" city="Fort Washington"  state="MD" price="$60"/>
      <EventCard image="https://res.cloudinary.com/iireii/image/upload/v1686105556/Cetav/events/music-004_h768uj.jpg" title="Kostume Kult Presents: A.I. A.I. Oh! - Black & Light Ball 2023" date="628644290997" address="The Tailor Public House" city="New York"  state="NY" price="$44.82"/>
      <EventCard image="https://res.cloudinary.com/iireii/image/upload/v1686105556/Cetav/events/music-003_ua6wne.jpg" title="Jouvert In June" date="1686412800000" address="Soca Dome" city="Hartford"  state="CT" price="$30"/>
    </main>
  )
}

export { MainContent}