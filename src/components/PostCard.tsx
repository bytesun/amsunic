//@ts-nocheck
import { useEffect, useState } from 'react';
import moment from 'moment';
function PostCard(props) {
    return (
        <div className="flex justify-center  bg-gray-100">
            <div
                className="flex flex-col rounded-lg shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">

                <div className="flex flex-col justify-start p-6">
                    <h5
                        className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                        
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {props.post.data.status}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-300">
                        {moment.unix(parseInt(props.post.created_at) / 1000000000).format("MMMM Do YYYY, h:mm")}
                    </p>
                </div>
            </div>
        </div>

    )
}
export default PostCard;