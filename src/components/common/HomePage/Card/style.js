import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
  padding-top: 100px;
  .container{
    max-width: 1100px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }
  .blue{
    display: flex;
    flex-direction: column;
    gap: 20px;
    
  } 
  img{
    border-radius: 20px;
  }
.blue-main{
  color: var(--text-color);
  font-size: 25px;
  font-weight: 600;
  padding-left: 30px;
}
  .blue-description{
    color: var(--secondary-txtColor);
    font-size: 18px;
    font-weight: 600;
    padding-left: 30px;
  }
  .red{
    display: flex;
    flex-direction: column;
    gap: 20px;
    
  }
  .red-main{
    color: var(--text-color);
    font-size: 25px;
    font-weight: 600;
    padding-left: 30px;
  }
  .red-description{
    color: var(--secondary-txtColor);
    font-size: 18px;
    font-weight: 600;
    padding-left: 30px;
  }
  .image{
    width:523px;
    height:395px;
  }
  @media(max-width: 1024px){
    .image{
      width: 459px;
      height: 346px;
    }
    .container{
      padding-inline: 30px;
    }
  }
  @media(max-width: 768px){
    .container{
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 50px;
    }
    .blue-main{
      padding: 0;
      text-align: center;
    }
    .red-main{
      padding: 0;
      text-align: center;
    }
    .blue-description{
      padding: 0;
      text-align: center;
    }
    .red-description{
      padding: 0;
      text-align: center;
    }
  }
  @media(max-width: 425px){
    .image{
      width: 359px;
      height: 270px;
    }
  }
  @media(max-width: 375px){
    .image{
      width: 316px;
      height: 238px;
    }
  }
  @media(max-width: 320px){
    .image{
      width: 270px;
      height: 203px;
    }
  }
`
