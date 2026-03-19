import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLanguage,
    faIndustry,
    faUtensils,
    faHardHat,
    faSeedling,
    faLaptopCode,
    faArrowRight,
    faCircleCheck,
    faClock,
    faGraduationCap,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

// ─── Types ─────────────────────────────────────────────────────────────────────
interface ProgramTag {
    label: string;
}

interface Program {
    id: string;
    icon: React.ReactNode;
    categoryJp: string;
    title: string;
    description: string;
    duration: string;
    level: string;
    tags: ProgramTag[];
    accent: 'rose' | 'amber' | 'emerald' | 'sky' | 'violet' | 'featured';
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const programs: Program[] = [
    {
        id: 'bahasa',
        icon: <FontAwesomeIcon icon={faLanguage} />,
        categoryJp: '語学研修',
        title: 'Bahasa Jepang Intensif',
        description:
            'Kursus bahasa Jepang dari level N5 hingga N3 dengan metode komunikatif dan immersive. Dilengkapi lab bahasa modern dan native speaker tutor.',
        duration: '6 – 12 Bulan',
        level: 'N5 → N3',
        tags: [{ label: 'JLPT' }, { label: 'Komunikatif' }, { label: 'Native Speaker' }],
        accent: 'rose',
    },

    {
        id: 'it',
        icon: <FontAwesomeIcon icon={faLaptopCode} />,
        categoryJp: 'IT・デジタル',
        title: 'IT & Digital Support',
        description:
            'Program teknologi informasi untuk mendukung industri digital Jepang yang berkembang pesat. Mencakup IT Support, jaringan, dan layanan digital.',
        duration: '8 – 10 Bulan',
        level: 'IT Support',
        tags: [{ label: 'IT Support' }, { label: 'Network' }, { label: 'Digital' }],
        accent: 'rose',
    },
];

// ─── Accent palette map ─────────────────────────────────────────────────────────────
const accentMap = {
    rose: {
        icon: 'bg-rose-50 text-rose-500 ring-rose-100',
        iconHover: 'group-hover:bg-rose-100',
        tag: 'bg-rose-50 text-rose-600 border-rose-100',
        badge: 'text-rose-400',
        border: 'group-hover:border-rose-300',
        glow: 'group-hover:shadow-rose-100/60',
        jp: 'text-rose-400',
        check: 'text-rose-500',
    },
    amber: {
        icon: 'bg-amber-50 text-amber-500 ring-amber-100',
        iconHover: 'group-hover:bg-amber-100',
        tag: 'bg-amber-50 text-amber-700 border-amber-100',
        badge: 'text-amber-400',
        border: 'group-hover:border-amber-300',
        glow: 'group-hover:shadow-amber-100/60',
        jp: 'text-amber-400',
        check: 'text-amber-500',
    },
    emerald: {
        icon: 'bg-emerald-50 text-emerald-500 ring-emerald-100',
        iconHover: 'group-hover:bg-emerald-100',
        tag: 'bg-emerald-50 text-emerald-700 border-emerald-100',
        badge: 'text-emerald-400',
        border: 'group-hover:border-emerald-300',
        glow: 'group-hover:shadow-emerald-100/60',
        jp: 'text-emerald-500',
        check: 'text-emerald-500',
    },
    sky: {
        icon: 'bg-sky-50 text-sky-500 ring-sky-100',
        iconHover: 'group-hover:bg-sky-100',
        tag: 'bg-sky-50 text-sky-700 border-sky-100',
        badge: 'text-sky-400',
        border: 'group-hover:border-sky-300',
        glow: 'group-hover:shadow-sky-100/60',
        jp: 'text-sky-500',
        check: 'text-sky-500',
    },
    violet: {
        icon: 'bg-violet-50 text-violet-500 ring-violet-100',
        iconHover: 'group-hover:bg-violet-100',
        tag: 'bg-violet-50 text-violet-700 border-violet-100',
        badge: 'text-violet-400',
        border: 'group-hover:border-violet-300',
        glow: 'group-hover:shadow-violet-100/60',
        jp: 'text-violet-500',
        check: 'text-violet-500',
    },
    featured: {
        icon: 'bg-white/20 text-white ring-white/20',
        iconHover: 'group-hover:bg-white/30',
        tag: 'bg-white/20 text-white border-white/20',
        badge: 'text-rose-200',
        border: '',
        glow: '',
        jp: 'text-rose-200',
        check: 'text-rose-200',
    },
};

// ─── Sub Components ────────────────────────────────────────────────────────────

/** Sakura petal SVG */
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

/** Wave motif SVG divider */
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
            <path
                d="M0 20 Q25 5 50 20 Q75 35 100 20 Q125 5 150 20 Q175 35 200 20"
                strokeLinecap="round"
            />
            <path
                d="M0 28 Q25 13 50 28 Q75 43 100 28 Q125 13 150 28 Q175 43 200 28"
                opacity="0.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

/** Asanoha lattice pattern background */
function AsanohaPattern({ className }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            className={cn('pointer-events-none select-none', className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern id="asanoha-prog" patternUnits="userSpaceOnUse" width="40" height="40">
                    <g fill="none" stroke="currentColor" strokeWidth="0.5">
                        <line x1="20" y1="0" x2="20" y2="40" />
                        <line x1="0" y1="20" x2="40" y2="20" />
                        <line x1="0" y1="0" x2="40" y2="40" />
                        <line x1="40" y1="0" x2="0" y2="40" />
                        <circle cx="20" cy="20" r="2.5" />
                    </g>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#asanoha-prog)" />
        </svg>
    );
}

/** Individual program card */
function ProgramCard({ program }: { program: Program }) {
    const accent = accentMap[program.accent];
    const isFeatured = program.accent === 'featured';

    return (
        <article
            className={cn(
                'group relative flex flex-col overflow-hidden rounded-3xl border p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl',
                isFeatured
                    ? 'border-transparent bg-gradient-to-br from-rose-500 to-rose-700 text-white shadow-rose-300/40 hover:shadow-rose-400/50'
                    : 'border-neutral-100 bg-white hover:shadow-neutral-200/60',
                !isFeatured && accent.border,
                !isFeatured && accent.glow,
            )}
        >
            {/* Top rose accent bar */}
            <div
                className={cn(
                    'absolute left-0 right-0 top-0 h-[3px]',
                    isFeatured
                        ? 'bg-gradient-to-r from-rose-200/40 via-white/60 to-rose-200/40'
                        : 'bg-gradient-to-r from-transparent via-rose-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                )}
            />

            {/* Featured: sakura watermark */}
            {isFeatured && (
                <SakuraPetal className="absolute -bottom-4 -right-4 h-32 w-32 text-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
            )}

            {/* Non-featured: subtle corner bloom */}
            {!isFeatured && (
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-rose-50 transition-transform duration-500 group-hover:scale-150" />
            )}

            {/* ── Header ── */}
            <div className="relative mb-5 flex items-start justify-between gap-3">
                {/* Icon */}
                <div
                    className={cn(
                        'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl ring-1 text-lg transition-all duration-300 group-hover:scale-110',
                        accent.icon,
                        accent.iconHover,
                    )}
                >
                    {program.icon}
                </div>

                {/* JP Category label */}
                <span
                    className={cn(
                        'text-[10px] font-semibold tracking-[0.2em]',
                        isFeatured ? 'text-rose-200' : accent.jp,
                    )}
                >
                    {program.categoryJp}
                </span>
            </div>

            {/* ── Title ── */}
            <h3
                className={cn(
                    'relative mb-2 text-lg font-extrabold leading-snug',
                    isFeatured ? 'text-white' : 'text-neutral-900',
                )}
            >
                {program.title}
            </h3>

            {/* ── Meta row ── */}
            <div className="relative mb-4 flex items-center gap-4">
                <span
                    className={cn(
                        'flex items-center gap-1.5 text-[11px] font-medium',
                        isFeatured ? 'text-rose-200' : 'text-neutral-400',
                    )}
                >
                    <FontAwesomeIcon icon={faClock} className="h-3 w-3" />
                    {program.duration}
                </span>
                <span
                    className={cn(
                        'flex items-center gap-1.5 text-[11px] font-medium',
                        isFeatured ? 'text-rose-200' : 'text-neutral-400',
                    )}
                >
                    <FontAwesomeIcon icon={faGraduationCap} className="h-3 w-3" />
                    {program.level}
                </span>
            </div>

            {/* ── Description ── */}
            <p
                className={cn(
                    'relative mb-5 text-sm leading-relaxed',
                    isFeatured ? 'text-rose-100/90' : 'text-neutral-500',
                )}
            >
                {program.description}
            </p>

            {/* ── Tags ── */}
            <div className="relative mb-6 flex flex-wrap gap-2">
                {program.tags.map((tag) => (
                    <span
                        key={tag.label}
                        className={cn(
                            'rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider',
                            isFeatured
                                ? 'border-white/20 bg-white/15 text-white'
                                : cn(accent.tag),
                        )}
                    >
                        {tag.label}
                    </span>
                ))}
            </div>

            {/* ── CTA ── */}
            <div className="relative mt-auto">
                <a
                    href="#daftar"
                    className={cn(
                        'group/cta flex items-center gap-2 text-sm font-semibold transition-all duration-300',
                        isFeatured
                            ? 'text-white hover:text-rose-200'
                            : 'text-rose-500 hover:text-rose-700',
                    )}
                >
                    <FontAwesomeIcon icon={faCircleCheck} className="h-4 w-4" />
                    Daftar Program
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="h-3 w-3 transition-transform duration-300 group-hover/cta:translate-x-1"
                    />
                </a>
            </div>
        </article>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ProgramSection() {
    const [activeFilter, setActiveFilter] = useState<'semua' | 'bahasa' | 'teknik' | 'lainnya'>(
        'semua',
    );

    const filterMap: Record<string, string[]> = {
        semua: programs.map((p) => p.id),
        bahasa: ['bahasa'],
        teknik: ['manufaktur', 'konstruksi', 'it'],
        lainnya: ['kuliner', 'pertanian'],
    };

    const filters = [
        { key: 'semua' as const, label: 'Semua Program', jp: 'すべて' },
        { key: 'bahasa' as const, label: 'Bahasa', jp: '語学' },
        { key: 'teknik' as const, label: 'Teknikal', jp: '技術' },
        { key: 'lainnya' as const, label: 'Lainnya', jp: 'その他' },
    ];

    const visibleIds = filterMap[activeFilter];
    const visiblePrograms = programs.filter((p) => visibleIds.includes(p.id));

    return (
        <section
            id="program"
            className="relative overflow-hidden bg-white/50  py-28"
        >


            {/* Asanoha pattern overlay */}
            <AsanohaPattern className="absolute inset-0 h-full w-full text-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

            {/* Kanji watermarks */}
            <div
                aria-hidden="true"
                className="absolute right-10 top-12 select-none font-serif text-[12rem] font-bold leading-none text-white/[0.03]"
            >
                研
            </div>
            <div
                aria-hidden="true"
                className="absolute left-8 bottom-16 select-none font-serif text-[9rem] font-bold leading-none text-white/[0.03]"
            >
                修
            </div>

            {/* Floating sakura petals */}
            <SakuraPetal className="absolute right-1/4 top-20 h-8 w-8 animate-[spin_15s_linear_infinite] text-rose-400/20" />
            <SakuraPetal className="absolute left-1/3 bottom-24 h-6 w-6 animate-[spin_20s_linear_infinite_reverse] text-rose-300/15" />

            {/* ── Content ── */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ── Section Header ── */}
                <div className="mb-12 text-center">
                    {/* JP label */}
                    <div className="mb-4 inline-flex items-center gap-2">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-rose-500" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-400">
                            研修プログラム
                        </span>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-rose-500" />
                    </div>

                    <h2 className=" mb-4 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                        Program{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-rose-400 to-rose-500 bg-clip-text text-transparent">
                                Unggulan
                            </span>
                            <span
                                aria-hidden="true"
                                className="absolute -bottom-1 left-0 h-2 w-full -skew-x-2 bg-rose-500/20"
                            />
                        </span>{' '}
                        Kami
                    </h2>

                    <div className="mb-4 flex justify-center">
                        <WaveMotif className="h-5 w-36 text-rose-700" />
                    </div>

                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-500">
                        Pilih program yang sesuai dengan minat dan tujuan karir Anda di Jepang.
                        Semua program dilengkapi sertifikat resmi dan pendampingan penempatan kerja.
                    </p>
                </div>



                {/* ── Program Cards Grid ── */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {visiblePrograms.map((program) => (
                        <ProgramCard key={program.id} program={program} />
                    ))}
                </div>

                {/* ── Bottom CTA ── */}
                <div className="mt-16 flex flex-col items-center gap-4">
                    {/* Decorative divider */}
                    <div className="flex items-center gap-3">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-800" />
                        <SakuraPetal className="h-4 w-4 text-rose-600" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-800" />
                    </div>

                    <p className="text-sm text-neutral-500">
                        Belum menemukan program yang sesuai?
                    </p>

                    <Button
                        asChild
                        className="group h-auto gap-2.5 rounded-full border border-rose-500/30 bg-rose-500/10 px-8 py-3.5 text-sm font-bold text-rose-400 shadow-lg shadow-rose-900/30 transition-all duration-300 hover:scale-[1.03] hover:bg-rose-500 hover:text-white hover:shadow-rose-500/30"
                    >
                        <a href="#kontak">
                            Konsultasi Program
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                        </a>
                    </Button>

                    <p className="text-center text-[10px] tracking-[0.3em] text-rose-800">
                        ✿ あなたの夢を一緒に実現しましょう ✿
                    </p>
                </div>
            </div>
        </section>
    );
}