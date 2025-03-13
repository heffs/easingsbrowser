import { useState, useEffect } from "react";

const horizBorder = 30;
const vertBorder = 80;

// Props:
// - selectedFunction
// - params
export default function EasingGraph(props) {
    const [params, setParams] = useState(props.params);

    useEffect(() => setParams(props.params), [props.selectedFunction]);

    useEffect(() => {
        const canvas = document.getElementById("easingCanvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const graphWidth = canvas.width - horizBorder * 2;
        const graphHeight = canvas.height - vertBorder * 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Background gradient
        const gradientStep = 0.005;
        for (let t = 0; t < 1.0; t += 0.005) {
            const x = t * graphWidth + horizBorder;
            // const c = props.selectedFunction.fn(t, params.a, params.b);
            let c = 0;
            if (Object.keys(params).length) {
                c = props.selectedFunction.fn(t, ...Object.values(params));
            } else {
                c = props.selectedFunction.fn(t);
            }
            ctx.fillStyle = `rgb(${c * 255}, ${c * 255}, ${c * 255})`;
            ctx.fillRect(
                x,
                vertBorder,
                graphWidth * gradientStep + 1,
                graphHeight
            );
        }

        ctx.beginPath();
        ctx.moveTo(horizBorder, vertBorder);
        ctx.lineTo(canvas.width - horizBorder, vertBorder);
        ctx.lineTo(canvas.width - horizBorder, canvas.height - vertBorder);
        ctx.lineTo(horizBorder, canvas.height - vertBorder);
        ctx.closePath();
        ctx.strokeStyle = "#ff7b00";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        if (Object.keys(params).length) {
            ctx.moveTo(
                horizBorder,
                (1 - props.selectedFunction.fn(0, ...Object.values(params))) *
                    graphHeight +
                    vertBorder
            );
        } else {
            ctx.moveTo(
                horizBorder,
                (1 - props.selectedFunction.fn(0)) * graphHeight + vertBorder
            );
        }

        for (let t = 0; t <= 1.001; t += 0.005) {
            t = t < 0 ? 0 : t > 1 ? 1 : t;
            const x = t * graphWidth + horizBorder;
            // const r = props.selectedFunction.fn(t, params.a, params.b);
            let r = 0;
            if (Object.keys(params).length) {
                r = props.selectedFunction.fn(t, ...Object.values(params));
            } else {
                r = props.selectedFunction.fn(t);
            }
            const y = (1 - r) * graphHeight + vertBorder;
            ctx.lineTo(x, y);
        }
        ctx.strokeStyle = "#ff7b00";
        ctx.lineWidth = 5;
        ctx.stroke();

        // Draw parameter marker
        if (params.a !== undefined) {
            const markerX = params.a * graphWidth + horizBorder;
            const markerY =
                (1 -
                    (params.b !== undefined
                        ? params.b
                        : props.selectedFunction.fn(params.a, params.a))) *
                    graphHeight +
                vertBorder;
            ctx.beginPath();
            ctx.moveTo(markerX - 5, markerY);
            ctx.lineTo(markerX + 5, markerY);
            ctx.moveTo(markerX, markerY - 5);
            ctx.lineTo(markerX, markerY + 5);
            ctx.strokeStyle = "#f0f0f0";
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }, [props.selectedFunction, params]);

    //***************************
    // Handle canvas click
    const handleCanvasClick = (ev) => {
        const canvas = ev.currentTarget;
        const rect = canvas.getBoundingClientRect();

        const graphW = (canvas.width - horizBorder * 2) * (rect.width / canvas.width);
        const graphH = (canvas.height - vertBorder * 2) * (rect.height / canvas.height);

        const pixelX = ev.clientX - rect.left - (horizBorder * rect.width / canvas.width);
        const pixelY = ev.clientY - rect.top - (vertBorder * rect.height / canvas.height);

        let x = pixelX / graphW;
        let y = 1 - pixelY / graphH;

        console.log(`Click @(${ev.clientX}, ${ev.clientY}) on canvas(${canvas.width}, ${canvas.height}) rect(${rect.width}, ${rect.height})@(${rect.left}, ${rect.top}) -> (${x}, ${y})`);

        x = x < 0 ? 0 : x > 1 ? 1 : x;
        y = y < 0 ? 0 : y > 1 ? 1 : y;

        if (params.a !== undefined) {
            if (params.b !== undefined) {
                setParams((prevParams) => ({ ...prevParams, a: x, b: y }));
            } else {
                setParams((prevParams) => ({ ...prevParams, a: x }));
            }
        }
    };

    return (
        <div className="easingGraph">
            <canvas
                id="easingCanvas"
                className="easingGraph__canvas"
                width={500}
                height={600}
                onClick={handleCanvasClick}
            ></canvas>
            <div className="easingGraph__params">
                <h4>{props.selectedFunction.name}</h4>
                <div className="easingGraph__params-list">
                    {Object.entries(params).map(([key, value]) => (
                        <label key={key} className={"easingGraph__param"}>
                            {key}: {parseFloat(value).toFixed(2)}
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={value}
                                onChange={(e) =>
                                    setParams({
                                        ...params,
                                        [key]: parseFloat(e.target.value),
                                    })
                                }
                                className="easingGraph__slider"
                            />
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}
