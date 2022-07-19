import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './globalStyles'
import Layout from './Layout'
import Home from './components/Home'
import Destination from './components/Destination'

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='destination' element={<Destination />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
