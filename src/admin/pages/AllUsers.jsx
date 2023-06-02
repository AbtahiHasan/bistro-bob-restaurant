import React from 'react';
import useCart from '../../hooks/useCart';
import Swal from 'sweetalert2';
import UserTable from '../components/all-users/UserTable';
import Heading from '../../components/Heading';

const AllUsers = () => {
    const {refetch,carts} = useCart()
    const total = carts.reduce((total, num) => total + num.price, 0)
    const deleteUser = (id) => {        
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
 
                    }
                  })
           
        
    }
    return (
        <main className='h-screen overflow-hidden'>
            <Heading heading="MANAGE ALL USERS"  subHeading={"How many??"}/>
            <div className='flex justify-between items-center font-bold mt-4'>
                <h3 className='text-3xl'>Total Users: {carts.length || 0}</h3>
            </div>
            <section  className='bg-white  h-[500px] mt-2 overflow-x-auto relative'>
                <table className='w-full text-white'>
                    <thead >
                        <tr className='bg-[#D1A054] sticky top-0 px-10'>
                            <th className='py-3'></th>
                            <th className='py-3'>USER IMAGE</th>
                            <th className='py-3'>NAME</th>
                            <th className='py-3'>EMAIL</th>
                            <th className='py-3'>ROLE</th>
                            <th className='py-3'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            carts.map((cart, i) => <UserTable key={cart._id} i={i} cart={cart} deleteUser={deleteUser} />)
                        }
                        
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default AllUsers;