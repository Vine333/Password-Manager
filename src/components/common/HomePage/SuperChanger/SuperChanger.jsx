import React from 'react';
import {Wrapper} from './style.js'

const SuperChanger = () => {
    return (<Wrapper>
        <div className="container">
            <div className='descriptions-container'>
                <div className='images-top'>
                    <img
                        src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/6709859f348fcfae8f678d1a_kdsfjh.svg"
                        alt=""/>
                </div>
                <div className='descriptions'>
                    <span className='white-color'>Supercharge your team.</span>
                    Share lists and collaborate in real-time.
                </div>
            </div>

            <div className='video-container'>
                <video className='video' autoPlay muted loop playsInline>
                    <source
                        src='https://res.cloudinary.com/superlist/video/upload/q_auto/v1730927912/Website_-_Collaborate-alt_lazqcp.mp4'/>
                </video>
            </div>
        </div>
    </Wrapper>);
};

export default SuperChanger;