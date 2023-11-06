import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className="my-10 rounded-lg lg:flex justify-center items-center bg-black lg:h-[700px] h-fit gap-5">
            <div className="lg:m-10 m-0 lg:p-0 p-3 lg:w-1/3 w-full text-white space-y-6">
                <h1 className="text-6xl ">Part Time</h1>
                <p>PartTime is a vibrant marketplace offering a wide range of services including web development, graphic design, and digital marketing. It’s a platform where sellers meet buyers, fostering a community that thrives on creativity and innovation. Whether you’re a business seeking professional services or a freelancer looking to monetize your skills, PartTime is your go-to destination.</p>
                <p>Our mission at PartTime is to empower individuals and businesses by providing a platform for seamless transactions. Our vision is to create a global marketplace where skills meet opportunities, fostering growth, creativity, and innovation.</p>
            </div>
            <div className="lg:w-2/3 w-full">
                <Marquee speed={100} direction="right">

                    <img
                        src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
                        className="h-[600px]"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1491951931722-5a446214b4e2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
                        className="h-[600px]"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
                        className="h-[600px]"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
                        className="h-[600px]"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1571677246347-5040036b95cc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                        className="h-[600px]"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
                        className="h-[600px]"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
                        className="h-[600px]"
                    />
                </Marquee>
            </div>
        </div>
    );
};

export default Banner;