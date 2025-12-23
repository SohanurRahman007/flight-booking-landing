const BASE_URL = "https://serviceapi.b2b.innovatedemo.com";
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  apikey: "S2422476141575634428",
  secretecode: "y2WUIjSSe8xkQaGq3RkOQf53ZP9nbcu3dnf",
};

export const fetchAirlinesData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/tools/airlines-data`, {
      headers: HEADERS,
    });
    const result = await res.json();
    return result.data ? Object.values(result.data) : [];
  } catch (err) {
    return [];
  }
};

export const fetchAirports = async () => {
  try {
    const res = await fetch(`${BASE_URL}/tools/airport-autosuggetion-data`, {
      headers: HEADERS,
    });
    const result = await res.json();
    // Jodi data object hoy tobe Object.values use kora hobe
    if (result.data) return Object.values(result.data);
    if (Array.isArray(result)) return result;
    return [];
  } catch (err) {
    return [];
  }
};
