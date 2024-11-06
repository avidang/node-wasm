use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(left: f64, right: f64) -> f64 {
    left + right
}

#[wasm_bindgen(js_name = sumList)]
pub fn sum_list(list: Vec<f64>) -> f64 {
    list.iter().sum()
}
