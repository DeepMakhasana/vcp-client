import CoursePage from "@/components/coursePage/CoursePage";

export const metadata = {
  title: "CorelDRAW CNC Course in Rajkot | Param Jewellery CAD Center",
  description:
    "Learn CNC & Laser design in CorelDRAW. Learn vector design, then set your paths and create your CNC program in the CNC software. The path and settings from G-Code become part of the CorelDRAW file.",
  keywords:
    "coreldraw CNC, coreldraw CNC course in rajkot, coreldraw course near me, coreldraw classes, Param Jewellery CAD Center",
};

const corelDraw = () => {
  return (
    <CoursePage
      title={"CorelDRAW CNC"}
      image={"/course/coreldraw.jpg"}
      description={
        "Learn CNC & Laser design in CorelDRAW. Learn vector design, then set your paths and create your CNC program in the CNC software. The path and settings from G-Code become part of the CorelDRAW file."
      }
      curriculum={[
        "Basic 2D Drawings with pen tool",
        "Detailed Knowledge of Toolbox & Commands",
        "CNC & laser cutting design",
        "Single-Line Text in English, Gujarati & Hindi",
        "Silver & Gold Bangles Designing, etc.",
        "Center, Punch, Engraving Design",
        "Hole/Bindi Designing",
        "Ball/Para Designing",
        "Export & Use PLT & DXF File",
        "100% Lifetime Practical Support",
      ]}
    />
  );
};

export default corelDraw;
