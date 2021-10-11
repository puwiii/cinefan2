import styled, { createGlobalStyle, keyframes } from "styled-components";
import Link from "next/link";
const GlobalStyles = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
  scroll-behavior: smooth;
}

body{
  font-family: 'Poppins', sans-serif;
  font-weight: 400; 
  min-height: 100vh;
  background: ${({ theme }) => theme.color_background_400};
  color: ${({ theme }) => theme.color_text_400};
  line-height: 1.3;
  font-size: .9rem;
  overflow: overlay;
}

@media screen and (min-width: 425px){
  ::-webkit-scrollbar-thumb {
      width: 5px;
      border-radius: 500px;
    }
  
    ::-webkit-scrollbar {
      cursor: pointer;
      width: 14px;
      height: 14px;
    }
  
    ::-webkit-scrollbar-thumb {
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 9999px;
      background-color: ${({ theme }) => theme.color_text_400};
    }
  
    ::-webkit-scrollbar-track {
      background: transparent;
      //background: transparent;
    }
}

a {
color: inherit;
/* user-select: none;  */
text-decoration:none;
}

/* a:visited {
  color: inherit;
} */

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

button{
  outline: none;
  border: none;
  background: transparent;
  border-radius: 100px;
}

input,
label,
select,
button,
textarea {
  color: ${({ theme }) => theme.color_text_400};
  line-height: 1.3;
  font-size: .9rem;
  font-family:
  //"Source Sans Pro", //3
  //"Lora", //1.3
  //"Poppins", //8
  //"Rubik", //5
  //"Exo 2", //3
  //"Quicksand", //7,7
  //"Nunito", //7.8 
  //"Open Sans", //7
  // "Lato",
  // "Lexend",
  "Poppins", sans-serif;

}

button:disabled {
  cursor: not-allowed;
  filter: grayscale(100);
  //border: 2px dashed #ccc;
}
`;

//use backgroound: linear-gradient(90deg, ${theme.color_background_300} 0px, rgba(255,255,255,.2) 40px, ${theme.color_background_300} 80px)
export const skeletonAnimation = keyframes`
 from{
   opacity:.02;
    background: #fff;
  }
  to{
    opacity:.05;
   background: #fff;
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 80px;

  @media screen and (max-width: 960px) {
    padding: 0 25px;
  }
`;

export default GlobalStyles;
