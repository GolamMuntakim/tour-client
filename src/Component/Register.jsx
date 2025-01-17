import { useForm } from "react-hook-form";
import UseAuth from "./UseAuth";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const {createUser, user,updateUserProfile,logOut,loading} = UseAuth()
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const navigate = useNavigate();
      const from = '/login'
      const uppercaseRegx = /^(?=.*[a-z])(?=.*[A-Z])/;
      const onSubmit= data=>{
        const {email, password, image, fullname} = data;
        if(!uppercaseRegx.test(password)){
            return;
        }
       
        createUser(email, password).then(()=>{
            updateUserProfile(fullname, email, image)
            .then(()=>{
              navigate(from)
            })
            logOut()
        })
        toast.success(' registered succesfully')
      }
      if(loading){
        return <div className="flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
      }
    return (
       <>
       <Helmet>
        <title>
          Sign up
        </title>
       </Helmet>
        <div className="hero min-h-screen bg-base-200 mt-20">
        <div className="hero-content w-[350px] lg:w-[600px] flex-col lg:flex-row-reverse">
          <div className=" shrink-0 w-[350px] lg:w-[500px]  p-10 shadow-2xl bg-[url('/image/Angkor.avif')] bg-no-repeat bg-cover rounded-2xl ">
          <h1 className="text-4xl font-bold text-white text-center">Sign up now</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Full Name</span>
                </label>
                <input type="text" placeholder="Full Name" className="input input-bordered"
                 {...register("fullname",{required:true})}
                />
                {errors.fullname && <small className="text-red-500">This field is required</small>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered"
                 {...register("email",{required:true})}
                />
                {errors.email && <small className="text-red-500">This field is required</small>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Image Url</span>
                </label>
                <input type="text" placeholder="Image Url" className="input input-bordered"
                 {...register("image",{required:true})}
                />
                {errors.email && <small className="text-red-500">This field is required</small>}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type={showPassword? "text" : "password"} placeholder="password" className="input input-bordered" 
                {...register("password", {required:true,minLength:6,validate:value=>uppercaseRegx.test(value)|| "password must have an at least one uppercase and one lowercase letter"})}/>
                <span className="absolute right-10 lg:left-96 bottom-4" onClick={()=>setShowPassword(!showPassword)}>
            {
              showPassword ? <FaRegEyeSlash/> : <FaRegEye/>
            }
          </span>
                 {errors.password && errors.password.type ==="required" &&<small className="text-red-500">This field is required</small>}

                 {errors.password && errors.password.type ==="minLength" &&<small className="text-red-500">password must have 6 charecter</small>}

                 {errors.password && errors.password.type ==="validate" &&<small className="text-red-500">{errors.password.message}</small>}

                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[green] text-white border-none">Regsiter</button>
              </div>
              <Toaster></Toaster>
              <div className="flex justify-between text-white">
            <h1>Already registered?</h1>
            <Link to="/login"><h1>Login Now</h1></Link>
        </div>
            </form>
          </div>
        </div>
      </div>
       </>
    );
};

export default Register;