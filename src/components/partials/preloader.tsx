import { useEffect } from "react";
import "../../styles/_preloader.scss";
import { preLoaderAnim } from "../animations" 



function PreLoader() {  
    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <p>Hari - Front-End Developer</p>
            </div>
        </div>
    );
}

export default PreLoader
