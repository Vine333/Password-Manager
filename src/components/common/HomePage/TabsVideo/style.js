import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
.container{
  max-width: 1100px;
  margin: 0 auto;
  
}
 
  .description{
    text-align: left !important;
    color: var(--text-color) !important;
    display: flex;
    gap: 10px;
    cursor: pointer;
    width: 427px;
    height: 72px;
   
  }
  .text{
    margin-bottom: 10px;
  }
  .description h2{
    font-size: 25px ;
    font-weight: 600 ;
    margin-bottom: 0;
    margin-top: 8px;
  }
  .description p{
    font-size: 18px ;
    font-weight: 600 ;
    color: var(--secondary-txtColor);
    
  }
  .description p:active{
    color: var(--secondary-txtColor);
  }
  .video{
    width: 567px;
    height: 420px;
    border-radius: 20px;
  }
  .video-container{
    width: 580px;
    height: 450px;
    margin: 0 auto;
  }
  .progress {
    background-color: #ffffff1c;
    border-radius: 20px;
    width: 4px;
    overflow: hidden;
  }

  .prog {
    background-color: #ec5842;
    border-radius: 20px;
    width: 100%;
    transform-origin: left top;
    transition: height 30000ms linear, -webkit-transform 30000ms linear;
    height: 0%;
  }
  @media(max-width: 1024px){
    .video{
      width: 499px;
      height: 370px;
    }
    .container{
      width: 942px;
    }
    .description{
      width: 367px;
     height: auto;
    }
  }
  @media(max-width: 768px){
    .video{
      width: 280px;
      height: 205px;
    }
    .video-container{
      width: 280px;
      height: 205px;
      margin: 0;
    }
    .container{
      width: 622px;
    }
    .description h2{
      font-size: 22px;
    }
    .description p{
      font-size: 16px;
    }
  }
  @media(max-width: 425px){
    .container{
      width: 360px;
    }
  
  }
  @media(max-width: 320px){
    .container{
      width: 310px;
    }
  }
`