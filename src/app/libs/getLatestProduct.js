export default async function getAllProducts(){
    const result = await fetch("https://dummyjson.com/products?limit=8");
    return result.json();
}