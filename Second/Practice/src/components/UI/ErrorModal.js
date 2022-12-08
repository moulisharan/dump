import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import React from 'react';


const ErrorModal =(props)=>{

    return(
        <React.Fragment>

        <div className={classes.backdrop} onClick={props.onConfirm} />
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div  className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.action}>
            <Button onClick={props.onConfirm}>Okay</Button>
            </footer>

        </Card>
        </React.Fragment>

    );

}


export default ErrorModal;