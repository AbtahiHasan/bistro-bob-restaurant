import { BsTrash3Fill } from "react-icons/bs";
import userImage from "/icon/user.svg"
import admin from "/icon/admin.png"

const UserTable = ({user, i, deleteUser, makeAdmin}) => {
    const {_id, photo_url,name, email, role} = user
    return (
        
        <tr className="border-b-2 text-[#737373]">
            <td className="py-2 text-center text-[#151515] font-bold">{i + 1}</td>
            <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src={photo_url} alt="" /></td>
            <td className="py-2 text-center">{name}</td>
            <td className="py-2 text-center">{email}</td>
            <td className="py-2 text-center "><button disabled={role === "admin"} onClick={() => makeAdmin(email)} className={`bg-[#D1A054] p-3 rounded text-white block mx-auto ${role === "admin" ? "cursor-not-allowed" : ""}`}>
                 <img className="w-[20px] h-[20px]" src={role === "admin" ? admin : userImage} alt="" />
                </button></td>
            <td className="py-2"><button onClick={() => deleteUser(_id)} className="bg-[#B91C1C] p-3 rounded text-white block mx-auto"><BsTrash3Fill/></button></td>
        </tr>
        
    );
};

export default UserTable;