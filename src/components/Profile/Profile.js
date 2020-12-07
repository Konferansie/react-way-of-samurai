import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (

        <div className="content">
            <img
                src="data:image/jpeg;base64,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"
                alt=""/>

            <div> Ava + Descc</div>

            <div>
                My Post

                <div>new Post</div>

                <div>
                    <div className={classes.item}>POst 1</div>
                    <div className={classes.item}>POst 2</div>
                    <div className={classes.item}>POst 3</div>
                </div>

            </div>

        </div>
    )
}

export default Profile;