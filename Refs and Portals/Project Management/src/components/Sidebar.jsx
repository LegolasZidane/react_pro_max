export default function Sidebar({ onClick }){
    return (
        <section className="w-[30%] bg-black h-full text-white rounded-tr-lg" id="sidebar">
            <div className="ml-12 mr-8" id="static">
                <h1 className="mt-36 mb-10 text-4xl text-left uppercase">Your Projects</h1>
                <button 
                    className="bg-gray-600 px-8 py-5 rounded-lg text-3xl"
                    onClick={onClick}
                >
                    + Add Project
                </button>
            </div>
            <div className="ml-12 mt-10 mr-8" id="non-static">
                <ul>
                    <li className="rounded mb-2 p-4 text-3xl hover:bg-gray-400">Learning React</li> 
                    <li className="rounded mb-2 p-4 text-3xl hover:bg-gray-400">Mastering React</li> 
                </ul>
            </div>
        </section>
    );
}