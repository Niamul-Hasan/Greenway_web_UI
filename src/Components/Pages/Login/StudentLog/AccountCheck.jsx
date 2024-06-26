import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../SharedPages/Loading';
import { AuthContext } from '../../../Context/UserContext';
import { useContext } from 'react';
import sidebg from "../../../../assets/sideBanner.jpg"
import { Helmet } from 'react-helmet-async';

const AccountCheck = () => {
    const { user } = useContext(AuthContext);
    const number = user?.phoneNumber;
    const email = user?.email;
    console.log(email);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["studentInfo"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4040/stdInfo/${number}`);
            const data = await res.json();

            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    if (data.length < 1) {
        if (email) {
            return navigate("/")
        }
        return navigate("/studentInfo")
    }

    console.log(data)


    const CurrnetInfo = {
        Id: data?.[0]._id,
        Father: data?.[0].Fathername,
        Mother: data?.[0].Mothername,
        Name: data?.[0].name,
        Address: data?.[0].address,
        Class: data?.[0].class,
        Group: data?.[0].group,
        Institute: data?.[0].institute,
        PrimaryContact: data?.[0].primaryContact,
        SecondaryContact: data?.[0].secondaryContact,
        Gender: data?.[0].gender,
        Blood: data?.[0].blood,
        image: data?.[0].image


    }

    return (
        <>
            <Helmet>
                <title>Greenway | User Profile</title>
            </Helmet>
            <div className='bg-gradient-to-tl from-green-200 via-green-300 to-blue-500'>
                <div className='flex lg:flex-row lg:justify-between lg:items-center flex-col items-center gap-2'>
                    <div className='lg:w-4/5 w-full'>
                        <img src={sidebg} alt="" className='w-full' />
                    </div>
                    <div className='flex flex-col items-center justify-center w-max me-4'>
                        <div className="avatar">
                            <div className="rounded w-44">
                                <img src={CurrnetInfo?.image} />
                            </div>
                            <div className="badge badge-primary">primary</div>
                        </div>

                        <h1 className='font-semibold text-xsm'> ID: {CurrnetInfo?.Id}</h1>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col items-center lg:items-between justify-center gap-10 py-4'>
                    <div className='flex flex-col justify-start items-start px-10'>
                        <div className='font-bold text-2xl border-r-2 border-teal-800 my-2 w-full border-b-2 rounded bg-'> Name: {CurrnetInfo?.Name}</div>
                        <div className='font-bold text-2xl border-r-2 border-teal-800 my-2 w-full border-b-2 rounded bg-'> Father&#39;s Name: {CurrnetInfo?.Father}</div>
                        <div className='font-bold text-2xl border-r-2 border-teal-800 my-2 w-full border-b-2 rounded bg-'> Mother&#39;s Name: {CurrnetInfo?.Mother}</div>
                        <div className='font-bold text-2xl border-r-2 border-teal-800 my-2 w-full border-b-2 rounded bg-'> Class: {CurrnetInfo?.Class}</div>
                        <div className='font-bold text-2xl border-r-2 border-teal-800 my-2 w-full border-b-2 rounded bg-'> Group: {CurrnetInfo?.Group}</div>
                    </div>

                    <div className='flex flex-col justify-start items-start px-10'>
                        <div className='font-bold text-2xl border-r-2 border-teal-800 my-2 w-full border-b-2 rounded bg-'> Institute: {CurrnetInfo?.Institute}</div>
                        <div className='font-bold text-2xl border-r-2 border-teal-800 my-2 w-full border-b-2 rounded bg-'> Primary Contact: {CurrnetInfo?.PrimaryContact}</div>
                        <div className='font-bold text-2xl border-r-2 border-teal-800 my-2 w-full border-b-2 rounded bg-'>Secondary Contact: {CurrnetInfo?.SecondaryContact}</div>
                        <div className='font-bold text-2xl border-r-2 border-teal-800 my-2 w-full border-b-2 rounded bg-'>Sex: {CurrnetInfo?.Gender}</div>
                        <div className='font-bold text-2xl border-r-2 border-teal-800 my-2 w-full border-b-2 rounded bg-'> Address: {CurrnetInfo?.Address}</div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default AccountCheck;