import CoursePage from '@/components/coursePage/CoursePage';

export const metadata = {
    title: "ArtCAM Course in Rajkot | Param Jewellery CAD Center",
    description: "ArtCAM is a versatile CAD/CAM software that has been widely used in jewelry design for creating intricate and detailed models.",
    keywords: "ArtCAM, ArtCAM course in rajkot, ArtCAM classes in rajkot",
};


const artcam = () => {
    return (
        <CoursePage
            title={"ArtCAM"}
            image={"/course/artcam.jpeg"}
            description={"ArtCAM is a versatile CAD/CAM software that has been widely used in jewelry design for creating intricate and detailed models."}
            curriculum={["Relief Creation: deal for crafting bas-relief designs, which are commonly used in jewelry for decorative patterns and textures.", "3D Modeling: Offers tools for sculpting, carving, and texturing, allowing for high levels of detail in jewelry pieces.", "Toolpath Generation: Generates precise toolpaths for CNC machines, making it easy to produce prototypes or final pieces.", "Bitmap Import: Converts images like logos or sketches into 3D relief models, perfect for custom designs.", "Simulation*: Provides a preview of the machining process, helping designers visualize the final product and make adjustments."]}
        />
    )
}

export default artcam
