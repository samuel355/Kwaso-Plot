import { useEffect } from 'react';

export default function useExternalScripts({ url }){
    useEffect(() => {
        const script = document.createElement('script');
        script.setAttribute('src', url);
        script.setAttribute('defer', '');
        //document.head.appendChild(script);

        return () => {
            //document.head.removeChild(script);
            document.head.appendChild(script);
        };
    }, [url]);

};

