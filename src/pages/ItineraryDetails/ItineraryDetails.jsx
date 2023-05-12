import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import * as itineraryService from '../../services/itineraryService'

// css


const ItineraryDetails = (props) => {
  const {itineraryId} = useParams()
  const [itinerary, setItinerary] = useState(null)

  useEffect(() => {
    const fetchItinerary = async () => {
      const data = await itineraryService.show(itineraryId)
      setItinerary(data)
    }
    fetchItinerary()
  }, [itineraryId])

  console.log(('itinerary state:', itinerary));

  if (!itinerary) return <h1>Loading itineraries...</h1>

  return ( 
    <main className="details">
      Itinerary Details
      <ul>
        <li>{itinerary.title}</li>
        <li>{itinerary.budget}</li>
        <li>{itinerary.cost}</li>
        <li>{itinerary.startDate}</li>
        <li>{itinerary.endDate}</li>
        <li>{itinerary.city}</li>
        <li>{itinerary.country}</li>
      </ul>
      <section>
        Flights
      </section>
      <section>
        Accomodations
      </section>
    </main>

  );
}

export default ItineraryDetails