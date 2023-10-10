import React from "react";
import { Header } from "./Header";
import { MainContent } from "./MainContent";
import EventCard from "./EventCard";
import useFetchEvents from "./fetchEvents";

const Home = () => {
  const { categoryData, handleTabChange } = useFetchEvents();

  return (
    <>
      <Header onTabChange={handleTabChange} />
      <h1>Home</h1>
      <MainContent>
        <div className="container error-container gallery home-gallery">
          {categoryData.map((event) => (
            <EventCard
              key={event.id}
              eventId={event.id}
              price={event.price}
              date={event.date}
              title={event.title}
              image={event.image}
              location={event.location}
            />
          ))}
        </div>
      </MainContent>
    </>
  );
};

export default Home;
