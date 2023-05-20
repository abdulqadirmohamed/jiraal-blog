
import {useEffect, useState} from 'react'
import { supabase } from './supabase'

export const Head = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    try{
      setLoading(true);
      const {data, error} = await supabase.from("blog").select('*');
      if (error) throw error;
      setPosts(data);
    }
    catch (error) {
      alert(error.message);
    }
    finally{
      setLoading(false);
    }
  }

  console.log(posts)

  return (
    <div>
      {/* {posts.map((post)=>(
        <h1>{post.post}</h1>
      ))} */}
    </div>
  )
}
