export default function Score({
    score,
}) {
    return (
        <div className="rounded-full bg-[#462FE2] aspect-square w-fit p-5">
            <h1 className="text-[50px] font-bold">
                {score}
            </h1>
            <h2 className="text-[#9387f8]">
                of 100
            </h2>
        </div>
    );
}
