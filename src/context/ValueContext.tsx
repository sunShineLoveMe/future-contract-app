import React, { createContext, useState } from "react";

interface ValueContextType {
    value: string;
    setValue: (value: string) => void;
}

interface ValueContextProviderProps {
    children: React.ReactNode;
}

export const ValueContext = createContext<ValueContextType>({
    value: '',
    setValue: () => {}
});

export const ValueContextProvider: React.FC<ValueContextProviderProps> = ({ children }) => {
    const [value, setValue] = useState('');
    return (
        <ValueContext.Provider value={{ value, setValue }}>
            {children}
        </ValueContext.Provider>
    );
};