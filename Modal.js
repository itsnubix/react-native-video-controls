// @flow
import React from 'react';
import {Modal as ModalNative, TouchableWithoutFeedback, View} from 'react-native';
import styled, {css, type StyledComponent} from 'styled-components/native';

const ModalOverlay: StyledComponent<
  {transparent: boolean, position: 'top' | 'center' | 'bottom'},
  *,
  *
> = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
  ${props =>
    !props.transparent
      ? css`
          background: rgba(0, 0, 0, 0.8);
        `
      : css``};
  ${props =>
    props.position === 'top'
      ? css`
          justify-content: flex-start;
        `
      : css``};
  ${props =>
    props.position === 'bottom'
      ? css`
          justify-content: flex-end;
        `
      : css``};
  ${props =>
    props.position === 'center'
      ? css`
          justify-content: center;
        `
      : css``};
`;

const ModalContent = styled.View`
  width: 100%;
`;

type Props = {
  position: 'top' | 'center' | 'bottom',
  children: React$Node,
  onOverlayClick: Function,
  qaTag?: string,
  transparent: boolean,
};

const Modal = (props: Props) => (
  <ModalNative
    onRequestClose={() => {}}
    animationType="fade"
    transparent={true}
    visible={true}>
    <TouchableWithoutFeedback onPress={props.onOverlayClick}>
      <ModalOverlay transparent={props.transparent} position={props.position}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <ModalContent>
            <View style={{padding: 12}}>
              {React.Children.map(props.children, child => child)}
            </View>
          </ModalContent>
        </TouchableWithoutFeedback>
      </ModalOverlay>
    </TouchableWithoutFeedback>
  </ModalNative>
);

Modal.defaultProps = {
  position: 'top',
  show: false,
  transparent: false,
};

export default Modal;
