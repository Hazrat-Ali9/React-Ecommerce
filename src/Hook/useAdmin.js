import { useEffect, useState } from "react"
const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect( () =>{
        const email = user?.email;
        if(email){
            fetch(`https://abccomerce.onrender.com/admin/${email}`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(res => {
    if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.statusText}`);
    }
    return res.json();
})
.then(data => {
    setAdmin(data.admin);
    setAdminLoading(false);
})
.catch(error => {
    console.error('Fetch error:', error);
});

        }
    }, [user])

    return [admin, adminLoading]
}

export default useAdmin;