import './feature.css'

const Feature = () => {
    return (
        < div >

            <div className="my-6 md:flex justify-center items-center gap-5  bgcolor rounded-md">
                <div>
                    <img
                        src="https://media.istockphoto.com/id/1493766948/photo/female-developers-using-ai-writes-the-code-for-data-analytics.webp?b=1&s=170667a&w=0&k=20&c=LElhQG2NeLld-yiAHrenHXI2tS2I_OF--qvvP4xKbP0="
                        className="rounded-md"
                    />
                </div>
                <div className="md:w-2/3 font text-white">
                    <h1 className="text-xl md:text-5xl pt-2 fontcolor pl-6">Empowering Digital Exchange 24/7</h1>
                    <p className="p-5 md:pt-6 font-bold fontcolor">
                        “Part Time” is a vibrant marketplace, a bridge connecting sellers and buyers in the realms of web development, digital marketing, and graphic design. Our motto, “Supporting Service,” reflects our commitment to providing 24/7 assistance to both sellers and buyers, ensuring a seamless and rewarding experience for all.
                    </p>
                    {/* <button onClick={window.print}>Download</button> */}
                </div>
            </div>
        </div >
    );
};

export default Feature;