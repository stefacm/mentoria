/**
 * This file can be used to define Eslint configuration,
 * more info in https://eslint.org/docs/latest/use/configure/configuration-files/
 */

import sharedAstroConfig from './shared/config/astro.eslint.config.js';
import sharedConfig from './shared/config/eslint.config.js';

/** @type {import("eslint").Linter.Config} */
export default [...sharedConfig, ...sharedAstroConfig];
