import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <div>Current Price: {props.totalPrice.toFixed(2) || 0}</div>
        {
            controls.map(control => <BuildControl
                type={control.type}
                key={control.label}
                label={control.label}
                addIngredient={props.addIngredient}
                removeIngredient={props.removeIngredient}
                disabledInfo={props.disabledInfo}
            />
            )
        }
        <button 
            disabled={!props.purchasable} 
            className={classes.OrderButton}
            onClick={props.ordered}
        >
            ORDER NOW
        </button>
    </div>
);

export default BuildControls;