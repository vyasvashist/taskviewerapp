// components/AppBar.js


const AppBar = () => {
    return (
        <div className="bg-blue-800 text-white sticky top-0 z-50 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">

                    <a className="text-xl font-bold">QC</a>

                    <div className="flex space-x-4">

                        <a>QTaskViewer</a>        
                        {/* <a>About</a> */}


                        {/* <a>Contact</a> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppBar;
