import React  from 'react';
import Fade from 'react-reveal/Fade';
import { userState } from '../store/States'
import { useRecoilState, useRecoilValue } from "recoil";

const About = () => {

const [user, setUser] = useRecoilState(userState);




/*
  useEffect(() => {
                axios
                  .get(`https://buildweektester.herokuapp.com/auth/users/`)
                  .then((res) => {
                    setUser(res.data)      
                    console.log(res.data);
                  })
                  .catch((err) => console.log(err));
              }, []);
*/


return(
    <div className="About">
        <Fade right cascade duration="2000">
        <div style={{height:'98vh'}}></div>
        
                  
  
        

        {user.map((res) => (

                <div className="aboutContent">
                        <h3>Logins will be:</h3>
                        <div className="aboutSingle">
                        <p className="aboutText">test1 - test4
                        password will be : password

                        </p>
                        </div>
                </div>
                ))}

        </Fade>
    </div>
)
}

export default About;



