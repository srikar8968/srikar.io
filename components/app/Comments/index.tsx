import { useEffect, useRef } from 'react'

const Comments = ({theme}: { theme: string }) => {
    const commentRef = useRef(null);
    useEffect(() => {
        let el = document.createElement("script");
        el.setAttribute("src", "https://utteranc.es/client.js");
        el.setAttribute("crossorigin", "anonymous");
        el.setAttribute("async", "true");
        el.setAttribute("repo", "srikar8968/blog-comments");
        el.setAttribute("issue-term", "pathname");
        el.setAttribute("theme", `github-${theme}`);
        commentRef.current.innerHTML = "";
        commentRef.current.appendChild(el)
    }, [theme])

    return (
        <div className="uterances-comments-injection" ref={commentRef}></div>
    )
};

export default Comments