import React, { createContext } from 'react';
import UseAPI from '../Hooks/UseAPI';
import UseCart from '../Hooks/UseCart';
import UseFirebase from '../Hooks/UseFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const AllContexts =UseFirebase();
    const {useApi} =UseAPI();
    const {addToCart,selectedService}=UseCart();
    const data = {selectedService,addToCart,AllContexts, useApi};
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;