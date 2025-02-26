import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
  }

  .container-btn {
    display: flex;
    gap: 20px;
  }

  .card {
    color: var(--text-color);
    background: var(--secondary-bg);
    border-radius: 20px;
    width: 50%;
    height: 823px;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .pro {
    border: 1px solid var(--border-color);

  }

  .pro-team {
    border: 1px solid var(--border-color);
  }

  .header-pro-team {
    position: relative;
    color: var(--border-color);
  }

  .header-pro {
    position: relative;
    color: var(--border-color);
  }

  .crown {
    position: absolute;
    top: -47px;
    right: 13px;
    width: 65px;
  }

  .stars {
    width: 160px;
    position: absolute;
    top: -40px;


  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    padding-top: 35px;
    border-bottom: 1px solid #ffffff0a;

    h2 {
      margin: 0;
      font-size: 28px;
      font-weight: 800;
      line-height: 38px;
    }

    p {
      text-align: center;
      letter-spacing: .1px;
      width: 100%;
      max-width: 190px;
      font-family: Inter, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }

  .price {
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    max-width: 170px;
    min-height: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 55px;
    line-height: 55px;
    display: flex;
    gap: 10px;
  }

  .month {
    font-size: 14px;
    color: var(--secondary-txtColor);
    font-weight: 600;

  }

  .main {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 16px;
    font-weight: 600;
    padding: 35px 35px 40px;
    flex-direction: column;
  }

  .point {
    display: flex;
    gap: 10px;
    font-size: 15px;
  }

  .group1 {
    flex: 1;
    display: flex;
    gap: 25px;
  }

  .group2 {
    flex: 1;
    display: flex;
    gap: 25px;
  }

  @media (max-width: 1024px) {

    .cards {
      flex-direction: column;
    }

    .group1 {
      order: 1;
      width: 935px;
      margin-bottom: 40px;
    }

    .group2 {
      order: 2;
      width: 935px;
    }
  }
  @media (max-width: 768px) {
    .container{
      margin-bottom: 50px;
    }
    .group1 {
      width: 750px;
    }

    .group2 {
      width: 750px;
    }
    .prising{
      width: 750px;
    }
  }
  @media(max-width: 425px){
    .group1{
      flex-direction: column;
      width: 400px;
    }
    .group2{
      width: 400px;
      flex-direction: column;
    }
    .card{
      width: 100%;
    }
    .prising{
      width: 362px;
      height: 120px;
    }
  }
  @media(max-width: 375px){
    .group1{
     
      width: 315px;
    }
    .group2{
      width: 315px;
    
    }
  }
  @media(max-width: 320px){
    .group1{

      width: 270px;
    }
    .group2{
      width: 270px;

    }
    .prising{
      width: 272px;
    }
    .container-btn{
      gap: 5px;
    }
  }
`