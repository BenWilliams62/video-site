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
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href="/upload">
                            <a className="nav-link">
                                Upload
                            </a>
                        </Link>
                    </li>
                    
                    
                </ul>
                
            </div>
        </nav>
    )
}