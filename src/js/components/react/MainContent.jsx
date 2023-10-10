import { EventCard } from "./EventCard"
const MainContent = () => {
  return (
    <main id="main-gallery" className="main-gallery main-container">
      {
      response.map((response) => {
      return <EventCard className="gallery" key={response.id} title={response.title} image={response.image} date={response.date} location={response.location} price={response.price} />
    })
}
    </main>
  )
}

export { MainContent}