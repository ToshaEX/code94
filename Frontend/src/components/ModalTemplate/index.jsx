import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from '../../assets/alert.svg';
import styled from 'styled-components';

const BodyContainer = styled.div`
  display: flex;
  margin: 2rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleText = styled.div`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.08em;
  color: #162427;
`;
const BodyText = styled.div`
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 26px;
  text-align: center;
  color: #162427;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const PrimaryButton = styled(Button)`
  background: #001eb9;
  border-radius: 4px;
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 26px;
  color: #ffffff;
  &:hover {
    background: #001eb9;
  }
`;
const SecondaryButton = styled(Button)`
  color: #162427;
  border-radius: 4px;
  font-family: 'Satoshi';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 26px;
  &:hover {
    background: #001eb9;
  }
`;

const ModalTemplate = ({ show, setShow, modalBodyText, modalTitle, buttonText, onClick }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Body>
        <BodyContainer>
          <img src={Alert} alt="alert"></img>
          <TitleText>{modalTitle}</TitleText>
          <BodyText>{modalBodyText}</BodyText>
          <ButtonContainer>
            <SecondaryButton variant="outline-primary" onClick={handleClose}>
              Close
            </SecondaryButton>
            <PrimaryButton
              onClick={() => {
                onClick();
                handleClose();
              }}>
              {buttonText}
            </PrimaryButton>
          </ButtonContainer>
        </BodyContainer>
      </Modal.Body>
    </Modal>
  );
};

export default ModalTemplate;
