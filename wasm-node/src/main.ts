import { add } from "wasm-rust";

console.log(`Result of add(1, 2): ${add(1, 2)}`);

type isExact<T, U> = T extends U ? (U extends T ? true : false) : false;
type Assert<T extends true> = T;

/**
 * Type alias `C` is used to assert that the type of webAssembly function `add` is exactly 
 * a function that takes two numbers as arguments and returns a number.
 * 
 * This is done using the `Assert` utility type and the `isExact` type 
 * predicate. If `add` type does not match the specified function type, a 
 * type error will be raised.
 */
type C = Assert<isExact<typeof add, (a: number, b: number) => number>>;
