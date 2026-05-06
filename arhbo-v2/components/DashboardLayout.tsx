'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navGroups = [
  {
    label: 'الرئيسي',
    items: [
      { href: '/dash/dashboard', icon: '🏠', label: 'لوحة التحكم' },
      { href: '/dash/analytics', icon: '📊', label: 'التحليلات' },
    ],
  },
  {
    label: 'الدعوات',
    items: [
      { href: '/dash/invitations', icon: '✉️', label: 'دعواتي' },
      { href: '/dash/invitations/new', icon: '➕', label: 'دعوة جديدة' },
    ],
  },
  {
    label: 'الحساب',
    items: [
      { href: '/dash/billing', icon: '💳', label: 'الفوترة' },
      { href: '/dash/billing/plans', icon: '⬆️', label: 'الترقية' },
      { href: '/dash/billing/invoices', icon: '🧾', label: 'الفواتير' },
    ],
  },
  {
    label: 'الإعدادات',
    items: [
      { href: '/dash/settings/profile', icon: '👤', label: 'الملف الشخصي' },
      { href: '/dash/settings/whatsapp', icon: '💬', label: 'واتساب' },
      { href: '/dash/settings/notifications', icon: '🔔', label: 'الإشعارات' },
      { href: '/dash/settings/team', icon: '👥', label: 'الفريق' },
    ],
  },
  {
    label: 'الدعم',
    items: [
      { href: '/dash/help', icon: '❓', label: 'المساعدة' },
      { href: '/dash/support', icon: '🎧', label: 'الدعم الفني' },
    ],
  },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-pearl overflow-hidden">
      {/* Overlay mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-20 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:relative z-30 h-full w-64 bg-coffee flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
        {/* Logo */}
        <div className="p-5 border-b border-pearl/10">
          <Link href="/" className="text-2xl font-bold text-gold" style={{ fontFamily: 'Playfair Display' }}>
            ارحبوا
          </Link>
          <div className="text-xs text-pearl/40 mt-0.5">لوحة التحكم</div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-3">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-5">
              <div className="text-pearl/30 text-xs font-medium px-3 mb-2 tracking-wider">{group.label}</div>
              {group.items.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 text-sm transition-colors ${
                      active ? 'bg-gold/20 text-gold font-semibold' : 'text-pearl/70 hover:bg-pearl/5 hover:text-pearl'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          ))}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-pearl/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold/30 flex items-center justify-center text-gold font-bold text-sm">م</div>
            <div>
              <div className="text-pearl text-sm font-medium">المستخدم</div>
              <div className="text-pearl/40 text-xs">الباقة: اللمات</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-gold/10 px-4 h-14 flex items-center justify-between flex-shrink-0">
          <button className="md:hidden text-coffee" onClick={() => setSidebarOpen(true)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            <Link href="/dash/invitations/new" className="btn-gold text-sm px-4 py-2 rounded-lg">+ دعوة جديدة</Link>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
