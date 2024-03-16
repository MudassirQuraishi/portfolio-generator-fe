
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthenticationPage from './pages/AuthenticationPage'


function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/register/*' element={<AuthenticationPage />} />
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App
