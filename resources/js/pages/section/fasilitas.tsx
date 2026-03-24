import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faChalkboardTeacher,
    faBed,
    faRunning,
    faHeadphones,
    faCogs,
    faMosque,
    faBookOpen,
    faUtensils,
    faStar,
    faExpand,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Facility {
    id: string;
    icon: React.ReactNode;
    titleJp: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const facilities: Facility[] = [
    {
        id: 'kelas',
        icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
        titleJp: '教室',
        title: 'Ruang Kelas Modern',
        description:
            'Ruang kelas ber-AC dengan proyektor interaktif & whiteboard . Dirancang untuk suasana belajar yang nyaman dan fokus sesuai standar pendidikan Jepang.',
        image: '/resource/attachments/kelasFas.jpg',
        tags: ['AC', 'Proyektor', 'Digital'],
    },

    {
        id: 'Asrama',
        icon: <FontAwesomeIcon icon={faCogs} />,
        titleJp: '寮',
        title: 'Asrama',
        description:
            'Asrama yang nyaman dan aman bagi siswa, dilengkapi dengan fasilitas lengkap untuk menunjang kegiatan belajar dan istirahat. Yang berlokasi di Sukun Pondok Indah L13 RT 08 RW 02, Kota Malang',
        image: '/resource/attachments/asrama.jpg',
        tags: ['Etika', 'Praktik'],
    },

];



// ─── SVG Decorations ─────────────────────────────────────────────────────────

function SakuraPetal({ className }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 40 40"
            className={cn('pointer-events-none select-none', className)}
            fill="currentColor"
        >
            <path d="M20 2C20 2 14 10 14 20C14 26.627 16.686 32 20 32C23.314 32 26 26.627 26 20C26 10 20 2 20 2Z" />
            <path
                d="M20 38C20 38 12 34 8 26C5.176 20.176 6 14 9 11C12 8 17.373 9 20 12C22.627 9 28 8 31 11C34 14 34.824 20.176 32 26C28 34 20 38 20 38Z"
                opacity="0.6"
            />
        </svg>
    );
}

function WaveMotif({ className }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 200 40"
            className={cn('pointer-events-none select-none', className)}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
        >
            <path d="M0 20 Q25 5 50 20 Q75 35 100 20 Q125 5 150 20 Q175 35 200 20" strokeLinecap="round" />
            <path d="M0 28 Q25 13 50 28 Q75 43 100 28 Q125 13 150 28 Q175 43 200 28" opacity="0.5" strokeLinecap="round" />
        </svg>
    );
}

function ToriiGate({ className }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 120 120"
            className={cn('pointer-events-none select-none', className)}
            fill="currentColor"
        >
            <rect x="0" y="18" width="120" height="8" rx="2" />
            <rect x="12" y="30" width="96" height="6" rx="2" />
            <rect x="18" y="36" width="10" height="84" rx="3" />
            <rect x="92" y="36" width="10" height="84" rx="3" />
            <path d="M8 18 Q60 0 112 18" strokeWidth="6" stroke="currentColor" fill="none" strokeLinecap="round" />
        </svg>
    );
}

function SeigaihaPattern({ className }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            className={cn('pointer-events-none select-none', className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern id="seigaiha-fasilitas" patternUnits="userSpaceOnUse" width="40" height="30">
                    <ellipse cx="20" cy="30" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <ellipse cx="0" cy="30" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <ellipse cx="40" cy="30" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <ellipse cx="10" cy="15" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <ellipse cx="30" cy="15" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#seigaiha-fasilitas)" />
        </svg>
    );
}




// ─── Facility Card ────────────────────────────────────────────────────────────

interface FacilityCardProps {
    facility: Facility;
    onOpen: () => void;
    isFeatured?: boolean;
}

function FacilityCard({ facility, onOpen, isFeatured }: FacilityCardProps) {
    return (
        <article
            className={cn(
                "group relative flex cursor-pointer flex-col overflow-hidden rounded-[2.5rem] border border-neutral-100 bg-white shadow-sm transition-all duration-500 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-100/50",
                isFeatured ? "md:flex-row md:items-stretch" : "flex-col"
            )}
            style={{ animation: 'fadeInCard 0.45s ease both' }}
            tabIndex={0}
            role="button"
            aria-label={`Lihat detail: ${facility.title}`}
            onKeyDown={(e) => e.key === 'Enter' && onOpen()}
        >
            {/* Top accent line */}
            <div className="absolute left-0 right-0 top-0 z-10 h-[3px] bg-gradient-to-r from-transparent via-rose-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Corner bloom */}
            <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-rose-50 transition-transform duration-500 group-hover:scale-[1.8]" />

            {/* Image section */}
            <div className={cn(
                "relative overflow-hidden bg-neutral-100",
                isFeatured ? "aspect-square md:aspect-auto md:w-5/12" : "aspect-[16/10] w-full"
            )}>
                <img
                    src={facility.image}
                    alt={`${facility.title} - Fasilitas LPK Puji Intan Shafira`}
                    className="h-full w-full object-cover transition-transform duration-700 "
                    loading="lazy"
                />

                {/* JP badge */}
                <div className="absolute left-4 top-4 z-10 rounded-full border border-white/30 bg-white/85 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-rose-600 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:border-rose-200 group-hover:bg-white">
                    {facility.titleJp}
                </div>
            </div>

            {/* Card body */}
            <div className={cn(
                "relative flex flex-1 flex-col justify-center",
                isFeatured ? "p-8 md:p-10" : "px-6 py-5"
            )}>
                {/* Icon + title */}
                <div className="mb-4 flex items-center gap-4">
                    <div className={cn(
                        "flex flex-shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-500 ring-1 ring-rose-100 transition-all duration-300 group-hover:bg-rose-100 group-hover:scale-110",
                        isFeatured ? "h-14 w-14 text-2xl" : "h-10 w-10 text-sm"
                    )}>
                        {facility.icon}
                    </div>
                    <div>
                        <h3 className={cn(
                            "font-extrabold text-neutral-900 transition-colors duration-200 group-hover:text-rose-600",
                            isFeatured ? "text-xl md:text-2xl" : "text-base"
                        )}>
                            {facility.title}
                        </h3>
                        {isFeatured && (
                            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-rose-400">Premium Facility</p>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className={cn(
                    "mb-6 leading-relaxed text-neutral-500",
                    isFeatured ? "text-base" : "line-clamp-2 text-[12px]"
                )}>
                    {facility.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {facility.tags.map((tag) => (
                        <span
                            key={tag}
                            className={cn(
                                "rounded-full border border-rose-100 bg-rose-50 font-semibold uppercase tracking-widest text-rose-500",
                                isFeatured ? "px-4 py-1.5 text-[11px]" : "px-2 py-0.5 text-[9px]"
                            )}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Bottom accent petal */}
                <div className="absolute bottom-6 right-6">
                    <SakuraPetal className={cn(
                        "text-rose-200 transition-transform duration-300  group-hover:rotate-12 group-hover:text-rose-400",
                        isFeatured ? "h-10 w-10" : "h-5 w-5"
                    )} />
                </div>
            </div>
        </article>
    );
}


// ─── Main Section ─────────────────────────────────────────────────────────────

export default function FasilitasSection() {
    const [lightboxFacility, setLightboxFacility] = useState<Facility | null>(null);

    return (
        <>
            <section
                id="fasilitas"
                className="relative overflow-hidden bg-white/50 py-28"
            >
                {/* ── Background decorations ── */}
                <div
                    aria-hidden="true"
                    className="absolute -top-28 -right-36 h-[500px] w-[500px] rounded-full bg-rose-200/20 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute bottom-0 -left-36 h-[380px] w-[380px] rounded-full bg-rose-100/25 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute top-1/3 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-amber-50/30 blur-3xl"
                />

                {/* Seigaiha wave pattern */}
                <SeigaihaPattern className="absolute inset-0 h-full w-full text-rose-200/50 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

                {/* Kanji watermarks */}
                <div
                    aria-hidden="true"
                    className="absolute right-8 top-10 select-none font-serif text-[13rem] font-bold leading-none text-rose-100/50"
                >
                    施
                </div>
                <div
                    aria-hidden="true"
                    className="absolute left-6 bottom-20 select-none font-serif text-[10rem] font-bold leading-none text-rose-100/50"
                >
                    設
                </div>

                {/* Torii gates */}
                <ToriiGate className="absolute right-16 top-4 h-44 w-auto text-rose-200/40 sm:right-28 sm:h-52" />
                <ToriiGate className="absolute -left-8 bottom-8 h-28 w-auto -scale-x-100 text-rose-100/40" />

                {/* Floating sakura */}
                <SakuraPetal className="absolute right-1/4 top-20 h-8 w-8 animate-[spin_15s_linear_infinite] text-rose-300/25" />
                <SakuraPetal className="absolute left-1/3 bottom-28 h-6 w-6 animate-[spin_19s_linear_infinite_reverse] text-rose-200/35" />
                <SakuraPetal className="absolute left-2/3 top-1/4 h-5 w-5 animate-[spin_22s_linear_infinite] text-rose-300/20" />

                {/* ── Main Content ── */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* ── Section Header ── */}
                    <div className="mb-14 text-center">
                        {/* JP label */}
                        <div className="mb-4 inline-flex items-center gap-2">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-rose-400" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-500">
                                施設案内
                            </span>
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-rose-400" />
                        </div>

                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                            Fasilitas{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
                                    Kami
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="absolute -bottom-1 left-0 h-2 w-full -skew-x-2 bg-rose-100"
                                />
                            </span>
                        </h2>

                        {/* Wave divider */}
                        <div className="mb-5 flex justify-center">
                            <WaveMotif className="h-5 w-36 text-rose-300" />
                        </div>

                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-500">
                            Fasilitas lengkap standar Jepang yang dirancang untuk mendukung kenyamanan,
                            kedisiplinan, dan kesiapan peserta sebelum berangkat ke Jepang.
                        </p>


                    </div>

                    {/* ── Facility Grid ── */}
                    <div className={cn(
                        "grid gap-10",
                        facilities.length <= 2
                            ? "mx-auto max-w-5xl grid-cols-1"
                            : "sm:grid-cols-2 lg:grid-cols-4"
                    )}>
                        {facilities.map((facility) => (
                            <FacilityCard
                                key={facility.id}
                                facility={facility}
                                onOpen={() => setLightboxFacility(facility)}
                                isFeatured={facilities.length <= 2}
                            />
                        ))}
                    </div>


                </div>

                {/* CSS keyframes */}
                <style>{`
                    @keyframes fadeInCard {
                        from { opacity: 0; transform: translateY(16px); }
                        to   { opacity: 1; transform: translateY(0);    }
                    }
                    @keyframes fadeInFasilitas {
                        from { opacity: 0; }
                        to   { opacity: 1; }
                    }
                    @keyframes scaleInFasilitas {
                        from { opacity: 0; transform: scale(0.94) translateY(12px); }
                        to   { opacity: 1; transform: scale(1)    translateY(0px);  }
                    }
                `}</style>
            </section>


        </>
    );
}