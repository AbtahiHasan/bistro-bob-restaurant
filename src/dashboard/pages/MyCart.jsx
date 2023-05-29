import React from 'react';
import useCart from '../../hooks/useCart';
import Heading from '../../components/Heading';
import TableBody from '../components/my-cart/TableBody';
import Swal from 'sweetalert2';

const MyCart = () => {
    const {refetch,carts} = useCart()
    const total = carts.reduce((total, num) => total + num.price, 0)
    const deleteMenu = (id) => {        
                Swal.fire({
                    title: 'Are you sure?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        fetch(`http://localhost:3000/cart/${id}`, {
                            method: "DELETE"
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if(data.deletedCount > 0) {
                                refetch()
                                Swal.fire(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                      )
                                }
                         })

                    //   
                    }
                  })
           
        
    }
    return (
        <main className='h-screen overflow-hidden'>
            <Heading heading="WANNA ADD MORE?"  subHeading={"My Cart"}/>
            <div className='flex justify-between items-center font-bold mt-4'>
                <h3 className='text-3xl'>Total orders: {carts.length || 0}</h3>
                <h3 className='text-3xl'>total price: ${total}</h3>
                <button className='bg-[#D1A054] p-2 rounded text-white uppercase'>Pay</button>
            </div>
            <section  className='bg-white  h-[500px] mt-2 overflow-x-auto relative'>
                <table className='w-full text-white'>
                    <thead >
                        <tr className='bg-[#D1A054] sticky top-0 px-10'>
                            <th className='py-3'></th>
                            <th className='py-3'>ITEM IMAGE</th>
                            <th className='py-3'>ITEM NAME</th>
                            <th className='py-3'>PRICE</th>
                            <th className='py-3'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            carts.map((cart, i) => <TableBody key={cart._id} i={i} cart={cart} deleteMenu={deleteMenu} />)
                        }
                        
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default MyCart;