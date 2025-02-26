import React from 'react';
import {Wrapper} from './style.js'

const Download = () => {
    return (<Wrapper>
            <div className="container">
                <img
                    src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/66fdd8c6ca47de4871f967e5_dsfgdf.svg" className='image'
                    alt=""/>
                <div className='link'>
                    <div className='group1'>
                        <a href="" className='mac'>MacOS</a>
                        <a href="" className='web'>Web</a>
                    </div>
                    <div className='group2'>
                        <a href="" className='ios'>IOS</a>
                        <a href="" className='android'>Android</a>
                    </div>
                </div>
            </div>
        </Wrapper>);
};

export default Download;