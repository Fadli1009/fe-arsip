const Modal = ({ children, title, onClose }) => {
    return (
        <>
            <div
                className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"

            >
                <div
                    className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-auto"

                >
                    <header className="flex justify-between items-center p-4 border-b">
                        <h3 className="font-semibold">{title}</h3>

                        <button onClick={onClose}

                            className="text-2xl leading-none px-2 hover:bg-gray-100 rounded"
                        >
                            &times;
                        </button>
                    </header>

                    <main className="p-4">
                        {children}
                    </main>
                </div>
            </div>

        </>
    );
}

export default Modal;