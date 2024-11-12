import P1 from '../assets/p1.png';
import P2 from '../assets/p2-weather.png';
import P3 from '../assets/p3-ticket.png';

export default function Projects() {
    return (
        <section className="flex flex-col px-5 py-20 justify-center bgsecondary">
            <div className="w-1/2">
                <div className="justify-center flex">
                    <h1 className="font-hero-font text-4xl text-white border-b-4 border-[#e46d5d] mb-5 w-[140px] font-bold">
                        Projects
                    </h1>
                </div>
            </div>
            <div className="w-1/2">
                <div className="flex px-10 gap-2">
                    <img className='h-[300px] transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-[#e46d5d] hover:ring-opacity-50' src = {P1} alt="Chat App"/>
                    <img className='h-[300px] transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-[#e46d5d] hover:ring-opacity-50' src = {P2} alt="Weather App"/>
                    <img className='h-[300px] transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-[#e46d5d] hover:ring-opacity-50' src = {P3} alt="Ticket booking App"/>
                </div>
            </div>
        </section>
    );
}
