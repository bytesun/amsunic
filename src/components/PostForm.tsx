import { useEffect, useState } from 'react'
import moment from 'moment';

import { signIn, setDoc, authSubscribe, User, signOut } from "@junobuild/core";


type Status = {
    timestamp: Date,
    status: String,

};
function PostForm() {

    const [status, setStatus] = useState("");

    async function addStatus() {
        await setDoc<Status>({
            collection: "status",
            doc: {
                key: moment().format("YYYYMMHHhhmmss"),
                data: {
                    timestamp: new Date(),
                    status: status
                },
            },
        });
    }
    return (
        <div
            className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
            <form>
                <div className="flex justify-center">
                    <div className="relative mb-3 xl:w-96" data-te-input-wrapper-init>
                        <textarea
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlTextarea1"
                            value={status}
                            onChange={(e)=>setStatus(e.target.value)}
                            placeholder="Your message"></textarea>
                        <label
                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                        >Post</label
                        >
                    </div>
                </div>

                <button
                    type="button"
                    onClick={addStatus}
                    className="rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Post
                </button>
            </form>
        </div>
    )
}
export default PostForm;