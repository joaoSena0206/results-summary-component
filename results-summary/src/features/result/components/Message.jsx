export default function Message({
    score,
}) {
    let message = "";
    let title = "";

    if (score >= 90) {
        title = "Outstanding";
        message =
            "Excellent! You're among the top performers!";
    } else if (score >= 70) {
        title = "Great";
        message =
            "Great job! You're doing really well!";
    } else if (score >= 50) {
        title = "Good";
        message =
            "Good effort! Keep practicing to improve!";
    } else if (score >= 30) {
        title =
            "Needs Improvement";
        message =
            "You're getting there! Focus on your weak areas.";
    } else {
        title = "Try Again";
        message =
            "Keep trying! Learning takes time and practice!";
    }

    return (
        <div>
            <h1 className="text-[25px] font-bold">
                {title}
            </h1>

            <p className="text-[#BFBEFF] font-[600]">
                {message}
            </p>
        </div>
    );
}
