import React from 'react'
import './AccountDetails.css'
import SavedGElement from './SavedGElement'
import './SavedGraphs.css'
const SavedGraphs = () => {
  return (
    <div className='saved_graphs bx-border'>
        <h4 className="top_head">Saved Graphs</h4>
        <div className='graph_list'>
           <SavedGElement/>
           <SavedGElement/>
           <SavedGElement/>
           <SavedGElement/>
           <SavedGElement/>

        </div>
    </div>
  )
}

export default SavedGraphs