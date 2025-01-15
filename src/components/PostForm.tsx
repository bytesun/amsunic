//@ts-nocheck
import { useEffect, useState } from 'react'
import moment from 'moment';

import { signIn, setDoc, authSubscribe, User, signOut } from "@junobuild/core";
import { Form, Input, Image } from 'semantic-ui-react';

type Status = {
    tags: String[],
    status: String,

};
function PostForm(props) {
    const [user, setUser] = useState();

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const [url, setUrl] = useState();


    useEffect(() => {

        const sub = authSubscribe((user) => {
            setUser(user);

        });

        return () => sub();
    }, []);

    function addStatus() {

        props.submit({
            key: new Date().getTime().toString(),
            data: {
                post: status,
                tags: [],
                attachement: url
            },
        }
        );
    }


    return (
        <Form loading={props.processing}>

            <Form.TextArea value={status}
                onChange={(e) => setStatus(e.target.value)} />

            <Form.Button onClick={addStatus}>Post</Form.Button>

        </Form>



    )
}
export default PostForm;