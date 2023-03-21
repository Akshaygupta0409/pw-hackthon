import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

function LocationForm() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/location", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ latitude, longitude }),
    });
    const data = await response.json();
    console.log(data);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    setLatitude("");
    setLongitude("");
  }, []);

  return (
    <div className="max-w-md mx-4">
      <form onSubmit={handleSubmit}>
        <input
          className="block border border-grey-light w-full p-3 rounded mb-4"
          type="text"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="Latitude"
        />
        <input
          className="block border border-grey-light w-full p-3 rounded mb-4"
          type="text"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="Longitude"
        />
           <button
        className="bg-blue-500 mt-4 mb-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
        onClick={getLocation}
      >
        Get Location
      </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
     
      </form>
    </div>
  );
}

export default LocationForm;
