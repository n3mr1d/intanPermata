import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = 'semua' | 'pelatihan' | 'kelas' | 'kegiatan' | 'budaya' | 'Keberangkatan';

interface GalleryItem {
    id: string;
    src: string;
    thumb: string;
    title: string;
    captionJp: string;
    category: Exclude<Category, 'semua'>;
    aspect: 'landscape' | 'portrait' | 'square';
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const galleryItems: GalleryItem[] = [
    {
        id: 'g1',
        src: '/resource/attachments/fotokbrgktan1.jpg',
        thumb: '/resource/attachments/fotokbrgktan1.jpg',
        title: 'Foto Keberangkatan',
        captionJp: 'しゅっぱつ',
        category: 'Keberangkatan',
        aspect: 'landscape',
    },
    {
        id: 'g2',
        src: '/resource/attachments/kelas_2.jpg',
        thumb: '/resource/attachments/kelas_2.jpg',
        title: 'Kelas',
        captionJp: 'クラス',
        category: 'kelas',
        aspect: 'landscape',
    },
    {
        id: 'g3',
        src: '/resource/attachments/fotokbrgktan3.jpg',
        thumb: '/resource/attachments/fotokbrgktan3.jpg',
        title: 'Foto Keberangkatan',
        captionJp: 'しゅっぱつ',
        category: 'Keberangkatan',
        aspect: 'square',
    },
    {
        id: 'g4',
        src: '/resource/attachments/fotokbrgktan4.jpg',
        thumb: '/resource/attachments/fotokbrgktan4.jpg',
        title: 'Foto Keberangkatan',
        captionJp: 'しゅっぱつ',
        category: 'Keberangkatan',
        aspect: 'landscape',
    },
    {
        id: 'g5',
        src: '/resource/attachments/fotokbrgktan5.jpg',
        thumb: '/resource/attachments/fotokbrgktan5.jpg',
        title: 'Foto Keberangkatan',
        captionJp: 'しゅっぱつ',
        category: 'Keberangkatan',
        aspect: 'portrait',
    },
    {
        id: 'g6',
        src: '/resource/attachments/fotokbrgktan6.jpg',
        thumb: '/resource/attachments/fotokbrgktan6.jpg',
        title: 'Foto Keberangkatan',
        captionJp: 'しゅっぱつ',
        category: 'Keberangkatan',
        aspect: 'landscape',
    },
    {
        id: 'g7',
        src: '/resource/attachments/senam_pagi.jpg',
        thumb: '/resource/attachments/senam_pagi.jpg',
        title: 'Kegiatan Senam Pagi',
        captionJp: '朝の体操活動',
        category: 'kegiatan',
        aspect: 'portrait',
    },
    {
        id: 'g8',
        src: '/resource/attachments/fotokbrgktan2.jpg',
        thumb: '/resource/attachments/fotokbrgktan2.jpg',
        title: 'Foto Keberangkatan',
        captionJp: 'しゅっぱつ',
        category: 'Keberangkatan',
        aspect: 'landscape',
    }, {
        id: 'g9',
        src: '/resource/attachments/kelas.jpg',
        thumb: '/resource/attachments/kelas.jpg',
        title: 'Kelas',
        captionJp: 'クラス',
        category: 'kelas',
        aspect: 'landscape',
    },
    {
        id: 'g10',
        src: '/resource/attachments/wawancara.jpg',
        thumb: '/resource/attachments/wawancara.jpg',
        title: 'Wawancara',
        captionJp: '面接',
        category: 'pelatihan',
        aspect: 'landscape',
    },
    {
        id: 'g11',
        src: '/resource/attachments/wawancara1.jpg',
        thumb: '/resource/attachments/wawancara1.jpg',
        title: 'Wawancara',
        captionJp: '面接',
        category: 'pelatihan',
        aspect: 'landscape',
    },
];

// ─── Category filter config ───────────────────────────────────────────────────

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

function AsanohaPattern({ className }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            className={cn('pointer-events-none select-none', className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern id="asanoha-gallery" patternUnits="userSpaceOnUse" width="40" height="40">
                    <g fill="none" stroke="currentColor" strokeWidth="0.5">
                        <line x1="20" y1="0" x2="20" y2="40" />
                        <line x1="0" y1="20" x2="40" y2="20" />
                        <line x1="0" y1="0" x2="40" y2="40" />
                        <line x1="40" y1="0" x2="0" y2="40" />
                        <circle cx="20" cy="20" r="3" />
                    </g>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#asanoha-gallery)" />
        </svg>
    );
}

// ─── Close Icon ───────────────────────────────────────────────────────────────

function IconClose({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className}>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

function IconChevronLeft({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className}>
            <polyline points="15 18 9 12 15 6" />
        </svg>
    );
}

function IconChevronRight({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className}>
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}


// ─── Gallery Card ─────────────────────────────────────────────────────────────

interface GalleryCardProps {
    item: GalleryItem;
    index: number;
    onOpen: () => void;
}

function GalleryCard({ item, onOpen }: GalleryCardProps) {
    const aspectClass =
        item.aspect === 'portrait'
            ? 'aspect-[3/4]'
            : item.aspect === 'square'
                ? 'aspect-square'
                : 'aspect-[4/3]';

    return (
        <div
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-100 shadow-sm ring-1 ring-rose-100 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/40 hover:ring-rose-300"
            style={{ animation: 'fadeInCard 0.4s ease both' }}

            tabIndex={0}
            role="button"
            aria-label={`Buka foto: ${item.title}`}
            onKeyDown={(e) => e.key === 'Enter' && onOpen()}
        >

            {/* Image */}
            <div className={cn('relative w-full overflow-hidden', aspectClass)}>
                <img
                    src={item.thumb}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 "
                    loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />



                {/* Category badge */}
                <div className="absolute left-3 top-3 z-10 rounded-full border border-white/30 bg-white/85 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-rose-600 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:border-rose-200 group-hover:bg-white">
                    {item.category}
                </div>
            </div>

            {/* Card footer */}
            <div className="flex items-center justify-between gap-2 px-4 py-3">
                <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-neutral-800 transition-colors duration-200 group-hover:text-rose-600">
                        {item.title}
                    </p>
                    <p className="text-[10px] text-neutral-400">{item.captionJp}</p>
                </div>
                <SakuraPetal className="h-5 w-5 flex-shrink-0 text-rose-300 transition-transform duration-300 group-hover:scale-125 group-hover:text-rose-500 group-hover:rotate-12" />
            </div>
        </div>
    );
}

// ─── Main Gallery Section ─────────────────────────────────────────────────────

export default function GallerySection() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // Compute visible items
    const visibleItems = galleryItems;



    // Lightbox navigation
    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = useCallback(() => setLightboxIndex(null), []);

    const goPrev = useCallback(() => {
        setLightboxIndex((i) => (i !== null ? (i - 1 + visibleItems.length) % visibleItems.length : null));
    }, [visibleItems.length]);

    const goNext = useCallback(() => {
        setLightboxIndex((i) => (i !== null ? (i + 1) % visibleItems.length : null));
    }, [visibleItems.length]);

    // Keyboard navigation
    useEffect(() => {
        if (lightboxIndex === null) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goPrev();
            else if (e.key === 'ArrowRight') goNext();
            else if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [lightboxIndex, goPrev, goNext, closeLightbox]);

    // Lock scroll when lightbox is open
    useEffect(() => {
        document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [lightboxIndex]);

    return (
        <>
            <section
                id="galeri"
                className="relative overflow-hidden bg-white/50 py-28"
            >
                {/* ── Background decorations ── */}
                <div
                    aria-hidden="true"
                    className="absolute -top-24 -right-32 h-[480px] w-[480px] rounded-full bg-rose-200/20 blur-3xl"
                />
                <div
                    aria-hidden="true"
                    className="absolute bottom-0 -left-32 h-[360px] w-[360px] rounded-full bg-rose-100/25 blur-3xl"
                />

                {/* Asanoha pattern overlay */}
                <AsanohaPattern className="absolute inset-0 h-full w-full text-rose-200 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

                {/* Kanji watermarks */}
                <div
                    aria-hidden="true"
                    className="absolute right-10 top-12 select-none font-serif text-[14rem] font-bold leading-none text-rose-100/40"
                >
                    写
                </div>
                <div
                    aria-hidden="true"
                    className="absolute left-8 bottom-20 select-none font-serif text-[10rem] font-bold leading-none text-rose-100/40"
                >
                    真
                </div>

                {/* Torii gates */}
                <ToriiGate className="absolute right-20 top-0 h-44 w-auto text-rose-200/50 sm:right-32 sm:h-56" />
                <ToriiGate className="absolute -left-8 bottom-8 h-32 w-auto -scale-x-100 text-rose-100/50" />

                {/* Floating sakura petals */}
                <SakuraPetal className="absolute right-1/4 top-20 h-9 w-9 animate-[spin_14s_linear_infinite] text-rose-300/30" />
                <SakuraPetal className="absolute left-1/3 bottom-28 h-6 w-6 animate-[spin_19s_linear_infinite_reverse] text-rose-200/40" />
                <SakuraPetal className="absolute left-2/3 top-1/3 h-5 w-5 animate-[spin_22s_linear_infinite] text-rose-300/20" />

                {/* ── Main Content ── */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* ── Section Header ── */}
                    <div className="mb-12 text-center">
                        {/* JP label */}
                        <div className="mb-4 inline-flex items-center gap-2">
                            <div className="h-px w-8 bg-gradient-to-r from-transparent to-rose-400" />
                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-500">
                                ギャラリー
                            </span>
                            <div className="h-px w-8 bg-gradient-to-l from-transparent to-rose-400" />
                        </div>

                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
                            Galeri{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
                                    Foto
                                </span>
                                <span
                                    aria-hidden="true"
                                    className="absolute -bottom-1 left-0 h-2 w-full -skew-x-2 bg-rose-100"
                                />
                            </span>{' '}
                            Kegiatan
                        </h2>

                        {/* Wave divider */}
                        <div className="mb-5 flex justify-center">
                            <WaveMotif className="h-5 w-36 text-rose-300" />
                        </div>

                        <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-500">
                            Dokumentasi perjalanan dan kegiatan siswa LPK Puji Intan Shafira — dari ruang kelas
                            hingga kebudayaan Jepang yang autentik.
                        </p>

                        {/* Japanese subtitle */}
                        <p className="mt-2 text-[10px] font-light tracking-[0.35em] text-rose-400">
                            日本語研修センター · LPK Puji Intan Shafira の活動記録
                        </p>
                    </div>



                    {/* ── Gallery Grid ── */}
                    <div
                        className={cn(
                            'columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-3 transition-opacity duration-180',
                        )}
                        role="tabpanel"
                    >
                        {visibleItems.map((item, idx) => (
                            <div key={item.id} className="mb-5 break-inside-avoid">
                                <GalleryCard
                                    item={item}
                                    index={idx}
                                    onOpen={() => openLightbox(idx)}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Empty state */}
                    {visibleItems.length === 0 && (
                        <div className="py-24 text-center">
                            <SakuraPetal className="mx-auto mb-4 h-12 w-12 text-rose-200" />
                            <p className="text-neutral-400">Belum ada foto di kategori ini.</p>
                        </div>
                    )}

                    {/* ── Bottom Decorative Divider ── */}
                    <div className="mt-16 flex flex-col items-center gap-3">
                        <div className="flex items-center gap-3">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300" />
                            <SakuraPetal className="h-5 w-5 text-rose-400" />
                            <p className="text-[10px] tracking-[0.3em] text-rose-400">
                                写真ギャラリー · DOKUMENTASI KEGIATAN
                            </p>
                            <SakuraPetal className="h-5 w-5 -scale-x-100 text-rose-400" />
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300" />
                        </div>

                    </div>
                </div>

                {/* Card animation */}
                <style>{`
                    @keyframes fadeInCard {
                        from { opacity: 0; transform: translateY(16px); }
                        to   { opacity: 1; transform: translateY(0);    }
                    }
                `}</style>
            </section>


        </>
    );
}