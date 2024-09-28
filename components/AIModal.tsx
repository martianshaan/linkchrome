import React, { useState } from "react";
import "./ModalStyles.css";

interface AIModalProps {
  onClose: () => void;
  onGenerate: (prompt: string) => void;
  onInsert: () => void;
  generatedText: string;
}

const AIModal: React.FC<AIModalProps> = ({ onClose, onGenerate, onInsert, generatedText }) => {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    onGenerate(prompt);
  };

  return (
    <div className="modal-overlay" onClick={onClose} >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="container">
          {generatedText && (
            <div className="generate-container">
              <div className="prompt-text">
                {prompt}
              </div>
              <div className="ai-text">
                {generatedText}
              </div>
            </div>
          )}
          <div className="input-area">
            <input
              type="text"
              className="input-field"
              placeholder="Your prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            {generatedText ? (
              <div className="modal-footer">
                {/* <button className="modal-btn-cancel" onClick={onClose}>
                 Cancel
               </button> */}
                <button className="modal-btn-confirm" onClick={onInsert}>
                  <div className="text-group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4f4f4f" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-down"><path d="M8 18L12 22L16 18" /><path d="M12 2V22" /></svg>
                    <span>Insert</span>
                  </div>
                </button>
                <button className="modal-btn-regen" onClick={handleGenerate}>
                  <div className="text-group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-refresh-ccw"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
                    <span>Regenerate</span>
                  </div>
                </button>
              </div>
            ) : (
              <div className="button-area">
                <button className="generate-button" onClick={handleGenerate}>

                  <div className="text-group">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" /><path d="M6 12h16" /></svg>
                    <span>Generate</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIModal;