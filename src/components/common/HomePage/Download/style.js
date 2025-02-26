import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
  margin-top: 40px;
  margin-bottom: 70px;
  .container{
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px 0;
  }
  .link{
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .group1{
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 20px;
  }
  a{
    border-radius: 70px;
    padding: 20px 35px;
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    text-decoration: none;
    transition: all .2s;
    color: var(--text-color);
    text-align: center;
    
  }
  .group2{
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 20px;
  }
  .mac{
    background: #2f202d;
    color: #f84f39;
    font-weight: 800;
    &:hover{
      scale: 105%;
      font-size: 45px;
      line-height: 45px;
      outline: 0;
      text-align: center;
    }
  }
  .web{
    background: #2f223d;
    color: #f866da;
    font-weight: 800;
    &:hover{
      scale: 105%;
      font-size: 45px;
      line-height: 45px;
      outline: 0;
      text-align: center;
    }
  }
  .ios{
    background: #1a2740;
    color: #2590f2;
    font-weight: 800;
    &:hover{
      scale: 105%;
      font-size: 45px;
      line-height: 45px;
      outline: 0;
      text-align: center;
    }
  }
  .android{
    background: #1a2732;
    color: #2a966f;
    font-weight: 800;
    &:hover{
      scale: 105%;
      font-size: 45px;
      line-height: 45px;
      outline: 0;
      text-align: center;
    }
  }
  @media(max-width: 425px){
    .image{
      width: 400px;
    }
    .link{
      flex-direction: column;
    }
  }
  @media(max-width: 375px){
    .image{
      width: 350px;
    }
  }
  @media(max-width: 320px){
    .group1{
      flex-direction: column;
    } 
    .group2{
      flex-direction: column;
    }
    .image{
      width: 300px;
    }
  }

`