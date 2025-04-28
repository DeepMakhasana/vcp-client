import CoursePage from '@/components/coursePage/CoursePage';

export const metadata = {
    title: "ZBrush Course in Rajkot | Param Jewellery CAD Center",
    description: "ZBrush is a fantastic tool for jewelry design, offering unparalleled creative freedom and precision.",
    keywords: "ZBrush, ZBrush course in rajkot, ZBrush course in rajkot, Param Jewellery CAD Center",
};


const zbrush = () => {
    return (
        <CoursePage
            title={"ZBrush"}
            image={"/course/zbrush.jpeg"}
            description={"ZBrush is a fantastic tool for jewelry design, offering unparalleled creative freedom and precision."}
            curriculum={[
                "Organic Sculpting: ZBrush allows you to create intricate and natural shapes, perfect for unique jewelry designs like filigree or engraved patterns.",
                "IMM Brushes: Insert Multi-Mesh brushes let you add pre-made elements like gemstones, prongs, or decorative motifs directly into your designs.",
                "Dynamic Subdivision: This feature enables you to add layers of detail without altering the base mesh, ideal for creating complex textures and engravings.",
                "Boolean Operations: Easily combine, subtract, or intersect shapes to craft intricate designs.",
                "3D Printing Optimization: ZBrush ensures your models are watertight and ready for 3D printing, making it seamless to produce prototypes or final pieces.",
                "Customizable Workflow: You can emboss patterns, experiment with stone placements, and refine designs with ease."
            ]}
        />
    )
}

export default zbrush
