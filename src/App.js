import "./App.css";
import SoundButton from "./components/soundButton/button";
import { playRandomSound } from "./functions/play-sounds";
import yes from "./assets/sounds/yes";
import wrong from "./assets/sounds/wrong";
import { useState } from "react";

function App() {
	const [showVideo, setShowVideo] = useState(false);

	return (
		<div className='App'>
			<div
				style={{
					flex: 1,
					display: "flex",
					gap: "10px",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<SoundButton onClick={() => playRandomSound(yes)} text={"YES"} />
				<SoundButton onClick={() => playRandomSound(wrong)} text={"YES"} />
				<SoundButton onClick={() => setShowVideo(true)} text={"YES"} />
			</div>
			{showVideo && (
				<div
					onClick={() => setShowVideo(false)}
					style={{
						position: "fixed",
						top: "0",
						left: "0",
						right: "0",
						bottom: "0",
						zIndex: 1000,
					}}>
					<div
						onClick={(e) => e.stopPropagation()}
						style={{
							position: "fixed",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							zIndex: 1001,
							animation: "emerge 0.3s ease-out",
						}}>
						<button
							onClick={() => setShowVideo(false)}
							style={{
								position: "absolute",
								top: "-30px",
								right: "0",
								background: "white",
								border: "none",
								fontSize: "24px",
								cursor: "pointer",
							}}>
							✕
						</button>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/dQw4w9WgXcQ?si=tPBIKDP5B8KGLada&autoplay=1'
							title='YouTube video'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
