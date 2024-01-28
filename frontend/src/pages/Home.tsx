import React from 'react'

function Home(props : {name : string}) {
  return (
    <div>
        {props.name ? <h1>{'Welcome ' + '- ' + props.name + ' -' }</h1> : <h1>You are not authenticated!</h1>}
    </div>
  )
}

export default Home