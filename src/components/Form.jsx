import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { supabase } from "./supabase";

const Form = () => {
    const [title, setTitle] = useState('')
    
    // useEffect(()=>{
    //     insertData()

    // },[])
    const insertData = async () =>{
        const {error} = await supabase.from('blog').insert({title: title})
        setTitle("")
    }
  return (
    <div className="bg-blue-500 w-full h-24 flex justify-between items-center">
      <div className="w-[50%] mx-auto flex gap-4">
        <input
        required
          type="text"
          placeholder="What's your mind"
          className="w-full px-4 py-2 outline-none rounded-md "
          onChange={(e)=>setTitle(e.target.value)}
        />
        <button className="bg-white px-4 py-2 rounded-md" onClick={insertData}>
          <IoMdAdd size={20}/>
         
        </button>
      </div>
    </div>
  );
};

export default Form;
