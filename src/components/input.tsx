import styled from 'styled-components';

export const Input = styled.input`
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryBgColor};
  border: none;
  border-radius: 4px;
  ::placeholder {
    color: ${({ theme }) => theme.placeholderColor};
  }
  padding: 0 16px;
`;