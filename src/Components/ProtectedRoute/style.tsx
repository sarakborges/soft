import styled from 'styled-components';

import Theme from 'theme';

export const LogoutArea = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 15px 0;

  background: ${Theme.lightish};
`;

export const WelcomeMessage = styled.div`
  font-size: 20px;
`;
