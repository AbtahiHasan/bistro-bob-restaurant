import Swal from 'sweetalert2';
import UserTable from '../components/all-users/UserTable';
import Heading from '../../components/Heading';
import useUsers from '../../hooks/useUsers';

const AllUsers = () => {
    const {refetchUser, users} = useUsers()

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
                        fetch(`http://localhost:3000/user/${id}`, {
                            method: "DELETE"
                        })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if(data.deletedCount > 0) {
                                refetchUser()
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


    const makeAdmin = (email) => {
        fetch("http://localhost:3000/make-admin/:id")

        Swal.fire({
            title: 'Are you sure?',
            text: "Make the user Admin",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
                const adminRole = {
                    role: "admin"
                }
                fetch(`http://localhost:3000/make-admin/${email}`, 
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(adminRole)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetchUser()
                    Swal.fire(
                        'Done!',
                        'This user now Admin',
                        'success'
                      )
                })
              
            }
          })
    }
    return (
        <main className='h-screen overflow-hidden'>
            <Heading heading="MANAGE ALL USERS"  subHeading={"How many??"}/>
            <div className='flex justify-between items-center font-bold mt-4'>
                <h3 className='text-3xl'>Total Users: {users.length || 0}</h3>
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
                            users.map((user, i) => <UserTable key={user._id} i={i} makeAdmin={makeAdmin} user={user} deleteUser={deleteUser} />)
                        }
                        
                    </tbody>
                </table>
            </section>
        </main>
    );
};

export default AllUsers;