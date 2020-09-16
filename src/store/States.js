import {atom} from 'recoil';

const userState = atom({
    key: "user",
    default: 
        [{username:"Guest" }]
    
});

export { 
    userState}