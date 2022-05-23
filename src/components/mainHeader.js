import {NavLink} from "react-router-dom";

import classes from "./MainHeader.module.css";
import Logo from "../assets/images/logo.png"
import Avatar from "../assets/images/icon-5359553_1280.webp"

const MainHeader = () => {
    return (
        <header className={classes.header}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <img src={Logo} style={{width: 50, marginTop: 10}}/>
              <div style={{color: 'white', paddingLeft: 20, fontSize: 20}}>SRI BOOKING</div>
            </div>
            <nav>
                <ul>
                    {/*<li>*/}
                    {/*    <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <NavLink activeClassName={classes.active} to="/products">Products</NavLink>*/}
                    {/*</li>*/}
                    <li>
                        <NavLink to="/customer-my-profile">Home</NavLink>
                    </li>
                  <li>
                        <NavLink to="/customer-my-profile">Booking</NavLink>
                    </li>
                  <li>
                        <NavLink to="/customer-my-profile">My&nbsp;Bookings</NavLink>
                    </li>
                  <li>
                        <NavLink to="/customer-my-profile">Add&nbsp;Property</NavLink>
                    </li>
                  <li>
                        <NavLink to="/customer-my-profile">My&nbsp;Properties</NavLink>
                    </li>
                  <li>
                        <NavLink to="/customer-my-profile">Rating</NavLink>
                    </li>
                  <li>
                        <NavLink to="/customer-my-profile">Offers</NavLink>
                    </li>
                    <NavLink activeClassName={classes.active} to="/customer-my-profile">
                      <img style={{width: 35}} src={Avatar} alt=""/>
                    </NavLink>
                  {/*<li>*/}
                  {/*      <NavLink activeClassName={classes.active} to="/my-profile">Logout</NavLink>*/}
                  {/*  </li>*/}
                </ul>
            </nav>
          </div>
        </header>
    );
};

export default MainHeader;
