import styled from 'styled-components';

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  width: 100px;
  height: 100px;
  margin: 40px auto;
`;

export default Modal;