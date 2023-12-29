import React, { useState } from 'react';
import './NewGraph.css'
const NewGraph = () => {
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');

 const handleSubmit = async (e) => {
   e.preventDefault();
 }

 return (
  <div className='newgraph'>
     <h1>Fill the Details to create a new graph</h1>
    <form  className='newgraph_form' onSubmit={handleSubmit}>
        <div className="gr_title gr">
          <p>Enter the title*</p>
          <input className = 'title_bx' type="text" value= {title} onChange={(e) => setTitle(e.target.value)} required />
        </div>


       <div className="gr_des gr">
         <p>Description*</p>
         <textarea className = 'title_bx' value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
       </div>


      <div className="gr_file gr">
        <p>Select a file*</p>
        <input className = '' type="file" required/>
      </div>

      <div className="">
       <button  className = "newgr_btn" type="submit">Create Graph</button>
      </div>
    </form>
   </div>
 );
};

export default NewGraph;
