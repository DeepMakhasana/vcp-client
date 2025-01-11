import JewelleryCourse from "@/components/jewelleryCourse/JewelleryCourse";
import ComputerCourse from "@/components/computerCourse/ComputerCourse";

export const metadata = {
    title: "Jewellery design, Computer and Accounting courses | Param computer classes",
    description: "We specialize in jewellery courses, a trusted provider of CCC and Professional Accounting Software courses. courses like JewelCAD 5.1, Rhinoceros, CCC, Tally Prime, Miracle and CorelDRAW CNC.",
    keywords: "JewelCAD, Rhinoceros, CCC, Tally prime, Miracle and Coreldraw"
};

const Courses = async () => {
    return (
        <main>
            <JewelleryCourse />
            <ComputerCourse />
        </main>
    )
}

export default Courses
