import react, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Contact = () => {
	const form = useRef();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [error, setError] = useState(false);
	const [validEmail, setValidEmail] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const navigate = useNavigate();

	const handleLinkClick = (link) => {
		navigate(`${link}`);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();
		setError(false);
		setValidEmail(false);
		setFormSubmitted(false);

		if (!name || !email || !message) {
			setError(true);
			return;
		} else {
			if (!verifyEmail(email)) {
				setValidEmail(true);
				return;
			} else {
				emailjs
					.sendForm("service_sf088q1", "template_imx9yy8", form.current, {
						publicKey: "G9tybsIn_pT3ncfED",
					})
					.then(
						() => {
							console.log("SUCCESS!");
						},
						(error) => {
							console.log("FAILED...", error.text);
						}
					);
				setFormSubmitted(true);
			}
		}
	};

	const verifyEmail = (email) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	return (
		<div className="bg-black pt-20 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-32">
			<header className="flex flex-col items-center justify-center mb-8">
				<h1 className="p-5 text-5xl text-primary font-display">Contact Us:</h1>
				<p className="text-2xl text-neutral text-center font-display">
					We would love to assist you!
				</p>
			</header>
			{!formSubmitted && (
				<form
					className="w-2/3 flex flex-col items-center gap-4 mx-auto p-4 rounded-lg shadow-lg"
					ref={form}
					onSubmit={sendEmail}
				>
					{error && (
						<p className="text-error text-lg">*Please fill out all fields.</p>
					)}
					{validEmail && (
						<p className="text-error text-lg">*Please enter a valid email.</p>
					)}
					<label className="input input-bordered border-primary flex items-center gap-2 text-primary bg-transparent">
						Name:
						<input
							type="text"
							className="grow text-neutral"
							placeholder="John Doe"
							name="user_name"
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</label>
					<label className="input input-bordered border-primary flex items-center gap-2 text-primary bg-transparent">
						Email:
						<input
							type="text"
							className="grow text-neutral"
							placeholder="Your email address"
							name="user_email"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</label>
					<textarea
						className="textarea w-96 max:lg-w-72 h-60 text-neutral grow bg-transparent border-primary border-2 p-2"
						name="message"
						placeholder="Your message here..."
						onChange={(e) => {
							setMessage(e.target.value);
						}}
					/>
					<button
						className="btn btn-primary btn-md text-black-600 hover:bg-accent border-0 hover:text-neutral hover:border-0"
						onClick={sendEmail}
					>
						Send Form
					</button>
				</form>
			)}
			{formSubmitted && (
				<div className="mb-96 flex flex-col items-center">
					<p className="text-2xl text-success text-center font-display mb-5">
						Thank you for submitting the form! We will get back to you as soon
						as possible.
					</p>
					<div className="flex justify-center">
						<button
							onClick={() => handleLinkClick("/faq")}
							className="btn btn-primary btn-lg text-black-600 hover:bg-accent border-0 hover:text-neutral hover:border-0 mx-5"
						>
							FAQ
						</button>
						<button
							onClick={() => handleLinkClick("/room-selector")}
							className="btn btn-primary btn-lg text-black-600 hover:bg-accent border-0 hover:text-neutral hover:border-0 mx-5"
						>
							Room Selector
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Contact;
