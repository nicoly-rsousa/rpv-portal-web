import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/home'
import { ConnectHub } from './pages/ConnectHub'
import { MoneyFlow } from './pages/MoneyFlow'
import { TaskMaster } from './pages/TaskMaster'
import { Menu } from './components/menu'
export function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ConnectHub' element={<ConnectHub />} />
                <Route path='/MoneyFlow' element={<MoneyFlow />} />
                <Route path='/TaskMaster' element={<TaskMaster />} />
    
            </Routes>
        </BrowserRouter>
    )
}