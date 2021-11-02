import styled from 'styled-components';

import { darken } from 'polished'

export const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px calc(12px * 5);
  margin-top: 18px;

  > div {
    padding: 0px 2px;
    width: calc(100% / 6);
    height: 100%;

    > a {
      width: 100%;
      height: 100%;
      text-align: center;
      background: #d8affe;
      display: block;
      padding: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: 600;
      border-radius: 8px;
      box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 1px 4px 0px rgb(0 0 0 / 14%), 
        0px 1px 4px 0px rgb(0 0 0 / 12%);

        > svg {
          margin-right: 5px;
        }

        &:hover {
          background: ${darken(0.03, '#d8affe')};
          transition: 0.5s;
        }
    }

    > .selected {
      background: rgb(145,162,234);
      background: linear-gradient(149deg, rgba(145,162,234,1) 0%, rgba(163,144,251,1) 52%,
        rgba(167,142,225,1) 100%); 
        
        &:hover {
          background: linear-gradient(149deg, ${darken(0.03, 'rgba(145,162,234,1)')} 0%, ${darken(0.03, 'rgba(163,144,251,1)')} 52%,
            ${darken(0.03, 'rgba(167,142,225,1)')} 100%);
          transition: 0.5s;
        }
    }
  }
`;
