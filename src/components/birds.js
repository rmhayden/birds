import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Birds = (props) => {


const [ birds, setBirds ] = useState([]) 


   const fetchBirds = async ()=> {

    try {

        const response = await fetch("https://ga-audubon-api.herokuapp.com/api/birds")

        const birdData = await response.json()

        setBirds(birdData)

        console.log(birdData)

    } catch(err) {
        console.log(err)
    }
   }
   
   useEffect(() => {

  fetchBirds()

}, []);


return (

        <section className="container">
          {birds.map((bird) => {

            return (
              <div className="card">
                <div className="card-image">


                  <img
                    src={bird.image}
                    alt="Acadian Flycatcher"
                  />
                </div>
                <div className="card-title">
                  <h3>{bird.name}</h3>
                </div>
              </div>
            )
          })}
        </section>
      );

}


export default Birds;