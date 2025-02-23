import React from 'react';
import styled from "styled-components";
import AppLayout from "../../layouts/index.jsx";
import Lists from "../../components/common/HomePage/Lists/Lists.jsx";


const HomePage = () => {


    return (<AppLayout>

            <Wrapper>
            <Lists/>

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
