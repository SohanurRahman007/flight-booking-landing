import { Store } from "pullstate";

export const FlightStore = new Store({
  // Search Inputs
  from: "LHR - London Heathrow Airport",
  to: "KHI - Karachi Airport",
  departureDate: "December 29, 2025",

  // Selection States
  tripType: "One Way",
  passengerCount: "1 Passenger",
  cabinClass: "Economy",
  activeTab: "Flight",

  // API Data
  airports: [],
  isLoading: false,
});
