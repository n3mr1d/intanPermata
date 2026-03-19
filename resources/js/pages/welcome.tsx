import { useState, useEffect, useCallback } from 'react';
import NavbarHome from '@/components/navbar';
import FooterHome from '@/components/footer';
import { Head } from '@inertiajs/react';
import HeroSection from './section/hero';
import ProgramSection from './section/program';
import About from './section/about';
import GallerySection from './section/galery';
import TestimonialSection from './section/testimonial';
import FasilitasSection from './section/fasilitas';
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// ─── Floating Scroll-to-Top Button ────────────────────────────────────────────

function FloatingScrollButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <button
            id="floating-scroll-top"
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className={cn(
                'fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-rose-200 bg-white/90 text-rose-500 shadow-lg shadow-rose-200/40 backdrop-blur-sm transition-all duration-500',
                'hover:scale-110 hover:border-rose-400 hover:bg-rose-500 hover:text-white hover:shadow-xl hover:shadow-rose-300/50',
                'active:scale-95',
                visible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0 pointer-events-none',
            )}
        >
            {/* Sakura ring pulse */}
            <span
                aria-hidden="true"
                className={cn(
                    'absolute inset-0 rounded-full border border-rose-300/50 transition-all duration-700',
                    visible && 'animate-ping opacity-20',
                )}
            />
            <FontAwesomeIcon icon={faChevronUp} className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            {/* ── Fixed background layer ── */}
            <div
                aria-hidden="true"
                className="fixed inset-0 opacity-30 -z-10 bg-[url(/resource/background.jpg)] bg-cover bg-center bg-fixed"
            />

            {/* ── Page content ── */}
            <div className="relative">
                <NavbarHome />
                <HeroSection />
                <About />
                <ProgramSection />
                <GallerySection />
                <FasilitasSection />
                <TestimonialSection />
                <FooterHome />
            </div>

            {/* ── Floating scroll-to-top ── */}
            <FloatingScrollButton />
        </>
    );
}
