import React, { useState, useEffect, useRef } from 'react';
import './Header.css';

function Header() {
    const [activeMenu, setActiveMenu] = useState('');
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [marginLeft, setMarginLeft] = useState(0);
    const menuRef = useRef(null);

    const calculateMargin = () => {
        const pageWidth = window.innerWidth;

        if (menuRef.current) {
            const menuWidth = menuRef.current.offsetWidth;
      
            const calculatedMarginLeft = (pageWidth - menuWidth) / 2;
            console.log(pageWidth, menuWidth)
            setMarginLeft(calculatedMarginLeft);
          }
      };
    

    useEffect(() => {

        calculateMargin();

        window.addEventListener('resize', calculateMargin);
        return () => {
        window.removeEventListener('resize', calculateMargin);
        };
        
        function updateDimensions() {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
            if (newWidth > 768) {
                setShowSubMenu(false);
                setMenuOpen(false);
            }
            if (setSubMenuOpen(true)){
                const width = window.innerWidth
            }
        }
        
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        setShowSubMenu(false);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setShowSubMenu(false);
    };

    const handleMenuItemClick = (menu) => {
        if (windowWidth <= 768) {
            setActiveMenu(menu);
            setShowSubMenu(true);
            setSubMenuOpen(true);
        }
    };

    const handleMenuItemHover = (menu) => {
        if (windowWidth > 768) {
            setActiveMenu(menu);
            setShowSubMenu(true);
            setSubMenuOpen(true);
        }

        if (isSubMenuOpen){
            console.log('aoba');
        } 
    };

    return (
        <div className='ContainerHeader'>
            <nav className={`header ${isSubMenuOpen ? 'header-bg' : ''}`}>
                {!isMenuOpen && <div className="toggle-button" onClick={toggleMenu}>≡</div>}
                
                <div className='header-container'>
                    <div className='centralized-div'>
                        <div className="logoHeader">
                            <a href="#home">
                                <img src="./src/assets/Projetos/logo.png" alt="Logo"/>
                            </a>
                        </div>

                        <ul ref={menuRef} className={`menu ${isMenuOpen && !showSubMenu ? 'active' : ''}`}>
                        {isMenuOpen && <div className="close-button" onClick={closeMenu}>✕</div>}

                            {['about', 'bim', 'archviz', 'tech', 'education', 'hub360'].map(menuItem => (
                                <li key={menuItem} className="menu-item"
                                    onClick={() => handleMenuItemClick(menuItem)}
                                    onMouseEnter={() => setSubmenuOpen(true)} onMouseLeave={() => setSubmenuOpen(false)}
                                    onMouseOver={() => handleMenuItemHover(menuItem)}>
                                    <a href={`#${menuItem}`}>{menuItem.toUpperCase()}</a>
                                </li>
                            ))}
                            {showSubMenu && (
                                <div style={{ paddingLeft: `${marginLeft - 20}px`}} className={`submenu ${isSubMenuOpen ? 'active' : ''}`} onMouseLeave={() => windowWidth > 768 && setSubMenuOpen(false)}>
                                    {windowWidth < 769 && <div className="back-button" onClick={() => setShowSubMenu(false)}>←</div>}
                                    {activeMenu === 'about' && <div><p>ABOUT</p></div>}
                                    {activeMenu === 'bim' && (
                                        <div>
                                            <p>BIM</p>
                                            <ul>
                                                <li><a href="#building-modeling">Building Modeling and Coordination</a></li>
                                                <li><a href="#cloud-points">Cloud Points to BIM (As-builts)</a></li>
                                                <li><a href="#shop-drawings">Shop Drawings and Constructive Detailings</a></li>
                                            </ul>
                                        </div>
                                    )}
                                    {activeMenu === 'archviz' && (
                                        <div>
                                            <p>ARCHVIZ</p>
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
                                                <li><a href="#plugin-development">Plugin Development for Revit</a></li>
                                                <li><a href="#development-of-template">Development of Template, Libraries, and Families for Revit</a></li>
                                                <li><a href="#game-development">Game Development</a></li>
                                                <li><a href="#character-modeling">Character Modeling and Animation</a></li>
                                                <li><a href="#website-development">Websites Development and Design</a></li>
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
                            )}
                        </ul>
                    </div>
                </div>

                
            </nav>
        </div>
    );
}

export default Header;
