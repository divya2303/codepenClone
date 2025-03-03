import React,{createContext, useState} from 'react';

export const DataContext = createContext(null);

export default function DataProvider({children}) {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
      return (
    <DataContext.Provider
    value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs
    }}>
        {children}
    </DataContext.Provider>
  )
}
