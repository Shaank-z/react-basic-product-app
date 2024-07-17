import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Addprdct = () => {
  return (
    <div>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
        <TextField id="outlined-basic" label="Productname" variant="outlined" />
        </div>
     <div>
     <TextField id="filled-basic" label="Description" variant="outlined" />
     </div>
      <div>
      <TextField id="standard-basic" label="Prize" variant="outlined" />
      </div>
      <div>
      <TextField id="standard-basic" label="Category" variant="outlined" />
      </div>
      <div>
        <Button variant="contained">Search</Button>
      </div>
    </Box>
    </div>
  )
}

export default Addprdct