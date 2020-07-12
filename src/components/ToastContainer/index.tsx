import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { ToastMessage } from '../../hooks/toast';
import { Conatainer, Toast } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Conatainer>
      {messages.map(message => (
        <Toast
          key={message.id}
          type={message.type}
          hasDescription={!!message.description}
        >
          <FiAlertCircle size={20} />
          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
            <button type="button">
              <FiXCircle size={18} />
            </button>
          </div>
        </Toast>
      ))}
    </Conatainer>
  );
};

export default ToastContainer;
