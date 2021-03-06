import React from 'react';

// Stateless fonctionnal component !!Important!!
// Personnal preference though ... 
// Cannot use life-cycle hooks in SFC !!ONLY CLASS COMPONENTS!! 
const NavBar = ({totalCount, NumberOfCounters}) => {

    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar{" "} TotalCount: {" "} 
                <span className="badge badge-pill badge-secondary">
                    {totalCount}
                </span>
               {" "} NumberOfCounters: {" "}
                <span className="badge badge-pill badge-secondary">
                    {NumberOfCounters}
                </span>
            </a>
        </nav>
    );
};
 
export default NavBar;