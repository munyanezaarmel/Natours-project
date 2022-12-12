import React from 'react';
import '../styles/index.css';
import hero from '../img/logo-white.png';
export default function Header(){
    return (
        <body>
       <header class="header">
      <div class="logo-box">
        <img src={hero} alt="Natours project logo" class="logo" />
      </div>
      <div class="heading-box">
<h1 class="primary-heading">
    <span class="heading-main">Outdoors</span>
    <span class="heading-sub">is where life begins</span>
</h1>
<a href="#" class=" btn discover-btn">Discover Our TOUR</a>
</div>
       </header>
    </body>
    )
}