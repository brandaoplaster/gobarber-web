import React from 'react';
import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast';

import { Conatainer } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Conatainer>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Conatainer>
  );
};

export default ToastContainer;
