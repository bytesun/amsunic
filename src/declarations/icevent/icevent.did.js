export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Nat, 'err' : IDL.Text });
  const Ctype = IDL.Variant({
    'appointment' : IDL.Null,
    'schedule' : IDL.Null,
    'common' : IDL.Null,
    'activity' : IDL.Null,
    'itinerary' : IDL.Null,
  });
  const BookingSet = IDL.Record({
    'tz' : IDL.Text,
    'bookend' : IDL.Text,
    'slotlength' : IDL.Variant({ 'hours' : IDL.Nat8, 'minutes' : IDL.Nat8 }),
    'bookstart' : IDL.Text,
  });
  const Group = IDL.Record({
    'supervisor' : IDL.Text,
    'members' : IDL.Vec(IDL.Text),
  });
  const ScheduleSet = IDL.Record({ 'groups' : IDL.Vec(Group) });
  const Currency = IDL.Text;
  const ActivitySet = IDL.Record({ 'currency' : Currency });
  const ItinerarySet = IDL.Record({});
  const Solution = IDL.Variant({
    'appointment' : BookingSet,
    'schedule' : ScheduleSet,
    'common' : IDL.Null,
    'activity' : ActivitySet,
    'itinerary' : ItinerarySet,
  });
  const Address__1 = IDL.Record({
    'postcode' : IDL.Text,
    'country' : IDL.Text,
    'province' : IDL.Text,
    'aptno' : IDL.Text,
    'city' : IDL.Text,
    'address' : IDL.Text,
  });
  const Organization = IDL.Record({
    'bn' : IDL.Text,
    'tn' : IDL.Text,
    'fax' : IDL.Text,
    'contact' : IDL.Text,
    'logo' : IDL.Text,
    'name' : IDL.Text,
    'email' : IDL.Text,
    'currency' : IDL.Text,
    'address' : Address__1,
    'wallet' : IDL.Text,
    'phone' : IDL.Text,
  });
  const NewCalendar = IDL.Record({
    'url' : IDL.Text,
    'name' : IDL.Text,
    'color' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'ctype' : Ctype,
    'description' : IDL.Text,
    'ispublic' : IDL.Bool,
    'solution' : Solution,
    'organization' : IDL.Opt(Organization),
  });
  const NewCategory = IDL.Record({
    'hook' : IDL.Nat,
    'name' : IDL.Text,
    'parent' : IDL.Nat,
  });
  const NewChecklist = IDL.Record({
    'list' : IDL.Vec(IDL.Text),
    'name' : IDL.Text,
    'description' : IDL.Text,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
  });
  const Address = IDL.Record({
    'postcode' : IDL.Text,
    'country' : IDL.Text,
    'province' : IDL.Text,
    'city' : IDL.Text,
    'address' : IDL.Text,
  });
  const NewContact = IDL.Record({
    'fax' : IDL.Text,
    'contact' : IDL.Text,
    'code' : IDL.Text,
    'name' : IDL.Text,
    'note' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'ctype' : IDL.Nat,
    'email' : IDL.Text,
    'calendar' : IDL.Nat,
    'address' : Address,
    'contactid' : IDL.Text,
    'phone' : IDL.Text,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const ExternalCalendar = IDL.Record({ 'link' : IDL.Text, 'name' : IDL.Text });
  const NewInvitee = IDL.Record({
    'eventid' : IDL.Nat,
    'role' : IDL.Variant({
      'admin' : IDL.Null,
      'moderator' : IDL.Null,
      'viewer' : IDL.Null,
    }),
    'inviteeid' : IDL.Text,
    'inviteename' : IDL.Text,
  });
  const Contact = IDL.Record({
    'fax' : IDL.Text,
    'postcode' : IDL.Text,
    'country' : IDL.Text,
    'province' : IDL.Text,
    'city' : IDL.Text,
    'code' : IDL.Text,
    'name' : IDL.Text,
    'address' : IDL.Text,
    'phone' : IDL.Text,
  });
  const Admission = IDL.Record({
    'pchild' : IDL.Float64,
    'contact' : Contact,
    'paynumber' : IDL.Text,
    'count' : IDL.Nat,
    'cadult' : IDL.Nat,
    'amount' : IDL.Float64,
    'cchild' : IDL.Nat,
    'padult' : IDL.Float64,
    'paytype' : IDL.Nat,
  });
  const Hotel = IDL.Record({
    'pquadruple' : IDL.Float64,
    'contact' : Contact,
    'paynumber' : IDL.Text,
    'cdouble' : IDL.Nat,
    'cquadruple' : IDL.Nat,
    'ctriple' : IDL.Nat,
    'pdouble' : IDL.Float64,
    'ptriple' : IDL.Float64,
    'csingle' : IDL.Nat,
    'amount' : IDL.Float64,
    'psingle' : IDL.Float64,
    'paytype' : IDL.Nat,
  });
  const Restaurant = IDL.Record({
    'pchild' : IDL.Float64,
    'contact' : Contact,
    'paynumber' : IDL.Text,
    'count' : IDL.Nat,
    'cadult' : IDL.Nat,
    'amount' : IDL.Float64,
    'cchild' : IDL.Nat,
    'padult' : IDL.Float64,
    'paytype' : IDL.Nat,
  });
  const Itinerary = IDL.Record({
    'id' : IDL.Nat,
    'to' : IDL.Text,
    'day' : IDL.Nat,
    'via' : IDL.Text,
    'memos' : IDL.Vec(IDL.Text),
    'admissions' : IDL.Vec(Admission),
    'hotel' : Hotel,
    'from' : IDL.Text,
    'breakfast' : Restaurant,
    'lunch' : Restaurant,
    'dinner' : Restaurant,
  });
  const ItineraryTemplate = IDL.Record({
    'itineraries' : IDL.Vec(
      IDL.Record({
        'to' : IDL.Text,
        'via' : IDL.Text,
        'memos' : IDL.Vec(IDL.Text),
        'from' : IDL.Text,
      })
    ),
    'code' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
    'calendar' : IDL.Nat,
  });
  const NewNote = IDL.Record({
    'title' : IDL.Text,
    'content' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'category' : IDL.Nat,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Partrole = IDL.Variant({
    'admin' : IDL.Null,
    'editor' : IDL.Null,
    'viewer' : IDL.Null,
  });
  const Participant = IDL.Record({
    'pid' : IDL.Text,
    'name' : IDL.Text,
    'role' : Partrole,
    'calendar' : IDL.Nat,
  });
  const TodoType = IDL.Variant({
    'ticket' : IDL.Null,
    'idea' : IDL.Null,
    'task' : IDL.Null,
    'bounty' : IDL.Null,
    'proposal' : IDL.Null,
    'issue' : IDL.Null,
  });
  const Priority = IDL.Variant({
    'low' : IDL.Null,
    'high' : IDL.Null,
    'medium' : IDL.Null,
  });
  const NewTodo = IDL.Record({
    'assignee' : IDL.Text,
    'ttype' : TodoType,
    'tags' : IDL.Vec(IDL.Text),
    'todo' : IDL.Text,
    'description' : IDL.Text,
    'bounty' : IDL.Float64,
    'duedate' : IDL.Nat,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'priority' : Priority,
    'attachments' : IDL.Vec(IDL.Text),
    'parent' : IDL.Nat,
  });
  const RegStatus = IDL.Variant({
    'regjected' : IDL.Null,
    'request' : IDL.Null,
    'paid' : IDL.Null,
    'approved' : IDL.Null,
    'confirmed' : IDL.Null,
  });
  const RegData = IDL.Record({ 'value' : IDL.Text, 'name' : IDL.Text });
  const Register = IDL.Record({
    'status' : RegStatus,
    'eventid' : IDL.Nat,
    'ticket' : IDL.Opt(IDL.Text),
    'data' : IDL.Vec(RegData),
    'name' : IDL.Text,
    'regtime' : IDL.Int,
    'register' : IDL.Text,
  });
  const Status__2 = IDL.Variant({ 'live' : IDL.Null, 'offline' : IDL.Null });
  const Status = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'finished' : IDL.Null,
    'confirmed' : IDL.Null,
  });
  const Status__1 = IDL.Variant({
    'new' : IDL.Null,
    'done' : IDL.Null,
    'progress' : IDL.Null,
  });
  const Result_6 = IDL.Variant({ 'ok' : IDL.Int, 'err' : IDL.Text });
  const Permission__1 = IDL.Variant({
    'no' : IDL.Null,
    'edit' : IDL.Null,
    'read' : IDL.Null,
  });
  const RepeatType = IDL.Variant({
    'weekday' : IDL.Null,
    'weekend' : IDL.Null,
    'monthly' : IDL.Null,
    'yearly' : IDL.Null,
    'daily' : IDL.Null,
    'weekly' : IDL.Null,
  });
  const RepeatData = IDL.Record({
    'adjusts' : IDL.Vec(IDL.Nat),
    'excludes' : IDL.Vec(IDL.Nat),
    'days' : IDL.Vec(IDL.Nat),
    'frequency' : IDL.Nat,
    'rtype' : RepeatType,
  });
  const Etype = IDL.Variant({
    'appointment' : IDL.Null,
    'contract' : IDL.Null,
    'schedule' : IDL.Null,
    'common' : IDL.Null,
    'activity' : IDL.Null,
    'itinerary' : IDL.Null,
  });
  const Cost = IDL.Record({ 'currency' : IDL.Text, 'amount' : IDL.Float64 });
  const ContactInfo = IDL.Record({
    'fax' : IDL.Text,
    'contact' : IDL.Text,
    'name' : IDL.Text,
    'email' : IDL.Text,
    'address' : IDL.Text,
    'phone' : IDL.Text,
  });
  const Appointment = IDL.Record({ 'cost' : Cost, 'guest' : ContactInfo });
  const Contract = IDL.Record({
    'jon' : ContactInfo,
    'sam' : ContactInfo,
    'signature' : IDL.Opt(
      IDL.Variant({
        'jon' : IDL.Opt(IDL.Record({ 'sign' : IDL.Text, 'stime' : IDL.Int })),
        'sam' : IDL.Opt(IDL.Record({ 'sign' : IDL.Text, 'stime' : IDL.Int })),
      })
    ),
    'cost' : Cost,
    'plan' : IDL.Nat,
    'paymenterm' : IDL.Text,
    'chargetype' : IDL.Variant({ 'one' : IDL.Null, 'mult' : IDL.Text }),
  });
  const Group__1 = IDL.Record({
    'supervisor' : IDL.Text,
    'members' : IDL.Vec(IDL.Text),
  });
  const Schedule = IDL.Record({ 'groups' : IDL.Vec(Group__1) });
  const Formfield = IDL.Record({
    'name' : IDL.Text,
    'isrequired' : IDL.Bool,
    'description' : IDL.Text,
  });
  const Activity = IDL.Record({
    'attendeelimit' : IDL.Nat,
    'formfields' : IDL.Vec(Formfield),
    'price' : Cost,
    'registerat' : IDL.Variant({ 'createon' : IDL.Null, 'starton' : IDL.Null }),
  });
  const ContactInfo__1 = IDL.Record({
    'fax' : IDL.Opt(IDL.Text),
    'postcode' : IDL.Text,
    'contact' : IDL.Opt(IDL.Text),
    'country' : IDL.Text,
    'province' : IDL.Text,
    'city' : IDL.Text,
    'name' : IDL.Text,
    'email' : IDL.Text,
    'website' : IDL.Opt(IDL.Text),
    'address' : IDL.Text,
    'wallet' : IDL.Opt(
      IDL.Record({ 'network' : IDL.Text, 'address' : IDL.Text })
    ),
    'phone' : IDL.Text,
  });
  const Admission__1 = IDL.Record({
    'contact' : ContactInfo__1,
    'code' : IDL.Text,
  });
  const Hotel__1 = IDL.Record({
    'contact' : ContactInfo__1,
    'code' : IDL.Text,
  });
  const Restaurant__1 = IDL.Record({
    'contact' : ContactInfo__1,
    'code' : IDL.Text,
  });
  const Iday = IDL.Record({
    'to' : IDL.Text,
    'via' : IDL.Text,
    'admissions' : IDL.Vec(Admission__1),
    'hotel' : IDL.Opt(Hotel__1),
    'itineraries' : IDL.Vec(IDL.Text),
    'from' : IDL.Text,
    'breakfast' : IDL.Opt(Restaurant__1),
    'lunch' : IDL.Opt(Restaurant__1),
    'dinner' : IDL.Opt(Restaurant__1),
  });
  const Itinerary__1 = IDL.Record({
    'cost' : Cost,
    'operater' : IDL.Text,
    'idays' : IDL.Vec(Iday),
    'driver' : IDL.Record({ 'name' : IDL.Text, 'phone' : IDL.Text }),
  });
  const Solution__1 = IDL.Variant({
    'appointment' : Appointment,
    'contract' : Contract,
    'schedule' : Schedule,
    'common' : IDL.Null,
    'activity' : Activity,
    'itinerary' : Itinerary__1,
  });
  const Location = IDL.Variant({
    'geo' : IDL.Text,
    'url' : IDL.Text,
    'address' : IDL.Text,
  });
  const NewEvent = IDL.Record({
    'tz' : IDL.Text,
    'end' : IDL.Nat,
    'title' : IDL.Text,
    'repeatdata' : IDL.Opt(RepeatData),
    'isrepeat' : IDL.Bool,
    'allday' : IDL.Bool,
    'cost' : IDL.Float64,
    'tags' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'etype' : Etype,
    'calendar' : IDL.Nat,
    'start' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'solution' : Solution__1,
    'location' : Location,
    'attachments' : IDL.Vec(IDL.Text),
    'parent' : IDL.Nat,
  });
  const Profile = IDL.Record({
    'bio' : IDL.Text,
    'status' : IDL.Nat,
    'username' : IDL.Text,
    'lastlogin' : IDL.Int,
    'userid' : IDL.Text,
    'name' : IDL.Text,
    'role' : IDL.Nat,
    'email' : IDL.Text,
    'createtime' : IDL.Int,
    'avatar' : IDL.Text,
  });
  const Result_5 = IDL.Variant({ 'ok' : IDL.Opt(Profile), 'err' : IDL.Text });
  const UpdateEvent = IDL.Record({
    'tz' : IDL.Text,
    'end' : IDL.Nat,
    'title' : IDL.Text,
    'repeatdata' : IDL.Opt(RepeatData),
    'allday' : IDL.Bool,
    'cost' : IDL.Float64,
    'tags' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'start' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'solution' : Solution__1,
    'location' : Location,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Component = IDL.Variant({
    'contact' : IDL.Null,
    'note' : IDL.Null,
    'todo' : IDL.Null,
    'event' : IDL.Null,
    'calendar' : IDL.Null,
    'wallet' : IDL.Null,
  });
  const Authority = IDL.Variant({
    'admin' : IDL.Null,
    'edit' : IDL.Null,
    'read' : IDL.Null,
  });
  const Permission = IDL.Record({
    'component' : Component,
    'authority' : Authority,
  });
  const Role = IDL.Record({
    'privileges' : IDL.Vec(Permission),
    'name' : IDL.Text,
  });
  const Achievement = IDL.Record({
    'userid' : IDL.Text,
    'badges' : IDL.Vec(IDL.Text),
    'credit' : IDL.Nat,
    'roles' : IDL.Vec(Role),
  });
  const Calendar = IDL.Record({
    'id' : IDL.Nat,
    'url' : IDL.Text,
    'status' : Status__2,
    'owner' : IDL.Text,
    'name' : IDL.Text,
    'color' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'ctype' : Ctype,
    'description' : IDL.Text,
    'ispublic' : IDL.Bool,
    'solution' : Solution,
    'isverified' : IDL.Bool,
    'organization' : IDL.Opt(Organization),
  });
  const Category__1 = IDL.Record({
    'id' : IDL.Nat,
    'owner' : IDL.Text,
    'hook' : IDL.Nat,
    'name' : IDL.Text,
    'parent' : IDL.Nat,
  });
  const Checklist__1 = IDL.Record({
    'id' : IDL.Nat,
    'owner' : IDL.Text,
    'list' : IDL.Vec(IDL.Text),
    'name' : IDL.Text,
    'description' : IDL.Text,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
  });
  const Contact__1 = IDL.Record({
    'id' : IDL.Nat,
    'fax' : IDL.Text,
    'contact' : IDL.Text,
    'owner' : IDL.Text,
    'code' : IDL.Text,
    'name' : IDL.Text,
    'note' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'ctype' : IDL.Nat,
    'email' : IDL.Text,
    'calendar' : IDL.Nat,
    'address' : Address,
    'disable' : IDL.Bool,
    'contactid' : IDL.Text,
    'phone' : IDL.Text,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Event = IDL.Record({
    'id' : IDL.Nat,
    'tz' : IDL.Text,
    'end' : IDL.Nat,
    'status' : Status,
    'title' : IDL.Text,
    'repeatdata' : IDL.Opt(RepeatData),
    'isrepeat' : IDL.Bool,
    'owner' : IDL.Text,
    'allday' : IDL.Bool,
    'cost' : IDL.Float64,
    'tags' : IDL.Vec(IDL.Text),
    'description' : IDL.Text,
    'etype' : Etype,
    'calendar' : IDL.Nat,
    'start' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'solution' : Solution__1,
    'location' : Location,
    'attachments' : IDL.Vec(IDL.Text),
    'parent' : IDL.Nat,
  });
  const Interested = IDL.Record({
    'event' : IDL.Nat,
    'interester' : IDL.Principal,
  });
  const InviteeStatus = IDL.Variant({
    'invited' : IDL.Null,
    'rejected' : IDL.Null,
    'accepted' : IDL.Null,
  });
  const Invitee = IDL.Record({
    'status' : InviteeStatus,
    'eventid' : IDL.Nat,
    'role' : IDL.Variant({
      'admin' : IDL.Null,
      'moderator' : IDL.Null,
      'viewer' : IDL.Null,
    }),
    'inviteeid' : IDL.Text,
    'inviteename' : IDL.Text,
  });
  const Note__1 = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'content' : IDL.Text,
    'owner' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'createtime' : IDL.Int,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'category' : IDL.Nat,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Subscription = IDL.Record({
    'calendar' : IDL.Nat,
    'stype' : IDL.Nat,
    'subscriber' : IDL.Principal,
  });
  const Todo = IDL.Record({
    'id' : IDL.Nat,
    'status' : Status__1,
    'assignee' : IDL.Text,
    'ttype' : TodoType,
    'owner' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'todo' : IDL.Text,
    'description' : IDL.Text,
    'bounty' : IDL.Float64,
    'duedate' : IDL.Nat,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'priority' : Priority,
    'donetime' : IDL.Int,
    'attachments' : IDL.Vec(IDL.Text),
    'parent' : IDL.Nat,
  });
  const Tour = IDL.Record({
    'id' : IDL.Nat,
    'op' : IDL.Text,
    'adult' : IDL.Nat,
    'days' : IDL.Nat,
    'child' : IDL.Nat,
    'infant' : IDL.Nat,
    'guide' : IDL.Record({ 'name' : IDL.Text, 'phone' : IDL.Opt(IDL.Text) }),
    'driver' : IDL.Record({ 'name' : IDL.Text, 'phone' : IDL.Opt(IDL.Text) }),
  });
  const Result_4 = IDL.Variant({ 'ok' : Calendar, 'err' : IDL.Text });
  const Checklist = IDL.Record({
    'id' : IDL.Nat,
    'owner' : IDL.Text,
    'list' : IDL.Vec(IDL.Text),
    'name' : IDL.Text,
    'description' : IDL.Text,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
  });
  const Note = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'content' : IDL.Text,
    'owner' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'createtime' : IDL.Int,
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'category' : IDL.Nat,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Profile__1 = IDL.Record({
    'tz' : IDL.Opt(IDL.Text),
    'fax' : IDL.Opt(IDL.Text),
    'tax' : IDL.Opt(IDL.Text),
    'url' : IDL.Opt(IDL.Text),
    'contact' : IDL.Opt(IDL.Text),
    'logo' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'description' : IDL.Text,
    'email' : IDL.Opt(IDL.Text),
    'servetime' : IDL.Opt(
      IDL.Record({
        'end' : IDL.Text,
        'excludes' : IDL.Vec(IDL.Nat8),
        'weekend' : IDL.Bool,
        'start' : IDL.Text,
        'slotlength' : IDL.Opt(
          IDL.Variant({ 'hours' : IDL.Nat8, 'minutes' : IDL.Nat8 })
        ),
        'sevenx24' : IDL.Bool,
        'holiday' : IDL.Bool,
      })
    ),
    'calendar' : IDL.Nat,
    'address' : IDL.Opt(IDL.Text),
    'wallet' : IDL.Opt(
      IDL.Record({ 'network' : IDL.Text, 'address' : IDL.Text })
    ),
    'showcase' : IDL.Vec(IDL.Text),
    'phone' : IDL.Opt(IDL.Text),
    'license' : IDL.Opt(IDL.Text),
  });
  const Address__2 = IDL.Record({
    'postcode' : IDL.Text,
    'country' : IDL.Text,
    'province' : IDL.Text,
    'city' : IDL.Text,
    'address' : IDL.Text,
  });
  const Currency__1 = IDL.Text;
  const Wallet = IDL.Record({ 'currency' : Currency__1, 'address' : IDL.Text });
  const Contact__2 = IDL.Record({
    'fax' : IDL.Opt(IDL.Text),
    'url' : IDL.Opt(IDL.Text),
    'contact' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'email' : IDL.Text,
    'address' : Address__2,
    'wallet' : IDL.Opt(Wallet),
    'phone' : IDL.Text,
  });
  const Tax = IDL.Record({
    'name' : IDL.Text,
    'rate' : IDL.Float64,
    'number' : IDL.Text,
    'amount' : IDL.Float64,
  });
  const Status__3 = IDL.Variant({
    'new' : IDL.Null,
    'canceled' : IDL.Null,
    'paid' : IDL.Null,
    'confirmed' : IDL.Null,
  });
  const PaymentTerm = IDL.Record({ 'name' : IDL.Text, 'address' : IDL.Text });
  const Item = IDL.Record({
    'desc' : IDL.Text,
    'quantity' : IDL.Nat32,
    'itype' : IDL.Variant({ 'cost' : IDL.Null, 'income' : IDL.Null }),
    'price' : IDL.Float64,
  });
  const Invoice = IDL.Record({
    'id' : IDL.Text,
    'to' : Contact__2,
    'tax' : Tax,
    'status' : Status__3,
    'paymentterms' : IDL.Vec(PaymentTerm),
    'owner' : IDL.Text,
    'cost' : IDL.Float64,
    'from' : Contact__2,
    'note' : IDL.Text,
    'createtime' : IDL.Int,
    'event' : IDL.Nat,
    'duetime' : IDL.Nat,
    'calendar' : IDL.Nat,
    'currency' : IDL.Text,
    'adjust' : IDL.Float64,
    'discount' : IDL.Float64,
    'idate' : IDL.Nat,
    'items' : IDL.Vec(Item),
    'amount' : IDL.Float64,
    'receiver' : IDL.Opt(IDL.Text),
  });
  const KeyComponent = IDL.Variant({
    'log' : IDL.Null,
    'contact' : IDL.Null,
    'expense' : IDL.Null,
    'order' : IDL.Null,
    'invoice' : IDL.Null,
    'note' : IDL.Null,
    'todo' : IDL.Null,
    'event' : IDL.Null,
    'calendar' : IDL.Null,
    'comment' : IDL.Null,
    'message' : IDL.Null,
    'checklist' : IDL.Null,
    'profile' : IDL.Null,
  });
  const AccessKey = IDL.Record({
    'key' : IDL.Text,
    'keycomponent' : KeyComponent,
    'componentid' : IDL.Text,
    'expiredtime' : IDL.Int,
  });
  const Category = IDL.Record({
    'id' : IDL.Nat,
    'owner' : IDL.Text,
    'hook' : IDL.Nat,
    'name' : IDL.Text,
    'parent' : IDL.Nat,
  });
  const Result_3 = IDL.Variant({ 'ok' : Todo, 'err' : IDL.Text });
  const NewRegister = IDL.Record({
    'data' : IDL.Vec(RegData),
    'name' : IDL.Text,
  });
  const Result_2 = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const UpdateCalendar = IDL.Record({
    'url' : IDL.Text,
    'name' : IDL.Text,
    'color' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'ctype' : Ctype,
    'description' : IDL.Text,
    'ispublic' : IDL.Bool,
    'solution' : Solution,
    'organization' : IDL.Opt(Organization),
  });
  const UpdateContact = IDL.Record({
    'fax' : IDL.Text,
    'contact' : IDL.Text,
    'code' : IDL.Text,
    'name' : IDL.Text,
    'note' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'ctype' : IDL.Nat,
    'email' : IDL.Text,
    'address' : Address,
    'disable' : IDL.Bool,
    'contactid' : IDL.Text,
    'phone' : IDL.Text,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const NewNoteReq = IDL.Record({
    'title' : IDL.Text,
    'content' : IDL.Text,
    'tags' : IDL.Vec(IDL.Text),
    'calendar' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'category' : IDL.Nat,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Result_1 = IDL.Variant({ 'ok' : Profile, 'err' : IDL.Text });
  const UpdateTodo = IDL.Record({
    'assignee' : IDL.Text,
    'ttype' : TodoType,
    'tags' : IDL.Vec(IDL.Text),
    'todo' : IDL.Text,
    'description' : IDL.Text,
    'bounty' : IDL.Float64,
    'duedate' : IDL.Nat,
    'ispublic' : IDL.Bool,
    'priority' : Priority,
    'attachments' : IDL.Vec(IDL.Text),
  });
  const Vansday = IDL.Service({
    'addAdmin' : IDL.Func([IDL.Text], [Result], []),
    'addBadge' : IDL.Func([IDL.Text, IDL.Text], [Result], []),
    'addCalendar' : IDL.Func([NewCalendar], [Result], []),
    'addCategory' : IDL.Func([NewCategory], [Result], []),
    'addChecklist' : IDL.Func([NewChecklist], [Result], []),
    'addContact' : IDL.Func([NewContact], [Result], []),
    'addExternalCalendar' : IDL.Func([IDL.Nat, ExternalCalendar], [Result], []),
    'addInvitee' : IDL.Func([NewInvitee], [Result], []),
    'addItinerary' : IDL.Func([Itinerary], [Result], []),
    'addItineraryTemplate' : IDL.Func([ItineraryTemplate], [Result], []),
    'addMutiItineraries' : IDL.Func([IDL.Vec(Itinerary)], [Result], []),
    'addNote' : IDL.Func([NewNote], [Result], []),
    'addParticipant' : IDL.Func([Participant], [Result], []),
    'addServiceRequest' : IDL.Func(
        [IDL.Nat, IDL.Text, IDL.Text, IDL.Nat],
        [Result],
        [],
      ),
    'addSystemTodo' : IDL.Func(
        [
          IDL.Record({
            'desc' : IDL.Text,
            'duedate' : IDL.Nat,
            'itodo' : IDL.Text,
            'attachments' : IDL.Vec(IDL.Text),
          }),
        ],
        [Result],
        [],
      ),
    'addTodo' : IDL.Func([NewTodo], [Result], []),
    'addTodoWithSubs' : IDL.Func([NewTodo, IDL.Vec(IDL.Text)], [Result], []),
    'approveRegister' : IDL.Func([Register], [Result], []),
    'assignTask' : IDL.Func([IDL.Nat, IDL.Text], [Result], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'cancelEvent' : IDL.Func(
        [IDL.Nat, IDL.Opt(IDL.Record({ 'op' : IDL.Text, 'adate' : IDL.Nat }))],
        [Result],
        [],
      ),
    'changeCalendarStatus' : IDL.Func([IDL.Nat, Status__2], [Result], []),
    'changeEventStatus' : IDL.Func([IDL.Nat, Status], [Result], []),
    'changeTodoStatus' : IDL.Func([IDL.Nat, Status__1], [Result], []),
    'checkIn' : IDL.Func([], [Result_6], []),
    'checkPermission' : IDL.Func([IDL.Nat, IDL.Text], [Permission__1], []),
    'checkRegistration' : IDL.Func([IDL.Nat], [IDL.Bool], []),
    'checkUsername' : IDL.Func([IDL.Text], [IDL.Bool], ['query']),
    'cloneEvent' : IDL.Func([IDL.Nat], [Result], []),
    'createEvent' : IDL.Func([NewEvent], [Result], []),
    'createEvents' : IDL.Func([IDL.Vec(NewEvent)], [Result], []),
    'createProfile' : IDL.Func(
        [
          IDL.Record({
            'bio' : IDL.Text,
            'username' : IDL.Text,
            'name' : IDL.Text,
            'email' : IDL.Text,
            'avatar' : IDL.Text,
          }),
        ],
        [Result_5],
        [],
      ),
    'createTour' : IDL.Func(
        [
          IDL.Nat,
          IDL.Record({
            'op' : IDL.Text,
            'tz' : IDL.Text,
            'adult' : IDL.Nat,
            'code' : IDL.Text,
            'days' : IDL.Nat,
            'child' : IDL.Nat,
            'description' : IDL.Text,
            'infant' : IDL.Nat,
            'guide' : IDL.Record({
              'name' : IDL.Text,
              'phone' : IDL.Opt(IDL.Text),
            }),
            'arrive' : IDL.Nat,
            'departure' : IDL.Nat,
            'driver' : IDL.Record({
              'name' : IDL.Text,
              'phone' : IDL.Opt(IDL.Text),
            }),
            'location' : IDL.Text,
          }),
        ],
        [Result],
        [],
      ),
    'deleteCalendarEvents' : IDL.Func([IDL.Nat], [Result], []),
    'deleteCategory' : IDL.Func([IDL.Nat], [Result], []),
    'deleteContact' : IDL.Func([IDL.Nat], [Result], []),
    'deleteInvitee' : IDL.Func([IDL.Nat, IDL.Text], [Result], []),
    'deleteItinerary' : IDL.Func([IDL.Nat, IDL.Nat], [Result], []),
    'deleteItineraryTemplate' : IDL.Func([IDL.Nat, IDL.Text], [Result], []),
    'deleteNote' : IDL.Func([IDL.Nat], [Result], []),
    'deleteParticipant' : IDL.Func([IDL.Nat, IDL.Text], [Result], []),
    'deleteTodo' : IDL.Func([IDL.Nat], [Result], []),
    'editEvent' : IDL.Func([IDL.Nat, UpdateEvent], [Result], []),
    'editTour' : IDL.Func(
        [
          IDL.Record({
            'id' : IDL.Nat,
            'op' : IDL.Text,
            'tz' : IDL.Text,
            'adult' : IDL.Nat,
            'code' : IDL.Text,
            'days' : IDL.Nat,
            'child' : IDL.Nat,
            'description' : IDL.Text,
            'infant' : IDL.Nat,
            'guide' : IDL.Record({
              'name' : IDL.Text,
              'phone' : IDL.Opt(IDL.Text),
            }),
            'arrive' : IDL.Nat,
            'departure' : IDL.Nat,
            'driver' : IDL.Record({
              'name' : IDL.Text,
              'phone' : IDL.Opt(IDL.Text),
            }),
            'location' : IDL.Text,
          }),
        ],
        [Result],
        [],
      ),
    'exportAchievements' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Achievement))],
        [],
      ),
    'exportCalendars' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, Calendar))],
        [],
      ),
    'exportCategories' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, Category__1))],
        [],
      ),
    'exportChecklists' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, Checklist__1))],
        [],
      ),
    'exportContacts' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Nat, Contact__1))],
        [],
      ),
    'exportCurrentIds' : IDL.Func(
        [],
        [IDL.Vec(IDL.Record({ 'id' : IDL.Nat, 'name' : IDL.Text }))],
        [],
      ),
    'exportEvents' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Nat, Event))], []),
    'exportInterests' : IDL.Func([], [IDL.Vec(Interested)], []),
    'exportInvitees' : IDL.Func([], [IDL.Vec(Invitee)], []),
    'exportItineraries' : IDL.Func([], [IDL.Vec(Itinerary)], []),
    'exportNotes' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Nat, Note__1))], []),
    'exportParticipants' : IDL.Func([], [IDL.Vec(Participant)], []),
    'exportProfiles' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, Profile))],
        [],
      ),
    'exportRegisters' : IDL.Func([], [IDL.Vec(Register)], []),
    'exportSubscriptions' : IDL.Func([], [IDL.Vec(Subscription)], []),
    'exportTemplates' : IDL.Func([], [IDL.Vec(ItineraryTemplate)], []),
    'exportTodos' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Nat, Todo))], []),
    'exportTours' : IDL.Func([], [IDL.Vec(IDL.Tuple(IDL.Nat, Tour))], []),
    'getAchievement' : IDL.Func([IDL.Text], [IDL.Opt(Achievement)], ['query']),
    'getAchievements' : IDL.Func([], [IDL.Vec(Achievement)], ['query']),
    'getAdmins' : IDL.Func([], [IDL.Vec(IDL.Text)], []),
    'getAppointmentSlots' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [
          IDL.Vec(
            IDL.Record({ 'id' : IDL.Nat, 'end' : IDL.Nat, 'start' : IDL.Nat })
          ),
        ],
        ['query'],
      ),
    'getBannerMessage' : IDL.Func([], [IDL.Text], ['query']),
    'getCalendar' : IDL.Func([IDL.Nat], [Result_4], ['query']),
    'getCalendarAllEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getCalendarChecklists' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Vec(Checklist)],
        ['query'],
      ),
    'getCalendarContacts' : IDL.Func(
        [IDL.Nat, IDL.Opt(IDL.Nat), IDL.Nat],
        [IDL.Vec(Contact__1)],
        ['query'],
      ),
    'getCalendarEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getCalendarNotes' : IDL.Func([IDL.Nat], [IDL.Vec(Note)], ['query']),
    'getCalendarProfile' : IDL.Func(
        [IDL.Nat],
        [
          IDL.Variant({
            'nofound' : IDL.Null,
            'calendar' : Calendar,
            'profile' : Profile__1,
          }),
        ],
        ['query'],
      ),
    'getCalendarProfileBookingSchedules' : IDL.Func(
        [IDL.Nat, IDL.Int, IDL.Int],
        [
          IDL.Vec(
            IDL.Record({ 'tz' : IDL.Text, 'end' : IDL.Nat, 'start' : IDL.Nat })
          ),
        ],
        ['query'],
      ),
    'getCalendarTodos' : IDL.Func(
        [IDL.Nat, IDL.Opt(TodoType), Status__1, IDL.Nat],
        [IDL.Vec(Todo)],
        ['query'],
      ),
    'getCalendars' : IDL.Func(
        [IDL.Opt(IDL.Text), IDL.Bool, IDL.Nat],
        [IDL.Vec(Calendar)],
        ['query'],
      ),
    'getChecklists' : IDL.Func([IDL.Nat], [IDL.Vec(Checklist)], ['query']),
    'getContractWithKey' : IDL.Func(
        [IDL.Nat, IDL.Text],
        [
          IDL.Opt(
            IDL.Record({
              'schedules' : IDL.Vec(Event),
              'contract' : Event,
              'invoices' : IDL.Vec(Invoice),
            })
          ),
        ],
        [],
      ),
    'getContracts' : IDL.Func([IDL.Nat, IDL.Bool], [IDL.Vec(Event)], ['query']),
    'getDataState' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat))],
        ['query'],
      ),
    'getEvent' : IDL.Func([IDL.Nat], [IDL.Opt(Event)], ['query']),
    'getEventAccessKey' : IDL.Func([IDL.Nat], [IDL.Opt(AccessKey)], []),
    'getEventWithKey' : IDL.Func([IDL.Nat, IDL.Text], [IDL.Opt(Event)], []),
    'getEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Opt(IDL.Text), IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getExternalCalendars' : IDL.Func(
        [IDL.Nat],
        [IDL.Vec(ExternalCalendar)],
        [],
      ),
    'getInterestedEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getInterestes' : IDL.Func([IDL.Nat], [IDL.Vec(Interested)], ['query']),
    'getInvitedEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getInvitees' : IDL.Func([IDL.Nat], [IDL.Vec(Invitee)], ['query']),
    'getItineraryTemplates' : IDL.Func(
        [IDL.Nat],
        [IDL.Vec(ItineraryTemplate)],
        [],
      ),
    'getItineries' : IDL.Func([IDL.Nat], [IDL.Vec(Itinerary)], ['query']),
    'getMyCalendarRole' : IDL.Func([IDL.Nat], [IDL.Opt(Partrole)], ['query']),
    'getMyCalendars' : IDL.Func([IDL.Nat], [IDL.Vec(Calendar)], ['query']),
    'getMyCategories' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Vec(Category)],
        ['query'],
      ),
    'getMyChecklists' : IDL.Func([IDL.Nat], [IDL.Vec(Checklist)], ['query']),
    'getMyContacts' : IDL.Func(
        [IDL.Opt(IDL.Nat), IDL.Nat],
        [IDL.Vec(Contact__1)],
        ['query'],
      ),
    'getMyEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getMyNotes' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Vec(Note)], ['query']),
    'getMyParticipants' : IDL.Func([], [IDL.Vec(Participant)], ['query']),
    'getMyTodos' : IDL.Func(
        [IDL.Opt(TodoType), Status__1, IDL.Nat],
        [IDL.Vec(Todo)],
        ['query'],
      ),
    'getNote' : IDL.Func([IDL.Nat], [IDL.Opt(Note)], ['query']),
    'getNoteAccessKey' : IDL.Func([IDL.Nat], [IDL.Opt(AccessKey)], []),
    'getNoteWithKey' : IDL.Func([IDL.Nat, IDL.Text], [IDL.Opt(Note)], []),
    'getNotes' : IDL.Func([IDL.Nat], [IDL.Vec(Note)], ['query']),
    'getPartCalendars' : IDL.Func([IDL.Nat], [IDL.Vec(Calendar)], ['query']),
    'getParticipants' : IDL.Func([IDL.Nat], [IDL.Vec(Participant)], ['query']),
    'getParticipatedEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getPublicTodos' : IDL.Func(
        [Status__1, IDL.Bool, IDL.Nat],
        [IDL.Vec(Todo)],
        ['query'],
      ),
    'getRegisters' : IDL.Func([IDL.Nat], [IDL.Vec(Register)], ['query']),
    'getSubEvents' : IDL.Func([IDL.Nat], [IDL.Vec(Event)], ['query']),
    'getSubTodos' : IDL.Func([IDL.Nat], [IDL.Vec(Todo)], ['query']),
    'getSubscribedCalendars' : IDL.Func(
        [IDL.Nat],
        [IDL.Vec(Calendar)],
        ['query'],
      ),
    'getSubscribedEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getSubscribers' : IDL.Func([IDL.Nat], [IDL.Nat], ['query']),
    'getSubscriptions' : IDL.Func(
        [IDL.Nat],
        [IDL.Vec(Subscription)],
        ['query'],
      ),
    'getSystemCalendar' : IDL.Func([], [IDL.Nat], ['query']),
    'getSystemData' : IDL.Func(
        [],
        [
          IDL.Record({
            'memory' : IDL.Nat,
            'heap' : IDL.Nat,
            'cycles' : IDL.Nat,
          }),
        ],
        ['query'],
      ),
    'getSystemSupport' : IDL.Func([], [IDL.Text], ['query']),
    'getTodo' : IDL.Func([IDL.Nat], [Result_3], ['query']),
    'getTodoAccessKey' : IDL.Func([IDL.Nat], [IDL.Opt(AccessKey)], []),
    'getTodoWithKey' : IDL.Func([IDL.Nat, IDL.Text], [IDL.Opt(Todo)], []),
    'getTour' : IDL.Func(
        [IDL.Nat],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Nat,
              'op' : IDL.Text,
              'tz' : IDL.Text,
              'status' : Status,
              'adult' : IDL.Nat,
              'code' : IDL.Text,
              'days' : IDL.Nat,
              'child' : IDL.Nat,
              'description' : IDL.Text,
              'calendar' : IDL.Nat,
              'infant' : IDL.Nat,
              'guide' : IDL.Record({
                'name' : IDL.Text,
                'phone' : IDL.Opt(IDL.Text),
              }),
              'arrive' : IDL.Nat,
              'departure' : IDL.Nat,
              'driver' : IDL.Record({
                'name' : IDL.Text,
                'phone' : IDL.Opt(IDL.Text),
              }),
              'location' : Location,
            })
          ),
        ],
        ['query'],
      ),
    'getTourWithKey' : IDL.Func(
        [IDL.Nat, IDL.Text],
        [
          IDL.Opt(
            IDL.Record({
              'id' : IDL.Nat,
              'op' : IDL.Text,
              'tz' : IDL.Text,
              'status' : Status,
              'adult' : IDL.Nat,
              'itineraries' : IDL.Vec(Itinerary),
              'code' : IDL.Text,
              'days' : IDL.Nat,
              'child' : IDL.Nat,
              'description' : IDL.Text,
              'calendar' : IDL.Nat,
              'infant' : IDL.Nat,
              'guide' : IDL.Record({
                'name' : IDL.Text,
                'phone' : IDL.Opt(IDL.Text),
              }),
              'arrive' : IDL.Nat,
              'departure' : IDL.Nat,
              'driver' : IDL.Record({
                'name' : IDL.Text,
                'phone' : IDL.Opt(IDL.Text),
              }),
              'location' : Location,
            })
          ),
        ],
        [],
      ),
    'getTypeTodos' : IDL.Func(
        [TodoType, IDL.Bool, IDL.Nat],
        [IDL.Vec(Todo)],
        ['query'],
      ),
    'getUserEvents' : IDL.Func(
        [IDL.Text, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'getVerifiedEvents' : IDL.Func(
        [IDL.Nat, IDL.Nat],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'interested' : IDL.Func([IDL.Nat], [Result], []),
    'leaveParticipants' : IDL.Func([IDL.Nat], [Result], []),
    'listUsers' : IDL.Func([IDL.Nat], [IDL.Vec(Profile)], ['query']),
    'lookupUser' : IDL.Func([IDL.Text], [IDL.Opt(Profile)], ['query']),
    'registerActivity' : IDL.Func([IDL.Nat, NewRegister], [Result], []),
    'removeAdmin' : IDL.Func([IDL.Text], [Result], []),
    'removeCalendarProfile' : IDL.Func([IDL.Nat], [Result], []),
    'removeEvent' : IDL.Func([IDL.Nat], [Result], []),
    'removeExternalCalendar' : IDL.Func(
        [IDL.Nat, IDL.Text],
        [Result],
        ['query'],
      ),
    'searchContacts' : IDL.Func(
        [
          IDL.Text,
          IDL.Variant({ 'my' : IDL.Null, 'calendar' : IDL.Nat }),
          IDL.Opt(IDL.Nat),
          IDL.Nat,
        ],
        [IDL.Vec(Contact__1)],
        ['query'],
      ),
    'searchEvents' : IDL.Func(
        [
          IDL.Opt(IDL.Text),
          IDL.Variant({ 'my' : IDL.Null, 'calendar' : IDL.Nat }),
          IDL.Nat,
        ],
        [IDL.Vec(Event)],
        ['query'],
      ),
    'searchNotes' : IDL.Func(
        [IDL.Text, IDL.Variant({ 'my' : IDL.Null, 'calendar' : IDL.Nat })],
        [IDL.Vec(Note)],
        ['query'],
      ),
    'setAdmin' : IDL.Func([IDL.Principal], [], []),
    'setBannerMessage' : IDL.Func([IDL.Text], [], []),
    'setDefaultPageSize' : IDL.Func([IDL.Nat], [], []),
    'setEventAccessKey' : IDL.Func(
        [IDL.Nat, IDL.Opt(IDL.Text), IDL.Int],
        [Result_2],
        [],
      ),
    'setNoteAccessKey' : IDL.Func(
        [IDL.Nat, IDL.Opt(IDL.Text), IDL.Int],
        [Result_2],
        [],
      ),
    'setSystemCalendar' : IDL.Func([IDL.Nat], [Result], []),
    'setSystemSupport' : IDL.Func([IDL.Text], [Result], []),
    'setTodoAccessKey' : IDL.Func(
        [IDL.Nat, IDL.Opt(IDL.Text), IDL.Int],
        [Result_2],
        [],
      ),
    'subscribe' : IDL.Func([IDL.Nat], [Result], []),
    'transferCalendar' : IDL.Func([IDL.Nat, IDL.Principal], [Result], []),
    'uninterested' : IDL.Func([IDL.Nat], [Result], []),
    'unsubscribe' : IDL.Func([IDL.Nat], [Result], []),
    'updateCalendar' : IDL.Func([IDL.Nat, UpdateCalendar], [Result], []),
    'updateCalendarOrganization' : IDL.Func(
        [IDL.Nat, Organization],
        [Result],
        [],
      ),
    'updateCalendarProfile' : IDL.Func([IDL.Nat, Profile__1], [Result], []),
    'updateCategory' : IDL.Func([IDL.Nat, IDL.Text], [Result], []),
    'updateChecklist' : IDL.Func([IDL.Nat, NewChecklist], [Result], []),
    'updateContact' : IDL.Func([IDL.Nat, UpdateContact], [Result], []),
    'updateItinerary' : IDL.Func([Itinerary], [Result], []),
    'updateNote' : IDL.Func([IDL.Nat, NewNoteReq], [Result], []),
    'updateProfile' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text, IDL.Text, IDL.Text],
        [Result_1],
        [],
      ),
    'updateTodo' : IDL.Func([IDL.Nat, UpdateTodo], [Result], []),
    'userCount' : IDL.Func([], [IDL.Nat], ['query']),
    'verifyCalendar' : IDL.Func([IDL.Nat], [Result], []),
  });
  return Vansday;
};
export const init = ({ IDL }) => { return []; };
