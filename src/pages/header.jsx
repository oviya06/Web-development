import './header.css';
import PrimarySearchAppBar from "./search.jsx";
import Button from '@mui/material/Button';
import pic from "../images/oorla-1.webp";
import Andhra from "../images/andhra.webp";
import tamilnadu from "../images/tamilnadu.webp";
import kerala from "../images/kerala.webp";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {Link} from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';

function Home (){
    
    const [combo, setCombo] = React.useState('');

    const handleChange = (event) => {
      setCombo(event.target.value);
    };
    return(
        <div className='whole'>
            <div ><PrimarySearchAppBar/></div>
            <div className='box-1' >
                <Stack direction="row"spacing={1} style={{position:"center"}} marginLeft={30}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel style={{color:'white'}}>Combos</InputLabel>
                    <Select value={combo} onChange={handleChange} label="Combos">
                        <MenuItem >Palakara petti</MenuItem>
                        <MenuItem >Krishna Janmashtami Combo</MenuItem>
                        <MenuItem >Naadan Palahara Petti</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="text" style={{color:"white"}}>Tamil nadu</Button>

                <Button variant="text"style={{color:"white"}}>Kerala</Button>
                <Button variant="text"style={{color:"white"}}>Andhra & Telangana</Button>
                
                <Button variant="text"style={{color:"white"}}>Fashion</Button>
                <Button variant="text"style={{color:"white"}}>Store</Button>
                <Button variant="text"style={{color:"white"}}>Beverages</Button>
                <Button variant="text"style={{color:"white"}}>New Arrivals</Button>
                <Button variant="text"style={{color:"white"}}>Corporate Gifting</Button>
                </Stack>
            </div>
            <div className="box-2"><img src={pic} width={1472} height={270}/></div>
            <div className="box-3">
                <Stack direction="row" spacing={50} color={'white'}>
                    <h6>Flat 5% OFF above 750/-</h6>
                    <h6>Flat 10% OFF above 1300/-</h6>
                    <h6>Flat 15% OFF on Combos/-</h6>
                </Stack>
            </div>
            <div className="txt">
                <h5 style={{textAlign:'center',color:'orange',fontFamily:'monospace',fontSize:'150%'}}>Fall in love with Authentic Homemade South Indian pickle</h5>
            </div>
            <div>
                <Stack direction="row" spacing={5} className='child' >
                    <Paper><img src={Andhra} style={{width:300,height:300,borderRadius:'5%'}}/></Paper>
                    <Paper><img src={tamilnadu} style={{width:300,height:300,borderRadius:'5%'}}/></Paper>
                    <Paper><img src={kerala} style={{width:300,height:300,borderRadius:'5%'}}/></Paper>
                </Stack>
            </div>
            <div className='box-4'>
                <h5 style={{color:'rgb(241, 235, 76)',fontSize:'100%'}}>when life gives you pikles,just lick it!</h5>
                <Stack direction="row" spacing={5} className='child'style={{ marginTop: -20,paddingBottom:'0.5%'}}>
                    <Button variant="contained" style={{color:'black',backgroundColor:'white',borderRadius:'9%'}}><Link to='/' style={{textDecoration:"none",color:"black"}}>All</Link></Button>
                    <Button variant="contained" style={{color:'black',backgroundColor:'white',borderRadius:'9%'}}><Link to='/tamilnadu' style={{textDecoration:"none",color:"black"}}>Tamil nadu</Link></Button>
                    <Button variant="contained" style={{color:'black',backgroundColor:'white',borderRadius:'9%'}}><Link to='/ap' style={{textDecoration:"none",color:"black"}}>AP/TS</Link></Button>
                    <Button variant="contained" style={{color:'black',backgroundColor:'white',borderRadius:'9%'}}><Link to='/combo' style={{textDecoration:"none",color:"black"}}>Combo</Link></Button>
                </Stack>
            </div>
        </div>
        
    );
}

export default Home;