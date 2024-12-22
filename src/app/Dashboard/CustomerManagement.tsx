import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; 
import { 
  Box, 
  Grid, 
  List, 
  ListItem, 
  Divider, 
  Paper, 
  Typography, 
} from "@mui/material"; 
import Link from "next/link";
import React from "react"; 

const data = [ 
  { 
    status: "Succeeded", 
    customer: "K. Armstrong", 
    id: "RO1002", 
    date: "18/5/22 - 13:30:22 AM", 
    price: "$25.08", 
  }, 
  { 
    status: "Succeeded", 
    customer: "K. Armstrong", 
    id: "RO1002", 
    date: "18/5/22 - 13:30:22 AM", 
    price: "$25.08", 
  }, 
  { 
    status: "Succeeded", 
    customer: "K. Armstrong", 
    id: "RO1002", 
    date: "18/5/22 - 13:30:22 AM", 
    price: "$25.08", 
  }, 
  { 
    status: "Succeeded", 
    customer: "K. Armstrong", 
    id: "RO1002", 
    date: "18/5/22 - 13:30:22 AM", 
    price: "$25.08", 
  }, 
  { 
    status: "Succeeded", 
    customer: "K. Armstrong", 
    id: "RO1002", 
    date: "18/5/22 - 13:30:22 AM", 
    price: "$25.08", 
  }, 
  { 
    status: "Succeeded", 
    customer: "K. Armstrong", 
    id: "RO1002", 
    date: "18/5/22 - 13:30:22 AM", 
    price: "$25.08", 
  }, 
  { 
    status: "Succeeded", 
    customer: "K. Armstrong", 
    id: "RO1002", 
    date: "18/5/22 - 13:30:22 AM", 
    price: "$25.08", 
  }, 
  { 
    status: "Succeeded", 
    customer: "K. Armstrong", 
    id: "RO1002", 
    date: "18/5/22 - 13:30:22 AM", 
    price: "$25.08", 
  }, 
]; 

const CustomerManagement = (): JSX.Element => { 
  return ( 
    <Paper 
      elevation={1} 
      sx={{ 
        width: "100%", 
        height: 460, 
        borderRadius: 1, 
        overflow: "hidden", 
        border: 1, 
        borderColor: "#0077B6",
      }} 
    > 
      <Box sx={{ p: 2, display: "flex", justifyContent: "space-between" }}> 
        <Typography variant="h6" color="primary" fontWeight="bold"> 
          Customer management 
        </Typography> 
        <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
          <Link href="/Dashboard/CustomerManage">
            <Typography variant="body2" color="textSecondary">
                See detail
            </Typography>
            <ArrowForwardIosIcon fontSize="small" color="disabled" sx={{ ml: 0.5 }} />
          </Link>
        </Box>
      </Box> 
      <Box 
        sx={{ 
            p: 2, 
            backgroundColor: "#f9fafb", 
            borderRadius: 2, 
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" 
        }}    
      > 
        <Grid container spacing={2} sx={{ mb: 2, borderBottom: "1px solid #e0e0e0", pb: 1 }}>
            <Grid item xs={2}>
                <Typography variant="subtitle2" fontWeight="bold" color="primary">Status</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="subtitle2" fontWeight="bold" color="primary">Customer</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="subtitle2" fontWeight="bold" color="primary">ID</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="subtitle2" fontWeight="bold" color="primary">Date</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="subtitle2" fontWeight="bold" color="primary">Price</Typography>
            </Grid>
        </Grid>
        <List
            sx={{
                top: -10,
                maxHeight: 325,
                overflowY: "auto",
                "&::-webkit-scrollbar": { display: "none" }, 
                "scrollbar-width": "none",
            }}
        >
            {data.map((item, index) => (
                <React.Fragment key={index}>
                    <ListItem sx={{ py: 1.5, px: 0 }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={2}>
                                <Typography 
                                    variant="body2"
                                    sx={{
                                        backgroundColor: item.status === "Succeeded" ? "#27AE601A" : "#FFC1071A", 
                                        borderRadius: 1, 
                                        p: 0.5, 
                                        textAlign: "center", 
                                        color: item.status === "Succeeded" ? "#27AE60" : "#FFC107"
                                    }}
                                >
                                    {item.status}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="body2" color="textSecondary">
                                    {item.customer}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="body2" color="textSecondary">
                                    {item.id}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography variant="body2" color="textSecondary">
                                    {item.date}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant="body2" color="textPrimary" fontWeight="medium">
                                    {item.price}
                                </Typography>
                            </Grid>
                        </Grid>
                    </ListItem>
                    {index < data.length - 1 && (
                        <Divider sx={{ my: 1, borderColor: "#e0e0e0" }} />
                    )}
                </React.Fragment>
            ))}
        </List>
      </Box>

    </Paper> 
  ); 
}; 

export default CustomerManagement;