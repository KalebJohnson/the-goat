import React , { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import {userState} from '../store/States'
import * as yup from 'yup';


const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width:"30rem"
    },
  }));

function Modalreg() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState({
        username: "",
        password:"",
        repassword:"",
      });
 
    const [register, setRegister] = useState({
        name: "",
        password:"",
        repassword:""
      });

      const schema = yup.object().shape({
        username: yup.string().required("Please enter a username"),
        password: yup.string().min(8,"Seems a little short").required("Please enter a password"),
        repassword:yup.string().required("Please confirm your password"),
    })

    const validate = (event) => {
        yup.reach(schema, event.target.name)
        .validate(event.target.value)
        .then( valid =>{
            setErrors({
                ...errors,
                [event.target.name]: ""
            })

        })
        .catch(err => {

            setErrors({
                ...errors,
                [event.target.name]: err.errors[0]
            })
        })
      };

    
    
      const handleChanges = event => {
        event.persist()
        validate(event)
        
        setRegister({...register, [event.target.name]: event.target.value});
    };



    const onSubmit = (e) => {
        
        e.preventDefault();

        if(register.password === register.repassword){
        const payload = register
        axios.post('https://buildweektester.herokuapp.com/auth/register', payload)
            .then((res) => {
                console.log('register')
                console.log(res.data)

            })
            .catch((err) => console.log(err))
        } else {window.alert("Please make sure your passwords match!")}
    }
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <div>
        <Button type="button" style={{color:"white"}} onClick={handleOpen}>
          Register
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Register</h2>

                        <form onSubmit={onSubmit} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",}}>

                        <input style={{margin:".5rem"}}
                            type='text'
                            placeholder='Username'
                            name='username'
                            value={register.username}
                            onChange={handleChanges}
                            
                        />
                        {errors.username && <p style={{color:"red"}}>Please enter a username</p>}
                       
                        <input style={{margin:".5rem"}}
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={register.password}
                            onChange={handleChanges}
                        />
                        {errors.password && <p style={{color:"red"}}>Your password must contain at a minimum 8 characters.</p>}

                        <input style={{margin:".5rem"}}
                            value={register.repassword}
                            type= "password"
                            name="repassword"
                            id="repassword"
                            placeholder="Re-enter password"
                            onChange={handleChanges}
                        />
                        
                        


                        
                            <button type='submit'>Submit</button>
                        

                    </form>

            </div>
          </Fade>
        </Modal>
      </div>
    );
  }


  export default Modalreg;