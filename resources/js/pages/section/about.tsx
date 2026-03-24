import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faWhatsapp,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
    faMapMarkerAlt,
    faPhone,
    faEnvelope,
    faCheckCircle,
    faEye,
    faRocket,
    faCertificate,
    faUsers,
    faBuilding,
    faStar,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '@/components/icon';

// ─── Types ────────────────────────────────────────────────────────────────────
interface MissionItem {
    text: string;
}

interface SocialLink {
    icon: React.ReactNode;
    label: string;
    handle: string;
    href: string;
    colorClass: string;
    bgClass: string;
    borderClass: string;
}

interface StatBadge {
    value: string;
    label: string;
    icon: React.ReactNode;
}
const message = "Halo, saya ingin bertanya mengenai program pelatihan."
// ─── Data ─────────────────────────────────────────────────────────────────────
const missionItems: MissionItem[] = [{ text: 'Meningkatkan kualitas SDM untuk memperluas kesempatan kerja' },
{ text: 'Menyediakan pelatihan bahasa Jepang yang berkualitas dan terstandar.' }, {
    text: 'Meningkatkan kualitas kerja dengan pelatihan yang memadai'
}, {
    text: 'Pembentukan mental lebih mandiri untuk masuk dunia kerja yang mempunyai skill yang mampu bersaing'
}];

const socialLinks: SocialLink[] = [
    {
        icon: <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />,
        label: 'Instagram',
        handle: '@lpk_intan_puji_shafira',
        href: 'https://www.instagram.com/lpk_intan_puji_shafira',
        colorClass: 'text-pink-600',
        bgClass:
            'bg-gradient-to-br from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100',
        borderClass: 'border-pink-200 hover:border-pink-400',
    },
    {
        icon: <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />,
        label: 'Email',
        handle: 'lpk.pujishafira74@gmail.com',
        href: 'mailto:lpk.pujishafira74@gmail.com',
        colorClass: 'text-gray-600',
        bgClass:
            'bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200',
        borderClass: 'border-gray-200 hover:border-gray-400',
    },
    {
        icon: <FontAwesomeIcon icon={faFacebook} className="h-5 w-5" />,
        label: 'Facebook',
        handle: 'Lpk Puji Intan Shafira',
        href: 'https://facebook.com/lpk.puji.intan.shafira',
        colorClass: 'text-blue-600',
        bgClass:
            'bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100',
        borderClass: 'border-blue-200 hover:border-blue-400',
    },

    {
        icon: <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />,
        label: 'WhatsApp',
        handle: '0895-0639-9600',
        href: `https://wa.me/6289506399600?text=${encodeURIComponent(message)}`,
        colorClass: 'text-green-600',
        bgClass:
            'bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100',
        borderClass: 'border-green-200 hover:border-green-400',
    },
];

/** Sakura petal SVG decoration */
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

/** Torii gate SVG illustration */
function ToriiGate({ className }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 120 120"
            className={cn('pointer-events-none select-none', className)}
            fill="currentColor"
        >
            {/* Top beam */}
            <rect x="0" y="18" width="120" height="8" rx="2" />
            {/* Second beam */}
            <rect x="12" y="30" width="96" height="6" rx="2" />
            {/* Left pillar */}
            <rect x="18" y="36" width="10" height="84" rx="3" />
            {/* Right pillar */}
            <rect x="92" y="36" width="10" height="84" rx="3" />
            {/* Curved top cap left */}
            <path
                d="M8 18 Q60 0 112 18"
                strokeWidth="6"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
            />
        </svg>
    );
}

/** Wave motif SVG */
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

/** Japanese asanoha (hemp leaf) lattice background SVG */
function AsanohaPattern({ className }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            className={cn('pointer-events-none select-none', className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern
                    id="asanoha"
                    patternUnits="userSpaceOnUse"
                    width="40"
                    height="40"
                >
                    <g fill="none" stroke="currentColor" strokeWidth="0.5">
                        <line x1="20" y1="0" x2="20" y2="40" />
                        <line x1="0" y1="20" x2="40" y2="20" />
                        <line x1="0" y1="0" x2="40" y2="40" />
                        <line x1="40" y1="0" x2="0" y2="40" />
                        <circle cx="20" cy="20" r="3" />
                    </g>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#asanoha)" />
        </svg>
    );
}

/** Section header with Japanese label */
function SectionHeader({
    jpLabel,
    title,
    highlight,
    subtitle,
    centered = true,
}: {
    jpLabel: string;
    title: string;
    highlight?: string;
    subtitle?: string;
    centered?: boolean;
}) {
    return (
        <div className={cn('mb-8', centered && 'text-center')}>
            {/* Japanese label pill */}
            <div
                className={cn(
                    'mb-4 inline-flex items-center gap-2',
                    centered && 'justify-center',
                )}
            >
                <div className="h-px w-6 bg-gradient-to-r from-transparent to-rose-400" />
                <span className="text-[10px] font-semibold tracking-[0.3em] text-rose-500 uppercase">
                    {jpLabel}
                </span>
                <div className="h-px w-6 bg-gradient-to-l from-transparent to-rose-400" />
            </div>

            {/* Main title */}
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
                {title}
                {highlight && (
                    <>
                        {' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-rose-500">
                                {highlight}
                            </span>
                            <span
                                aria-hidden="true"
                                className="absolute -bottom-1 left-0 h-2 w-full -skew-x-2 bg-rose-100"
                            />
                        </span>
                    </>
                )}
            </h2>

            {/* Wave decorative divider */}
            <div className={cn('mb-4 flex', centered && 'justify-center')}>
                <WaveMotif className="h-5 w-32 text-rose-300" />
            </div>

            {subtitle && (
                <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-500">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

// ─── Section: Hero / About Header ─────────────────────────────────────────────
function HeroAbout() {
    return (
        <section
            id="tentang-hero"
            className="relative overflow-hidden bg-white/50 pt-24"
        >
            {/* Background blobs */}
            <div
                aria-hidden="true"
                className="absolute -top-20 -right-32 h-[500px] w-[500px] rounded-full bg-rose-200/20 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-0 -left-32 h-[400px] w-[400px] rounded-full bg-rose-100/30 blur-3xl"
            />

            {/* Asanoha pattern overlay */}
            <AsanohaPattern className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)] text-rose-200 opacity-40" />

            {/* Torii decoration */}
            <ToriiGate className="absolute top-0 right-12 h-40 w-auto text-rose-200 sm:right-24 sm:h-52" />
            <ToriiGate className="absolute bottom-6 -left-6 h-28 w-auto -scale-x-100 text-rose-100" />

            {/* Sakura petals */}
            <SakuraPetal className="absolute top-16 left-1/4 h-8 w-8 animate-[spin_12s_linear_infinite] text-rose-300" />
            <SakuraPetal className="absolute right-1/3 bottom-12 h-6 w-6 animate-[spin_18s_linear_infinite_reverse] text-rose-200" />
            <SakuraPetal className="absolute top-1/2 left-2/3 h-5 w-5 animate-[spin_20s_linear_infinite] text-rose-300" />

            {/* Kanji decorations */}

            <div
                aria-hidden="true"
                className="absolute top-8 left-6 font-serif text-[5rem] font-bold text-rose-200 select-none"
            >
                道
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-light tracking-[0.4em] text-rose-400">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-rose-500" />
                    私たちについて
                    <div className="h-px w-8 bg-gradient-to-l from-transparent to-rose-500" />
                </div>
                <h2 className="mb-6 text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
                    About{' '}
                    <span className="relative inline-block">
                        <span className="relative z-10 bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
                            Us
                        </span>
                        <span
                            aria-hidden="true"
                            className="absolute -bottom-1 left-0 h-2 w-full -skew-x-2 bg-rose-100"
                        />
                    </span>
                </h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-500">
                    LPK Puji Intan Shafira adalah lembaga pelatihan kerja
                    terdepan yang mempersiapkan putra-putri Indonesia untuk
                    berkarir dan meraih masa depan cerah di Jepang.
                </p>

                {/* Animated underline wave */}
                <div className="mt-8 flex justify-center">
                    <WaveMotif className="h-6 w-48 text-rose-300" />
                </div>
            </div>
        </section>
    );
}

// ─── Section: About (image + text) ────────────────────────────────────────────
function AboutSection() {
    return (
        <section id="tentang" className="bg-white/50 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* Left: Image */}
                    <div className="relative">
                        {/* Decorative blurred ring */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-6 rounded-3xl bg-gradient-to-br from-rose-200/50 to-rose-50/30 blur-2xl"
                        />

                        {/* Floating Logo Badge */}
                        <div className="absolute -left-6 sm:-left-10 top-10 sm:top-16 z-20 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white/90 backdrop-blur-md shadow-2xl shadow-rose-200/50 border border-white -rotate-6 transition-all duration-500 hover:rotate-0 hover:scale-110">
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-rose-50 to-transparent opacity-50"></div>
                            <Logo className="h-14 w-14 relative z-10 drop-shadow-sm transition-transform duration-500 hover:scale-110" />
                        </div>

                        {/* Image frame with Japanese corner accents */}
                        <div className="relative overflow-hidden rounded-3xl border border-rose-100 shadow-2xl shadow-rose-200/30">
                            <img
                                src="/resource/gedung.png"
                                alt="Gedung LPK Puji Intan Shafira - Pusat Pelatihan Kerja Jepang"
                                className="w-full object-cover"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 via-transparent to-transparent" />

                            {/* Label overlay */}
                            <div className="absolute right-4 bottom-4 left-4 z-10 flex items-center gap-2 rounded-xl border border-white/30 bg-white/80 px-3 py-2 backdrop-blur-sm">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-500">
                                    <FontAwesomeIcon
                                        icon={faCertificate}
                                        className="h-3 w-3 text-white"
                                    />
                                </div>
                                <span className="text-xs font-semibold text-neutral-800">
                                    Gedung LPK Puji Intan Shafira — Berdiri
                                    sejak 2024
                                </span>
                            </div>
                        </div>

                        {/* Floating badge: Kemnaker */}
                        <div className="absolute -top-4 -right-4 flex items-center gap-2.5 rounded-2xl border border-rose-100 bg-white px-4 py-2.5 shadow-lg shadow-rose-200/40">
                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-rose-50">
                                <FontAwesomeIcon
                                    icon={faCertificate}
                                    className="h-4 w-4 text-rose-500"
                                />
                            </div>

                        </div>

                        {/* Sakura petal corner */}
                        <div
                            aria-hidden="true"
                            className="absolute -right-3 -bottom-3 h-14 w-14 rounded-full border-4 border-white bg-rose-500/10"
                        />
                        <SakuraPetal className="absolute -right-1 -bottom-1 h-7 w-7 text-rose-400/50" />
                    </div>

                    {/* Right: Text Content */}
                    <div className="relative flex flex-col">
                        {/* Logo Watermark Background */}
                        <div className="absolute -right-10 top-20 z-0 opacity-[0.03] pointer-events-none select-none">
                            <Logo className="w-96 h-96" />
                        </div>

                        <div className="relative z-10">
                            <SectionHeader
                                jpLabel="私たちについて"
                                title="Jembatan Menuju Masa"
                                highlight="Depan Cerah"
                                centered={false}
                            />

                            <p className="mb-5 text-base leading-relaxed text-neutral-500">
                                LPK Puji Intan Shafira berdiri sejak tahun 2024
                                dengan misi mempersiapkan putra-putri Indonesia
                                untuk bekerja dan berkarir di Jepang. Kami
                                menyediakan program pelatihan komprehensif mulai
                                dari bahasa Jepang, etika kerja, hingga keterampilan
                                teknis vokasional.
                            </p>

                            <SocialMediaSection />
                            {/* Japanese decorative footer line */}
                            <div className="mt-6 flex flex-col items-center gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300" />
                                    <SakuraPetal className="h-5 w-5 text-rose-400" />
                                    <p className="text-[10px] tracking-[0.3em] text-rose-400">
                                        繋がりましょう · MARI TERHUBUNG
                                    </p>
                                    <SakuraPetal className="h-5 w-5 -scale-x-100 text-rose-400" />
                                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Section: Vision & Mission ─────────────────────────────────────────────────
function VisionMissionSection() {
    return (
        <section
            id="visi-misi"
            className="relative overflow-hidden bg-white/50 py-24"
        >
            {/* Background decoration */}
            <div
                aria-hidden="true"
                className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-rose-200/20 blur-3xl"
            />
            <AsanohaPattern className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_top_right,black_10%,transparent_70%)] text-rose-200/20 opacity-50" />

            {/* Kanji decoration */}
            <div
                aria-hidden="true"
                className="absolute top-10 right-10 font-serif text-[9rem] font-bold text-rose-200/30 select-none"
            >
                夢
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    jpLabel="ビジョン・ミッション"
                    title="Visi &"
                    highlight="Misi Kami"
                    subtitle="Kami berkomitmen menjadi lembaga pelatihan terdepan yang menghasilkan tenaga kerja Indonesia berdaya saing internasional."
                />

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Vision Card */}
                    <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 shadow-rose-100/50 ring-rose-100 transition-all duration-500 hover:shadow-xl hover:shadow-rose-200/50 hover:ring-rose-200">
                        {/* Top accent */}
                        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-rose-300 via-rose-500 to-rose-300" />

                        {/* Icon */}
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-md shadow-rose-300/40 transition-transform duration-300 group-hover:scale-110">
                                <FontAwesomeIcon
                                    icon={faEye}
                                    className="h-6 w-6 text-white"
                                />
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold tracking-[0.25em] text-rose-400 uppercase">
                                    ビジョン
                                </p>
                                <h3 className="text-xl font-extrabold text-neutral-900">
                                    Visi Kami
                                </h3>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="mb-6 flex items-center gap-3">
                            <WaveMotif className="h-4 w-24 text-rose-300" />
                        </div>

                        <p className="text-base leading-relaxed text-neutral-600">
                            Menjadi lembaga pelatihan bahasa Jepang dan penyaluran tenaga kerja yang unggul, terpercaya, serta mampu mencetak SDM Indonesia berdaya saing global.
                        </p>

                        {/* Corner decoration */}
                        <div
                            aria-hidden="true"
                            className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full bg-rose-100/60 transition-transform duration-500 group-hover:scale-150"
                        />
                        <SakuraPetal className="absolute right-3 bottom-3 h-8 w-8 text-rose-300/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-rose-400/50" />
                    </div>

                    {/* Mission Card */}
                    <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 shadow-rose-100/50 ring-rose-100 transition-all duration-500 hover:shadow-xl hover:shadow-rose-200/50 hover:ring-rose-200">
                        {/* Top accent */}
                        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-rose-300 via-rose-500 to-rose-300" />

                        {/* Icon */}
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 shadow-md shadow-rose-300/40 transition-transform duration-300 group-hover:scale-110">
                                <FontAwesomeIcon
                                    icon={faRocket}
                                    className="h-6 w-6 text-white"
                                />
                            </div>
                            <div>
                                <p className="text-[10px] font-semibold tracking-[0.25em] text-rose-400 uppercase">
                                    ミッション
                                </p>
                                <h3 className="text-xl font-extrabold text-neutral-900">
                                    Misi Kami
                                </h3>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="mb-6 flex items-center gap-3">
                            <WaveMotif className="h-4 w-24 text-rose-300" />
                        </div>

                        <ul className="flex flex-col gap-3">
                            {missionItems.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start gap-3"
                                >
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500"
                                    />
                                    <span className="text-sm leading-relaxed text-neutral-600">
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Corner decoration */}
                        <div
                            aria-hidden="true"
                            className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full bg-rose-100/60 transition-transform duration-500 group-hover:scale-150"
                        />
                        <SakuraPetal className="absolute right-3 bottom-3 h-8 w-8 text-rose-300/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-rose-400/50" />
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Section: Location & Contact ──────────────────────────────────────────────
function LocationSection() {
    return (
        <section id="lokasi" className="bg-white/50 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    jpLabel="場所・連絡先"
                    title="Lokasi &"
                    highlight="Kontak"
                    subtitle="Kunjungi kami langsung atau hubungi kami melalui berbagai saluran komunikasi yang tersedia."
                />

                <div className="grid items-start gap-10 lg:grid-cols-5">
                    {/* Map embed — takes 3/5 width */}
                    <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 shadow-rose-100/50 ring-rose-100 lg:col-span-3">
                        {/* Top accent */}
                        <div className="absolute top-0 right-0 left-0 z-10 h-1 bg-gradient-to-r from-rose-200 via-rose-500 to-rose-200" />
                        <iframe
                            title="Lokasi LPK Puji Intan Shafira"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.005569230416!2d112.61693527425162!3d-7.998360592027442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629aa90b6a001%3A0x6dfe996fb93424e6!2sLPK%20PUJI%20INTAN%20SHAFIRA!5e0!3m2!1sen!2sid!4v1773891352974!5m2!1sen!2sid"
                            width="100%"
                            height="400"
                            style={{ border: 0, display: 'block' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        />
                    </div>

                    {/* Contact info — takes 2/5 width */}
                    <div className="flex flex-col gap-5 lg:col-span-2">
                        {/* Address */}
                        <div className="group flex gap-4 rounded-2xl border border-rose-50 bg-rose-50/60 p-5 transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:shadow-sm">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 shadow-rose-100/60 ring-rose-100 transition-transform duration-300 group-hover:scale-110">
                                <FontAwesomeIcon
                                    icon={faMapMarkerAlt}
                                    className="h-4 w-4 text-rose-500"
                                />
                            </div>
                            <div>
                                <p className="mb-1 text-[10px] font-semibold tracking-widest text-rose-400 uppercase">
                                    Alamat
                                </p>
                                <p className="text-sm leading-relaxed font-medium text-neutral-700">
                                    Jl. S. Supriadi No.23 B9, RT.06/RW.04,
                                    Sukun, Kec. Sukun, Kota Malang, Jawa Timur
                                    65148
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <a
                            href="tel:+6289506399600"
                            className="group flex gap-4 rounded-2xl border border-rose-50 bg-rose-50/60 p-5 transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:shadow-sm"
                        >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 shadow-rose-100/60 ring-rose-100 transition-transform duration-300 group-hover:scale-110">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="h-4 w-4 text-rose-500"
                                />
                            </div>
                            <div>
                                <p className="mb-1 text-[10px] font-semibold tracking-widest text-rose-400 uppercase">
                                    Telepon
                                </p>
                                <p className="text-sm font-semibold text-neutral-800 transition-colors duration-200 group-hover:text-rose-600">
                                    +62 8950-6399-600
                                </p>
                                <p className="text-xs text-neutral-400">
                                    Senin – Jumat: 08.00 – 17.00, Sabtu: 09.00 –
                                    16.00
                                </p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:lpk.pujishafira74@gmail.com"
                            className="group flex gap-4 rounded-2xl border border-rose-50 bg-rose-50/60 p-5 transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:shadow-sm"
                        >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 shadow-rose-100/60 ring-rose-100 transition-transform duration-300 group-hover:scale-110">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="h-4 w-4 text-rose-500"
                                />
                            </div>
                            <div>
                                <p className="mb-1 text-[10px] font-semibold tracking-widest text-rose-400 uppercase">
                                    Email
                                </p>
                                <p className="text-sm font-semibold text-neutral-800 transition-colors duration-200 group-hover:text-rose-600">
                                    lpk.pujishafira74@gmail.com
                                </p>
                                <p className="text-xs text-neutral-400">
                                    Respon dalam 1×24 jam
                                </p>
                            </div>
                        </a>

                        {/* CTA Button */}
                        <a
                            href="https://maps.app.goo.gl/tZhsuT5rjwECBRyw6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-rose-300/40 transition-all duration-300 hover:from-rose-600 hover:to-rose-700 hover:shadow-lg hover:shadow-rose-300/50 active:scale-95"
                        >
                            <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                className="h-4 w-4"
                            />
                            Buka di Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Section: Social Media ─────────────────────────────────────────────────────
function SocialMediaSection() {
    return (
        <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((social) => (
                <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`social-${social.label.toLowerCase()}`}
                    className={cn(
                        'group flex items-center gap-3 rounded-2xl border px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md',
                        social.bgClass,
                        social.borderClass,
                    )}
                >
                    {/* Platform icon */}
                    <div
                        className={cn(
                            'flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md',
                            social.borderClass,
                            social.colorClass,
                        )}
                    >
                        {social.icon}
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                        <p
                            className={cn(
                                'text-[10px] font-semibold tracking-widest uppercase',
                                social.colorClass,
                            )}
                        >
                            {social.label}
                        </p>
                        <p className="truncate text-xs font-medium text-neutral-600">
                            {social.handle}
                        </p>
                    </div>
                </a>
            ))}
        </div>
    );
}

// ─── Main About Page ───────────────────────────────────────────────────────────
export default function About() {
    return (
        <div className="overflow-x-hidden">
            <HeroAbout />
            <AboutSection />
            <VisionMissionSection />
            <LocationSection />
        </div>
    );
}

