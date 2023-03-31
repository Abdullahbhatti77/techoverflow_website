import React from 'react'

export default function Outcomeprop(props) {
    return (
        <>
            <img src={props.imgsrc} height={30} width={30} />
            <h4 style={{color: 'white', marginTop: '20px'}}>{props.title}</h4>
            <p style={{color: '#01AEEB'}}>{props.subtitle}</p>
            <p style={{color: '#A19F95'}}>{props.o1}</p>
            <p style={{color: '#A19F95'}}>{props.o2}</p>
            <p style={{color: '#A19F95'}}>{props.o3}</p>
            <p style={{color: '#A19F95'}}>{props.o4}</p>
        </>
    )
}
