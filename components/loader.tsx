export default function Loader() {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 text-white">
                    <span className="animate-spin w-[50px] h-[50px] border border-[5px] border-t-slate-500 border-b-slate-500 rounded-full"></span>
                </div>
            </div>
        </div>
    );
}
