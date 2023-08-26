import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import browserHydrateFunction from './src/utils/browser-hydrate';
import TopLayout from './src/components/top-layout';
import theme from './theme';
import './src/styles/global.scss';

// Wraps every page in a component
export function wrapPageElement({ element, props }) {
  return (
    <>
      <TopLayout theme={theme} {...props}>
        {element}
      </TopLayout>
      <Analytics />
    </>
  );
}

export const replaceHydrateFunction = browserHydrateFunction;
