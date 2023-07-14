import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  .menuDesktop {
    width: 100%;
    height: 7.2rem;
    position: fixed;
    top: 0;
    left: 50%;
    z-index:2;
    transform: translateX(-50%);
    transition: all ease 0.5s;
    div {
      width: 100%;
      max-width: 112rem;
      height: 7.2rem;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      

      .logo2 {
        display: none;
      }

      nav ul {
        display: flex;
        gap: 3.2rem;

        a {
          font-weight: 400;
          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.BRAND};
        }

        a:hover {
          font-weight: 700;
        }
      }

      button {
        width: 19rem;
        height: 3.8rem;

        border-radius: 4rem;
        border: 1px solid ${({ theme }) => theme.COLORS.BRAND};

        background: none;
        color: ${({ theme }) => theme.COLORS.BRAND};

        font-weight: bold;
        font-size: 1.4rem;

        cursor: pointer;
      }

      button:hover {
        background-color: ${({ theme }) => theme.COLORS.BRAND};
        color: ${({ theme }) => theme.COLORS.BRAND_BEIGE};
      }
    }
  }

  .menuDesktopScroll {
    background-color: ${({ theme }) => theme.COLORS.BRAND};
    div {
      .logo {
        display: none;
      }
      .logo2 {
        display: block;
      }

      nav ul {
        display: flex;
        gap: 3.2rem;

        a {
          font-weight: 400;
          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.BRAND_BEIGE};
        }

        a:hover {
          font-weight: 700;
        }
      }

      button {
        width: 19rem;
        height: 3.8rem;

        border-radius: 4rem;
        border: 1px solid ${({ theme }) => theme.COLORS.BRAND_BEIGE};

        background: none;
        color: ${({ theme }) => theme.COLORS.BRAND_BEIGE};

        font-weight: bold;
        font-size: 1.4rem;

        cursor: pointer;
      }

      button:hover {
        background-color: ${({ theme }) => theme.COLORS.BRAND};
        color: ${({ theme }) => theme.COLORS.BRAND_BEIGE};
      }
    }
  }

  .menuMobile {
    display: none;
  }

  main {
    width: 100%;
    max-width: 112rem;
    margin: 8rem auto 0;
    display: flex;
    justify-content: space-between;

    div {
      width: 100%;
      max-width: 60.5rem;
      margin-top: 8rem;

      span {
        color: ${({ theme }) => theme.COLORS.BRAND};

        font-size: 1.4rem;
        font-weight: bold;
      }

      h1 {
        margin: 1.6rem 0 2.4rem 0;
        font-size: 5.2rem;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.HEADLINE};
      }

      p {
        margin-bottom: 3.2rem;
        font-size: 1.8rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.PARAGRAPH};
      }
    }
  }

  .numbers {
    width: 100%;
    max-width: 112rem;
    height: 21rem;
    margin: 0 auto;
    height: 21rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -60px;
    background-color: ${({ theme }) => theme.COLORS.BRAND_BEIGE};

    div + div {
      border-left: 1px solid ${({ theme }) => theme.COLORS.BRAND};
    }

    div {
      width: 100%;
      max-width: 29.9rem;
      height: 9rem;

      span {
        display: block;
        text-align: center;
        font-weight: bold;
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.HEADLINE};
      }

      p {
        text-align: center;
        font-weight: 400;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.BRAND};
      }
    }
  }

  .services {
    width: 100%;
    max-width: 112rem;
    margin: 0 auto;
    padding: 0 1%;

    p {
      color: ${({ theme }) => theme.COLORS.BRAND};
      font-size: 1.4rem;
      font-weight: bold;
      text-align: center;
    }

    h2 {
      width: 49.7rem;
      color: ${({ theme }) => theme.COLORS.BRAND};
      font-size: 4rem;
      font-weight: bold;
      text-align: center;
      margin: 1.6rem auto 6.4rem;
    }

    div {
      width: 100%;
      display: grid;
      grid-template-areas: 'aside aside aside';

      aside {
        width: 100%;
        max-width: 34.7rem;
        height: 20.7rem;
        background-color: ${({ theme }) => theme.COLORS.BRAND_BEIGE};
        padding: 2.4rem;
        grid-area: 'aside';

        h3 {
          color: ${({ theme }) => theme.COLORS.HEADLINE};
          font-size: 2.4rem;
          font-weight: bold;
          margin: 1.6rem 0;
        }

        p {
          color: ${({ theme }) => theme.COLORS.PARAGRAPH};
          font-size: 1.6rem;
          font-weight: 400;
          text-align: justify;
        }
      }
    }
  }

  .about {
    width: 100%;
    max-width: 112rem;
    height: 73.4rem;
    margin: 0 auto;
    display: flex;
    gap: 6.7rem;
    justify-content: space-around;
    align-items: center;

    aside {
      width: 100%;
      max-width: 57.3rem;
      padding: 1%;

      span {
        font-weight: bold;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.BRAND};
      }

      h3 {
        color: ${({ theme }) => theme.COLORS.HEADLINE};
        font-size: 4rem;
        font-weight: bold;
        margin: 1rem 0 2.4rem 0;
      }

      p {
        color: ${({ theme }) => theme.COLORS.PARAGRAPH};
        font-size: 1.6rem;
        font-weight: 400;
        text-align: justify;
      }
    }
  }

  .contact {
    width: 100%;
    max-width: 112rem;
    height: 69.9rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    aside {
      width: 100%;
      max-width: 57.3rem;
      height: 32.7rem;

      h3 {
        width: 100%;
        max-width: 40rem;
        color: ${({ theme }) => theme.COLORS.HEADLINE};
        font-size: 4rem;
        font-weight: bold;
        margin: 0 0 4rem 0;
      }

      p {
        color: ${({ theme }) => theme.COLORS.PARAGRAPH};
        font-size: 1.6rem;
        font-weight: 400;
        display: flex;
        gap: 0.8rem;
        align-items: center;
      }

      p + p {
        margin: 1.6rem 0 4rem 0;
      }
    }
  }

  footer {
    width: 100%;
    height: 26.8rem;
    background-color: ${({ theme }) => theme.COLORS.BRAND};
    display: flex;
    justify-content: center;

    aside {
      width: 100%;
      height: 26.8rem;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .footerInformation p:nth-of-type(1) {
        margin: 2.4rem 0 1.5rem 0;
      }

      .footerInformation p {
        color: ${({ theme }) => theme.COLORS.BRAND_BEIGE};
        font-size: 1.4rem;
        font-weight: 400;
      }

      .network {
        display: flex;
        gap: 3.8rem;
      }
    }
  }

  @media (max-width: 1120px) {
    .menuDesktop {
      justify-content: space-around;
      
    }

    main {
      justify-content: space-around;

      div {
        h1 {
          font-size: 3.5rem;
        }

        p {
          margin-bottom: 2rem;
        }
      }
      img {
        width: 320px;
        height: 447px;
      }
    }
    .numbers {
      max-width: 101rem;
      top: -50px;
    }

    .services {
      div {
        aside {
          max-width: 30.7rem;

          h3 {
            font-size: 2rem;
          }

          p {
            font-size: 1.4rem;
          }
        }
      }
    }

    .about {
      height: 39.9rem;
      margin-top: 30px;
      padding: 0 1%;

      img {
        width: 44.4rem;
        height: 26.3rem;
      }
      aside {
        span {
          font-size: 1.8rem;
        }

        h3 {
          font-size: 3rem;
          margin: 1.6rem 0 2.4rem 0;
        }
      }
    }

    .contact {
      height: 39.9rem;
      gap: 4rem;
      img {
        width: 42.4rem;
        height: 26.3rem;
      }

      aside {
        width: 100%;
        max-width: 32.4rem;

        h3 {
          max-width: 29.7rem;
          font-size: 3rem;
          margin: 0 0 3.2rem 0;
        }

        p + p {
          margin: 1.6rem 0 3.2rem 0;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .menuDesktop {
      display: none;
    }
   
    .menuMobile {
      width: 100%;
      margin: 0 auto;
      position: fixed;
      top: 0;
      left: 50%;
      z-index: 2;
      transform: translateX(-50%);
      transition: all ease 0.5s;

      display: block;

      .menu {
        width: 37rem;
        margin: 0 auto;
        height: 7.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo2 {
          display: none;
        }

        button {
          border: none;
          background: none;
          color: ${({ theme }) => theme.COLORS.BRAND};
          cursor: pointer;
        }
      }

      .menuExpanded {
        width: 100vw;
        height: 100vh;
        background-color: ${({ theme }) => theme.COLORS.BRAND};
        z-index: 3;
        display: none;
        overflow:hidden;
        div {
          width: 37.5rem;
          margin: 0 auto;

          .logo-button {
            height: 7.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: ${({ theme }) => theme.COLORS.BRAND_BEIGE};

            button {
              border: none;
              background: none;
              color: ${({ theme }) => theme.COLORS.BRAND_BEIGE};
              cursor: pointer;
            }
          }

          nav {
            margin-top: 6rem;

            ul {
              width: 37.5rem;
              height: 37.1rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 4.8rem;
            }

            a {
              color: ${({ theme }) => theme.COLORS.BRAND_BEIGE};
              font-size: 2.4rem;
              font-weight: bold;
              margin-bottom: 4.8rem;
            }

            button {
              width: 27.4rem;
              height: 5.5rem;

              border-radius: 4rem;
              border: none;

              background: ${({ theme }) => theme.COLORS.BRAND_BEIGE};
              color: ${({ theme }) => theme.COLORS.BRAND};

              font-weight: bold;
              font-size: 1.4rem;

              cursor: pointer;
            }
          }

          .network {
            width: 13.6rem;
            margin: 8rem auto 0;
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .close {
        display: none;
      }

      .open {
        display: block;
        
      }
    }

    .menuMobileScroll {
      background-color: ${({ theme }) => theme.COLORS.BRAND};
      .menu {

        .logo {
          display: none;
        }
        .logo2 {
          display: block;
        }

        button {
          border: none;
          background: none;
          color: ${({ theme }) => theme.COLORS.BRAND_BEIGE};
          cursor: pointer;
        }
      }
      
    }

    main {
      max-width: 37.5rem;
      flex-direction: column;
      margin-top: 8rem;

      span {
        display: block;
        text-align: center;
      }
      div {
        margin-top: 4rem;

        h1 {
          font-size: 3.4rem;
          text-align: center;
        }

        p {
          margin-bottom: 3.2rem;
          text-align: center;
        }

        button {
          margin: 0 auto 6rem;
        }
      }

      img {
        margin: 0 auto;
        width: 263px;
        height: 342px;
      }
    }

    .numbers {
      max-width: 32.7rem;
      height: 47rem;
      flex-direction: column;
      padding: 4rem 7rem;
      top: 0px;
      border-radius: 0.6rem;

      div + div {
        border: none;
        margin-top: 6rem;
      }

      div {
        max-width: 32.7rem;

        span {
          text-align: center;
          margin-bottom: 0.4rem;
        }
      }
    }

    .services {
      max-width: 37.5rem;
      margin: 10.4rem auto 0;

      h2 {
        width: 31.4rem;
        text-align: none;
        font-size: 3rem;
        margin: 1.6rem auto 6rem;
      }

      div {
        width: 100%;
        grid-template-areas: 'aside';
        gap: 3.2rem;

        aside {
          max-width: 33.7rem;
          margin: 0 auto;
          padding: 2.4rem;
          border-radius: 0.6rem;
        }
      }
    }

    .about {
      max-width: 37.5rem;
      height: 76.9rem;
      margin: 9.6rem auto 0;
      flex-direction: column-reverse;

      img {
        width: 30.7rem;
        height: 28.2rem;
      }
      aside {
        max-width: 32.7rem;
        margin: 0 auto;

        span {
          font-size: 1.8rem;
        }

        h3 {
          font-size: 3rem;
          margin: 1.6rem 0 2.4rem 0;
        }
      }
    }

    .contact {
      max-width: 37.5rem;
      height: 73.5rem;
      flex-direction: column;

      img {
        width: 30.4rem;
        height: 21.3rem;
      }

      aside {
        width: 100%;
        max-width: 32.4rem;

        h3 {
          max-width: 29.7rem;
          font-size: 3rem;
          margin: 0 0 3.2rem 0;
        }

        p + p {
          margin: 1.6rem 0 3.2rem 0;
        }
      }
    }

    footer {
      aside {
        max-width: 33rem;
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`

export const Button = styled.button`
  width: 26.3rem;
  height: 5.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  border-radius: 4rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BRAND};

  background: ${({ theme }) => theme.COLORS.BRAND};
  color: ${({ theme }) => theme.COLORS.BRAND_BEIGE};

  font-weight: bold;
  font-size: 1.4rem;
  text-transform: uppercase;

  cursor: pointer;
`
