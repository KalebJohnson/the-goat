import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import axios from 'axios'
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

function Modallog() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    password:"",
    repassword:"",
  });


  const [ login , setLogin ] = useState({
      username:"",
      password:""
  })

  const schema = yup.object().shape({
    username: yup.string().required("Please enter a username"),
    password: yup.string().min(4,"Seems a little short").required("Please enter a password"),
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
    console.log(login);

    setLogin({...login, [event.target.name]: event.target.value});
};


  const onSubmit = (e) => {

    e.preventDefault();

    const payload = login
    axios.post('https://buildweektester.herokuapp.com/auth/login', payload)
        .then((res) => {
            console.log('login')
            localStorage.setItem('token', (res.data.token))
            console.log(res.data)
            localStorage.setItem('userID', res.data.userid)
        })
        .catch((err) => console.log(err))
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
        Login
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
            <h2 id="transition-modal-title">Login</h2>

            <form onSubmit={onSubmit} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",}}>

<input style={{margin:".5rem"}}
    type='text'
    placeholder='Username'
    name='username'
    value={login.username}
    onChange={handleChanges}
    
/>
{errors.username && <p style={{color:"red"}}>Please enter your username</p>}

<input style={{margin:".5rem"}}
    type='password'
    placeholder='Password'
    name='password'
    value={login.password}
    onChange={handleChanges}

/>
{errors.password && <p style={{color:"red"}}>Please enter a password</p>}




    <Button type='submit'>Submit</Button>


</form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}




export default Modallog;