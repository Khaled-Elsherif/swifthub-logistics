"use client"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { useI18n } from "@/lib/i18n"

const testimonials = [
	{
		name: "Guy Hawkins",
		role: "Client",
		img: "https://i.pravatar.cc/48?img=1",
		rating: 4.5,
		text: "Outstanding logistics service! My shipment arrived on time with real-time tracking. ",
	},
	{
		name: "JIdan.D",
		role: "CEO",
		img: "https://i.pravatar.cc/48?img=2",
		rating: 4.5,
		text: "Exceptional service and on-time deliveries every time.",
	},
	{
		name: "Cooper",
		role: "Developer",
		img: "https://i.pravatar.cc/48?img=3",
		rating: 4.5,
		text: "Great experience from start to finish. Customer service is responsive.",
	},
	{
		name: "Jane Doe",
		role: "Manager",
		img: "https://i.pravatar.cc/48?img=4",
		rating: 5,
		text: "Professional and reliable. The best logistics partner we've worked with.",
	},
	{
		name: "John Smith",
		role: "Business Owner",
		img: "https://i.pravatar.cc/48?img=5",
		rating: 4,
		text: "Fast delivery and excellent support. Highly recommended.",
	},
	{
		name: "Emily Clark",
		role: "Operations Lead",
		img: "https://i.pravatar.cc/48?img=6",
		rating: 5,
		text: "Their tracking system is a game changer for our business.",
	},
]

export default function CustomerTestimonials() {
	const { t, isRtl } = useI18n()
	const [current, setCurrent] = useState(0)
	const cardsToShow = 3

	const handlePrev = () => {
		setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
	}

	const handleNext = () => {
		setCurrent((prev) => (prev + 1) % testimonials.length)
	}

	// Calculate visible cards (looping)
	const visibleCards = []
	for (let i = 0; i < cardsToShow; i++) {
		visibleCards.push(testimonials[(current + i) % testimonials.length])
	}

	return (
		<section className="w-full px-0 py-16 bg-gray-50">
			<div className="mx-auto w-full">
				<h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
					{t('trusted.title')}
				</h2>
				<p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
					{t('trusted.description')}
				</p>
				{/* Swiper-like testimonials */}
				<div className="relative w-full">
					<div className="flex gap-8 justify-center pb-8 w-full px-8 transition-all duration-500">
						{visibleCards.map((t, i) => (
							<div
								key={t.name}
								className={`bg-white rounded-2xl shadow-xl p-8 min-w-[340px] max-w-xl flex-1 border border-gray-100 ${
									i === 1 ? "scale-105 z-10" : "opacity-70"
								} transition-all duration-300`}
								style={{ marginTop: i === 1 ? 0 : 32 }}
							>
								<div className="flex items-center gap-2 mb-2">
									<div className="flex">
										{[...Array(Math.floor(t.rating))].map((_, idx) => (
											<Star
												key={idx}
												className="w-5 h-5 fill-orange-500 text-orange-500"
											/>
										))}
										{t.rating % 1 !== 0 && (
											<Star
												className="w-5 h-5 fill-orange-500 text-orange-500 opacity-70"
												key="half-star"
											/>
										)}
									</div>
									<span className="ml-2 text-orange-500 font-semibold">
										{t.rating}
									</span>
								</div>
								<p className="text-gray-700 mb-6">{t.text}</p>
								<div className="flex items-center gap-3">
									<Image
										src={t.img}
										alt={t.name}
										width={40}
										height={40}
										className="rounded-full object-cover"
									/>
									<div>
										<div className="font-bold text-gray-900">{t.name}</div>
										<div className="text-xs text-gray-500">{t.role}</div>
									</div>
								</div>
							</div>
						))}
					</div>
					{/* Swiper navigation */}
					<div className="flex justify-center items-center gap-2 mt-2">
						<Button
							variant="outline"
							size="icon"
							onClick={handlePrev}
							className="w-12 h-12 rounded-full border-gray-300 hover:border-gray-400 bg-white"
						>
							<ChevronLeft className={`w-5 h-5 text-gray-600 ${isRtl ? "rotate-180" : ""}`} />
						</Button>

						<Button
							size="icon"
							onClick={handleNext}
							className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white"
						>
							<ChevronRight className={`w-5 h-5 ${isRtl ? "rotate-180" : ""}`} />
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
