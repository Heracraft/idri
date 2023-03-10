import { writable } from "svelte/store";

export const colorTheme = writable(null);
export const drawerOpen = writable(true);
export const cartPrices = writable([]);
export const cartItems = writable([])
export const sortSelection = writable("");

function decimalAdjust(type, value, exp) {
    type = String(type);
    if (!["round", "floor", "ceil"].includes(type)) {
      throw new TypeError(
        "The type of decimal adjustment must be one of 'round', 'floor', or 'ceil'."
      );
    }
    exp = Number(exp);
    value = Number(value);
    if (exp % 1 !== 0 || Number.isNaN(value)) {
      return NaN;
    } else if (exp === 0) {
      return Math[type](value);
    }
    const [magnitude, exponent = 0] = value.toString().split("e");
    const adjustedValue = Math[type](`${magnitude}e${exponent - exp}`);
    // Shift back
    const [newMagnitude, newExponent = 0] = adjustedValue.toString().split("e");
    return Number(`${newMagnitude}e${+newExponent + exp}`);
  }
  
  export const round = (value, exp) => decimalAdjust("round", value, exp);