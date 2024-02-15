import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserCard from '../../Hook/Card/UserCard';

const Dashboard = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://abccomerce.onrender.com/user', {
    method: 'GET',
    
}).then(res => res.json()));
    if (isLoading) {
        return <Loading/>
    }
    return (
        <div>
            <Link to='add'><button className="btn btn-secondary">Add Item</button></Link>

            <h1 className='text-2xl mt-20'>All User: {users?.length}</h1> 

           <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
               
              </th>
              <th>Name</th>
              <th>Admin</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
              {
                users?.map(user =><UserCard
                    key = {user._id}
                    user={user}
                    refetch={refetch}
                ></UserCard>)
              }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Dashboard;