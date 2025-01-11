import CoursePage from '@/components/coursePage/CoursePage';

export const metadata = {
    title: "Career boosting CCC Course in Rajkot | Param computer classes",
    description: "Looking to enhance your career prospects? Enrol in our complete CCC course to gain in-depth knowledge of computer concepts, and digital skills.",
    keywords: "CCC, CCC course in rajkot, CCC course near me, computer classes, param computer classes",
};

const ccc = () => {
    return (
        <CoursePage
            title={"CCC (Course on Computer Concepts)"}
            image={"/new-cccCourse.jpg"}
            description={"This programme has essentially been conceived with an idea of giving an opportunity to the common man to attain computer literacy thereby contributing to increased and speedy PC penetration in different walks of life."}
            desc_2={true}
            curriculum={["Windows 10 & Office License", "Microsoft Word, Excel & PowerPoint", "Gujarati & Hindi Typing", "Internet, Print Solution, Picture Manager", "Photo & Video Editing", "Data Backup & DVD Writing"]}
        />
    )
}

export default ccc

