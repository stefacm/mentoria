/**
 * This file can be used to define Global Typescript types
 */

/// <reference types="vite-plugin-svgr/client" />

type Reject<T> = (err: T) => void;
type Fn = () => void;
