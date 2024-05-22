import et from "../assets/et.jpg";
import ch from "../assets/ch.jpg";
import sp from "../assets/sp.jpg";
import bb from "../assets/bb.jpg";
import vh from "../assets/vh.jpg";
import sw from "../assets/sw.png";
import ex from "../assets/ex.png";

const roomData = [
	{
		name: "Egyptian Tomb",
		img: et,
		desc: "You and an intrepid team of archaeologists must enter an Egyptian tomb that’s been sealed since the 1940s. Your mission? To find information on a famed archaeologist who hasn’t been seen since entering the tomb decades ago.",
		escapeRate: 35.3,
		recordTime: 39.32,
		averageTime: 48.55,
		price: 35,
		link: "/egyptian-tomb",
		players: 8,
		location: "Convention Center"
	},
	{
		name: "Blackbeard's Brig",
		img: bb,
		desc: "On the hunt for Blackbeard the Pirate, you find yourself captured by the dastardly scoundrel and thrown into the ship’s brig. Now you must escape the brig and take the helm to sail away to freedom, with your booty in tow.",
		escapeRate: 45.8,
		recordTime: 36.05,
		averageTime: 54.29,
		price: 35,
		link: "/blackbeards-brig",
		players: 12,
		location: "Convention Center"
	},
	{
		name: "Vampire Hunter",
		img: vh,
		desc: "In EscapeWorks Denver’s newest (and most immersive) game room debut, ancient evil has been awakened in a town cemetery. Those who go outside after sunset, never return home.",
		escapeRate: 31.3,
		recordTime: 32.48,
		averageTime: 42.55,
		price: 38,
		link: "/vampire-hunter",
		players: 8,
		location: "Convention Center"
	},
	{
		name: "Speakeasy",
		img: sp,
		desc: "Take a trip back in time to 1926, the prohibition era. While alcohol is illegal, crime is on the rise in the form of back-alley deals, police collusion, and mobsters ruling the town. You see an innocent looking flower shop, but is it really what it seems?",
		escapeRate: 41.9,
		recordTime: 33.38,
		averageTime: 50.22,
		price: 35,
		link: "/speakeasy",
		players: 12,
		location: "Convention Center"
	},
	{
		name: "Casino Heist",
		img: ch,
		desc: "Our Casino Heist room gives you a taste of what it’s like to be double-crossed. After months of meticulous planning, the mastermind of the heist decides to go it alone.",
		escapeRate: 28.2,
		recordTime: 31.1,
		averageTime: 51.12,
		price: 35,
		link: "/casino-heist",
		players: 8,
		location: "Convention Center"
	},
	{
		name: "Space Wars",
		img: sw,
		desc: "Embark on a thrilling space escapade! Board the enemy ship, rescue the prisoners, and become a hero of the Galactic Alliance!",
		escapeRate: 28.2,
		recordTime: 31.1,
		averageTime: 51.12,
		price: 38,
		link: "/space-wars",
		players: 12,
		location: "Ballpark"
	},
	{
		name: "The Exorcism",
		img: ex,
		desc: "The Doctors and his daughter have disappeared. Rumors have it, they have succumb to demonic spirits.", 
		escapeRate: 28.2,
		recordTime: 31.1,
		averageTime: 51.12,
		price: 38,
		link: "/the-exorcism",
		players: 8,
		location: "Ballpark"
	},
	// {
	// 	name: "Wizard's Alley",
	// 	img: wa,
	// 	desc: "Your feline friend has ran away from home and into the mysterious Wizard's Alley. Be warned: sinister magic is around every corner.", 
	// 	escapeRate: 28.2,
	// 	recordTime: 31.1,
	// 	averageTime: 51.12,
	// 	price: 38,
	// 	link: "/wizards-alley",
	// 	players: 12,
	// location: "Ballpark"
	// },
];

export default roomData;
