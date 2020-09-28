import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}
export const StarshipsListWrapper = styled.div<Props>`
  max-height: ${props => (props.isVisible ? '2000px' : 0)};
  margin-top: 30px;
  overflow: hidden;

  transition: max-height 1s;
`;
