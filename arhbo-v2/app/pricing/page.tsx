import Link from 'next/link'
import LandingNav from '@/components/LandingNav'
import Footer from '@/components/Footer'

const plans = [
  {
    id: 'free',
    name: 'الأساسية',
    nameEn: 'Basic',
    price: 0,
    period: '',
    guests: 15,
    color: 'border-gray-200',
    badge: null,
    features: [
      '15 دعوة',
      'قالب واحد',
      'مشاركة عبر رابط',
      'علامة "صُنع بواسطة ارحبوا"',
    ],
    cta: 'ابدأ مجاناً',
    href: '/register',
    highlight: false,
  },
  {
    id: 'lamat',
    name: 'اللمات',
    nameEn: 'Lamat',
    price: 59,
    period: 'لكل مناسبة',
    guests: 50,
    color: 'border-gold',
    badge: 'الأكثر طلباً',
    features: [
      '50 دعوة',
      '3 قوالب مميزة',
      'بدون علامة ارحبوا',
      'تأكيد الحضور تلقائي',
      'لوحة تحكم كاملة',
    ],
    cta: 'اشترك الآن',
    href: '/register?plan=lamat',
    highlight: true,
  },
  {
    id: 'jalsat',
    name: 'الجلسات',
    nameEn: 'Jalsat',
    price: 99,
    period: 'لكل مناسبة',
    guests: 100,
    color: 'border-palm',
    badge: null,
    features: [
      '100 دعوة',
      'كل القوالب',
      'بطاقة QR لكل ضيف',
      'تصدير PDF',
      'تذكيرات تلقائية',
    ],
    cta: 'اشترك الآن',
    href: '/register?plan=jalsat',
    highlight: false,
  },
  {
    id: 'mailes',
    name: 'الميلس',
    nameEn: 'Mailes',
    price: 149,
    period: 'لكل مناسبة',
    guests: 200,
    color: 'border-palm',
    badge: null,
    features: [
      '200 دعوة',
      'كل مميزات الجلسات',
      'فصل قوائم رجال / نساء',
      'Valet QR',
      'Dress Code بصري',
    ],
    cta: 'اشترك الآن',
    href: '/register?plan=mailes',
    highlight: false,
  },
  {
    id: 'kheima',
    name: 'الخيمة',
    nameEn: 'Kheima',
    price: 249,
    period: 'لكل مناسبة',
    guests: 500,
    color: 'border-coffee',
    badge: 'للمناسبات الكبيرة',
    features: [
      '500 دعوة',
      'كل مميزات الميلس',
      'بوابة شركاء (عمولة 20%)',
      'دعم أولوية',
      'تقارير متقدمة',
    ],
    cta: 'اشترك الآن',
    href: '/register?plan=kheima',
    highlight: false,
  },
  {
    id: 'modheef',
    name: 'المضيف',
    nameEn: 'Modheef',
    price: 0,
    period: 'تواصل معنا',
    guests: 999,
    color: 'border-coffee',
    badge: 'للمؤسسات',
    features: [
      'دعوات غير محدودة',
      'White Label كامل',
      'API مخصص',
      'مدير حساب مخصص',
      'تكامل مع الفنادق',
      'لوحة تحكم مؤسسية',
    ],
    cta: 'تواصل معنا',
    href: '/contact',
    highlight: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-pearl">
      <LandingNav />

      <div className="pt-28 pb-8 px-4 text-center">
        <h1 className="text-5xl font-bold text-coffee mb-4" style={{ fontFamily: 'Playfair Display' }}>الأسعار والباقات</h1>
        <p className="text-palm text-lg">ابدأ مجاناً وترقّى حسب احتياجك</p>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.id} className={`relative rounded-2xl p-6 border-2 bg-white ${p.color} ${p.highlight ? 'shadow-2xl scale-105' : 'shadow-sm'} transition-all hover:shadow-lg`}>
              {p.badge && (
                <div className="absolute -top-3 right-5 bg-gold text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {p.badge}
                </div>
              )}

              <div className="mb-4">
                <div className="text-xs text-palm/60 font-medium tracking-wider uppercase mb-1">{p.nameEn}</div>
                <h3 className="text-2xl font-bold text-coffee">{p.name}</h3>
              </div>

              <div className="mb-4">
                {p.price === 0 && p.period === '' ? (
                  <div className="text-4xl font-bold text-gold">مجاناً</div>
                ) : p.period === 'تواصل معنا' ? (
                  <div className="text-2xl font-bold text-coffee">حسب الاتفاق</div>
                ) : (
                  <>
                    <div className="text-4xl font-bold text-gold">{p.price} <span className="text-lg font-normal text-palm">د.إ</span></div>
                    <div className="text-sm text-palm/70">{p.period}</div>
                  </>
                )}
                <div className="text-sm text-palm mt-1">
                  {p.guests === 999 ? 'دعوات غير محدودة' : `حتى ${p.guests} دعوة`}
                </div>
              </div>

              <ul className="space-y-2.5 mb-6 min-h-[140px]">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-palm">
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${p.highlight ? 'btn-gold' : 'btn-outline'}`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-12 px-4 text-center">
        <p className="text-palm">لديك سؤال عن الباقات؟</p>
        <Link href="/faq" className="text-gold hover:underline font-medium">اقرأ الأسئلة الشائعة →</Link>
      </section>

      <Footer />
    </div>
  )
}
