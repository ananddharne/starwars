import React, { useState, useEffect} from "react"
import { withRouter } from 'react-router-dom'
import axios from "axios"
import "./Profile.css"


const Profile = (props) => {
const [films, setFilms] = useState([])
const [species, setSpecies] = useState([])
const [starships, setStarships] = useState([])
const [vehicles, setVehicles] = useState([])
const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfile()
  }, [])

  async function getProfile () {
    const id = Number(props.match.params.id)
    const result = await axios.get(`https://swapi.co/api/people/${id}`)
    setProfile(result.data)
    const films = await getDataForProfile(result.data, 'films')
    const species = await getDataForProfile(result.data, 'species')
    const starships = await getDataForProfile(result.data, 'starships')
    const vehicles = await getDataForProfile(result.data, 'vehicles')
    setFilms(films)
    setSpecies(species)
    setStarships(starships)
    setVehicles(vehicles)
  }
  async function getDataForProfile (profile, itemType) {
    try {
      let result = []
      let items = profile[itemType]
      for (let i=0; i < items.length; i++) {
        const res = await axios.get(`${items[i]}`)
        result.push(res.data)
      }
      return result
   } catch (error) {
     console.error(error);
   }
  }
  // async function getFilmsDataForProfile (profile) {
  //   try {
  //     let result = []
  //     let films = profile.films
  //     for (let i=0; i < films.length; i++) {
  //       const res = await axios.get(`${films[i]}`)
  //       result.push(res.data)
  //     }
  //     return result
  //  } catch (error) {
  //    console.error(error);
  //  }
  // }

 console.log(films)
 console.log(species)
 console.log(starships)
 console.log(vehicles)
    return (
        <div className="container">
          <div class="item header"><h3>{profile.name}</h3></div>
        <div class="item content-1">
          <h3>Movies</h3>
          {films.map(film => 
          <ul>
            <li>{`${film.title}`}</li>
            </ul>
          )}
        </div>
        <div class="item content-2">
        <h3>Vehicles</h3>
          {vehicles.map(v => 
          <ul>
            <li>{`${v.name}`}</li>
            </ul>
          )}
          <h3>Starships</h3>
          {starships.map(sp => 
            <ul>
              <li>{`${sp.name}`}</li>
            </ul>
        )}
        </div>
        <div class="item content-3">
          <h3>Species</h3>
        {species.map(sp => 
            <ul>
              <li>{`${sp.name}`}</li>
            </ul>
        )}
        </div>
      </div>
    )
}
export default withRouter(Profile);