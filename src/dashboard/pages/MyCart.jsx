import React from 'react';
import useCart from '../../hooks/useCart';
import Heading from '../../components/Heading';
import TableBody from '../components/my-cart/TableBody';

const MyCart = () => {
    const {carts} = useCart()
    const total = carts.reduce((total, num) => total + num.price, 0)
    return (
        <main>
            <Heading heading="WANNA ADD MORE?"  subHeading={"My Cart"}/>
            <div className='flex justify-between items-center mb-5 font-bold mt-20'>
                <h3 className='text-3xl'>Total orders: {carts.length || 0}</h3>
                <h3 className='text-3xl'>total price: ${total}</h3>
                <button className='bg-[#D1A054] p-2 rounded text-white uppercase'>Pay</button>
            </div>
            <section  className='bg-white p-10'>
                <table className='w-full text-white'>
                    <thead >
                        <tr className='bg-[#D1A054]'>
                            <th className='py-3'></th>
                            <th className='py-3'>ITEM IMAGE</th>
                            <th className='py-3'>ITEM NAME</th>
                            <th className='py-3'>PRICE</th>
                            <th className='py-3'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            carts.map((cart, i) => <TableBody key={cart._id} i={i} cart={cart}/>)
                        }
                        
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default MyCart;