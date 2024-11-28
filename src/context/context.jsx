import React from "react"
import { createContext ,useState} from "react";


  const DataContext = createContext({});
  export const DataProvider = ({children}) => {
  
   const [show, setShow] = useState('hide')

   const alert = () => {
     setShow(()=> 'show')
     console.log(show)
   }
   

    return (
        <DataContext.Provider value={{
          alert,show
        }}>
           {children}
        </DataContext.Provider>
    )
}
export default DataContext;