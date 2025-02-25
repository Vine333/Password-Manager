import React from 'react';
import {Wrapper} from "./style.js";

const Company = () => {
    return (
        <Wrapper>
        <div className="container">
            <div className="line1">
                <div className='group spotify'>
                    <img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/672aa96f4256aee30bc38379_github.png" alt="" className='git'/>
                    <img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/672aa96f4256aee30bc38389_spotify-p-500.png" alt=""  className='spoti'/>
                </div>

                <div className='group  nvidia'>
                    <img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/672aab7543fcb6df7a7f1e87_google.svg" alt="" className='google'/>
                    <img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/672aab75d053b34a1f16ef04_NVIDIA.svg" alt="" className='nvid'/>
                </div>
            </div>
            <div className="line2">
                <div className='group  pinterest'>
                    <img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/672aabd407d23aa54bfbc0fb_Pinterest_idh5tM_4Eb_0.svg" alt="" className='pint'/>
                    <img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/672bc449c1451f06efc23722_cherry.svg" alt="" className='cherry'/>
                </div>
                <div className='group zalando'>
                    <img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/672bc4b7715dcdd85f759ab3_eqt.svg" alt="" className='eqt'/>
                    <img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/672bc520b1dde41c47a72231_zalando_wordmark_white_RGB.svg" alt="" className='zala'/>

                </div>
            </div>
        </div>
        </Wrapper>
    );
};

export default Company;