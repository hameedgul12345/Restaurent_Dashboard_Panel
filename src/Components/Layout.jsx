import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "animate.css";
function Layout({ children }) {
  const [dropDownButton, setDropDownButton] = useState(false);
  const [width,setWidth]=useState('75%')
  const[leftMargin,setLeftMargin]=useState('20%')
  const [menu,setMenu]=useState(true)

  const setUIFull=()=>{
   setWidth('95%')
   setLeftMargin('0%')
   setMenu(!menu)
  }
  
  const setUIHalf=()=>{
    setWidth('75%')
    setLeftMargin('20%')
    setMenu(!menu)
   }
   const links=[
    {
      link:'/dashboard',
      title:'Dashboard',
      icon: <i className="ri-dashboard-fill"></i> 
    },
    {
      link:'/menu',
      title:'Menu',
      icon: <i className="ri-archive-fill"></i>
    },
   
   ]
  return (
    <>
      <div className="w-full">
        <aside
          style={{
            width: leftMargin,
            minHeight: "100vh",
            position: "fixed",
            top: "0%",
            left: "0%",
            overflow: "hidden",
            transition:'0.75s ease'
          }}
        >
          <div className="flex flex-col justify-center">
            <div className="bg-[#EBEBEB] h-20 ">
              <img
                src="/images/costiclogo.png"
                className="mx-auto my-4 w-32"
                alt=""
              />
            </div>
            <div>
             {
              links.map((route,index)=>(
                <Link to={route.link}>
                <div className="flex flex-row gap-2 bg-slate-500 p-2 ">
                  {route.icon} <h3>{route.title}</h3>
                </div>
              </Link>
              ))
             }
              
            </div>
          </div>
        </aside>
        <section style={{ width: width, marginLeft: leftMargin,transition:'0.75s ease' }}>
          <div className="flex items-center justify-between p-4 bg-white shadow-md">
            {/* Left Section */}
            <div className="flex items-center space-x-2">
           {menu?<i className="ri-menu-line" onClick={setUIFull}></i>:<i className="ri-menu-2-line" onClick={setUIHalf}></i>}
              {/* Icon Placeholder */}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Center Section */}
              <div className="flex items-center flex-grow max-w-xl bg-gray-100 border border-gray-300 rounded-full">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full px-4 py-2 text-sm bg-transparent focus:outline-none"
                />
                <i className="ri-search-line text-gray-500 text-xl pr-4"></i>
              </div>

              <i className="ri-mail-line text-gray-500 text-xl hover:text-gray-700 cursor-pointer"></i>
              <i className="ri-notification-3-line text-gray-500 text-xl hover:text-gray-700 cursor-pointer"></i>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                <img
                  src="/images/userProfile.jpg"
                  alt="Profile"
                  className="w-full  object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <aside
          style={{
            width: "5%",
            display:"flex",
            flexDirection:'column',
            alignItems:'center',
            minHeight: "100vh",
            position: "fixed",
            top: "0%",
            right: "0%",
            overflow: "hidden",
            border:'1px solid #EBEBEB',
            gap:'30px'
          }}
          className="p-4"      
        >
        <i className="ri-todo-line  text-gray-500  text-xl"></i>
        <i class="ri-notification-3-line  text-gray-500  text-xl"></i>
        <i class="ri-pencil-line  text-gray-500  text-xl"></i>
        <i class="ri-share-line  text-gray-500  text-xl"></i>
        <i class="ri-settings-2-line text-gray-500  text-xl"></i>
        </aside>
      </div>
      <div style={{ marginLeft: leftMargin,transition:'0.75s ease' ,width:width}} className="p-4"> {children}</div>
      {/* <Outlet /> Renders child routes dynamically */}
    </>
  );
}

export default Layout;
