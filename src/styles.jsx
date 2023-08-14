import styled from "styled-components";
import { FcFullTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
`;

export const ToDoList = styled.div`
  background: #f7f7f7;
  padding: 30px 20px;
  border-radius: 5px;

  ul {
    padding: 0;
    margin-top: 60px;
  }
`;

export const Input = styled.input`
  border: 2px solid #d1d3d466;
  border-radius: 5px;
  height: 40px;
  margin-right: 40px;
  width: 340px;
`;

export const Button = styled.button`
  background-color: #0097ff;
  width: 130px;
  border: none;
  height: 40px;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;

  &&:hover {
    opacity: 0.8;
  }

  &&:active {
    opacity: 0.6;
  }
`;

export const ListItem = styled.div`
  height: 60px;
  width: 500px;
  border: 5px;
  background-color: ${(props) => (props.isFinished ? "#e4e4e4" : "#333333")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 0 10px;
  color: #ffffff;
`;

export const CheckButton = styled(FcCheckmark)`
  cursor: pointer;
  font-size: 25px;
`;

export const Trash = styled(FcFullTrash)`
  cursor: pointer;
  font-size: 25px;
`;

export const NoItemsMessage = styled.h3`
  font-size: 20px;
  text-align: center;
  color: #ff0000;
`;
