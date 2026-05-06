#!/bin/bash

# Landing pages
create_landing() {
  local path="$1"
  local title="$2"
  mkdir -p "/home/claude/arhbo-v2/app/$path"
  cat > "/home/claude/arhbo-v2/app/$path/page.tsx" << STUB
import LandingNav from '@/components/LandingNav'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-pearl">
      <LandingNav />
      <div className="pt-28 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-coffee mb-4" style={{ fontFamily: 'Playfair Display' }}>${title}</h1>
        <div className="card-gold mt-8">
          <p className="text-palm">المحتوى قيد الإعداد...</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
STUB
}

# Dashboard pages
create_dash() {
  local path="$1"
  local title="$2"
  mkdir -p "/home/claude/arhbo-v2/app/dash/$path"
  cat > "/home/claude/arhbo-v2/app/dash/$path/page.tsx" << STUB
import DashboardLayout from '@/components/DashboardLayout'

export default function Page() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-coffee">${title}</h1>
      </div>
      <div className="bg-white rounded-2xl border border-gold/10 p-8 text-center text-palm">
        قيد الإعداد...
      </div>
    </DashboardLayout>
  )
}
STUB
}

# Landing pages
create_landing "how-it-works" "كيف تعمل ارحبوا؟"
create_landing "features" "المميزات"
create_landing "templates" "القوالب"
create_landing "customers" "قصص العملاء"
create_landing "faq" "الأسئلة الشائعة"
create_landing "blog" "المدونة"
create_landing "about" "عن ارحبوا"
create_landing "contact" "تواصل معنا"
create_landing "login" "تسجيل الدخول"
create_landing "register" "إنشاء حساب"
create_landing "terms" "الشروط والأحكام"
create_landing "privacy" "سياسة الخصوصية"

# Dashboard pages
create_dash "onboarding" "خطوات البدء"
create_dash "invitations" "دعواتي"
create_dash "invitations/new" "دعوة جديدة"
create_dash "analytics" "التحليلات"
create_dash "billing" "الفوترة"
create_dash "billing/invoices" "الفواتير"
create_dash "settings/profile" "الملف الشخصي"
create_dash "settings/team" "الفريق"
create_dash "settings/whatsapp" "إعدادات واتساب"
create_dash "settings/notifications" "الإشعارات"
create_dash "help" "المساعدة"
create_dash "support" "الدعم الفني"

echo "All stubs created!"
