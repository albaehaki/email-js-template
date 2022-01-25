import React from 'react';

function contact({ change, submit, from_name, from_email, subject, message }: any) {
    return (
        <div className='flex border-[1px] border-gray-200 py-5 px-10'>
            <form onSubmit={submit}>
                <div className='flex flex-col'>
                    <label className='font-medium pl-1'>
                        Nama
                    </label>
                    <input type='text' className='border-b-[1px] outline-none p-1 my-2 text-sm' name='from_name' value={from_name} onChange={change} />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium pl-1'>
                        Email
                    </label>
                    <input type='text' className='border-b-[1px] outline-none p-1 my-2 text-sm' name='from_email' value={from_email} onChange={change} />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium pl-1'>
                        Subject
                    </label>
                    <input type='text' className='border-b-[1px] outline-none p-1 my-2 text-sm' name='subject' value={subject} onChange={change} />
                </div>
                <div className='flex flex-col'>
                    <label className='font-medium pl-1'>
                        Message
                    </label>
                    <textarea className='border-b-[1px] outline-none p-1 my-2 text-sm h-24' name='message' value={message} onChange={change} />
                </div>
                <div>
                    <input className='font-medium my-2 p-2 hover:bg-gray-700 hover:text-white delay-100' type='submit' value='Send' />
                </div>
            </form>
        </div>);
}

export default contact;
