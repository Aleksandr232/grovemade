import React from "react";
import { Link } from "react-router-dom";

import vector from './Vector.png';
import vector1 from './vector1.png';
import g from './g.png';
import r from './r.png';
import o from './o.png';
import v from './m.png';
import e from './e.png';
import m from './v.png';
import a from './a.png';
import d from './d.png';
import ee from './ee.png';


const Header =()=>{
    return(
        <div className="header" >
            <Link className="header_s" to=''>SHOP</Link>
            <Link className="header_e" to=''>EXPLORE</Link>
            <div className="grovemade">
                <img src={vector1} alt="" className="vector1" />
                <img src={vector} alt="" className="vector" />
                <img src={g} alt=""  className="g"/>
                <img src={r} alt="" className="r" />
                <img src={o} alt="" className="o" />
                <img src={v} alt="" />
                <img src={e} alt="" />
                <img src={m} alt="" />
                <img src={a} alt="" />
                <img src={d} alt="" />
                <img src={ee} alt="" />
            </div>
            <Link className="header_my" to=''>MY CART</Link>
        </div>
    )
}

export default Header;