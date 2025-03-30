"use client"
import Conatiner from "@/components/conatiner";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";

function Dashboard() {

    const [newProduct,setNewProduct]=useState({title:"",price:"",image:"",description:""})

    const handleChangeProduct=(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {value,name}=e.target
        setNewProduct({...newProduct,[name]:value})
    }

    const handleCreateProduct=()=>{
        axios({
            method:"POST",
            url:"http://localhost:3001/products",
            data:{
                id:Math.floor(Math.random()*1000).toString(),
                title:newProduct.image,
                price:newProduct.price,
                image:newProduct.image,
                description:newProduct.description
            }
        })
    }
  return (
    <div className="bg-slate-300 p-4 text-right rtl:">
      <Conatiner>
        <div className="grid grid-cols-3 gap-4">
          <input type="text" placeholder="عنوان" onChange={handleChangeProduct} name="title"/>
          <input type="text" placeholder="قیمت" onChange={handleChangeProduct} name="price"/>
          <input type="text" placeholder="عکس" onChange={handleChangeProduct} name="image"/>
        </div>
        <textarea placeholder="توضیحات" className="w-full mt-4" onChange={handleChangeProduct} name="description"></textarea>
        <button className="bg-sky-500 text-white rounded px-4 py-1" onClick={handleCreateProduct}>ساخت محصول جدید </button>
      </Conatiner>
    </div>
  );
}

export default Dashboard;
