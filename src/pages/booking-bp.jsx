import React, { useRef, useEffect } from "react";

const BookingBP = () => {
	const bookingModalRef = useRef(null);

	useEffect(() => {
		bookingModalRef.current = document.getElementById("booking-modal");
		if (bookingModalRef.current) {
			bookingModalRef.current.close();
		}
	}, []);

	return (
		<div className="bg-black pt-20 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-32">
			<h1>Ballpark Booking</h1>
		</div>
	);
};

export default BookingBP;
