import { Store } from "pullstate";

export const FlightStore = new Store({
  // --- Search Inputs ---
  // Default empty rakhle placeholder bhalo dekhay, kintu apni chaile default code o rakhte paren
  from: "",
  to: "",

  // Standard format (YYYY-MM-DD) input type="date" er jonno dorkar
  departureDate: new Date().toISOString().split("T")[0],

  // --- Selection States ---
  tripType: "One Way",
  passengerCount: "1 Passenger",
  cabinClass: "Economy",
  activeTab: "Flight",

  // --- API & UI States ---
  airports: [], // Airport suggestions er jonno
  airlines: [], // Airlines information er jonno
  filteredFlights: [], // Search korar por result ekhane thakbe
  isLoading: false,

  // --- Holiday Packages (Static Data) ---
  holidayPackages: [
    {
      id: 1,
      city: "Paris",
      price: 60,
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_6_lfb0fk.png",
      description:
        "Famous for Eiffel Tower, Louvre Museum, Notre-Dame Cathedral.",
    },
    {
      id: 2,
      city: "Rome",
      price: 50,
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_5_gsofek.png",
      description: "Famous for Colosseum, Vatican City, St. Peter's Basilica.",
    },
    {
      id: 3,
      city: "Barcelona",
      price: 40,
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_1_ygokbh.png",
      description: "Famous for La Sagrada Familia, Park Guell, Gothic Quarter.",
    },
    {
      id: 4,
      city: "London",
      price: 75,
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_4_uwg0qh.png",
      description: "Famous for Big Ben, London Eye, and historic culture.",
    },
    {
      id: 5,
      city: "Zimbabwe",
      price: 90,
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1764936495/image_3_otfmrr.png",
      description: "Famous for Victoria Falls and amazing wildlife safaris.",
    },
    {
      id: 6,
      city: "Pakistan",
      price: 55,
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1764936497/image_vgytkr.png",
      description: "Famous for Faisal Mosque, Hunza Valley, and Karakoram.",
    },
    {
      id: 7,
      city: "Nature Peaks",
      price: 110,
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1758142992/samples/landscapes/nature-mountains.jpg",
      description: "Beautiful mountain landscapes and hiking trails.",
    },
    {
      id: 8,
      city: "Mountain Escape",
      price: 95,
      image:
        "https://res.cloudinary.com/bytestore/image/upload/v1758142998/cld-sample-2.jpg",
      description: "Experience the serenity of snowy mountain peaks.",
    },
  ],
});
