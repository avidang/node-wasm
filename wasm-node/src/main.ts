import { add } from "wasm-rust";
import type { Assert, isExact } from "./utils";

console.log(`Result of add(1, 2): ${add(1, 2)}`);

type C = Assert<isExact<typeof add, (a: number, b: number) => number>>;
