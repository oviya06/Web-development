
import * as React from 'react';
import {Stack,Typography,Button,Box,TextField} from '@mui/material';
import './footer.css';
import Logo from "../images/logo.avif";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer(){

    return(
        <div>
            <div className='b2'>
                <Stack direction={'row'} spacing={10} className='b1'>

                    <Stack direction={'column'}>
                        <Box style={{color:'white'}}>
                            <img src={Logo} />
                            <Typography>A Fouvi Brand</Typography>
                            <br/>
                            <Typography>10 Schalks Crossing <br/> Rd,Plainsboro, NJ USA</Typography>
                            <br/>
                            <Typography>No.15-1, VLB Nagar,<br/>Coimbatore, TN IND</Typography>
                            <br/>
                            <Stack direction={'row'} spacing={2}>
                            <FacebookIcon/>
                            <TwitterIcon/>
                            <InstagramIcon/>
                            <LinkedInIcon/>
                            <YouTubeIcon/>
                            </Stack>
                        </Box>
                    </Stack>

                    <Stack direction={'column'}>
                        <Box style={{color:'white'}}>
                            <Typography style={{textAlign:'center',marginTop:'16%'}}>ABOUT US</Typography>
                            <br/>
                            <Stack>
                                <Button style={{color:'white'}}>Our Story</Button>
                                <Button style={{color:'white'}}>Careers</Button>
                                <Button style={{color:'white'}}>Get A Pack, Give A Pack</Button>
                                <Button style={{color:'white'}}>CUSTOMER REVIEWS</Button>
                                <Button style={{color:'white'}}>News & Media</Button>
                            </Stack>
                        </Box>
                    </Stack>

                    <Stack direction={'column'} >
                        <Box style={{color:'white'}}>
                            <Typography style={{textAlign:'center'}}>SUPPORT</Typography>
                            <br/>
                            <Stack >
                                <Button style={{color:'white'}}>Contact Us</Button>
                                <Button style={{color:'white'}}>FAQs</Button>
                                <Button style={{color:'white'}}>Duties & Clearance</Button>
                                <Button style={{color:'white'}}>Partner With Us</Button>
                            </Stack>
                        </Box>
                    </Stack>

                    <Stack direction={'column'}>
                        <Box style={{color:'white'}}>
                            <Typography style={{textAlign:'center'}}>VANGA OORLA VANGALAM</Typography>
                            <br/>
                            <Typography>Sign up to get exclusive offers,<br/>the latest oorla specials, and more!</Typography>
                            <br/>
                            <Stack direction={'row'}>
                                <TextField label="Your email address" variant="outlined" size="small"style={{maxHeight:'2px'}}/>
                                <Button variant="contained" style={{backgroundColor:'white',color:'rgb(65, 164, 197)'}}>Subscribe</Button>
                            </Stack>
                        </Box>
                    </Stack>

                </Stack>

                <hr style={{width:'80%',color:"white",alignContent:'center'}}/>
                <Box style={{width: '80%', color: "white"}}>
                        <Button style={{color:'white',marginLeft:'23%'}}>Tamil Nadu Sweets & Snacks </Button>|<Button style={{color:'white'}}> Palakara Petti</Button> | <Button style={{color:'white'}}>Srivilliputhur Palkova</Button> | <Button style={{color:'white'}}>South Indian Homemade Pickle</Button> 
                        |<Button style={{color:'white',marginLeft:'23%'}}>Tirunelveli Halwa</Button>|<Button style={{color:'white'}}>Kayalpattinam Dum Adai</Button>| <Button style={{color:'white'}}>Andhra & Telangana Pickles </Button>|<Button style={{color:'white'}}>Chennai Dum Ka Roat Halwa</Button>
                        |<Button style={{color:'white',marginLeft:'23%'}}>Tamil Nadu Snacks</Button>| <Button style={{color:'white'}}>Ooty Varkey</Button> |<Button style={{color:'white'}}>Thoothukudi Macaroons</Button>  | <Button style={{color:'white'}}>Traditional Handloom Soft Silk Sarees</Button> 
                        |<Button style={{color:'white',marginLeft:'23%'}}>Palakara Petti</Button>  |<Button style={{color:'white'}}>Tamil Nadu Sweets</Button>|<Button style={{color:'white'}}>Nannari Root Syrup</Button>|<Button style={{color:'white'}}>Ooty Premium Tea</Button>| <Button style={{color:'white'}}>Ooty Coconut Balls </Button>
                        |<Button style={{color:'white',marginLeft:'23%'}}>Thoothukudi Wine Biscuits</Button>|<Button style={{color:'white'}}>Nagercoil Nendran Chips</Button>|<Button style={{color:'white'}}>Kilakarai Ottu Maavu</Button>|<Button style={{color:'white'}}>Karur Thenga Mittai</Button>
                  
                </Box>
            </div>
            <div>
                <Stack direction={'row'} spacing={30} className='b1'>
                    <Typography>Copyright © 2024 Oorla all rights reserved.</Typography>
                    <Typography>Crafted by Team Cobay Logo Cobay</Typography>
                    <Stack direction={'row'} spacing={1}>
                        <Button>Privacy</Button>
                        <Button>Terms</Button>
                        <Button>Refunds</Button>
                        <Button>Shipping</Button>
                    </Stack>
                </Stack>
            </div>
        </div>
        
    );
}

export default Footer;