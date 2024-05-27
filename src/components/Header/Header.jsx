import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header() {
    // const [activeMenu, setActiveMenu] = useState(null);
    // const [isMenuOpen, setMenuOpen] = useState(false);
    // const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    // const [showSubMenu, setShowSubMenu] = useState(false);
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [marginLeft, setMarginLeft] = useState(0);
    // const menuRef = useRef(null);

    // const calculateMargin = () => {
    //     const pageWidth = window.innerWidth;

    //     if (menuRef.current) {
    //         const menuWidth = menuRef.current.offsetWidth;
    //         const calculatedMarginLeft = (pageWidth - menuWidth) / 2;
    //         setMarginLeft(calculatedMarginLeft);
    //     }
    // };

    // useEffect(() => {
    //     calculateMargin();

    //     function updateDimensions() {
    //         const newWidth = window.innerWidth;
    //         setWindowWidth(newWidth);
    //         if (newWidth > 768) {
    //             setShowSubMenu(false);
    //             setMenuOpen(false);
    //         }
    //     }

    //     window.addEventListener('resize', calculateMargin);
    //     window.addEventListener('resize', updateDimensions);
    //     return () => {
    //         window.removeEventListener('resize', calculateMargin);
    //         window.removeEventListener('resize', updateDimensions);
    //     };
    // }, []);

    // const toggleMenu = () => {
    //     setMenuOpen(!isMenuOpen);
    //     setShowSubMenu(false);
    // };

    // const closeMenu = () => {
    //     setMenuOpen(false);
    //     setShowSubMenu(false);
    // };

    // const handleMenuItemClick = (menu) => {
    //     if (windowWidth <= 768) {
    //         setActiveMenu(menu);
    //         setShowSubMenu(true);
    //         setSubMenuOpen(true);
    //     }
    // };

    // const handleMenuItemHover = (menu) => {
    //     if (windowWidth > 768) {
    //         setActiveMenu(menu);
    //         setShowSubMenu(true);
    //         setSubMenuOpen(true);
    //     }
    // };

    return (
        <div className='ContainerHeader'>
            <nav className={`header`}>
                <div className='header-container'>
                    <div className='centralized-div'>
                        <div className="logoHeader">
                            <a href="#home">
                                <img src="/logo.png" alt="Logo"/>
                            </a>
                        </div>

                        {/* <ul ref={menuRef} className={`menu ${isMenuOpen && !showSubMenu ? 'active' : ''}`}>
                        {isMenuOpen && <div className="close-button" onClick={closeMenu}>✕</div>}

                            {['about', 'bim', 'archiviz', 'tech', 'education', 'hub360'].map(menuItem => (
                                <li key={menuItem} className="menu-item"
                                    onClick={() => handleMenuItemClick(menuItem)}
                                    onMouseOver={() => handleMenuItemHover(menuItem)}>
                                    <a href={`#${menuItem}`}>{menuItem.toUpperCase()}</a>
                                </li>
                            ))}
                        </ul>
                            {showSubMenu && (
                                <div style={{ paddingLeft: `${marginLeft - 20}px`}} className={`submenu ${isSubMenuOpen ? 'active' : ''}`} onMouseLeave={() => windowWidth > 768 && setSubMenuOpen(false)}>
                                    {windowWidth < 769 && <div className="back-button" onClick={() => setShowSubMenu(false)}>←</div>}
                                    {activeMenu === 'about' && <div><p>ABOUT</p></div>}
                                    {activeMenu === 'bim' && (
                                        <div>
                                            <p>BIM</p>
                                            <ul>
                                                <li><a href="#bim-modeling">BIM Modeling</a></li>
                                                <li><a href="#coordination">Coordination</a></li>
                                                <li><a href="#cloud-points">Cloud Points</a></li>
                                                <li><a href="#shop-drawings">Shop Drawings</a></li>
                                                <li><a href="#constructive-detailings">Constructive Detailings</a></li>
                                            </ul>
                                        </div>
                                    )}
                                    {activeMenu === 'archiviz' && (
                                        <div>
                                            <p>ARCHIVIZ</p>
                                            <ul>
                                                <li><a href="#realistic-renderings">Realistic Renderings</a></li>
                                                <li><a href="#virtual-tours">Virtual Tours</a></li>
                                                <li><a href="#promotional-cinematics">Promotional Cinematics</a></li>
                                            </ul>
                                        </div>
                                    )}
                                    {activeMenu === 'tech' && (
                                        <div>
                                            <p>TECH</p>
                                            <ul>
                                                <li><a href="#plugins">Plugins</a></li>
                                                <li><a href="#development">Development for Revit</a></li>
                                                <li><a href="#game-development">Game Development</a></li>
                                                <li><a href="#character-modeling">Character Modeling and Animation</a></li>
                                                <li><a href="#website-development">Websites Development</a></li>
                                                <li><a href="#video-edition">Video Edition</a></li>
                                            </ul>
                                        </div>
                                    )}
                                    {activeMenu === 'education' && (
                                        <div>
                                            <p>EDUCATION</p>
                                            <ul>
                                                <li><a href="#online-courses">Online Courses</a></li>
                                                <li><a href="#bim-consulting">BIM and AWP Consulting</a></li>
                                                <li><a href="#custom-training">Custom Team Training</a></li>
                                            </ul>
                                        </div>
                                    )}
                                    {activeMenu === 'hub360' && (
                                        <div>
                                            <p>HUB 360</p>
                                            <ul>
                                                <li><a href="https://hub360site.com">Visit HUB 360 Site</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )} */}
                        
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
