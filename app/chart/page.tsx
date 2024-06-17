import { Bar_Chart } from "@/components/Bar_Chart"

function page() {

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]

    return (
        <main className="flex-1 p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600 flex justify-center items-center">
            <div className="bg-white rounded-md drop-shadow-xl min-h-[90vh] max-h-[90vh] w-full p-2 grid grid-cols-12">
                <div className="col-span-4">
                    <div className="">
                        <Bar_Chart chartData={chartData} />
                    </div>
                    <div className="">
                        <Bar_Chart chartData={chartData} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page