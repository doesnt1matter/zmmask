import React from 'react'

const Popup = (props) => {
   const Component = props.component
   return (
      <div
         className={props.active === true ? "popup _active" : "popup"}
         onClick={() => {
            props.setActive()
         }}
      >
         <div
            className="popup__content"
            onClick={(event) => {
               event.stopPropagation();
            }}
         >
            <Component />
         </div>
      </div>
   )
}

export default Popup
