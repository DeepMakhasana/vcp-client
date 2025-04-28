import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
}

export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "/1.png",
      firstName: "Nikunj",
      lastName: "Basida",
      positions: ["17 years' experience"],
    },
    {
      imageUrl: "/2.png",
      firstName: "Ghanshyam",
      lastName: "Shah",
      positions: ["11 years' experience"],
    },
    {
      imageUrl: "/3.png",
      firstName: "Vijay",
      lastName: "Bhuva",
      positions: ["10 years' experience"],
    },
    {
      imageUrl: "/4.png",
      firstName: "Mitesh",
      lastName: "Kuriya",
      positions: ["3 years' experience"],
    },
  ];

  return (
    <section id="team" className="container lg:w-[75%] py-24">
      <div className="heading">
        <h2 className="heading-style">Our Expert Team</h2>
        <p>Our team works together to create and teach beautiful and unique jewelry designs</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(({ imageUrl, firstName, lastName, positions }, index) => (
          <Card key={index} className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
            <CardHeader className="p-0 gap-0">
              <div className="h-full overflow-hidden">
                <img
                  src={`/team${imageUrl}`}
                  alt=""
                  width={300}
                  height={500}
                  className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                />
              </div>
              <CardTitle className="py-6 pb-4 px-6">
                {firstName}
                <span className="text-primary ml-2">{lastName}</span>
              </CardTitle>
            </CardHeader>
            {positions.map((position, index) => (
              <CardContent
                key={index}
                className={`pb-0 text-muted-foreground ${index === positions.length - 1 && "pb-6"}`}
              >
                {position}
                {index < positions.length - 1 && <span>,</span>}
              </CardContent>
            ))}

            {/* <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  );
};
