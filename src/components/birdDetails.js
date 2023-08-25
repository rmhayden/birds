import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";


const BirdDetails = (props) => {

    const {id} = useParams()

    console.log(useParams())

    const url = `https://media.audubon.org/nas_birdapi/${id}`;


    const [ bird, setBird ] = useState({}) 

    const getBird = async () => {

        try {

            const response = await fetch(`https://ga-audubon-api.herokuapp.com/api/birds/${id}`)
    
            const birdData = await response.json()
    
            setBird(birdData)
    
            console.log(birdData)
    
        } catch(err) {
            console.log(err)
        }
       }
       
       useEffect(() => {
    
        getBird();

    }, []);


    const readMoreUrl = `${bird.homepage}`;

    if (!bird) {
        return <p>Loading bird information ...</p>
      }
      

    return (


        <div className="details-container">
          <img
            src={bird.image}
            alt={bird.name}
          />
          <div className="details">
            <h2>{bird.name}</h2>
            <h3>{bird.genus}</h3>
            <h4>Conservation Status</h4>
            <p>{bird.conservationStatus}</p>
            <a
              href={readMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
            </div>

        </div>
      );

}

    export default BirdDetails;