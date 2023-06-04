import Select from 'react-select'
import Heading from "../../components/Heading";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useSingleMenu from '../../hooks/useSingleMenu';
import { useParams } from 'react-router-dom';


const EditMenu = () => {
    const {id} = useParams()
    const {menu} = useSingleMenu(id)
    const {axiosSecure} = useAxiosSecure()
    const {name, price,recipe } = menu



    const updateItem = (e) => {      
                e.preventDefault()
                const from = e.target
                const updatedValue = {
                    name: from.name.value,
                    price: from.price.value,
                    recipe: from.recipe.value
                }
                axiosSecure.put(`/update-menu/${id}`, updatedValue)
                .then(data => {
                    if(data.data.modifiedCount > 0) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Updated successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })


 }

    return (
        <main>
            <Heading heading={"UPDATE ITEM"} subHeading={"What's new?"} />
            <form onSubmit={updateItem}> 
                <div>
                    <span className="font-bold text-[20px] block">Recipe name*</span>
                    <input defaultValue={name} name='name'  className="w-full bg-white py-2 px-5 outline-0 border-[#E8E8E8] rounded mt-2" type="text" placeholder="Recipe name"/>
                </div>
            
                <div className='mt-2'>
                        <span className="font-bold text-[20px] block">Price*</span>
                        <input defaultValue={price} name='price'  className="w-full py-2 px-5 outline-0 border-[#E8E8E8] rounded mt-2" type="text" placeholder="Price"/>
                    </div>
                <div className='mt-2'>
                        <span className="font-bold text-[20px] block">Recipe Details*</span>
                        <textarea defaultValue={recipe} name='recipe'  className="w-full resize-none py-3 h-[200px] px-5 outline-0 border-[#E8E8E8] rounded mt-2" type="text" placeholder="Recipe Details"/>
                    </div>
               
                <div>
                    <button style={{background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)"}} className="px-5 p-3 mt-3 text-white block mx-auto" type='submit'>Update Recipe Details</button>
                </div>
            </form>
        </main>
    );
};

export default EditMenu;