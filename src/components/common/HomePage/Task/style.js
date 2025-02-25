import styled from "styled-components";

export const Wrapper =styled.div`
width: 100%;
.container{
  margin: 0 auto ;
  max-width: 1100px;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 60px;
}
  .video{
    width: 1098px;
    height: 823px;
    border-radius: 20px;
  }
  .descriptions{
    font-size: 50px;
    font-weight: 700;
    max-width: 864px;
    line-height: 53px;
    color:#535460;
  }
  .white-color{
    font-weight: 700;
    color: var(--text-color);
  }
  .descriptions-container{
    display: flex;
    padding-right: 0;
    width: 100%;
    padding-left: 30px;
    flex-flow: column;
    gap: 20px;
  }
  @media(max-width: 1024px){
    .video{
      width: 970px;
      height: 728px;
    }
    .video-container{
      display: flex;
      justify-content: center;
      margin: 0 auto;
    }
    .descriptions-container {
      padding-left: 60px;
    }
  }
  @media(max-width: 768px){
    .container{
      width: 85%;
      gap: 30px;
    }
    .video{
      width: 650px;
      height: 488px;
    }
    .descriptions-container{
     padding-left: 30px;
    }
    .descriptions{
      
    }
  
  }
  @media(max-width: 425px){
    .video{
      width: 359px;
      height: 269px;
    }
    .descriptions{
      font-size: 35px;
      line-height: 38px;
      padding: 0;
    }
    .descriptions-container{
      padding-left: 0;
    }
  }
  @media(max-width: 375px){
    .video{
      width: 318px;
      height: 234px;
      margin: 0 auto; 
    }
    .container{
      width: 100%;
  }
    .descriptions-container{
      padding-left: 10px;
    }
   
  }
  @media(max-width: 320px){
    .video{
      width: 270px;
      height: 202px;
    }
    .descriptions-container{
      padding: 10px;
    }
  }
`