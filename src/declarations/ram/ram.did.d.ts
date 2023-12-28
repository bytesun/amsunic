import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface AccessKey {
  'key' : string,
  'keycomponent' : KeyComponent,
  'componentid' : string,
  'expiredtime' : bigint,
}
export type Action = { 'read' : null } |
  { 'delete' : null } |
  { 'create' : null } |
  { 'update' : null };
export interface AppMessage { 'message' : string }
export interface Application {
  'id' : bigint,
  'status' : Status,
  'applicant' : string,
  'atime' : bigint,
  'atem' : Atem,
  'memo' : string,
  'approver' : string,
}
export type Atem = { 'bounty' : bigint } |
  { 'invitation' : bigint } |
  { 'activity' : bigint };
export interface CanisterOutputCertifiedMessages {
  'messages' : Array<CanisterOutputMessage>,
  'cert' : Uint8Array | number[],
  'tree' : Uint8Array | number[],
  'is_end_of_queue' : boolean,
}
export interface CanisterOutputMessage {
  'key' : string,
  'content' : Uint8Array | number[],
  'client_key' : ClientKey,
}
export interface CanisterWsCloseArguments { 'client_key' : ClientKey }
export type CanisterWsCloseResult = { 'Ok' : null } |
  { 'Err' : string };
export interface CanisterWsGetMessagesArguments { 'nonce' : bigint }
export type CanisterWsGetMessagesResult = {
    'Ok' : CanisterOutputCertifiedMessages
  } |
  { 'Err' : string };
export interface CanisterWsMessageArguments { 'msg' : WebsocketMessage }
export type CanisterWsMessageResult = { 'Ok' : null } |
  { 'Err' : string };
export interface CanisterWsOpenArguments {
  'gateway_principal' : GatewayPrincipal,
  'client_nonce' : bigint,
}
export type CanisterWsOpenResult = { 'Ok' : null } |
  { 'Err' : string };
export interface ClientKey {
  'client_principal' : ClientPrincipal,
  'client_nonce' : bigint,
}
export type ClientPrincipal = Principal;
export interface Comment {
  'comto' : Comto__1,
  'user' : string,
  'comment' : string,
  'timestamp' : bigint,
  'attachments' : Array<string>,
}
export type Comto = { 'other' : string } |
  { 'note' : bigint } |
  { 'todo' : bigint } |
  { 'user' : string } |
  { 'event' : bigint } |
  { 'calendar' : bigint };
export type Comto__1 = { 'other' : string } |
  { 'note' : bigint } |
  { 'todo' : bigint } |
  { 'user' : string } |
  { 'event' : bigint } |
  { 'calendar' : bigint };
export type Content = string;
export type Function = { 'contact' : bigint } |
  { 'other' : null } |
  { 'note' : bigint } |
  { 'todo' : bigint } |
  { 'user' : string } |
  { 'event' : bigint } |
  { 'calendar' : bigint } |
  { 'comment' : bigint };
export type GatewayPrincipal = Principal;
export interface HikingData {
  'eid' : bigint,
  'end' : bigint,
  'log' : [] | [HikingLog],
  'organizer' : string,
  'elevation' : [] | [bigint],
  'distance' : bigint,
  'start' : bigint,
  'attendees' : string,
}
export interface HikingLog { 'logdata' : string, 'logtype' : string }
export interface Inbox { 'id' : string, 'owner' : Principal, 'name' : string }
export type KeyComponent = { 'log' : null } |
  { 'contact' : null } |
  { 'expense' : null } |
  { 'order' : null } |
  { 'invoice' : null } |
  { 'note' : null } |
  { 'todo' : null } |
  { 'event' : null } |
  { 'calendar' : null } |
  { 'comment' : null } |
  { 'message' : null } |
  { 'checklist' : null } |
  { 'profile' : null };
export interface Log {
  'function' : Function,
  'action' : Action,
  'user' : string,
  'logtime' : bigint,
  'message' : string,
}
export interface Message {
  'id' : bigint,
  'note' : string,
  'sender' : string,
  'isread' : boolean,
  'readtime' : bigint,
  'replyid' : [] | [bigint],
  'attachment' : [] | [string],
  'receiver' : string,
  'sendtime' : bigint,
}
export type MessageTo = string;
export interface NewApplication {
  'atem' : Atem,
  'memo' : string,
  'approver' : string,
}
export interface NewComment {
  'comto' : Comto__1,
  'comment' : string,
  'attachments' : Array<string>,
}
export interface NewLog {
  'function' : Function,
  'action' : Action,
  'user' : string,
  'message' : string,
}
export interface NewMessage {
  'note' : string,
  'replyid' : [] | [bigint],
  'attachment' : [] | [string],
  'receiver' : string,
}
export interface NewNotification {
  'note' : string,
  'sender' : string,
  'ntype' : TypeNotification,
  'receiver' : string,
}
export interface Notification {
  'id' : bigint,
  'note' : string,
  'sender' : string,
  'isread' : boolean,
  'readtime' : bigint,
  'ntype' : TypeNotification,
  'receiver' : string,
  'sendtime' : bigint,
}
export interface Ram {
  'addAccessKey' : ActorMethod<
    [[] | [string], KeyComponent, string, bigint],
    Result_2
  >,
  'addAdmin' : ActorMethod<[string], Result_1>,
  'addAllow' : ActorMethod<[string], Result_1>,
  'addApplication' : ActorMethod<[NewApplication], Result>,
  'addComment' : ActorMethod<[NewComment], Result>,
  'addNotification' : ActorMethod<[NewNotification], undefined>,
  'availableCycles' : ActorMethod<[], bigint>,
  'createHiking' : ActorMethod<[HikingData], Result>,
  'deleteNotification' : ActorMethod<[bigint], Result>,
  'findUserHiking' : ActorMethod<[string, bigint, bigint], Array<HikingData>>,
  'getAccessKey' : ActorMethod<[KeyComponent, string], [] | [AccessKey]>,
  'getAdmins' : ActorMethod<[], Array<string>>,
  'getAllows' : ActorMethod<[], Array<string>>,
  'getApplications' : ActorMethod<[Atem], Array<Application>>,
  'getBackupState' : ActorMethod<[], bigint>,
  'getComments' : ActorMethod<[Comto, bigint], Array<Comment>>,
  'getLogs' : ActorMethod<[bigint], Array<Log>>,
  'getMyInboxes' : ActorMethod<[], Array<Inbox>>,
  'getMyMessages' : ActorMethod<[boolean, bigint], Array<Message>>,
  'getMyNotifications' : ActorMethod<[boolean, bigint], Array<Notification>>,
  'getSystemData' : ActorMethod<
    [],
    { 'memory' : bigint, 'heap' : bigint, 'cycles' : bigint }
  >,
  'getUserLogs' : ActorMethod<[bigint], Array<Log>>,
  'hookInbox' : ActorMethod<[string, string], Result>,
  'log' : ActorMethod<[NewLog], undefined>,
  'message' : ActorMethod<[NewMessage], Result>,
  'readMessage' : ActorMethod<[bigint], Result>,
  'readNotification' : ActorMethod<[bigint], Result>,
  'removeAccessKey' : ActorMethod<[KeyComponent, string], undefined>,
  'searchInboxes' : ActorMethod<[string], Array<Inbox>>,
  'sendMessage' : ActorMethod<[MessageTo, Subject, Content, Sender], Result_1>,
  'updateApplication' : ActorMethod<[bigint, Status], Result>,
  'ws_close' : ActorMethod<[CanisterWsCloseArguments], CanisterWsCloseResult>,
  'ws_get_messages' : ActorMethod<
    [CanisterWsGetMessagesArguments],
    CanisterWsGetMessagesResult
  >,
  'ws_message' : ActorMethod<
    [CanisterWsMessageArguments, [] | [AppMessage]],
    CanisterWsMessageResult
  >,
  'ws_open' : ActorMethod<[CanisterWsOpenArguments], CanisterWsOpenResult>,
}
export type Result = { 'ok' : bigint } |
  { 'err' : string };
export type Result_1 = { 'ok' : bigint } |
  { 'err' : string };
export type Result_2 = { 'ok' : string } |
  { 'err' : string };
export type Sender = string;
export type Status = { 'created' : null } |
  { 'approved' : null } |
  { 'rejected' : null };
export type Subject = string;
export type TypeNotification = { 'contact' : bigint } |
  { 'other' : null } |
  { 'note' : bigint } |
  { 'todo' : bigint } |
  { 'user' : string } |
  { 'event' : bigint } |
  { 'calendar' : bigint };
export interface WebsocketMessage {
  'sequence_num' : bigint,
  'content' : Uint8Array | number[],
  'client_key' : ClientKey,
  'timestamp' : bigint,
  'is_service_message' : boolean,
}
export interface _SERVICE extends Ram {}
