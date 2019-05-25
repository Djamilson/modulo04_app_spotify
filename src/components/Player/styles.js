import styled from 'styled-components';

export const Container = styled.div`
  background: #282828;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 72px;
  padding: 12px;
`;
export const Current = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 48px;
    height: 48px;
  }
  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    span {
      font-size: 13px;
      color: #fff;
    }
    small {
      font-size: 11px;
      color: #b3b3b3;
      margin-top: 5px;
    }
  }
`;
