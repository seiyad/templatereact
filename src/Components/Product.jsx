import React from 'react'
import  "./product.css"

function Product(props) {
  
  return (
    <div>
      <div className='productcard'>
        <div className='content'>
            <h1>
                Product1
            </h1>
            <h5>
                Description
            </h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br/>
            et massa mi. Aliquam in hendrerit urna. Pellentesque sit<br/> 
            amet sapien fringilla, mattis ligula consectetur.
          </p>
        </div>
        <div>
             <img src={props.img} alt=''/>   
        </div>
        </div>
    </div>
  )
}

export default Product
