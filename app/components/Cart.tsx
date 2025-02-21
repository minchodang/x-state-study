import { useActor, useMachine } from '@xstate/react';
import { cartMachine } from '~/machine/cartMachine';

const Cart = () => {
    const [state, send] = useMachine(cartMachine);

    return (
        <div>
            <h1>{String(state.value)}</h1>
            <button onClick={() => send({ type: 'ADD_ITEM' })}>Add Item</button>
        </div>
    );
};

export default Cart;
