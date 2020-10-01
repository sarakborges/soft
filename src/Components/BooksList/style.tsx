import styled from 'styled-components';

import Theme from 'theme';

export const BooksListWrapper = styled.ul`
  margin-top: 15px;
  padding: 5px 15px;

  border-radius: ${Theme.borderRadius};
  background: ${Theme.light};
`;

export const BooksListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 0;

  color: ${Theme.main};

  &:not(:last-of-type) {
    border-bottom: 1px solid ${Theme.lightgray};
  }
`;

export const BookTitle = styled.div`
  flex: 1;
  padding-right: 15px;

  font-size: 16px;

  > a {
    color: ${Theme.main};

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const BookOptions = styled.div`
  display: flex;
  align-items: center;

  > button:not(:last-of-type) {
    margin-right: 10px;

    @media (max-width: 500px) {
      margin-right: 5px;
    }
  }
`;
