import LandingNav from '@/components/LandingNav'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-pearl">
      <LandingNav />
      <div className="pt-28 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-coffee mb-4" style={{ fontFamily: 'Playfair Display' }}>عن ارحبوا</h1>
        <div className="card-gold mt-8">
          <p className="text-palm">المحتوى قيد الإعداد...</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
