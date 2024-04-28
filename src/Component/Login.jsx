import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


const Login = () => {
    const {logInUser,googleLogin,githubLogin} =  UseAuth()
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
            // const user = {displayName};
            // fetch('http://localhost:5000/user',{
            //     method:'POST',
            //     hearders:{
            //         'content-type':'application/json'
            //     },
            //     body:JSON.stringify(user)
            // })
            // .then(res => res.json())
            // .then(data=>{
            //     console.log(data)
            // })
            if(result.user){
                navigate(from)
            }
        })
        .catch((error)=>{
            if(error.code === "auth/invalid-credential"){
                alert('password is incorrect')
            }else{
                alert('login failed')
            }
        })
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
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"
           {...register("email",{required:true})}
          />
          {errors.email && <small className="text-red-500">This field is required</small>}
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" 
          {...register("password", {required:true})}
           />
           {errors.password && <small className="text-red-500">This field is required</small>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="flex justify-between">
            <h1>New here?</h1>
            <Link to="/register"><h1>Register Now</h1></Link>
        </div>
       
      </form>
      <div className="mb-8 text-center space-x-8">
            <button onClick={()=>handleSocial(googleLogin)}><FaGoogle /></button>
            <button onClick={()=>handleSocial(githubLogin)}><FaGithub /></button>
        </div>
    </div>
  </div>
</div>
    );
};

export default Login;