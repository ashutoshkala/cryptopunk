import React from 'react';
import './header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeIcon from '../assets/header/theme-switch.png'
const header = () => {
return(
    <div className='headers'>
        <div className='logocontainer'>
            <img src={punkLogo} className='punkLogo' alt='logo'></img>

        </div>
        <div className='searchBar'>
            <div className='searchIcon'>
                <img src={searchIcon} ></img>
            </div>
            <input type="text" className='searchInput'placeholder='Collection, item or user ...'></input>
        </div>
        <div className='headerItems'>
            <p>Drops</p>
            <p>Market Place</p>
            <p>Create</p>
            <div className='headerItems'></div>
        </div>
        <div className='headerAction'>
            <div className='themeSwitchCon'>
                <img src={themeIcon} ></img>
            </div>
            <div className='getInBtn'>GET IN</div>
        
        </div>
    </div>

)
}

export default header