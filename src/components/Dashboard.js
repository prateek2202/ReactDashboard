import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import ShoppingBagTwoToneIcon from '@mui/icons-material/ShoppingBagTwoTone';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import MenuComponent from './MenuComponent';


function Dashboard() {
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={2}>
        <Paper sx={{ padding: 2, backgroundColor: '#1b1b1b' }}>
          <ShoppingBagTwoToneIcon style={{ color: '#5833ff' }} />
          <Typography variant="h6">Total Orders</Typography>
          <Typography variant="h4" >75</Typography>
          <Typography variant="h6" color='#14fc05'><ArrowDropUpIcon style={{ color:'#14fc05'}}/>3%</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={2}>
        <Paper sx={{ padding: 2, backgroundColor: '#1b1b1b' }}>
        <ShoppingBagTwoToneIcon style={{ color: '#14fc05' }} />
          <Typography variant="h6">Total Delivered</Typography>
          <Typography variant="h4">70</Typography>
          <Typography variant="h6" color='#fc0505'><ArrowDropDownIcon style={{ color:'#fc0505'}}/>3%</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={2}>
        <Paper sx={{ padding: 2, backgroundColor: '#1b1b1b' }}>
        <ShoppingBagTwoToneIcon style={{ color: '#fc0505' }} />
          <Typography variant="h6">Total Cancelled</Typography>
          <Typography variant="h4">5</Typography>
          <Typography variant="h6" color='#14fc05'><ArrowDropUpIcon style={{ color:'#14fc05'}}/>3%</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={2}>
        <Paper sx={{ padding: 2, backgroundColor: '#1b1b1b' }}>
          <PriceChangeIcon style={{ color: '#ff31dd' }} />
          <Typography variant="h6">Total Revenue</Typography>
          <Typography variant="h4">$12k</Typography>
          <Typography variant="h6" color='#fc0505'><ArrowDropDownIcon style={{ color:'#fc0505'}}/>3%</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 2, backgroundColor: '#1b1b1b' }}>
          <MonetizationOnRoundedIcon style={{ color: '#14fc05' }} />
          <Typography variant="h6">Net Profit</Typography>
          <Typography variant="h4">$6759.25</Typography>
          <Typography variant="h6" color='#14fc05'><ArrowDropUpIcon style={{ color:'#14fc05'}}/>3%</Typography>
          
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={{ padding: 2, backgroundColor: '#1b1b1b' }}>
          <ActivityChart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 2, backgroundColor: '#1b1b1b' }}>
          <MenuComponent />
        </Paper>
      </Grid>
      
      <Grid item xs={12} md={8}>
        <Paper sx={{ padding: 2, backgroundColor: '#1b1b1b' }}>
          <RecentOrders />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 2, backgroundColor: '#1b1b1b' }}>
          <CustomerFeedback />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;