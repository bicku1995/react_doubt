const headingStyle={
    fontSize: '4em'
    
    };
    
    const bodyStyle={
    fontSize: '2.5em'
    
    };
    
    const textCenter={
        textAlign: 'center'
    };
    
    const listUnstyled={
        listStyleType: 'none',
        padding: 0,
        margin: 0
    };
    
    const headingFinalStyle={
        ...headingStyle,
        ...textCenter
    };
    export{
        headingStyle,
        headingFinalStyle,
        bodyStyle,
        textCenter,
        listUnstyled
    };