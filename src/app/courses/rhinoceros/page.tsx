import CoursePage from "@/components/coursePage/CoursePage";

export const metadata = {
  title: "Master the Jewellery Design with Rhinoceros in Rajkot | Param CAD Center",
  description:
    "Using Rhinoceros, our knowledgeable educators will walk you through the full jewellery design process. From sketching and concept development to 3D modelling and rendering.",
  keywords:
    "Rhinoceros, Rhinoceros course, Rhinoceros course in rajkot, jewellery designing course, Rhinoceros software course",
};

const Rhinoceros = () => {
  return (
    <CoursePage
      title={"Rhinoceros 3D For Jewelry Design"}
      image={"/course/rhino.jpeg"}
      description={
        "Rhino powers the jewelry industry’s design needs! From the smallest boutique to the world’s largest manufacturers. Enjoy the complete freedom to design and manufacture as far as your imagination can take you."
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

export default Rhinoceros;
