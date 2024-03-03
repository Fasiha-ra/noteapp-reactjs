import styled from "styled-components";
export const Notes = styled.div`
margin: 50px auto;
background-color: #fff;
box-shadow: 5px 5px 35px -5px rgba(0, 0, 0, 0.3);
width: 300px;
height: 200px;
form{
    display: flex;
    flex-direction: column;
input{
    outline: none;
    border: none;
    /* background:transparent; */
    padding: 15px 10px;
    box-shadow: 5px 5px 20px -5px rgba(0, 0, 0, 0.1);
}
textarea{
    outline: none;
    border: none;
    /* background:transparent; */
    padding: 15px 10px;
    box-shadow: 5px 5px 20px -5px rgba(0, 0, 0, 0.1);
    height: 100px;
    resize: none;
}

}
button{
   position: relative;
  right: -254px;
}
`;