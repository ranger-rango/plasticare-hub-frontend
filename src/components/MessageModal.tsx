import { useState } from 'react';
import { FreeEnq } from 'pages/homepage/types';
import Icon from './AppIcon';
import Button from './ui/Button';
import Input from './ui/Input';
import Select from 'components/ui/Select';
import { plasticareProcedures } from '../../data/procedures';
import { useFormSubmit } from './useFormSubmit';

interface MessageModalProps {
  onClose: () => void;
  rowMessage : string;
}

const MessageModal = ( { onClose, rowMessage } : MessageModalProps ) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-text-primary/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-background rounded-3xl shadow-brand-hover overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surface flex items-center justify-center text-text-primary hover:bg-primary hover:text-primary-foreground transition-brand"
          aria-label="Close modal"
        >
          <Icon name="X" size={20} />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="p-8">
            <div className="flex items-center space-x-3 mb-6">
                <div>
                    <h2 className="font-headline text-2xl font-bold text-text-primary">
                        Message
                    </h2>
                    <p>
                        { rowMessage }
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;