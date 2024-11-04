import AboutImg from "../assets/about.png";

export default function About() {
    return (
        <section className="flex bgprimary px-5">
            <div className="w-1/2">
                <img src={AboutImg} alt="About me" className="md:w-1/2" />
            </div>
            <div className="w-1/2 flex justify-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl text-white border-b-4 mb-5 w-[160px]">
                        About me
                    </h1>
                    <p className="text-2xl text-white">Information about me</p>
                </div>
            </div>
        </section>
    );
}
