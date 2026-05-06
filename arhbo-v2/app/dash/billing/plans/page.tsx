'use client'
import DashboardLayout from '@/components/DashboardLayout'
import { useState } from 'react'

const plans = [
  { id: 'free',    name: 'الأساسية', price: 0,   guests: 15,  current: true },
  { id: 'lamat',   name: 'اللمات',   price: 59,  guests: 50,  popular: true },
  { id: 'jalsat',  name: 'الجلسات',  price: 99,  guests: 100 },
  { id: 'mailes',  name: 'الميلس',   price: 149, guests: 200 },
  { id: 'kheima',  name: 'الخيمة',   price: 249, guests: 500 },
  { id: 'modheef', name: 'المضيف',   price: 0,   guests: 999, enterprise: true },
]

export default function BillingPlansPage() {
  const [loading, setLoading] = useState<string | null>(null)

  async function handleUpgrade(planId: string) {
    if (planId === 'modheef') {
      window.location.href = '/contact'
      return
    }
    setLoading(planId)
    try {
      const res = await fetch(`/api/payments/checkout?plan=${planId}`)
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } catch {
      alert('حدث خطأ، حاول مرة أخرى')
    } finally {
      setLoading(null)
    }
  }

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-coffee">ترقية الباقة</h1>
        <p className="text-palm mt-1">اختر الباقة المناسبة لمناسبتك</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div key={p.id} className={`bg-white rounded-2xl p-5 border-2 transition-all ${(p as any).popular ? 'border-gold shadow-lg' : 'border-gold/15'}`}>
            {(p as any).popular && (
              <div className="text-xs text-gold font-semibold mb-2">⭐ الأكثر طلباً</div>
            )}
            {(p as any).current && (
              <div className="text-xs text-emerald-600 font-semibold mb-2">✅ باقتك الحالية</div>
            )}
            <h3 className="text-lg font-bold text-coffee">{p.name}</h3>
            <div className="text-3xl font-bold text-gold my-2">
              {p.enterprise ? 'حسب الاتفاق' : p.price === 0 ? 'مجاناً' : `${p.price} د.إ`}
            </div>
            <p className="text-sm text-palm mb-4">
              {p.guests === 999 ? 'غير محدود' : `حتى ${p.guests} دعوة`}
            </p>

            {!(p as any).current && (
              <button
                onClick={() => handleUpgrade(p.id)}
                disabled={loading === p.id}
                className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${(p as any).popular ? 'btn-gold' : 'btn-outline'} disabled:opacity-50`}
              >
                {loading === p.id ? 'جاري التحويل...' : p.enterprise ? 'تواصل معنا' : 'ترقية الآن'}
              </button>
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
