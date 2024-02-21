// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// import { SiMinutemailer } from 'react-icons/si';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FcClock } from 'react-icons/fc';
import { IoIosMail } from "react-icons/io";
import ScrollingText from '../ScrollingText';

const TopBoard = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <div className="bg-gradient-to-l from-emerald-700 via-rose-500 to-green-400 flex flex-col lg:flex-row justify-center lg:justify-between p-3 items-center w-full mx-auto">
            <div>
                <div className='text-xl font-mono text-black flex flex-row justify-center items-center gap-2'>
                    <h1><FcClock></FcClock></h1>
                    <p className='font-thin text-black'>{time.toLocaleTimeString()}</p>
                </div>
            </div>
            <div className='w-full lg:w-9/12'> <ScrollingText></ScrollingText></div>
            <div>
                <div className='text-lg font-thin text-white flex flex-row justify-start items-center gap-2'>
                    <h1>< IoIosMail /></h1>
                    <h1>xyz@mail.com</h1>
                </div>
                <div className='text-lg font-thin text-white flex flex-row justify-start items-center gap-2'>
                    <h1><BiSolidPhoneCall></BiSolidPhoneCall></h1>
                    <h1>01xxxxxx</h1>
                </div>
            </div>

        </div>
    );
};

export default TopBoard;