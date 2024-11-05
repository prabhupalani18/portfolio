import AboutImg from "../assets/about.png";

export default function About() {
    return (
        <section className="flex flex-col md:flex-row bgprimary px-5">  
            <div className="flex-shrink-0 md:w-1/2 w-full">
                <img src={AboutImg} alt="About me" className="w-full h-auto" />
            </div>
            <div className="md:w-1/2 w-full flex justify-center items-center">
                <div className="text-center md:text-left font-hero-font md:px-8">
                    <h1 className="text-4xl text-white border-b-4 border-[#fcbe91] mb-5 w-[160px] font-bold">
                        About me
                    </h1>
                    <p className="text-2xl text-white">Hi, I'm Prabhu Palani, a Full Stack Developer with expertise in 
                        the MERN stack (MongoDB, Express.js, React, Node.js) and Java. I'm also an AWS Certified Developer, 
                        which allows me to design and deploy scalable, secure, and efficient cloud solutions. <br/><br/>
                        I’m passionate about building dynamic, high-performing web applications and solving complex challenges with clean, 
                        maintainable code. Whether it's front-end, back-end, or cloud infrastructure, 
                        I bring a comprehensive skill set to every project. Let's connect and create something impactful together!</p>
                </div>
            </div>
        </section>
    );
}
