import React from 'react';

import icon from './icon.png';

const WeHope=()=>{
    return(
        <section className='wehope'>
         <div className="container">
             <div className="title_desing">We Hope You'll Join Us</div>
                <div className="sub_title_desing">
                    READ MORE ABOUT OUR STORY
                </div>
             <div className='desinginspires'>
                 <img src={icon} alt=""  className='icon'/>
                <div className="text_title" id='text_title'>Design Inspires</div>
                    <div className="sub_title">
                    Build your dream workspace, so you can get your best work done.
                    </div>
             </div>
         </div>
        </section>
    )
}

export default WeHope;