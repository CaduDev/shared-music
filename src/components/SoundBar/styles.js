import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > .content {
    width: 100%;
    height: 80px;
    background: #f4f9fc;
    /* border-bottom: 6px #dee2e5 solid; */
    display: flex;
    justify-content: space-around;
    padding: 0px 12px;

    > * {
      width: calc(100% / 3);
      padding: 0px 12px;
    }

    > .meta-music {
      display: flex;
      justify-content: space-between;
      align-items: center;

      > .meta-music-content {
        display: flex;
        height: 100%;
        align-items: center;

        > .cover {
          display: flex;
          padding: 8px;
          height: 100%;
          
          > img {
            border-radius: 4px;
            overflow: hidden;
            display: flex;
            max-height: 100%;
          }
        }

        > .info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          /* justify-content: space-between; */
          padding: 12px 0px;

          > .music-name {
            color: #333;
            font-weight: 600;
          }

          > .album-name {
            color: #b4b4b4;
            font-weight: 600;
            font-size: 12px;
            margin-top: 4px
          }
        }
      }

      > .actions {
        > button {
          width: 40px;
          border: none;
          background: transparent;
          cursor: pointer;
        }
      }
    }

    > .actions-player {
      display: flex;
      justify-content: center;
      align-items: center;

      > .item {
        width: 30px;
      }

      > .item:first-child {
        margin-right: 16px;
      }

      > .item:last-child {
        margin-left: 16px;
      }
    }

    > .action-music {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      > .currentTime {
        font-size: 14px;
        font-weight: 600;
        color: #999;
      }

      > .item {
        padding: 0px 10px;
      }

      > .volume-input {
        display: flex;
        align-items: center;

        .mdl-slider__background-lower {
          background: rgb(179,170,226);
          background: linear-gradient(83deg, rgba(179,170,226,1) 53%, rgba(112,102,162,1) 100%);
        }

        input[type=range]::-webkit-slider-thumb {
          background: #8379b9 !important;
        }

        > .volume-icon {
          width: 18px;
        }
      }
    }
  }

  > .mdl-slider__container {
    height: 0px;
    /* margin: 0px; */
    /* padding: 0px; */

    > .mdl-slider__background-flex { 
      height: 5px;
      /* width: calc(100% - 0px); */
    
      > .mdl-slider__background-lower {
        background: rgb(179,170,226);
        background: linear-gradient(83deg, rgba(179,170,226,1) 53%, rgba(112,102,162,1) 100%);
      }
    }
    
    > input[type=range]::-webkit-slider-thumb {
      background: #8379b9 !important;
      border: none;
      margin-top: 2.2222px;
    }
  }


`;
