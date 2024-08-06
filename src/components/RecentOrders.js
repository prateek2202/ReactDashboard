import React from 'react';
import { List, ListItem, ListItemText, Typography, Avatar, Box } from '@mui/material';

const orders = [
  { name: 'Wade Warren', orderNo: '154923826', amount: '$124.00', status: 'Delivered', avatar: 'https://i.pravatar.cc/300?img=3' },
  { name: 'Jane Cooper', orderNo: '48967588', amount: '$285.00', status: 'Delivered', avatar: 'https://i.pravatar.cc/300?img=4' },
  { name: 'Guy Hawkins', orderNo: '789952715', amount: '$45.88', status: 'Cancelled', avatar: 'https://i.pravatar.cc/300?img=5' },
  { name: 'Kristin Watson', orderNo: '20965732', amount: '$85.00', status: 'Pending', avatar: 'https://i.pravatar.cc/300?img=6' },
  { name: 'Cody Fisher', orderNo: '95715520', amount: '$545.00', status: 'Delivered', avatar: 'https://i.pravatar.cc/300?img=7' },
  { name: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', avatar: 'https://i.pravatar.cc/300?img=8' },
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'Delivered':
      return { color: 'green' };
    case 'Cancelled':
      return { color: 'red' };
    case 'Pending':
      return { color: 'orange' };
    default:
      return { color: 'grey' };
  }
};

function RecentOrders() {
  return (
    <Box sx={{ height: '100%' }}>
      <Typography variant="h6" sx={{ color: '#fff', marginBottom: 2 }}>
        Recent Orders
      </Typography>
      <List>
        {orders.map((order, index) => (
          <ListItem key={index} sx={{ borderBottom: '1px solid #444', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={order.avatar} alt={order.name} sx={{ marginRight: 2 }} />
              <ListItemText
                primary={<Typography variant="body1" sx={{ color: '#fff' }}>{order.name}</Typography>}
                secondary={<Typography variant="body2" sx={{ color: '#aaa' }}>Order No: {order.orderNo}</Typography>}
              />
            </Box>
            <Typography variant="body1" sx={{ color: '#fff' }}>{order.amount}</Typography>
            <Typography variant="body1" sx={getStatusStyle(order.status)}>{order.status}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default RecentOrders;