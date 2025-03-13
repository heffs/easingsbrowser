const easingFunctions = [
    {
        name: "Ease In Sine",
        fn: (t) => 1 - Math.cos((t * Math.PI) / 2),
        text: "(t){\n    return 1 - Math.cos((t * Math.PI) / 2);\n}",
        params: {},
        icon: "easeinsine.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease Out Sine",
        fn: (t) => Math.sin((t * Math.PI) / 2),
        text: "(t){\n    return Math.sin((t * Math.PI) / 2);\n}",
        params: {},
        icon: "easeoutsine.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Out Sine",
        fn: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
        text: "(t){\n    return -(Math.cos(Math.PI * t) - 1) / 2;\n}",
        params: {},
        icon: "easeinoutsine.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Quad",
        fn: (t) => t * t,
        text: "(t){\n    return t*t;\n}",
        params: {},
        icon: "easeinquad.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease Out Quad",
        fn: (t) => 1 - (1 - t) * (1 - t),
        text: "(t){\n    return 1 - (1 - t) * (1 - t);\n}",
        params: {},
        icon: "easeoutquad.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Out Quad",
        fn: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
        text: "(t){\n    return t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;\n}",
        params: {},
        icon: "easeinoutquad.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Cubic",
        fn: (t) => t * t * t,
        text: "(t){\n    return t*t*t;\n}",
        params: {},
        icon: "easeincubic.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease Out Cubic",
        fn: (t) => 1 - Math.pow(1 - t, 3),
        text: "(t){\n    return 1 - Math.pow(1 - t, 3);\n}",
        params: {},
        icon: "easeoutcubic.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Out Cubic",
        fn: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
        text: "(t){\n    return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2;\n}",
        params: {},
        icon: "easeinoutcubic.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Quart",
        fn: (t) => t * t * t * t,
        text: "(t){\n    return t*t*t*t;\n}",
        params: {},
        icon: "easeinquart.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease Out Quart",
        fn: (t) => 1 - Math.pow(1 - t, 4),
        text: "(t){\n    return 1 - Math.pow(1 - t, 4);\n}",
        params: {},
        icon: "easeoutquart.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Out Quart",
        fn: (t) =>
            t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2,
        text: "(t){\n    return t < 0.5 ? 8*t*t*t*t : 1 - Math.pow(-2*t + 2, 4) / 2;\n}",
        params: {},
        icon: "easeinoutquart.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Quint",
        fn: (t) => t * t * t * t * t,
        text: "(t){\n    return t*t*t*t*t;\n}",
        params: {},
        icon: "easeinquint.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease Out Quint",
        fn: (t) => 1 - Math.pow(1 - t, 5),
        text: "(t){\n    return 1 - Math.pow(1 - t, 5);\n}",
        params: {},
        icon: "easeoutquint.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Out Quint",
        fn: (t) =>
            t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2,
        text: "(t){\n    return t < 0.5 ? 16*t*t*t*t*t : 1 - Math.pow(-2*t + 2, 5) / 2;\n}",
        params: {},
        icon: "easeinoutquint.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Expo",
        fn: (t) => Math.pow(2, 10 * (t - 1)),
        text: "(t){\n    return Math.pow(2, 10 * (t - 1));\n}",
        params: {},
        icon: "easeinexpo.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease Out Expo",
        fn: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
        text: "(t){\n    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);\n}",
        params: {},
        icon: "easeoutexpo.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Out Expo",
        fn: (t) =>
            t === 0
                ? 0
                : t === 1
                ? 1
                : t < 0.5
                ? Math.pow(2, 20 * t - 10) / 2
                : (2 - Math.pow(2, -20 * t + 10)) / 2,
        text: "(t){\n    return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;\n}",
        params: {},
        icon: "easeinoutexpo.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Circ",
        fn: (t) => 1 - Math.sqrt(1 - t * t),
        text: "(t){\n    return 1 - Math.sqrt(1 - t * t);\n}",
        params: {},
        icon: "easeincirc.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease Out Circ",
        fn: (t) => Math.sqrt(1 - Math.pow(t - 1, 2)),
        text: "(t){\n    return Math.sqrt(1 - Math.pow(t - 1, 2));\n}",
        params: {},
        icon: "easeoutcirc.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Out Circ",
        fn: (t) =>
            t < 0.5
                ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
                : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,
        text: "(t){\n    return t < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;\n}",
        params: {},
        icon: "easeinoutcirc.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Back",
        fn: (t) => {
            const s = 1.70158;
            return (s + 1) * t * t * t - s * t * t;
        },
        text: "(t, s = 1.70158){\n    const s = 1.70158;\n    return (s + 1) * t * t * t - s * t * t;\n}",
        params: {},
        icon: "easeinback.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease Out Back",
        fn: (t) => {
            const s = 1.70158;
            return 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2);
        },
        text: "(t, s = 1.70158){\n    const s = 1.70158;\n    return 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2);\n}",
        params: {},
        icon: "easeoutback.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Out Back",
        fn: (t) => {
            const s = 2.59491;
            return t < 0.5
                ? (Math.pow(2 * t, 2) * ((s + 1) * 2 * t - s)) / 2
                : (Math.pow(2 * t - 2, 2) * ((s + 1) * (t * 2 - 2) + s) + 2) /
                      2;
        },
        text: "(t){\n    const s = 2.59491;\n    return t < 0.5 ? Math.pow(2 * t, 2) * ((s + 1) * 2 * t - s) / 2 : Math.pow(2 * t - 2, 2) * ((s + 1) * (t * 2 - 2) + s) + 2;\n}",
        params: {},
        icon: "easeinoutback.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Elastic",
        fn: (t) => {
            const s = (2 * Math.PI) / 3;
            return t === 0
                ? 0
                : t === 1
                ? 1
                : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * s);
        },
        text: "(t){\n    const s = 2 * Math.PI / 3;\n    return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * t - 10) * Math.sin((t * 10 - 10.75) * s);\n}",
        params: {},
        icon: "easeinelastic.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease Out Elastic",
        fn: (t) => {
            const s = (2 * Math.PI) / 3;
            return t === 0
                ? 0
                : t === 1
                ? 1
                : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * s) + 1;
        },
        text: "(t){\n    const s = 2 * Math.PI / 3;\n    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * s) + 1;\n}",
        params: {},
        icon: "easeoutelastic.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Out Elastic",
        fn: (t) => {
            const s = (2 * Math.PI) / 4.5;
            return t === 0
                ? 0
                : t === 1
                ? 1
                : t < 0.5
                ? -(
                      Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * s)
                  ) / 2
                : (Math.pow(2, -20 * t + 10) *
                      Math.sin((20 * t - 11.125) * s)) /
                      2 +
                  1;
        },
        text: "(t){\n    const s = 2 * Math.PI / 4.5;\n    return t === 0 ? 0 : t === 1 ? 1 :\n        t < 0.5 ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * s)) / 2\n            : (Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * s)) / 2 + 1\n}",
        params: {},
        icon: "easeinoutelastic.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Bounce",
        fn: (t) => {
            const r = 7.5625;
            const s = 2.75;
            return t < 1 / s
                ? 1 - r * t * t
                : t < 2 / s
                ? 0.25 - r * (t -= 1.5 / s) * t
                : t < 2.5 / s
                ? 0.0625 - r * (t -= 2.25 / s) * t
                : 0.015625 - r * (t -= 2.625 / s) * t;
        },
        text: "(t) => {\n    const r = 7.5625;\n    const s = 2.75;\n    return t < 1 / s\n        ? 1 - r * t * t\n        : t < 2 / s\n        ? 0.25 - r * (t -= 1.5 / s) * t\n        : t < 2.5 / s\n        ? 0.0625 - r * (t -= 2.25 / s) * t\n        : 0.015625 -r * (t -= 2.625 / s) * t;\n}",
        params: {},
        icon: "easeinbounce.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease Out Bounce",
        fn: (t) => {
            const r = 7.5625;
            const s = 2.75;
            return t < 1 / s
                ? r * t * t
                : t < 2 / s
                ? r * (t -= 1.5 / s) * t + 0.75
                : t < 2.5 / s
                ? r * (t -= 2.25 / s) * t + 0.9375
                : r * (t -= 2.625 / s) * t + 0.984375;
        },
        text: "(t) => {\n    const r = 7.5625;\n    const s = 2.75;\n    return t < 1 / s\n        ? r * t * t\n        : t < 2 / s\n        ? r * (t -= 1.5 / s) * t + 0.75\n        : t < 2.5 / s\n        ? r * (t -= 2.25 / s) * t + 0.9375\n        : r * (t -= 2.625 / s) * t + 0.984375;\n}",
        params: {},
        icon: "easeoutbounce.jpg",
        source: "https://easings.net",
    },
    {
        name: "Ease In Out Bounce",
        fn: (t) => {
            const r = 7.5625;
            const s = 2.75;
            let t1 = t < 0.5 ? 1 - 2 * t : 2 * t - 1;
            const e =
                t1 < 1 / s
                    ? r * t1 * t1
                    : t1 < 2 / s
                    ? r * (t1 -= 1.5 / s) * t1 + 0.75
                    : t1 < 2.5 / s
                    ? r * (t1 -= 2.25 / s) * t1 + 0.9375
                    : r * (t1 -= 2.625 / s) * t1 + 0.984375;
            return t < 0.5 ? (1 - e) / 2 : (1 + e) / 2;
        },
        text: "(t) => {\n    const r = 7.5625;\n    const s = 2.75;\n    let t1 = t < 0.5 ? 1 - 2 * t : 2 * t - 1;\n    const e = t1 < 1 / s\n    ? r * t1 * t1\n    : t1 < 2 / s\n    ? r * (t1 -= 1.5 / s) * t1 + 0.75\n    : t1 < 2.5 / s\n    ? r * (t1 -= 2.25 / s) * t1 + 0.9375\n    : r * (t1 -= 2.625 / s) * t1 + 0.984375;\n    return t < 0.5 ? (1 - e) / 2 : (1 + e) / 2;\n}",
        params: {},
        icon: "easeinoutbounce.jpg",
        source: "https://easings.net",
    },
    {
        name: "Double Circular Seat",
        fn: (t, a) =>
            t <= a
                ? Math.sqrt(a * a - (t - a) * (t - a))
                : 1 - Math.sqrt((1 - a) * (1 - a) - (t - a) * (t - a)),
        text: "(t, a){\n    return t <= a ? Math.sqrt(a * a - (t - a) * (t - a)) : 1 - Math.sqrt((1 - a) * (1 - a) - (t - a) * (t - a));\n}",
        params: { a: 0.5 },
        icon: "doublecircularseat.jpg",
        source: "https://www.flong.com/archive/texts/code/shapers_circ/index.html",
    },
    {
        name: "Double Elliptic Seat",
        fn: (t, a, b) => {
            const eps = 0.00001;
            a = a < eps ? eps : a > 1 - eps ? 1 - eps : a;

            return t <= a
                ? (b / a) * Math.sqrt(a * a - (t - a) * (t - a))
                : 1 -
                      ((1 - b) / (1 - a)) *
                          Math.sqrt((1 - a) * (1 - a) - (t - a) * (t - a));
        },
        text: `(t, a, b){
    const eps = 0.00001;
    a = a < eps ? eps : (a > 1 - eps ? 1 - eps : a);\n
    return t <= a
        ? (b / a) * Math.sqrt(a * a - (t - a) * (t - a))
        : 1 - ((1 - b) / (1 - a)) * Math.sqrt((1 - a) * (1 - a) - (t - a) * (t - a))
}`,
        params: { a: 0.5, b: 0.5 },
        icon: "doubleellipticseat.jpg",
        source: "https://www.flong.com/archive/texts/code/shapers_circ/index.html",
    },
    {
        name: "Double Circular Sigmoid",
        // fn: (t, a) => t <= a ? a - Math.sqrt(a * a - t * t) : a + Math.sqrt((1-a) * (1-a) - (t-1) * (t-1)),
        fn: (t, a) => {
            const d = a;
            return t <= a
                ? a - Math.sqrt(a * a - t * t)
                : Math.sqrt((1 - a) * (1 - a) - (t - 1) * (t - 1)) + d;
        },
        text: "(t, a){\n    return t <= a ? a - Math.sqrt(a * a - t * t) : a + Math.sqrt((1-a) * (1-a) - (t-1) * (t-1));\n}",
        params: { a: 0.5 },
        icon: "doublecircularsigmoid.jpg",
        source: "https://www.flong.com/archive/texts/code/shapers_circ/index.html",
    },
    {
        name: "Double Elliptic Sigmoid",
        fn: (t, a, b) => {
            const eps = 0.00001;
            a = a < eps ? eps : a > 1 - eps ? 1 - eps : a;
            b = b < eps ? eps : b > 1 - eps ? 1 - eps : b;
            return t <= a
                ? b * (1 - Math.sqrt(a * a - t * t) / a)
                : b +
                      ((1 - b) / (1 - a)) *
                          Math.sqrt((1 - a) * (1 - a) - (t - 1) * (t - 1));
        },
        text: "(t, a, b) => {\n	const eps = 0.00001;\n	a = a < eps ? eps : (a > 1 - eps ? 1 - eps : a);\n	b = b < eps ? eps : (b > 1 - eps ? 1 - eps : b);\n	return t <= a ? b * (1 - (Math.sqrt(a * a - t * t) / a)) : b + ((1 - b) / (1 - a)) * Math.sqrt((1 - a) * (1 - a) - (t - 1) * (t - 1))\n}",
        params: { a: 0.5, b: 0.5 },
        icon: "doubleellipticsigmoid.jpg",
        source: "https://www.flong.com/archive/texts/code/shapers_circ/index.html",
    },
    {
        name: "Double Linear Circular Fillet",
        fn: (t, a, b, r) => {
            const eps = 0.00001;
            a = a < eps ? eps : a > 1 - eps ? 1 - eps : a;
            b = b < eps ? eps : b > 1 - eps ? 1 - eps : b;
            const lineToPoint = (fa, fb, fc, px, py) => {
                const d = Math.sqrt(fa * fa + fb * fb);
                return d !== 0 ? (fa * px + fb * py + fc) / d : 0;
            };
            const filletParams = (p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y, r) => {
                let arcCenterX = 0,
                    arcCenterY = 0,
                    arcStartAngle = 0,
                    arcEndAngle = 0,
                    arcRadius = 0;
                let arcStartX = 0,
                    arcStartY = 0,
                    arcEndX = 0,
                    arcEndY = 0;
                let rtns = {
                    arcCenterX,
                    arcCenterY,
                    arcStartAngle,
                    arcEndAngle,
                    arcRadius,
                    arcStartX,
                    arcStartY,
                    arcEndX,
                    arcEndY,
                };

                const c1 = p2x * p1y - p1x * p2y;
                const a1 = p2y - p1y;
                const b1 = p1x - p2x;
                const c2 = p4x * p3y - p3x * p4y;
                const a2 = p4y - p3y;
                const b2 = p3x - p4x;

                if (a1 * b2 == a2 * b1) {
                    /* Parallel or coincident lines */
                    return rtns;
                }
                let mPx = (p3x + p4x) / 2.0;
                let mPy = (p3y + p4y) / 2.0;
                let d1 = lineToPoint(
                    a1,
                    b1,
                    c1,
                    mPx,
                    mPy
                ); /* Find distance p1p2 to p3 */
                if (d1 == 0) {
                    return rtns;
                }

                mPx = (p1x + p2x) / 2.0;
                mPy = (p1y + p2y) / 2.0;
                let d2 = lineToPoint(
                    a2,
                    b2,
                    c2,
                    mPx,
                    mPy
                ); /* Find distance p3p4 to p2 */
                if (d2 == 0) {
                    return rtns;
                }

                let rr = d1 <= 0 ? -r : r;
                const c1p = c1 - rr * Math.sqrt(a1 * a1 + b1 * b1);
                rr = d2 <= 0 ? -r : r;
                const c2p = c2 - rr * Math.sqrt(a2 * a2 + b2 * b2);
                const d = a1 * b2 - a2 * b1;

                const pCx =
                    (c2p * b1 - c1p * b2) / d; /* Intersect constructed lines */
                const pCy =
                    (c1p * a2 - c2p * a1) / d; /* to find center of arc */
                let pAx = 0;
                let pAy = 0;
                let pBx = 0;
                let pBy = 0;

                let dP = a1 * a1 + b1 * b1;
                if (dP !== 0) {
                    const cP = a1 * pCy - b1 * pCx;
                    pAx = (-a1 * c1 - b1 * cP) / dP;
                    pAy = (a1 * cP - b1 * c1) / dP;
                }
                dP = a2 * a2 + b2 * b2;
                if (dP != 0.0) {
                    const cP = a2 * pCy - b2 * pCx;
                    pBx = (-a2 * c2 - b2 * cP) / dP;
                    pBy = (a2 * cP - b2 * c2) / dP;
                }
                const gv1x = pAx-pCx; 
                const gv1y = pAy-pCy;
                const gv2x = pBx-pCx; 
                const gv2y = pBy-pCy;

                let arcStart = Math.atan2(gv1y,gv1x); 
                let arcAngle = 0.0;
                const dd = Math.sqrt(((gv1x*gv1x)+(gv1y*gv1y)) * ((gv2x*gv2x)+(gv2y*gv2y)));
                if (dd !== 0) {
                    arcAngle = Math.acos((gv1x*gv2x + gv1y*gv2y)/dd);
                }
                const crossProduct = (gv1x*gv2y - gv2x*gv1y);
                if (crossProduct < 0.0){ 
                    arcStart -= arcAngle;
                }
                
                let arc1 = arcStart;
                let arc2 = arcStart + arcAngle;
                if (crossProduct < 0){
                    arc1 = arcStart + arcAngle;
                    arc2 = arcStart;
                }
                arcCenterX    = pCx;
                arcCenterY    = pCy;
                arcStartAngle = arc1;
                arcEndAngle   = arc2;
                arcRadius     = r;
                arcStartX     = arcCenterX + arcRadius*Math.cos(arcStartAngle);
                arcStartY     = arcCenterY + arcRadius*Math.sin(arcStartAngle);
                arcEndX       = arcCenterX + arcRadius*Math.cos(arcEndAngle);
                arcEndY       = arcCenterY + arcRadius*Math.sin(arcEndAngle);
                rtns = {
                    arcCenterX,
                    arcCenterY,
                    arcStartAngle,
                    arcEndAngle,
                    arcRadius,
                    arcStartX,
                    arcStartY,
                    arcEndX,
                    arcEndY,
                };
                return rtns;
            };

            let fp = filletParams(0, 0, a, b, a, b, 1, 1, r);
            let k = 0;
            let y = 0;
            if (t <= fp.arcStartX) {
                k = t / fp.arcStartX;
                y = k * fp.arcStartY;
            } else if (t >= fp.arcEndX) {
                k = (t - fp.arcEndX) / (1 - fp.arcEndX);
                y = fp.arcEndY + k * (1 - fp.arcEndY);
            } else {
                if (t >= fp.arcCenterX) {
                    y = fp.arcCenterY - Math.sqrt(Math.pow(fp.arcRadius, 2) - Math.pow(t - fp.arcCenterX, 2));
                } else {
                    y = fp.arcCenterY + Math.sqrt(Math.pow(fp.arcRadius, 2) - Math.pow(t - fp.arcCenterX, 2));
                }
            }
            return y;
        },
        text: "(t, a, b, r) => {\n    const eps = 0.00001;\n    a = a < eps ? eps : a > 1 - eps ? 1 - eps : a;\n    b = b < eps ? eps : b > 1 - eps ? 1 - eps : b;\n    const lineToPoint = (fa, fb, fc, px, py) => {\n        const d = Math.sqrt(fa * fa + fb * fb);\n        return d !== 0 ? (fa * px + fb * py + fc) / d : 0;\n    };\n    const filletParams = (p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) => {\n        let arcCX = 0,\n            arcCY = 0,\n            arcStartTh = 0,\n            arcEndTh = 0,\n            arcR = 0;\n        let arcStartX = 0,\n            arcStartY = 0,\n            arcEndX = 0,\n            arcEndY = 0;\n        let rtns = {\n            arcCX,\n            arcCY,\n            arcStartTh,\n            arcEndTh,\n            arcR,\n            arcStartX,\n            arcStartY,\n            arcEndX,\n            arcEndY,\n        };\n\n        const c1 = p2x * p1y - p1x * p2y;\n        const a1 = p2y - p1y;\n        const b1 = p1x - p2x;\n        const c2 = p4x * p3y - p3x * p4y;\n        const a2 = p4y - p3y;\n        const b2 = p3x - p4x;\n\n        if (a1 * b2 == a2 * b1) {\n            /* Parallel or coincident lines */\n            return rtns;\n        }\n        let mPx = (p3x + p4x) / 2.0;\n        let mPy = (p3y + p4y) / 2.0;\n        let d1 = lineToPoint(\n            a1,\n            b1,\n            c1,\n            mPx,\n            mPy\n        ); /* Find distance p1p2 to p3 */\n        if (d1 == 0) {\n            return rtns;\n        }\n\n        mPx = (p1x + p2x) / 2.0;\n        mPy = (p1y + p2y) / 2.0;\n        let d2 = linetopoint(\n            a2,\n            b2,\n            c2,\n            mPx,\n            mPy\n        ); /* Find distance p3p4 to p2 */\n        if (d2 == 0) {\n            return rtns;\n        }\n\n        let rr = d1 <= 0 ? -r : r;\n        const c1p = c1 - rr * Math.sqrt(a1 * a1 + b1 * b1);\n        rr = d2 <= 0 ? -r : r;\n        const c2p = c2 - rr * Math.sqrt(a2 * a2 + b2 * b2);\n        const d = a1 * b2 - a2 * b1;\n\n        const pCx =\n            (c2p * b1 - c1p * b2) / d; /* Intersect constructed lines */\n        const pCy =\n            (c1p * a2 - c2p * a1) / d; /* to find center of arc */\n        let pAx = 0;\n        let pAy = 0;\n        let pBx = 0;\n        let pBy = 0;\n\n        let dP = a1 * a1 + b1 * b1;\n        if (dp !== 0) {\n            cP = a1 * pCy - b1 * pCx;\n            pAx = (-a1 * c1 - b1 * cP) / dP;\n            pAy = (a1 * cP - b1 * c1) / dP;\n        }\n        dP = a2 * a2 + b2 * b2;\n        if (dP != 0.0) {\n            cP = a2 * pCy - b2 * pCx;\n            pBx = (-a2 * c2 - b2 * cP) / dP;\n            pBy = (a2 * cP - b2 * c2) / dP;\n        }\n        const gv1x = pAx-pCx; \n        const gv1y = pAy-pCy;\n        const gv2x = pBx-pCx; \n        const gv2y = pBy-pCy;\n\n        const arcStart = Math.atan2(gv1y,gv1x); \n        let arcAngle = 0.0;\n        const dd = Math.sqrt(((gv1x*gv1x)+(gv1y*gv1y)) * ((gv2x*gv2x)+(gv2y*gv2y)));\n        if (dd !== 0) {\n            arcAngle = Math.acos((gv1x*gv2x + gv1y*gv2y)/dd);\n        }\n        const crossProduct = (gv1x*gv2y - gv2x*gv1y);\n        if (crossProduct < 0.0){ \n            arcStart -= arcAngle;\n        }\n        \n        let arc1 = arcStart;\n        let arc2 = arcStart + arcAngle;\n        if (crossProduct < 0){\n            arc1 = arcStart + arcAngle;\n            arc2 = arcStart;\n        }\n        arcCenterX    = pCx;\n        arcCenterY    = pCy;\n        arcStartAngle = arc1;\n        arcEndAngle   = arc2;\n        arcRadius     = r;\n        arcStartX     = arcCenterX + arcRadius*Math.cos(arcStartAngle);\n        arcStartY     = arcCenterY + arcRadius*Math.sin(arcStartAngle);\n        arcEndX       = arcCenterX + arcRadius*Math.cos(arcEndAngle);\n        arcEndY       = arcCenterY + arcRadius*Math.sin(arcEndAngle);\n        return rtns;\n    };\n}",
        params: { a: 0.25, b: 0.75, r: 0.25},
        icon: "doubleellipticfillet.jpg",
        source: "https://www.flong.com/archive/texts/code/shapers_circ/index.html",
    },
];

export { easingFunctions };
