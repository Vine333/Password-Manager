import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import { Wrapper } from "./style.js";

const TabsVideo = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [progress, setProgress] = useState({
        '1': 0,
        '2': 0,
        '3': 0
    });

    const handleChange = (key) => {
        setActiveTab(key);
    };

    useEffect(() => {

        setProgress((prevProgress) => {
            const newProgress = { ...prevProgress };
            Object.keys(newProgress).forEach((key) => {
                if (key !== activeTab) {
                    newProgress[key] = 0;
                }
            });
            return newProgress;
        });


        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = { ...prevProgress };
                newProgress[activeTab] = Math.min(prevProgress[activeTab] + 1, 100);
                return newProgress;
            });
        }, 28);


        return () => clearInterval(progressInterval);
    }, [activeTab]);

    const items = [
        {
            key: '1',
            label: (
                <div className='description'>
                    <div className='progress'>
                        <div className='prog' style={{ height: `${progress['1']}%`, transform: `scaleY(${progress['1'] / 100})` }}></div>
                    </div>
                    <div>
                        <h2>Natural Language</h2>
                        <p>Type dates and set due ito tasks.</p>
                    </div>
                </div>
            ),
            children: (
                <div className='video-container'>
                    <video key={activeTab} className='video' autoPlay muted loop playsInline>
                        <source src='https://res.cloudinary.com/superlist/video/upload/w_600/v1730910291/Website-NLP_cc67nd.mp4'/>
                    </video>
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className='description'>
                    <div className='progress'>
                        <div className='prog' style={{ height: `${progress['2']}%`, transform: `scaleY(${progress['2'] / 100})` }}></div>
                    </div>
                    <div>
                        <h2>Nested Tasks</h2>
                        <p>Infinite level of subtasks</p>
                    </div>
                </div>
            ),
            children: (
                <div className='video-container'>
                    <video key={activeTab} className='video' autoPlay muted loop playsInline>
                        <source src='https://res.cloudinary.com/superlist/video/upload/w_600/v1730910292/Website_-_Infinite_nesting_fq8a7c.mp4'/>
                    </video>
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div className='description'>
                    <div className='progress'>
                        <div className='prog' style={{ height: `${progress['3']}%`, transform: `scaleY(${progress['3'] / 100})` }}></div>
                    </div>
                    <div >
                        <h2>Tasks from integrations</h2>
                        <p>Slack messages, Linear tickets,<br/> & Github issues together</p>
                    </div>
                </div>
            ),
            children: (
                <div className='video-container'>
                    <video key={activeTab} className='video' autoPlay muted loop playsInline>
                        <source src='https://res.cloudinary.com/superlist/video/upload/w_600/v1731026937/website-slack_awq3nr.mp4'/>
                    </video>
                </div>
            ),
        },
    ];

    return (
        <Wrapper>
            <div className="container">
                <Tabs defaultActiveKey="1" items={items} onChange={handleChange} tabPosition='left' />
            </div>
        </Wrapper>
    );
};

export default TabsVideo;
