import CoursePage from '@/components/coursePage/CoursePage';

export const metadata = {
    title: "Tally prime Course in Rajkot | Param computer classes",
    description: "The most popular accounting software, Tally Prime, will be covered in detail in our Tally Prime course. This training is appropriate for any skill level, no matter previous Tally experience or beginning status.",
    keywords: "tally, tally course in rajkot, tally course near me, accounting software, param computer classes",
};

const tally = () => {
    return (
        <CoursePage
            title={"Tally Accounting"}
            image={"/tallyCourse.jpg"}
            description={"If you are a beginner in the Accounting and Finance domain, then Tally Prime is the course designed for your career growth. It covers topics from basic to intermediate Financial Accounting concepts."}
            curriculum={["Manual Accounting", "Singal & Double Entry System", "Adjustment & Reports", "Introduction of Income Tax & Pan CARD", "Detail Knowledge in GST", "Recording GST Transactions", "GST Filing Concepts"]}
        />
    )
}

export default tally
