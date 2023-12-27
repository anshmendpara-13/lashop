import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { Button } from '../styles/Button';

const Footer = () => {
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Prepped to be placed in your shopping cart?</h3>
              <h3>Start shopping.</h3>
            </div>
            <div>
              <Button>
                <NavLink to="contact">Get Started</NavLink>
              </Button>
            </div>
          </div>
        </section>

        {/* main footer */}
        <footer>
          <div className="container grid grid-four-column footer-social">
            <div className='footer-about'>
              <h3>LA-1310</h3>
              <p>Welcome to our online store, where convenience meets endless possibilities.</p>
            </div>

            <div className="footer-subscribe">
              <h3>Subscribe to get important updates</h3>
              <form action="#">
                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                <input type="submit" value="subscribe" />
              </form>
            </div>

            <div className="footer-social">
              <h3>Follow Us</h3>
              <div className="footer-social--icons footer-social-not">
                <div className='footer-social-not'>
                  <a
                    href="https://discord.com/channels/"
                    rel="noreferrer"
                    target="_blank">
                    <FaDiscord className="icons" />
                  </a>
                </div>
                <div className='footer-social-not'>
                  <a
                    href="https://www.instagram.com/ansh.13.10/"
                    rel="noreferrer"
                    target="_blank">
                    <FaInstagram className="icons" />
                  </a>
                </div>
                <div className='footer-social-not'>
                  <FaYoutube className="icons" />
                </div>
              </div>
            </div>

            <div className="footer-contact">
              <h3>Call Us</h3>
              <h3 className='container'>+91 12345678978</h3>
            </div>
          </div>

          <div className="footer-bottom--section">
            <hr />
            <div className="container grid grid-two-column ">
              <p>
                @{new Date().getFullYear()} LA-limited. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>

        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  

  .iSIFGq {
    margin: 0;
  }

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }


  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-social{
      display:flex;
      flex-direction: column;
    }

    .footer-social-not{
      dispaly:block;
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }

    .footer-social{
      display:flex;
      flex-direction: column;
    }

    .footer-social-not{
      dispaly:block;
    }
  }
`;

export default Footer;