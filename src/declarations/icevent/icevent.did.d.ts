import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface AccessKey {
  'key' : string,
  'keycomponent' : KeyComponent,
  'componentid' : string,
  'expiredtime' : bigint,
}
export interface Achievement {
  'userid' : string,
  'badges' : Array<string>,
  'credit' : bigint,
  'roles' : Array<Role>,
}
export interface Activity {
  'attendeelimit' : bigint,
  'formfields' : Array<Formfield>,
  'price' : Cost,
  'registerat' : { 'createon' : null } |
    { 'starton' : null },
}
export interface ActivitySet { 'currency' : Currency }
export interface Address {
  'postcode' : string,
  'country' : string,
  'province' : string,
  'city' : string,
  'address' : string,
}
export interface Address__1 {
  'postcode' : string,
  'country' : string,
  'province' : string,
  'aptno' : string,
  'city' : string,
  'address' : string,
}
export interface Address__2 {
  'postcode' : string,
  'country' : string,
  'province' : string,
  'city' : string,
  'address' : string,
}
export interface Admission {
  'pchild' : number,
  'contact' : Contact,
  'paynumber' : string,
  'count' : bigint,
  'cadult' : bigint,
  'amount' : number,
  'cchild' : bigint,
  'padult' : number,
  'paytype' : bigint,
}
export interface Admission__1 { 'contact' : ContactInfo__1, 'code' : string }
export interface Appointment { 'cost' : Cost, 'guest' : ContactInfo }
export type Authority = { 'admin' : null } |
  { 'edit' : null } |
  { 'read' : null };
export interface BookingSet {
  'tz' : string,
  'bookend' : string,
  'slotlength' : { 'hours' : number } |
    { 'minutes' : number },
  'bookstart' : string,
}
export interface Calendar {
  'id' : bigint,
  'url' : string,
  'status' : Status__2,
  'owner' : string,
  'name' : string,
  'color' : string,
  'tags' : Array<string>,
  'ctype' : Ctype,
  'description' : string,
  'ispublic' : boolean,
  'solution' : Solution,
  'isverified' : boolean,
  'organization' : [] | [Organization],
}
export interface Category {
  'id' : bigint,
  'owner' : string,
  'hook' : bigint,
  'name' : string,
  'parent' : bigint,
}
export interface Category__1 {
  'id' : bigint,
  'owner' : string,
  'hook' : bigint,
  'name' : string,
  'parent' : bigint,
}
export interface Checklist {
  'id' : bigint,
  'owner' : string,
  'list' : Array<string>,
  'name' : string,
  'description' : string,
  'calendar' : bigint,
  'ispublic' : boolean,
}
export interface Checklist__1 {
  'id' : bigint,
  'owner' : string,
  'list' : Array<string>,
  'name' : string,
  'description' : string,
  'calendar' : bigint,
  'ispublic' : boolean,
}
export type Component = { 'contact' : null } |
  { 'note' : null } |
  { 'todo' : null } |
  { 'event' : null } |
  { 'calendar' : null } |
  { 'wallet' : null };
export interface Contact {
  'fax' : string,
  'postcode' : string,
  'country' : string,
  'province' : string,
  'city' : string,
  'code' : string,
  'name' : string,
  'address' : string,
  'phone' : string,
}
export interface ContactInfo {
  'fax' : string,
  'contact' : string,
  'name' : string,
  'email' : string,
  'address' : string,
  'phone' : string,
}
export interface ContactInfo__1 {
  'fax' : [] | [string],
  'postcode' : string,
  'contact' : [] | [string],
  'country' : string,
  'province' : string,
  'city' : string,
  'name' : string,
  'email' : string,
  'website' : [] | [string],
  'address' : string,
  'wallet' : [] | [{ 'network' : string, 'address' : string }],
  'phone' : string,
}
export interface Contact__1 {
  'id' : bigint,
  'fax' : string,
  'contact' : string,
  'owner' : string,
  'code' : string,
  'name' : string,
  'note' : string,
  'tags' : Array<string>,
  'ctype' : bigint,
  'email' : string,
  'calendar' : bigint,
  'address' : Address,
  'disable' : boolean,
  'contactid' : string,
  'phone' : string,
  'attachments' : Array<string>,
}
export interface Contact__2 {
  'fax' : [] | [string],
  'url' : [] | [string],
  'contact' : [] | [string],
  'name' : string,
  'email' : string,
  'address' : Address__2,
  'wallet' : [] | [Wallet],
  'phone' : string,
}
export interface Contract {
  'jon' : ContactInfo,
  'sam' : ContactInfo,
  'signature' : [] | [
    { 'jon' : [] | [{ 'sign' : string, 'stime' : bigint }] } |
      { 'sam' : [] | [{ 'sign' : string, 'stime' : bigint }] }
  ],
  'cost' : Cost,
  'plan' : bigint,
  'paymenterm' : string,
  'chargetype' : { 'one' : null } |
    { 'mult' : string },
}
export interface Cost { 'currency' : string, 'amount' : number }
export type Ctype = { 'appointment' : null } |
  { 'schedule' : null } |
  { 'common' : null } |
  { 'activity' : null } |
  { 'itinerary' : null };
export type Currency = string;
export type Currency__1 = string;
export type Etype = { 'appointment' : null } |
  { 'contract' : null } |
  { 'schedule' : null } |
  { 'common' : null } |
  { 'activity' : null } |
  { 'itinerary' : null };
export interface Event {
  'id' : bigint,
  'tz' : string,
  'end' : bigint,
  'status' : Status,
  'title' : string,
  'repeatdata' : [] | [RepeatData],
  'isrepeat' : boolean,
  'owner' : string,
  'allday' : boolean,
  'cost' : number,
  'tags' : Array<string>,
  'description' : string,
  'etype' : Etype,
  'calendar' : bigint,
  'start' : bigint,
  'ispublic' : boolean,
  'solution' : Solution__1,
  'location' : Location,
  'attachments' : Array<string>,
  'parent' : bigint,
}
export interface ExternalCalendar { 'link' : string, 'name' : string }
export interface Formfield {
  'name' : string,
  'isrequired' : boolean,
  'description' : string,
}
export interface Group { 'supervisor' : string, 'members' : Array<string> }
export interface Group__1 { 'supervisor' : string, 'members' : Array<string> }
export interface Hotel {
  'pquadruple' : number,
  'contact' : Contact,
  'paynumber' : string,
  'cdouble' : bigint,
  'cquadruple' : bigint,
  'ctriple' : bigint,
  'pdouble' : number,
  'ptriple' : number,
  'csingle' : bigint,
  'amount' : number,
  'psingle' : number,
  'paytype' : bigint,
}
export interface Hotel__1 { 'contact' : ContactInfo__1, 'code' : string }
export interface Iday {
  'to' : string,
  'via' : string,
  'admissions' : Array<Admission__1>,
  'hotel' : [] | [Hotel__1],
  'itineraries' : Array<string>,
  'from' : string,
  'breakfast' : [] | [Restaurant__1],
  'lunch' : [] | [Restaurant__1],
  'dinner' : [] | [Restaurant__1],
}
export interface Interested { 'event' : bigint, 'interester' : Principal }
export interface Invitee {
  'status' : InviteeStatus,
  'eventid' : bigint,
  'role' : { 'admin' : null } |
    { 'moderator' : null } |
    { 'viewer' : null },
  'inviteeid' : string,
  'inviteename' : string,
}
export type InviteeStatus = { 'invited' : null } |
  { 'rejected' : null } |
  { 'accepted' : null };
export interface Invoice {
  'id' : string,
  'to' : Contact__2,
  'tax' : Tax,
  'status' : Status__3,
  'paymentterms' : Array<PaymentTerm>,
  'owner' : string,
  'cost' : number,
  'from' : Contact__2,
  'note' : string,
  'createtime' : bigint,
  'event' : bigint,
  'duetime' : bigint,
  'calendar' : bigint,
  'currency' : string,
  'adjust' : number,
  'discount' : number,
  'idate' : bigint,
  'items' : Array<Item>,
  'amount' : number,
  'receiver' : [] | [string],
}
export interface Item {
  'desc' : string,
  'quantity' : number,
  'itype' : { 'cost' : null } |
    { 'income' : null },
  'price' : number,
}
export interface Itinerary {
  'id' : bigint,
  'to' : string,
  'day' : bigint,
  'via' : string,
  'memos' : Array<string>,
  'admissions' : Array<Admission>,
  'hotel' : Hotel,
  'from' : string,
  'breakfast' : Restaurant,
  'lunch' : Restaurant,
  'dinner' : Restaurant,
}
export type ItinerarySet = {};
export interface ItineraryTemplate {
  'itineraries' : Array<
    { 'to' : string, 'via' : string, 'memos' : Array<string>, 'from' : string }
  >,
  'code' : string,
  'name' : string,
  'description' : string,
  'calendar' : bigint,
}
export interface Itinerary__1 {
  'cost' : Cost,
  'operater' : string,
  'idays' : Array<Iday>,
  'driver' : { 'name' : string, 'phone' : string },
}
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
export type Location = { 'geo' : string } |
  { 'url' : string } |
  { 'address' : string };
export interface NewCalendar {
  'url' : string,
  'name' : string,
  'color' : string,
  'tags' : Array<string>,
  'ctype' : Ctype,
  'description' : string,
  'ispublic' : boolean,
  'solution' : Solution,
  'organization' : [] | [Organization],
}
export interface NewCategory {
  'hook' : bigint,
  'name' : string,
  'parent' : bigint,
}
export interface NewChecklist {
  'list' : Array<string>,
  'name' : string,
  'description' : string,
  'calendar' : bigint,
  'ispublic' : boolean,
}
export interface NewContact {
  'fax' : string,
  'contact' : string,
  'code' : string,
  'name' : string,
  'note' : string,
  'tags' : Array<string>,
  'ctype' : bigint,
  'email' : string,
  'calendar' : bigint,
  'address' : Address,
  'contactid' : string,
  'phone' : string,
  'attachments' : Array<string>,
}
export interface NewEvent {
  'tz' : string,
  'end' : bigint,
  'title' : string,
  'repeatdata' : [] | [RepeatData],
  'isrepeat' : boolean,
  'allday' : boolean,
  'cost' : number,
  'tags' : Array<string>,
  'description' : string,
  'etype' : Etype,
  'calendar' : bigint,
  'start' : bigint,
  'ispublic' : boolean,
  'solution' : Solution__1,
  'location' : Location,
  'attachments' : Array<string>,
  'parent' : bigint,
}
export interface NewInvitee {
  'eventid' : bigint,
  'role' : { 'admin' : null } |
    { 'moderator' : null } |
    { 'viewer' : null },
  'inviteeid' : string,
  'inviteename' : string,
}
export interface NewNote {
  'title' : string,
  'content' : string,
  'tags' : Array<string>,
  'calendar' : bigint,
  'ispublic' : boolean,
  'category' : bigint,
  'attachments' : Array<string>,
}
export interface NewNoteReq {
  'title' : string,
  'content' : string,
  'tags' : Array<string>,
  'calendar' : bigint,
  'ispublic' : boolean,
  'category' : bigint,
  'attachments' : Array<string>,
}
export interface NewRegister { 'data' : Array<RegData>, 'name' : string }
export interface NewTodo {
  'assignee' : string,
  'ttype' : TodoType,
  'tags' : Array<string>,
  'todo' : string,
  'description' : string,
  'bounty' : number,
  'duedate' : bigint,
  'calendar' : bigint,
  'ispublic' : boolean,
  'priority' : Priority,
  'attachments' : Array<string>,
  'parent' : bigint,
}
export interface Note {
  'id' : bigint,
  'title' : string,
  'content' : string,
  'owner' : string,
  'tags' : Array<string>,
  'createtime' : bigint,
  'calendar' : bigint,
  'ispublic' : boolean,
  'category' : bigint,
  'attachments' : Array<string>,
}
export interface Note__1 {
  'id' : bigint,
  'title' : string,
  'content' : string,
  'owner' : string,
  'tags' : Array<string>,
  'createtime' : bigint,
  'calendar' : bigint,
  'ispublic' : boolean,
  'category' : bigint,
  'attachments' : Array<string>,
}
export interface Organization {
  'bn' : string,
  'tn' : string,
  'fax' : string,
  'contact' : string,
  'logo' : string,
  'name' : string,
  'email' : string,
  'currency' : string,
  'address' : Address__1,
  'wallet' : string,
  'phone' : string,
}
export interface Participant {
  'pid' : string,
  'name' : string,
  'role' : Partrole,
  'calendar' : bigint,
}
export type Partrole = { 'admin' : null } |
  { 'editor' : null } |
  { 'viewer' : null };
export interface PaymentTerm { 'name' : string, 'address' : string }
export interface Permission { 'component' : Component, 'authority' : Authority }
export type Permission__1 = { 'no' : null } |
  { 'edit' : null } |
  { 'read' : null };
export type Priority = { 'low' : null } |
  { 'high' : null } |
  { 'medium' : null };
export interface Profile {
  'bio' : string,
  'status' : bigint,
  'username' : string,
  'lastlogin' : bigint,
  'userid' : string,
  'name' : string,
  'role' : bigint,
  'email' : string,
  'createtime' : bigint,
  'avatar' : string,
}
export interface Profile__1 {
  'tz' : [] | [string],
  'fax' : [] | [string],
  'tax' : [] | [string],
  'url' : [] | [string],
  'contact' : [] | [string],
  'logo' : [] | [string],
  'name' : string,
  'description' : string,
  'email' : [] | [string],
  'servetime' : [] | [
    {
      'end' : string,
      'excludes' : Uint8Array | number[],
      'weekend' : boolean,
      'start' : string,
      'slotlength' : [] | [{ 'hours' : number } | { 'minutes' : number }],
      'sevenx24' : boolean,
      'holiday' : boolean,
    }
  ],
  'calendar' : bigint,
  'address' : [] | [string],
  'wallet' : [] | [{ 'network' : string, 'address' : string }],
  'showcase' : Array<string>,
  'phone' : [] | [string],
  'license' : [] | [string],
}
export interface RegData { 'value' : string, 'name' : string }
export type RegStatus = { 'regjected' : null } |
  { 'request' : null } |
  { 'paid' : null } |
  { 'approved' : null } |
  { 'confirmed' : null };
export interface Register {
  'status' : RegStatus,
  'eventid' : bigint,
  'ticket' : [] | [string],
  'data' : Array<RegData>,
  'name' : string,
  'regtime' : bigint,
  'register' : string,
}
export interface RepeatData {
  'adjusts' : Array<bigint>,
  'excludes' : Array<bigint>,
  'days' : Array<bigint>,
  'frequency' : bigint,
  'rtype' : RepeatType,
}
export type RepeatType = { 'weekday' : null } |
  { 'weekend' : null } |
  { 'monthly' : null } |
  { 'yearly' : null } |
  { 'daily' : null } |
  { 'weekly' : null };
export interface Restaurant {
  'pchild' : number,
  'contact' : Contact,
  'paynumber' : string,
  'count' : bigint,
  'cadult' : bigint,
  'amount' : number,
  'cchild' : bigint,
  'padult' : number,
  'paytype' : bigint,
}
export interface Restaurant__1 { 'contact' : ContactInfo__1, 'code' : string }
export type Result = { 'ok' : bigint } |
  { 'err' : string };
export type Result_1 = { 'ok' : Profile } |
  { 'err' : string };
export type Result_2 = { 'ok' : string } |
  { 'err' : string };
export type Result_3 = { 'ok' : Todo } |
  { 'err' : string };
export type Result_4 = { 'ok' : Calendar } |
  { 'err' : string };
export type Result_5 = { 'ok' : [] | [Profile] } |
  { 'err' : string };
export type Result_6 = { 'ok' : bigint } |
  { 'err' : string };
export interface Role { 'privileges' : Array<Permission>, 'name' : string }
export interface Schedule { 'groups' : Array<Group__1> }
export interface ScheduleSet { 'groups' : Array<Group> }
export type Solution = { 'appointment' : BookingSet } |
  { 'schedule' : ScheduleSet } |
  { 'common' : null } |
  { 'activity' : ActivitySet } |
  { 'itinerary' : ItinerarySet };
export type Solution__1 = { 'appointment' : Appointment } |
  { 'contract' : Contract } |
  { 'schedule' : Schedule } |
  { 'common' : null } |
  { 'activity' : Activity } |
  { 'itinerary' : Itinerary__1 };
export type Status = { 'new' : null } |
  { 'canceled' : null } |
  { 'finished' : null } |
  { 'confirmed' : null };
export type Status__1 = { 'new' : null } |
  { 'done' : null } |
  { 'progress' : null };
export type Status__2 = { 'live' : null } |
  { 'offline' : null };
export type Status__3 = { 'new' : null } |
  { 'canceled' : null } |
  { 'paid' : null } |
  { 'confirmed' : null };
export interface Subscription {
  'calendar' : bigint,
  'stype' : bigint,
  'subscriber' : Principal,
}
export interface Tax {
  'name' : string,
  'rate' : number,
  'number' : string,
  'amount' : number,
}
export interface Todo {
  'id' : bigint,
  'status' : Status__1,
  'assignee' : string,
  'ttype' : TodoType,
  'owner' : string,
  'tags' : Array<string>,
  'todo' : string,
  'description' : string,
  'bounty' : number,
  'duedate' : bigint,
  'calendar' : bigint,
  'ispublic' : boolean,
  'priority' : Priority,
  'donetime' : bigint,
  'attachments' : Array<string>,
  'parent' : bigint,
}
export type TodoType = { 'ticket' : null } |
  { 'idea' : null } |
  { 'task' : null } |
  { 'bounty' : null } |
  { 'proposal' : null } |
  { 'issue' : null };
export interface Tour {
  'id' : bigint,
  'op' : string,
  'adult' : bigint,
  'days' : bigint,
  'child' : bigint,
  'infant' : bigint,
  'guide' : { 'name' : string, 'phone' : [] | [string] },
  'driver' : { 'name' : string, 'phone' : [] | [string] },
}
export interface UpdateCalendar {
  'url' : string,
  'name' : string,
  'color' : string,
  'tags' : Array<string>,
  'ctype' : Ctype,
  'description' : string,
  'ispublic' : boolean,
  'solution' : Solution,
  'organization' : [] | [Organization],
}
export interface UpdateContact {
  'fax' : string,
  'contact' : string,
  'code' : string,
  'name' : string,
  'note' : string,
  'tags' : Array<string>,
  'ctype' : bigint,
  'email' : string,
  'address' : Address,
  'disable' : boolean,
  'contactid' : string,
  'phone' : string,
  'attachments' : Array<string>,
}
export interface UpdateEvent {
  'tz' : string,
  'end' : bigint,
  'title' : string,
  'repeatdata' : [] | [RepeatData],
  'allday' : boolean,
  'cost' : number,
  'tags' : Array<string>,
  'description' : string,
  'start' : bigint,
  'ispublic' : boolean,
  'solution' : Solution__1,
  'location' : Location,
  'attachments' : Array<string>,
}
export interface UpdateTodo {
  'assignee' : string,
  'ttype' : TodoType,
  'tags' : Array<string>,
  'todo' : string,
  'description' : string,
  'bounty' : number,
  'duedate' : bigint,
  'ispublic' : boolean,
  'priority' : Priority,
  'attachments' : Array<string>,
}
export interface Vansday {
  'addAdmin' : ActorMethod<[string], Result>,
  'addBadge' : ActorMethod<[string, string], Result>,
  'addCalendar' : ActorMethod<[NewCalendar], Result>,
  'addCategory' : ActorMethod<[NewCategory], Result>,
  'addChecklist' : ActorMethod<[NewChecklist], Result>,
  'addContact' : ActorMethod<[NewContact], Result>,
  'addExternalCalendar' : ActorMethod<[bigint, ExternalCalendar], Result>,
  'addInvitee' : ActorMethod<[NewInvitee], Result>,
  'addItinerary' : ActorMethod<[Itinerary], Result>,
  'addItineraryTemplate' : ActorMethod<[ItineraryTemplate], Result>,
  'addMutiItineraries' : ActorMethod<[Array<Itinerary>], Result>,
  'addNote' : ActorMethod<[NewNote], Result>,
  'addParticipant' : ActorMethod<[Participant], Result>,
  'addServiceRequest' : ActorMethod<[bigint, string, string, bigint], Result>,
  'addSystemTodo' : ActorMethod<
    [
      {
        'desc' : string,
        'duedate' : bigint,
        'itodo' : string,
        'attachments' : Array<string>,
      },
    ],
    Result
  >,
  'addTodo' : ActorMethod<[NewTodo], Result>,
  'addTodoWithSubs' : ActorMethod<[NewTodo, Array<string>], Result>,
  'approveRegister' : ActorMethod<[Register], Result>,
  'assignTask' : ActorMethod<[bigint, string], Result>,
  'availableCycles' : ActorMethod<[], bigint>,
  'cancelEvent' : ActorMethod<
    [bigint, [] | [{ 'op' : string, 'adate' : bigint }]],
    Result
  >,
  'changeCalendarStatus' : ActorMethod<[bigint, Status__2], Result>,
  'changeEventStatus' : ActorMethod<[bigint, Status], Result>,
  'changeTodoStatus' : ActorMethod<[bigint, Status__1], Result>,
  'checkIn' : ActorMethod<[], Result_6>,
  'checkPermission' : ActorMethod<[bigint, string], Permission__1>,
  'checkRegistration' : ActorMethod<[bigint], boolean>,
  'checkUsername' : ActorMethod<[string], boolean>,
  'cloneEvent' : ActorMethod<[bigint], Result>,
  'createEvent' : ActorMethod<[NewEvent], Result>,
  'createEvents' : ActorMethod<[Array<NewEvent>], Result>,
  'createProfile' : ActorMethod<
    [
      {
        'bio' : string,
        'username' : string,
        'name' : string,
        'email' : string,
        'avatar' : string,
      },
    ],
    Result_5
  >,
  'createTour' : ActorMethod<
    [
      bigint,
      {
        'op' : string,
        'tz' : string,
        'adult' : bigint,
        'code' : string,
        'days' : bigint,
        'child' : bigint,
        'description' : string,
        'infant' : bigint,
        'guide' : { 'name' : string, 'phone' : [] | [string] },
        'arrive' : bigint,
        'departure' : bigint,
        'driver' : { 'name' : string, 'phone' : [] | [string] },
        'location' : string,
      },
    ],
    Result
  >,
  'deleteCalendarEvents' : ActorMethod<[bigint], Result>,
  'deleteCategory' : ActorMethod<[bigint], Result>,
  'deleteContact' : ActorMethod<[bigint], Result>,
  'deleteInvitee' : ActorMethod<[bigint, string], Result>,
  'deleteItinerary' : ActorMethod<[bigint, bigint], Result>,
  'deleteItineraryTemplate' : ActorMethod<[bigint, string], Result>,
  'deleteNote' : ActorMethod<[bigint], Result>,
  'deleteParticipant' : ActorMethod<[bigint, string], Result>,
  'deleteTodo' : ActorMethod<[bigint], Result>,
  'editEvent' : ActorMethod<[bigint, UpdateEvent], Result>,
  'editTour' : ActorMethod<
    [
      {
        'id' : bigint,
        'op' : string,
        'tz' : string,
        'adult' : bigint,
        'code' : string,
        'days' : bigint,
        'child' : bigint,
        'description' : string,
        'infant' : bigint,
        'guide' : { 'name' : string, 'phone' : [] | [string] },
        'arrive' : bigint,
        'departure' : bigint,
        'driver' : { 'name' : string, 'phone' : [] | [string] },
        'location' : string,
      },
    ],
    Result
  >,
  'exportAchievements' : ActorMethod<[], Array<[string, Achievement]>>,
  'exportCalendars' : ActorMethod<[], Array<[bigint, Calendar]>>,
  'exportCategories' : ActorMethod<[], Array<[bigint, Category__1]>>,
  'exportChecklists' : ActorMethod<[], Array<[bigint, Checklist__1]>>,
  'exportContacts' : ActorMethod<[], Array<[bigint, Contact__1]>>,
  'exportCurrentIds' : ActorMethod<
    [],
    Array<{ 'id' : bigint, 'name' : string }>
  >,
  'exportEvents' : ActorMethod<[], Array<[bigint, Event]>>,
  'exportInterests' : ActorMethod<[], Array<Interested>>,
  'exportInvitees' : ActorMethod<[], Array<Invitee>>,
  'exportItineraries' : ActorMethod<[], Array<Itinerary>>,
  'exportNotes' : ActorMethod<[], Array<[bigint, Note__1]>>,
  'exportParticipants' : ActorMethod<[], Array<Participant>>,
  'exportProfiles' : ActorMethod<[], Array<[string, Profile]>>,
  'exportRegisters' : ActorMethod<[], Array<Register>>,
  'exportSubscriptions' : ActorMethod<[], Array<Subscription>>,
  'exportTemplates' : ActorMethod<[], Array<ItineraryTemplate>>,
  'exportTodos' : ActorMethod<[], Array<[bigint, Todo]>>,
  'exportTours' : ActorMethod<[], Array<[bigint, Tour]>>,
  'getAchievement' : ActorMethod<[string], [] | [Achievement]>,
  'getAchievements' : ActorMethod<[], Array<Achievement>>,
  'getAdmins' : ActorMethod<[], Array<string>>,
  'getAppointmentSlots' : ActorMethod<
    [bigint, bigint, bigint],
    Array<{ 'id' : bigint, 'end' : bigint, 'start' : bigint }>
  >,
  'getBannerMessage' : ActorMethod<[], string>,
  'getCalendar' : ActorMethod<[bigint], Result_4>,
  'getCalendarAllEvents' : ActorMethod<[bigint, bigint], Array<Event>>,
  'getCalendarChecklists' : ActorMethod<[bigint, bigint], Array<Checklist>>,
  'getCalendarContacts' : ActorMethod<
    [bigint, [] | [bigint], bigint],
    Array<Contact__1>
  >,
  'getCalendarEvents' : ActorMethod<
    [bigint, bigint, bigint, bigint],
    Array<Event>
  >,
  'getCalendarNotes' : ActorMethod<[bigint], Array<Note>>,
  'getCalendarProfile' : ActorMethod<
    [bigint],
    { 'nofound' : null } |
      { 'calendar' : Calendar } |
      { 'profile' : Profile__1 }
  >,
  'getCalendarProfileBookingSchedules' : ActorMethod<
    [bigint, bigint, bigint],
    Array<{ 'tz' : string, 'end' : bigint, 'start' : bigint }>
  >,
  'getCalendarTodos' : ActorMethod<
    [bigint, [] | [TodoType], Status__1, bigint],
    Array<Todo>
  >,
  'getCalendars' : ActorMethod<
    [[] | [string], boolean, bigint],
    Array<Calendar>
  >,
  'getChecklists' : ActorMethod<[bigint], Array<Checklist>>,
  'getContractWithKey' : ActorMethod<
    [bigint, string],
    [] | [
      {
        'schedules' : Array<Event>,
        'contract' : Event,
        'invoices' : Array<Invoice>,
      }
    ]
  >,
  'getContracts' : ActorMethod<[bigint, boolean], Array<Event>>,
  'getDataState' : ActorMethod<[], Array<[string, bigint]>>,
  'getEvent' : ActorMethod<[bigint], [] | [Event]>,
  'getEventAccessKey' : ActorMethod<[bigint], [] | [AccessKey]>,
  'getEventWithKey' : ActorMethod<[bigint, string], [] | [Event]>,
  'getEvents' : ActorMethod<
    [bigint, bigint, [] | [string], bigint],
    Array<Event>
  >,
  'getExternalCalendars' : ActorMethod<[bigint], Array<ExternalCalendar>>,
  'getInterestedEvents' : ActorMethod<[bigint, bigint, bigint], Array<Event>>,
  'getInterestes' : ActorMethod<[bigint], Array<Interested>>,
  'getInvitedEvents' : ActorMethod<[bigint, bigint, bigint], Array<Event>>,
  'getInvitees' : ActorMethod<[bigint], Array<Invitee>>,
  'getItineraryTemplates' : ActorMethod<[bigint], Array<ItineraryTemplate>>,
  'getItineries' : ActorMethod<[bigint], Array<Itinerary>>,
  'getMyCalendarRole' : ActorMethod<[bigint], [] | [Partrole]>,
  'getMyCalendars' : ActorMethod<[bigint], Array<Calendar>>,
  'getMyCategories' : ActorMethod<[bigint, bigint], Array<Category>>,
  'getMyChecklists' : ActorMethod<[bigint], Array<Checklist>>,
  'getMyContacts' : ActorMethod<[[] | [bigint], bigint], Array<Contact__1>>,
  'getMyEvents' : ActorMethod<[bigint, bigint, bigint], Array<Event>>,
  'getMyNotes' : ActorMethod<[bigint, bigint], Array<Note>>,
  'getMyParticipants' : ActorMethod<[], Array<Participant>>,
  'getMyTodos' : ActorMethod<[[] | [TodoType], Status__1, bigint], Array<Todo>>,
  'getNote' : ActorMethod<[bigint], [] | [Note]>,
  'getNoteAccessKey' : ActorMethod<[bigint], [] | [AccessKey]>,
  'getNoteWithKey' : ActorMethod<[bigint, string], [] | [Note]>,
  'getNotes' : ActorMethod<[bigint], Array<Note>>,
  'getPartCalendars' : ActorMethod<[bigint], Array<Calendar>>,
  'getParticipants' : ActorMethod<[bigint], Array<Participant>>,
  'getParticipatedEvents' : ActorMethod<[bigint, bigint, bigint], Array<Event>>,
  'getPublicTodos' : ActorMethod<[Status__1, boolean, bigint], Array<Todo>>,
  'getRegisters' : ActorMethod<[bigint], Array<Register>>,
  'getSubEvents' : ActorMethod<[bigint], Array<Event>>,
  'getSubTodos' : ActorMethod<[bigint], Array<Todo>>,
  'getSubscribedCalendars' : ActorMethod<[bigint], Array<Calendar>>,
  'getSubscribedEvents' : ActorMethod<[bigint, bigint, bigint], Array<Event>>,
  'getSubscribers' : ActorMethod<[bigint], bigint>,
  'getSubscriptions' : ActorMethod<[bigint], Array<Subscription>>,
  'getSystemCalendar' : ActorMethod<[], bigint>,
  'getSystemData' : ActorMethod<
    [],
    { 'memory' : bigint, 'heap' : bigint, 'cycles' : bigint }
  >,
  'getSystemSupport' : ActorMethod<[], string>,
  'getTodo' : ActorMethod<[bigint], Result_3>,
  'getTodoAccessKey' : ActorMethod<[bigint], [] | [AccessKey]>,
  'getTodoWithKey' : ActorMethod<[bigint, string], [] | [Todo]>,
  'getTour' : ActorMethod<
    [bigint],
    [] | [
      {
        'id' : bigint,
        'op' : string,
        'tz' : string,
        'status' : Status,
        'adult' : bigint,
        'code' : string,
        'days' : bigint,
        'child' : bigint,
        'description' : string,
        'calendar' : bigint,
        'infant' : bigint,
        'guide' : { 'name' : string, 'phone' : [] | [string] },
        'arrive' : bigint,
        'departure' : bigint,
        'driver' : { 'name' : string, 'phone' : [] | [string] },
        'location' : Location,
      }
    ]
  >,
  'getTourWithKey' : ActorMethod<
    [bigint, string],
    [] | [
      {
        'id' : bigint,
        'op' : string,
        'tz' : string,
        'status' : Status,
        'adult' : bigint,
        'itineraries' : Array<Itinerary>,
        'code' : string,
        'days' : bigint,
        'child' : bigint,
        'description' : string,
        'calendar' : bigint,
        'infant' : bigint,
        'guide' : { 'name' : string, 'phone' : [] | [string] },
        'arrive' : bigint,
        'departure' : bigint,
        'driver' : { 'name' : string, 'phone' : [] | [string] },
        'location' : Location,
      }
    ]
  >,
  'getTypeTodos' : ActorMethod<[TodoType, boolean, bigint], Array<Todo>>,
  'getUserEvents' : ActorMethod<[string, bigint], Array<Event>>,
  'getVerifiedEvents' : ActorMethod<[bigint, bigint], Array<Event>>,
  'interested' : ActorMethod<[bigint], Result>,
  'leaveParticipants' : ActorMethod<[bigint], Result>,
  'listUsers' : ActorMethod<[bigint], Array<Profile>>,
  'lookupUser' : ActorMethod<[string], [] | [Profile]>,
  'registerActivity' : ActorMethod<[bigint, NewRegister], Result>,
  'removeAdmin' : ActorMethod<[string], Result>,
  'removeCalendarProfile' : ActorMethod<[bigint], Result>,
  'removeEvent' : ActorMethod<[bigint], Result>,
  'removeExternalCalendar' : ActorMethod<[bigint, string], Result>,
  'searchContacts' : ActorMethod<
    [string, { 'my' : null } | { 'calendar' : bigint }, [] | [bigint], bigint],
    Array<Contact__1>
  >,
  'searchEvents' : ActorMethod<
    [[] | [string], { 'my' : null } | { 'calendar' : bigint }, bigint],
    Array<Event>
  >,
  'searchNotes' : ActorMethod<
    [string, { 'my' : null } | { 'calendar' : bigint }],
    Array<Note>
  >,
  'setAdmin' : ActorMethod<[Principal], undefined>,
  'setBannerMessage' : ActorMethod<[string], undefined>,
  'setDefaultPageSize' : ActorMethod<[bigint], undefined>,
  'setEventAccessKey' : ActorMethod<[bigint, [] | [string], bigint], Result_2>,
  'setNoteAccessKey' : ActorMethod<[bigint, [] | [string], bigint], Result_2>,
  'setSystemCalendar' : ActorMethod<[bigint], Result>,
  'setSystemSupport' : ActorMethod<[string], Result>,
  'setTodoAccessKey' : ActorMethod<[bigint, [] | [string], bigint], Result_2>,
  'subscribe' : ActorMethod<[bigint], Result>,
  'transferCalendar' : ActorMethod<[bigint, Principal], Result>,
  'uninterested' : ActorMethod<[bigint], Result>,
  'unsubscribe' : ActorMethod<[bigint], Result>,
  'updateCalendar' : ActorMethod<[bigint, UpdateCalendar], Result>,
  'updateCalendarOrganization' : ActorMethod<[bigint, Organization], Result>,
  'updateCalendarProfile' : ActorMethod<[bigint, Profile__1], Result>,
  'updateCategory' : ActorMethod<[bigint, string], Result>,
  'updateChecklist' : ActorMethod<[bigint, NewChecklist], Result>,
  'updateContact' : ActorMethod<[bigint, UpdateContact], Result>,
  'updateItinerary' : ActorMethod<[Itinerary], Result>,
  'updateNote' : ActorMethod<[bigint, NewNoteReq], Result>,
  'updateProfile' : ActorMethod<
    [string, string, string, string, string],
    Result_1
  >,
  'updateTodo' : ActorMethod<[bigint, UpdateTodo], Result>,
  'userCount' : ActorMethod<[], bigint>,
  'verifyCalendar' : ActorMethod<[bigint], Result>,
}
export interface Wallet { 'currency' : Currency__1, 'address' : string }
export interface _SERVICE extends Vansday {}
