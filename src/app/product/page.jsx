import React from 'react';
import getAllProducts from '../libs/getAllProducts';
import Link from 'next/link';
import Image from 'next/image';

const page =  async() => {
    const data = await getAllProducts();
    console.log(data);

    return (
        <div>
            <div className='mt-5'>
                <h1 className='my-5 font-bold text-green-700 text-3xl'>All Products</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                    {
                        data.products.map((product, index)=>(
                            <Link className='grid' href={`product/${product.id}`} key={index}>
                            <div className="card-design">
                                <Image src={product.thumbnail} height={300} width={500} alt={product.title}/>
                                <div className="card-body">
                                <div className="font-bold text-xl mb-2">{product.title}</div>
                                <p className="text-red-700 font-semibold text-base">{product.price}$</p>
                                </div>
                                <div className="card-footer">
                                <span className="rating">
                                    Rating: {product.rating}
                                </span>
                                </div>
                            </div>
                        </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default page;