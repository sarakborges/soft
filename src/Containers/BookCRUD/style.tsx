import styled from 'styled-components';

export const CRUDForm = styled.form`
  padding: 45px 0;
`;

export const CRUDFormRow = styled.div`
  padding: 15px 0;
`;

export const CRUDActions = styled.div`
  display: flex;

  > a,
  > button {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;
