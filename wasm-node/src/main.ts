import { add, sumList } from "wasm-rust";

const left = 1;
const right = 2;

const array = [1, 2, 3, 4, 5];

console.log(`Result of add(${left}, ${right}): ${add(left, right)}`);
console.log(
	`Result of sumList([${array}]): ${sumList(new Float64Array(array))}`,
);
