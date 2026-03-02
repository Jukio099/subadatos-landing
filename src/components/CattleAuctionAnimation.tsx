import { useState, useEffect } from "react";

// Animated line chart data generator
function useAnimatedChart(points: number, range: [number, number]) {
    const [data, setData] = useState<number[]>(() =>
        Array.from({ length: points }, () => Math.random() * (range[1] - range[0]) + range[0])
    );
    useEffect(() => {
        const interval = setInterval(() => {
            setData(prev => {
                const next = [...prev.slice(1)];
                next.push(Math.random() * (range[1] - range[0]) + range[0]);
                return next;
            });
        }, 700);
        return () => clearInterval(interval);
    }, []);
    return data;
}

function useCounter(min: number, max: number, interval: number) {
    const [value, setValue] = useState(min + Math.floor(Math.random() * (max - min)));
    useEffect(() => {
        const t = setInterval(() => {
            setValue(v => {
                const delta = Math.floor((Math.random() - 0.4) * 25000);
                return Math.max(min, Math.min(max, v + delta));
            });
        }, interval);
        return () => clearInterval(t);
    }, []);
    return value;
}

function usePulse(period: number) {
    const [t, setT] = useState(0);
    useEffect(() => {
        let frame: number;
        let start: number;
        const animate = (ts: number) => {
            if (!start) start = ts;
            setT(((ts - start) % period) / period);
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [period]);
    return t;
}

// Polyline path from data array
function chartPath(data: number[], w: number, h: number, padX = 0, padY = 4): string {
    if (data.length < 2) return "";
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    return data
        .map((v, i) => {
            const x = padX + (i / (data.length - 1)) * (w - padX * 2);
            const y = padY + ((max - v) / range) * (h - padY * 2);
            return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join(" ");
}

// Site palette
const C = {
    green: "#35a85d", // nature-600
    greenLt: "#4fc476", // nature-500
    greenBg: "#f2fcf5", // nature-50
    greenDk: "#0f3119", // nature-950
    earth: "#9e653a", // earth-600
    earthLt: "#b47c45", // earth-500
    bg: "#0f2318", // dark green background
    panel: "#132e1f", // panel bg
};

const CattleAuctionAnimation = () => {
    const priceData = useAnimatedChart(18, [40, 90]);
    const volumeData = useAnimatedChart(18, [25, 75]);
    const price = useCounter(1_650_000, 2_100_000, 900);
    const t = usePulse(3000);
    const scanY = 80 + t * 200;
    const breatheScale = 1 + Math.sin(t * Math.PI * 2) * 0.018;
    const hammerAngle = Math.sin(t * Math.PI * 2 * 2.5) * 28 - 10;

    const [bars, setBars] = useState([0.65, 0.82, 0.48, 0.91, 0.55]);
    useEffect(() => {
        const iv = setInterval(() => {
            setBars(prev => prev.map(b => Math.max(0.2, Math.min(1, b + (Math.random() - 0.5) * 0.15))));
        }, 700);
        return () => clearInterval(iv);
    }, []);

    const priceFormatted = price.toLocaleString("es-CO");
    const priceUp = price > 1_850_000;

    return (
        <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-nature-200">
            <svg
                viewBox="0 0 800 500"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full block"
                style={{ fontFamily: "'Courier New', monospace" }}
            >
                <defs>
                    <radialGradient id="bgGrad" cx="50%" cy="50%" r="70%">
                        <stop offset="0%" stopColor={C.bg} />
                        <stop offset="100%" stopColor="#071a0e" />
                    </radialGradient>
                    <filter id="glowG" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="3" result="b" />
                        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="glowE" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="4" result="b" />
                        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="soft">
                        <feGaussianBlur stdDeviation="2.5" result="b" />
                        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <linearGradient id="platformG" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={C.green} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={C.green} stopOpacity="0.05" />
                    </linearGradient>
                    <linearGradient id="scanG" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={C.earthLt} stopOpacity="0" />
                        <stop offset="50%" stopColor={C.earthLt} stopOpacity="0.6" />
                        <stop offset="100%" stopColor={C.earthLt} stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="priceG" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor={C.green} />
                        <stop offset="100%" stopColor={C.greenLt} />
                    </linearGradient>
                </defs>

                {/* ── FONDO ── */}
                <rect width="800" height="500" fill="url(#bgGrad)" />

                {/* Cuadrícula sutil */}
                {[0, 1, 2, 3, 4].map(i => (
                    <line key={`h${i}`} x1="0" y1={100 + i * 80} x2="800" y2={100 + i * 80}
                        stroke={C.green} strokeWidth="0.3" strokeOpacity="0.1" strokeDasharray="6,10" />
                ))}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <line key={`v${i}`} x1={100 * i} y1="0" x2={100 * i} y2="500"
                        stroke={C.green} strokeWidth="0.3" strokeOpacity="0.06" strokeDasharray="6,14" />
                ))}

                {/* Esquinas */}
                {[[20, 20, 1, 1], [780, 20, -1, 1], [20, 480, 1, -1], [780, 480, -1, -1]].map(([x, y, sx, sy], i) => (
                    <g key={i} stroke={C.green} strokeWidth="1.5" strokeOpacity="0.4" fill="none">
                        <line x1={x} y1={y} x2={Number(x) + Number(sx) * 20} y2={y} />
                        <line x1={x} y1={y} x2={x} y2={Number(y) + Number(sy) * 20} />
                    </g>
                ))}

                {/* Título */}
                <text x="400" y="30" textAnchor="middle" fill={C.green} fontSize="13" letterSpacing="4" fontWeight="bold" opacity="0.9">
                    SUBADATOS · INTELIGENCIA GANADERA
                    <animate attributeName="opacity" values="0.9;0.6;0.9" dur="3s" repeatCount="indefinite" />
                </text>
                <line x1="200" y1="35" x2="340" y2="35" stroke={C.green} strokeWidth="0.5" strokeOpacity="0.4" />
                <line x1="460" y1="35" x2="600" y2="35" stroke={C.green} strokeWidth="0.5" strokeOpacity="0.4" />

                {/* ── PANEL IZQUIERDO: GRÁFICO DE PRECIOS ── */}
                <g transform="translate(25, 60)">
                    <rect x="0" y="0" width="200" height="165" rx="6" fill={C.panel} stroke={C.green} strokeWidth="0.8" strokeOpacity="0.4" />
                    <rect x="0" y="0" width="200" height="22" rx="6" fill={C.green} fillOpacity="0.1" />
                    <text x="8" y="15" fill={C.green} fontSize="8" letterSpacing="2" fontWeight="bold">PRECIO/KG · EN VIVO</text>
                    <circle cx="188" cy="11" r="4" fill={C.green}>
                        <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
                    </circle>

                    <g clipPath="url(#chartClip1)">
                        <clipPath id="chartClip1"><rect x="35" y="60" width="160" height="90" /></clipPath>
                        <path d={chartPath(priceData, 160, 90) + " L195,95 L35,95 Z"} fill={C.green} fillOpacity="0.07" />
                        <path d={chartPath(priceData, 160, 90)} fill="none" stroke={C.green} strokeWidth="2" filter="url(#glowG)" strokeLinejoin="round" strokeLinecap="round" />
                        {priceData.length > 0 && (() => {
                            const last = priceData[priceData.length - 1];
                            const min = Math.min(...priceData), max = Math.max(...priceData);
                            const range = max - min || 1;
                            const x2 = 35 + 160;
                            const y2 = 64 + 4 + ((max - last) / range) * 82;
                            return <circle cx={x2} cy={y2} r={3} fill={C.green} filter="url(#glowG)"><animate attributeName="r" values="3;5;3" dur="0.8s" repeatCount="indefinite" /></circle>;
                        })()}
                        <path d={chartPath(volumeData, 160, 90)} fill="none" stroke={C.earthLt} strokeWidth="1.5" strokeDasharray="4,3" filter="url(#glowE)" strokeLinejoin="round" />
                    </g>

                    <text x="35" y="158" fill={C.green} fontSize="6" opacity="0.5">HOY</text>
                    <text x="115" y="158" fill={C.green} fontSize="6" opacity="0.5" textAnchor="middle">–7D</text>
                    <text x="195" y="158" fill={C.green} fontSize="6" opacity="0.5" textAnchor="end">–14D</text>
                    <line x1="35" y1="148" x2="55" y2="148" stroke={C.green} strokeWidth="2" />
                    <text x="58" y="151" fill={C.green} fontSize="6" opacity="0.7">Novillo</text>
                    <line x1="100" y1="148" x2="120" y2="148" stroke={C.earthLt} strokeWidth="1.5" strokeDasharray="4,2" />
                    <text x="123" y="151" fill={C.earthLt} fontSize="6" opacity="0.7">Vaca</text>
                </g>

                {/* ── PANEL IZQUIERDO 2: VOLUMEN ── */}
                <g transform="translate(25, 245)">
                    <rect x="0" y="0" width="200" height="145" rx="6" fill={C.panel} stroke={C.earth} strokeWidth="0.8" strokeOpacity="0.4" />
                    <rect x="0" y="0" width="200" height="22" rx="6" fill={C.earth} fillOpacity="0.08" />
                    <text x="8" y="15" fill={C.earth} fontSize="8" letterSpacing="2" fontWeight="bold">VOLUMEN SEMANAL</text>
                    {bars.map((h, i) => {
                        const barH = h * 90;
                        const x = 20 + i * 36;
                        const col = i % 2 === 0 ? C.green : C.earthLt;
                        return (
                            <g key={i}>
                                <rect x={x} y={120 - barH} width={22} height={barH} fill={col} fillOpacity="0.2" rx="2" style={{ transition: "all 0.5s ease" }} />
                                <rect x={x} y={120 - barH} width={22} height={4} fill={col} fillOpacity="0.9" rx="2" filter="url(#soft)" />
                                <text x={x + 11} y={132} textAnchor="middle" fill={col} fontSize="6" opacity="0.7">{["L", "M", "X", "J", "V"][i]}</text>
                            </g>
                        );
                    })}
                </g>

                {/* ── CENTRO: VACA + PLATAFORMA ── */}
                <g transform="translate(290, 55)">
                    <ellipse cx="110" cy="255" rx="90" ry="18" fill={C.green} fillOpacity="0.08" filter="url(#glowG)">
                        <animate attributeName="rx" values="90;100;90" dur="2s" repeatCount="indefinite" />
                    </ellipse>
                    <rect x="30" y="248" width="160" height="8" rx="4" fill="url(#platformG)" stroke={C.green} strokeWidth="1" strokeOpacity="0.5" />
                    <rect x="50" y="256" width="120" height="3" rx="2" fill={C.green} fillOpacity="0.2" />
                    {[0, 1, 2].map(i => (
                        <line key={i} x1={50 + i * 40} y1="248" x2={50 + i * 40} y2="256" stroke={C.green} strokeWidth="0.8" strokeOpacity="0.5">
                            <animate attributeName="opacity" values="0.5;1;0.5" dur="1s" begin={`${i * 0.33}s`} repeatCount="indefinite" />
                        </line>
                    ))}

                    {/* VACA */}
                    <g transform={`translate(110, 170) scale(${breatheScale}, ${breatheScale}) translate(-110, -170)`}>
                        <ellipse cx="110" cy="185" rx="55" ry="38" fill="#e8dcc8" stroke="#8b7355" strokeWidth="1.5" />
                        <ellipse cx="95" cy="178" rx="18" ry="12" fill="#2d1a0e" fillOpacity="0.35" />
                        <ellipse cx="130" cy="195" rx="12" ry="8" fill="#2d1a0e" fillOpacity="0.28" />
                        <ellipse cx="108" cy="200" rx="8" ry="5" fill="#2d1a0e" fillOpacity="0.22" />
                        <ellipse cx="155" cy="170" rx="22" ry="18" fill="#e8dcc8" stroke="#8b7355" strokeWidth="1.5" />
                        <ellipse cx="172" cy="178" rx="10" ry="7" fill="#d4a090" stroke="#8b7355" strokeWidth="1" />
                        <circle cx="169" cy="177" r="2" fill="#2d1a0e" />
                        <circle cx="175" cy="177" r="2" fill="#2d1a0e" />
                        <circle cx="158" cy="164" r="4" fill="white" />
                        <circle cx="159" cy="164" r="2.5" fill="#1a1a1a" />
                        <circle cx="160" cy="163" r="0.8" fill="white" />
                        <ellipse cx="143" cy="156" rx="8" ry="5" fill="#e8dcc8" stroke="#8b7355" strokeWidth="1" transform="rotate(-20,143,156)" />
                        <ellipse cx="143" cy="156" rx="5" ry="3" fill="#d4a090" transform="rotate(-20,143,156)" />
                        <path d="M145,152 Q138,142 132,144" stroke="#c4a882" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                        <path d="M150,150 Q148,140 153,138" stroke="#c4a882" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                        <rect x="72" y="218" width="14" height="30" rx="4" fill="#d4c4a8" stroke="#8b7355" strokeWidth="1" />
                        <rect x="92" y="218" width="14" height="30" rx="4" fill="#d4c4a8" stroke="#8b7355" strokeWidth="1" />
                        <rect x="120" y="218" width="14" height="30" rx="4" fill="#d4c4a8" stroke="#8b7355" strokeWidth="1" />
                        <rect x="140" y="218" width="14" height="30" rx="4" fill="#d4c4a8" stroke="#8b7355" strokeWidth="1" />
                        {[72, 92, 120, 140].map((x, i) => <rect key={i} x={x} y="244" width="14" height="6" rx="3" fill="#4a3728" />)}
                        <ellipse cx="105" cy="224" rx="18" ry="10" fill="#d4a090" stroke="#8b7355" strokeWidth="0.8" />
                        <path d="M58,190 Q40,195 42,215 Q44,225 50,228" stroke="#8b7355" strokeWidth="3" fill="none" strokeLinecap="round">
                            <animateTransform attributeName="transform" type="rotate" values="-5,58,190;8,58,190;-5,58,190" dur="1.8s" repeatCount="indefinite" additive="sum" />
                        </path>
                        <ellipse cx="51" cy="230" rx="6" ry="8" fill="#8b7355" transform="rotate(10,51,230)" />
                    </g>

                    {/* ESCANEO IA */}
                    <rect x="45" y={scanY - 4} width="130" height="8" fill="url(#scanG)" opacity="0.7" />
                    <line x1="45" y1={scanY} x2="175" y2={scanY} stroke={C.earthLt} strokeWidth="1.5" strokeOpacity="0.9" filter="url(#glowE)" />
                    {[60, 90, 120, 150].map((x, i) => (
                        <circle key={i} cx={x} cy={scanY} r={2} fill={C.earthLt} opacity={0.6 + Math.sin(t * Math.PI * 4 + i) * 0.4}>
                            <animate attributeName="opacity" values="0.3;1;0.3" dur="0.6s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
                        </circle>
                    ))}
                    <text x="182" y={scanY + 4} fill={C.earthLt} fontSize="7" opacity="0.8">IA SCAN</text>

                    {/* Etiquetas flotantes */}
                    <g transform="translate(20, 100)">
                        <rect x="0" y="0" width="70" height="28" rx="4" fill={C.bg} stroke={C.green} strokeWidth="0.8" strokeOpacity="0.6" />
                        <text x="6" y="10" fill={C.green} fontSize="6" opacity="0.6">PESO EST.</text>
                        <text x="6" y="23" fill={C.green} fontSize="12" fontWeight="bold">
                            {Math.round(380 + Math.sin(t * Math.PI * 2) * 8)} kg
                        </text>
                    </g>
                    <g transform="translate(130, 100)">
                        <rect x="0" y="0" width="70" height="28" rx="4" fill={C.bg} stroke={C.earth} strokeWidth="0.8" strokeOpacity="0.6" />
                        <text x="6" y="10" fill={C.earth} fontSize="6" opacity="0.6">RAZA</text>
                        <text x="6" y="23" fill={C.earth} fontSize="9" fontWeight="bold">Brahman</text>
                    </g>
                </g>

                {/* ── PANEL DERECHO: PRECIO + MÉTRICAS ── */}
                <g transform="translate(570, 60)">
                    <rect x="0" y="0" width="210" height="85" rx="6" fill={C.panel} stroke={C.green} strokeWidth="1" strokeOpacity="0.6" />
                    <rect x="0" y="0" width="210" height="22" rx="6" fill={C.green} fillOpacity="0.1" />
                    <text x="8" y="15" fill={C.green} fontSize="8" letterSpacing="2" fontWeight="bold">PUJA ACTUAL · EN VIVO</text>
                    <circle cx="200" cy="11" r="4" fill={C.green}>
                        <animate attributeName="r" values="4;7;4" dur="0.9s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="1;0.3;1" dur="0.9s" repeatCount="indefinite" />
                    </circle>
                    <text x="105" y="60" textAnchor="middle" fill="url(#priceG)" fontSize="26" fontWeight="bold" filter="url(#glowG)" letterSpacing="1">
                        ${priceFormatted}
                    </text>
                    <text x="105" y="76" textAnchor="middle" fill={priceUp ? C.green : "#ef4444"} fontSize="10">
                        {priceUp ? "▲" : "▼"} {priceUp ? "+2.4%" : "-1.1%"} vs semana anterior
                        <animate attributeName="opacity" values="1;0.5;1" dur="1.4s" repeatCount="indefinite" />
                    </text>

                    {/* Métricas */}
                    <g transform="translate(0, 95)">
                        {[
                            { label: "LOTES ACTIVOS", value: "24", color: C.green },
                            { label: "PUJAS/MIN", value: "8.3", color: C.earthLt },
                            { label: "COMPRADORES", value: "31", color: C.green },
                            { label: "VOL. TRANSADO", value: "182T", color: C.earthLt },
                        ].map(({ label, value, color }, i) => (
                            <g key={i} transform={`translate(${(i % 2) * 108}, ${Math.floor(i / 2) * 52})`}>
                                <rect x="0" y="0" width="100" height="44" rx="4" fill={C.bg} stroke={color} strokeWidth="0.6" strokeOpacity="0.4" />
                                <text x="8" y="14" fill={color} fontSize="6" opacity="0.6" letterSpacing="1">{label}</text>
                                <text x="8" y="34" fill={color} fontSize="18" fontWeight="bold" filter="url(#soft)">{value}</text>
                            </g>
                        ))}
                    </g>

                    {/* Predicción IA */}
                    <g transform="translate(0, 215)">
                        <rect x="0" y="0" width="210" height="55" rx="6" fill={C.panel} stroke={C.green} strokeWidth="0.7" strokeOpacity="0.4" />
                        <text x="8" y="14" fill={C.green} fontSize="7" letterSpacing="2" opacity="0.8">PREDICCIÓN IA · PRÓX. SUBASTA</text>
                        <rect x="8" y="20" width="194" height="10" rx="5" fill={C.green} fillOpacity="0.1" />
                        <rect x="8" y="20" width="140" height="10" rx="5" fill="url(#priceG)">
                            <animate attributeName="width" values="140;155;148;160;140" dur="3s" repeatCount="indefinite" />
                        </rect>
                        <text x="8" y="44" fill={C.green} fontSize="8" opacity="0.7">
                            Confianza: 87% · Rango: $1.8M – $2.1M
                        </text>
                    </g>

                    {/* Estado del sistema */}
                    <g transform="translate(0, 280)">
                        {[
                            { label: "DATOS EN LÍNEA", ok: true },
                            { label: "MODELO ML", ok: true },
                            { label: "TRANSMISIÓN", ok: true },
                        ].map(({ label, ok }, i) => (
                            <g key={i} transform={`translate(0, ${i * 20})`}>
                                <circle cx="8" cy="7" r="4" fill={ok ? C.green : "#ef4444"}>
                                    <animate attributeName="opacity" values="1;0.4;1" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
                                </circle>
                                <text x="18" y="11" fill={ok ? C.green : "#ef4444"} fontSize="8" opacity="0.8">{label}</text>
                                <text x="200" y="11" fill={ok ? C.green : "#ef4444"} fontSize="7" textAnchor="end" opacity="0.6">{ok ? "ACTIVO" : "ERROR"}</text>
                            </g>
                        ))}
                    </g>
                </g>

                {/* ── MARTILLO ── */}
                <g transform={`translate(400, 420) rotate(${hammerAngle}, 0, 0)`}>
                    <rect x="-4" y="0" width="8" height="50" rx="3" fill="#8b6914" />
                    <rect x="-18" y="-8" width="36" height="16" rx="4" fill="#c8a830" stroke="#8b6914" strokeWidth="1" />
                    <rect x="-18" y="-8" width="36" height="5" rx="2" fill="#e8c840" />
                    <ellipse cx="0" cy="50" rx="12" ry="4" fill={C.green} fillOpacity="0.3" filter="url(#glowG)">
                        <animate attributeName="opacity" values="0;0.5;0" dur="0.8s" repeatCount="indefinite" />
                    </ellipse>
                    <text x="0" y="-14" textAnchor="middle" fill="#e8c840" fontSize="6" opacity="0.7">MARTILLO</text>
                </g>

                {/* ── PUJAS ANIMADAS ── */}
                {[
                    { cx: 310, cy: 400, delay: 0 },
                    { cx: 350, cy: 420, delay: 0.4 },
                    { cx: 460, cy: 415, delay: 0.8 },
                    { cx: 490, cy: 395, delay: 1.2 },
                    { cx: 430, cy: 430, delay: 0.2 },
                ].map((b, i) => (
                    <g key={i}>
                        <circle cx={b.cx} cy={b.cy} r={5} fill={i % 2 === 0 ? C.green : C.earthLt} opacity={0.85}>
                            <animate attributeName="r" values="5;10;5" dur="1.2s" begin={`${b.delay}s`} repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.85;0.2;0.85" dur="1.2s" begin={`${b.delay}s`} repeatCount="indefinite" />
                            <animateTransform attributeName="transform" type="translate" values="0,0;0,-18;0,0" dur="1.2s" begin={`${b.delay}s`} repeatCount="indefinite" additive="sum" />
                        </circle>
                        <text x={b.cx} y={b.cy - 2} textAnchor="middle" fontSize="6" fill="white" fontWeight="bold" opacity={0}>
                            PUJA
                            <animate attributeName="opacity" values="0;1;0" dur="1.2s" begin={`${b.delay}s`} repeatCount="indefinite" />
                            <animateTransform attributeName="transform" type="translate" values="0,0;0,-18;0,0" dur="1.2s" begin={`${b.delay}s`} repeatCount="indefinite" additive="sum" />
                        </text>
                    </g>
                ))}

                {/* ── BARRA INFERIOR ── */}
                <g transform="translate(0, 462)">
                    <rect x="20" y="0" width="760" height="28" rx="5" fill={C.panel} stroke={C.green} strokeWidth="0.5" strokeOpacity="0.3" />
                    <text x="35" y="18" fill={C.green} fontSize="7" opacity="0.6" letterSpacing="1">
                        CENTRAL GANADERA · MEDELLÍN · SUBADATOS.COM
                    </text>
                    <clipPath id="tickerClip"><rect x="300" y="0" width="340" height="28" /></clipPath>
                    <g clipPath="url(#tickerClip)">
                        <text y="18" fill={C.earthLt} fontSize="7" opacity="0.7" letterSpacing="0.5">
                            <animate attributeName="x" values="640;-800" dur="14s" repeatCount="indefinite" />
                            NOVILLO $8.200/kg ▲ · VACA GORDA $7.400/kg ▼ · TERNERO $9.100/kg ▲ · TORO $12.500/kg ▲ · NOVILLA $8.800/kg ▲
                        </text>
                    </g>
                    <circle cx="755" cy="14" r="4" fill={C.green}>
                        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
                    </circle>
                    <text x="742" y="18" fill={C.green} fontSize="7" opacity="0.7" textAnchor="end">VIVO</text>
                </g>

                {/* Partículas flotantes */}
                {[
                    { x: 280, y: 150, dur: "4s", delay: "0s" },
                    { x: 560, y: 200, dur: "5s", delay: "1s" },
                    { x: 240, y: 320, dur: "3.5s", delay: "0.5s" },
                    { x: 570, y: 350, dur: "4.5s", delay: "1.5s" },
                ].map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r="2" fill={C.green} opacity="0.4">
                        <animate attributeName="cy" values={`${p.y};${p.y - 30};${p.y}`} dur={p.dur} begin={p.delay} repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0.8;0.4" dur={p.dur} begin={p.delay} repeatCount="indefinite" />
                    </circle>
                ))}
            </svg>
        </div>
    );
};

export default CattleAuctionAnimation;
