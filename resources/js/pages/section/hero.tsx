import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faAward,
    faBuilding,
    faChevronDown,
    faGraduationCap,
    faStar,
    faUserPlus,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// ─── Types ────────────────────────────────────────────────────────────────────
interface StatItem {
    value: string;
    label: string;
    icon: React.ReactNode;
}

interface FloatingCardProps {
    className?: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats: StatItem[] = [
    {
        value: '19',
        label: 'Alumni Ditempatkan',
        icon: <FontAwesomeIcon icon={faUsers} className="text-rose-400" />,
    },
    {
        value: '80',
        label: 'Tingkat Kelulusan',
        icon: (
            <FontAwesomeIcon icon={faGraduationCap} className="text-rose-400" />
        ),
    },
];

// ─── Sub Components ───────────────────────────────────────────────────────────

/** Floating info badge card (glassmorphism white) */
function FloatingCard({ className, icon, title, subtitle }: FloatingCardProps) {
    return (
        <div
            className={cn(
                'absolute flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl shadow-rose-200/30 backdrop-blur-md',
                className,
            )}
        >
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-rose-50 text-base">
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-medium tracking-widest text-rose-400 uppercase">
                    {title}
                </p>
                <p className="text-sm font-bold text-neutral-800">{subtitle}</p>
            </div>
        </div>
    );
}

/** Single stat pill */
function StatCard({ value, label, icon }: StatItem) {
    return (
        <div className="flex items-center gap-3 rounded-2xl border border-rose-100 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-rose-300 hover:shadow-md hover:shadow-rose-100/40">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-50 text-sm">
                {icon}
            </div>
            <div>
                <div className="text-xl leading-none font-extrabold text-neutral-900">
                    {value}
                </div>
                <div className="mt-0.5 text-[10px] font-medium text-neutral-500">
                    {label}
                </div>
            </div>
        </div>
    );
}

/** Decorative background kanji character */
function KanjiDecor({ char, className }: { char: string; className?: string }) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                'pointer-events-none absolute font-serif font-bold select-none',
                className,
            )}
        >
            {char}
        </div>
    );
}

// ─── Main Hero Section ────────────────────────────────────────────────────────
export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative flex min-h-screen items-center overflow-hidden bg-white/50 pt-[65px]"
        >
            {/* ── Decorative background blobs ── */}
            <div
                aria-hidden="true"
                className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-rose-300/15 blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute bottom-1/4 -left-40 h-[400px] w-[400px] rounded-full bg-rose-200/20 blur-3xl"
            />
            {/* Subtle grid overlay */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(rgba(255,228,230,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,228,230,0.3)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] bg-[size:48px_48px]"
            />

            {/* ── Decorative Kanji ── */}
            <KanjiDecor
                char="夢"
                className="top-24 right-12 animate-pulse text-[10rem] text-rose-400/40"
            />
            <KanjiDecor
                char="道"
                className="bottom-16 left-8 animate-pulse text-[8rem]"
            />
            <KanjiDecor
                char="力"
                className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22rem] text-neutral-900/10"
            />

            {/* ── Main Content Grid ── */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* ── LEFT: Text Content ── */}
                    <div className="flex flex-col">
                        {/* Furigana / Japanese subtitle */}
                        <p className="mb-2 text-[11px] font-light tracking-[0.3em] text-rose-400">
                            日本でのキャリアを実現しよう
                        </p>

                        {/* Headline */}
                        <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
                            <span className="text-xl sm:text-2xl font-semibold text-rose-400 block mb-2">LPK PUJI INTAN SHAFIRA</span>
                            Wujudkan{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 text-rose-500">
                                    Karir Impian
                                </span>
                                {/* Underline accent */}
                                <span
                                    aria-hidden="true"
                                    className="absolute bottom-1 left-0 h-2 w-full -skew-x-3 bg-rose-100"
                                />
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent">
                                di Jepang
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mb-8 max-w-lg text-base leading-relaxed text-neutral-500 lg:text-lg">
                            LPK Puji Intan Shafira mempersiapkan tenaga kerja
                            Indonesia berkualitas untuk bekerja dan berkarir di
                            Jepang melalui program pelatihan bahasa, budaya, dan
                            vokasional bersertifikat.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3">
                            {/* Primary CTA */}
                            <Button
                                asChild
                                id="cta-hero-primary"
                                className="group h-auto gap-2.5 rounded-full bg-rose-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-300/40 transition-all duration-300 hover:scale-[1.03] hover:bg-rose-600 hover:shadow-rose-400/50"
                            >
                                <a href="https://wa.me/6289506399600?text=Halo%20Admin%20LPK%20Puji%20Intan%20Shafira%2C%20saya%20tertarik%20dan%20ingin%20mendaftar%20program%20pelatihan.%20Boleh%20minta%20informasi%20lebih%20lanjut%20mengenai%20persyaratan%20dan%20tata%20cara%20pendaftarannya%3F%20Terima%20kasih." target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon
                                        icon={faUserPlus}
                                        className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                                    />
                                    Daftar Sekarang
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                                    />
                                </a>
                            </Button>

                            {/* Secondary CTA */}
                            <Button
                                asChild
                                id="cta-hero-secondary"
                                variant="outline"
                                className="h-auto gap-2 rounded-full border-rose-200 bg-white px-7 py-3.5 text-sm font-semibold text-rose-600 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-rose-400 hover:bg-rose-50"
                            >
                                <a href="#program">
                                    Lihat Program
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="h-3.5 w-3.5 rotate-45"
                                    />
                                </a>
                            </Button>
                        </div>

                        {/* Stats Row */}
                        <div className="mt-10 flex flex-wrap gap-3">
                            {stats.map((stat) => (
                                <StatCard key={stat.label} {...stat} />
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Hero Image ── */}
                    <div className="relative flex items-center justify-center">
                        {/* Decorative blurred ring behind image */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-4 rounded-3xl bg-gradient-to-br from-rose-200/60 to-rose-50/30 blur-2xl"
                        />

                        {/* Image frame */}
                        <div className="relative w-full overflow-hidden rounded-3xl border border-rose-100 shadow-2xl shadow-rose-200/40">
                            {/* Top accent bar */}
                            <div className="absolute top-0 right-0 left-0 z-10 h-1 bg-gradient-to-r from-rose-200 via-rose-500 to-rose-200 opacity-80" />

                            <img
                                src="/resource/hero.png"
                                alt="Siswa LPK Puji Intan Shafira belajar di kelas bergaya Jepang dengan pemandangan Gunung Fuji"
                                className="w-full object-cover"
                            />

                            {/* Image overlay tint */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                        </div>

                        {/* ── Floating Badge: Tersertifikasi ── */}

                        {/* Decorative corner kamon dot */}
                        <div
                            aria-hidden="true"
                            className="absolute -right-2 -bottom-2 h-16 w-16 rounded-full border-4 border-white bg-rose-500/10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
