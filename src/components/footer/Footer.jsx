import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gray-900 mt-12 h-96 text-white grid grid-cols-2 '>
            <div className="border-r-2 border-gray-800 flex flex-col gap-6 p-4 w-[45vw] ml-10 mt-10 mx-auto">
                <h2 className="text-5xl text-green-700 text-nowrap">Healty Food</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea totam incidunt, accusantium illo veritatis corrupti vero eum quo neque illum reprehenderit doloribus modi sunt pariatur ullam iusto.</p>
                <div className="flex gap-8 ">
                    <FaFacebookF className="text-2xl border-2 rounded-full border-white h-10 w-10 p-2" />
                    <FaTwitter className="text-2xl border-2 rounded-full border-white h-10 w-10 p-2" />
                    <FaLinkedinIn className="text-2xl border-2 rounded-full border-white h-10 w-10 p-2" />
                </div>
            </div>
            <div className="flex m-auto gap-28 mt-10 ">
                <div className="flex flex-col gap-6 border-r-2 p-4 px-10 border-gray-800">
                    <h2 className="text-4xl">COMPANY</h2>
                    <div className="flex flex-col gap-2">
                        <span>Home</span>
                        <span>About Us</span>
                        <span>Delivery</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
                <div className="flex flex-col p-4 gap-2">
                    <div className="text-4xl text-nowrap mb-5">GET IN TOUCH</div>
                    <span>+91 8000020803</span>
                    <span>healthyfood@gmail.com</span>
                </div>
            </div>
        </div>
    )
}

export default Footer