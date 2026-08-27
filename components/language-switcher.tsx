'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // Only show the language switcher on the blog pages
  if (!pathname.startsWith('/blog')) {
    return null;
  }

  const handleSwitch = () => {
    const nextLocale = locale === 'en' ? 'bn' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={handleSwitch}
      className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50 flex items-center justify-center gap-2 border border-border/40 px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 bg-background/80 backdrop-blur-md shadow-xl shadow-black/20"
    >
      <span className={locale === 'en' ? 'text-emerald-500 group-hover:text-white' : 'opacity-70'}>EN</span>
      <span className="opacity-40">|</span>
      <span className={locale === 'bn' ? 'text-emerald-500 group-hover:text-white' : 'opacity-70'}>BN</span>
    </button>
  );
}
