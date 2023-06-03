import Select from 'react-select'
import Heading from "../../components/Heading";
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';


const AddItems = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
    const fileTypes = ["JPG", "PNG"];
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
  
    return (
        <main>
            <Heading heading={"ADD AN ITEM"} subHeading={"What's new?"} />
            <form> 
                <div>
                    <span className="font-bold text-[20px] block">Recipe name*</span>
                    <input className="w-full py-2 px-5 outline-0 border-[#E8E8E8] rounded mt-2" type="text" placeholder="Recipe name"/>
                </div>
                <div className="grid md:grid-cols-2 gap-5 mt-3">
                    <div>
                        <span className="font-bold text-[20px] block">Category*</span>
                        <div className='mt-2'>
                        <Select
                             defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}/>
                        </div>
                    </div>
                    <div>
                        <span className="font-bold text-[20px] block">Price*</span>
                        <input className="w-full py-2 px-5 outline-0 border-[#E8E8E8] rounded mt-2" type="number" placeholder="Price"/>
                    </div>
                </div>
                <div className='mt-2'>
                        <span className="font-bold text-[20px] block">Recipe Details*</span>
                        <textarea className="w-full resize-none py-3 h-[200px] px-5 outline-0 border-[#E8E8E8] rounded mt-2" type="text" placeholder="Recipe Details"/>
                    </div>
                <div className='w-full'>
                    <FileUploader classes="p-10 mt-5" handleChange={handleChange} name="file" types={fileTypes} />
                </div>
                <div>
                    <button style={{background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)"}} className="px-5 p-3 mt-3 text-white" type='submit'>Add Item</button>
                </div>
            </form>
        </main>
    );
};

export default AddItems;