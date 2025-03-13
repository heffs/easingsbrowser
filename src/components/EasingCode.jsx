import { useRef, useState } from "react";

export default function EasingCode(props) {
    const codeRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (codeRef.current) {
            const text = codeRef.current.innerText;

            navigator.clipboard.writeText(text).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            }).catch(err => console.error("Failed to copy: " + err));

        }
    }
    return (
        <div className="easingCode">
            <button className="easingCode__copy" onClick={handleCopy}>
                <img src={copied ? "./copy-active.png": "./copy.png"} width="16" height="16" alt="Copy to clipboard" />
            </button>
            <pre ref={codeRef} className="easingCode__code">{props.text}</pre>
            <p className="easingCode__source">Source: <a href={props.source}>{props.source}</a></p>
        </div>
    );
}
