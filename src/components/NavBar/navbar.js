import React, {Component} from 'react';
import {useState} from 'react';
import {menuItems} from './menuitems.js';
import Hamburger from 'hamburger-react';

function Navbar(){
    const [clickDM,setClickDM] = useState(false);
    const [clickBurguer,setClickBurguer] = useState(false);

    const handleClick = () => setClickDM(!clickDM);
    return(
        <header>
            <div className='nav-items'>
                <h1 className='nav-title'>Web title</h1>
                <nav>
                    <ul className={clickBurguer ? "active" : ""}>
                        {menuItems.map((item,idx)=>{ 
                            if(idx!==1){
                                return(
                                    <li key={idx}>
                                        <a href={item.url} className={item.cName}>
                                        {item.title}
                                        </a>
                                    </li>
                                );
                            } else {
                                return(
                                    <li key={idx}>
                                        <a href={item.url} className={item.cName} onClick={handleClick}>
                                            {item.title}
                                            <i className="fa-solid fa-caret-down nav-dropdown"></i>
                                        </a>
                                        <ul className={clickDM ? "dropdwn active" : "dropdwn"}>
                                            <li><a>Service 1</a></li>
                                            <li><a>Service 2</a></li>
                                            <li><a>Service 3</a></li>
                                        </ul>
                                    </li>
                                );
                            }
                                
                    })}
                    </ul> 
                </nav>
                <Hamburger size={50} toggled={clickBurguer} toggle={setClickBurguer}/>
            </div>
        </header>
    )
}

export default Navbar;
