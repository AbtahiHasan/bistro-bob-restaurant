import React from 'react';

const Heading = ({heading, subHeading, varient, className}) => {
    return (
        <div className={className}>
            <h2 className={`text-center my-3 ${varient === "white" ? "text-white" : "text-[#D99904]"} `}>--- {subHeading} ---</h2>
            <div className="flex justify-center">
                <h3 className={`border-y-4 inline-block py-2 text-[40px]  ${varient === "white" ? "text-white" : "text-[#151515]"}`}>{heading}</h3>
            </div>
        </div>
    );
};
export default Heading;