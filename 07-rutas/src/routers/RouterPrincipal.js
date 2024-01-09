import React from 'react'
import {Routes,Route, Link,BrowserRouter} from "react-router-dom"; 
import { InicioComponente } from "../components/InicioComponente";
import { FaqsComponente } from "../components/FaqsComponente";
import { ContactoComponente } from "../components/ContactoComponente";
import { ArticulosComponente } from "../components/ArticulosComponente";

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<InicioComponente/>} />
          <Route path='/faqs' element={<FaqsComponente/>} />
          <Route path='/contacto' element={<ContactoComponente/>} />
          <Route path='/articulos' element={<ArticulosComponente/>} />
          <Route path='/*' element={(
            <>
            <h1>
              Pagina no encontrada 404
            </h1>
            </>
          )} />

        </Routes>    
    </BrowserRouter>
  )
}
export default RouterPrincipal;
