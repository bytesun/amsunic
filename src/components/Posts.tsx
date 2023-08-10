// @ts-nocheck
import { useEffect, useState } from 'react'
import moment from 'moment';

import { signIn, setDoc, authSubscribe, User, signOut, uploadFile, listDocs } from "@junobuild/core";

import { Login } from "../components/Login";
import { Logout } from "../components/Logout";
import PostForm from "../components/PostForm";
import PostCard from '../components/PostCard';
import { Container, Card, Header, Item, Menu, Message } from 'semantic-ui-react';
type Status = {

  status: String,

};

function Posts() {
  const [user, setUser] = useState();

  const [file, setFile] = useState();

  const [loading, setLoading] = useState(false);

  const [items, setItems] = useState([]);
  useEffect(() => {

    const sub = authSubscribe((user) => {
      console.log("user:", user)
      setUser(user);

    });
    list();
    return () => sub();
  }, [user]);

  const list = async () => {
    console.log("retrieve status ...")
    const { items } = await listDocs({
      collection: "post",
      filter: {
        // matcher: user.key,
      },
    });
    console.log(items)
    setItems(items);

  };

  async function addPost(doc) {
    setLoading(true)
    let result = await setDoc<Status>({
      collection: "post",
      doc: doc,
    });
    setLoading(false)
    list();
  }

  const statuslist = items.map(item =>
    <PostCard post={item} key={item.key} />

  )

  return (
    <Container>
      {/* {user && user.key} */}
      {user && <PostForm submit={addPost} processing={loading}/>}
      <Item.Group divided>

        {statuslist}
      </Item.Group>

    </Container >

      
  )
}

export default Posts
