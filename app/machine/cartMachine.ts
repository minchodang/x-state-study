import { assign, createMachine } from 'xstate';

export const cartMachine = createMachine(
    {
        types: {
            events: {} as { type: 'ADD_ITEM'; value: string } | { type: 'RESET' },
        },
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
            hold: {
                on: {
                    ADD_ITEM: {
                        actions: ['addItem'],
                    },
                    RESET: {
                        target: 'empty',
                        actions: ['resetItems'],
                    },
                },
            },
        },
        context: {
            items: [] as string[],
        },
        schemas: {
            events: { type: 'ICartEventTypes' },
        },
    },
    {
        actions: {
            addItem: assign({
                items: ({ context, event }) => {
                    if (event.type === 'ADD_ITEM') {
                        return [...context.items, event.value];
                    }
                    return context.items;
                },
            }),
            resetItems: assign({
                items: [],
            }),
        },
    }
);
