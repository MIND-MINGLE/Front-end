import React from 'react';
import { Box } from '@mui/material';
import NavBar from './NavBar';
import Header from './Header';
import CustomerTracking from './CustomerTracking';
import CustomerManagement from './CustomerManagement';
import AppointmentManagement from './AppointmentManagement';
import ChatSection from './ChatSection';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', minWidth: 240, flex: 1, overflowX: 'hidden' }}>
      <Box>
        <NavBar />
      </Box>
      <main>
        <Header />
        <Box
          sx={{
            height: 1037,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 2,
            width: '100%',
            '@media (max-width: 991px)': {
              gridTemplateColumns: '1fr',
            },
            bgcolor: "white"
          }}
        >
          <Box sx={{ gridColumn: 1, ml: 10, mt: 3, width: 800 }}>
            <CustomerTracking />
          </Box>
          <Box sx={{ gridColumn: '2', marginLeft: '-200px', mt: 3, width: 650 }}>
            <CustomerManagement />
          </Box>
          <Box sx={{ gridColumn: 'span 1.9', ml: 10, mt:'-40px', width: "1000px" }}>
            <AppointmentManagement />
          </Box>
          <Box sx={{ gridColumn: 'span 1', mt:'-40px', width: 450 }}>
            <ChatSection />
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default Dashboard;