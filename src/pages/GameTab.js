import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const GameItem = ()=>(
  <Paper style={style} zDepth={3} circle={true}> ★ </Paper>
);

const GameTab = () => (
  <div>
    <GameItem />
    <GameItem />
    <GameItem />
    <GameItem />
    <GameItem />
    <GameItem />
    <GameItem />
    <GameItem />
    <GameItem />
    <GameItem />
    <GameItem />
    <GameItem />
    <GameItem />
  </div>
);

export default GameTab;