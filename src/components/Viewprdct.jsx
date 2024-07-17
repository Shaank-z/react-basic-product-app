import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'


const Viewprdct = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(' https://fakestoreapi.com/products').then((res)=>{
            setData(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[]) 
  return (
    <div>
        {
data.map((item)=>(
<Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography style={{fontStyle:'italic',textAlign:'left'}} variant="h5" component="div">
        Name:{item.title}
      </Typography>
      <Typography variant="h5" component="div" style={{textAlign:'left'}}>
        {/* be{bull}nev{bull}o{bull}lent */}
        Price:{item.price}
      </Typography>
      <Typography  variant="h5" component="div"style={{textAlign:'left'}}>
        Category:{item.category}
      </Typography>
      <Typography >
    <img src= {item.image} alt='no image' style={{width:'200px'}}/>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
        ))}

    </div>
  )
}

export default Viewprdct