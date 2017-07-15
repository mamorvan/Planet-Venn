var React = require("react");

//making this a stateless component since it only needs to render
const Footer = () => {
	    return (
            <div id="footer">
	    	    <p>Created by Project-Probable &#169; 2017</p>
                <a href="https://github.com/Mission-probable/Planet-Venn"><img src="../../../public/images/github.png" alt="github logo" width="50"/></a>
            </div>
	   	);
};


module.exports = Footer;

