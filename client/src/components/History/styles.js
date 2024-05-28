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

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

export const ListItemText = styled.div`
  font-weight: 400;
  font-size: ${({ secondary }) => (secondary ? "0.875rem" : "1rem")};
  line-height: 1.5;
  display: block;
  color: ${({ secondary }) => (secondary ? "rgba(0, 0, 0, 0.6)" : "#000")};
`;

export const ErrorMessage = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  background-color: #f8d7da;
  color: #721c24;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
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

export const EmptyHistoryMessage = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 4px;
  color: #6c757d;
  text-align: center;
  font-size: 16px;
`;