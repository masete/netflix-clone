import { useState, useContext, createContexct, Children } from 'react';

const AuthContext = createContexct();

export function AuthContextProvider ({childred}) {
    return(
        <AuthContext.Provider>
        {Children}
        </AuthContext.Provider>
    )
};

export function UserAuth(){
    return useContext(AuthContext)
}