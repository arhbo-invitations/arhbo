'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function LandingNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-coffee" style={{ fontFamily: 'Playfair Display' }}>
          ارحبوا
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm text-palm">
          <Link href="/how-it-works" className="hover:text-gold transition-colors">كيف تعمل</Link>
          <Link href="/features" className="hover:text-gold transition-colors">المميزات</Link>
          <Link href="/templates" className="hover:text-gold transition-colors">القوالب</Link>
          <Link href="/pricing" className="hover:text-gold transition-colors">الأسعار</Link>
          <Link href="/faq" className="hover:text-gold transition-colors">الأسئلة الشائعة</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm text-palm hover:text-gold transition-colors">تسجيل الدخول</Link>
          <Link href="/register" className="btn-gold text-sm px-5 py-2 rounded-lg">ابدأ مجاناً</Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-coffee" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gold/10 px-4 py-4 flex flex-col gap-3 text-sm text-palm">
          <Link href="/how-it-works" onClick={() => setOpen(false)}>كيف تعمل</Link>
          <Link href="/features" onClick={() => setOpen(false)}>المميزات</Link>
          <Link href="/templates" onClick={() => setOpen(false)}>القوالب</Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>الأسعار</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>الأسئلة الشائعة</Link>
          <hr className="border-gold/20" />
          <Link href="/login" onClick={() => setOpen(false)}>تسجيل الدخول</Link>
          <Link href="/register" className="btn-gold text-center py-2 rounded-lg" onClick={() => setOpen(false)}>ابدأ مجاناً</Link>
        </div>
      )}
    </nav>
  )
}
