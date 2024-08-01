import Home from './header';
import * as React from 'react';
import {Stack,Card,CardMedia,CardContent,Typography,Rating,Button,IconButton,TextField} from '@mui/material';
import T from '../images/pp.webp';
import Karasev from '../images/Karasev.webp';
import Mixture from '../images/Mixture.webp';
import Seeval from '../images/Seeval.webp';
import './all.css';
import Footer from './footer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


import {Dialog,DialogTitle, styled} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

function Tamil(){
    
    const [value, setValue] = React.useState(2);
//popup
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
//popup-end
    return(
        <div>
            <div><Home/></div>

            <div style={{padding:20}}>
                <Stack direction="row" spacing={2} className='b1'>
                    <Card sx={{maxHeight:3500,maxWidth:350}}>
                    <CardMedia sx={{height:150,weight:150}} image={Karasev}/>
                    <CardContent>
                    Karasev<br/>
                    Rs. 269.00
                    <div sx={{'& > legend': { mt: 2 },}}>
                        <Rating value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                    </div>
                    <Button variant="contained" onClick={handleClickOpen} style={{color:'white',backgroundColor:'rgb(65, 164, 197)',borderRadius:'5%',width:'100%'}}>Add to Cart</Button>
                    </CardContent>
                    </Card>

                    <Card sx={{maxHeight:350,maxWidth:350}}>
                    <CardMedia sx={{height:150,weight:150}} image={Seeval}/>
                    <CardContent>
                    Seeval<br/>
                    Rs. 169.00
                    <div sx={{'& > legend': { mt: 2 },}}>
                        <Rating value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                    </div>
                    <Button variant="contained" onClick={handleClickOpen} style={{color:'white',backgroundColor:'rgb(65, 164, 197)',borderRadius:'5%',width:'100%'}}>Add to Cart</Button>
                    </CardContent>
                    </Card>
                    
                    <Card sx={{maxHeight:350,maxWidth:350}}>
                    <CardMedia sx={{height:150,weight:150}} image={T}/>
                    <CardContent>
                    Pickle<br/>
                    Rs. 269.00
                    <div sx={{'& > legend': { mt: 2 },}}>
                        <Rating value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                    </div>
                    <Button variant="contained" onClick={handleClickOpen} style={{color:'white',backgroundColor:'rgb(65, 164, 197)',borderRadius:'5%',width:'100%'}}>Add to Cart</Button>
                    </CardContent>
                    </Card>

                    <Card sx={{maxHeight:350,maxWidth:350}}>
                    <CardMedia sx={{height:150,weight:150}} image={Mixture}/>
                    <CardContent>
                    Mixture<br/>
                    Rs. 369.00
                    <div sx={{'& > legend': { mt: 2 },}}>
                        <Rating value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                    </div>
                    <Button variant="contained" onClick={handleClickOpen} style={{color:'white',backgroundColor:'rgb(65, 164, 197)',borderRadius:'5%',width:'100%'}}>Add to Cart</Button>
                    </CardContent>
                    </Card>
                    
                </Stack>
            </div>
            <div style={{padding:20}}>
                <Stack direction="row" spacing={2} className='b1'>
                    <Card sx={{maxHeight:3500,maxWidth:350}}>
                    <CardMedia sx={{height:150,weight:150}} image={Karasev}/>
                    <CardContent>
                    Karasev<br/>
                    Rs. 269.00
                    <div sx={{'& > legend': { mt: 2 },}}>
                        <Rating value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                    </div>
                    <Button variant="contained" onClick={handleClickOpen} style={{color:'white',backgroundColor:'rgb(65, 164, 197)',borderRadius:'5%',width:'100%'}}>Add to Cart</Button>
                    </CardContent>
                    </Card>

                    <Card sx={{maxHeight:350,maxWidth:350}}>
                    <CardMedia sx={{height:150,weight:150}} image={T}/>
                    <CardContent>
                    Pickle<br/>
                    Rs. 269.00
                    <div sx={{'& > legend': { mt: 2 },}}>
                        <Rating value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                    </div>
                    <Button variant="contained" onClick={handleClickOpen} style={{color:'white',backgroundColor:'rgb(65, 164, 197)',borderRadius:'5%',width:'100%'}}>Add to Cart</Button>
                    </CardContent>
                    </Card>

                    <Card sx={{maxHeight:350,maxWidth:350}}>
                    <CardMedia sx={{height:150,weight:150}} image={Mixture}/>
                    <CardContent>
                    Mixture<br/>
                    Rs. 369.00
                    <div sx={{'& > legend': { mt: 2 },}}>
                        <Rating value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                    </div>
                    <Button variant="contained" onClick={handleClickOpen} style={{color:'white',backgroundColor:'rgb(65, 164, 197)',borderRadius:'5%',width:'100%'}}>Add to Cart</Button>
                    </CardContent>
                    </Card>
                    
                    <Card sx={{maxHeight:350,maxWidth:350}}>
                    <CardMedia sx={{height:150,weight:150}} image={Seeval}/>
                    <CardContent>
                    Seeval<br/>
                    Rs. 169.00
                    <div sx={{'& > legend': { mt: 2 },}}>
                        <Rating value={value} onChange={(event, newValue) => {setValue(newValue);}}/>
                    </div>
                    <Button variant="contained" onClick={handleClickOpen} style={{color:'white',backgroundColor:'rgb(65, 164, 197)',borderRadius:'5%',width:'100%'}}>Add to Cart</Button>
                    </CardContent>
                    </Card>
                </Stack>
            </div>
            

            <div className='b1'><Button variant="contained" style={{color:'white',backgroundColor:'orange',borderRadius:'5%'}}>View More</Button></div>
            <br/>




    <React.Fragment className='bb1'>
      
      <BootstrapDialog onClose={handleClose} open={open}>
        <IconButton onClick={handleClose} sx={{position: 'absolute',right: 8,top: 8,color: (theme) => theme.palette.grey[500],}}>
          <CloseIcon />
        </IconButton>
        <DialogTitle sx={{ m: 2, p: 2 }} id="customized-dialog-title">Tamilnadu Mixture</DialogTitle>
        <Typography style={{textAlign:'center'}}>Rs. 209.00<br/>Quantity:250gm</Typography>

        <Stack direction={'row'} spacing={1} style={{ alignItems: 'center',marginLeft:'35px'}}>
            <TextField label="Count" type="number" variant="standard" />
            <FavoriteBorderIcon style={{width:'20%'}}/>
        </Stack>
        <br/>
        <Stack spacing={1} style={{ alignItems: 'center' }}>
          <Button style={{color:'white',backgroundColor:'rgb(65, 164, 197)',width:'90%'}}>ADD TO CART</Button>
          <Button style={{color:'white',backgroundColor:'black',width:'90%'}}>BUY IT NOW</Button><br/>
        </Stack>

      </BootstrapDialog>

    </React.Fragment>





            <Footer/>
        </div>
        
    );
}

export default Tamil;