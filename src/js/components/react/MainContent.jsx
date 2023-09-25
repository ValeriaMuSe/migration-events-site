import { EventCard } from "./EventCard"
const MainContent = () => {
  const response =
    [{
      "id": "232424737647",
      "title": "2023 Dallas Soul Flower Music Fest",
      "image": "https://res.cloudinary.com/iireii/image/upload/v1686104576/Cetav/events/music-001_w50seu.jpg",
      "date": 1687032000000,
      "location": {
        "city": "Dallas",
        "state": "TX",
        "address": "Main Street Garden Park"
      },
      "price": 10
    },
    {
      "id": "565049637677",
      "title": "Hookie DC (2023): Cloud 9",
      "image": "https://res.cloudinary.com/iireii/image/upload/v1686105236/Cetav/events/music-002_wex6ub.jpg",
      "date": 1686938400000,
      "location": {
        "city": "Fort Washington",
        "state": "MD",
        "address": "Festival Grounds"
      },
      "price": 60
      },
      {
        "id": "628644290997",
        "title": "Kostume Kult Presents: A.I. A.I. Oh! - Black & Light Ball 2023",
        "image": "https://res.cloudinary.com/iireii/image/upload/v1686105556/Cetav/events/music-004_h768uj.jpg",
        "date": 628644290997,
        "location": {
          "city": "New York",
          "state": "NY",
          "address": "The Tailor Public House"
        },
        "price": 44.82
        },
        {
          "id": "559192468727",
          "title": "Jouvert In June",
          "image": "https://res.cloudinary.com/iireii/image/upload/v1686105556/Cetav/events/music-003_ua6wne.jpg",
          "date": 1686412800000,
          "location": {
            "city": "Hartford",
            "state": "CT",
            "address": "Soca Dome"
          },
          price:30
        }
  ];

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