import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #308cd9;
  padding: 13px 20px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  color: inherit;
  font-weight: bold;
  background-color: unset;
  border-radius: 7px;

  & * {
    text-decoration: none;
  }
  &:hover {
    background-color: rgba(48, 140, 217, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;

export default Button;
