import cart from './assets/mbrishoppingcart_99558.svg';

//lo importo en el navbar pq quiero que este dentro de el.
const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt='cart-widget'/>
            0
        </div>
    )
}

export default CartWidget;