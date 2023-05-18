import React from 'react';
import "./dashboard.scss"

const Dashboard = ({user}) => {
  return (
    <>
      <div className="dashboard">
        <button className='active'>
          Live Deals 
        </button>
        <button>
          Most Funded
        </button>
        
      </div>
      <div className="userDetails">
          <h1>Email :</h1> <span>{user?.email}</span>
        </div>
        <div className="userDetails">
          <h1>Phone :</h1> <span>{user?.phone}</span>
        </div>
        <div className="userDetails">
          <h1>Country :</h1> <span>{user?.country}</span>
        </div>
        <div className="userDetails">
          <h1>State :</h1> <span>{user?.state}</span>
        </div>
        {user?.likedn &&<div className="userDetails">
          <h1>Linkedin id:</h1> <span>{user?.likedn}</span>
        </div>}
    </>
  )
}

export default Dashboard