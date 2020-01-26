import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    purchaseHandler = () => {
        this.setState({
            purchasing: true
        });
    }

    purchaseCancel = () => {
        this.setState({
            purchasing: false
        });
    }

    purchaseContinueHandler = () => {
        alert('You Continue');
    }

    updatePurchaseState = () => {
        this.setState(state => {
            let ingredients = state.ingredients;
            let sum = Object.values(ingredients).reduce((f, s) => f + s);
            return {
                purchasable: sum > 0
            };
        });
    }

    addIngredient = (event) => {
        let type = event.target.dataset.type;
        this.setState(state => {
            let ingredients = state.ingredients;
            ingredients[type] += 1;
            let price = state.totalPrice + INGREDIENT_PRICE[type];
            return {
                ingredients: ingredients,
                totalPrice: price
            }
        }, this.updatePurchaseState);
    }

    removeIngredient = (event) => {
        let type = event.target.dataset.type;
        this.setState(state => {
            let ingredients = state.ingredients;
            if(ingredients[type] === 0) {
                return {};
            }
            ingredients[type] -= 1;
            let price = state.totalPrice - INGREDIENT_PRICE[type];
            return {
                ingredients: ingredients,
                totalPrice: price
            }
        }, this.updatePurchaseState);
    }

    render() {
        let disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0 ? true : false;
        }
        return (
            <React.Fragment>
                <Modal 
                    purchasing={this.state.purchasing} 
                    modalClosed={this.purchaseCancel}
                >
                    <OrderSummary 
                        continue={this.purchaseContinueHandler} 
                        cancel={this.purchaseCancel} ingredients={this.state.ingredients} 
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    disabledInfo={disabledInfo} 
                    addIngredient={this.addIngredient}  
                    removeIngredient={this.removeIngredient} 
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;