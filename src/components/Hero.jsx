import React, { useState } from 'react'
// import heroImg01 from "../../assets/images/hero-img01.png"
// import heroImg02 from "../../assets/images/hero-img02.png"
// import heroImg03 from "../../assets/images/hero-img03.png"
import { Link } from 'react-router-dom'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillYoutube, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const socialLinks = [
    {
        path: "/",
        icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />
    },
    {
        path: "/",
        icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
    },
    {
        path: "/",
        icon: <AiFillInstagram className='group-hover:text-white w-4 h-5' />
    },
    {
        path: "/",
        icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
    },
]

const Hero = () => {

    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => setShowPopup(true);

    const closePopup = () => setShowPopup(false);

    return (
        <section className='hero__section pt-[60px] 2xl:h-[800px]'>
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">

                    {/* ================= hero content ================ */}

                    <div className="">
                        <div className="flex items-center gap-3 mt-4">
                            {socialLinks.map((link, index) => (
                                <Link to={link.path} key={index} className='w-9 h-9 border border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                        <div className="lg:w-[570px] ">
                            <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                                Contact
                            </h1>
                            <p className="text__para mt-[18px]">
                                Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse catalysts for change for interoperable meta-services.
                            </p>

                            <button className='btn' onClick={openPopup}> Make an Appointment</button>
                        </div>

                        {/* ============ hero counter ================= */}


                    </div>

                    {/* ============ hero counter ================= */}

                    {/* <div className="flex gap-[30px] justify-end ">
                        <div className="">
                            <img src={heroImg01} className='w-full' alt="" />
                        </div>

                        <div className="mt-[30px] ">
                            <img src={heroImg02} className='w-full mb-[30px] ' alt="" />
                            <img src={heroImg03} className='w-full ' alt="" />
                        </div>
                    </div> */}


                </div>
            </div>

            {showPopup && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999999] p-4"
                    onClick={closePopup}
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm md:max-w-md lg:max-w-lg relative mt-[55px]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center"
                            onClick={closePopup}
                        >
                            ✕
                        </button>

                        <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Book Appointment</h2>
                        <form>
                            {/* Name Field */}
                            <div className="mb-3">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="mb-3">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Appointment Date */}
                            <div className="mb-3">
                                <label htmlFor="date" className="block text-sm font-medium text-gray-600 mb-1">
                                    Appointment Date
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Select Doctor */}
                            <div className="mb-3">
                                <label htmlFor="doctor" className="block text-sm font-medium text-gray-600 mb-1">
                                    Select Doctor
                                </label>
                                <select
                                    id="doctor"
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                >
                                    <option value="">Select a doctor</option>
                                    <option value="dr-smith">Dr. Smith</option>
                                    <option value="dr-johnson">Dr. Johnson</option>
                                    <option value="dr-williams">Dr. Williams</option>
                                </select>
                            </div>

                            {/* Additional Message */}
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
                                    Additional Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="2"
                                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    placeholder="Enter any additional details"
                                ></textarea>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                                    onClick={closePopup}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Hero