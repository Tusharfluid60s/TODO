import React, { useContext } from 'react'
import { Context } from '..';
import Loader from '../components/Loader';

const Profilee = () => {
  const {userr,isAuthenticated,loading}=useContext(Context);
  console.log(userr)

  return (
    loading?<Loader/>:(
      <div>
        <h1>{userr?.name}</h1>
        {/* we can also use userr.name , user?.name means if user.name exists */}
        <p>{userr?.email}</p>
      </div>
    )
    )
}

export default Profilee