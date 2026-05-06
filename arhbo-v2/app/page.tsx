import Link from 'next/link'
import LandingNav from '@/components/LandingNav'
import Footer from '@/components/Footer'

const plans = [
  { id: 'free', name: 'الأساسية', price: 0, guests: 15, features: ['15 دعوة', 'قالب واحد', 'علامة ارحبوا'], popular: false },
  { id: 'lamat', name: 'اللمات', price: 59, guests: 50, features: ['50 دعوة', '3 قوالب', 'بدون علامة', 'تأكيد الحضور'], popular: true },
  { id: 'jalsat', name: 'الجلسات', price: 99, guests: 100, features: ['100 دعوة', 'كل القوالب', 'QR بطاقة', 'تصدير PDF'], popular: false },
]

const steps = [
  { n: '١', title: 'أنشئ دعوتك', desc: 'اختر قالبك وأدخل تفاصيل المناسبة في دقائق' },
  { n: '٢', title: 'أضف المدعوين', desc: 'ارفع قائمة الضيوف أو أضفهم مباشرة' },
  { n: '٣', title: 'أرسل عبر واتساب', desc: 'كل ضيف يستقبل دعوة شخصية باسمه' },
  { n: '٤', title: 'تابع الحضور', desc: 'شاهد من قَبِل ومن اعتذر لحظة بلحظة' },
]

const features = [
  { icon: '💬', title: 'واتساب رسمي', desc: 'إرسال من رقم موثّق — لا رسائل عشوائية' },
  { icon: '🎟️', title: 'بطاقة QR', desc: 'كل ضيف يحمل بطاقة دخوله الرقمية' },
  { icon: '📊', title: 'تتبع لحظي', desc: 'لوحة تحكم حية: قَبِل / اعتذر / لم يرد' },
  { icon: '🌙', title: 'ثيم إماراتي', desc: 'تصاميم مستوحاة من التراث الخليجي الأصيل' },
  { icon: '📅', title: 'تذكيرات تلقائية', desc: 'رسالة صباح المناسبة لكل الضيوف' },
  { icon: '👥', title: 'فصل الضيوف', desc: 'قوائم رجال / نساء / عائلات بسهولة' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-pearl">
      <LandingNav />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="sadu-bg" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-gold-pale text-palm text-sm px-4 py-2 rounded-full mb-6 border border-gold/20">
            <span>🇦🇪</span>
            <span>المنصة الأولى للدعوات الذكية في الإمارات</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-coffee mb-6 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
            نبيع الترحيب
            <br />
            <span className="text-gold">مو الرابط</span>
          </h1>

          <p className="text-xl text-palm max-w-2xl mx-auto mb-10 leading-relaxed">
            أرسل دعوتك الرقمية عبر واتساب بأسلوب إماراتي فاخر. كل ضيف يستقبل دعوة شخصية باسمه — وأنت تتابع الحضور لحظة بلحظة.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-gold text-lg px-8 py-4 rounded-xl inline-block">
              ابدأ مجاناً — 15 دعوة
            </Link>
            <Link href="/how-it-works" className="btn-outline text-lg px-8 py-4 rounded-xl inline-block">
              كيف تعمل؟
            </Link>
          </div>

          <p className="text-sm text-palm/60 mt-5">لا يحتاج بطاقة ائتمان · جاهز في 3 دقائق</p>
        </div>

        {/* Decorative cards */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {[
            { name: 'أحمد المنصوري', event: 'حفل زفاف', status: '✅ قبل الدعوة', color: 'bg-emerald-50 border-emerald-200' },
            { name: 'فاطمة الشامسي', event: 'مناسبة تخرج', status: '⏳ في الانتظار', color: 'bg-amber-50 border-amber-200' },
            { name: 'خالد الكعبي', event: 'ليلة العقد', status: '❌ اعتذر', color: 'bg-rose-50 border-rose-200' },
          ].map((g, i) => (
            <div key={i} className={`card-gold ${g.color} animate-fade-up`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-xs text-palm/60 mb-1">{g.event}</div>
              <div className="font-semibold text-coffee">{g.name}</div>
              <div className="text-sm mt-2">{g.status}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-coffee">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gold mb-3" style={{ fontFamily: 'Playfair Display' }}>كيف تعمل ارحبوا؟</h2>
            <p className="text-pearl/70">أربع خطوات — وتجهيز دعوتك في دقائق</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center text-gold text-2xl font-bold mx-auto mb-4">
                  {s.n}
                </div>
                <h3 className="text-gold font-semibold mb-2">{s.title}</h3>
                <p className="text-pearl/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works" className="btn-outline border-gold text-gold hover:bg-gold/10 px-8 py-3 rounded-xl inline-block">
              تفاصيل أكثر
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-coffee mb-3" style={{ fontFamily: 'Playfair Display' }}>كل ما تحتاجه</h2>
            <p className="text-palm">في منصة واحدة متكاملة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card-gold hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-coffee mb-2">{f.title}</h3>
                <p className="text-palm text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="py-20 px-4 bg-gold-pale">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-coffee mb-3" style={{ fontFamily: 'Playfair Display' }}>اختر باقتك</h2>
            <p className="text-palm">ابدأ مجاناً وترقّى عندما تحتاج</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.id} className={`relative rounded-2xl p-6 border-2 ${p.popular ? 'border-gold bg-white shadow-xl' : 'border-gold/20 bg-white'}`}>
                {p.popular && (
                  <div className="absolute -top-3 right-6 bg-gold text-white text-xs px-3 py-1 rounded-full">الأكثر طلباً</div>
                )}
                <h3 className="text-xl font-bold text-coffee mb-1">{p.name}</h3>
                <div className="text-3xl font-bold text-gold mb-1">
                  {p.price === 0 ? 'مجاناً' : `${p.price} د.إ`}
                </div>
                <p className="text-sm text-palm/70 mb-4">حتى {p.guests} دعوة</p>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-palm">
                      <span className="text-gold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${p.popular ? 'btn-gold' : 'btn-outline'}`}>
                  {p.price === 0 ? 'ابدأ مجاناً' : 'اشترك الآن'}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing" className="text-gold hover:underline text-sm">
              عرض جميع الباقات الستة →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-coffee text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-gold text-4xl mb-4">✦</div>
          <h2 className="text-4xl font-bold text-pearl mb-4" style={{ fontFamily: 'Playfair Display' }}>
            جاهز تبدأ؟
          </h2>
          <p className="text-pearl/70 mb-8">15 دعوة مجانية — لا يحتاج بطاقة ائتمان</p>
          <Link href="/register" className="btn-gold text-lg px-10 py-4 rounded-xl inline-block">
            أنشئ دعوتك الأولى مجاناً
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
