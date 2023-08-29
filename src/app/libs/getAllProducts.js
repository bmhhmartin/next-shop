export default async function getAllProducts(){
    const result = await fetch("https://dummyjson.com/products");
    return result.json();
}