import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContentScriptContext } from 'wxt/client';
import  LinkedInMessageInput from '../components/LinkedInMessageInput';


export default defineContentScript({
  matches: ['*://*/*'],
  cssInjectionMode: 'ui',
  async main(ctx: ContentScriptContext) {
    const ui = await createUi(ctx);
    ui.mount();
  },
});



function createUi(ctx: ContentScriptContext) {
  return createShadowRootUi(ctx, {
    name: 'linkedin-ai-extension',
    position: 'inline',
    append: 'first',
    onMount(uiContainer, shadow) {
      const app = document.createElement('div');
      uiContainer.append(app);

      const root = ReactDOM.createRoot(app);
      root.render(
        <React.StrictMode>
          <LinkedInMessageInput />
        </React.StrictMode>
      );

      return root;
    },
    onRemove(root) {
      root?.unmount();
    },
  });
}

