import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
import { TextEncoder, TextDecoder } from 'util';  

configure({ testIdAttribute: "data-test-id" });

// @ts-ignore
global.TextEncoder = TextEncoder
// @ts-ignore
global.TextDecoder = TextDecoder
