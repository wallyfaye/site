import React from 'react';
import { render } from 'react-dom';
import { Launcher, DocumentIndex } from './core';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

render(<Launcher />, DocumentIndex());
