import { EventCard } from "./EventCard"
const MainContent = () => {
  return (
    <main id="main-gallery" className="main-gallery main-container">
      <EventCard  image="https://knassbani2.execute-api.us-east-2.amazonaws.com/events/"  title="my title" date="21/09/2023" address="mingo" city="san jose"  state="a" price="$450" />
      <EventCard  title="my title1" date="22/09/2023" address="mingo1" city="Heredia"  state="a" price="$460"/>
      <EventCard title="my title2" date="23/09/2023" address="mingo2" city="Cartago"  state="a" price="$470"/>
      <EventCard title="my title3" date="24/09/2023" address="mingo3" city="Limon"  state="a" price="$480"/>
    </main>
  )
}

export { MainContent}