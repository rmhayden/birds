import {useState, useEffect} from "react";

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

if (!birds) {
    return <p>Loading bird information ...</p>
  }
  

return (

        <section className="container">
            
          {birds.map((bird) => {

            return (

                <Link to={`/details/${ bird._id }`} key={ bird.id }>

                {/* it is an _id in the object, not just id */}

              <div className="card">
                <div className="card-image">

                  <img
                    src={bird.image}
                    alt={bird.name}
                  />
                </div>
                <div className="card-title">
                  <h3>{bird.name}</h3>
                </div>
              </div>
              </Link>
            )
          })}
        </section>
      );

}


export default Birds;