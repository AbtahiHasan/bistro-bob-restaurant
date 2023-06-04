import Swal from 'sweetalert2';

import Heading from '../../components/Heading';

import MenuTable from '../components/manage-menu/MenuTable';
import useMenus from '../../hooks/useMenus';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageItems = () => {
    const {refetch, menues} = useMenus()
    const {axiosSecure} = useAxiosSecure()

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

                        axiosSecure.delete(`/delete-menu/${id}`)
                        .then(data => {
                            if(data.data.deletedCount > 0) {
                                refetch()
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'deleted successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                }
                         })
 
                    }
                  })
           
        
    }


    
    return (
        <main className='h-screen overflow-hidden'>
            <Heading heading="MANAGE ALL ITEMS"  subHeading={"Hurry Up!"}/>
            <div className='flex justify-between items-center font-bold mt-4'>
                <h3 className='text-3xl'>Total Users: {menues.length > 0 ?  menues.length : 0}</h3>
            </div>
            <section  className='bg-white  h-[500px] mt-2 overflow-x-auto relative'>
                <table className='w-full text-white'>
                    <thead >
                        <tr className='bg-[#D1A054] sticky top-0 px-10'>
                            <th className='py-3'></th>
                            <th className='py-3'>IMAGE</th>
                            <th className='py-3'>NAME</th>
                            <th className='py-3'>PRICE</th>
                            <th className='py-3'>ACTION</th>
                            <th className='py-3'>ACTION</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            menues && menues.map((menu, i) => <MenuTable key={menu._id} i={i} menu={menu} deleteMenu={deleteMenu} />)
                        }
                        
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default ManageItems;