import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//*Shared Folder
import Home from './components/shared/Home'
import Nav from './components/shared/Nav'


//*Job Folder
import JobIndex from './components/jobs/JobIndex'
import JobShow from './components/jobs/JobShow'
import JobNew from './components/jobs/JobNew'
import JobEdit from './components/jobs/JobEdit'

function App(){
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/jobs/:id/edit" component={JobEdit}/>
        <Route  path="/jobs/new" component={JobNew}/>
        <Route  path="/jobs/:id" component={JobShow}/>
        <Route path="/jobs" component={JobIndex}/>
      </Switch>
    </BrowserRouter>
  )
}


export default App
