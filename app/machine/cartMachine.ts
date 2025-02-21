import { createMachine } from 'xstate';

export const cartMachine = createMachine(
    {
        id: 'cart',
        initial: 'empty',
        states: {
            empty: {
                on: {
                    ADD_ITEM: {
                        target: 'hold',
                        actions: ['addItem'],
                    },
                },
            },
            hold: {},
        },
        context: {
            items: [],
        },
    },
    {
        actions: {
            addItem: ({ context, event, self }, params) => {
                context.items.push(params?.item);
                console.log(context.items);
            },
        },
    }
);
