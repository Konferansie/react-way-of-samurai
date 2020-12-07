import React from 'react';
import classes from './Music.module.css'

const Music = () => {
    return (
        <div>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <a href="/profile">Profile</a>
                </div>
                <div className={classes.item}>
                    <a href="/dialogs">Messages</a>
                </div>
                <div className={classes.item}>
                    <a href="">News</a>
                </div>
                <div className={classes.item}>
                    <a href="">Music</a>
                </div>
                <div className={classes.item}>
                    <a href="">Settings</a>
                </div>
            </nav>
        </div>
    )
}

export default Music;