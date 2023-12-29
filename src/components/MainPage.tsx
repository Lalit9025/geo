import React from 'react'
import { BrowserRouter , Router, Routes, Route} from 'react-router-dom';
import Sidebar from './Sidebar'
import Rside from './ProfileDash'
import './MainPage.css'
import Usage from './innercomponents/Usage'
import NewGraph from './GraphPage/NewGraph';
import GraphDetailsPage from './GraphDetail/GraphDetail';
import Pricing from './PricingPage/Pricing';

const MainPage = () => {
  return (
    <div className='main_page'>
     
     <BrowserRouter>
     <Sidebar/>
       <Routes>
         <Route path='/' element={<Rside/>}/>
         <Route path='/newgraph' element={<NewGraph/>} />
         <Route path='/graphdetails' element={<GraphDetailsPage/>} />
         <Route path='/pricing' element={<Pricing/>}/>
       </Routes>
     </BrowserRouter>
   </div>
  )
}

export default MainPage