# Node.js and WebAssembly with Rust

This example demonstrates how to use WebAssembly (Wasm) with Rust in a Node.js project. We will create a simple Rust function, compile it to WebAssembly, and use it in a Node.js application.

## Prerequisites

- [Rust](https://www.rust-lang.org/tools/install)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/installation)

## Setup

1. **Create a new Rust project for WebAssembly:**

    ```sh
    cargo new --lib wasm-rust
    cd wasm-rust
    ```

2. **Add the following to your `Cargo.toml` to configure the project for WebAssembly:**

    ```toml
    [lib]
    crate-type = ["cdylib"]

    [dependencies]
    wasm-bindgen = "0.2"
    ```

3. **Implement the `add` function in `src/lib.rs`:**

    ```rust
    use wasm_bindgen::prelude::*;

    #[wasm_bindgen]
    pub fn add(left: i32, right: i32) -> i32 {
        left + right
    }
    ```

4. **Build the WebAssembly package using `wasm-pack`:**

    ```sh
    wasm-pack build --target nodejs
    ```

5. **Create a new Node.js project:**

    ```sh
    mkdir wasm-node
    cd wasm-node
    pnpm init
    ```

6. **Add the WebAssembly package to the Node.js project:**

    ```sh
    pnpm add file:../wasm-rust/pkg
    ```

7. **Create a `main.js` file to use the WebAssembly module:**

    ```js
    const wasm = require('wasm-rust');

    const result = wasm.add(2, 3);
    console.log(`2 + 3 = ${result}`);
    ```

8. **Run the Node.js application:**

    ```sh
    node main.js
    ```

You should see the output `2 + 3 = 5`.

## Summary

In this example, we created a simple Rust function, compiled it to WebAssembly using `wasm-pack`, and used it in a Node.js application. This demonstrates how to integrate Rust and WebAssembly with Node.js using `pnpm`.