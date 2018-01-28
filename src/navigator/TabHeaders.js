import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';

import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import EditorChartIcon from 'material-ui/svg-icons/editor/insert-chart';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import FileFolderIcon from 'material-ui/svg-icons/file/folder';
import ActionHome from 'material-ui/svg-icons/action/home';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import {black, white, green500, yellow600, blue300, red500, purple300} from 'material-ui/styles/colors';

import HomeTab from '../pages/HomeTab';
import TODOTab from '../pages/TODOTab';
import FileFolderTab from '../pages/FileFolderTab';
import GameTab from '../pages/GameTab';
import ReportTab from '../pages/ReportTab';
import ChatTab from '../pages/ChatTab';

const styles = {
  tabItemContainer: {
		background: 'none'
  },
  homeItemPosition:{
    marginTop: 40,
    marginLeft: '20%'
  }
};

const TabHeaders = () => (
  <Tabs tabItemContainerStyle={styles.tabItemContainer}>
    <Tab icon={<ActionHome color={black}/>} title="Home">
      <div style={styles.homeItemPosition}>
        <HomeTab />
      </div>
    </Tab>    
    <Tab icon={<ActionAssignment color={yellow600}/>} title="TODO">
      <TODOTab />
    </Tab>
    {/* <Tab icon={<CommunicationChatBubble color={blue300}/>} title="Chat"/> */}
    <Tab icon={<Badge badgeContent={3} primary={true} badgeStyle={{top: 12, right: 2}}><CommunicationChatBubble color={blue300}/> </Badge>} title="Chat">
      <ChatTab />
    </Tab>    
    <Tab icon={<EditorChartIcon color={green500}/>} title="Report">
      <ReportTab />
    </Tab>    
    <Tab icon={<FileFolderIcon color={purple300}/>} title="File">
      <FileFolderTab />
    </Tab> 
    <Tab icon={<HardwareVideogameAsset color={red500}/>} title="Game">
      <GameTab />
    </Tab>   
  </Tabs>
);

export default TabHeaders;

