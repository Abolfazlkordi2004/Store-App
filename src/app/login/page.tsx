"use client"
import Conatiner from "@/components/conatiner";
// import axios from "axios";
import Cookie from "js-cookie"
import { redirect } from "next/navigation";
// import React, { useState } from "react";

function Login() {

    // const [userName,setUserName]=useState("")
    // const [password,setPassword]=useState("")


const handleLogin=()=>{
    // const data=axios({
    //     url:"/login",
    //     method:"POST",
    //     data:{
    //         username:userName,
    //         password:password
    //     }
    // })

    const response={
        token:"asjnsksdnssfvneonrnfeonrfnonflndo",
        expire:7,
    }

    Cookie.set("token",response.token,{expires:response.expire});
    redirect("/dashboard");
};
  return (
    <div>
      <Conatiner>
        <div className="border p-4 flex flex-col w-72 mx-auto">
          <input type="text"  />
          <input type="text" className="mt-2"  />
          <button type="button" className="mt-2" onClick={handleLogin}>ورود</button>
        </div>
      </Conatiner>
    </div>
  );
}

export default Login;
