import React from 'react'
import Home from './components/home'
import { Route,Routes } from 'react-router-dom'
import Welcome from './components/welcome';
import Footer from './components/footer'
import About from './components/about';
import Content from './components/content';
import Program from './components/program';
import Team from './components/team';
import Registry from './components/registry';
import Admin from './admin';
import DataContext, { DataProvider } from './context/context'
import Programs from './admin/programs';
import Staff from './admin/staff';
import Exam from './admin/exam';
import Ca from './admin/ca';
import Update from './admin/update';
import Post from './components/post';
import Map from './components/map';


const App = () => {




  return (
    <>
    <DataProvider>
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/registry' element={<Registry /> } />
      <Route path='/about' element={<About/>}/>
      <Route path='/content' element={<Content/>}/> 
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/programs' element={<Programs/>}/>
      <Route path='/staff' element={<Staff />}/>
      <Route path='/ca' element={<Ca />}/>
      <Route path='/exam' element={<Exam />}/>
      <Route path='/update' element={<Update />}/>
      <Route path='/team' element={<Team />}/>
      <Route path='/post' element={<Post />}/>
      <Route path='/map' element={<Map />}/>
      <Route path='/program' element={<Program />}/>
    </Routes>
    </DataProvider>
  </>)
}

export default App