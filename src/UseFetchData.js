import { useState, useEffect } from 'react';
import axios from "axios"

export default function useFetchData() {
let burl = 'https://swapi.co/api/people'
const [planets, setPlanets] = useState([])

  useEffect(() => {
    getPlanets(burl, [])
  }, []);

  async function getPlanets (url, planets, params) {
  
    try {
         const res = await axios.get(url);
        const retrievedPlanets = planets.concat(res.data.results)
         if (res.data.next !== null) {
            setPlanets(retrievedPlanets)
            getPlanets(res.data.next, retrievedPlanets)
      } else {
        setPlanets(retrievedPlanets)
      }
      } catch (error) {
        console.error(error);
      }
  }

  planets.forEach((r, i) => 
  r.id = i+1
)
  return planets
}
  