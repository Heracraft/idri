import {error } from "@sveltejs/kit"

/** @type {import('./$types').Foo} */
export async function load({url}) {
    let sort = url.searchParams.get("sort")|| null
    let category = url.searchParams.get("category")|| null
    let query= await fetch(`https://fakestoreapi.com/products/category/electronics?sort=${sort?sort:''}&limit=10`)
    return{
        items:query.text()
    }
}