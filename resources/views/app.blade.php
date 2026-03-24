<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark'=> ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="LPK Puji Intan Shafira - Lembaga Pelatihan Kerja terpercaya untuk persiapan karir di Jepang. Program magang, Tokutei Ginou (SSW), dan pelatihan Bahasa Jepang intensif.">
    <meta name="keywords" content="LPK Puji Intan Shafira, LPK Malang, LPK Jepang, Magang Jepang, Pelatihan Kerja Jepang, Kerja di Jepang, Tokutei Ginou, SSW Jepang, Ginou Jisshuu, Kursus Bahasa Jepang Malang">
    <meta name="author" content="LPK Puji Intan Shafira">
    <meta name="robots" content="index, follow">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:title" content="LPK Puji Intan Shafira - Wujudkan Karir Impian di Jepang">
    <meta property="og:description" content="Lembaga Pelatihan Kerja terpercaya untuk persiapan karir di Jepang. Program magang, Tokutei Ginou (SSW), dan pelatihan Bahasa Jepang intensif berkualitas.">
    <meta property="og:image" content="{{ asset('resource/hero.png') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ url()->current() }}">
    <meta property="twitter:title" content="LPK Puji Intan Shafira - Wujudkan Karir Impian di Jepang">
    <meta property="twitter:description" content="Lembaga Pelatihan Kerja terpercaya untuk persiapan karir di Jepang. Program magang, Tokutei Ginou (SSW), dan pelatihan Bahasa Jepang intensif berkualitas.">
    <meta property="twitter:image" content="{{ asset('resource/hero.png') }}">

    <!-- Canonical URL -->
    <link rel="canonical" href="{{ url()->current() }}">

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json"> {!! json_encode(['@context' => 'https://schema.org', '@type' => 'EducationalOrganization', 'name' => 'LPK Puji Intan Shafira', 'alternateName' => 'Puji Intan Shafira Japanese Language Center', 'description' => 'Lembaga Pelatihan Kerja terpercaya di Malang untuk persiapan karir di Jepang. Program magang, Tokutei Ginou (SSW), dan pelatihan Bahasa Jepang intensif.', 'url' => url('/'), 'logo' => asset('resource/logo.png'), 'address' => ['@type' => 'PostalAddress', 'streetAddress' => 'Jl. S. Supriadi No.23 B9, RT.06/RW.04, Sukun', 'addressLocality' => 'Malang', 'addressRegion' => 'Jawa Timur', 'postalCode' => '65148', 'addressCountry' => 'ID'], 'contactPoint' => ['@type' => 'ContactPoint', 'telephone' => '+62-895-0639-9600', 'contactType' => 'customer service', 'areaServed' => 'ID', 'availableLanguage' => ['Indonesian', 'Japanese']], 'sameAs' => ['https://www.instagram.com/lpk_intan_puji_shafira', 'https://facebook.com/lpk.puji.intan.shafira']], JSON_UNESCAPED_SLASHES) !!} </script>

    <title inertia>LPK Puji Intan Shafira</title>

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>