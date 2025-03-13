export default function EasingCode(props) {
    return (
        <div className="easingCode">
            <pre className="easingCode__code">{props.text}</pre>
            <p className="easingCode__source">Source: <a href={props.source}>{props.source}</a></p>
        </div>
    );
}
