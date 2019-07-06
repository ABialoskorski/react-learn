import React from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
	return (
		<div className="container">
			<h4 className="center">About Component with random colour</h4>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
				voluptatum suscipit commodi nulla repudiandae, quaerat eaque.
				Vitae magnam sit aspernatur velit dolorem quis dolore ullam
				facilis? Molestias repudiandae eveniet fugiat?
			</p>
		</div>
	);
};
export default Rainbow(About);
