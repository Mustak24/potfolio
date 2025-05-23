import { useEffect, useRef, useState } from "react"
import eventHandler from "../Functions/eventHandler";

export default function View({children, minWidth=0, maxWidth=Infinity}){
    const [isLoad, setLoad] = useState(minWidth < window.innerWidth && window.innerWidth < maxWidth);

    function handleLoad(){
        setLoad(minWidth < window.innerWidth && window.innerWidth < maxWidth);
    }
    
    const handleResize = eventHandler(handleLoad, 1000)
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <>
        {isLoad ? children : null}
    </>
}


export function WhenVisible({children, gap=400}){

    const [isVisible, setVisible] = useState(true);
    
    const box = useRef(null);
    const isBoxResize = useRef(true);
    const windowWidth = useRef(Math.floor(window.innerWidth));

    function handleScroll(){
        if(!box.current) return;

        let {top, bottom} = box.current.getBoundingClientRect();
        let {innerHeight: height} = window
        let visible = !(top > height + gap || bottom < -gap);

        setVisible(visible);
    }

    function setBoxSize(){
        if(!(box.current && isBoxResize.current)) return;
  
        box.current.style.height = 'auto';

        let {height} = box.current.getBoundingClientRect();
        box.current.style.height = height + 'px';
        isBoxResize.current = false;

        handleScroll();
    }

    const handleResize = eventHandler(() => {

        let currentWindowWidth = Math.floor(window.innerWidth);
        if(Math.abs(windowWidth.current - currentWindowWidth) < 5) return;
        
        windowWidth.current = currentWindowWidth

        isBoxResize.current = true;
        if(isVisible) return setBoxSize();
        
        setVisible(true);
    }, 500);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        document.body.addEventListener('scroll', handleScroll);

        return () => {
            document.body.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(setBoxSize, [isVisible])

    return <div ref={box}>{isVisible ? children : null}</div>
}

export function AnimateWhenVisible({children, gap=0 , className='', from={opacity: '0'}, to={opacity: '1'}, delay=100}){

    const box = useRef(null);
    const timeOut = useRef(null);
    const [style, setStyle] = useState(from);

    function handleStyle(newStyle){

        if(timeOut.current) clearTimeout(timeOut)
        timeOut.current = setTimeout(() => {
            setStyle(() => newStyle);
        }, delay);
    }

    function handleScroll(){
        if(!box.current) return;

        let {top, bottom} = box.current.getBoundingClientRect();
        let {innerHeight: height} = window
        let visible = (top + gap < height && bottom > -gap);

        if(visible) handleStyle(to);
        else handleStyle(from);
    }

    useEffect(() => {
        document.body.addEventListener('scroll', handleScroll);
        return () => document.body.removeEventListener('scroll', handleScroll);
    }, [])

    return <div ref={box} style={style} className={className}>{children}</div>
}