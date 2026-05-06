import DashboardLayout from '@/components/DashboardLayout'
import Link from 'next/link'

const stats = [
  { label: 'إجمالي المدعوين', value: '0', icon: '👥', color: 'text-blue-600 bg-blue-50' },
  { label: 'تأكيد الحضور', value: '0', icon: '✅', color: 'text-emerald-600 bg-emerald-50' },
  { label: 'الاعتذارات', value: '0', icon: '❌', color: 'text-rose-600 bg-rose-50' },
  { label: 'في الانتظار', value: '0', icon: '⏳', color: 'text-amber-600 bg-amber-50' },
]

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-coffee">أهلاً بك في ارحبوا 👋</h1>
        <p className="text-palm mt-1">ابدأ بإنشاء دعوتك الأولى</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-gold/10">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-3 ${s.color}`}>{s.icon}</div>
            <div className="text-2xl font-bold text-coffee">{s.value}</div>
            <div className="text-xs text-palm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      <div className="bg-white rounded-2xl border border-gold/10 p-12 text-center">
        <div className="text-5xl mb-4">✉️</div>
        <h2 className="text-xl font-bold text-coffee mb-2">لا توجد دعوات بعد</h2>
        <p className="text-palm mb-6">أنشئ دعوتك الأولى وأرسلها في دقائق</p>
        <Link href="/dash/invitations/new" className="btn-gold px-8 py-3 rounded-xl inline-block">
          إنشاء دعوة جديدة
        </Link>
      </div>
    </DashboardLayout>
  )
}
