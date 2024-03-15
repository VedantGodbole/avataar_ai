import React, { useEffect, useState, useRef } from 'react';
import './App.css'; // Import your CSS file if you have any styling

import logo_ecomm from './logo_ecomm.png';
import './Nav.css';

function Nav2() {
    //const navbarBrand = document.querySelector(".navbar-brand");
    const navbarBrand = useRef(null);
    //navbarBrand.current;


    //const more = document.getElementById("More");
    const more = useRef(null);
    //more.current;


    // const search = document.getElementById("Search");
    const search = useRef(null);
    // search.current; 


    // const temp1 = document.getElementById("temp1");
    const temp1 = useRef(null);
    //temp1.current;


    // const temp2 = document.getElementById("temp2");
    const temp2 = useRef(null);
    //temp1.current;

    // const temp3 = document.getElementById("temp3");
    const temp3 = useRef(null);
    //temp1.current;


    // const temp4 = document.getElementById("temp4");
    const temp4 = useRef(null);
    //temp1.current;





    const mainNav = useRef(null);
    //mainNav.current;


    //   const moreDropdownMenu = document.getElementById("moreDropdownMenu");
    const moreDropdownMenu = useRef(null);
    //moreDropdown.current;


    useEffect(() => {

        function adjustNavigation() {




            // const navItems = mainNav.querySelectorAll(".nav-item:not(#moreDropdown):not(#moreDropdownMenu .nav-item):not(#Search)");
            const navItems = mainNav.current.querySelectorAll('.nav-item:not(#moreDropdown):not(#moreDropdownMenu .nav-item):not(#Search)');



            const e = 35;
            const ecomm_Width = navbarBrand.current.offsetWidth;
            const navbarLeft = navbarBrand.current.offsetLeft;


            //const windowWidth = document.documentElement.clientWidth;
            const windowWidth = window.innerWidth;

            let totalWidth = 0;

            navItems.forEach(item => {
                totalWidth += item.offsetWidth;
            });


            //while using refs use element.current for accessing elements  and when using lastElementChild or any other use directly as elements


            if (e + navbarLeft + ecomm_Width + totalWidth + more.current.offsetWidth + search.current.offsetWidth > windowWidth) {
                const item = navItems[navItems.length - 1];

                if (item.offsetLeft + item.offsetWidth + more.current.offsetWidth + search.current.offsetWidth + e > windowWidth) {
                    moreDropdownMenu.current.appendChild(item.cloneNode(true)); // Clone the node before appending
                    item.parentNode.removeChild(item); // Remove the original item
                }
            } else {
                const item = navItems[navItems.length - 1];
                const lastChild = moreDropdownMenu.current.lastElementChild;

                if ((lastChild && navItems.length === 0) ||
                    (lastChild && (windowWidth - (e + item.offsetLeft + item.offsetWidth + more.current.offsetWidth + search.current.offsetWidth) > lastChild.offsetWidth)
                        &&
                        (windowWidth - (e + navbarLeft + ecomm_Width + totalWidth + more.current.offsetWidth + search.current.offsetWidth) > lastChild.offsetWidth))) {
                    const lastChildMainNav = mainNav.current.lastElementChild;
                    const secondLastChild = lastChildMainNav.previousElementSibling;
                    mainNav.current.insertBefore(lastChild, secondLastChild);

                }
            }




            // navItems.forEach(navItem => {
            //     temp1.current.value += navItem.innerText + "=  " + navItem.offsetWidth + "    offsetLeft=" + navItem.offsetLeft + "\n";
            // });

            // temp1.current.value += "-------------------------------------\n";

            //  temp2.current.value = "Nav width=    " + (e + navbarLeft + ecomm_Width + totalWidth + more.current.offsetWidth+search.current.offsetWidth) + "       Windowwidth=  " + windowWidth;

            //  const dropdownItems = moreDropdownMenu.current.querySelectorAll(".nav-item");
            //  let dropdownItemsList = "Elements in moreDropdownMenu:\n";

            //  dropdownItems.forEach(item => {
            //      dropdownItemsList += item.innerText + "width=  " + item.offsetWidth + "\n";
            //  });

            // temp3.value = dropdownItemsList;

            // const lastNavItem = navItems[navItems.length - 1];

            //  temp4.current.value = "item.offsetLeft+item.offsetWidth=  " + (lastNavItem.offsetLeft + lastNavItem.offsetWidth) + "\n  " + "navItems=  " + navItems.length;
        }

        window.addEventListener("resize", adjustNavigation);
        adjustNavigation();

        return () => {
            window.removeEventListener("resize", adjustNavigation);
        };
    }, []);



    return (<>
        <nav className="navbar navbar-expand  Nav">
            <div className="container container-fluid">
                <img src={logo_ecomm} alt="Bootstrap" width="30" height="24" />
                <p ref={navbarBrand} className="navbar-brand text-white m-2" href="/" >E-COMM</p>
                <div className="collapse navbar-collapse ms-4 " id="navbarSupportedContent">


                    <ul ref={mainNav} className="navbar-nav me-auto  mb-2 mb-lg-0 center-text" id="mainNav">



                        <li className="nav-item  new_width">
                            <a className="nav-link text-white me-3" aria-current="page" href="#">HOME</a>
                        </li>

                        {/* Add more navigation items here */}
                        <li className="nav-item Nav  new_width" >
                            <a className="nav-link text-white me-3" href="#">ELECTRONICS</a>
                        </li>


                        <li className="nav-item Nav   new_width">
                            <a className="nav-link text-white me-3" href="#">BOOKS</a>
                        </li>


                        <li className="nav-item Nav  new_width">
                            <a className="nav-link text-white me-3" href="#">MUSIC</a>
                        </li>


                        <li className="nav-item Nav  new_width">
                            <a className="nav-link text-white me-3" href="#">MOVIES</a>
                        </li>


                        <li className="nav-item Nav  new_width">
                            <a className="nav-link text-white me-3" href="#">CLOTHING</a>
                        </li>


                        <li className="nav-item Nav  new_width">
                            <a className="nav-link text-white me-3" href="#">GAMES</a>
                        </li>









                        <li className="nav-item dropdown new_width" id="moreDropdown">
                            <a className="nav-link dropdown-toggle text-white " ref={more} id="More" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                MORE
                            </a>
                            <ul ref={moreDropdownMenu} className="dropdown-menu  " id="moreDropdownMenu">

                                <li className="nav-item   Nav   normal" >
                                    <a className="nav-link text-white " href="#">FURNITURE</a>
                                </li>

                                <li className="nav-item   Nav  normal">
                                    <a className="nav-link text-white " href="#">ELECTRONICS</a>
                                </li>

                                <li className="nav-item  Nav  normal">
                                    <a className="nav-link text-white " href="#">TRAVEL</a>
                                </li>

                                <li className="nav-item  Nav  normal">
                                    <a className="nav-link text-white " href="#">BOTANICAL</a>
                                </li>

                                <li className="nav-item  Nav  normal">
                                    <a className="nav-link text-white " href="#">CATEGORY NAME</a>
                                </li>



                            </ul>
                        </li>
                        <li className="nav-item" id="Search" ref={search}>
                            <input className="searchStyle  mt-2  " placeholder="Search Something" type="text" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* <textarea ref={temp1} id="temp1" cols="30" rows="6"></textarea>
<textarea  ref={temp2} id="temp2" cols="40" rows="2"></textarea>
<textarea ref={temp3} id="temp3" cols="1" rows="10"></textarea>

<textarea ref={temp4} id="temp4" cols="40" rows="10"></textarea> */}
    </>
    );
}

export default Nav2;
