import React, {useState} from 'react';
import {Wrapper} from "./style.js"
import {Tabs} from 'antd'

const Make = () => {
    const [activeTab, setActiveTab] = useState("1");
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: (
                <div className='description'>
                    <div>
                        <h2>Natural Language</h2>
                        <p>Type dates and set due ito tasks.</p>
                    </div>
                </div>
            ),
            children: (
                <div className='video-container'>
                    <video key={activeTab} className='video' autoPlay muted loop playsInline>
                        <source src="https://res.cloudinary.com/superlist/video/upload/q_auto/v1730910463/Website_-_Talk_wmwsnm.mp4"/>
                    </video>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className='description'>
                    <div>
                        <h2>Nested Tasks</h2>
                        <p>Infinite level of subtasks</p>
                    </div>
                </div>
            ),
            children: (
                <div className='video-container'>
                    <video key={activeTab} className='video' autoPlay muted loop playsInline>
                        <source src="https://res.cloudinary.com/superlist/video/upload/q_auto/v1730910463/Website_-_Make_ofiab9.mp4"/>
                    </video>
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div className='description'>
                    <div >
                        <h2>Tasks from integrations</h2>
                        <p>Slack messages, Linear tickets,<br/> & Github issues together</p>
                    </div>
                </div>
            ),
            children: (
                <div className='video-container'>
                    <video key={activeTab} className='video' autoPlay muted loop playsInline>
                        <source src="https://res.cloudinary.com/superlist/video/upload/q_auto/v1730910463/Website_-_Gmail_erdn0v.mp4"/>
                    </video>
                </div>
            ),
        },
    ];
    return (
        <Wrapper>
            <div className="container">
                <div className='head'>
                    <div>
                        <img src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/67097e07e05092a259a6a768_kdfshgj.svg"  width='140px'  height='40px' alt=""/>
                    </div>
                    <div className='descriptions'>
                        <span className='white-color'>Make with AI.</span>
                        AI-powered lists,voice to task,email summaries,...
                    </div>
                </div>
                <div className='video-container'>
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} tabPosition='bottom' />
                </div>
            </div>
        </Wrapper>
    );
};

export default Make;