import React from 'react'
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Navbar = () => {
  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center", height:"50px", background:"black", color:"white"}}>
       <NewspaperIcon fontSize='large'></NewspaperIcon>
        <h1>NEWS</h1>
    </div>
  )
}

export default Navbar