export default function Loading() {
    return (
        <div className="flex flex-col items-center w-full gap-4 p-10">
            <div className="w-full h-32 skeleton"></div>
            <div className="h-4 skeleton w-28"></div>
            <div className="w-full h-4 skeleton"></div>
            <div className="w-full h-4 skeleton"></div>
            <div className="w-full h-4 mb-5 skeleton"></div>
            <div className="w-1/2 h-4 skeleton"></div>
            <div className="w-full h-4 skeleton"></div>
            <div className="w-full h-4 skeleton"></div>
            <div className="w-full h-4 skeleton"></div>
        </div>
    )
}