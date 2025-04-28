import CoursePage from '@/components/coursePage/CoursePage';

export const metadata = {
    title: "DesignGold Course in Rajkot | Param Jewellery CAD Center",
    description: "DesignGold is a specialized plugin for Rhinoceros software, tailored for jewelry designers.",
    keywords: "DesignGold, DesignGold course in rajkot, Param Jewellery CAD Center",
};

const designGold = () => {
    return (
        <CoursePage
            title={"DesignGold"}
            image={"/course/designgold.jpeg"}
            description={"DesignGold is a specialized plugin for Rhinoceros software, tailored for jewelry designers."}
            curriculum={[
                "Subdivision Modeling: Create intricate designs with smooth surfaces and precise control.",
                "Remeshing Functionality: Optimize your models for better performance and detail.",
                "Dynamic Jewelry Builders: Tools for creating gems, shanks, settings, and more with exact measurements.",
                "Grasshopper Interface: An intuitive platform for parametric design, allowing you to customize and modify designs efficiently.",
                "Flexibility: Modify your designs at any stage without losing the model's history.",
                "Rendering Capabilities: Create high-quality visuals and animations for presentations or social media."
            ]}
        />
    )
}

export default designGold
