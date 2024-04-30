import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import UseAuth from './UseAuth';
import sign from './sign.json'
import signup from './signup.json'
import Lottie from 'lottie-react';
import world from './world.json'

const Navbar = () => {
    const { user, logOut } = UseAuth()
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    // console.log(theme)
    const Links = <>
        <NavLink to='/' style={({isActive})=>(isActive?{background:"green", color:"white",borderRadius:"30px"}:{font:"bold"})}><li><a>Home</a></li></NavLink>
        <NavLink to='/all' style={({isActive})=>(isActive?{background:"green", color:"white",borderRadius:"30px"}:{font:"bold"})}><li><a>All Tourist Spot</a></li></NavLink>
        {
            user && <NavLink to='/addplace' style={({isActive})=>(isActive?{background:"green", color:"white",borderRadius:"30px"}:{font:"bold"})}><li><a>Add Tourist Spot</a></li></NavLink>
        }
        <NavLink to='/updateplace' style={({isActive})=>(isActive?{background:"green", color:"white",borderRadius:"30px"}:{font:"bold"})}><li><a>My List</a></li></NavLink>

    </>

    return (
        <div className='w-[140px] lg:w-[1200px] lg:mx-auto'>
            <div className="navbar bg-base-100 fixed top-0 z-50">
                <div className="navbar-start  lg:w-80 ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box lg:w-52">
                            {Links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl hidden lg:flex"><Lottie className="w-10" animationData={world}/>Traveler'<span className='text-red-800'>s</span></a>
                </div>
                <div className=" hidden lg:flex lg:w-50 ">
                    <ul className="menu menu-horizontal px-1 ">
                        {Links}
                    </ul>
                </div>
                <div className="flex-end  lg:w-48 ">
                    <div className=''>
                        <label className="swap swap-rotate ">

                            {/* this hidden checkbox controls the state */}
                            <input onChange={handleToggle} type="checkbox" className="theme-controller" />

                            {/* sun icon */}
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                  <div className=''>
                  {
                        user ? <div className='dropdown dropdown-hover  lg:left-48'>
                            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                                <div className='w-10 rounded-full'>
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </label>
                            <ul tabIndex={0} className='menu menu-sm dropdown-content lg:-left-28 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box lg:w-48'>
                                <li><button>{user.displayName}</button></li>
                                <li><button onClick={logOut}>Log Out</button></li>
                            </ul>
                        </div> :
                            <div className='md:flex flex w-2 gap-4'>
                               
                                <Link to="/register"><button className='btn  bg-green-300 text-black lg:w-36 w-28 rounded-full'>sign up<Lottie className='md:w-10 w-5 hidden lg:flex' animationData={signup}/></button></Link>
                                <Link to='/login'><button className='btn flex bg-green-300 text-black lg:w-36 w-28 rounded-full'>sign in <Lottie className='md:w-10 w-5 hidden lg:flex' animationData={sign} /></button></Link>
                            </div>
                    }
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;