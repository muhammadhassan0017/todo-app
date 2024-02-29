import React from 'react';
import { MdDelete } from "react-icons/md";

const List = ({ data }) => {

    return (
        <div className='w-[585px] h-[500px] overflow-y-auto rounded bg-[#f3f3f3] p-4 shadow-inner'>
            {data && data.length ? (
                <ul className='flex flex-col gap-2'>
                    {/* {array.map((e) => {
                        return (
                            <li></li>
                        )
                    })} */}
                    {data.map((e) => (
                        <li className='p-2.5 flex flex-col gap-3 bg-gray-200 rounded'>
                            <div className='flex justify-between items-center'>
                                <div className='text-xs font-extrabold text-[#6e6e6e]'>{e.id}</div>
                                <MdDelete className='text-red-700 text-md font-bold cursor-pointer' />
                            </div>
                            <div className='font-md text-justify italic'>
                                {e.note}
                            </div>
                            <div className='flex justify-end text-[9px] font-bold text-[#7e7e7e]'>
                                {e.createdAt}
                            </div>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    )
}

export default List
