import React from 'react';
import {Wrapper} from "./style.js";
import {Button} from "antd";

const Lists = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="descriptions">
                    <div className='block'>
                        <img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/6735b52a7b1093f4795d111e_bang.svg" alt="" className='stars'/>
                        <div className='header'>
                            <span className='lists'>Lists with</span><br/>
                            <span className='super'>Superpowers </span>
                        </div>
                    </div>


                    <div className="descript">
                        Brainstorm,note,plan,and get more with AI.
                    </div>
                    <Button className='btn'>
                        Start today for free
                    </Button>
                </div>
                <div className='content'>
                    <div className="video-wrapper">
                        <div className='video-container'>
                            <video autoPlay loop muted playsInline className='video'>
                                <source src='https://res.cloudinary.com/superlist/video/upload/q_auto/v1732055937/hero_xgfcbw.mp4' className='reels'/>
                            </video>
                        </div>

                    </div>
                </div>
                <div className='mobil'>
                    <div className="video-wrapper-mobil">
                        <div className='video-container-mobil'>
                            <video autoPlay loop muted playsInline className='video-mobil'>
                                <source src='https://res.cloudinary.com/superlist/video/upload/v1732226541/heromobile_f70bdu.mp4' className='reels'/>
                            </video>
                        </div>

                    </div>
                </div>

            </div>
        </Wrapper>
    );
};

export default Lists;