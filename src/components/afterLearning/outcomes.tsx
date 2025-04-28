import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Freelance Jewellery Designer",
    description: "Work for brands or individual clients who need designs.",
    pro: 0,
  },
  {
    title: "Design for Jewellery Brands",
    description: "Look for full-time job to bring fresh design ideas.",
    pro: 0,
  },
  {
    title: "Start a Jewellery Design Studio",
    description: "Offer services like consultation, prototyping, and final design.",
    pro: 0,
  },
  {
    title: "Work with Jewellery Manufacturers",
    description: "Many manufacturers need designers to create collections.",
    pro: 0,
  },
];

export const OutcomesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-12">
      <div className="heading">
        <h2 className="heading-style">Career Options</h2>
        <p>What is the next step after learning jewellery design</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card key={title} className="bg-muted/60 dark:bg-card h-full relative">
            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="tracking-wide">{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
