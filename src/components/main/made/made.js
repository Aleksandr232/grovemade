import React from "react";

import made from './made.jpg';

const Made = () => {
  return (
    <section className="Made">
      <div className="container">
        <div className="title_desing">Made The Hard Way</div>
        <div className="sub_title_desing" id="s_t_desing">
          Our signature craftsmanship has been honed over a decade of
          manufacturing innovation here in <br/> Portland, Oregon. We combine the
          skills of our small in-house team with the collective strength of<br/>
          collaborators throughout the US to deliver quality products worth
          investing in.
        </div>
        <img src={made} alt="" className="made"/>
      </div>
    </section>
  );
};

export default Made;
