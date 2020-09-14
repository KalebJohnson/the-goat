import {atom} from 'recoil';

const userState = atom({
    key: "user",
    default: 
        [{id:{}, name:"Who the fuck are you?", bike:"Get a bike, loser" }]
    
});

export { 
    userState}