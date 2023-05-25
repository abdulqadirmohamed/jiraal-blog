import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { supabase } from "./supabase";

const PostCards = ({ title, postID }) => {
  const [deleteData, setDeleteData] = useState();

  const deleteBtn = async (postID) => {
    try {
      await supabase.from("blog").delete().eq("id", postID);
      // setDeleteData(deleteData.filter((deleteData) => country.id != countryId));
    } catch (error) {}
  };

  return (
    <div className="bg-blue-100 py-6 px-4 my-4 rounded flex justify-between items-center">
      <p>{title}</p>
      <span className="cursor-pointer">
        <RiDeleteBin6Fill size={20} onClick={() => deleteBtn(postID)} />
      </span>
    </div>
  );
};

export default PostCards;
