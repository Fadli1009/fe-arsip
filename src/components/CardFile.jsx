import clsx from "clsx";
import { Trash } from "lucide-react";

const CardFile = ({ grid, file, meta, onclick }) => {

    return (
        <>
            <div
                key={file.id}
                className={clsx(
                    'border cursor-pointer hover:translate-0.5 transition-all shadow hover:shadow-none text-center rounded p-5 relative',
                    meta.bg,
                    meta.border,
                    { 'flex items-center justify-between': !grid }
                )}
            onClick={()=>onclick()}
            >
                <button
                    onClick={() => console.log('delete', file.id)}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full border text-red-600 hover:bg-red-100"
                >
                    <Trash className="w-4 h-4" />
                </button>

                <div className="mb-2 flex justify-center items-center gap-3">
                    {meta.icon}
                    <p className="text-sm font-medium">{file.name}</p>
                </div>

                <div className={clsx({ "me-5": !grid })}>
                    <p className="text-gray-800 text-xs">{file.size}</p>
                    <p className="text-xs text-gray-500">{file.modified}</p>
                </div>
            </div >
        </>
    );
}

export default CardFile;