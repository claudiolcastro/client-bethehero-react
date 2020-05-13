import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 32px auto;

  header {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      margin-left: 20px;
    }

    img {
      height: 64px;
    }

    a {
      width: 264px;
      margin-left: auto;
      margin-top: 0;
    }

    button {
      height: 60px;
      width: 60px;
      border-radius: 4px;
      border: 1px solid #dcdce6;
      background: transparent;
      margin-left: 16px;

      &:hover {
        border-color: #999999;
        transition: border-color 0.2s;
      }
    }
  }

  h1 {
    margin: 80px 0 24px 0;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;

  li {
    background: #fff;
    padding: 24px;
    border-radius: 4px;
    position: relative;

    button {
      position: absolute;
      top: 24px;
      right: 25px;
      border: 0;

      &:hover { opacity: .8; }
    }

    strong {
      display: block;
      margin-bottom: 16px;
      color: #41414d;

      &:not(:first-child) {
        margin-top: 32px;
      }
    }

    p {
      color: #737380;
      line-height: 21px;
      font-size: 16px;
    }
  }
`;
