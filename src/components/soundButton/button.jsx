import "./button.css";
export default function SoundButton({ onClick, text }) {
	return (
		<div className='button-container'>
			<div className='button-case'>
				<div className='button-inside'>
					<button className={`yes-button`} onClick={onClick}>
						{text}
					</button>
				</div>
			</div>
		</div>
	);
}
