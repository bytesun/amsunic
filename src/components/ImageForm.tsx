//@ts-nocheck
import { useEffect, useState } from 'react'

import { authSubscribe } from "@junobuild/core";
import { uploadFile } from "@junobuild/core";
import { Form, Input, Image, FormGroup } from 'semantic-ui-react';


function ImageForm(props) {
    const [user, setUser] = useState();

    const [loading, setLoading] = useState(false);
    const [collection, setCollection] = useState("photos");
    
    const [file, setFile] = useState();
    const [url, setUrl] = useState();


    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    useEffect(() => {

        const sub = authSubscribe((user) => {
            setUser(user);

        });

        return () => sub();
    }, []);


    async function upload() {
        console.log("uploading file...")
        if (file !== undefined) {
            setLoading(true)
            const filename = `${user.key}-${file.name}`;
            console.log(filename)
            const { downloadUrl } = await uploadFile({
                data: file,
                collection: collection,
                filename,
            });
            console.log(downloadUrl)
            setUrl(downloadUrl)
            setLoading(false);
        } else {
            console.error("no file")
        }
    };
    return (
        <>
            <Form loading={loading}>

                <FormGroup>

                    <Input type="file" onChange={handleFileChange} />
                    <Input
                        type="text"
                        placeholder="Collection name"
                        value={collection}
                        onChange={(e) => setCollection(e.target.value)}
                    />
                    <Form.Button onClick={upload}>Upload</Form.Button>
                </FormGroup>
            </Form>

            {url && <Image src={url} />}
        </>

    )
}
export default ImageForm;