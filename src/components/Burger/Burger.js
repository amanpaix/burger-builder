import React, { Component } from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';


class Burger extends Component {
    render() {
        let ingredients = Object.keys(this.props.ingredients)
        .map((value) => {
            return [...Array(this.props.ingredients[value])].map((v, i) => {
                return <BurgerIngredient key={value + i} type={value} />
            });
        }); 
        ingredients = ingredients.filter(v => v.length);
        if(ingredients.length === 0) {
            ingredients = "Please start adding ingredients!";
        }
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