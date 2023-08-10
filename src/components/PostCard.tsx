//@ts-nocheck
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Card,Image, Item } from 'semantic-ui-react';
function PostCard(props) {
    return (
        <Item>
            <Item.Content>
                <Item.Meta>{moment.unix(parseInt(props.post.created_at) / 1000000000).format("MMMM Do YYYY, h:mm")}</Item.Meta>
                <Item.Description>
                    {props.post.data.post}                   
                    
                </Item.Description>

            </Item.Content>
        </Item>


    )
}
export default PostCard;