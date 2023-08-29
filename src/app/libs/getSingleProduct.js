export default async function getSingleProduct(id){
    const result = await fetch(`https://dummyjson.com/products/${id}`);
    return result.json();
}