import styled from "styled-components";

const StyledInputBox = styled.div``;

const StyledIcon = styled.span``;

const StyledInput = styled.input``;

const StyledLabel = styled.label``;

export const Input = (label, icon) => {
  return (
    <StyledInputBox>
      <StyledIcon></StyledIcon>
      <StyledInput></StyledInput>
      <StyledLabel>{}</StyledLabel>
    </StyledInputBox>
  );
};
