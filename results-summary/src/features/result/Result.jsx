import Message from "./components/Message";
import Score from "./components/Score";

export default function Result({
    score,
}) {
    return (
        <section className="bg-gradient-to-b from-indigo-500 to-[#3630EC] text-white p-5 flex flex-col items-center text-center rounded-b-4xl">
            <h1 className="text-[#D7C9FF] font-bold mb-5">
                Your Result
            </h1>

            <div className="flex flex-col items-center space-y-5">
                <Score
                    score={
                        score
                    }
                />
                <Message
                    score={
                        score
                    }
                />
            </div>
        </section>
    );
}
