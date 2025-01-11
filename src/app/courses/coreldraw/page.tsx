import CoursePage from '@/components/coursePage/CoursePage';

export const metadata = {
    title: "CorelDRAW CNC Course in Rajkot | Param computer classes",
    description: "Learn CNC & Laser design in CorelDRAW. Learn vector design, then set your paths and create your CNC program in the CNC software. The path and settings from G-Code become part of the CorelDRAW file.",
    keywords: "coreldraw CNC, coreldraw CNC course in rajkot, coreldraw course near me, coreldraw classes, param computer classes",
};


const corelDraw = () => {
    return (
        <CoursePage
            title={"CorelDRAW CNC"}
            image={"/new-coreldraw.jpg"}
            description={"Learn CNC & Laser design in CorelDRAW. Learn vector design, then set your paths and create your CNC program in the CNC software. The path and settings from G-Code become part of the CorelDRAW file."}
            curriculum={["Basic 2D Drawings", "Detail Knowledge of Toolbox", "CNC & Laser Cutting design", "Engraving Design", "Hole Design", "Ball Design", "Export & Use PLT & DXF File"]}
        />
    )
}

export default corelDraw
