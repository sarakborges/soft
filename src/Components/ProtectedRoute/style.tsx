import styled from 'styled-components';

import Theme from 'theme';

export const LogoutArea = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 9;

  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 30px 0;

  background: ${Theme.dark};
`;

export const WelcomeMessage = styled.div`
  font-size: 20px;
`;
