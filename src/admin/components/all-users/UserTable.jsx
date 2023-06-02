import { BsTrash3Fill } from "react-icons/bs";
import user from "/icon/user.svg"
import admin from "/icon/admin.png"

const UserTable = ({cart, i, deleteUser}) => {
    const {_id, image, item_name, price} = cart
    return (
        
        <tr className="border-b-2 text-[#737373]">
            <td className="py-2 text-center text-[#151515] font-bold">{i + 1}</td>
            <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src={image} alt="" /></td>
            <td className="py-2 text-center">{item_name}</td>
            <td className="py-2 text-center">demo@gmail.com</td>
            <td className="py-2 text-center "><button className="bg-[#D1A054] p-3 rounded text-white block mx-auto"><img className="w-[30px] h-[30px]" src={user} alt="" /> <img className="w-[30px] h-[30px]" src={admin} alt="" /></button></td>
            <td className="py-2"><button onClick={() => deleteUser(_id)} className="bg-[#B91C1C] p-3 rounded text-white block mx-auto"><BsTrash3Fill/></button></td>
        </tr>
        
    );
};

export default UserTable;