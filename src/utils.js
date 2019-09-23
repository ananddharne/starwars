import React, { useState, useEffect} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faMale, faFemale, faFilm, faRocket, faEye, faRuler, faHeart} from "@fortawesome/free-solid-svg-icons";
import {Link } from "react-router-dom"


export const getPeople = (people) => {
    return people.map((r, i) => 
    <ul className='block' key = {r.id}>
    <li className='box-row'>
    <Link className='repo-link' to={`/character/${r.id}`}>{r.name}</Link>
    &nbsp;
    &nbsp;
   <button onClick = {handleFavourite(r.id)}><FontAwesomeIcon  icon={faHeart}/></button>
        <div className='gender-div' title='Gender'>
            Gender
            &nbsp;
            {r.gender.slice(0, 1) === 'f' ? <FontAwesomeIcon icon={faFemale}/> : <FontAwesomeIcon icon={faMale}/>}
            &nbsp; &nbsp;
            Eye Color
            &nbsp;
          <FontAwesomeIcon style={{color:`${r.eye_color}`}} icon={faEye}/>
          </div>
        <div className='birth-div'>
          Birthday <FontAwesomeIcon icon={faBirthdayCake}/> 
          &nbsp;
          &nbsp;
          { r.birth_year}
          </div>
        <div className="films-div">
        Movies Appeared
        &nbsp;
        <FontAwesomeIcon icon={faFilm}/>
          &nbsp;
          &nbsp;
          { r.films.length}
        </div>
        <div className="starship-div">
          Starships
        &nbsp;
        &nbsp;
        <FontAwesomeIcon icon={faRocket}/>
          &nbsp;
          &nbsp;
          { r.starships.length}
        </div>
        <div className='height-div'>
          Height
        &nbsp;
          <FontAwesomeIcon icon={faRuler}/> 
          &nbsp;
          &nbsp;
          { r.height}
          </div>
    </li>
    <hr/>
    </ul>
        ) 
}

export const handleFavourite = (r, people) => {
    // let x = []
    // console.log(r)
    // let favs =  JSON.parse(localStorage.getItem("favs"))
    // console.log(favs)
    //     if(!favs.includes(r)) {
    //         favs.push(r)
    //     }
    // console.log(favs)
    // let peeps = []
    // favs.forEach(fav => {
    //     const peep = people.filter(p => p.id === fav)
    //     peeps.push(peep[0])
    //   })
    //   console.log(peeps)
    //   localStorage.setItem("favs", JSON.stringify(favs))
    }