import llm_img from "../../assets/Images/artificalIntelligence.png";

const Home = () => {

    return (
        <>
            <div className="mt-14">
                <div className="flex flex-wrap">
                    <div className="ml-28 mt-24 mb-32">
                        <h1 className="text-6xl text-black font-extrabold">Welcome to</h1>
                        <h1 className="text-6xl text-black font-extrabold mt-1">
                            The world of
                        </h1>
                        <h1 className="text-6xl text-white font-extrabold bg-purple-500 mt-1  p-5 rounded-3xl">
                            Artificial Intelligence
                        </h1>
                        <h1 className="italic text-3xl text-black font-bold">
                            "Empowering the future with AI-driven innovation."
                        </h1>
                    </div>
                    <img src={llm_img} className="ml-36 mt-4 rounded-xl" alt="large language model"></img>
                </div>
            </div>
        </>
    );
};
export default Home;
