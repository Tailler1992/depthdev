import { useRef, useEffect } from 'react';

export type ClickOutsideCallback = (event: MouseEvent) => void;

interface ConfigProps {
    clickOutsideFn: ClickOutsideCallback;
}

function useClickOutside<ElementType extends HTMLElement>({ clickOutsideFn }: ConfigProps) {
    const wrapperRef = useRef<ElementType | null>(null);
    const callbackRef = useRef<ClickOutsideCallback | null>(null);

    const setWrapperRef = (element: ElementType) => {
        wrapperRef.current = element;
    };

    useEffect(() => {
        if (typeof clickOutsideFn === 'function') {
            callbackRef.current = clickOutsideFn;
        }
    }, [clickOutsideFn]);

    useEffect(() => {
        const listenerCallback = (event: MouseEvent) => {
            if (callbackRef.current && !wrapperRef.current?.contains(event.target as Node)) {
                callbackRef.current(event);
            }
        };

        window.addEventListener('mousedown', listenerCallback);

        return () => {
            // It's always a good idea to delete event
            // listeners during the unmount.
            window.removeEventListener('mousedown', listenerCallback);
        };
    }, []);

    return { setWrapperRef };
}

export default useClickOutside;
