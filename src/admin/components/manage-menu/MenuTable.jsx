import { BsTrash3Fill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const MenuTable = ({menu, i, deleteMenu}) => {
    const {_id, image,name, price} = menu
    return (
        
        <tr className="border-b-2 text-[#737373]">
            <td className="py-2 text-center text-[#151515] font-bold">{i + 1}</td>
            <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src={image} alt="" /></td>
            <td className="py-2 text-center">{name}</td>
            <td className="py-2 text-center">{price}</td>
            <td className="py-2 text-center "><Link to={`/dashboard/manage-items/${_id}/edit`}>
            <button className={`bg-[#D1A054] p-3 rounded text-white block mx-auto`}>
                 <FiEdit/>
                </button>
                </Link></td>
            <td className="py-2"><button onClick={() => deleteMenu(_id)} className="bg-[#B91C1C] p-3 rounded text-white block mx-auto"><BsTrash3Fill/></button></td>
        </tr>
        
    );
};

export default MenuTable;