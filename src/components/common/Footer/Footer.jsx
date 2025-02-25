import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (<Wrapper>
        <div className="container">
            <div className='container-col'>

                <div className='company-empty'>
                    <div className="col company">
                        <div className='color-company'>Company</div>
                        <a href="">Home</a>
                        <a href="">Updates</a>
                        <a href="">Pricing</a>
                        <a href="">Careers</a>
                        <a href="">Suggestions</a>
                        <a href="">Help center</a>
                    </div>
                    <div className="col empty">
                        <div style={{color: "transparent"}}>empty</div>
                        <a href=""> Open source</a>
                        <a href="">Cookies</a>
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                        <a href="">Contact</a>
                        <a href="">Blog</a>
                    </div>
                </div>
                <div className='app-social'>
                    <div className="col app">
                        <div className='color-app'>App</div>
                        <a href="">Mac</a>
                        <a href="">Web</a>
                        <a href="">iOS</a>
                        <a href="">Android</a>
                        <a href="">sign in</a>
                    </div>
                    <div className="col social">
                        <div className='color-social'>Social</div>
                        <a href="">Github</a>
                        <a href="">LinkedIn</a>
                        <a href="">Instagram</a>
                        <a href="">X</a>
                    </div>
                </div>
            </div>

            <div className="col updates">
                <div className='color-update'>Updates</div>
                <div className='card'>
                    <div className='version'>version 1.24.0</div>
                    <div className='usability'>Usability<br/>
                         Improvements<br/>
                        & Bug Fixes
                    </div>
                    <div className='january'>January 30,2025</div>
                </div>
            </div>

        </div>
        <div className="legal">
            <span className='hover-span'> ⓒ Superlist 2024</span>
        </div>
    </Wrapper>);
};
const Wrapper = styled.div`
  width: 100%;
  .container {
    margin: 0 auto;
    max-width: 1050px;
    display: flex;
    padding: 40px 0;
    justify-content: space-between;
    
  }
  .card{
    width: 230px;
    height: 210px;
    padding: 20px 20px 30px 25px;
    background-color: #20202e;
    border-radius: 10px;
    max-width: 230px;
    transition: all .2s cubic-bezier(.215,.61,.355,1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 0;
    &:hover{
      background-color: #262638;
    }
    
  }
  .january{
font-size: 12px;
    color: var(--text-color);
    font-family: Inter,sans-serif;
}
  .usability{
    font-size: 25px;
    font-family: Haffer,sans-serif;
    font-weight: 600;
    max-width: 100%;
    line-height: 33px;
    color: var(--text-color);
  }
  .version{
    color: #8E8DA0;
    font-family: Inter,sans-serif;
    font-size: 14px;
  }
.app-social {
  display: flex;
  width: 50%;
  justify-content: center;
  
  text-align: left;
  a{
    color: var(--secondary-txtColor);
    font-size: 14px;
    font-weight: 500;
    padding: 10px 0;
    font-family: Inter,sans-serif;
    transition: all .2s cubic-bezier(.215,.61,.355,1);
    &:hover{
      color: var(--text-color);
    }
  }
}
  .updates{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .color-app {
color: #F866DA;
    font-size: 16px;
    font-family: Haffer,sans-serif;
  }
  .color-social{
    color: #2590F2;
    font-size: 16px;
    font-family: Haffer,sans-serif;
  }
  .color-update{
    color: #2a966F;
    font-size: 16px;
    font-family: Haffer,sans-serif;
  }
  .company-empty {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    text-align: left;
    a{
      color: var(--secondary-txtColor);
      font-size: 14px;
      font-weight: 500;
      padding: 10px 0;
      font-family: Inter,sans-serif;
      transition: all .2s cubic-bezier(.215,.61,.355,1);
      &:hover{
        color: var(--text-color);
      }
    }
  }
  
  .color-company{
    color: #FF3A27;
    font-size: 16px;
    font-family: Haffer,sans-serif;
  }
  .legal {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 50px 0;


  }

  .hover-span {
    color: var(--secondary-txtColor);
    transition: color .2s cubic-bezier(.23, 1, .32, 1);
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    font-family: Inter, sans-serif;
  }

  .hover-span:hover {
    color: var(--text-color);
  }

  .col {
    display: flex;
    justify-content: flex-start;
   
    flex-direction: column;
    width: 50%;
  }
  .container-col{
    display: flex;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
  }
@media(max-width: 1024px){
  .container{
    width: 90%;
  }
}
  @media(max-width: 768px){
   .container-col{
     flex-direction: column;
     display: flex;
     justify-content: center;
     align-items: flex-start;
     gap: 40px;
     width: auto;
   
    
   }
    .update{
      width: 50%;
      order: 2;
    }
    .app-social{
      order: 3;
     
      gap: 77%;  
    }
    .col{
      width: 50%;
     a{
       width: 200px;
     }
      
    }
    .container{
      padding: 0;
    }
    .company-empty{
      order: 1;
      gap: 60%;
      justify-content: normal;
    }
    .app-social{
      justify-content: normal;
      
    }
  }

  @media(max-width: 425px){
    .container{
      width: 100%;
      padding: 20px 20px 30px;
      flex-direction: column;
      margin: 0;
    }
    .container-col{
      order: 1;
    }
    .updates{
      order: 2;
    }
    .col a {
      width: auto;
    }
  }
 @media(max-width: 375px){
   .container{
     padding: 30px 10px 0px 10px;
   }
 }
`
export default Footer;