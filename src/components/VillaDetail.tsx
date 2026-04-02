"use client";

import { Villa, VillaSuite, getOtherVillas } from "@/data/villas";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import VillaGallery from "@/components/VillaGallery";
import { useMemo } from "react";
import { useLang } from "@/components/LangContext";

/* ── Icon map for amenities ── */
function AmenityIcon({ label }: { label: string }) {
  const l = label.toLowerCase();

  // Pool / Water
  if (l.includes("pool") || l.includes("swim"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17.25c1.5 1 3 1.5 4.5 0s3-1 4.5 0 3 1.5 4.5 0 3-1 4.5 0M3 21c1.5 1 3 1.5 4.5 0s3-1 4.5 0 3 1.5 4.5 0 3-1 4.5 0M12 3v9m-3-3l3 3 3-3" />
      </svg>
    );

  // Hot tub / Jacuzzi / Spa
  if (l.includes("jacuzzi") || l.includes("hot tub") || l.includes("spa") || l.includes("steam"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3v2.25M14.25 3v2.25M9.75 3a2.25 2.25 0 00-2.25 2.25v.75h9V5.25A2.25 2.25 0 0014.25 3M4.5 9.75h15M4.5 9.75A2.25 2.25 0 002.25 12v3a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 15v-3a2.25 2.25 0 00-2.25-2.25M8 6v1.5M12 6v1.5M16 6v1.5" />
      </svg>
    );

  // Fire pit / Fireplace
  if (l.includes("fire"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    );

  // Gym / Exercise
  if (l.includes("gym") || l.includes("exercise") || l.includes("fitness"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h1.5m15 0H21m-3-4.5v9m-12-9v9M5.25 7.5h1.5v9h-1.5v-9zm12 0h1.5v9h-1.5v-9zM3 12h18" />
      </svg>
    );

  // Kitchen / BBQ / Dining
  if (l.includes("kitchen") || l.includes("bbq") || l.includes("grill") || l.includes("dining") || l.includes("gourmet"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.126-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12" />
      </svg>
    );

  // Sound / Music / SONOS
  if (l.includes("sound") || l.includes("sonos") || l.includes("music"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    );

  // TV / Entertainment / Screens
  if (l.includes("tv") || l.includes("entertainment") || l.includes("monitor") || l.includes("screen") || l.includes("smart tv") || l.includes("streaming"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    );

  // Wi-Fi / Internet
  if (l.includes("wi-fi") || l.includes("wifi") || l.includes("internet"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    );

  // AC / Air Conditioning
  if (l.includes("air conditioning") || l.includes("a/c") || l.includes("climate"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    );

  // Beach
  if (l.includes("beach") || l.includes("beachfront"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17.25c1.5 1 3 1.5 4.5 0s3-1 4.5 0 3 1.5 4.5 0 3-1 4.5 0" />
      </svg>
    );

  // Security / Camera
  if (l.includes("security") || l.includes("camera"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    );

  // Parking
  if (l.includes("parking"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.029-.504 1.029-1.125v-3a3.75 3.75 0 00-3-3.675M6.75 7.125C6.75 4.331 9.007 2.25 12 2.25s5.25 2.081 5.25 4.875M6.75 7.125H4.875c-.621 0-1.125.504-1.125 1.125v4.5" />
      </svg>
    );

  // Laundry
  if (l.includes("laundry") || l.includes("washer") || l.includes("dryer"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm6 15a5 5 0 100-10 5 5 0 000 10zm0-3a2 2 0 100-4 2 2 0 000 4zM8 6h.01M10.5 6h.01" />
      </svg>
    );

  // Elevator
  if (l.includes("elevator"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-7.5L16.5 3m0 0L12 7.5m4.5-4.5v13.5" />
      </svg>
    );

  // Garden / Outdoor
  if (l.includes("garden") || l.includes("patio") || l.includes("deck") || l.includes("porch") || l.includes("lounge") || l.includes("outdoor lounge") || l.includes("lanai"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    );

  // Game / Pool table / Ping pong / Bocce / Golf / Putting
  if (l.includes("pool table") || l.includes("ping pong") || l.includes("game") || l.includes("bocce") || l.includes("putting") || l.includes("golf") || l.includes("simulator"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.491 48.491 0 01-4.163-.3c-1.07-.16-1.837-1.09-1.837-2.175v-.17c0-.627.263-1.195.68-1.587A2.248 2.248 0 017.5 3h9c.414 0 .804.168 1.093.443.417.392.68.96.68 1.587v.17c0 1.085-.768 2.014-1.837 2.174a48.39 48.39 0 01-4.163.301v0a.64.64 0 01-.657-.643zM9.228 16.5h5.544M9.228 16.5L4.5 21M9.228 16.5l2.772-6m5.544 6L21 21m-3.456-4.5l-2.772-6m0 0h-5.544" />
      </svg>
    );

  // Concierge / Service
  if (l.includes("concierge"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    );

  // Towels / Toiletries / Hair dryer / Essentials
  if (l.includes("towel") || l.includes("toiletries") || l.includes("hair dryer") || l.includes("kiehl") || l.includes("essentials"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    );

  // LED / Lighting
  if (l.includes("led") || l.includes("lighting"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    );

  // Workspace / Business
  if (l.includes("workspace") || l.includes("business"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    );

  // Sauna
  if (l.includes("sauna"))
    return (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    );

  // Default icon
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  );
}

export default function VillaDetail({ villa }: { villa: Villa }) {
  const { t, lang } = useLang();
  const otherVillas = useMemo(() => getOtherVillas(villa.slug, 3), [villa.slug]);

  return (
    <>
      <SmoothScroll />
      <Navbar />

      <main className="bg-dark min-h-screen page-transition">
        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          <img
            src={villa.image}
            alt={villa.name}
            className="w-full h-full object-cover"
          />
          {villa.galleryImages.length > 0 && (
            <button
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
              className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex items-center gap-2 px-4 py-2.5 bg-dark/60 backdrop-blur-sm border border-white/20 text-white text-xs tracking-[0.15em] uppercase hover:bg-dark/80 transition-colors duration-300 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
              </svg>
              {t("villa.viewGallery")}
            </button>
          )}
        </div>

        <div className="px-6 md:px-10 pt-12 md:pt-16 relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-6 md:mb-8">
            <ol className="flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-white/40">
              <li>
                <a href="/" className="hover:text-white transition-colors">{t("villa.home")}</a>
              </li>
              <li>/</li>
              <li>
                <a href="/villas" className="hover:text-white transition-colors">{t("villa.breadcrumbVillas")}</a>
              </li>
              <li>/</li>
              <li className="text-white/70">{villa.name}</li>
            </ol>
          </nav>

          {/* Main Content Grid */}
          <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-16 xl:gap-20">
            {/* Left Column — Main Content */}
            <div>
              {/* Title & Location */}
              <div className="mb-10 md:mb-14">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-4">
                  {villa.name}
                </h1>
                <div className="flex items-center gap-2 text-white/50">
                  <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="text-sm tracking-[0.1em] uppercase">{villa.location}</span>
                </div>
              </div>

              {/* Quick Stats Bar */}
              <div className="grid grid-cols-3 gap-4 mb-12 md:mb-16 border-y border-white/10 py-6">
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-extralight text-gold">{villa.bedrooms}</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-white/50 mt-1">{t("villa.bedrooms")}</p>
                </div>
                <div className="text-center border-x border-white/10">
                  <p className="text-2xl md:text-3xl font-extralight text-gold">{villa.bathrooms}</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-white/50 mt-1">{t("villa.bathrooms")}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-extralight text-gold">{villa.guests}</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-white/50 mt-1">{t("villa.guestsLabel")}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-14 md:mb-20">
                <p className="text-base md:text-lg text-white/70 leading-relaxed font-light">
                  {lang === "ES" && villa.descriptionES ? villa.descriptionES : villa.description}
                </p>
              </div>

              {/* Suites & Bedrooms */}
              {villa.suites && villa.suites.length > 0 && (
                <div className="mb-14 md:mb-20">
                  <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-8">
                    {t("villa.suitesTitle")}
                  </h2>
                  <div>
                    {villa.suites.map((suite, i) => (
                      <div key={i} className="grid grid-cols-[1fr_auto] gap-x-8 py-4 border-b border-white/5">
                        <div>
                          <p className="text-sm text-white/80 font-light">
                            {lang === "ES" && suite.nameES ? suite.nameES : suite.name}
                          </p>
                          {suite.note && (
                            <p className="text-xs text-white/40 mt-1 font-light">
                              {lang === "ES" && suite.noteES ? suite.noteES : suite.note}
                            </p>
                          )}
                        </div>
                        <p className="text-sm text-white/60 font-light text-right">
                          {lang === "ES" && suite.bedsES ? suite.bedsES : suite.beds}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Property Info */}
              <div className="mb-14 md:mb-20">
                <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-8">
                  {t("villa.propertyInfo")}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                  {(lang === "ES" && villa.propertyInfoES ? villa.propertyInfoES : villa.propertyInfo).map((info) => (
                    <div key={info.label}>
                      <p className="text-xs tracking-[0.15em] uppercase text-white/40 mb-1">
                        {info.label}
                      </p>
                      <p className="text-sm text-white/80 font-light">{info.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-14 md:mb-20">
                <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-8">
                  {t("villa.amenities")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {(lang === "ES" && villa.amenitiesES ? villa.amenitiesES : villa.amenities).map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 py-3 border-b border-white/5"
                    >
                      <span className="text-gold flex-shrink-0">
                        <AmenityIcon label={amenity} />
                      </span>
                      <span className="text-sm text-white/70 font-light">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features & Services */}
              <div className="mb-14 md:mb-20">
                <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-8">
                  {t("villa.features")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {(lang === "ES" && villa.featuresES ? villa.featuresES : villa.features).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 py-3 border-b border-white/5"
                    >
                      <svg
                        className="w-4 h-4 text-gold flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-white/70 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* House Policies */}
              {villa.policies && villa.policies.length > 0 && (
                <div className="mb-14 md:mb-20">
                  <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-8">
                    {t("villa.policiesTitle")}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                    {(lang === "ES" && villa.policiesES ? villa.policiesES : villa.policies).map((policy) => (
                      <div key={policy} className="flex items-start gap-3 py-3 border-b border-white/5">
                        <svg className="w-4 h-4 text-gold/50 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        <span className="text-sm text-white/70 font-light">{policy}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column — Sticky Book Now CTA */}
            <div className="hidden lg:block">
              <div className="sticky top-28">
                <div className="border border-white/10 p-8">
                  <h3 className="text-lg font-light mb-2">{villa.name}</h3>
                  <p className="text-sm text-white/50 mb-6">{villa.location}</p>

                  <div className="space-y-3 mb-8 border-t border-white/10 pt-6">
                    {(lang === "ES" && villa.highlightsES ? villa.highlightsES : villa.highlights).map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-sm text-white/60 font-light">{h}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className="block w-full text-center py-4 bg-gold text-dark text-sm tracking-[0.15em] uppercase font-semibold hover:bg-gold-light transition-colors duration-300"
                  >
                    {t("villa.bookNow")}
                  </a>

                  <div className="mt-6 text-center">
                    <a
                      href="tel:+17604852386"
                      className="text-xs tracking-[0.1em] text-white/40 hover:text-white transition-colors"
                    >
                      {t("villa.orCall")} +1 (760) 485-2386
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Book Now — fixed at bottom */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[120] bg-dark/95 backdrop-blur-sm border-t border-white/10 px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-light">{villa.name}</p>
                <p className="text-xs text-white/40">{villa.location}</p>
              </div>
              <a
                href="/contact"
                className="px-6 py-3 bg-gold text-dark text-xs tracking-[0.15em] uppercase font-semibold hover:bg-gold-light transition-colors"
              >
                {t("villa.bookNow")}
              </a>
            </div>
          </div>

          {/* Photo Gallery */}
          {villa.galleryImages.length > 0 && (
            <div id="gallery" className="mt-14 md:mt-20 scroll-mt-24">
              <VillaGallery images={villa.galleryImages} />
            </div>
          )}

          {/* More Properties */}
          <section className="py-20 md:py-28 border-t border-white/10">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-sm tracking-[0.2em] uppercase text-gold font-semibold mb-4">
                  {t("villa.moreProperties")}
                </h2>
                <h3 className="text-2xl md:text-3xl font-extralight">
                  {t("villa.exploreOther")}
                </h3>
              </div>
              <a
                href="/villas"
                className="link-underline text-sm tracking-[1.6px] uppercase text-white/60 hover:text-white transition-colors hidden md:block"
              >
                {t("villa.viewAll")}
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {otherVillas.map((v) => (
                <a
                  key={v.slug}
                  href={`/properties/${v.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden mb-4 aspect-[4/5]">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-normal mb-1 group-hover:text-gold transition-colors duration-300">
                        {v.name}
                      </h4>
                      <p className="text-sm text-white/50">{v.location}</p>
                    </div>
                    <div className="flex gap-4 text-xs text-white/40 mt-1">
                      <span>{v.bedrooms} {t("villa.beds")}</span>
                      <span>{v.guests} {t("villa.guestsLabel").toLowerCase()}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 md:hidden">
              <a
                href="/villas"
                className="link-underline text-sm tracking-[1.6px] uppercase text-white/60 hover:text-white transition-colors"
              >
                {t("villa.viewAll")}
              </a>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
