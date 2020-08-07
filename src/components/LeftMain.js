import React from 'react';
import TimeLine from './TimeLine';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import DrawerP from './DrawerP';
import Slide from 'react-reveal/Fade';


const LeftMain = () => {

    function scrollWin(x, y) {
        window.scrollBy(x, y);
      }

return(
    <div className="LeftMain">
        <DrawerP/>
        <div className="TopLeft">
            <Fade left><hr></hr></Fade>
                <Fade duration='2500'>  <h2 style={{fontSize:'2rem'}}>“People don’t care about what you say, they care about what you build.” - Mark Zuckerberg</h2></Fade>
            <Fade right><hr></hr></Fade>
            <Fade>
                <p style={{ border:"1px solid white", padding:'1rem'}}>Simple, Lovely, and everything in between.</p>
                    <Flash duration='3000'>
                    <IconButton style={{color:'white'}} onClick={() => { scrollWin(0, 1050) }}><ArrowDownwardIcon style={{fontSize:'5rem', margin:'1rem'}}/></IconButton>
                    </Flash>
            </Fade>
        </div>
        

        <div style={{display:'flex', justifyContent:'right', height:"100%", width:'100%'}}>
        <TimeLine/>
        </div>

    
    </div>
)
}

export default LeftMain;



