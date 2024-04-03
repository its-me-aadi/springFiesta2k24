import React, {useEffect, useState} from 'react';
import '../styles/VotingPage.css'
import axios from 'axios';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import party_pooper1 from '../components/partyPooper1.svg'
import party_pooper2 from '../components/partyPooper2.svg'
import sprinklers1 from '../components/sprinklers1.svg'
import sprinklers2 from '../components/sprinklers2.svg'
import circus_tent from '../components/circusTent.svg'
import images from "../image.json";

function VotingPage() {

  console.log(images);

  return (
    <div className='main-body'>
      <img src= {party_pooper1} className="party-pooper1" alt="party-pooper1" />
      <img src= {party_pooper2} className="party-pooper2" alt="party-pooper2" />
      <img src= {sprinklers1} className="sprinklers1" alt="sprinklers1" />
      <img src= {sprinklers2} className="sprinklers2" alt="sprinklers2" />
      <img src= {circus_tent}className="circus" alt="circus" />
      <div className="title">
        <p>VOTING PAGE</p>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        {/* Use Font Awesome icon for search */}
        <a href="#">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </a>
      </div>
      <div className="box">
         {images.map((image)=>{
           return (
              <div className="box-container1">
                <img src={image.image} className="image" alt="image1" />
                <img src={image.like} className="like-button" alt="like" />
              </div>
            )
         })}
      </div>
    </div>
  );
}

export default VotingPage;
