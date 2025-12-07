import React, { useState } from "react";
import "./button.css";
export default function SoundButton({ onClick, text }) {
	const [isPressed, setIsPressed] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className='button-container'>
			<div className='button-case'>
				<div className='button-inside'>
					<button
						className={`yes-button`}
						onClick={onClick}
						onMouseDown={() => setIsPressed(true)}
						onMouseUp={() => setIsPressed(false)}
						onMouseEnter={() => setIsHovered(false)}
						onMouseLeave={() => setIsHovered(false)}>
						{text}
					</button>
				</div>
			</div>
		</div>
	);
}
