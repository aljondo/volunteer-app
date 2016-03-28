/**
 * Created by branden on 3/21/16.
 */
import React, { Component } from 'react';
import {Link} from 'react-router'
import styles from './navbar.scss'

class NavBar extends Component {
    render() {
        return (
            <div>
                <header className={styles.header}>
                    <div className={styles.top}>
                        <div className={styles.logo}>
                            Americorps
                        </div>
                        <div className={styles.links}>
                            <div>
                                <Link className={styles.link} to="/register">Register</Link>
                                <Link className={styles.link} to="/login">Login</Link>
                                <Link className={styles.link} to="#">About</Link>
                            </div>
                            <div className={styles.icons}>
                                <a href="https://www.facebook.com/americorps/">
                                    <img className={styles.icon} src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" />
                                </a>
                                <a href="https://twitter.com/americorps">
                                    <img className={styles.icon} src="http://www.mecd.gob.es/eeuu/dms/consejerias-exteriores/eeuu/imagenes/twitter.png" />
                                </a>
                                <a href="https://www.instagram.com/americorps/">
                                    <img className={styles.icon} src="https://cdn0.iconfinder.com/data/icons/social-networks-and-media-flat-icons/136/Social_Media_Socialmedia_network_share_socialnetwork_network-28-512.png" />
                                </a>
                                <a href="https://www.youtube.com/user/nationalservice">
                                    <img className={styles.icon} src="http://www.mskalarab.com/vb/imgcache2/13025.gif" />
                                </a>
                                <a href="https://www.linkedin.com/company/americorps">
                                    <img className={styles.icon} src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-256.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.links}>
                            <Link className={styles.link} to="/">Home</Link>
                            <Link className={styles.link} to="/profile">Profile</Link>
                            <Link className={styles.link} to="/search">Search</Link>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default NavBar
