/* eslint-disable jsx-a11y/iframe-has-title */
import styled from "styled-components";
import { Button } from "./styles/Button"
import { useAuth0 } from "@auth0/auth0-react";



const Contact = () => {

  const { isAuthenticated, user } = useAuth0();

  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.black};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

  return (
    <Wrapper>

      <h2 className="common-heading">Contact page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9610649225483!2d72.86500317500558!3d21.233392480719132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3b8d6008a7%3A0x948800e378520434!2sApple%20Luxuria!5e0!3m2!1sen!2sin!4v1701947618284!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        title="home"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xoqogebl"
            method="POST"
            className="contact-inputs">

            <input type="text" placeholder="Usename" name="username" required autoComplete="off" />
            {/* <input type="text" placeholder="Usename" name="username" value={isAuthenticated ? user.name : ""} required autoComplete="off" /> */}

            <input type="email" name="Email" placeholder="Email" required autoComplete="off" />
            {/* <input type="email" name="Email" placeholder="Email" value={isAuthenticated ? user.email : ""} required autoComplete="off" /> */}

            <textarea name="message" placeholder="Enter your message" cols="30" rows="10" required autoComplete="off"></textarea>

            {/* <input type="submit" value="send" /> */}
            <Button type="submit" value="send">
              Send
            </Button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
