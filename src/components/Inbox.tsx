import { useEffect, useState } from 'react';
import { listDocs, Doc } from "@junobuild/core";
import { Item, Message, Segment, Header, Icon } from 'semantic-ui-react';
import moment from 'moment';

interface InboxMessage {
    key: string;
    message: string;
    created_at: string;
}

const Inbox = () => {
    const [messages, setMessages] = useState<Doc<InboxMessage>[]>([]);

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = async () => {
        const { items } = await listDocs<InboxMessage>({
            collection: "inbox",
            filter: {
                order: {
                    desc: true,
                    field: "created_at",
                },
            },
        });
        setMessages(items);
    };

    return (
        <Segment>
            <Header as='h2'>
                <Icon name='inbox' />
                <Header.Content>
                    Inbox
                    <Header.Subheader>{messages.length} messages</Header.Subheader>
                </Header.Content>
            </Header>
      
            <Item.Group divided>
                {messages.map((msg) => (
                    <Message 
                        key={msg.key}
                        floating
                        style={{ marginBottom: '1em' }}
                    >
                        <Message.Content>
                            <Message.Header style={{ color: '#2185d0' }}>
                                <Icon name='calendar' />
                                {moment(Number(msg.created_at) / 1000000).format('YYYY-MM-DD HH:mm')}
                            </Message.Header>
                            <Message.Content style={{ marginTop: '1em', fontSize: '1.1em' }}>
                                {msg.data.message}
                            </Message.Content>
                        </Message.Content>
                    </Message>
                ))}
            </Item.Group>
        </Segment>
    );
};

export default Inbox;