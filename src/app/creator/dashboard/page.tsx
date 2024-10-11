import CreatedCourse from "@/components/course/CreatedCourse";
import { Button } from "@/components/ui/button";
import { coursesData } from "@/lib/utils";

const Dashboard = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex justify-between items-center my-4">
        <div>
          <h1 className="text-2xl font-medium">Courses</h1>
          <p className="text-sm hidden text-muted-foreground sm:block">
            View and manage courses
          </p>
        </div>
        <div>
          <Button>Create new</Button>
        </div>
      </div>
      <div className="grid gap-4">
        {coursesData.map((course) => (
          <CreatedCourse key={course.id} course={course} />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;
