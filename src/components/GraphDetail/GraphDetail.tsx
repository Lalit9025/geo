import React from 'react';
import './GraphDetail.css'
const GraphDetailsPage = () => {
 return (
   <div className='graph_detail_page'>
    <div className="grd_titlebx">
      <h1 className='grd_title'>Project ML</h1>
      <p className='grd_date'>Created on: 3 dec 2023</p>
    </div>
     
     <div className="grd_desplusbtn">
        <p className='grd_des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo placeat ut labore unde officiis, quasi dolor ullam aut qui repellendus vero provident numquam voluptas est assumenda atque a rerum inventore.</p>
        <button className='grd_go_to_graph'>Go to Graph</button>
     </div>

     <h2 className='grd_papers'>Papers</h2>
     <div className='grd_list'>
       
         <div className='grd_list_elem'>
            <p>1 . title</p>
            <div className='grd_list_elem_btn_top'>
               <button className='grd_list_elem_btn'>Remove</button>
               <button className='grd_list_elem_btn'>Favorite</button>
           </div>
         </div>
         <div className='grd_list_elem'>
            <p>2 . title</p>
            <div className='grd_list_elem_btn_top'>
               <button className='grd_list_elem_btn'>Remove</button>
               <button className='grd_list_elem_btn'>Favorite</button>
           </div>
         </div>
         <div className='grd_list_elem'>
            <p>3 . title</p>
            <div className='grd_list_elem_btn_top'>
               <button className='grd_list_elem_btn'>Remove</button>
               <button className='grd_list_elem_btn'>Favorite</button>
           </div>
         </div>
    
     </div>
    <div className="grd_act_btn">
     <button className="grd_act">Edit Graph</button>
     <button className="grd_act">Share Graph</button>
     <button className="grd_act">Delete Graph</button>
    </div>
     
   </div>
 );
};

export default GraphDetailsPage;
