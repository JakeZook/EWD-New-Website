import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";

const BookingCC = () => {
	const bookingModalRef = useRef(null);

	useEffect(() => {
		bookingModalRef.current = document.getElementById("booking-modal");
		if (bookingModalRef.current) {
			bookingModalRef.current.close();
		}
	}, []);

	return (
		<div className="bg-black pt-20 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-32">
			<header className="flex flex-col items-center justify-center mb-8">
				<h1 className="p-5 text-5xl text-primary font-display text-center">
					Convention Center
				</h1>
				<p className="text-2xl text-neutral text-center font-display">
					Book your experience here!
				</p>
				<h1 className="mt-5 p-5 text-3xl text-primary font-display text-center">
					Private and Public rooms are available
				</h1>
				<p className="text-lg text-neutral text-center font-display p-3">
					To reserve a room for just your group, select the
					<span className="text-bold text-red-600"> “book entire room” </span>
					checkbox below.
				</p>
				<h1 className="mt-5 p-5 text-3xl text-primary font-display">
					Weekday Discount
				</h1>
				<p className="text-lg text-neutral text-center font-display p-3">
					Use discount code
					<span className="text-bold text-red-600"> “WEEKDAY” </span>
					for a discounted
					<span className="text-bold text-red-600"> PRIVATE GROUP </span>
					price of $5 OFF per person, Monday through Thursday before 5pm.
				</p>
				<p className="text-red-600 text-md text-center font-display p-3">
					Note: Be sure to select ‘book entire room’ to make your room private.
				</p>
				<p className="text-md text-neutral text-center font-display p-3">
					*Not valid on holidays or Team Building Events*
				</p>
			</header>
			<iframe
				src="/cc-booking.html"
				style={{
					width: "100%",
					height: "600px",
					border: "none",
					overflow: "visible",
				}}
				title="Booking Widget"
			></iframe>
		</div>
	);
};

export default BookingCC;
