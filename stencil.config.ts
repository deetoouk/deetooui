import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';

export const config: Config = {
  namespace: 'deetooui',
  // globalStyle: 'src/global/tailwind.css',
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/variables.scss', 'src/global/mixins.scss']
    }),
    postcss({
      plugins: [require('tailwindcss'), require('autoprefixer')]
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
