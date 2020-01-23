import React, { Component } from 'react';
import classes from './Burger.module.css';

import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
class Burger extends Component {
    render() {
        console.log(this.props.ingredients);
        const ingredients = Object.keys(this.props.ingredients)
        .map((value) => {
            return [...Array(this.props.ingredients[value])].map((v, i) => {
                return <BurgerIngredient key={value + i} type={value} />
            });
        });
        return (
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top" />
                {ingredients}
                <BurgerIngredient type="bread-bottom" />
            </div>
        )
    }
}

export default Burger;