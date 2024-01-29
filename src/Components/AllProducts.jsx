import React from 'react'

export default function AllProducts() {
  return (
    <main className='all-prod-wrapper'>
        <div className="allp-upper">
            <h1>Sale</h1>
        </div>
        <div className="allp-lower">
            <div className="filter-btn"><span>Filter & Sort</span></div>
            <div className="allp-products">
                <div className="allp-Filters"></div>
                <div className="allp-cards"></div>
            </div>
        </div>
    </main>
  )
}
