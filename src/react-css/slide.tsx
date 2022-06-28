import React from 'react';
import './slide.css';
import{
    headingStyle,
        headingFinalStyle,
        bodyStyle,
        textCenter,
        listUnstyled

} from './slide.style';

const el=(

    <div className="slide">
        <h1 style={headingFinalStyle}>Styling in React</h1>
        <hr/>
        <ul style={{...bodyStyle,...listUnstyled}}>
            <li>You can style using CSS classes</li>
            <li>You can style using inline style</li>

        </ul>
    </div>
) ;
export default el;
