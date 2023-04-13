export function HeaderTitle({ url }) {
    return (
            <div style={{backgroundImage:`url(${url})`}} className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-center sm:text-left">
                        <h1 className="italic text-4xl font-bold text-gray-900 sm:text-6xl">
                        ATENEA SPORTS
                        </h1>
                    </div>
                </div>
            </div>
    );
};