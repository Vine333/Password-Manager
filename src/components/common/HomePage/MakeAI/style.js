import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  .container{
    max-width: 1100px;
    margin: 0 auto;

  }
  .video-container{
    margin-bottom: 20px;
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
  .description{
    h2{
      margin: 0;
      font-size: 25px;
      color: var(--text-color);
      font-weight: 700;
    }
    p{
      color: var(--secondary-txtColor);
      font-size: 18px;
      font-weight: 600;
    }
    text-align: left !important;
    color: var(--text-color) !important;
    display: flex;
    gap: 10px;
    cursor: pointer;
    width: auto;
    height: 72px;
    justify-content: space-between;

  }
  .head{
    padding-left: 30px;
    margin-bottom: 60px;
  }
  .ant-tabs-nav-list{
 gap: 50px!important;
    justify-content: center !important;
  }
  .ant-tabs-nav-wrap{
    justify-content: center !important;
  }
  @media(max-width: 1024px){
    .ant-tabs-nav-list{
      margin-top: 40px;
    }
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
    .ant-tabs-tab{
      margin: 0  !important;
    }
    .ant-tabs-nav-wrap{
      justify-content: center !important;
      align-items: flex-start !important;
    }
    .ant-tabs-nav-list{
      text-align: center !important;
      width: 100% !important;
      flex-direction: column !important;
      align-items: flex-start !important;
      justify-content: flex-start !important;
    }
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
    .ant-tabs{
      padding: 0 !important;
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