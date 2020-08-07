import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 6px',
    backgroundColor: 'rgb(32, 9, 37)',
    color: 'white',
    borderBottom: '3px solid black',
    width:'100%',
    marginBottom:'8rem'
  },
  secondaryTail: {
    backgroundColor: 'hotpink'
  },
  dot: {
    marginTop:'rem'
  }
}));

export default function TimeLine() {
  const classes = useStyles();

  return (
    <Timeline align="left" height="100%" style={{marginTop:'6rem'}}>
      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined">

          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h7" component="h1">
              FRONT END
            </Typography>
            <Typography>Create landing page while utilizing LESS/CSS, HTML5, and Javascript</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineDot color="secondary" variant="outlined">

          </TimelineDot>
          <TimelineConnector  className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h7" component="h1">
              REACT FRONTEND DEV
            </Typography>
            <Typography>Create dynamic react front end utilizing animations, routing, and form data handling practices</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined">

          </TimelineDot >
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h7" component="h1">
              REACT FRONTEND DEV
            </Typography>
            <Typography>Create react frontend functionality utilizing 3rd party state management, full CRUD operations, including user authentication. </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" variant="outlined">

          </TimelineDot>
          <TimelineConnector  className={classes.secondaryTail}/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h7" component="h1">
              NODE.JS BACKEND DEV
            </Typography>
            <Typography>To be continued To be continued To be continued To be continued To be continued To be continued To be continued To be continued To be continued</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}