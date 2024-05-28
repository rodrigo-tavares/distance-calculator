import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  min-width: 500px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  min-width: 120px;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonClear = styled(Button)`
  background-color: #6c757d;
  color: #ffffff;
  &:hover {
    background-color: #5a6268;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Message = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${(props) => (props.error ? "#f8d7da" : "#d4edda")};
  color: ${(props) => (props.error ? "#721c24" : "#155724")};
`;

export const HistoryButton = styled(Link)`
  display: inline-block;
  padding: 10px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background-color: #5a6268;
  }
`;
