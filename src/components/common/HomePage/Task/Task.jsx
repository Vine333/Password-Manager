import React from 'react';
import {Wrapper} from "./style.js";

const Task = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className='descriptions-container'>
                    <div className='images-top'>
                        <img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/67097c97358cf573caaad912_k1.svg" alt=""/>
                    </div>
                    <div className='descriptions'>
                        <span className='white-color'>Tasks and notes together.</span>
                        Turn your thoughts into actions.
                    </div>
                </div>

                <div className='video-container'>
                    <video className='video' autoPlay muted loop playsInline >
                        <source src='https://res.cloudinary.com/superlist/video/upload/q_auto/v1731026948/Website_-_Notestasks_d5djwm.mp4'/>
                    </video>
                </div>
            </div>
        </Wrapper>
    );
};

export default Task;