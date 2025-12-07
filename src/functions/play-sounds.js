import { Howl } from "howler";

export function playRandomSound(soundsArray) {
	const randomIndex = Math.floor(Math.random() * soundsArray.length);
	const selectedSound = soundsArray[randomIndex];

	const sound = new Howl({
		src: [selectedSound],
		volume: 0.5,
		onload: function () {
			sound.play();
		},
	});
	console.log("Playing sound:", selectedSound);
}
