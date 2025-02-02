import { useState, useEffect } from 'react';
import { NavListComponent } from '../NavListComponent/NavListComponent.jsx';
import { UserDropdownComponent } from '../UserDropdownComponent/UserDropdownComponent.jsx';
import icons from '../../../../assets/icons/Icons.jsx';
import styles from '../../styles/navBarStyles.module.scss';

export function NavBarComponent() {
    const [isHamClicked, setIsHamClicked] = useState(false);
    const [isDropClicked, setIsDropClicked] = useState(false);

    //check is hamburger is clicked, change bool value whenever it is clicked
    function handleNavClick() {
        setIsHamClicked(!isHamClicked);
    }

    function handleDropClick() {
        setIsDropClicked(!isDropClicked);
    }

    // adds the className rootContainer to the #root and removes it once the component unmounts
    useEffect(function() {
        var root = document.getElementById('root');
        // adds the className rootContainer to the #root
        root.classList.add(styles.rootNavigation);

        //removes the className once unmount
        return function() {
            root.classList.remove(styles.rootNavigation);
        };
    }, []);

    return (
        <>
        <NavListComponent verify = { isHamClicked } /> {/* passing the isClicked value from handleNavClick to NavListComponent */}

        <section className = { styles.navBar }>
            <div /* className = "menu" */>
                <ul>
                    <li className = { `${styles.icon} ${styles.hamburger}` } onClick = { handleNavClick }>
                        <img 
                            //change the used icon depending on the set bool value of isCliked
                            src = { isHamClicked ? icons.close : icons.hamburger } 
                            alt = "hamburger" 
                        />
                    </li>
                    <li className = { `${styles.icon} ${styles.logo}` }>
                        <span>LOGO</span>
                    </li>
                </ul>
            </div>
            <div /* className = "user" */>
                <ul>
                    <li className = { `${styles.icon} ${styles.web}` }>
                        <img src = { icons.globe } alt = "web" />
                    </li>
                    <li className = { `${styles.icon} ${styles.facebook}` }>
                        <img src = { icons.fb } alt = "facebook" />
                    </li>
                    <li className = { `${styles.icon} ${styles.youtube}` }>
                        <img src = { icons.yt } alt = "youtube" />
                    </li>
                    <li className = { `${styles.icon} ${styles.user}` } onClick = { handleDropClick }>
                        <img src = { icons.user } alt = "User" />
                    </li>
                    <UserDropdownComponent verify = { isDropClicked } />
                </ul>
            </div>

            
        </section>

        
        </>
    )

    
}