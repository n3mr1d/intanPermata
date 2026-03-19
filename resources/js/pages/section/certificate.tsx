import { cn } from '@/lib/utils';
import {
    User,
    Calendar,
    MapPin,
    Hash,
    Award,
    CheckCircle2,
    Globe,
    EyeOff,
    FileImage,
    ChevronDown,
    ExternalLink,
} from 'lucide-react';
import React, { useState } from 'react';

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

function CertificateMockup({ cert }: { cert: any }) {
    const isJFT = cert.issuer === 'JAPAN FOUNDATION';

    return (
        <div className="relative mt-2 overflow-hidden rounded-xl border border-gray-200 bg-[#fefdfb] p-4 shadow-sm sm:p-6 dark:border-zinc-700/50 dark:bg-zinc-800/90 transition-all duration-500 hover:shadow-lg">
            {/* Japanese decorative subtle background */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-rose-400 via-rose-600 to-rose-400 opacity-80"></div>
            <div
                className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.05] pointer-events-none mix-blend-multiply dark:mix-blend-plus-lighter"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '16px 16px' }}
            ></div>

            {/* Hanko Watermark/Stamp */}
            <div className="absolute right-6 bottom-10 z-0 flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-rose-600/30 opacity-40 rotate-[15deg]">
                <div className="text-center text-xl font-bold text-rose-600/40">
                    <span className="block border-b-2 border-rose-600/20 pb-0.5 mb-0.5 tracking-widest">合 格</span>
                    <span className="text-sm font-black tracking-widest">PASS</span>
                </div>
            </div>

            <div className="relative z-10 font-sans text-gray-800 dark:text-gray-200">
                {/* Header */}
                <div className="mb-5 flex items-start justify-between border-b border-gray-300/40 pb-4 dark:border-zinc-700">
                    <div className="pr-4">
                        <h4 className="text-sm font-bold text-gray-900 sm:text-base dark:text-white">
                            {isJFT ? '国際交流基金日本語基礎テスト 判定結果通知書' : '飲食料品製造業特定技能1号技能測定試験'}
                        </h4>
                        <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                            {isJFT ? 'Japan Foundation Test for Basic Japanese Notification of assessment results' : 'Notification of results for Food and beverage manufacturing industry Specified Skilled Worker (i) test'}
                        </p>
                    </div>
                    {isJFT ? (
                        <div className="text-right text-[10px] leading-tight font-black sm:text-xs text-indigo-800 dark:text-indigo-400">
                            JAPAN<br />FOUNDATION
                        </div>
                    ) : (
                        <div className="text-right text-base font-black tracking-widest text-blue-800 sm:text-lg dark:text-blue-400">
                            OTAFF
                        </div>
                    )}
                </div>

                {/* Body details */}
                <div className="flex flex-col gap-6 sm:flex-row">
                    {/* Photo - Censored */}
                    <div className="relative flex h-32 w-24 shrink-0 flex-col items-center justify-center rounded bg-gray-200/50 shadow-inner dark:bg-zinc-700/50">
                        <User className="h-10 w-10 text-gray-400 dark:text-gray-500" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[3px] rounded">
                            <EyeOff className="h-5 w-5 text-white/90 drop-shadow-md" />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 space-y-2.5 text-[11px] sm:text-xs">
                        <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-center gap-2">
                            <span className="text-gray-500">受験番号 <span className="block text-[9px] text-gray-400">Reg. No</span></span>
                            <div className="w-fit bg-zinc-800 px-2 py-0.5 text-zinc-800 rounded select-none filter blur-[3px] cursor-help transition-all hover:blur-[2px]" title="Censored for privacy">
                                {cert.registrationNumber}
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-center gap-2">
                            <span className="text-gray-500">氏名 <span className="block text-[9px] text-gray-400">Name</span></span>
                            <div className="w-fit bg-zinc-800 px-2 py-0.5 text-zinc-800 rounded select-none filter blur-[3px] cursor-help transition-all hover:blur-[2px]" title="Censored for privacy">
                                {cert.name}
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-center gap-2">
                            <span className="text-gray-500">国籍 <span className="block text-[9px] text-gray-400">Nationality</span></span>
                            <span className="font-semibold text-gray-900 dark:text-gray-100">Indonesia</span>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-center gap-2">
                            <span className="text-gray-500">生年月日 <span className="block text-[9px] text-gray-400">Date of Birth</span></span>
                            <div className="w-fit bg-zinc-800 px-2 py-0.5 text-zinc-800 rounded select-none filter blur-[3px] cursor-help transition-all hover:blur-[2px]" title="Censored for privacy">
                                ****/**/**
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-center gap-2">
                            <span className="text-gray-500">受験地 <span className="block text-[9px] text-gray-400">Test Location</span></span>
                            <span className="font-semibold text-gray-900 dark:text-gray-100">{cert.location}</span>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-center gap-2">
                            <span className="text-gray-500">受験日 <span className="block text-[9px] text-gray-400">Test Date</span></span>
                            <span className="font-semibold text-gray-900 dark:text-gray-100">{cert.date}</span>
                        </div>
                    </div>
                </div>

                {/* Footer info */}
                <div className="mt-6 border-t border-gray-300/40 pt-4 dark:border-zinc-700">
                    <p className="mb-2 text-[10px] text-gray-500">試験の結果は以下の通りです。<br />Your test results are as follows.</p>
                    <div className="grid grid-cols-[100px_1fr] sm:grid-cols-[120px_1fr] items-center gap-2 text-xs sm:text-sm font-bold border border-emerald-200/50 bg-emerald-50/50 p-2 rounded dark:border-emerald-900/30 dark:bg-emerald-900/10">
                        <span className="text-gray-600 dark:text-gray-400">試験結果 <span className="text-[9px] font-normal">Exam Result</span></span>
                        <span className="text-base text-emerald-600 dark:text-emerald-400 tracking-wide">{isJFT ? '総合得点 : 239 点 / A2' : 'Pass'}</span>
                    </div>
                </div>
            </div>

            {/* Overlay notification of censorship */}
            <div className="relative z-20 mt-5 flex items-center justify-center gap-2 rounded-md bg-zinc-100/80 py-2 border border-zinc-200/50 text-[10px] text-zinc-500 sm:text-xs dark:bg-zinc-800/80 dark:border-zinc-700 dark:text-zinc-400 shadow-sm backdrop-blur-sm">
                <EyeOff className="h-3 w-3 sm:h-4 sm:w-4 text-zinc-400" />
                <span className="font-medium tracking-wide">CONFIDENTIAL INFORMATION BLURRED</span>
            </div>
        </div>
    );
}

function CertificateCard({ cert }: { cert: any }) {
    const [showPreview, setShowPreview] = useState(false);

    return (
        <div className="group flex h-full flex-col rounded-3xl border border-rose-100/50 bg-white/60 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/10 sm:p-8 dark:border-rose-900/20 dark:bg-zinc-900/80">
            {/* Card Header */}
            <div className="mb-8 flex items-start justify-between gap-4">
                <div
                    className="rounded-2xl p-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md bg-gradient-to-br from-rose-50 to-white text-rose-600 border border-rose-100 dark:from-rose-950/40 dark:to-zinc-900 dark:text-rose-400 dark:border-rose-900/30"
                >
                    {cert.icon}
                </div>
                <div className="flex flex-col items-end gap-1">
                    <span
                        className="inline-flex items-center rounded-full border border-rose-200/60 bg-rose-50/50 px-4 py-1.5 text-[10px] font-black tracking-[0.15em] uppercase text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20"
                    >
                        {cert.issuer}
                    </span>
                    <span className="text-[10px] tracking-widest text-rose-400 font-bold opacity-80">
                        {cert.issuer === 'JAPAN FOUNDATION' ? '公式認定' : '技能測定'}
                    </span>
                </div>
            </div>

            <div className="mb-8 flex-grow">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
                    {cert.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-gray-500 dark:text-gray-400">
                    {cert.issuerFullName}
                </p>
            </div>

            {/* Info Grid - Styled with Japanese minimalism */}
            <div className="mb-8 grid grid-cols-2 gap-x-4 gap-y-6 rounded-2xl border border-gray-100/50 bg-[#fefdfb]/60 p-5 dark:border-zinc-800/50 dark:bg-zinc-800/40">
                <div className="space-y-1 border-l-[3px] border-rose-200/50 pl-3">
                    <div className="mb-1 flex items-center gap-2 text-gray-400 dark:text-gray-500">
                        <User className="h-3.5 w-3.5" />
                        <span className="text-[10px] font-bold tracking-wider uppercase">Name / 氏名</span>
                    </div>
                    <p className="truncate text-sm font-semibold text-gray-800 dark:text-gray-200" title={cert.name}>
                        {cert.name}
                    </p>
                </div>
                <div className="space-y-1 border-l-[3px] border-rose-200/50 pl-3">
                    <div className="mb-1 flex items-center gap-2 text-gray-400 dark:text-gray-500">
                        <Hash className="h-3.5 w-3.5" />
                        <span className="text-[10px] font-bold tracking-wider uppercase">Reg No / 番号</span>
                    </div>
                    <p className="font-mono text-sm font-semibold break-all text-gray-800 dark:text-gray-200">
                        {cert.registrationNumber}
                    </p>
                </div>
                <div className="space-y-1 border-l-[3px] border-rose-200/50 pl-3">
                    <div className="mb-1 flex items-center gap-2 text-gray-400 dark:text-gray-500">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="text-[10px] font-bold tracking-wider uppercase">Date / 日付</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {cert.date}
                    </p>
                </div>
                <div className="space-y-1 border-l-[3px] border-rose-200/50 pl-3">
                    <div className="mb-1 flex items-center gap-2 text-gray-400 dark:text-gray-500">
                        <MapPin className="h-3.5 w-3.5" />
                        <span className="text-[10px] font-bold tracking-wider uppercase">Location / 場所</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {cert.location}
                    </p>
                </div>
            </div>

            {/* Result Display */}
            <div className="relative mb-2 overflow-hidden rounded-2xl bg-gradient-to-br from-rose-500 to-rose-600 p-6 text-white shadow-md transition-all duration-300 group-hover:shadow-rose-500/20 dark:from-rose-900 dark:to-rose-950 border border-rose-400/30">
                {/* Subtle Japanese geometric pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}
                ></div>

                {/* Decorative background icon */}
                <div className="absolute -top-4 -right-4 p-4 opacity-[0.15] transition-transform duration-700 ease-out group-hover:rotate-12 group-hover:scale-110">
                    <CheckCircle2 className="h-32 w-32 filter blur-[1px]" />
                </div>

                {/* Theme Labels */}
                <div className="relative z-10 flex items-center gap-2 mb-3">
                    <span className="rounded border border-rose-200/40 bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-widest text-white backdrop-blur-sm sm:text-xs shadow-sm">
                        試験結果
                    </span>
                    <span className="text-xs font-medium tracking-widest text-rose-100 uppercase opacity-90 drop-shadow-sm">
                        Exam Result
                    </span>
                </div>

                {/* Score / Result */}
                <div className="relative z-10 mb-2 flex items-baseline gap-3">
                    <span className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-4xl">
                        {cert.result}
                    </span>
                    {cert.maxScore && (
                        <span className="text-lg font-bold text-rose-200 drop-shadow-sm">
                            / {cert.maxScore}
                        </span>
                    )}
                </div>

                {/* Validity Badge */}
                <div className="relative z-10 mt-4 inline-flex items-center gap-2 rounded-lg bg-black/10 px-3 py-1.5 backdrop-blur-md border border-white/10 shadow-sm">
                    <span className="text-[10px] font-bold text-rose-100 opacity-90">有効期限</span>
                    <span className="text-xs font-medium tracking-wide text-white">
                        Valid for {cert.validity}
                    </span>
                </div>
            </div>

            {/* Certificate Actions Section */}
            <div className="mt-6 flex flex-col gap-3 border-t border-gray-100/60 pt-6 dark:border-zinc-800/80">
                {/* View Original PDF Button */}
                {cert.pdfUrl && (
                    <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/pdf flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 p-4 text-left shadow-sm transition-all hover:from-rose-600 hover:to-rose-700 hover:shadow-md dark:from-rose-600/80 dark:to-rose-800/80 dark:hover:from-rose-500 dark:hover:to-rose-700"
                    >
                        <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-white/20 p-2 text-white backdrop-blur-sm transition-transform group-hover/pdf:scale-110">
                                <ExternalLink className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="flex items-center gap-2 text-sm font-bold tracking-wider text-white uppercase drop-shadow-sm">
                                    Original Certificate
                                    <span className="rounded-sm bg-white/20 px-1.5 py-0.5 text-[8px] font-black tracking-widest text-white backdrop-blur-md">原本</span>
                                </h4>
                                <p className="text-[10px] sm:text-xs text-rose-100 mt-0.5 opacity-90">
                                    Open official PDF document
                                </p>
                            </div>
                        </div>
                    </a>
                )}

                {/* Replica Toggle Button */}
                <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="group/btn flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-gray-50/50 to-white/30 p-4 text-left border border-gray-100/50 transition-all hover:border-rose-200 hover:shadow-sm dark:from-zinc-800/30 dark:to-zinc-800/10 dark:hover:border-rose-900/30 dark:border-zinc-800/50"
                >
                    <div className="flex items-center gap-3">
                        <div className={`rounded-lg p-2 transition-colors ${showPreview ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400' : 'bg-rose-50/50 text-rose-400 group-hover/btn:bg-rose-100 group-hover/btn:text-rose-500 dark:bg-zinc-800 dark:text-rose-500/50'}`}>
                            <FileImage className="h-5 w-5" />
                        </div>
                        <div>
                            <h4 className="flex items-center gap-2 text-sm font-bold tracking-wider text-gray-900 uppercase dark:text-white">
                                Certificate Replica
                                <span className="rounded-sm bg-rose-100 px-1.5 py-0.5 text-[8px] font-black tracking-widest text-rose-600 dark:bg-rose-900/50 dark:text-rose-400">見本</span>
                            </h4>
                            <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                View redacted official document
                            </p>
                        </div>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${showPreview ? 'rotate-180 text-rose-500' : 'group-hover/btn:translate-y-0.5'}`} />
                </button>

                {/* The expanding mockup */}
                <div className={`grid transition-all duration-300 ease-in-out ${showPreview ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                        <CertificateMockup cert={cert} />
                    </div>
                </div>
            </div>

            {/* Japan Foundation Test Specific Details (Progress Bars) */}
            {cert.details && (
                <div className="mt-6 border-t border-gray-100/60 pt-6 dark:border-zinc-800/80">
                    <div className="mb-5 flex items-center justify-between">
                        <h4 className="flex items-center gap-2 text-sm font-bold tracking-wider text-gray-900 uppercase dark:text-white">
                            Score Breakdown
                            <span className="rounded-sm bg-gray-100 px-1.5 py-0.5 text-[8px] font-black tracking-widest text-gray-600 dark:bg-zinc-800 dark:text-gray-400">内訳</span>
                        </h4>
                        <span className="rounded-full border border-rose-200/50 bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700 dark:border-rose-900/30 dark:bg-rose-900/20 dark:text-rose-400">
                            A2 Level Achieved
                        </span>
                    </div>
                    <div className="space-y-4">
                        {cert.details.map((detail: any, idx: number) => (
                            <div key={idx} className="group/bar">
                                <div className="mb-1.5 flex items-center justify-between">
                                    <span className="text-xs font-semibold text-gray-600 transition-colors group-hover/bar:text-rose-600 dark:text-gray-400 dark:group-hover/bar:text-rose-400">
                                        {detail.label}
                                    </span>
                                    <span className="text-xs font-bold text-gray-900 dark:text-gray-200">
                                        {detail.score}%
                                    </span>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100/80 shadow-inner dark:bg-zinc-800/50">
                                    <div
                                        className={`relative h-full rounded-full transition-all duration-1000 ease-out ${detail.score === 100
                                            ? 'bg-gradient-to-r from-rose-400 to-rose-500'
                                            : 'bg-gradient-to-r from-rose-300 to-rose-400'
                                            }`}
                                        style={{ width: `${detail.score}%` }}
                                    >
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 h-full w-full translate-x-[-100%] -skew-x-12 bg-white/20 transition-transform duration-1000 ease-in-out group-hover/bar:translate-x-[200%]"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default function Certificate() {
    const certificates = [
        {
            id: 1,
            title: 'Food and beverage manufacturing industry Specified Skilled Worker (i) test',
            issuer: 'OTAFF',
            issuerFullName: 'The Organization for Technical Skill Assessment of Foreign Workers in Food Industry',
            registrationNumber: '12345',
            name: 'Dante Dantca',
            date: '2025/11/28',
            location: 'Indonesia',
            result: 'Pass',
            validity: '10 Years',
            details: null,
            pdfUrl: 'resource/Prometric_Report_View.pdf',
            icon: <Award className="h-8 w-8 md:h-10 md:w-10" />,
        },
        {
            id: 2,
            title: 'Japan Foundation Test for Basic Japanese (JFT-Basic)',
            issuer: 'JAPAN FOUNDATION',
            issuerFullName: 'Japan Foundation Test for Basic Japanese Notification of assessment results',
            registrationNumber: '123456',
            name: 'Dante Dantca',
            date: '2026/03/06',
            location: 'Indonesia',
            result: 'Total Score: 239',
            maxScore: 250,
            validity: 'Permanent',
            pdfUrl: '/resource/Prometric_Report_View-2.pdf',
            details: [
                { label: 'Script and Vocabulary', score: 100 },
                { label: 'Conversation and Expression', score: 100 },
                { label: 'Listening Comprehension', score: 100 },
                { label: 'Reading Comprehension', score: 83 },
            ],
            icon: <Globe className="h-8 w-8 md:h-10 md:w-10" />,
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#faf9f6] py-24 dark:bg-zinc-950">
            {/* Background Decorations */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent dark:via-rose-900/50"></div>

            {/* Soft Washi Paper textured overlay for the entire section */}
            <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply pointer-events-none dark:opacity-[0.02]"
                style={{ backgroundImage: 'radial-gradient(#e5e5e5 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-rose-50/50 blur-3xl dark:bg-rose-900/5"></div>
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-orange-50/50 blur-3xl dark:bg-orange-900/5"></div>

            {/* ── Section Header ── */}
            <div className="relative z-10 mb-16 text-center">
                {/* JP label */}
                <div className="mb-4 inline-flex items-center gap-3">
                    <div className="h-px w-10 bg-gradient-to-r from-transparent to-rose-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-rose-500">
                        資格・認定
                    </span>
                    <div className="h-px w-10 bg-gradient-to-l from-transparent to-rose-400" />
                </div>

                <h2 className="mb-4 text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
                    Licenses &{' '}
                    <span className="relative inline-block">
                        <span className="relative z-10 bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-transparent drop-shadow-sm">
                            Certifications
                        </span>
                        <span
                            aria-hidden="true"
                            className="absolute -bottom-1 left-0 h-2 w-full -skew-x-6 bg-rose-100/80 dark:bg-rose-900/50"
                        />
                    </span>
                </h2>

                {/* Wave divider */}
                <div className="mb-6 flex justify-center">
                    <WaveMotif className="h-5 w-36 text-rose-300/80" />
                </div>

                <p className="mx-auto max-w-2xl text-sm sm:text-base font-medium leading-relaxed text-neutral-500 px-4 dark:text-zinc-400">
                    Hasil penilaian resmi yang menunjukkan tingkat
                    kemahiran teknis dan kemampuan bahasa Jepang untuk bekerja di industri Jepang.
                </p>
            </div>

            <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-start gap-8 lg:gap-12 xl:grid-cols-2">
                    {certificates.map((cert) => (
                        <CertificateCard key={cert.id} cert={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
}
