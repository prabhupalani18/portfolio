import heroImg from "../assets/dev.png";
import { AiOutlineLinkedin, AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row px-5 py-32 bgsecondary justify-center">
            <div className="md:w-1/2 flex flex-col">
                <h1 className="text-pretty text-6xl font-hero-font">
                    Hi there <br /> I am Prabhu Palani
                    <p className="text-bold-black-50 text-3xl">
                        I am a Full stack developer
                    </p>
                </h1>
                <div className="flex py-10">
                <a href="#" className="pr-2 hover:text-white"><AiOutlineLinkedin size={40}/></a>
                <a href="#" className="pr-2 hover:text-white"><AiOutlineFacebook size={40}/></a>
                <a href="#" className="pr-2 hover:text-white"><AiOutlineInstagram size={40}/></a>
                <a href="#" className="hover:text-white"><AiOutlineTwitter size={40}/></a>
                </div>
            </div>
            <img src={heroImg} alt="software developer" className="md:w-1/3" />
        </section>
    );
}
