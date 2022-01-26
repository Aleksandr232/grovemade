import React from "react";

import deskpads from './deskpads.png';
import laptop from './laptop.png';

const Desing=()=>{
    return(
            <section className="desing">
                <div className="container">
                    <div className="title_desing">Design Inspires</div>
                    <div className="sub_title_desing">Build your dream workspace, so you can get your best work done.</div>
                    <div className="getstarted">GET STARTED</div>
                </div>
                <div className="grid_desing">
                    <div className="deskpads">
                        <img src={deskpads} alt="" className="img_deskpads" />
                        <div className="title_pads">Desk Pads</div>
                        <div className="learnmore">LEARN MORE</div>
                    </div>
                    <div className="deskpads">
                        <img src={laptop} alt="" className="img_laptop" />
                        <div className="title_pads">Laptop Stands</div>
                        <div className="learnmore">LEARN MORE</div>
                    </div>
                </div> 
            </section>
    )
}

export default Desing;