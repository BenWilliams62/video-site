import Link from 'next/link';
import { useState } from 'react';

export default function Navbar(){

    const [toggle, setToggle] = useState("collapse navbar-collapse")

    function handleToggle() {
        toggle === "collapse navbar-collapse" ? setToggle("collapse navbar-collapse show") : setToggle("collapse navbar-collapse");
    }

    return(
        <nav className="navbar navbar-expand-lg bg-trans w-full sticky-top">
            <Link href="/">
                <a className="navbar-brand" >
                <h3>Logo</h3>
                </a>
                
            </Link>
            
            <button className="navbar-toggler" type="button" onClick={handleToggle} data-toggle="collapse" data-target="#nav-link" aria-controls="nav-link" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className={toggle} id="nav-links">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                </form>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href="/auth">
                            <a className="nav-link">
                                Account
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/auth">
                            <a className="nav-link">
                                log in
                            </a>
                        </Link>
                    </li>
                    
                </ul>
                
            </div>
        </nav>
    )
}