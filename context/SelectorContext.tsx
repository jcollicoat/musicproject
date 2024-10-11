'use client';

import {
    createContext,
    Dispatch,
    FC,
    PropsWithChildren,
    useReducer,
} from 'react';

interface SelectorState {
    primary: string | null;
    secondary: string | null;
}

type SelectorAction = {
    type: 'primary' | 'secondary';
    trackId: string | null;
};

const initialState: SelectorState = {
    primary: null,
    secondary: null,
};

const selectorReducer = (
    state: SelectorState,
    action: SelectorAction,
): SelectorState => {
    switch (action.type) {
        case 'primary':
            return {
                ...state,
                primary: action.trackId,
            };
        case 'secondary':
            return {
                ...state,
                secondary: action.trackId,
            };
        default:
            return state;
    }
};

export const SelectorContext = createContext<{
    state: SelectorState;
    dispatch: Dispatch<SelectorAction>;
}>({ state: initialState, dispatch: () => {} });

export const SelectorContextProvider: FC<PropsWithChildren> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(selectorReducer, initialState);

    return (
        <SelectorContext.Provider value={{ state, dispatch }}>
            {children}
        </SelectorContext.Provider>
    );
};
