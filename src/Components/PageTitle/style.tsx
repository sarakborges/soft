import styled from 'styled-components';

export const PageTitleStyle = styled.div`
  flex: 1;
  font-size: 20px;

  > span {
    font-weight: 700;
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }

  @media (max-width: 460px) {
    font-size: 16px;
  }
`;
