import React from "react";
const Services = ()=>{

    /* internal css */
    const styles = {
        services:{
            border:'1px solid #ccc',
            margin:20,
            padding:25
        },
        abc:{
            border:'10px solid #2c2c2c',
            margin:20,
            padding:25
        },
        xyz:{},
        h1:{
            color:'teal'
        },
        p:{
            textDecoration:'underline'
        }
    }
    return (
        <div className='services' >
            <div style={styles.services}>
            <h1>Services</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div style={styles.abc}>
                <h1 style={styles.h1}>ABC Div</h1>
                <p style={styles.p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            
        </div>
        
    )

}

export default Services