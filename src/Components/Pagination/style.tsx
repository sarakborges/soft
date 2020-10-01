import styled from 'styled-components';

export const PaginationWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 0;
`;

interface Props {
  currentItem: boolean;
}
export const PaginationItem = styled.li<Props>`
  margin: 5px;
`;
