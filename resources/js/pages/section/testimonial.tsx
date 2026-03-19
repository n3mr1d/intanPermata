import { useState, useEffect, useCallback, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faStar,
    faChevronLeft,
    faChevronRight,
    faQuoteLeft,
} from '@fortawesome/free-solid-svg-icons';

// ─── Types ────────────────────────────────────────────────────────────────────

type JourneyStep = 'training' | 'preparation' | 'departure' | 'success';

interface Testimonial {
    id: string;
    name: string;
    role: string;
    location: string;
    year: string;
    rating: number;
    text: string;
    initials: string;
    avatarBg: string;
    avatarText: string;
    journeyStep: JourneyStep;
    isFeatured?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials: Testimonial[] = [
    {
        id: 't1',
        name: 'Ahmad Rizky',
        role: 'Alumni · Operator Manufaktur',
        location: 'Nagoya, Jepang 🇯🇵',
        year: '2023',
        rating: 5,
        text: 'Berkat LPK Puji Intan Shafira, saya sekarang bekerja di pabrik otomotif ternama di Nagoya. Pelatihannya sangat intensif dan pembimbing selalu siap membantu kapan saja. Mimpi saya bekerja di Jepang akhirnya terwujud!',
        initials: 'AR',
        avatarBg: 'from-rose-400 to-rose-600',
        avatarText: 'text-white',
        journeyStep: 'success',
        isFeatured: true,
    },
    {
        id: 't2',
        name: 'Siti Purnama',
        role: 'Alumni · Industri Kuliner',
        location: 'Osaka, Jepang 🇯🇵',
        year: '2022',
        rating: 5,
        text: 'Awalnya saya takut tidak bisa beradaptasi, tapi setelah mengikuti program di sini rasa percaya diri saya tumbuh pesat. Sekarang saya bekerja di bidang kuliner di Osaka dan sangat bahagia menjalani hidup baru.',
        initials: 'SP',
        avatarBg: 'from-amber-400 to-amber-600',
        avatarText: 'text-white',
        journeyStep: 'success',
    },
    {
        id: 't3',
        name: 'Budi Raharjo',
        role: 'Alumni · IT Support',
        location: 'Tokyo, Jepang 🇯🇵',
        year: '2023',
        rating: 5,
        text: 'Program bahasa Jepang intensif di sini sangat efektif. Dalam 6 bulan saya berhasil lulus JLPT N4 dan langsung ditempatkan ke Tokyo. Kurikulumnya jauh di atas rata-rata LPK lain yang pernah saya lihat.',
        initials: 'BR',
        avatarBg: 'from-sky-400 to-sky-600',
        avatarText: 'text-white',
        journeyStep: 'success',
    },
    {
        id: 't4',
        name: 'Dewi Kartika',
        role: 'Peserta · Angkatan 2024',
        location: 'Masih dalam Pelatihan 🎌',
        year: '2024',
        rating: 5,
        text: 'Saya sedang menjalani pelatihan dan sudah merasakan manfaatnya. Pengajar sangat profesional, materi terstruktur, dan fasilitas lengkap. Saya yakin akan siap ditempatkan ke Jepang dalam waktu dekat.',
        initials: 'DK',
        avatarBg: 'from-emerald-400 to-emerald-600',
        avatarText: 'text-white',
        journeyStep: 'training',
    },
    {
        id: 't5',
        name: 'Fajar Nugroho',
        role: 'Alumni · Konstruksi',
        location: 'Yokohama, Jepang 🇯🇵',
        year: '2022',
        rating: 5,
        text: 'Proses keberangkatan sangat terorganisir, dari pengurusan visa hingga orientasi budaya. Tim LPK Puji Intan Shafira benar-benar mendampingi sampai saya tiba dan menyesuaikan diri di Jepang.',
        initials: 'FN',
        avatarBg: 'from-violet-400 to-violet-600',
        avatarText: 'text-white',
        journeyStep: 'departure',
    },
    {
        id: 't6',
        name: 'Rina Hastuti',
        role: 'Alumni · Perawatan Lansia',
        location: 'Kyoto, Jepang 🇯🇵',
        year: '2023',
        rating: 5,
        text: 'Saya bersyukur memilih LPK Puji Intan Shafira. Pelatihan keperawatan lansia sangat komprehensif dan sesuai standar Jepang. Kini saya bekerja di fasilitas perawatan bergengsi di Kyoto dengan penghasilan yang sangat baik.',
        initials: 'RH',
        avatarBg: 'from-pink-400 to-pink-600',
        avatarText: 'text-white',
        journeyStep: 'success',
    },
];

// ─── Journey Step Config ──────────────────────────────────────────────────────

const journeyConfig: Record<JourneyStep, { label: string; labelJp: string; colorClass: string; step: number }> = {
    training: { label: 'Pelatihan', labelJp: '訓練', colorClass: 'bg-sky-400', step: 1 },
    preparation: { label: 'Persiapan', labelJp: '準備', colorClass: 'bg-amber-400', step: 2 },
    departure: { label: 'Keberangkatan', labelJp: '出発', colorClass: 'bg-violet-400', step: 3 },
    success: { label: 'Sukses di Jepang', labelJp: '成功', colorClass: 'bg-rose-500', step: 4 },
};

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
                <pattern id="seigaiha-testi" patternUnits="userSpaceOnUse" width="40" height="30">
                    <ellipse cx="20" cy="30" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <ellipse cx="0" cy="30" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <ellipse cx="40" cy="30" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <ellipse cx="10" cy="15" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <ellipse cx="30" cy="15" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#seigaiha-testi)" />
        </svg>
    );
}

// ─── Star Rating ──────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-0.5" aria-label={`Rating ${rating} dari 5 bintang`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={cn(
                        'h-3.5 w-3.5 transition-colors duration-200',
                        i < rating ? 'text-amber-400' : 'text-neutral-200',
                    )}
                />
            ))}
        </div>
    );
}

// ─── Journey Badge ────────────────────────────────────────────────────────────

function JourneyBadge({ step }: { step: JourneyStep }) {
    const config = journeyConfig[step];
    return (
        <span
            className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-white',
                config.colorClass,
            )}
        >
            <span className="text-[8px] font-normal opacity-80">{config.labelJp}</span>
            {config.label}
        </span>
    );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────

interface TestimonialCardProps {
    testimonial: Testimonial;
    isFeatured?: boolean;
}

function TestimonialCard({ testimonial, isFeatured }: TestimonialCardProps) {
    return (
        <article
            className={cn(
                'group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-500',
                isFeatured
                    ? 'border-rose-200 bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 p-8 text-white shadow-2xl shadow-rose-300/40'
                    : 'border-neutral-100 bg-white p-7 shadow-md hover:border-rose-200 hover:shadow-xl hover:shadow-rose-100/50',
            )}
        >
            {/* Top accent bar */}
            <div
                className={cn(
                    'absolute left-0 right-0 top-0 h-[3px]',
                    isFeatured
                        ? 'bg-gradient-to-r from-rose-200/40 via-white/60 to-rose-200/40'
                        : 'bg-gradient-to-r from-transparent via-rose-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100',
                )}
            />

            {/* Featured: sakura watermarks */}
            {isFeatured && (
                <>
                    <SakuraPetal className="absolute -bottom-6 -right-6 h-36 w-36 text-white/10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12" />
                    <SakuraPetal className="absolute -top-4 -left-4 h-20 w-20 -rotate-45 text-white/8" />
                </>
            )}

            {/* Non-featured: corner glow */}
            {!isFeatured && (
                <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-rose-50 transition-transform duration-500 group-hover:scale-150" />
            )}

            {/* ── Header row ── */}
            <div className="relative mb-5 flex items-start justify-between gap-3">
                {/* Quote icon */}
                <div
                    className={cn(
                        'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl',
                        isFeatured ? 'bg-white/20 text-white' : 'bg-rose-50 text-rose-400',
                    )}
                >
                    <FontAwesomeIcon icon={faQuoteLeft} className="h-4 w-4" />
                </div>

                {/* Journey badge */}
                <JourneyBadge step={testimonial.journeyStep} />
            </div>

            {/* ── Stars ── */}
            <div className="relative mb-4">
                {isFeatured ? (
                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <FontAwesomeIcon key={i} icon={faStar} className="h-3.5 w-3.5 text-amber-300" />
                        ))}
                    </div>
                ) : (
                    <StarRating rating={testimonial.rating} />
                )}
            </div>

            {/* ── Testimonial text ── */}
            <blockquote
                className={cn(
                    'relative mb-6 flex-1 text-sm leading-relaxed',
                    isFeatured ? 'text-rose-50/95 italic' : 'text-neutral-600 italic',
                )}
            >
                "{testimonial.text}"
            </blockquote>

            {/* ── Footer: Avatar + Info ── */}
            <footer className="relative flex items-center gap-4">
                {/* Avatar */}
                <div
                    className={cn(
                        'flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-sm font-extrabold tracking-wide shadow-md transition-transform duration-300 group-hover:scale-105',
                        testimonial.avatarBg,
                        testimonial.avatarText,
                    )}
                    aria-hidden="true"
                >
                    {testimonial.initials}
                </div>

                {/* Info */}
                <div className="min-w-0">
                    <cite
                        className={cn(
                            'block text-sm font-bold not-italic',
                            isFeatured ? 'text-white' : 'text-neutral-900',
                        )}
                    >
                        {testimonial.name}
                    </cite>
                    <p
                        className={cn(
                            'truncate text-[11px] font-medium',
                            isFeatured ? 'text-rose-200' : 'text-neutral-400',
                        )}
                    >
                        {testimonial.role}
                    </p>
                    <p
                        className={cn(
                            'text-[10px]',
                            isFeatured ? 'text-rose-300' : 'text-neutral-400',
                        )}
                    >
                        {testimonial.location}
                    </p>
                </div>

                {/* Year badge */}
                <span
                    className={cn(
                        'ml-auto flex-shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold tracking-widest',
                        isFeatured
                            ? 'bg-white/20 text-rose-100'
                            : 'bg-rose-50 text-rose-400',
                    )}
                >
                    {testimonial.year}
                </span>
            </footer>
        </article>
    );
}

// ─── Journey Timeline ─────────────────────────────────────────────────────────

function JourneyTimeline() {
    const steps: JourneyStep[] = ['training', 'preparation', 'departure', 'success'];
    return (
        <div className="relative flex items-center justify-center gap-0" aria-label="Tahapan Perjalanan">
            {steps.map((step, idx) => {
                const config = journeyConfig[step];
                const isLast = idx === steps.length - 1;
                return (
                    <div key={step} className="flex items-center">
                        {/* Step node */}
                        <div className="flex flex-col items-center gap-1.5">
                            <div
                                className={cn(
                                    'flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-extrabold text-white shadow-md ring-2 ring-white transition-transform duration-300 hover:scale-110',
                                    config.colorClass,
                                )}
                            >
                                {config.step}
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="text-[8px] font-light tracking-[0.2em] text-rose-400">{config.labelJp}</span>
                                <span className="text-[9px] font-semibold text-neutral-600">{config.label}</span>
                            </div>
                        </div>

                        {/* Connector */}
                        {!isLast && (
                            <div className="mx-2 mb-5 h-px w-10 bg-gradient-to-r from-rose-200 to-rose-300 sm:w-14" />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const VISIBLE_COUNT = 3; // on large screens
    const total = testimonials.length;

    const navigate = useCallback(
        (dir: 'left' | 'right') => {
            if (isAnimating) return;
            setDirection(dir);
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) =>
                    dir === 'right' ? (prev + 1) % total : (prev - 1 + total) % total,
                );
                setIsAnimating(false);
            }, 320);
        },
        [isAnimating, total],
    );

    const goTo = useCallback(
        (idx: number) => {
            if (isAnimating || idx === currentIndex) return;
            setDirection(idx > currentIndex ? 'right' : 'left');
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(idx);
                setIsAnimating(false);
            }, 320);
        },
        [isAnimating, currentIndex],
    );

    // Auto-play
    useEffect(() => {
        autoPlayRef.current = setTimeout(() => navigate('right'), 5000);
        return () => {
            if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
        };
    }, [currentIndex, navigate]);

    // Keyboard nav
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') navigate('left');
            else if (e.key === 'ArrowRight') navigate('right');
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [navigate]);

    // Get visible testimonials: featured (center) + neighbours
    const getVisibleItems = () => {
        const result = [];
        for (let i = 0; i < VISIBLE_COUNT; i++) {
            const idx = (currentIndex + i) % total;
            result.push({ testimonial: testimonials[idx], isFeatured: i === 0 });
        }
        return result;
    };

    const visibleItems = getVisibleItems();

    return (
        <div className="relative">
            {/* ── Carousel track ── */}
            <div
                className={cn(
                    'grid gap-6 transition-all duration-320',
                    'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
                    isAnimating && direction === 'right' && '[&>*]:animate-slide-in-right',
                    isAnimating && direction === 'left' && '[&>*]:animate-slide-in-left',
                )}
                style={{
                    opacity: isAnimating ? 0.7 : 1,
                    transition: 'opacity 0.32s ease',
                }}
            >
                {visibleItems.map(({ testimonial, isFeatured }, i) => (
                    <div
                        key={`${testimonial.id}-${currentIndex}-${i}`}
                        className={cn(
                            'transition-all duration-500',
                            // On sm screens only show first 2, on lg show all 3
                            i === 2 && 'hidden lg:block',
                        )}
                        style={{
                            transform: isAnimating
                                ? direction === 'right'
                                    ? 'translateX(-12px)'
                                    : 'translateX(12px)'
                                : 'translateX(0)',
                            transition: 'transform 0.32s ease, opacity 0.32s ease',
                            opacity: isAnimating ? 0.6 : 1,
                        }}
                    >
                        <TestimonialCard testimonial={testimonial} isFeatured={isFeatured} />
                    </div>
                ))}
            </div>

            {/* ── Navigation controls ── */}
            <div className="mt-10 flex flex-col items-center gap-4">
                {/* Dot indicators */}
                <div className="flex items-center gap-2" role="tablist" aria-label="Slide testimonial">
                    {testimonials.map((t, idx) => (
                        <button
                            key={t.id}
                            id={`testi-dot-${idx}`}
                            role="tab"
                            aria-selected={idx === currentIndex}
                            aria-label={`Testimonial ${idx + 1}: ${t.name}`}
                            onClick={() => goTo(idx)}
                            className={cn(
                                'rounded-full transition-all duration-300',
                                idx === currentIndex
                                    ? 'h-2.5 w-8 bg-rose-500 shadow-md shadow-rose-300/50'
                                    : 'h-2.5 w-2.5 bg-rose-200 hover:bg-rose-300',
                            )}
                        />
                    ))}
                </div>

                {/* Prev / Next buttons */}
                <div className="flex items-center gap-3">
                    <button
                        id="testi-prev"
                        onClick={() => navigate('left')}
                        aria-label="Testimonial sebelumnya"
                        disabled={isAnimating}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-500 shadow-sm transition-all duration-200 hover:scale-110 hover:border-rose-400 hover:bg-rose-500 hover:text-white hover:shadow-md hover:shadow-rose-200/50 disabled:opacity-50"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
                    </button>

                    {/* Sakura ornament */}
                    <SakuraPetal className="h-6 w-6 text-rose-300" />

                    <button
                        id="testi-next"
                        onClick={() => navigate('right')}
                        aria-label="Testimonial berikutnya"
                        disabled={isAnimating}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-500 shadow-sm transition-all duration-200 hover:scale-110 hover:border-rose-400 hover:bg-rose-500 hover:text-white hover:shadow-md hover:shadow-rose-200/50 disabled:opacity-50"
                    >
                        <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
                    </button>
                </div>

                {/* Counter */}
                <p className="text-[10px] tracking-[0.25em] text-neutral-400">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                </p>
            </div>
        </div>
    );
}

// ─── Main Testimonial Section ─────────────────────────────────────────────────

export default function TestimonialSection() {
    return (
        <>
            <section
                id="testimoni"
                className="relative overflow-hidden bg-white/50 py-28"
            >
                {/* ── Background blobs ── */}
                <div
                    aria-hidden="true"
                    className="absolute -top-32 -right-40 h-[520px] w-[520px] rounded-full bg-rose-200/20 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute bottom-0 -left-40 h-[420px] w-[420px] rounded-full bg-rose-100/25 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-50/40 blur-3xl"
                />

                {/* Seigaiha wave pattern */}
                <SeigaihaPattern className="absolute inset-0 h-full w-full text-rose-200/50 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

                {/* Kanji watermarks */}
                <div
                    aria-hidden="true"
                    className="absolute right-8 top-10 select-none font-serif text-[13rem] font-bold leading-none text-rose-100/50"
                >
                    信
                </div>
                <div
                    aria-hidden="true"
                    className="absolute left-6 bottom-16 select-none font-serif text-[10rem] font-bold leading-none text-rose-100/50"
                >
                    頼
                </div>

                {/* Torii gates */}
                <ToriiGate className="absolute right-16 top-0 h-48 w-auto text-rose-200/40 sm:right-28 sm:h-60" />
                <ToriiGate className="absolute -left-6 bottom-4 h-32 w-auto -scale-x-100 text-rose-100/40" />

                {/* Floating sakura petals */}
                <SakuraPetal className="absolute right-1/4 top-24 h-9 w-9 animate-[spin_14s_linear_infinite] text-rose-300/25" />
                <SakuraPetal className="absolute left-1/3 bottom-32 h-6 w-6 animate-[spin_19s_linear_infinite_reverse] text-rose-200/35" />
                <SakuraPetal className="absolute left-2/3 top-1/3 h-5 w-5 animate-[spin_22s_linear_infinite] text-rose-300/20" />
                <SakuraPetal className="absolute right-1/3 bottom-1/4 h-4 w-4 animate-[spin_17s_linear_infinite_reverse] text-amber-300/20" />

                {/* ── Main Content ── */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* ── Section Header ── */}
                    <div className="mb-14 text-center">
                        {/* JP label */}
                        <div className="mb-4 inline-flex items-center gap-2">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-rose-400" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-500">
                                お客様の声
                            </span>
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-rose-400" />
                        </div>

                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                            Suara Para{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
                                    Alumni
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
                            Kisah nyata dari alumni yang telah sukses berkarir di Jepang bersama kami
                        </p>

                        {/* JP subtitle */}
                        <p className="mt-2 text-[10px] font-light tracking-[0.35em] text-rose-400">
                            日本語研修センター · 卒業生の声 · LPK Puji Intan Shafira
                        </p>
                    </div>

                    {/* ── Journey Timeline ── */}
                    <div className="mb-12 flex justify-center">
                        <div className="rounded-3xl border border-rose-100 bg-white/70 px-6 py-5 shadow-sm backdrop-blur-sm">
                            <p className="mb-4 text-center text-[9px] font-semibold uppercase tracking-[0.3em] text-rose-400">
                                ✿ 旅のステップ · Tahapan Perjalanan ✿
                            </p>
                            <JourneyTimeline />
                        </div>
                    </div>

                    {/* ── Testimonial Carousel ── */}
                    <TestimonialCarousel />

                    {/* ── Bottom CTA ── */}
                    <div className="mt-20 flex flex-col items-center gap-6">
                        {/* Decorative divider */}
                        <div className="flex items-center gap-3">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300" />
                            <SakuraPetal className="h-5 w-5 text-rose-400" />
                            <p className="text-[10px] tracking-[0.3em] text-rose-400">
                                始めましょう · MULAI PERJALANANMU
                            </p>
                            <SakuraPetal className="h-5 w-5 -scale-x-100 text-rose-400" />
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300" />
                        </div>

                        <h3 className="text-center text-2xl font-extrabold text-neutral-900 sm:text-3xl">
                            Siap Memulai{' '}
                            <span className="bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
                                Perjalanan ke Jepang?
                            </span>
                        </h3>

                        <p className="max-w-md text-center text-sm leading-relaxed text-neutral-500">
                            Bergabunglah bersama 2.500+ alumni yang telah sukses berkarir di Jepang.
                            Jadilah bagian dari keluarga besar LPK Puji Intan Shafira.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            <Button
                                asChild
                                id="cta-testi-primary"
                                className="group h-auto gap-2.5 rounded-full bg-rose-500 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-300/40 transition-all duration-300 hover:scale-[1.03] hover:bg-rose-600 hover:shadow-rose-400/50"
                            >
                                <a href="#daftar">
                                    Bergabung Sekarang
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                                    />
                                </a>
                            </Button>

                            <Button
                                asChild
                                id="cta-testi-secondary"
                                variant="outline"
                                className="h-auto gap-2 rounded-full border-rose-200 bg-white px-8 py-3.5 text-sm font-semibold text-rose-600 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-rose-400 hover:bg-rose-50"
                            >
                                <a href="#program">
                                    Lihat Program Kami
                                    <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5 rotate-45" />
                                </a>
                            </Button>
                        </div>

                        <p className="text-center text-[10px] tracking-[0.3em] text-rose-400">
                            ✿ あなたの夢を一緒に実現しましょう ✿
                        </p>
                    </div>
                </div>

                {/* CSS keyframes */}
                <style>{`
                    @keyframes slideInRight {
                        from { opacity: 0; transform: translateX(20px); }
                        to   { opacity: 1; transform: translateX(0); }
                    }
                    @keyframes slideInLeft {
                        from { opacity: 0; transform: translateX(-20px); }
                        to   { opacity: 1; transform: translateX(0); }
                    }
                    .animate-slide-in-right > * { animation: slideInRight 0.32s ease both; }
                    .animate-slide-in-left  > * { animation: slideInLeft  0.32s ease both; }
                `}</style>
            </section>
        </>
    );
}