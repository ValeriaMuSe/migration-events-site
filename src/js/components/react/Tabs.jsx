import { EventCard } from "./EventCard";
import useFetchEvents from "./fetchEvents";

const Tabs = () => {
  const { categoryData, handleTabChange } = useFetchEvents();

  return (
    <>
      <div id="tabs" className="header__tabs">
        {categories.map(({ category, label }) => {
          return (
            <button
              data-category={category}
              key={category}
              type="button"
              onClick={handleTabChange}
            >
              {label}
            </button>
          );
        })}
      </div>
      <div>
        <ul className="container error-container gallery home-gallery">
          {categoryData.map((category) => (
            <EventCard
              key={category.id}
              price={category.price}
              date={category.date}
              title={category.title}
              image={category.image}
              location={category.location}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export { Tabs }