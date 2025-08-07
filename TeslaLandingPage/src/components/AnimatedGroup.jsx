import React, {useRef} from "react";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

export default function AnimatedGroup({
                                          children,
                                          from,
                                          to,
                                          start,
                                          end,
                                          className = "",
                                      }) {
    const wrapRef = useRef(null);

    useScrollFadeIn(wrapRef, {from, to, start, end});

    return (
        <div ref={wrapRef} className={className}>
            {children}
        </div>
    );
}
