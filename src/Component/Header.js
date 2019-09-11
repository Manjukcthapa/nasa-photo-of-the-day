import React from 'react';
import "./Nasapic.css";

function  Header(props) {
    return (
        <div className='header'>
            <div className="img">
            <img className="images" src="https://seeklogo.com/images/N/NASA-logo-9411797223-seeklogo.com.png" />
            </div> 
            <div><h1 className="text">NASA Photo of the Day!</h1></div>
        </div>
    )
}

export default Header;