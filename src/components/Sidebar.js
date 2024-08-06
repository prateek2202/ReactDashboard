import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import Home from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/AssessmentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';


function Sidebar() {
  return (
    <div style={{ width: 55, backgroundColor: '#1b1b1b', height: '151vh' }}>
      <List >
        <ListItem>
          <ListItemIcon>
            <Home style={{ color: '#7f70f7' }} />
          </ListItemIcon>
          <ListItemText style={{ color: '#fff' }} />
        </ListItem>
        <ListItem></ListItem>
        <ListItem >
          <ListItemIcon>
            <AssignmentIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText style={{ color: '#fff' }} />
        </ListItem>
        <ListItem></ListItem>
        <ListItem>
          <ListItemIcon>
            <AssignmentTurnedInOutlinedIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText  style={{ color: '#fff' }} />
        </ListItem>
        <ListItem></ListItem>
        <ListItem>
          <ListItemIcon>
            <AccountBalanceWalletOutlinedIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText style={{ color: '#fff' }} />
        </ListItem>
        <ListItem></ListItem>
        <ListItem>
          <ListItemIcon>
            <LocalMallOutlinedIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText style={{ color: '#fff' }} />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;