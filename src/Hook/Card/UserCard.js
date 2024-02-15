import React from 'react';
import { toast } from 'react-toastify';
const UserCard = ({user,refetch}) => {
    const {email,role}=user
    const makeAdmin = () => {
        fetch(`https://abccomerce.onrender.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <tr>
        <th>1</th>
        <td>{email}</td>
        <td>{role !== 'admin' &&<button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
      
      </tr>
    );
};

export default UserCard;