import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    let ingredeints = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey + 1}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}:</span> {props.ingredients[igKey]}
                </li>
            )
        })
    return (
        <React.Fragment>
            <h3>Your Order:</h3>
            <p>A delicious burger with the following ingredeints:</p>
            <ul>
                {ingredeints}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.cancel} btnType="Danger">Cancel</Button>
            <Button clicked={props.continue} btnType="Success">Continue</Button>
        </React.Fragment>
    )
};

export default OrderSummary;
