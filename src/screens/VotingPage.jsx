import React from 'react';
import '../styles/VotingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import party_pooper1 from '../components/partyPooper1.svg'
import party_pooper2 from '../components/partyPooper2.svg'
import sprinklers1 from '../components/sprinklers1.svg'
import sprinklers2 from '../components/sprinklers2.svg'
import circus_tent from '../components/circusTent.svg'
import image1 from '../components/image1.svg'
import image2 from '../components/image2.svg'
import image3 from '../components/image3.svg'
import image4 from '../components/image4.svg'
import like from '../components/like.svg'

function VotingPage() {
  return (
    <div>
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
        <div className="box-container1">
          <img src= {image1} className="image" alt="image1" />
          <img src= {like} className="like-button" alt="like-button" />
        </div>
        <div className="box-container2">
          <img src= {image2} className="image" alt="image2" />
          <img src= {like} className="like-button" alt="like-button" />
        </div>
        <div className="box-container3">
          <img src= {image3} className="image" alt="image3" />
          <img src= {like} className="like-button" alt="like-button" />
        </div>
        <div className="box-container4">
          <img src= {image4} className="image" alt="image4" />
          <img src= {like} className="like-button" alt="like-button" />
        </div>
      </div>
    </div>
  );
}

export default VotingPage;
