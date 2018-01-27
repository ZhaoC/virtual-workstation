import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';

import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionHome from 'material-ui/svg-icons/action/home';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {black, white, green500, yellow600, blue300, red500, purple300} from 'material-ui/styles/colors';

import TODO from '../pages/TODO';

const styles = {
  tabItemContainer: {
		background: 'none'
	}
};

const TabHeaders = () => (
  <Tabs tabItemContainerStyle={styles.tabItemContainer}>
    <Tab icon={<ActionHome color={black}/>} title="Home">
      Home
    </Tab>    
    <Tab icon={<ActionAssignment color={yellow600}/>} title="TODO">
      <TODO />
    </Tab>
    {/* <Tab icon={<CommunicationChatBubble color={blue300}/>} title="Chat"/> */}
    <Tab icon={<Badge badgeContent={3} primary={true} badgeStyle={{top: 12, right: 2}}><CommunicationChatBubble color={blue300}/> </Badge>} title="Chat">
      Chat
    </Tab>    
    <Tab icon={<EditorInsertChart color={green500}/>} title="Report">
      Report
    </Tab>    
    <Tab icon={<FileFolder color={purple300}/>} title="File">
      File
    </Tab> 
    <Tab icon={<HardwareVideogameAsset color={red500}/>} title="Game">
      Game
    </Tab>   
  </Tabs>
);

export default TabHeaders;

