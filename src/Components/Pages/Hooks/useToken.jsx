
import { useEffect, useState } from "react"

const useToken = user => {
    console.log(user)
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.email;
        const phoneNumber = user?.phoneNumber;
        const curentUser = { email: email, phoneNumber: phoneNumber };
        console.log(curentUser);
        if (email) {
            // console.log(curentUser);
            fetch(`http://localhost:4040/user/${email}`, {
                method: "PUT",
                headers: {
                    'context-type': "application/json"
                },
                body: JSON.stringify(curentUser)
            }).then(res => res.json()).then(data => {
                // console.log("inside useToken", data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
        if (phoneNumber) {
            // console.log(curentUser);
            fetch(`http://localhost:4040/user/${phoneNumber}`, {
                method: "PUT",
                headers: {
                    'context-type': "application/json"
                },
                body: JSON.stringify(curentUser)
            }).then(res => res.json()).then(data => {
                // console.log("inside useToken", data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    }, [user])
    return [token];
}
export default useToken;