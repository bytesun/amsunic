//@ts-nocheck
import { useEffect, useState } from 'react'
import moment from 'moment';

import { signIn, setDoc, authSubscribe, User, signOut } from "@junobuild/core";
import { uploadFile } from "@junobuild/core";
import { Form } from 'semantic-ui-react';

type Status = {
    tags: String[],
    status: String,

};
function PostForm(props) {
    const [user, setUser] = useState();

    const [status, setStatus] = useState("");

    const [file, setFile] = useState();
    const [url, setUrl] = useState();
    useEffect(() => {

        const sub = authSubscribe((user) => {
            setUser(user);

        });

        return () => sub();
    }, []);

    function addStatus() {

        props.submit({
            key: moment().format("YYYYMMHHhhmmss"),
            data: {
                post: status,
                tags: [],
                attachement: url
            },
        }
        );
    }
    function handleChange(e) {
        console.log(e)
    };

    async function upload() {
        console.log("uploading file...")
        if (file !== undefined) {

            const filename = `${user.key}-${file.name}`;
            console.log(filename)
            const { downloadUrl } = await uploadFile({
                data: file,
                collection: "photos",
                filename,
            });
            console.log(downloadUrl)
            setUrl(downloadUrl)
        } else {
            console.error("no file")
        }
    };
    return (
        <Form loading={props.processing}>

            <Form.TextArea value={status}
                onChange={(e) => setStatus(e.target.value)} />

            <Form.Button onClick={addStatus}>Post</Form.Button>
        </Form>

    )
}
export default PostForm;