import * as React from "react";
import debounce from "debounce";

const withWindowDimensions = Comp => props => {

        const [size, setSize] = React.useState( { width: 0, height: 0 })

     

        let updateWindowDimensions = debounce(() => {
            setSize({ width: window.innerWidth, height: window.innerHeight });
        });
        React.useEffect(() => {
            // 
            window.addEventListener("resize", updateWindowDimensions);
            return () => {
               
              window.removeEventListener("resize", updateWindowDimensions);
            };
        }, [size]);

        React.useEffect(()=>{
            updateWindowDimensions()
        }, [props])
        
            return (
                <Comp
                    {...props}
                    windowWidth={size.width}
                    windowHeight={size.height}
                    isMobileSized={size.width < 700}
                />
            );
        
   
}

export default withWindowDimensions