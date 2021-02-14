import Styled from "styled-components";

export const List = Styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = Styled.li`
  padding: 0 8px;
`;
