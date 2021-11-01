import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  width: 100%;
  height: 60px;

  > * {
    width: calc(100% / 3);
    padding: 0px 12px;
  }

  > .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;

    > * {
      font-size: 14px;
      color: #333;
      font-weight: 600;
    }
  }

  > .logo {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;

    > a {
      height: 100%;
        
      > img {
        max-width: 100%;
        max-height: 100%;
        cursor: pointer;
      }
    }
  }

  > .other {
    justify-content: flex-end;
    max-height: 100%;
    padding: 0px;
    
    > .content-other {
      display: flex;
      height: 100%;

      > .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        cursor: pointer;
        position: relative;

        > svg.bell {
          display:block;
          -webkit-animation: ring 4s .7s ease-in-out infinite;
          -webkit-transform-origin: 50% 4px;
          -moz-animation: ring 4s .7s ease-in-out infinite;
          -moz-transform-origin: 50% 4px;
          animation: ring 4s .7s ease-in-out infinite;
          transform-origin: 50% 4px;
        }

        @-webkit-keyframes ring {
          0% { -webkit-transform: rotateZ(0); }
          1% { -webkit-transform: rotateZ(30deg); }
          3% { -webkit-transform: rotateZ(-28deg); }
          5% { -webkit-transform: rotateZ(34deg); }
          7% { -webkit-transform: rotateZ(-32deg); }
          9% { -webkit-transform: rotateZ(30deg); }
          11% { -webkit-transform: rotateZ(-28deg); }
          13% { -webkit-transform: rotateZ(26deg); }
          15% { -webkit-transform: rotateZ(-24deg); }
          17% { -webkit-transform: rotateZ(22deg); }
          19% { -webkit-transform: rotateZ(-20deg); }
          21% { -webkit-transform: rotateZ(18deg); }
          23% { -webkit-transform: rotateZ(-16deg); }
          25% { -webkit-transform: rotateZ(14deg); }
          27% { -webkit-transform: rotateZ(-12deg); }
          29% { -webkit-transform: rotateZ(10deg); }
          31% { -webkit-transform: rotateZ(-8deg); }
          33% { -webkit-transform: rotateZ(6deg); }
          35% { -webkit-transform: rotateZ(-4deg); }
          37% { -webkit-transform: rotateZ(2deg); }
          39% { -webkit-transform: rotateZ(-1deg); }
          41% { -webkit-transform: rotateZ(1deg); }

          43% { -webkit-transform: rotateZ(0); }
          100% { -webkit-transform: rotateZ(0); }
        }

        @-moz-keyframes ring {
          0% { -moz-transform: rotate(0); }
          1% { -moz-transform: rotate(30deg); }
          3% { -moz-transform: rotate(-28deg); }
          5% { -moz-transform: rotate(34deg); }
          7% { -moz-transform: rotate(-32deg); }
          9% { -moz-transform: rotate(30deg); }
          11% { -moz-transform: rotate(-28deg); }
          13% { -moz-transform: rotate(26deg); }
          15% { -moz-transform: rotate(-24deg); }
          17% { -moz-transform: rotate(22deg); }
          19% { -moz-transform: rotate(-20deg); }
          21% { -moz-transform: rotate(18deg); }
          23% { -moz-transform: rotate(-16deg); }
          25% { -moz-transform: rotate(14deg); }
          27% { -moz-transform: rotate(-12deg); }
          29% { -moz-transform: rotate(10deg); }
          31% { -moz-transform: rotate(-8deg); }
          33% { -moz-transform: rotate(6deg); }
          35% { -moz-transform: rotate(-4deg); }
          37% { -moz-transform: rotate(2deg); }
          39% { -moz-transform: rotate(-1deg); }
          41% { -moz-transform: rotate(1deg); }

          43% { -moz-transform: rotate(0); }
          100% { -moz-transform: rotate(0); }
        }

        @keyframes ring {
          0% { transform: rotate(0); }
          1% { transform: rotate(30deg); }
          3% { transform: rotate(-28deg); }
          5% { transform: rotate(34deg); }
          7% { transform: rotate(-32deg); }
          9% { transform: rotate(30deg); }
          11% { transform: rotate(-28deg); }
          13% { transform: rotate(26deg); }
          15% { transform: rotate(-24deg); }
          17% { transform: rotate(22deg); }
          19% { transform: rotate(-20deg); }
          21% { transform: rotate(18deg); }
          23% { transform: rotate(-16deg); }
          25% { transform: rotate(14deg); }
          27% { transform: rotate(-12deg); }
          29% { transform: rotate(10deg); }
          31% { transform: rotate(-8deg); }
          33% { transform: rotate(6deg); }
          35% { transform: rotate(-4deg); }
          37% { transform: rotate(2deg); }
          39% { transform: rotate(-1deg); }
          41% { transform: rotate(1deg); }

          43% { transform: rotate(0); }
          100% { transform: rotate(0); }
        }

        > .dot {
          position: absolute;
          display: block;
          width: 6px;
          height: 6px;
          background: #aca1e4;
          top: 20px;
          right: 20px;
          border-radius: 50%;
        }
      }
      
      > .item-user {
        max-height: 100%;
        display: flex;
        
        > .avatar {
          display: flex;
          height: 100%;
          width: 60px;
          padding: 12px;

          img {
            max-height: 100%;
            max-width: 100%;
            border-radius: 50%;
            overflow: hidden;
            cursor: pointer;
          }
        }

        > .name {
          width: 157px;
          display: flex;
          align-items: center;

          > span {
            font-weight: 600;
            cursor: pointer;
            color: #333;
          }
        }
      }
    }
  }
`;
