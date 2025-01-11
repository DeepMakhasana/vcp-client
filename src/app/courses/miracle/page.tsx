import CoursePage from '@/components/coursePage/CoursePage';

export const metadata = {
    title: "Miracle accounting software Course in Rajkot | Param computer classes",
    description: "Miracle Accounting Software is a modern platform that updates the way businesses handle their financial operations. Whether you are a professional accountant, small business owner, or an aspiring finance professional, this course is designed to meet your needs.",
    keywords: "Miracle, Miracle Accounting course in rajkot, Miracle Accounting course near me, Accounting classes, param computer classes",
};

const miracle = () => {
    return (
        <CoursePage
            title={"Miracle course"}
            image={"/miracleCourse.jpg"}
            description={"The Miracle Accounting Software Course is a comprehensive training program designed to equip individuals with the necessary skills and knowledge to effectively utilize the Miracle Accounting Software. Developed by industry experts, this course aims to empower participants to streamline financial management processes and optimize accounting tasks using this powerful software."}
            curriculum={["Introduction to Miracle Accounting Software", "Company Setup", "General Ledger Management", "Accounts Payable and Receivable", "Inventory Management", "Financial Reporting and Analysis"]}
        />
    )
}

export default miracle
