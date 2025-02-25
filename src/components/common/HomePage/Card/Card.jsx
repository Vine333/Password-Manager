import React from 'react';
import {Wrapper} from "./style.js";

const Card = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className='blue'>
                    <div className='blue-main'>
                        Message in context
                    </div>
                    <div className='blue-description'>
                        Discuss,debate,or update with a chat on every task
                    </div>
                    <div>
                        <img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/673fd042852799635c6e533a_messages-p-1600.png" className='image'  alt=""/>
                    </div>
                </div>
                <div className='red'>
                    <div className='red-main'> Updates for all</div>
                    <div className='red-description'>Never miss a list or task with a sleek all in one view</div>
                    <div><img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/673fcef0e66045461dbb47b9_updates.png" className='image' alt=""/></div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Card;