import {writable} from "svelte/store"

export const colorTheme=writable(null)
export const drawerOpen=writable(true)
export const cartItems=writable(new Map())
