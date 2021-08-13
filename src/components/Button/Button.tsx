import styled from 'styled-components';

const Button = styled.button`
  border: 2px solid #333;
  padding: 10px 25px;
  min-width: 140px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  color: #333;
  font-weight: bold;
  background-color: unset;
  border-radius: 7px;
  min-height: 40px;
  text-transform: uppercase;
  & * {
    text-decoration: none;
  }
  &:hover {
    background-color: #32b4a5;
    border-color: #32b4a5;
    color: #1a1a1a;
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;

export default Button;
