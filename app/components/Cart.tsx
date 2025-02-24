import { useActor, useMachine } from '@xstate/react';
import { cartMachine } from '~/machine/cartMachine';

const Cart = () => {
    const [state, send] = useMachine(cartMachine);

    return (
        <div>
            <h1>{String(state.value)}</h1>
            <ul>
                {state.context.items.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <br />
            <section className="flex flex-col gap-2 w-full border">
                <button className="w-fit" onClick={() => send({ type: 'ADD_ITEM', value: `item${Date.now()}` })}>
                    Add Item
                </button>
                <button className="w-fit" onClick={() => send({ type: 'RESET' })}>
                    Reset
                </button>
            </section>
        </div>
    );
};

export default Cart;
