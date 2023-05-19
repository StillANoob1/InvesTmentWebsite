import React, { useContext, useState } from 'react';
import "./leftBar.scss";
import hell from "../../assests/hell.svg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../App';

const LeftBar = ({user}) => {
  const [active, setActive] = useState("dash")
  const{setUser}=useContext(Context);

  const navigate = useNavigate();
 
  const handleRoute=(route,id)=>{
    navigate(`/${route}`)
    setActive(id);
  }
  const handleLogout = async () => {
    try {
        await axios.post(`https://investmentbackend-s9ny.onrender.com/logout`, {
            withCredentials: true
        })
        setUser("")
        navigate("/register");
      } catch (error) {
        console.log(error);
    }
}
  return (
    <>
      <div className="leftBar">
        <div className="user">
          <img src={hell} alt="" />
          <h3>{user?.name}</h3>
        </div>
        <div className="links">
        <span className={active==="dash"?"active":""} onClick={()=>handleRoute("","dash")}>Dashboard</span>
        <span className={active==="profile"?"active":""} onClick={()=>handleRoute("profile","profile")}>Profile</span>
        <span className={active==="editProfile"?"active":""} onClick={()=>handleRoute("editprofile","editProfile")}>Edit Profile</span>
        <span className={active==="network"?"active":""} onClick={()=>handleRoute("network","network")}>My network</span>
        <span className={active==="help"?"active":""} onClick={()=>handleRoute("help","help")}>Need help?</span>
        <span onClick={handleLogout}>Logout</span>
        </div>
      </div>
    </>
  )
}

export default LeftBar