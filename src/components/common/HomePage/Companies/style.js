import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  .container {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 500px;
    display: flex;
    overflow: hidden;
    gap: 40px;
  }

  .line1 {
    justify-content: flex-start;
    align-items: center;
    min-height: 50px;
    display: flex;
    gap: 40px;

  }

  .git {
    width: 110px;
    height: 45px;
  }

  .spoti {
    width: 165px;
    height: 45px;
  }

  .google {
    width: 144px;
    height: 45px;
  }

  .nvid {
    width: 245px;
    height: 45px;
  }

  .pint {
    width: 45px;
    height: 45px;
  }

  .cherry {
    width: 89px;
    height: 45px;
  }
.zala{
  width: 235px;
  height: 45px;
}
  .eqt{
    width: 148px;
    height: 45px;
  }
  .spotify{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .nvidia{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .line2{
    display: flex;
    align-items: center;
    gap: 150px;
  }
  .pinterest{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .zalando{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  @media(max-width: 768px){
    .container{
      padding: 30px;
    }
    .line1{
      gap: 30px;
    }
    .line2{
      gap: 50px;
    }
    .group{
      flex-direction: column;
      gap: 30px;
    }
    .git {
      width: 73px;
      height: 30px;
    }

    .spoti {
      width: 110px;
      height: 30px;
    }

    .google {
      width: 95px;
      height: 30px;
    }

    .nvid {
      width: 160px;
      height: 30px;
    }

    .pint {
      width: 30px;
      height: 30px;
    }

    .cherry {
      width: 52px;
      height: 30px;
    }
    .zala{
      width:156px;
      height: 30px;
    }
    .eqt{
      width: 98px;
      height: 30px;
    }
  }
`