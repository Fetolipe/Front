import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=K2D:800&display=swap");
  background: #030303;
  color: #d2d2d2;
  height: 100%;
  background-image:  url(https://wallpaperplay.com/walls/full/7/7/1/363010.jpg);
  background-size: cover;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
  nav {
    background-color:rgba(50, 101, 134, 0.555);
    height: 80px;
    width: 100%;
    color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
  }
  nav .link {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
 

  form {
    width: 100%;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
  }

  form p {
    font: 76px "K2D", sans-serif;
    -webkit-font-smoothing: antialiased !important;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 50px;
    line-height: 110px;
  }
  form p sub {
    font: 60px "K2D", sans-serif;
    -webkit-font-smoothing: antialiased !important;
    color: rgba(255, 255, 255, 0.6);
  }

  label,
  input,
  button {
    width: 100%;
  }

  input,
  button {
    height: 40px;
    border: 0;
    font-size: 1.2em;
    outline: 0;
  }

  input {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 0 15px;
  }

  button {
    margin-top: 20px;
    margin-bottom: 80px;
    font-weight: bold;
  }
  quadro-link{
    width: 40%;
    max-width: 500px;
    height: 40%;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   

  }
  @media only screen and (max-device-width: 900px) {
  background-color: #8C2B2B;
  width: 100%;
  height:100vh;
  background: url('https://d2ykdu8745rm9t.cloudfront.net/cover/i/008/818/336/Vaga3-4845.png?rect=0,0,1000,1000&q=98&fm=jpg&fit=max') no-repeat bottom center scroll;
  background-position:center;
  background-size: cover;
  border-width: medium;

  div nav{
    
  background-color:rgba(75, 75, 76, 0.555);
  text-align: center;
  margin-top: 10px;
  margin-left:2px;
  margin-right: 2px;
  font-size: 2em;
  color:#232323; 
  text-shadow: 6px 6px 6px rgba(0,0,0,0.5);
  box-shadow: 6px 6px 6px rgba(0,0,0,0.5);  

  }





}
`;
