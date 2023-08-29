import getSingleProduct from '@/app/libs/getSingleProduct';
import Image from 'next/image';
import React from 'react';

const page = async({params}) => {

    const id = params.id;
    const product = await getSingleProduct(id);

    return (
        <div>
            <div className='py-5'>
                <h2 className='font-bold text-green-600 lg:text-4xl md:text-3xl mb-5'>Product Details</h2>
            </div>
            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols1 gap-10">
                <div>
                    <Image src={product.images[0]} height={300} width={500} layout="responsive" placeholder='blur' blurDataURL='https://www.befunky.com/images/prismic/391d50e3-1268-45e1-aaaa-3cfe6f2fb90d_hero-blur-image-2.jpg?auto=avif,webp&format=jpg&width=896' alt={product.title}/>
                </div>
                <div>
                    <ul>
                        <li className='font-bold text-blue-600 text-3xl mb-2'>{product.title}</li>
                        <li className='text-slate-800 mb-2 text-3xl font-bold'>Price: {product.price} $</li>
                        <li className='text-slate-600 mb-2 text-2xl'><span className='font-bold'>Brand:</span> {product.brand}</li>
                        <li className='text-slate-700 mb-2 text-2xl'><span className='font-bold'>Stock: </span> {product.stock}</li>
                        <li className='rating'>Rating: {product.rating}</li>
                        <li className='text-slate-700 mb-2'>{product.description}</li>
                    </ul>
                </div>
            </div>
            <h2 className='my-10 text-white text-3xl font-bold text-center bg-slate-500 p-3'>All Images</h2>
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols1 gap-10 mt-5 mx-auto">
                {
                    product.images.map((image, index)=>(
                            <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                                <figure>
                                    <Image src={image} height={200} width={300} layout='responsive' placeholder='blur' blurDataURL='https://www.befunky.com/images/prismic/391d50e3-1268-45e1-aaaa-3cfe6f2fb90d_hero-blur-image-2.jpg?auto=avif,webp&format=jpg&width=896' alt={product.title}/>
                                </figure>
                            </div>
                    ))
                }
            </div>
        </div>
    );
};

export default page;