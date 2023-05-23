import React from 'react';

const Heading = ({heading, subHeading}) => {
    return (
        <div>
            <h2 className="text-[#D99904] text-center my-3">--- {subHeading} ---</h2>
            <div className="flex justify-center">
                <h3 className="border-y-4 inline-block py-2 text-[40px]">{heading}</h3>
            </div>
        </div>
    );
};
export default Heading;