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
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

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
        order: {
          desc: true,
          field: "created_at",
        },
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  const statuslist = currentPosts.map(item =>
    <PostCard post={item} key={item.key} />
  )

  return (
    <Container>
      {user && <PostForm submit={addPost} processing={loading}/>}
      <Item.Group divided>
        {statuslist}
      </Item.Group>
      
      <Menu pagination>
        {Array.from({ length: Math.ceil(items.length / postsPerPage) }).map((_, index) => (
          <Menu.Item
            key={index + 1}
            active={currentPage === index + 1}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Menu.Item>
        ))}
      </Menu>
    </Container>
  )
}export default Posts
