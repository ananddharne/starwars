import React, { useState, useEffect} from "react"
import MultiSearchSelect from "./MultiSearchSelect";
import "./People.css";
import useFetchData from "./UseFetchData";
import "./MultiSearchSelect.css"
import {getPeople} from "./utils"


const People = (favourites) => {
    const [searchPlanets, setSearchPlanets] = useState([])

    let planets = useFetchData()
    const searchNames = planets.map(p => p.name)
    console.log(planets)
    useEffect(() => {
    }, [])

  const handleChange = (e) => {
      // fetch(`https://swapi.co/api/people/?search=${e[e.length-1]}`)
      // .then((response) => response.json())
      // .then((data) => {
      //   setSearchPlanets(planets.filter(p => e.includes(p.name)))
      // })
  }

  // const handleFavourite = (r) => {
  // let favs =  JSON.parse(localStorage.getItem("favs"))
  // console.log(favs)
  //   const x = [...favs]
  //   if (!x.includes(r)) {
  //     x.push(r)
  //     setFavs(x)
  //   }
  //   console.log(x)
  //   localStorage.setItem("favs", JSON.stringify(favs))
  // }
    return (
      <div>
      <MultiSearchSelect width = '250px' searchable={true} showTags={false} multiSelect={true} onSelect={handleChange} options={searchNames}/>
        <div className="box">
          {
            searchPlanets.length > 0 ? getPeople(searchPlanets) : getPeople(planets)
          }
        </div>
        </div> 
    )
}

export default People