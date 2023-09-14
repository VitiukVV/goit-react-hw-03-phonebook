import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  display: block;
  margin-top: 5px;
  font-size: 16px;
`;

export const ButtonSubmit = styled.button`
  width: 170px;
  font-weight: 800;
  font-size: 16px;
  line-height: calc(20 / 16);
  padding: 15px 30px;
  background: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);
  border-radius: 100px;
  border: transparent;
  color: #ffffff;
`;
