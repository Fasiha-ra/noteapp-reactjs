import styled from "styled-components";
export const ShowNotesStyles = styled.section`
  margin: 0 10px;
  /* margin: 50px auto; */

  .container {
    max-width: 1100px;
    padding: 0 20px;
    margin: 0 auto;
  }
  .note {
    display: flex;
    justify-content: flex-start;
    gap: 50px;
    flex-wrap: wrap;
  }
  .notes {
    background-color: #fff;
    box-shadow: 5px 5px 35px -5px rgba(0, 0, 0, 0.3);
    width: 300px;
    height: 200px;
    h1{
        padding:10px 20px;
        font-size: 24px;
    }
    p{
        padding: 0px 20px;
        font-size: 18px;
    }
  }
  button{
    position: relative;
    top: 35px;
    right: -254px;
  }
`;
