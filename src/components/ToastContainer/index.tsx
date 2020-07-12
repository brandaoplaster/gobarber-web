import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Conatainer, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Conatainer>
      <Toast hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Error</strong>
          <p>Erro no login</p>
          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
    </Conatainer>
  );
};

export default ToastContainer;
