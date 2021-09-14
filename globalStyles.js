import styled, { createGlobalStyle } from "styled-components";
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
  font-family: 'Lato', sans-serif;
  font-weight: 400; 
  min-height: 100vh;
  background: ${({ theme }) => theme.color_background_400};
  line-height: 1.3;
  font-size: 1rem;
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
/* color: inherit;
user-select: none; */
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
}

input,
label,
select,
button,
textarea {
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
  "Lato", sans-serif;
}

button:disabled {
  cursor: not-allowed;
  filter: grayscale(100);
  //border: 2px dashed #ccc;
}
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

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid transparent;
  padding: 1em;
  letter-spacing: 0px;
  font-weight: 500;
  transition: border-color 124ms linear, background-color 125ms linear;
  white-space: nowrap;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  border-radius: 4px;
  border: 2px solid transparent;
  padding: 1em;
  font-size: 0.9rem;
  letter-spacing: -0.5px;
  color: #fff;
  font-weight: 600;
  transition: border-color 124ms linear, background-color 125ms linear;
  white-space: nowrap;

  background: ${({ variant, theme }) => {
    switch (variant) {
      case "github":
        return `#6e5494`;
      case "linkedin":
        return `#0077b5`;
      default:
        return theme.color_pink_400;
    }
  }};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.color_text_400};
    color: ${({ theme }) => theme.color_text_400};
    background-color: transparent;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const LinkButtonRounded = styled(LinkButton)`
  border-radius: 100px;
  font-size: 1.4rem;
  padding: 0.6em;
`;

export const ReactLinkButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  border-radius: 4px;
  background: ${({ theme }) => theme.color_pink_400};
  border: 3px solid transparent;
  padding: 1em;
  font-size: 0.9rem;
  letter-spacing: -0.5px;
  color: #fff;
  font-weight: 600;
  transition: border-color 124ms linear, background-color 125ms linear;
  white-space: nowrap;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.color_text_400};
    color: ${({ theme }) => theme.color_text_400};
    background-color: transparent;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const Section = styled.section`
  width: 100%;
  padding: 150px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ variantNegative, theme }) =>
    variantNegative ? theme.color_text_400 : theme.color_background_400};

  background: ${({ variantColor, variantNegative, theme }) =>
    variantColor
      ? variantNegative
        ? theme.color_text_400
        : theme.color_background_300
      : variantNegative
      ? theme.color_text_400
      : theme.color_background_400};

  @media screen and (max-width: 960px) {
    padding: 100px 0;
  }
`;

export const Input = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.color_text_400};
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color_text_400 + "66"};
  padding: 0.8em;

  transition: border-color 125ms linear;

  &:focus-within {
    border-color: ${({ theme }) => theme.color_pink_400};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color_text_400 + "55"};
  }
`;

export const InputTextArea = styled.textarea`
  background: transparent;
  color: ${({ theme }) => theme.color_text_400};
  width: 100%;
  font-size: 1rem;
  outline: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color_text_400 + "66"};

  padding: 0.8em;
  transition: border-color 125ms linear;

  &:focus-within {
    border-color: ${({ theme }) => theme.color_pink_400};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color_text_400 + "55"};
  }
`;

export default GlobalStyles;
