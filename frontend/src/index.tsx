import { createRoot } from 'react-dom/client';
import { App } from "./App";
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
// import './i18n';

document.body.innerHTML = '<div id="root"></div>';



const root = createRoot(document.getElementById('root'));

root.render(
  <RecoilRoot>
    <BrowserRouter future={{ v7_startTransition: true }} basename={'/'}>
      <App />
    </BrowserRouter>
    <div id="measure-layer"></div>
  </RecoilRoot>
);
