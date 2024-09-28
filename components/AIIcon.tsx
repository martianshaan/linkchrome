// import './ModalStyles.css'

// interface AIIconProps {
//   onClick: () => void;
// }

// export const AIIcon: React.FC<AIIconProps> = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}

//       className="modal-btn-open p-2 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         stroke-width="2"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         className="lucide lucide-wand-sparkles">
//         <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
//         <path d="m14 7 3 3" />
//         <path d="M5 6v4" />
//         <path d="M19 14v4" />
//         <path d="M10 2v2" />
//         <path d="M7 8H3" />
//         <path d="M21 16h-4" />
//         <path d="M11 3H9" />
//       </svg>
//     </button>
//   );
// };


// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';

// interface AIIconProps {
//   openModal: () => void;
// }

// const AIIcon: React.FC<AIIconProps> = ({ openModal }) => {
//   return (
//     <button className="ai-suggestion-icon" onClick={openModal}>
//       🤖
//     </button>
//   );
// };

// const AIIconPortal: React.FC<AIIconProps> = ({ openModal }) => {
//   const [iconContainer, setIconContainer] = useState<HTMLElement | null>(null);

//   useEffect(() => {
//     const addAiIcon = () => {
//       const sendButton = document.querySelector('.msg-form__send-button');
//       if (sendButton && !document.querySelector('.ai-suggestion-icon')) {
//         const container = document.createElement('div');
//         container.className = 'ai-icon-container';
//         sendButton.parentNode?.insertBefore(container, sendButton);
//         setIconContainer(container);
//       }
//     };

//     addAiIcon();

//     const observer = new MutationObserver(addAiIcon);
//     observer.observe(document.body, { childList: true, subtree: true });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   if (!iconContainer) return null;

//   return ReactDOM.createPortal(
//     <AIIcon openModal={openModal} />,
//     iconContainer
//   );
// };

// export default AIIconPortal;