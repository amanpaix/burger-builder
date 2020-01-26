import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{ props.label }</div>
        <button 
            data-type={props.type} 
            className={classes.Less}
            onClick={props.removeIngredient}
            disabled={props.disabledInfo[props.type]}
        >
            Less
        </button>
        <button 
            data-type={props.type} 
            className={classes.More}
            onClick={props.addIngredient}
        >
            More
        </button>
    </div>
);

export default BuildControl;