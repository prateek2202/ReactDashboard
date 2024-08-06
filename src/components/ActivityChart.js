import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography } from '@mui/material';

const data = [
  { name: '01', uv: 4000 },
  { name: '02', uv: 3000 },
  { name: '03', uv: 2000 },
  { name: '04', uv: 2780 },
  { name: '05', uv: 1890 },
  { name: '06', uv: 2390 },
  { name: '07', uv: 3490 },
  { name: '08', uv: 2000 },
  { name: '09', uv: 2780 },
  { name: '10', uv: 1890 },
  { name: '11', uv: 2390 },
  { name: '12', uv: 3490 },
  { name: '13', uv: 4000 },
  { name: '14', uv: 3000 },
  { name: '15', uv: 2000 },
  { name: '16', uv: 2780 },
  { name: '17', uv: 1890 },
  { name: '18', uv: 2390 },
  { name: '19', uv: 3490 },
  { name: '20', uv: 2000 },
  { name: '21', uv: 2780 },
  { name: '22', uv: 1890 },
  { name: '23', uv: 2390 },
  { name: '24', uv: 3490 },
  { name: '25', uv: 2780 },
  { name: '26', uv: 1890 },
  { name: '27', uv: 2390 },
];

function ActivityChart() {
  return (
    <Box sx={{height: '100%' }}>
      <Typography variant="h6" sx={{ color: '#fff', marginBottom: 2 }}>
        Activity
      </Typography>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip cursor={{ fill: '#333' }} contentStyle={{ backgroundColor: '#7f70f7 ', border: 'none', borderRadius: 4 }} />
          <Bar dataKey="uv" fill="#7754e5" barSize={20} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default ActivityChart;