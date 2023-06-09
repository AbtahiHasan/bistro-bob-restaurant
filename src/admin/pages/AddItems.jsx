import Select from 'react-select'
import Heading from "../../components/Heading";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const AddItems = () => {
    const [selectedOption, setSelectedOption] = useState("salad");
    const {register, handleSubmit, reset} = useForm()
    const {axiosSecure} = useAxiosSecure()
    const options = [
        { value: 'salad', label: 'Salad' },
        { value: 'pizza', label: 'Pizza' },
        { value: 'soup', label: 'Soup' },
        { value: 'dessert', label: 'Dessert' },
        { value: 'drinks', label: 'Drinks' }
    ]
    const imageHostingApi = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_API_KEY}`
    const addItem = (data) => { 
        const formData = new FormData()
        formData.append("image", data.image[0])
        
        fetch(imageHostingApi, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse)
            if(imgResponse.success) {
                const newItem = {
                    name: data.name,
                    image: imgResponse.data.display_url,
                    category: selectedOption.value,
                    price: data.price,
                    recipe: data.recipe
                }
                axiosSecure.post("/add-menu", newItem)
                .then(data => {
                    if(data.data._id) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Insert successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
                
            }
        })
 }

    return (
        <main>
            <Heading heading={"ADD AN ITEM"} subHeading={"What's new?"} />
            <form onSubmit={handleSubmit(addItem)}> 
                <div>
                    <span className="font-bold text-[20px] block">Recipe name*</span>
                    <input {...register("name", {required: true})} className="w-full bg-white py-2 px-5 outline-0 border-[#E8E8E8] rounded mt-2" type="text" placeholder="Recipe name"/>
                </div>
                <div className="grid md:grid-cols-2 gap-5 mt-3">
                    <div>
                        <span className="font-bold text-[20px] block">Category*</span>
                        <div className='mt-2'>
                        <Select 
                             defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options} required={true}/>
                             
                        </div>
                    </div>
                    <div>
                        <span className="font-bold text-[20px] block">Price*</span>
                        <input  {...register("price", {required: true})} className="w-full py-2 px-5 outline-0 border-[#E8E8E8] rounded mt-2" type="number" placeholder="Price"/>
                    </div>
                </div>
                <div className='mt-2'>
                        <span className="font-bold text-[20px] block">Recipe Details*</span>
                        <textarea {...register("recipe", {required: true})} className="w-full resize-none py-3 h-[200px] px-5 outline-0 border-[#E8E8E8] rounded mt-2" type="text" placeholder="Recipe Details"/>
                    </div>
                <div className='w-full'>
                    <input type="file"   {...register("image", {required: true})} id="" />
                </div>
                <div>
                    <button style={{background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)"}} className="px-5 p-3 mt-3 text-white" type='submit'>Add Item</button>
                </div>
            </form>
        </main>
    );
};

export default AddItems;