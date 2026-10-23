import { useState, useEffect } from "react";

export function useLocalStorageLatitude() {
  const [latitud, setLatitud] = useState("");

  useEffect(() => {
    const lat = localStorage.getItem("latitude");
    
    if (lat) {
      setLatitud(lat);
    } else {
      setLatitud("No se especifica la latitud");
    }
  }, []);

  return latitud;
}