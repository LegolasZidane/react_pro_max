export default function Sidebar(){
    return (
        <section className="w-1/4 bg-black h-screen text-white rounded-lg" id="sidebar">
            <div className="ml-12 mr-8" id="static">
                <h1 className="mt-16 pt-20 mb-10 text-3xl text-left uppercase">Your Projects</h1>
                <button className="bg-gray-600 p-4 rounded-lg text-2xl">+ Add Project</button>
            </div>
            <div className="ml-12 mt-10 mr-8" id="non-static">
                <ul>
                    <li className="rounded mb-2 p-2 text-xl hover:bg-gray-400">Learning React</li> 
                    <li className="rounded mb-2 p-2 text-xl hover:bg-gray-400">Mastering React</li> 
                </ul>
            </div>
        </section>
    );
}