import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faImages, faStar, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Menu, X, ArrowRight, ChevronRight, User, GalleryHorizontal, User2, GalleryVertical, Images } from 'lucide-react';
import JapanLine from '@/components/ui/japanline';

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavLink {
    href: string;
    label: string;
    labelJp: string;
    icon: React.ReactNode;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const navLinks: NavLink[] = [
    { href: '#tentang', label: 'Tentang', labelJp: '私たちについて', icon: <FontAwesomeIcon icon={faUser} /> },
    { href: '#galeri', label: 'Galeri', labelJp: 'ギャラリー', icon: <FontAwesomeIcon icon={faImages} /> },
    { href: '#testimoni', label: 'Testimoni', labelJp: 'お客様の声 ', icon: <FontAwesomeIcon icon={faStar} /> },
    { href: '#fasilitas', label: 'Fasilitas', labelJp: '施設', icon: <FontAwesomeIcon icon={faBuilding} /> },
];

// ─── Sub Components ──────────────────────────────────────────────────────────
function NavLogo() {
    return (
        <a
            href="#hero"
            className="group flex items-center gap-3"
            aria-label="LPK Puji Intan Shafira Beranda"
        >
            {/* Japanese kanji badge */}
            <div className="relative flex h-10 w-10 items-center justify-center">
                {/* Outer decorative ring */}
                <div className="absolute inset-0 rounded-full border border-rose-200 transition-all duration-500 group-hover:scale-110 group-hover:border-rose-400" />
                {/* Inner circle */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600 shadow-md transition-all duration-500 group-hover:shadow-rose-300/60 group-hover:shadow-lg">
                    <span className="font-serif text-base font-bold text-white">日</span>
                </div>
                {/* Subtle sakura dot accent */}
                <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full border border-white bg-rose-400" />
            </div>

            {/* Brand text */}
            <div className="relative flex flex-col overflow-hidden rounded-lg px-2 py-0.5">
                {/* JapanLine SVG as decorative background */}
                <JapanLine className="pointer-events-none absolute -bottom-1 -right-2 h-10 w-auto opacity-20 transition-opacity duration-300 group-hover:opacity-40" />

                <span className="relative text-[15px] font-bold leading-tight tracking-tight text-neutral-800 transition-colors duration-200 group-hover:text-rose-600">
                    LPK Puji Intan Shafira
                </span>
                <span className="relative text-[10px] font-light tracking-widest text-rose-400">
                    日本・キャリア研修
                </span>
            </div>
        </a>
    );
}

function DesktopNavLink({ href, label, labelJp, icon }: NavLink) {
    return (
        <li>
            <a
                href={href}
                className="  group relative flex  items-center gap-0.5 px-5 py-1 text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-rose-600"
            >
                {icon}
                <span>{label}</span>
                {/* Japanese label that fades in on hover */}
                <span className="absolute text-center -bottom-4 text-[9px] tracking-widest text-rose-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {labelJp}
                </span>
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-rose-400 to-rose-600 transition-all duration-300 group-hover:w-full" />
            </a>
        </li>
    );
}

function MobileNavLink({
    href,
    label,
    labelJp,
    onClick,
    icon,
}: NavLink & { onClick: () => void }) {
    return (
        <li>
            <a
                href={href}
                onClick={onClick}
                className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition-all duration-200 hover:bg-rose-50 hover:text-rose-600"
            >
                <div className="flex items-center gap-3">
                    <span>{icon}</span>
                    <span className="text-[10px] font-light tracking-widest text-rose-300 transition-colors duration-200 group-hover:text-rose-500">
                        {labelJp}
                    </span>
                    <span>{label}</span>
                </div>
                <ChevronRight className="h-3.5 w-3.5 text-neutral-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-rose-400" />
            </a>
        </li>
    );
}

// ─── Decorative Japanese Divider ─────────────────────────────────────────────
function KamonDivider() {
    return (
        <div className="flex items-center gap-2">
            <div className="h-px w-4 bg-rose-200" />
            <svg viewBox="0 0 24 24" className="h-3 w-3 fill-rose-300" aria-hidden>
                {/* Simplified sakura/kamon shape */}
                <circle cx="12" cy="12" r="3" />
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
                <circle cx="5" cy="12" r="1.5" />
                <circle cx="19" cy="12" r="1.5" />
                <circle cx="7.2" cy="7.2" r="1.5" />
                <circle cx="16.8" cy="16.8" r="1.5" />
                <circle cx="16.8" cy="7.2" r="1.5" />
                <circle cx="7.2" cy="16.8" r="1.5" />
            </svg>
            <div className="h-px w-4 bg-rose-200" />
        </div>
    );
}

// ─── Scrolled indicator line ──────────────────────────────────────────────────
function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-rose-100/60">
            <div
                className="h-full bg-gradient-to-r from-rose-300 via-rose-500 to-rose-300 transition-all duration-75"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────
export default function NavbarHome() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Handle scroll state for navbar background change
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMobileOpen(false);
        };
        document.addEventListener('keydown', handler);
        return () => document.removeEventListener('keydown', handler);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    const closeMobileMenu = useCallback(() => setMobileOpen(false), []);
    const toggleMobileMenu = useCallback(() => setMobileOpen((v) => !v), []);

    return (
        <>
            {/* ── Header ── */}
            <header
                id="navbar"
                className={cn(
                    'fixed top-0 right-0 left-0 z-50 transition-all duration-500',
                    scrolled
                        ? 'border-b border-rose-100/80 bg-white/95 shadow-sm shadow-rose-100/40 backdrop-blur-md'
                        : 'bg-transparent',
                )}
            >
                {/* Decorative thin top accent line */}
                <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-60" />

                <nav className="relative mx-auto flex h-[62px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* ── Logo ── */}
                    <NavLogo />

                    {/* ── Desktop Nav Links ── */}
                    <ul className="hidden items-center gap-7 lg:flex">
                        {navLinks.map((link) => (
                            <DesktopNavLink key={link.href} {...link} />
                        ))}
                    </ul>

                    {/* ── Desktop CTA ── */}
                    <div className="hidden items-center gap-3 lg:flex">
                        <KamonDivider />
                        <Button
                            asChild
                            className="group relative overflow-hidden rounded-full border border-rose-200 bg-white px-5 py-2 text-sm font-semibold text-rose-600 shadow-sm shadow-rose-100 transition-all duration-300 hover:border-rose-400 hover:bg-rose-50 hover:shadow-md hover:shadow-rose-200/60 hover:scale-[1.03]"
                        >
                            <a href="#daftar" className="flex items-center gap-2">
                                {/* Animated background fill on hover */}
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-rose-50 to-rose-100 transition-transform duration-300 group-hover:translate-x-0" />
                                <span className="relative">Daftar Sekarang</span>
                                <FontAwesomeIcon icon={faUserPlus} />
                            </a>
                        </Button>
                    </div>

                    {/* ── Mobile Hamburger ── */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                            'relative h-9 w-9 rounded-full lg:hidden',
                            scrolled
                                ? 'text-neutral-700 hover:bg-rose-50 hover:text-rose-600'
                                : 'text-white hover:bg-white/20',
                        )}
                        onClick={toggleMobileMenu}
                        aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
                        aria-expanded={mobileOpen}
                    >
                        <span
                            className={cn(
                                'absolute inset-0 flex items-center justify-center transition-all duration-300',
                                mobileOpen ? 'rotate-90 opacity-100' : 'rotate-0 opacity-0',
                            )}
                        >
                            <X className="h-5 w-5" />
                        </span>
                        <span
                            className={cn(
                                'absolute inset-0 flex items-center justify-center transition-all duration-300',
                                mobileOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100',
                            )}
                        >
                            <Menu className="h-5 w-5" />
                        </span>
                    </Button>
                </nav>

                {/* Scroll progress bar (only when scrolled) */}
                {scrolled && <ScrollProgress />}
            </header>

            {/* ── Mobile Menu Overlay ── */}
            <div
                className={cn(
                    'fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300 lg:hidden',
                    mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
                )}
                onClick={closeMobileMenu}
                aria-hidden="true"
            />

            {/* ── Mobile Menu Drawer ── */}
            <div
                id="mobile-menu"
                className={cn(
                    'fixed top-0 right-0 z-50 flex h-full w-[300px] flex-col bg-white shadow-2xl shadow-rose-200/30 transition-transform duration-300 ease-out lg:hidden',
                    mobileOpen ? 'translate-x-0' : 'translate-x-full',
                )}
                inert={!mobileOpen}
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between border-b border-rose-100 px-5 py-4">
                    <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-rose-600">
                            <span className="font-serif text-xs font-bold text-white">日</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-neutral-800">LPK Puji Intan Shafira</p>
                            <p className="text-[9px] tracking-widest text-rose-400">日本・キャリア研修</p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon-sm"
                        className="rounded-full text-neutral-500 hover:bg-rose-50 hover:text-rose-600"
                        onClick={closeMobileMenu}
                        aria-label="Tutup menu"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>

                {/* Decorative accent */}
                <div className="h-[2px] w-full bg-gradient-to-r from-rose-200 via-rose-400 to-rose-200" />

                {/* Nav links */}
                <nav className="flex-1 overflow-y-auto px-3 py-4">
                    <p className="mb-2 px-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-rose-300">
                        ナビゲーション · Menu
                    </p>
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <MobileNavLink
                                key={link.href}
                                {...link}
                                onClick={closeMobileMenu}
                            />
                        ))}
                    </ul>
                </nav>

                {/* Drawer footer CTA */}
                <div className="border-t border-rose-100 p-4">
                    <a
                        href="#daftar"
                        onClick={closeMobileMenu}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-rose-300/40 transition-all duration-300 hover:from-rose-600 hover:to-rose-700 hover:shadow-lg active:scale-95"
                    >
                        <span>Daftar Sekarang</span>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </a>
                    <p className="mt-3 text-center text-[10px] tracking-widest text-rose-300">
                        ✿ 日本への道を歩もう ✿
                    </p>
                </div>
            </div>
        </>
    );
}