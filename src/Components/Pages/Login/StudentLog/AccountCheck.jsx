import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../SharedPages/Loading';
import { AuthContext } from '../../../Context/UserContext';
import { useContext } from 'react';

const AccountCheck = () => {
    const { user } = useContext(AuthContext);
    const number = user.phoneNumber;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4040/stdInfo/${number}`);
            const data = await res.json();
            if (data.length < 1) {
                return navigate("/studentInfo")
            }
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    const userNumber = data?.[0].primaryContact;
    console.log(data);

    return (
        <div>

            <h1 className='font-bold text-2xl'> total Users: {data.length}</h1>
            <h1 className='font-bold text-2xl'> Fathers Name: {data?.[0].Fathername}</h1>
            <h1 className='font-bold text-2xl'> Mothers Name: {data?.[0].Mothername}</h1>
            <h1 className='font-bold text-2xl'> Name: {data?.[0].name}</h1>
            <h1 className='font-bold text-2xl'> Address: {data?.[0].address}</h1>
            <h1 className='font-bold text-2xl'> Class: {data?.[0].class}</h1>
            <h1 className='font-bold text-2xl'> Group: {data?.[0].group}</h1>
            <h1 className='font-bold text-2xl'> Institute: {data?.[0].institute}</h1>
            <h1 className='font-bold text-2xl'> Contact: {userNumber}</h1>
            <div className="avatar">
                <div className="rounded w-44">
                    <img src={data?.[0].image} />
                </div>
            </div>

        </div>
    );
};

export default AccountCheck;