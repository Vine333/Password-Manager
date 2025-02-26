import React, {useState} from 'react';
import {Wrapper} from './style.js'
import {Button} from "antd";

const Pricing = () => {
    const [paymentType, setPaymentType] = useState('monthly');

    const handleClick = (type) => {
        setPaymentType(type);
    }
    const monthlyPrice = {
        pro: 10, proTeam: 12
    };

    const yearlyPrice = {
        pro: 8, proTeam: 10
    };


    const getPrice = (plan) => paymentType === 'monthly' ? monthlyPrice[plan] : yearlyPrice[plan];
    return (<Wrapper>
        <div className="container">
            <img
                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/67083de358458bbe7f86b2fb_kfdjgs.svg"
                alt="" className='prising'/>
            <div className='container-btn'>
                <Button className='button' onClick={() => handleClick('monthly')}>Monthly</Button>
                <Button className='button' onClick={() => handleClick('yearly')}>Yearly -20% </Button>
            </div>

            <div className="cards">
                <div className='group1'>
                <div className='card'>
                    <div className='header'>
                        <h2>Free</h2>
                        <p>The start of your productivity journey</p>
                        <div className='price'>$0 <div className='month'>
                            / month
                        </div>
                        </div>
                    </div>
                    <div className='main'>
                        <div>The free plan includes:</div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Unlimited tasks and notes</div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Reminders on tasks</div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Up to 5 private or shared
                                lists, with up to 5 people
                            </div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Up to 25MB upload & 500MB file storage</div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Messages on tasks to
                                communicate with others
                            </div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Repeating tasks and task
                                assigning
                            </div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Available on Macos, ios,
                                Android and Web
                            </div>
                        </div>

                    </div>
                </div>

                <div className='card pro'>
                    <div className='header header-pro'>
                        <img
                            src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/67045760b528f7f2aa8aa536_dsfgdfg.svg"
                            className='stars' alt=""/>
                        <h2>Pro</h2>
                        <p>Unlock a new level of personal productivity</p>
                        <div className='price'>${getPrice('pro')}
                            <div className='month'>/ month</div>
                        </div>
                    </div>
                    <div className='main'>
                        <div>Everything in Free, plus:</div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Unlimited private lists</div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Unlimited shared lists with up to 25 people</div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>
                                Sublists within lists
                            </div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>All integrations, including
                                Slack, Gmail, Google
                                Calendar and more
                            </div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Email task
                                summarization
                            </div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Al list creation</div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Talk Al for voice input</div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Up to 100MB upload &
                                25GB file storage
                            </div>
                        </div>

                    </div>
                </div>
                </div>
                <div className='group2'>
                <div className='card'>
                    <div className='header'>
                        <h2>Free Team</h2>
                        <p>For smaller teams to organize their work</p>
                        <div className='price'>$0
                            <div className='month'>
                                <div>/member
                                </div>
                                <div>/month</div>
                            </div>
                        </div>
                    </div>
                    <div className='main'>
                        <div>Everything in Free, plus:</div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Up to 5 team members</div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>15 shared lists between team members</div>
                        </div>

                    </div>
                </div>

                <div className='card pro-team'>
                    <div className='header header-pro-team'>
                        <img
                            src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/6704579015b93ffb76602d1f_dsfg.svg"
                            className='crown' alt=""/>
                        <h2>Pro Team</h2>
                        <p>Maximize productivity across your entire team</p>
                        <div className='price'>${getPrice('proTeam')}
                            <div className='month'>
                                <div>/ member</div>
                                <div>/ month</div>
                            </div>
                        </div>
                    </div>
                    <div className='main'>
                        <div>Everything in Pro, plus:</div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Unlimited team members</div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>REveryone in the team will be upgraded to personal Pro too ✨</div>
                        </div>
                        <div className='point'>
                            <div><img
                                src="https://cdn.prod.website-files.com/625593a881b8ebd169835ca5/656e3ff9862c0eafe0b416f1_Checkbox.svg"
                                alt=""/></div>
                            <div>Unlimited shared lists with team members and guests</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </Wrapper>);
};

export default Pricing;