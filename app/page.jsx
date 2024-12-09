"use client"
import { useEffect, useState } from "react";

export default function Home() {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch("/api/getLocation");
                const data = await response.json();
                console.log(data)
                setLocation(data);
            } catch (error) {
                console.error("Error fetching location:", error);
            }
        };

        fetchLocation();
    }, []);

    return (
        <div>
            <h1>Welcome to Our Service</h1>
            {location ? (
                <div>
                    <p>Your IP: {location.ip}</p>
                    <p>City: {location.city}</p>
                    <p>Region: {location.region}</p>
                    <p>Country: {location.country}</p>
                </div>
            ) : (
                <p>Loading your location...</p>
            )}
        </div>
    );
}
