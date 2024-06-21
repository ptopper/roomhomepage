


export function Image(props){
    return(
        <div style={{backgroundImage:`url(${props.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height:"100%",
                           
                    }} />
    )
}