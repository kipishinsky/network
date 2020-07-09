import * as React from "react";

const storeContext = React.createContext(null);

export const provider = (props) => {
    return <StoreContext.Provider value={props.store}>
                {props.children}
            </StoreContext.Provider>
}

export default storeContext;

