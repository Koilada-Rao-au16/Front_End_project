import React from 'react'




const App = ( ) => {

let curDate = new Date();
curDate = curDate.getHours();
let greeting = ""

const cssStyle = {}
  
if (curDate >= 1 && curDate <12 ){
  greeting = "Good Morning"
  cssStyle.color = "green"
}else if (curDate >= 12 && curDate <18){
  greeting = "Good Afternoon"
  cssStyle.color = "orange"
}else{
  greeting = "Good Night"
  cssStyle.color ="red"
}

return (
  <>
   <div> 
  <h1>Hello Bhaskar, <span style={cssStyle}>{greeting}</span></h1>
  </div>
  </>
)
}

export default App