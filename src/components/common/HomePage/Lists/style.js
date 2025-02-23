import styled from "styled-components";

export const Wrapper = styled.div`

  justify-content: center;
  align-items: stretch;
  width: 100%;
  min-height: auto;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 100px;
  padding-left: 50px;
  display: flex;
  overflow: hidden;

  .container {
    width: 95%;
    max-width: 1500px;
    min-height: 100px;
    display: flex;
    gap: 50px;
    z-index: 0;
  }

  .descriptions {
    grid-column-gap: 14px;
    grid-row-gap: 14px;
    z-index: 10;
    flex-flow: column;
    flex: none;
    justify-content: center;
    align-items: flex-start;
    width: 428px;
    max-width: 540px;
    min-height: 100px;
    padding-left: 50px;
    display: flex;
  }
 
  .mobil{
    display: none;
  }
    
  .btn{
     width: 216px;
      height: 50px;
      border-radius: 60px;
      transition: all .2s;
      color: var(--text-color);
      background: #ff3a27;
      border: none;
      font-weight: 700;
      font-size:20px ;
      padding: 10px 25px;
    &:hover{
      scale: 105%;
      color: var(--text-color) !important;
      background: #ff3a27 !important;
      border: none !important;
    }
    }
   
  .descript{
    color: #ffffff59;
    letter-spacing: .4px;
    width: 100%;
    max-width: 310px;
    margin-bottom: 5px;
    padding-left: 0;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
  }
  .header{
   
    letter-spacing: -1px;
    color:#ff3a27;
    z-index: 300;
    font-size: 80px;
    font-weight: 700;
    line-height: 72px;
   width: 100%;
  }
.block{
  position: relative;
}
  .lists {
    color: #fff;
    letter-spacing: -2px;
    background-image: none;
    background-repeat: repeat;
    background-size: auto;
    font-weight: 600;
    height: 87px;
    font-family: Inter,sans-serif;
  }

  .video-wrapper {

    background-color: #ffffff0d;
    border: 1px solid #363955;
    border-radius: 20px;
    width: 100%;
    min-height: auto;
    margin-top: 0;
    overflow: hidden;
  }

  .video-container {
    
    width: 540px;
    transition-property: all;
    transition-duration: .2s;
    transition-timing-function: ease;


  }

  .content {
    width: 1300px;
    z-index: -100;
    flex: none;

    min-height: 100px;
  }

  .video {
    
    margin-bottom: -5px;
    display: block;
    height: 840px;
  }

  .reels {
    width: 1300px !important;
    height: 100%;
    margin-bottom: -5px;
    display: block;
  }


source {
  width: 100%;
  transition-property: all;
  transition-duration: .2s;
  transition-timing-function: ease;
}
.super {
  letter-spacing: -2px;
  z-index: 400;
  font-weight: 600;
  height: 87px;
  font-family: Inter,sans-serif;
  line-height: 72px;
}
  .stars{
      z-index: -200;
      position: absolute;
      inset: 10px -75px 0% auto;
  }
  @media(max-width: 768px){
    padding: 30px;
    .container{
      flex-direction: column;
    }
    .video {
      height: 380px;
    }
    .content{
      width:100%;
    }
  }
@media(max-width: 425px){
  margin: 0 auto;
  padding: 0;
  .descriptions{
   
    width: auto;
  }
  .lists{
    font-size: 51px;
    text-align: left;
  }
  .super{
    font-size: 51px;
    text-align: left;

  }
  .stars{
    width: 250px;
  }
  .btn{
    margin-left: 18%;
  }
  .content{
    display: none;
  }
  .mobil{
    display: block !important;
    z-index: -100;
    flex: none;
     padding: 15px;
    min-height: 100px;
  }
  .video-wrapper-mobil{
    background-color: #ffffff0d;
    border: 1px solid #363955;
    width: 100%;
    min-height: auto;
    margin-top: 0;
    overflow: hidden;
    border-radius: 10px;
    margin-bottom: 5px;
    display: block;
  }
  .video-container-mobil{
    width: 100%;
    transition-property: all;
    transition-duration: .2s;
    transition-timing-function: ease;
  }
  .video-mobil{
    height: 100%;
    margin-bottom: -5px;
    display: block;
    width: 100%;
  }
  
 
  
}
  @media(max-width: 375px){
    .mobil{
      width:95%;
      padding: 0;
    }
    .container{
      justify-content: flex-start;
      align-items: center;
      width: 95%;
      min-height: auto;
      margin-bottom: 0;
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      flex-flow: column;
      display: flex;
      overflow: hidden;
    }
    .descriptions{
      padding-left: 20px;
    }
    
  }
  @media(max-width:320px){
    .header{
      width: 320px;
    }
    .descriptions{
      padding-left: 20px;
    }
  }
`
