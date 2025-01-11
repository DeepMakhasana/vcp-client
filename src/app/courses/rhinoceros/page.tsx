import CoursePage from '@/components/coursePage/CoursePage';

export const metadata = {
    title: "Master the Jewellery Design with Rhinoceros in Rajkot | Param CAD Center",
    description: "Using Rhinoceros, our knowledgeable educators will walk you through the full jewellery design process. From sketching and concept development to 3D modelling and rendering.",
    keywords: "Rhinoceros, Rhinoceros course, Rhinoceros course in rajkot, jewellery designing course, Rhinoceros software course",
};

const Rhinoceros = () => {
    return (
        <CoursePage
            title={"Rhinoceros For Jewelry Design"}
            image={"/new-rhinoceros.jpg"}
            description={"Rhino powers the jewelry industry’s design needs! From the smallest boutique to the world’s largest manufacturers. Enjoy the complete freedom to design and manufacture as far as your imagination can take you."}
            curriculum={["Basic Curve 2D Practice", "Introduce Surface with 3D Parts", "Detail Knowledge of Software Commands", "Detail Knowledge of STL, SLC & DXF File", "Practice Model like Payal pc, Jumar, ", "Ladies Ring, Jent’s Ring, Tops, Buti,", "Bengals, Bali, etc...", "Calculate Weight & Charges", "Rendering & Practical Experience"]}
        />
    )
}

export default Rhinoceros
