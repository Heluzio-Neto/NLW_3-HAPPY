import React from 'react';
import { FiArrowRight} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../style/global.css';
import '../style/pages/landing.css';

import logoIng from '../images/Logo.svg';

function Landing() {
    return(
    <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoIng} alt="happy"></img>
          <main>

            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>

          </main>
          <div className="location">
              <strong>Manaus</strong>
              <span>Amazonas</span>
          </div> 
          <Link to="/app" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
          </Link>
       </div> 
    </div> //page-landing
    );
}

export default Landing;