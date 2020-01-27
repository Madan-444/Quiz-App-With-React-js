import React from 'react'
import '../stylePage/home.css'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className='home'>

            <div className="container ">
                <Link className="nav-link " to="/playgame"><button type="button" className=" twobutton btn btn-primary btn-lg btn-block">Play Game</button></Link>
                <Link className='nav-link' to='/highscore'>
                <button type="button" className="btn btn-secondary btn-lg btn-block">Highest Socres</button>
                </Link>

                
            </div>
        </div>
    )
}

export default HomePage
