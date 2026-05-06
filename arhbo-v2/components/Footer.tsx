import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-coffee text-pearl/80 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-gold mb-3" style={{ fontFamily: 'Playfair Display' }}>ارحبوا</div>
            <p className="text-sm leading-relaxed text-pearl/60">نبيع الترحيب، مو الرابط. منصة الدعوات الذكية عبر واتساب.</p>
            <p className="text-xs text-pearl/40 mt-4">ARHBO COMPUTERIZED DESIGN SERVICES<br/>Abu Dhabi, UAE</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-gold text-sm font-semibold mb-4">المنتج</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="hover:text-gold transition-colors">كيف تعمل</Link></li>
              <li><Link href="/features" className="hover:text-gold transition-colors">المميزات</Link></li>
              <li><Link href="/templates" className="hover:text-gold transition-colors">القوالب</Link></li>
              <li><Link href="/pricing" className="hover:text-gold transition-colors">الأسعار</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gold text-sm font-semibold mb-4">الشركة</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-gold transition-colors">عن ارحبوا</Link></li>
              <li><Link href="/customers" className="hover:text-gold transition-colors">قصص النجاح</Link></li>
              <li><Link href="/blog" className="hover:text-gold transition-colors">المدونة</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gold text-sm font-semibold mb-4">قانوني</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="hover:text-gold transition-colors">الشروط والأحكام</Link></li>
              <li><Link href="/privacy" className="hover:text-gold transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/faq" className="hover:text-gold transition-colors">الأسئلة الشائعة</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pearl/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-pearl/40">© 2026 ارحبوا. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2 text-xs text-pearl/40">
            <span>🇦🇪</span>
            <span>صُنع بفخر في الإمارات</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
