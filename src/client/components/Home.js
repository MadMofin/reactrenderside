import React from 'react'

const Home = () => {
    return (
        <div>
            <div>
                I'm the home super component :D
            </div>
            <button onClick={()=>console.log('Hello there')}>Press me</button>
        </div>
    )
}

export default Home
