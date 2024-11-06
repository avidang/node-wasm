import { add } from "wasm-rust";

const left = 1;
const right = 2;

console.log(`Result of add(${left}, ${right}): ${add(left, right)}`);
