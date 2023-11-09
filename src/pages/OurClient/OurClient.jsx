import Marquee from "react-fast-marquee";
const OurClient = () => {
    return (
        <div className="my-16">
            <h1 className="text-2xl font-semibold text-center mb-7">Our Most Esteemed Client</h1>
            <Marquee >
                <img className="mr-10" src="https://www.react-fast-marquee.com/static/media/ibm.bcec6b9a.png" alt="" />
                <img className="mr-10" src="https://www.react-fast-marquee.com/static/media/dell.09332c44.png" alt="" />
                <img className="mr-10" src="https://www.react-fast-marquee.com/static/media/microsoft.4a9a93f0.png" alt="" />
                <img className="mr-10" src="https://i.ibb.co/BKNVT42/download-1.png" alt="" />
                <img className="mr-10" src="https://www.react-fast-marquee.com/static/media/princeton.5d0a5006.png" alt="" />
            </Marquee>
        </div>
    );
};

export default OurClient;