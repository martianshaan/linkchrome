import React, { useState, useEffect, useCallback } from 'react';
import AIModal from './AIModal';

const LinkedInMessageInput: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  const handleIconClick = useCallback((event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setShowModal(true);
  }, []);
  const handleCloseModal = useCallback(() => setShowModal(false), []);

  const handleGenerate = useCallback((prompt: string) => {
    // TODO: Replace with actual API call to open ai api
    setGeneratedText("Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.");
  }, []);

  const handleInsertText = useCallback(() => {
    const inputElement = document.querySelector('.msg-form__contenteditable') as HTMLElement;
    if (inputElement) {
      // inputElement.textContent+= generatedText;
      //inputElement.insertAdjacentText('beforeend', generatedText);
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(inputElement);
      range.collapse(false);
      selection?.removeAllRanges();
      selection?.addRange(range);
      document.execCommand('insertText', false, generatedText);
      setShowModal(false);
    }
  }, [generatedText]);


  // Inject styles when component mounts
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .ai-suggestion-icon {
        margin-right: 10px;
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
      }

      .ai-suggestion-modal {
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        width: 80%;
        max-width: 600px;
      }

      #prompt-input {
        width: 100%;
        height: 100px;
        margin-bottom: 10px;
      }

      .chat-bubble {
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 5px;
      }

      .user-prompt {
        background-color: #e6e6e6;
      }

      .ai-response {
        background-color: #d1e8ff;
      }

      #generate-btn, #paste-btn, #regenerate-btn {
        margin-right: 10px;
      }
    `;
    document.head.appendChild(style);

    // Cleaimg up the style elements of component when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Injecting our wizard icon next to the send button
  useEffect(() => {
    const addAiIcon = () => {
      const messageInput = document.querySelector('.msg-form__contenteditable');
      if (!messageInput) return;
  
      let aiIcon: HTMLButtonElement | null = null;

      const handleBlur = (focusEvent: FocusEvent) => {
        setTimeout(() => {
          if (focusEvent.relatedTarget !== aiIcon) {
            removeAiIcon();
          }
        }, 100);
      };

      const removeAiIcon = () => {
        aiIcon?.parentNode?.removeChild(aiIcon);
      };
  
      // Event listener to add AI icon when input is focused
      messageInput.addEventListener('focus', () => {
        const sendButton = document.querySelector('.msg-form__send-button');
        if (sendButton && sendButton.parentNode && !document.querySelector('.ai-suggestion-icon')) {
          aiIcon = document.createElement('button');
          aiIcon.className = 'ai-suggestion-icon';
          aiIcon.innerHTML = '🪄';
          aiIcon.addEventListener('click', handleIconClick);
          sendButton.parentNode.insertBefore(aiIcon, sendButton);
        }
      });

     
      messageInput.addEventListener('blur', (event) => handleBlur(event as FocusEvent));
    };
  
    const observer = new MutationObserver(addAiIcon);
    observer.observe(document.body, { childList: true, subtree: true });
  
    return () => observer.disconnect();
  }, [handleIconClick]);
  

  return (
    <>
      {showModal && (
        <AIModal
          onClose={handleCloseModal}
          onGenerate={handleGenerate}
          onInsert={handleInsertText}
          generatedText={generatedText}
        />
      )}
    </>
  );
};

export default LinkedInMessageInput;
