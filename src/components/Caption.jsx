import React from 'react'

function Caption() {
   return (
      <div className='caption-block'>
         <div className='overlay'></div>
         <p className='caption-text'>"We've been using Untitled to kick start every new project and can't imagine working without it."</p>

         <div className='name-and-rating-block'>
            <div className='name-info-block'>
               <p className='name-text'>Andi Lane</p>
               <div className='occupation-info'>
                  <span className='company-title'>Founder, Catalog</span>
                  <span className='work-detail'>Web Design Agency</span>
               </div>
            </div>

            <div className='rating-info-block'>
               <div className='rating'>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
               </div>

               <div className='prev-and-next-btn'>
                  <a href="#"><i className="fa-solid fa-arrow-left"></i></a>
                  <a href="#"><i className="fa-solid fa-arrow-right"></i></a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Caption;