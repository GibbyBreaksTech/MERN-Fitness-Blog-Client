
// styled
import styled from 'styled-components';

// formspree
import { useForm, ValidationError } from '@formspree/react';
import { StyledButton } from '../Styled/Styled';


function ContactForm() {
  const [state, handleSubmit] = useForm("xgerrpjy");
  if (state.succeeded) {
      return <p>Thanks for Messaging us!</p>;
  }
  return (
      <StyledForm>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <StyledButton type="submit" disabled={state.submitting}>
        Submit
      </StyledButton>
    </form>
    </StyledForm>
  );
}

const StyledForm = styled.div`
  width: 70%;
  margin: 5% auto;
  height: 100%;
  background: lightgray;
  border-radius: 12px;
  @media (max-width: 1000px){
        width: 90%;
    }
  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 5% auto;
    height: 100%;
    @media (max-width: 1000px){
        width: 90%;
    }
    button, input, textarea, label {
      margin: 6px auto;
    }
    input {
      width: 90%;
      height: 30px;
    }
    textarea, input {
      font-size: 1.5em;
      font-weight: normal;
    }
    textarea{
      height: 200px;
      width: 90%;
    }
    button {
      &:hover{
        color: white;
        background: black;
      }
    }
    label {
      font-size: 1.5em;
      text-decoration: underline;
    }
  }
`;


export default ContactForm;