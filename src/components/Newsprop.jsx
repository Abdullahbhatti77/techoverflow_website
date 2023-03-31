import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap'

export default function Newsprop(props) {
    return (
        <>
            <div>
                <Card inverse>
                    <CardImg
                        alt="Card image cap"
                        src={props.imgsrc}
                        style={{
                            height: 270
                        }}
                        width="100%"
                    />
                    <CardImgOverlay>
                        {/* <CardText style={{marginTop: '150px', backgroundColor: '#00B9FA'}}>
                            {props.title}
                        </CardText> */}
                        <span class="badge text-bg-primary" style={{marginTop: '150px'}}>{props.title}</span>
                        <CardText style={{fontSize: '18px'}}>
                            {props.text}
                        </CardText>
                    </CardImgOverlay>
                </Card>
            </div>
        </>
    )
}
