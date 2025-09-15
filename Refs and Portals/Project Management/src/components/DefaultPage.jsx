export default function DefaultPage() {
    return(
        <section className="flex flex-col h-full text-center items-center" id="content">
            <img className="h-20 w-20 mt-52 mb-10" src="logo.png" />
            <h1 className="text-gray-700 font-bold text-3xl mb-10">No Project Selected</h1>
            <p className="text-gray-500 text-2xl mb-10">Select a project or get started with a new one</p>
            <button className="bg-black text-gray-400 px-8 py-5 rounded-lg text-2xl">Create new project</button>
        </section>
    );
}