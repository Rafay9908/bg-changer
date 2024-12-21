import { createContext, useContext } from "react";

export const BgContext= createContext({
    bgColor: 'light',
    darkBg: () => {},
    lightBg: () => {},
});

export const BgProvider = BgContext.Provider;

export default function useBg(){
    return useContext(BgContext);
}