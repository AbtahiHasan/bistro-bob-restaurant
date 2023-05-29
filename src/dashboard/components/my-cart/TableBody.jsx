import { BsTrash3Fill } from "react-icons/bs";

const TableBody = ({cart, i}) => {
    const {_id, image, item_name, price} = cart
    return (
        
        <tr className="border-b-2 text-[#737373]">
            <td className="py-2 text-center text-[#151515] font-bold">{i + 1}</td>
            <td className="py-2"><img className="h-[75px] w-[75px] object-cover mx-auto" src={image} alt="" /></td>
            <td className="py-2 text-center">{item_name}</td>
            <td className="py-2 text-center">${price}</td>
            <td className="py-2"><button className="bg-[#B91C1C] p-3 rounded text-white block mx-auto"><BsTrash3Fill/></button></td>
        </tr>
        
    );
};

export default TableBody;