
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import getAllCategories from '../libs/getAllCategories';


const Header =  ({themeOption}) => {

    // const menu = await getAllCategories();


    


    return (
        <div className='relative'>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <Link href='/' className="btn btn-ghost normal-case text-xl">Shop</Link>
                    <span className='mr-2'>Theme Change:</span>
              <input type="checkbox" className="toggle" onChange={themeOption}/>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link href="/product">All Products</Link></li>
                    <li tabIndex={0}>
                        <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                        <span className="font-bold text-lg">8 Items</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-block">View cart</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            {/* <Image src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png" height={300} width={500} layout="fixed" alt="person"/> */}
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            

            {/* <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
                {
                    menu.map((menus, index)=>(
                        <li key={index} className='capitalize'><Link href="/">{menus}</Link></li>
                    ))
                }
                
            </ul> */}
        </div>
    );
};

export default Header;