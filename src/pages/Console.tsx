// @ts-nocheck
import { useEffect, useState } from 'react'
import moment from 'moment';

import PostForm from '../components/PostForm';

import { uploadFile } from "@junobuild/core";

import { signIn, setDoc, authSubscribe, signOut } from "@junobuild/core";


function Console() {
    const [user, setUser] = useState();

    const [file, setFile] = useState();

    useEffect(() => {

        const sub = authSubscribe((user) => {
            setUser(user);

        });

        return () => sub();
    }, []);


    async function login() {
        await signIn();
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
        } else {
            console.error("no file")
        }
    };

    return (
        <div>

            {

                !user &&
                <div className="flex justify-center space-x-2">
                    <button
                        type="button"
                        onClick={login}
                        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                        Login
                    </button>
                </div>
            }


            {user && <div>
                <div className="flex justify-center space-x-2">
                    <button
                        type="button"
                        onClick={signOut}
                        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                        Logout
                    </button>
                </div>
                <PostForm />
            </div>}

            <input type="file" name="file" onChange={(event) => setFile(event.target.files?.[0])} />
            <button onClick={upload}>upload</button>
            <img src="https://ruc7a-fiaaa-aaaal-ab4ha-cai.ic0.app/photos/kmbsf-rmete-cs5al-ua34b-4db7w-vwqus-txsl3-eoit5-huk2w-kb6df-hae-496bfd2c-f593-4da4-85ec-3fe8ad8c3881.png"  />
        </div>
    )
}
export default Console;