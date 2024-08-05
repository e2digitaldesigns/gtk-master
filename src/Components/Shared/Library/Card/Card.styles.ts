import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  border: 0.0625rem solid ${props => props.theme.colors.border1};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.05);
`;

export const CardTitle = styled.h2``;

export const CardBody = styled.div`
  padding: 1.25rem;
`;

export const CardFooter = styled.div``;

export const CardImage = styled.img``;

export const CardButton = styled.button``;

export const CardSeparator = styled.div`
  padding: 0;
  height: 0.0625rem;
  margin: 1rem 0;
  background-color: ${props => props.theme.colors.border1};
`;
