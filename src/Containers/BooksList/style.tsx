import styled from 'styled-components';

import Theme from 'theme';

export const BooksListStyle = styled.div`
  padding-top: 45px;
`;

export const BooksListTitle = styled.div`
  font-size: 20px;
`;

export const BooksListFilter = styled.div`
  padding: 15px 0 30px;
`;

export const BooksListWrapper = styled.ul`
  margin-top: 15px;
  padding: 5px 15px;

  border-radius: ${Theme.borderRadius};
  background: ${Theme.light};
`;

export const BooksListItem = styled.li`
  padding: 10px 0;

  color: ${Theme.main};

  &:not(:last-of-type) {
    border-bottom: 1px solid ${Theme.lightgray};
  }
`;

export const BookTitle = styled.div`
  font-size: 16px;
`;
