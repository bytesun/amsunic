// @ts-nocheck
import { useEffect, useState } from 'react'
import moment from 'moment';

import { signIn, setDoc, authSubscribe, User, signOut, uploadFile, listDocs } from "@junobuild/core";

import { Login } from "../components/Login";
import { Logout } from "../components/Logout";
import  PostForm  from "../components/PostForm";
import PostCard from '../components/PostCard';
type Status = {

  status: String,

};

function Home() {
  const [user, setUser] = useState();

  const [file, setFile] = useState();
  const [items, setItems] = useState([]);
  useEffect(() => {

    const sub = authSubscribe((user) => {
      setUser(user);

    });
    list();
    return () => sub();
  }, [user]);

  const list = async () => {

      const { items } = await listDocs({
        collection: "status",
        filter: {
          // matcher: user.key,
        },
      });
      console.log(items)
      setItems(items);
    
  };

  async function addStatus(doc) {
    let result = await setDoc<Status>({
      collection: "status",
      doc: doc,
    });
    console.log(result)
  }

  
  return (
    <div className="w-full h-full bg-cover"
      style={{ backgroundImage: 'url("header_bg.jpg")' }}
    >

      <div className='flex flex-wrap flex-col p-20 justify-end '>
        <div className='text-5xl font-bold'>Sun</div>
        <div className='text-gray-300 text-xl pt-5'>Be the change you want to see in the world</div>

      </div>
      <div className='center mb-10'>
        {!user && <Login />}
        {user && <Logout />}
      </div>

      <div className='grid grid-cols-4 gap-4'>
        {user &&
          <PostForm submit={addStatus}/>
        }

        {items.map(item =>
          <PostCard post={item}/>
        )}
      </div>
    </div>
  )
}

export default Home
