import CoursePage from "@/components/coursePage/CoursePage";

export const metadata = {
  title: "Jewellery designing course using JewelCAD in Rajkot | Param CAD Center",
  description:
    "In our JewelCAD course, expert instructors will guide you through the fundamentals of JewelCAD, helping you understand the features and functionalities of the software through practical exercises and hands-on training.",
  keywords:
    "jewelcad, jewelcad course,  jeweller designing course in Rajkot, jewelcad course near me, Jewellery designing course, jewellery cad center near me",
};

const JewelCad = () => {
  return (
    <CoursePage
      title={"JewelCAD 5.1"}
      image={"/course/jewelcad.jpeg"}
      description={
        "The Most Popular CAD/CAM Software for Jewelry. We here to provide detailed instructional learning for jewelry CAD. Lessons start at the most basic level, allowing the absolute beginner to get a structured guide into and through the world of CAD modeling. We teaches concepts and principles that allow you to get the most out of the manufacturing and rendering process. So you will learn how to build the right way; keeping it tidy, setting up the history well and creating variables is all knowledge that will allow you to build models that permit fluid and easy customization."
      }
      curriculum={[
        "Detailed Knowledge of Software Commands",
        "Basic Curve 2D Practice Small Semantic",
        "Introduce all Surfaces with 3D Jewelry Parts",
        "3D Practice of Ladies & Jents’ Ring, Payal, Bichiya",
        "Bengals, bracelets, Bali, Jumar, etc.",
        "Detailed Knowledge of STL, SLC & DXF File",
        "Detailed knowledge about RPT, casting, and filling",
        "Calculate Weight & Design Charges",
        "Rendering & Practical Experience",
        "100% Lifetime Practical Support",
      ]}
    />
  );
};

export default JewelCad;
