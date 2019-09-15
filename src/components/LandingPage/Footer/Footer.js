import React from 'react';

class Footer extends React.Component {
    render() {
        return <div className="fixed bottom-0 w-full">
            <div className="flex flex-col justify-center text-center m-auto h-12 bg-gray-light">
            <p className="text-sm">Decidehub bir <span className="text-emphasis hover:underline">
                    <a href="https://workhow.com/">workhow</a>
                </span> ürünüdür, Copyright 2019</p>
        </div>
        </div>
    }
}

export default Footer;
