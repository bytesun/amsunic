//@ts-nocheck
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Card,Image, Item } from 'semantic-ui-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks';
import remarkGemoji from 'remark-gemoji';

function PostCard(props) {
    return (
        <Item>
            <Item.Content>
                <Item.Meta>{moment.unix(parseInt(props.post.created_at) / 1000000000).format("MMMM Do YYYY, h:mm a")}</Item.Meta>
                <Item.Description>
                                      
                    <ReactMarkdown className="break-all" children={props.post.data.post}  remarkPlugins={[remarkBreaks, remarkGemoji, remarkGfm]} />
                </Item.Description>

            </Item.Content>
        </Item>


    )
}
export default PostCard;