import React from 'react'

const Navbar = (props) => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <h3>Restaurant</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         {props.Timings.map((elem)=>
         {
           return <button className="btn btn-outline-success mx-2" type="submit" onClick={()=>{props.filterItems(elem)}}>{elem}</button>
         })}
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar