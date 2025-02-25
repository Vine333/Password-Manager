import React from 'react';
import styled from "styled-components";
import AppLayout from "../../layouts/index.jsx";
import Lists from "../../components/common/HomePage/Lists/Lists.jsx";
import Company from "../../components/common/HomePage/Companies/Company.jsx";
import Task from "../../components/common/HomePage/Task/Task.jsx";
import TabsVideo from "../../components/common/HomePage/TabsVideo/TabsVideo.jsx";
import SuperChanger from "../../components/common/HomePage/SuperChanger/SuperChanger.jsx";
import Card from "../../components/common/HomePage/Card/Card.jsx";


const HomePage = () => {


    return (<AppLayout>

            <Wrapper>
            <Lists/>
            <Company/>
                <Task/>
                <TabsVideo/>
                <SuperChanger/>
                <Card/>
            </Wrapper>
        </AppLayout>
    );
};

const Wrapper = styled.div`
  width: 100%;
 padding-top: 150px;
background-color: var(--bacground-color);
 
  
`;

export default HomePage;
