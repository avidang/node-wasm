import { add } from "wasm-rust";
import type { Assert, isExact } from "./utils";

console.log(`Result of add(1, 2): ${add(1, 2)}`);

/**
 * Type alias `C` is used to assert that the type of webAssembly function `add` is exactly
 * a function that takes two numbers as arguments and returns a number.
 *
 * This is done using the `Assert` utility type and the `isExact` type
 * predicate. If `add` type does not match the specified function type, a
 * type error will be raised.
 */
type C = Assert<isExact<typeof add, (a: number, b: number) => number>>;
