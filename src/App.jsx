import { Routes, Route } from 'react-router-dom'
import Layout from './layout'
import Sobre from './Sobre/page'
import Contato from './Contato/page'
import Home from './Home/page'
import Knu from './knu1/page'
function App() {
    return (
        <><Routes>
            <Route
                path="/"
                element={<Layout>
                    <Home />
                </Layout>} />

            <Route
                path="/Sobre"
                element={<Layout>
                    <Sobre />
                </Layout>} />

            <Route
                path="/Contato"
                element={<Layout>
                    <Contato />
                </Layout>} />
            <Route
                path="/knu1"
                element={<Layout>
                    <Knu />
                </Layout>} />
            </Routes>
            </>
    )
}

export default App