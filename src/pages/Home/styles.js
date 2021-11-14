import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px 12px;
  margin-top: calc(12px * 4);

  > .bar-grid {
    display: flex;
    justify-content: flex-end;
    padding: 12px 12px;
    padding-top: 0px;

    > button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }

  .itens-to-grid {

    > div {
      display: grid;
      grid-template-columns: 
        25% 
        25% 
        25%
        25%;
        
      .card {
        border-radius: 8px;
        height: 400px;
        padding: 0 12px;
        margin-bottom: 12px;
    
        > div {
          border-radius: 8px;
          width: 100%;
          height: 100%;
          box-shadow: 0px 0px 1px -1px rgba(0, 0, 0, 0.2),
            0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
          background-size: cover;
          position: relative;
          overflow: hidden;
    
          &:hover {
            @-moz-keyframes example1 {
              0% { -moz-transform: translateX(100%); }
              100% { -moz-transform: translateX(-100%); }
            }
    
            @-webkit-keyframes example1 {
              0% { -webkit-transform: translateX(100%); }
              100% { -webkit-transform: translateX(-100%); }
            }
    
            @keyframes example1 {
              0% { 
                -moz-transform: translateX(100%); /* Firefox bug fix */
                -webkit-transform: translateX(100%); /* Firefox bug fix */
                transform: translateX(100%);     
              }
              100% { 
                -moz-transform: translateX(-100%); /* Firefox bug fix */
                -webkit-transform: translateX(-100%); /* Firefox bug fix */
                transform: translateX(-100%); 
              }
            }
    
            > p {
              z-index: 9;
              color: #ada0dc;
              transition: .5s;
              text-shadow: 0px 0px 0px;
              /* Starting position */
              -moz-transform:translateX(100%);
              -webkit-transform:translateX(100%);  
              transform:translateX(100%);
              /* Apply animation to this element */  
              -moz-animation: example1 15s linear infinite;
              -webkit-animation: example1 15s linear infinite;
              animation: example1 15s linear infinite;
              /* Move it (define the animation) */
              white-space: nowrap;
              text-overflow: inherit;
              overflow: inherit;
            }
    
            > span {
              z-index: 9;
              color: #555;
              transition: .5s;
            }
          }
    
          > p {
            position: absolute;
            top: 12px;
            margin: 0;
            left: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: #fff;
            width: 90%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size: 22px;
            text-shadow: 0px 0px 8px #00000042;
            transition: .5s;
          }
    
          > span {
            position: absolute;
            top: 32px;
            margin: 0;
            left: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: #00000059;
            width: 90%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;   
            transition: .5s;  
          }
    
          > .cover_lasted_music {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ffffffcf;
            opacity: 0;
            transition: 0.8s;
    
            > p {
              position: absolute;
              top: 12px;
              margin: 0;
              left: 12px;
              font-weight: 600;
              text-transform: uppercase;
              color: #0000009e;
            }
    
            &:hover {
              transition: 0.8s;
              opacity: 1;
            }
    
            > button {
              width: 150px;
              height: 150px;
              border-radius: 50%;
              border: none;
              background: transparent;
              position: absolute;
    
              &:visited, &:link {
                text-transform: uppercase;
                text-decoration: none;
                display: inline-block;
                border-radius: 50%;
                transition: all .2s;
                width: 150px;
                height: 150px;
                background: transparent;
              }
    
              &:active {
                transform: translateY(-1px);
              }
    
              &:hover {
                &::after {
                  transform: scaleX(1.4) scaleY(1.4);
                  opacity: 0;
                  background: #8379b9ad;
                }
              }
    
              &::after {
                content: "";
                display: inline-block;
                height: 100%;
                width: 100%;
                border-radius: 100px;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                transition: all .4s;
              }
    
              &::after {
                background-color: transparent;
              }
            }
  
            > .liked {
              position: absolute;
              bottom: 12px;
              right: 12px;
              width: 44px;
              height: 44px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              border: 3px solid #877eb8;
            }
          }
        }
      }
    }
  }

  > .itens-to-list {
    display: flex;
    flex-direction: column;

    .list_track + .list_track {
      margin-top: 12px !important;
    }
  }
`;

export const Card = styled.div`
  > div {
    background-image: url(${({ bg }) => bg});
    background-position: center;
  }

    .equilizer-animation {
      height: 60px;
      width: 39px;
      transform: rotate(180deg);
      position: absolute;
      bottom: 12px;
      left: 12px;
    }

    .equilizer {

    }

    .bar {
      fill: #8379b9ad;
      width: 6px;
      animation: equalize 4s 0s infinite;
    }

    .bar:nth-child(1) { 
      animation-delay: -1.9s;
    }

    .bar:nth-child(2) { 
      animation-delay: -2s;
    }

    .bar:nth-child(3) { 
      animation-delay: -2.3s;
    }

    .bar:nth-child(4) { 
      animation-delay: -2.4s;
    }

    .bar:nth-child(5) { 
      animation-delay: -2.1s;
    }

    @keyframes equalize {
      0% {
        height: calc(60px - 20px)
      }
      4% {
        height: calc(50px - 20px)
      }
      8% {
        height: calc(40px - 20px)
      }
      12% {
        height: calc(30px - 20px)
      }
      16% {
        height: calc(20px - 20px)
      }
      20% {
        height: calc(30px - 20px)
      }
      24% {
        height: calc(40px - 20px)
      }
      28% {
        height: calc(10px - 20px)
      }
      32% {
        height: calc(40px - 20px)
      }
      36% {
        height: calc(60px - 20px)
      }
      40% {
        height: calc(20px - 20px)
      }
      44% {
        height: calc(40px - 20px)
      }
      48% {
        height: calc(70px - 20px)
      }
      52% {
        height: calc(30px - 20px)
      }
      56% {
        height: calc(10px - 20px)
      }
      60% {
        height: calc(30px - 20px)
      }
      64% {
        height: calc(50px - 20px)
      }
      68% {
        height: calc(60px - 20px)
      }
      72% {
        height: calc(70px - 20px)
      }
      76% {
        height: calc(80px - 20px)
      }
      80% {
        height: calc(70px - 20px)
      }
      84% {
        height: calc(60px - 20px)
      }
      88% {
        height: calc(50px - 20px)
      }
      92% {
        height: calc(60px - 20px)
      }
      96% {
        height: calc(70px - 20px)
      }
      100% {
        height: calc(80px - 20px)
      }
    }
`;

export const List = styled.div`
  display: flex;
  background: #00000012;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  padding-left: 0px;

  > .active {
    > span:nth-child(1) {
      display: flex !important;
    }

    > span:nth-child(2) {
      display: none !important;
    } 
  }

  > .status-play {
    width: 43px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: #5c5c5c;

    > span {
      width: 43px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > span:nth-child(2) {
      display: flex;
    }

    > span:nth-child(1) {
      display: none;
    }

    &:hover {
      > span:nth-child(1) {
        display: flex;
      }

      > span:nth-child(2) {
        display: none;
      } 
    }
  }

  > .cover-album {
    background-image: url(${({ bg }) => bg});
    background-size: cover;
    width: 60px;
    height: 60px;
    border-radius: 8px;
  }

  > .info {
    padding: 4px 12px;
    display: flex;
    height: 60px;
    width: 40%;
    display: flex;
    flex-direction: column;

    > .name-music {
      font-size: 18px;
      font-weight: 600;
      color: #9285c1;
    }

    > .name-album {
      font-size: 14px;
      font-weight: 600;
      color: #6f6f6f;
    }
  }

  > .data {
    width: 20%;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #474747;
  }

  > .status {
    display: flex;
    align-items: center;
  }

  > .time {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-weight: 600;
    color: #474747;
  }

  .animtaion {
    position: relative;
    width: 5%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .equilizer-animation {
      height: 60px;
      width: 39px;
      transform: rotate(180deg);
    }

    .equilizer {

    }

    .bar {
      fill: #8379b9ad;
      width: 6px;
      animation: equalize 4s 0s infinite;
    }

    .bar:nth-child(1) { 
      animation-delay: -1.9s;
    }

    .bar:nth-child(2) { 
      animation-delay: -2s;
    }

    .bar:nth-child(3) { 
      animation-delay: -2.3s;
    }

    .bar:nth-child(4) { 
      animation-delay: -2.4s;
    }

    .bar:nth-child(5) { 
      animation-delay: -2.1s;
    }

    @keyframes equalize {
      0% {
        height: calc(60px - 20px)
      }
      4% {
        height: calc(50px - 20px)
      }
      8% {
        height: calc(40px - 20px)
      }
      12% {
        height: calc(30px - 20px)
      }
      16% {
        height: calc(20px - 20px)
      }
      20% {
        height: calc(30px - 20px)
      }
      24% {
        height: calc(40px - 20px)
      }
      28% {
        height: calc(10px - 20px)
      }
      32% {
        height: calc(40px - 20px)
      }
      36% {
        height: calc(60px - 20px)
      }
      40% {
        height: calc(20px - 20px)
      }
      44% {
        height: calc(40px - 20px)
      }
      48% {
        height: calc(70px - 20px)
      }
      52% {
        height: calc(30px - 20px)
      }
      56% {
        height: calc(10px - 20px)
      }
      60% {
        height: calc(30px - 20px)
      }
      64% {
        height: calc(50px - 20px)
      }
      68% {
        height: calc(60px - 20px)
      }
      72% {
        height: calc(70px - 20px)
      }
      76% {
        height: calc(80px - 20px)
      }
      80% {
        height: calc(70px - 20px)
      }
      84% {
        height: calc(60px - 20px)
      }
      88% {
        height: calc(50px - 20px)
      }
      92% {
        height: calc(60px - 20px)
      }
      96% {
        height: calc(70px - 20px)
      }
      100% {
        height: calc(80px - 20px)
      }
    }
  }
`;