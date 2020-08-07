import React , {useEffect , useState} from 'react';
import Fade from 'react-reveal/Fade';
import NavigateNextSharpIcon from '@material-ui/icons/NavigateNextSharp';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import { userState } from '../store/States'
import { useRecoilState, useRecoilValue } from "recoil";

const About = () => {

const [user, setUser] = useRecoilState(userState);

        useEffect(() => {
                axios
                  .get(`http://127.0.0.1:8080/users/`)
                  .then((res) => {
                    setUser(res.data)      
                    console.log(res.data);
                  })
                  .catch((err) => console.log(err));
              }, []);

return(
    <div className="About">

        <div style={{height:'98vh'}}></div>
        <Fade right cascade duration="2000">
   
        <div className="aboutContent">
                <h3>AFRICAN MARKETPLACE</h3>
                <div className="aboutSingle">
                <p className="aboutText">Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty. 
                You will build a platform to enable these business owners to create listing for items they have for sale.</p>
                <IconButton style={{border:"2px solid white"}}><NavigateNextSharpIcon style={{color:'pink', fontSize:'5rem'}}/></IconButton>
                </div>

        </div>



        <div className="aboutContent">
                <h3>SILENT AUCTION</h3>
                <div className="aboutSingle">
                <p className="aboutText">Silent auctions are a popular fundraiser for many different kinds of organizations, especially charities.
                 This app will allow sellers and bidders to connect together in one place and allow for bidders to see items and place bids on them without
                having to physically be there.</p>
                <IconButton style={{border:"2px solid white"}}><NavigateNextSharpIcon style={{color:'pink', fontSize:'5rem'}}/></IconButton>
                </div>

        </div>
        

        <div className="aboutContent">
                <h3>WATER MY PLANTS</h3>
                <div className="aboutSingle">
                <p className="aboutText">Ensuring that all your plants are consistently watered is actually pretty difficult.
                Water My Plants is an app that helps to solve those problems. With an easy to use interface for creating a plant watering schedule tailored
                to each individual plant, WaterMyPlants will remind users when it's time to feed that foliage and quench your plants' thirst. </p>
                <IconButton style={{border:"2px solid white"}}><NavigateNextSharpIcon style={{color:'pink', fontSize:'5rem'}}/></IconButton>
                </div>

        </div>

        <div className="aboutContent">
                <h3>TO BE DETERMINED</h3>
                <div className="aboutSingle">
                <p className="aboutText">To be continued To be continued To be continued To be continued To be continued To be continued To be continued To be continued To be continued
                To be continued To be continued To be continued To be continued To be continued To be continued
                </p>
                <IconButton style={{border:"2px solid white"}}><NavigateNextSharpIcon style={{color:'pink', fontSize:'5rem'}}/></IconButton>
                </div>

        </div>

        {user.map((res) => (
                <div>

                </div>
                ))}

        </Fade>
    </div>
)
}

export default About;



