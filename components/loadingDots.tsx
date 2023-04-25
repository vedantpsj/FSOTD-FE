export default function LoadingDots() {
    return (
        <div className="loading-dots inline-flex pt-1 opacity-80">
            <span className="w-[4px] h-[4px] bg-white ml-1 rounded animate-bounce"></span>
            <span className="w-[4px] h-[4px] bg-white ml-1 rounded animate-bounce"></span>
            <span className="w-[4px] h-[4px] bg-white ml-1 rounded animate-bounce"></span>
        </div>
    );
}
