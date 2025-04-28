import SellService from '@/components/salesService/SalesService'

export const metadata = {
  title: "New and Refurbished Laptop, Printer and Desktop Sales and Service | Param computer",
  description: "We offer new and refurbished computers and laptops according to the customer's requirements and also provide services and paid software like Windows, Microsoft Office, Antivirus, Adobe Photoshop, Tally Prime, JewelCAD 5.1, Rhinoceros, and Autocad.",
  keywords: "Refurbished Laptop, computer sales and service in rajkot, jewellery designing software, windows key, antivirus, designing software, autocad",
};

const page = () => {
  return (
    <div>
      <SellService />
    </div>
  )
}

export default page

