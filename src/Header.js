import React from 'react'

 const Header = () => {
   
    return (
        <>
        <div className="head">
            <div className="headicons">
            <img src="https://www.teahub.io/photos/full/61-614975_baby-pink-backgrounds.jpg" alt=""></img>
            </div>
            <div className="headsearch">
            <input type="text" placeholder=" Search.."></input>
            </div>
            <div className="headtag">
                <ul>
                   
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SHOP</li>
                    <li>CUSTOMER ORDER</li>
                    <li>CONTACT US</li>
                    <li className="login"><span>LOG IN</span></li>
                    <li>|<span> CART / ₹0.00</span></li>
                </ul>
               
              
            </div>
            
        </div>
            
        </>
    )
}
export default Header;
