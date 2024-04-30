import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const {logInUser,googleLogin,githubLogin,loading} =  UseAuth();
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const navigate= useNavigate();
      const from='/'
      const onSubmit = (data)=>{
        const{email, password} = data;
        logInUser(email, password)
        .then(result=>{
            console.log(result)
            
            if(result.user){
                navigate(from)
            }
        })
        .catch((error)=>{
            if(error.code === "auth/invalid-credential"){
                toast.error('password is incorrect')
            }else{
                toast.error('login failed')
            }
        })
      }
      if(loading){
        return <div className="flex justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
      }
      const handleSocial=(social)=>{
        social()
        .then(result=>{
            if(result.user){
                navigate(from)
            }
        })
      }
    return (
      <>
      <Helmet>
        <title>
          Sign in
        </title>
       </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content ">

    <div className=" w-[350px] lg:w-[600px] h-[400px] mx-auto p-8 shadow-2xl rounded-2xl" 
    style={{backgroundImage: `url('/image/sundarban.avif')`, backgroundRepeat:"no-repeat"}} >
    <h1 className="text-5xl font-bold text-white text-center">Login now!</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"
           {...register("email",{required:true})}
          />
          {errors.email && <small className="text-red-500">This field is required</small>}
         
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type={showPassword? "text" : "password"} placeholder="password" className="input input-bordered" 
          {...register("password", {required:true})}/>
          <span className="absolute right-10 lg:left-96 bottom-4" onClick={()=>setShowPassword(!showPassword)}>
            {
              showPassword ? <FaRegEyeSlash/> : <FaRegEye/>
            }
          </span>
           {errors.password && <small className="text-red-500">This field is required</small>}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[green] border-none text-white">Login</button>
        </div>
        <div className="flex justify-between text-white">
            <h1>New here?</h1>
            <Link to="/register"><h1>Register Now</h1></Link>
        </div>
       <Toaster></Toaster>
      </form>
      <div className="mb-8 text-center space-x-8 text-white">
            <button onClick={()=>handleSocial(googleLogin)}><FaGoogle /></button>
            <button onClick={()=>handleSocial(githubLogin)}><FaGithub /></button>
        </div>
    </div>
  </div>
</div>
</>
    );
};

export default Login;