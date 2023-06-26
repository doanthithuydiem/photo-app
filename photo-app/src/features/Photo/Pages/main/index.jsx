import React from "react";
import Banner from "../../../../components/banner";
import { Link } from "react-router-dom";

function MainPage(){
return (<div className="photo-main">
    <Banner>
        <img 
         src="../../../../assets/images"
         />
    </Banner>
    <Link to="/photos/add">add</Link>

</div>);
}
export default MainPage;