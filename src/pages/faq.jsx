import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Faq = () => {
	const navigate = useNavigate();

	const handleLinkClick = (link) => {
		navigate(`${link}`);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="bg-black pt-20 sm:pt-20 md:pt-28 lg:pt-32 xl:pt-32">
			<header className="flex flex-col items-center my-3">
				<h1 className="text-primary font-display text-5xl py-3">FAQ</h1>
				<h2 className="text-neutral font-display text-3xl ">
					Get in the know!
				</h2>
			</header>
			<div className="flex justify-center">
				<main className="w-2/3 my-5">
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" defaultChecked />
						<div className="collapse-title text-xl font-medium">
							How many locations do you have?
						</div>
						<div className="collapse-content">
							<p>
								For now, just one, located on 15th and Champa! However, we are
								expanding and opening our second location, EscapeWorks Ballpark,
								this summer!
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							Who will be in the room with us?
						</div>
						<div className="collapse-content">
							<p>
								That is up to you. You can book a private room for a minimum set
								of tickets (5 or 7 depending on the room) and no one else will
								be with your group – just check book the entire room on the
								booking page. Or, to save a little cash or if you would like to
								allow others to join you, leave book entire room unchecked –
								with no minimum number of players.
							</p>
							<p className="pt-3 text-primary">
								Note that Team Building Events (13 or more people) are always
								private with no other groups in your rooms.
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							Are escape rooms safe?
						</div>
						<div className="collapse-content">
							<p>
								We believe that escape rooms are one of the safest activities
								you can participate in. Many escape rooms still confine people
								in rooms, requiring a host to help you in an emergency or for a
								bathroom break. At EscapeWorks, you are never actually locked
								into a room. You are also never more than a minute away from a
								direct exit to the street without assistance or permission.
								EscapeWorks follows all fire and building codes to ensure the
								highest level of safety for our participants. In addition, all
								of our employees are trained and follow set procedures in the
								unlikely event of an emergency.
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							What hours are you open?
						</div>
						<div className="collapse-content">
							<p>Monday-Sunday: 10 am - 11 pm (Last game starts at 9:45 pm)</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							What are your prices?
						</div>
						<div className="collapse-content">
							<p>
								Our standard prices are
								<span className="text-primary">$35 per person </span>(plus
								service fees). If you book for a set minimum of tickets (5 or 7,
								depending on the room size), you can opt for a private room
								without other groups! Check our booking page for weekday
								discounts.
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							What forms of payment do you take?
						</div>
						<div className="collapse-content">
							<p>
								All payments are made in advance, at the time of booking, via
								credit card only. We do not accept cash.
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							Do you take walk-ins?
						</div>
						<div className="collapse-content">
							<p>
								Yes! Except during our busiest times on Friday nights and
								Saturdays, there are usually rooms available for walk-in
								customers to book, but this is not guaranteed. You might also be
								able to join a room which has been booked by another customer as
								a public room.
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							Do you have any online or virtual games?
						</div>
						<div className="collapse-content">
							<p>
								We have discontinued our virtual online games in order to give
								full attention to our in-person offerings.
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							Am I really locked in a room?
						</div>
						<div className="collapse-content">
							<p>
								We do not lock anyone inside our rooms – we do not believe this
								is safe. You can always leave any of our rooms the way you came
								in without permission or assistance, all the way out the
								exterior door of the building. The object of the game is to
								solve the series of puzzles (which in some rooms allows you to
								escape). We have emergency exits in every room, and we will not
								lock the doors behind you. But if you exit before solving the
								puzzle, it does not count as escaping!
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							What happens if I run out of time?
						</div>
						<div className="collapse-content">
							<p>
								An escape room is not much fun if it is not challenging. 60-70%
								of participants do not succeed in the 60 minute time frame.
								Please review the escape rates listed under each room. If this
								is your first escape room experience you may want to choose a
								room with a higher escape rate. If you are a seasoned
								clue-solver, choose a lower escape rate for a bigger challenge!
								If you do not escape in 60 minutes, our staff will take you
								through the clues you missed and answer any questions you have.
								You are always welcome to re-book a different adventure or even
								the same one again.
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							How many people are in the room?
						</div>
						<div className="collapse-content">
							<p>
								Our rooms are designed for 2-12 participants. The most effective
								teams are made of 6-8 participants, since more players give the
								advantage of additional minds collaborating. However, many
								groups with fewer than 6 players regularly beat the clock and
								finish the room.
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							How long is the experience?
						</div>
						<div className="collapse-content">
							<p>
								Each escape room experience is designed to give you 60 minutes.
								How long it takes to get out is up to you! You can see the
								record and average escape times on our escape rooms information
								page. Please plan to arrive 10 minutes early and depart 10
								minutes after the experience.
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							Are there physical or age restrictions?
						</div>
						<div className="collapse-content">
							<p>
								Physical Restrictions: Basic physical agility is part of playing
								our games. Please have each participant do a self assessment to
								ensure they can bend, crawl, stand, reach and duck. Please note
								we are located at the top of a flight of 20 stairs and do not
								have an elevator.
							</p>
							<p className="pt-3">
								Age Restrictions: All ages are welcome. We have designed our
								escape room experience for players ages 12 and up. Players age
								14 and under must be accompanied by a responsible, paying adult.
								If you are bringing children age 10 or under, you must book the
								entire room as a private experience (check the book entire room
								checkbox).
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							Is there a parking lot?
						</div>
						<div className="collapse-content">
							<p>
								Located ½ a block from the 16th street mall, there are ample
								metered street parking spots, and many parking lots/garages
								available
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							Is there a parking lot?
						</div>
						<div className="collapse-content">
							<p>
								Located ½ a block from the 16th street mall, there are ample
								metered street parking spots, and many parking lots/garages
								available
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							Do you do Team Building / Private Events?
						</div>
						<div className="collapse-content">
							<p>
								Yes! Escape rooms are one of the most effective ways to do team
								building events. Please see our{" "}
								<span
									onClick={() => handleLinkClick("/team-building")}
									className="text-primary"
								>
									team building page
								</span>{" "}
								for more details.
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							What should I bring?
						</div>
						<div className="collapse-content">
							<p>
								You will be on your feet for the entirety of the escape room
								experience, so we recommend wearing clothing and shoes that you
								can stand and move comfortably in for 60 minutes.
							</p>
							<p className="pt-3">
								We provide all that you need during the escape room experience.
								Prior to entering the room your group will have access to a
								locked compartment for your personal items (cell phones, purses,
								etc.). You will keep the key to the compartment for your group.
							</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-transparent border-primary border-2 my-3">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium">
							What happens if I need to change/cancel or if I am late?
						</div>
						<div className="collapse-content">
							<p>
								All changes and cancellations prior to 24 hours before the
								scheduled room must be done through a link on your confirmation
								booking email. Please note that there is a 50% penalty for
								cancellations between 24 and 48 hours prior to the scheduled
								room.
							</p>
							<p className="pt-3">
								Cancellations within 24 hours of the scheduled room are
								non-refundable with no exceptions. Within 48 hours, any changes
								must be made by calling us at 303-945-6521 and will be subject
								to a $35 surcharge per the booking agreement.
							</p>
							<p className="pt-3">
								All games begin at the scheduled time whether participants have
								arrived or not. We will get you in as quickly as possible.
								Please allow ample time for traffic and parking. If you arrive
								late, you will have less than 60 minutes to complete your room.
							</p>
							<p className="pt-3">
								Note: separate policies apply for Team Building events.
							</p>
						</div>
					</div>
				</main>
			</div>
			<section className="flex flex-col items-center">
				<h2 className="text-primary text-3xl p-3">Still have questions?</h2>
				<button
					onClick={() => handleLinkClick("/contact")}
					className="btn btn-primary text-black-600 btn-lg hover:btn-accent hover:text-neutral mb-5"
				>
					Contact Us
				</button>
			</section>
		</div>
	);
};

export default Faq;
