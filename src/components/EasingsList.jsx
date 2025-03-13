// Props:
// - easingFunctions
// - selectedFunction
// - setSelectedFunction

export default function EasingsList(props) {
    const funcsList = props.easingFunctions.map((func) => {
        return (<button
            key={func.name}
            className={`easings__button ${
                func.name === props.selectedFunction.name
                    ? "easings__button--selected"
                    : ""
            }`}
            onClick={() => props.setSelectedFunction(func)}
        >
            <img src={`./icons/${func.name.replaceAll(" ", "_").toLowerCase() + ".png"}`} alt={func.name} />
            {func.name}
        </button>);
    });

    return (
        <div className="easings">
            {funcsList}
        </div>
    );
}
