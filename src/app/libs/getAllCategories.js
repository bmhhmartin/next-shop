export default async function getAllCategories(){
    const result = await fetch("https://dummyjson.com/products/categories");
    return result.json();
}