import { useEffect, useState } from 'react'
import moment from 'moment';

import PostForm from '../components/PostForm';



import { signIn, setDoc, authSubscribe, User, signOut } from "@junobuild/core";

function Console() {
    const [user, setUser] = useState<User | null>();


    useEffect(() => {

        const sub = authSubscribe((user) => {
            setUser(user);

        });

        return () => sub();
    }, []);


    async function login() {
        await signIn();
    }


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
        </div>
    )
}
export default Console;