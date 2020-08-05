import React from 'react';
import Fade from 'react-reveal/Fade';
import NavigateNextSharpIcon from '@material-ui/icons/NavigateNextSharp';
import IconButton from '@material-ui/core/IconButton';

const About = () => {
return(
    <div className="About">
        <Fade right cascade duration="2000">
        <div className="aboutContent">
                <h3>MAGNA SED NULLAM NISL ADIPISCING</h3>
                <div className="aboutSingle">
                <p>sit amet consectetur adipiscing elit.
                Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum.
                Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.</p>
                <IconButton><NavigateNextSharpIcon style={{color:'pink', fontSize:'5rem'}}/></IconButton>
                </div>

        </div>



        <div className="aboutContent">
                <h3>MAGNA SED NULLAM NISL ADIPISCING</h3>
                <div className="aboutSingle">
                <p>sit amet consectetur adipiscing elit.
                Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum.
                Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.</p>
                <IconButton><NavigateNextSharpIcon style={{color:'pink', fontSize:'5rem'}}/></IconButton>
                </div>

        </div>
        

        <div className="aboutContent">
                <h3>MAGNA SED NULLAM NISL ADIPISCING</h3>
                <div className="aboutSingle">
                <p>sit amet consectetur adipiscing elit.
                Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum.
                Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.</p>
                <IconButton><NavigateNextSharpIcon style={{color:'pink', fontSize:'5rem'}}/></IconButton>
                </div>

        </div>
        </Fade>
    </div>
)
}

export default About;



