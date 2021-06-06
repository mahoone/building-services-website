import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

export const Container = styled.div`
    min-height: 1000px;
    //position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(21, 31, 41, 1) 0%,
        rgba(255, 201, 75, 1) 100%
        );
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
   margin-left: 32px;
   margin-top: 32px;
   text-decoration: none;
   color: #fff;
   font-weight: 700;
   font-size: 32px;

   @media screen and (max-width: 480px) {
    margin-left: 16px;
   margin-top: 8px;
   }
`;

export const FormContent = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;

   @media screen and (max-width: 480px) {
    padding: 10px;
   }
`;

export const Form = styled.form`
   background: #151F29;
   max-width: 500px;
   height: auto;
   width: 100%;
   z-index: 1;
   display: grid;
   margin: 0 auto;
   padding: 60px 32px;
   border-radius: 10px;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

   @media screen and (max-width: 400px) {
    padding: 32px 32px;
   }
`;

export const FormH1 = styled.h1`
   margin-bottom: 20px;
   font-size: 20px;
   color: #fff;
   font-weight: 400;
   text-align: center;
`;

export const FormLabel = styled.label`
   margin-bottom: 8px;
   font-size: 14px;
   color: #fff;
`;

export const FormInput = styled.input`
   padding: 16px 16px;
   margin-bottom: 22px;
   border: none;
   border-radius: 4px;
`;

export const FormTextAreaInput = styled.textarea`
   resize: none;
   height: 120px;
   padding: 16px 16px;
   margin-bottom: 32px;
   border: none;
   border-radius: 4px;
`;

export const FormButton = styled.button`
   background: #FFC94B;
   padding: 16px 0;
   border: none;
   border-radius: 4px;
   color: #151F29;
   font-size: 20px;
   cursor: pointer;
   margin-bottom: 32px;
   opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};

   &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

export const ContactUsBtnLinkIcon = styled(MdArrowBack)`
    font-size: 24px;
    margin-right: 5px;
`

export const ReCaptchaWrapper = styled.div`
   text-align: center;
`