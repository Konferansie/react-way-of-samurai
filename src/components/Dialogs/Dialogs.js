import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogitem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {

    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
};

const Dialogs = (props) => {

    let dialogData = [
        {id: 1, name: 'Tima'},
        {id: 2, name: 'Shelb'},
        {id: 3, name: 'Goma'},
        {id: 4, name: 'Kama'},
        {id: 5, name: 'Grenya'},
        {id: 6, name: 'Luc'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi! Who are you!'},
        {id: 3, message: 'Yo man'},
    ];

    let dialogElements = dialogData.map(d => <Dialogitem name={d.name} id={d.id}/>);
    let messagesElement = messagesData.map(m => <Message message={m.message} id={m.id} />);


    return (
        <div>
            <div className={s.dialogs}>

                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>

                <div className={s.messages}>
                    {messagesElement}
                </div>
            </div>
        </div>
    )
};

export default Dialogs