import React , {useEffect , useState} from 'react';
import Fade from 'react-reveal/Fade';
import NavigateNextSharpIcon from '@material-ui/icons/NavigateNextSharp';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import { userState } from '../store/States'
import { useRecoilState, useRecoilValue } from "recoil";

const About = () => {

const [user, setUser] = useRecoilState(userState);

const UserID = user.id

function deleteUser(UserID) {
        axios
          .delete(`http://127.0.0.1:8080/users/:id`,)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }

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
        <Fade right cascade duration="2000">
        <div style={{height:'98vh'}}></div>
        
                  
  
        

        {user.map((res) => (

                <div className="aboutContent">
                        <h3>{res.name}</h3>
                        <div className="aboutSingle">
                        <p className="aboutText">{res.bio}
                        </p>
                        <IconButton onClick={deleteUser()} style={{border:"2px solid white"}}><NavigateNextSharpIcon style={{color:'pink', fontSize:'5rem'}}/></IconButton>
                        </div>
                </div>
                ))}

        </Fade>
    </div>
)
}

export default About;



