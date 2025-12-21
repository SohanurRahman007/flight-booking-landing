const BASE_URL = "https://serviceapi.b2b.innovatedemo.com";
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  apikey: "S2422476141575634428",
  secretecode: "y2WUIjSSe8xkQaGq3RkOQf53ZP9nbcu3dnf",
};

export const fetchAirports = async () => {
  try {
    const res = await fetch(`${BASE_URL}/tools/airport-autosuggetion-data`, {
      headers: HEADERS,
    });
    return await res.json();
  } catch (err) {
    console.error("Airport API Error:", err);
    return [];
  }
};
