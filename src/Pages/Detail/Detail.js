import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
const DetailPage = (props)=>{
    const Params = useParams();
    const {id} = Params;
    return (
        <div>
            {props.productItem.map((item, index)=>{    
                let dummy = item.title.trim(' ').replaceAll(' ', '-')            
             return  (dummy == id ? <div key= {item.id} className="detail-page pt-5">
                 <div className="details-wrapper col-12 d-flex ">
                     <div className="details-left col-md-5 p-5">
                         <figure>
                             <img src={item.image} alt={item.title} className="w-100"/>
                         </figure>
                     </div>
                     <div className="details-right col-md-7 ps-5">
                         <h4 className="mb-3">{item.title}</h4>
                         <p className="mb-5">{item.description}</p>

                         <div className="d-flex align-items-center">
                             <h5>Price: $ {item.price}</h5>
                             <button className="ms-5 btn btn-primary" onClick={()=>props.click(item.id)}>Add to cart</button>
                         </div>
                         <div className="ratings">
                            <h6>User Reviews: {item.rating.rate}</h6>
                         </div>
                     </div>
                 </div>
             </div> : '')
            })}
        </div>
    )
}

export default DetailPage;