import React, { useContext, useState } from 'react'
import "./register.scss";
import city from "../../assests/City.svg"
import Country from "../../assests/Country.svg"
import flag from "../../assests/Flag.svg"
import linkdn from "../../assests/linkdn.svg"
import mail from "../../assests/mail.svg"
import noti from "../../assests/noti.svg"
import pinpad from "../../assests/pinpad.svg"
import users from "../../assests/users.svg"
import rafiki from "../../assests/rafiki.png"
import arrow from "../../assests/arrow.svg"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { Context } from '../../App';
const Register = () => {
    const {setUser}=useContext(Context);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const navigate=useNavigate();
     
      const onnSubmit = async(data)=>{
       try {
          const res = await axios.post("https://investmentbackend-s9ny.onrender.com/register",{
            ...data
          },{
            withCredentials:true
          });
          setUser(res.data.user)
          navigate("/")
    
        } catch (err) {
            console.log(err)
            alert(err.response?.data?.message)
         
        }
      }
  return (
   <>
    <div className="register">
    <div className="arrow">
        <img src={arrow} alt="" />
    </div>
        <div className="container">
            <h1>Create Investor Profile</h1>
            <div className="banner">
                <div className="left">
                    <img src={rafiki} alt="" />
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit(onnSubmit)}>
                    <div className="inputField">
                        <div className="icon">
                            <img src={users} alt="" />
                        </div>
                        <div className="inputBox">
                            <input type="text" className='input' name='name' placeholder=" "  {...register("name", {
                            required: "Name is required",
                        })}/>
                            <label className='label'>Name</label>
                        </div>
                    </div>
                    {errors.name?.message && (
                        <p className="errors">{errors.name?.message}</p>
                    )}
                    <div className="inputField">
                        <div className="icon">
                            <img src={mail} alt="" />
                        </div>
                        <div className="inputBox">
                            <input type="text" className='input' name='email' placeholder=" "
                                 {...register("email", {
                            required: "Email is required",
                           
                        })}
                            />
                            <label className='label'>Email</label>
                        </div>
                    </div>
                    {errors.email?.message && (
                        <p className="errors">{errors.email?.message}</p>
                    )}
                    <div className="inputField">
                        <div className="icon">
                            <img src={noti} alt="" />
                        </div>
                        <div className="inputBox">
                            <input type="text" className='input' name='phone'  placeholder=" "
                        {...register("phone", {
                            required: "Phone number is required",
                            })}
                            />
                            <label className='label'>Phone no.</label>
                        </div>
                    </div>
                    {errors.phone?.message && (
                        <p className="errors">{errors.phone?.message}</p>
                    )}
                    <div className="inputField">
                        <div className="icon">
                            <img src={linkdn} alt="" />
                        </div>
                        <div className="inputBox">
                            <input type="text" className='input' name='likedn' placeholder=" "/>
                            <label className='label'>Likedn Link</label>
                        </div>
                    </div>
                    <div className="inputField">
                        <div className="icon">
                            <img src={flag} alt="" />
                        </div>
                        <div className="inputBox">
                            <input type="text" className='input' name='country'  placeholder=" " {...register("country", {
                            required: "Country is required",
                            })}/>
                            <label className='label'>Country</label>
                        </div>
                    </div>
                    {errors.country?.message && (
                        <p className="errors">{errors.country?.message}</p>
                    )}
                    <div className="inputField">
                        <div className="icon">
                            <img src={Country} alt="" />
                        </div>
                        <div className="inputBox">
                            <input type="text" className='input' name='state'  placeholder=" "
                                {...register("state", {
                            required: "state is required",
                            })}/>
                            <label className='label'>State</label>
                        </div>
                    </div>
                    {errors.state?.message && (
                        <p className="errors">{errors.state?.message}</p>
                    )}
                   <div className="cityCode">
                   <div className="inputField">
                        <div className="icon">
                            <img src={city} alt="" />
                        </div>
                        <div className="inputBox">
                            <input type="text" className='input' name='city'  placeholder=" "/>
                            <label className='label'>City</label>
                        </div>
                    </div>
                    <div className="inputField">
                        <div className="icon">
                            <img src={pinpad} alt="" />
                        </div>
                        <div className="inputBox">
                            <input type="text" className='input' name='pin' placeholder=" "/>
                            <label className='label'>Pin code</label>
                        </div>
                    </div>
                   </div>
                   <div className="checkBox">
                    <input type="checkbox" name="check"  {...register("check", {
                            required: "Please Agree on Condition",
                            })}/><label>I hereby by agree to terms and conditions and whatever information is asked for i have provided the right information</label>
                   </div>
                   {errors.check?.message && (
                        <p className="errors">{errors.check?.message}</p>
                    )}
                   <button className='btn' type='submit'>Next</button>
                    
                    </form>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Register