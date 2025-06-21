const getSession = (key: string) => {
  if (typeof window !== "undefined") {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(decodeURIComponent(item)) : null;
    } catch (error) {
      console.error(`Error getting session storage for key ${key}:`, error);
      return null;
    }
  }
  return null;
};

const setSession = (key: string, value: unknown) => {
  try {
    sessionStorage.setItem(key, encodeURIComponent(JSON.stringify(value)));
  } catch (error) {
    console.error(`Error setting session storage for key ${key}:`, error);
  }
};

const removeSession = (key: string) => {
  try {
    sessionStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing session storage for key ${key}:`, error);
  }
};

const getLocal = (key: string) => {
  try {
    const item = localStorage?.getItem(key);
    return item ? JSON?.parse(decodeURIComponent(item)) : null;
  } catch (error) {
    console.error(`Error getting local storage for key ${key}:`, error);
    return null;
  }
};

const setLocal = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, encodeURIComponent(JSON.stringify(value)));
  } catch (error) {
    console.error(`Error setting local storage for key ${key}:`, error);
  }
};

const removeLocal = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing local storage for key ${key}:`, error);
  }
};

const getCookie = (key: string) => {
  if (typeof document === "undefined") return "";

  try {
    const cookies = document.cookie.split(";");
    const cookie = cookies.find((c) => c.trim().startsWith(key + "="));
    return cookie ? decodeURIComponent(cookie.split("=")[1]) : "";
  } catch (error) {
    console.error(`Error getting cookie for key ${key}:`, error);
    return "";
  }
};

const fetchCookie = (key: string, headers?: { cookie?: string }) => {
  if (!headers?.cookie) return "";

  try {
    const cookies = headers.cookie.split(";");
    const cookie = cookies.find((c) => c.trim().startsWith(key + "="));
    return cookie ? decodeURIComponent(cookie.split("=")[1]) : "";
  } catch (error) {
    console.error(`Error fetching cookie for key ${key}:`, error);
    return "";
  }
};

const setCookie = (key: string, value: string) => {
  if (typeof document === "undefined") return;

  try {
    const days = value === "" ? 0 : 7;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${
      days === 0 ? new Date(0).toUTCString() : date.toUTCString()
    }`;

    const cookieValue = `${key}=${encodeURIComponent(value)};${expires};path=/`;
    document.cookie =
      process.env.MODE === "development"
        ? cookieValue
        : `${cookieValue};SameSite=Strict;Secure`;
  } catch (error) {
    console.error(`Error setting cookie for key ${key}:`, error);
  }
};

const clearAllStorage = () => {
  try {
    // Clear session and local storage
    sessionStorage.clear();
    localStorage.clear();

    // Clear all cookies
    if (typeof document !== "undefined") {
      const cookies = document.cookie.split(";");
      cookies.forEach((cookie) => {
        const key = cookie.split("=")[0].trim();
        setCookie(key, "");
      });
    }
  } catch (error) {
    console.error("Error clearing all storage:", error);
  }
};

export {
  fetchCookie,
  clearAllStorage, // Renamed from fethcAllStorageClear
  getCookie,
  getLocal,
  getSession,
  removeLocal,
  removeSession,
  setCookie,
  setLocal,
  setSession,
};
