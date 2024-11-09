import P1 from '../assets/p1.png';

export default function Projects() {
    return (
        <section className="flex px-5 py-20 justify-center bgsecondary">
            <div className="w-1/2">
                <div className="justify-center flex">
                    <h1 className="font-hero-font text-4xl text-white border-b-4 border-[#e46d5d] mb-5 w-[140px] font-bold">
                        Projects
                    </h1>
                </div>
            </div>
            <div className="w-1/2">
                <div className="flex">
                    <img src = {P1} alt="Task Manager"/>
                </div>
            </div>
        </section>
    );
}
