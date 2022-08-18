import React,{ useState }from 'react';

export default function CharaacterCard(props){
    const [active, setActive] = useState(false);

    const activate = () => {
        if(!active){
         setActive(true)
         props.activationHandler(props.value)
       } 
    }

    const className = `card ${active ? 'activeCard' : ''}`
    return(
        <div className={className} onClick={activate}>{props.value}</div>
    )
}