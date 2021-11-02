import styled from 'styled-components';

import scroll from 'react-perfect-scrollbar';

export const Scroll = styled(scroll)`
  height: calc(100% - 140px);
  width: 100%;
  background: linear-gradient(to bottom, #ffffffe6,#c7bff7ed), url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  height: 80%;
  width: 100%;
`;
