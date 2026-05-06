import DashboardLayout from '@/components/DashboardLayout'

export default function Page() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-coffee">الإشعارات</h1>
      </div>
      <div className="bg-white rounded-2xl border border-gold/10 p-8 text-center text-palm">
        قيد الإعداد...
      </div>
    </DashboardLayout>
  )
}
