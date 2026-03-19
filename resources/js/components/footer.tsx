import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faPhone,
    faEnvelope,
    faClock,
    faArrowRight,
    faChevronRight,
    faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import {
    faInstagram,
    faFacebookF,
    faTiktok,
    faYoutube,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

// ─── Types ────────────────────────────────────────────────────────────────────

interface FooterLink {
    label: string;
    href: string;
}

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    label: string;
    hoverColor: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const quickLinks: FooterLink[] = [
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Program Pelatihan', href: '#program' },
    { label: 'Galeri Kegiatan', href: '#galeri' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Testimoni Alumni', href: '#testimoni' },
];

const programLinks: FooterLink[] = [
    { label: 'Bahasa Jepang Intensif', href: '#program' },
    { label: 'Manufaktur & Industri', href: '#program' },
    { label: 'Konstruksi', href: '#program' },
    { label: 'IT & Digital Support', href: '#program' },
    { label: 'Kuliner & Hospitality', href: '#program' },
];

const socialLinks: SocialLink[] = [
    {
        icon: <FontAwesomeIcon icon={faInstagram} />,
        href: '#',
        label: 'Instagram',
        hoverColor: 'hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400',
    },
    {
        icon: <FontAwesomeIcon icon={faFacebookF} />,
        href: '#',
        label: 'Facebook',
        hoverColor: 'hover:bg-blue-600',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        href: '#',
        label: 'TikTok',
        hoverColor: 'hover:bg-neutral-900',
    },
    {
        icon: <FontAwesomeIcon icon={faYoutube} />,
        href: '#',
        label: 'YouTube',
        hoverColor: 'hover:bg-red-600',
    },
    {
        icon: <FontAwesomeIcon icon={faWhatsapp} />,
        href: '#',
        label: 'WhatsApp',
        hoverColor: 'hover:bg-emerald-500',
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
                <pattern id="seigaiha-footer" patternUnits="userSpaceOnUse" width="40" height="30">
                    <ellipse cx="20" cy="30" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <ellipse cx="0" cy="30" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <ellipse cx="40" cy="30" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <ellipse cx="10" cy="15" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                    <ellipse cx="30" cy="15" rx="20" ry="15" fill="none" stroke="currentColor" strokeWidth="0.6" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#seigaiha-footer)" />
        </svg>
    );
}

// ─── Footer Logo ──────────────────────────────────────────────────────────────

function FooterLogo() {
    return (
        <a href="#hero" className="group inline-flex items-center gap-3" aria-label="Kembali ke beranda">
            {/* Kanji badge */}
            <div className="relative flex h-12 w-12 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-rose-400/30 transition-all duration-500 group-hover:scale-110 group-hover:border-rose-400" />
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600 shadow-md transition-all duration-500 group-hover:shadow-rose-400/40 group-hover:shadow-lg">
                    <span className="font-serif text-lg font-bold text-white">日</span>
                </div>
                <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full border border-white bg-rose-400" />
            </div>

            {/* Brand text */}
            <div>
                <p className="text-base font-bold leading-tight text-neutral-800 transition-colors duration-200 group-hover:text-rose-600">
                    LPK Puji Intan Shafira
                </p>
                <p className="text-[10px] font-light tracking-[0.25em] text-rose-400/80">
                    日本・キャリア研修
                </p>
            </div>
        </a>
    );
}


// ─── Contact Info Item ────────────────────────────────────────────────────────

function ContactItem({
    icon,
    label,
    value,
    href,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
}) {
    const Wrapper = href ? 'a' : 'div';
    return (
        <Wrapper
            {...(href ? { href } : {})}
            className={cn(
                'group flex items-start gap-3',
                href && 'transition-colors duration-200 hover:text-rose-600',
            )}
        >
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-rose-50 text-sm text-rose-500 ring-1 ring-rose-100 transition-all duration-300 group-hover:bg-rose-100 group-hover:scale-105">
                {icon}
            </div>
            <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-rose-400">{label}</p>
                <p className="text-sm text-neutral-600">{value}</p>
            </div>
        </Wrapper>
    );
}

// ─── Main Footer ──────────────────────────────────────────────────────────────

export default function FooterHome() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="relative overflow-hidden bg-white/50">

            {/* ── Top decorative border ── */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-rose-500 to-transparent" />

            {/* ── Background decorations ── */}
            <div
                aria-hidden="true"
                className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-rose-200/20 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-rose-100/25 blur-3xl"
            />

            {/* Seigaiha pattern */}
            <SeigaihaPattern className="absolute inset-0 h-full w-full text-rose-200/50 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

            {/* Kanji watermark */}
            <div
                aria-hidden="true"
                className="absolute right-8 top-10 select-none font-serif text-[14rem] font-bold leading-none text-rose-100/50"
            >
                絆
            </div>
            <div
                aria-hidden="true"
                className="absolute left-6 bottom-24 select-none font-serif text-[10rem] font-bold leading-none text-rose-100/50"
            >
                道
            </div>

            {/* Torii + sakura accents */}
            <ToriiGate className="absolute right-12 top-4 h-36 w-auto text-rose-200/40 sm:right-24" />
            <SakuraPetal className="absolute right-1/4 top-16 h-7 w-7 animate-[spin_18s_linear_infinite] text-rose-300/25" />
            <SakuraPetal className="absolute left-1/3 bottom-40 h-5 w-5 animate-[spin_22s_linear_infinite_reverse] text-rose-200/35" />

            {/* ── Newsletter / CTA Banner ── */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative -mt-px overflow-hidden rounded-b-3xl border border-t-0 border-rose-200 bg-gradient-to-r from-rose-50 via-white to-rose-50 px-8 py-10 shadow-sm backdrop-blur-sm sm:px-12">
                    {/* Sakura watermark */}
                    <SakuraPetal className="absolute -right-4 -bottom-4 h-28 w-28 text-rose-200/40" />

                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-8">
                        <div className="text-center sm:text-left">
                            <p className="mb-1 text-[9px] font-semibold tracking-[0.3em] text-rose-400">
                                日本への旅を始めよう
                            </p>
                            <h3 className="text-xl font-extrabold text-neutral-900 sm:text-2xl">
                                Siap Memulai Karir di{' '}
                                <span className="bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
                                    Jepang?
                                </span>
                            </h3>
                            <p className="mt-1 max-w-md text-sm text-neutral-500">
                                Bergabunglah bersama 2.500+ alumni yang telah berhasil berkarir di Jepang.
                            </p>
                        </div>

                        <a
                            href="#daftar"
                            className="group inline-flex items-center gap-2.5 rounded-full bg-rose-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-300/40 transition-all duration-300 hover:scale-[1.03] hover:bg-rose-600 hover:shadow-rose-400/50"
                        >
                            Daftar Sekarang
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* ── Main footer content ── */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-12">

                    {/* ── Column 1: Brand + About ── */}
                    <div className="lg:col-span-4">
                        <FooterLogo />

                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-500">
                            Lembaga pelatihan kerja resmi yang mempersiapkan tenaga kerja Indonesia
                            berkualitas untuk berkarir di Jepang melalui program bahasa, budaya,
                            dan keterampilan vokasional.
                        </p>

                        {/* Wave divider */}
                        <div className="my-6">
                            <WaveMotif className="h-4 w-28 text-rose-300" />
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className={cn(
                                        'flex h-9 w-9 items-center justify-center rounded-xl border border-rose-100 bg-white text-sm text-neutral-500 shadow-sm transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-md hover:scale-110',
                                        social.hoverColor,
                                    )}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ── Column 2: Quick Links ── */}
                    <div className="lg:col-span-2">
                        <h4 className="mb-1 text-sm font-bold text-neutral-900">Navigasi</h4>
                        <span className="text-[9px] tracking-[0.2em] text-rose-400/60">ナビゲーション</span>
                        <div className="mt-4 h-px w-8 bg-gradient-to-r from-rose-500 to-transparent" />

                        <ul className="mt-4 flex flex-col gap-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-1.5 text-sm text-neutral-500 transition-colors duration-200 hover:text-rose-600"
                                    >
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                            className="h-2 w-2 text-rose-500/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-rose-400"
                                        />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Column 3: Programs ── */}
                    <div className="lg:col-span-3">
                        <h4 className="mb-1 text-sm font-bold text-neutral-900">Program</h4>
                        <span className="text-[9px] tracking-[0.2em] text-rose-400/60">プログラム</span>
                        <div className="mt-4 h-px w-8 bg-gradient-to-r from-rose-500 to-transparent" />

                        <ul className="mt-4 flex flex-col gap-2.5">
                            {programLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-1.5 text-sm text-neutral-500 transition-colors duration-200 hover:text-rose-600"
                                    >
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                            className="h-2 w-2 text-rose-500/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-rose-400"
                                        />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── Column 4: Contact ── */}
                    <div className="lg:col-span-3">
                        <h4 className="mb-1 text-sm font-bold text-neutral-900">Kontak</h4>
                        <span className="text-[9px] tracking-[0.2em] text-rose-400/60">お問い合わせ</span>
                        <div className="mt-4 h-px w-8 bg-gradient-to-r from-rose-500 to-transparent" />

                        <div className="mt-4 flex flex-col gap-4">
                            <ContactItem
                                icon={<FontAwesomeIcon icon={faMapMarkerAlt} />}
                                label="Alamat"
                                value="Jl. S. Supriadi No.23 B9, RT.06/RW.04, Sukun, Kec. Sukun, Kota Malang, Jawa Timur 65148"
                            />
                            <ContactItem
                                icon={<FontAwesomeIcon icon={faPhone} />}
                                label="Telepon"
                                value="x"
                                href="tel:+6281234567890"
                            />
                            <ContactItem
                                icon={<FontAwesomeIcon icon={faEnvelope} />}
                                label="Email"
                                value="x"
                                href="mailto:info@pujiintanshafira.com"
                            />
                            <ContactItem
                                icon={<FontAwesomeIcon icon={faClock} />}
                                label="Jam Operasional"
                                value="Senin – Jumat: 08.00 – 17.00, Sabtu: 09.00 – 16.00"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div className="relative z-10 border-t border-rose-100">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
                    {/* Left: Copyright */}
                    <div className="flex items-center gap-3 text-center sm:text-left">
                        <SakuraPetal className="hidden h-4 w-4 text-rose-500/30 sm:block" />
                        <p className="text-xs text-neutral-400">
                            © {currentYear} LPK Puji Intan Shafira. All rights reserved.
                        </p>
                    </div>

                    {/* Center: Japanese text */}
                    <p className="text-[9px] tracking-[0.3em] text-rose-400">
                        ✿ 日本で夢を叶えよう ✿
                    </p>


                </div>
            </div>
        </footer>
    );
}
