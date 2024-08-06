import React from 'react';
import { List, ListItem, ListItemText, Avatar, Typography, Box } from '@mui/material';

const feedbacks = [
  {
    name: 'Jenny Wilson',
    feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger and greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    avatar: 'https://i.pravatar.cc/300?img=1',
    rating: 5
  },
  {
    name: 'Dianne Russell',
    feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    avatar: 'https://i.pravatar.cc/300?img=2',
    rating: 4
  },
  {
    name: 'Devon Lane',
    feedback: 'Normally wines are white, but theirs are lean meaty and tender and almost have a cockscomb texture, love it.',
    avatar: 'https://i.pravatar.cc/300?img=3',
    rating: 4
  }
];

function CustomerFeedback() {
  return (
    <Box sx={{ height: '100%' }}>
      <Typography variant="h6" sx={{ color: '#fff', marginBottom: 2 }}>
        Customer's feedback
      </Typography>
    <List>
      {feedbacks.map((feedback, index) => (
        <ListItem key={index} sx={{ borderBottom: '1px solid #444' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
            <Avatar src={feedback.avatar} alt={feedback.name} />
          </Box>
          <ListItemText
            primary={<Typography variant="body1" sx={{ color: '#fff' }}>{feedback.name}</Typography>}
            secondary={
              <>
                <Typography variant="body2" sx={{ color: '#aaa' }}>{feedback.feedback}</Typography>
                <Typography variant="body2" sx={{ color: 'gold' }}>{'★'.repeat(feedback.rating)}</Typography>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
    </Box>
  );
}

export default CustomerFeedback;