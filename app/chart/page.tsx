import { Interactive_Chart } from "@/components/Interactive_Chart"

function page() {

    return (
        <main className="flex-1 p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600 flex justify-center items-center">
            <div className="bg-white rounded-md drop-shadow-xl min-h-[90vh] max-h-[90vh] w-full p-2 grid grid-cols-12">
                <div className="col-span-4">
                    <Interactive_Chart />
                </div>
                <div>

                </div>
            </div>
        </main>
    )
}

export default page