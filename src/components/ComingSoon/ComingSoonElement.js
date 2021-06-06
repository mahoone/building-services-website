import styled from 'styled-components'
import { MdArrowBack } from 'react-icons/md'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    display: flex;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    justify-content: center;
    background: linear-gradient(
        108deg,
        rgba(21, 31, 41, 1) 0%,
        rgba(255, 201, 75, 1) 100%
        );
`;

export const MessageWrap = styled.div`
    width: 400px;
    height: 500px;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 11px;
    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const MessageContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: left;
   line-height: 1.8;
   h1 {
    text-align: center;
    color: #fff;
   }
  p {
      text-align: center;
      margin-bottom: 1rem;
      color: #fff;
      padding: 0px 10px 0px 10px
  }
`;

export const ImageWrapper = styled.div`
    //background: #fff;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px 0 0 10px;
`;

export const MessageImage = styled.img`
   height: 160px;
   width: 160px;
   border-radius: 10px 0 0 10px;
   //background: #fff;
`;

export const FormH1 = styled.h1`
   margin-bottom: 40px;
   font-size: 20px;
   color: #fff;
   font-weight: 400;
   text-align: center;
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
