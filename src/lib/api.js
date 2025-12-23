const BASE_URL = "https://serviceapi.b2b.innovatedemo.com";
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  apikey: "S2422476141575634428",
  secretecode: "y2WUIjSSe8xkQaGq3RkOQf53ZP9nbcu3dnf",
};

// Search Result-er Jonno
export const fetchAirlinesData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/tools/airlines-data`, {
      headers: HEADERS,
    });
    const result = await res.json();

    // Console-e check korar jonno
    console.log(result, "result ttttttttt");

    // Logic: result.data jodi object hoy, tobe tar values niye array banano
    if (result && result.data) {
      return Object.values(result.data);
    }

    return [];
  } catch (err) {
    console.error("Airlines API Error:", err);
    return [];
  }
};

// Airport Suggestion-er Jonno
export const fetchAirports = async () => {
  try {
    const res = await fetch(`${BASE_URL}/tools/airport-autosuggetion-data`, {
      headers: HEADERS,
    });
    const result = await res.json();

    // Autosuggestion-er jonno o same vabe array check kora bhalo
    return result.data
      ? Object.values(result.data)
      : Array.isArray(result)
      ? result
      : [];
  } catch (err) {
    console.error("Airport API Error:", err);
    return [];
  }
};
