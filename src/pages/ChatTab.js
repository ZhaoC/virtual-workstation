import React from 'react';
// import MobileTearSheet from '../../../MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import PersonIcon from 'material-ui/svg-icons/social/person';

const ChatTab = () => (
  <div>
    <List>
      <Subheader>Recent chats</Subheader>
      <ListItem
        primaryText="Brendan Lim"
        leftAvatar={<Avatar icon={<PersonIcon />} />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Eric Hoffman"
        leftAvatar={<Avatar icon={<PersonIcon />} />}
        rightIcon={<CommunicationChatBubble />}
      />
      <ListItem
        primaryText="Grace Ng"
        leftAvatar={<Avatar icon={<PersonIcon />} />}
        rightIcon={<CommunicationChatBubble />}
      />
    </List>
    <Divider />
    <List>
      <Subheader>Contacts</Subheader>
      <ListItem
        primaryText="Chelsea Otakan"
        leftAvatar={<Avatar icon={<PersonIcon />} />}
      />
    </List>
  </div>
);

export default ChatTab;