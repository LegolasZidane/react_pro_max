export default function AddProjectPage({ onClickCancel }) {
  return (
    <div className="w-full h-full">
        <div className="ml-12 mr-60 flex flex-col text-2xl">
            
            <div className="mt-36 flex justify-end gap-2 mb-12">
                <button 
                    className="px-4 text-black"
                    onClick={onClickCancel}
                >
                    Cancel
                </button>
                <button className="px-8 py-3 bg-black text-white rounded-lg">Save</button>
            </div>

            <div className="text-gray-600">
                <label className="block mb-2 font-medium uppercase">Title</label>
                <input
                type="text"
                className="bg-gray-300 border-b-2 border-gray-500 w-full mb-10 p-2 rounded"
                />

                <label className="block mb-2 font-medium uppercase">Description</label>
                <textarea
                className="bg-gray-300 border-b-2 border-gray-500 w-full mb-8 p-2 rounded"
                rows="2"
                />

                <label className="block mb-2 font-medium uppercase">Due Date</label>
                <input
                    type="date"
                    className="bg-gray-300 border-b-2 border-gray-500 w-full mb-8 p-2 rounded"
                />
            </div>
        </div>
    </div>
  );
}
