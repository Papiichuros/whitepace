import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardTitle, CardHeader } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ChevronDown, CircleCheckBig, Menu, ArrowRight, Star, Globe } from "lucide-react"
import { SiGitter, SiLinkedin, SiFacebook } from "react-icons/si"

const testimonials = [
  {
    image: "/Avater1.png",
    author: "John Doe",
    role: "CEO at Company",
    text: "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
    rating: 5,
    variant: "blue",
  },
  {
    image: "/Avater2.png",
    author: "Jane Smith",
    role: "CTO at Another Company",
    text: "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
    rating: 4,
    variant: "white",
  },
  {
    image: "/Avater3.png",
    author: "Sam Wilson",
    role: "Developer at Tech Corp",
    text: "If you haven't tried whitepace yet, you need to give it a shot for your next event. It's so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.",
    rating: 5,
    variant: "blue",
  },
]

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CustomizeSection />
        <PricingSection />
        <MiddleSection />
        <AboutSection />
        <SponsorsSection />
        <FavoriteAppSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="logo" width={176} height={32} className="w-44 h-8" />
        </Link>
        <nav className="hidden lg:flex gap-6 text-blue-400">
          {["Products", "Solutions", "Resources", "Pricing"].map((item) => (
            <div key={item} className="flex items-center space-x-1">
              <Link href="#" className="text-sm font-medium">{item}</Link>
              <ChevronDown className="h-4 w-4" />
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" className="text-blue-900 bg-amber-100 hover:bg-amber-200">Login</Button>
          <Button className="bg-blue-400 hover:bg-blue-500">
            Try Whitepace free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <Button variant="ghost" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-blue-400">
              Get More Done with Whitepace
            </h1>
            <p className="mx-auto lg:mx-0 max-w-[700px] text-blue-400 text-sm sm:text-base md:text-lg">
              Streamline your workflow and boost productivity with our comprehensive project management solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
              <Button className="bg-blue-400 hover:bg-blue-500">
                Try Whitepace free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[800px] aspect-video overflow-hidden rounded-lg border bg-blue-400/40" />
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900">
              Project Management
            </h2>
            <p className="mx-auto lg:mx-0 max-w-[700px] text-gray-800 text-sm sm:text-base md:text-lg">
              Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app.
              Take photos with the mobile app and save them to a note.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
              <Button className="bg-blue-400 hover:bg-blue-500">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[600px] aspect-video overflow-hidden rounded-lg border bg-blue-400/40" />
        </div>
      </div>
      <div className="container mx-auto mt-12 md:mt-24 lg:mt-32">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-last lg:order-first">
            <Image
              src="/graphic.png"
              alt="Work together illustration"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900">
              Work Together
            </h2>
            <p className="mx-auto lg:mx-0 max-w-[700px] text-gray-800 text-sm sm:text-base md:text-lg">
              With whitepace, share your notes with your colleagues and collaborate on them.
              You can also publish a note to the internet and share the URL with others.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
              <Button className="bg-blue-400 hover:bg-blue-500">
                Try It Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CustomizeSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900">
              Customize it to your needs
            </h2>
            <p className="mx-auto lg:mx-0 max-w-[700px] text-gray-800 text-sm sm:text-base md:text-lg">
              Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
              <Button className="bg-blue-400 hover:bg-blue-500">
                Let's Go
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[600px] aspect-video overflow-hidden rounded-lg border bg-blue-400/40" />
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const plans = [
    {
      title: "Free",
      description: "Capture ideas and find them quickly",
      price: "$0",
      features: ["Sync unlimited devices", "10 GB monthly uploads", "200 MB max. note size", "Customize Home dashboard and access extra widgets", "Connect primary Google Calendar account", "Add due dates, reminders, and notifications to your tasks"]
    },
    {
      title: "Personal",
      description: "Keep home and family on track",
      price: "$11.99",
      features: ["Sync unlimited devices", "10 GB monthly uploads", "200 MB max. note size", "Customize Home dashboard and access extra widgets", "Connect primary Google Calendar account", "Add due dates, reminders, and notifications to your tasks"]
    },
    {
      title: "Organization",
      description: "Manage your team and get more done",
      price: "$49.99",
      features: ["Sync unlimited devices", "10 GB monthly uploads", "200 MB max. note size", "Customize Home dashboard and access extra widgets", "Connect primary Google Calendar account", "Add due dates, reminders, and notifications to your tasks"]
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Choose Your Plan</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">{plan.price}</div>
                <div className="text-sm font-medium mt-2">{plan.description}</div>
              </CardContent>
              <CardFooter className="items-start flex flex-col space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CircleCheckBig className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                <Button className="w-full mt-4 bg-blue-400 hover:bg-blue-500">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function MiddleSection() {
  return (
    <section className="bg-blue-950 w-full py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
            Your work, everywhere you are
          </h2>
          <p className="mx-auto max-w-auto text-white text-sm sm:text-base md:text-lg">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
          <Button className="bg-blue-400 hover:bg-blue-500 mt-4">
            Try Taskey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900">
              100% your data
            </h2>
            <p className="mx-auto lg:mx-0 max-w-[700px] text-gray-800 text-sm sm:text-base md:text-lg">
              The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
              <Button className="bg-blue-400 hover:bg-blue-500">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <Image
              src="/Element.png"
              alt="Work together illustration"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function SponsorsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center space-y-8 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-900 text-center">
            Our sponsors
          </h2>
          <div className="w-full mt-10">
            <Image
              src="/sponsors.png"
              alt="Our sponsors"
              width={900}
              height={500}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FavoriteAppSection() {
  return (
    <section className="bg-blue-950 w-full py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-last lg:order-first w-full lg:w-3/4">
            <Image
              src="/Apps.png"
              alt="App Using"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white">
              Work with Your Favorite Apps Using whitepace
            </h2>
            <p className="mx-auto lg:mx-0 max-w-[700px] text-white text-sm sm:text-base md:text-lg">
              Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
              <Button className="bg-blue-400 hover:bg-blue-500 mt-8">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center mb-16">
          See what our{' '}
          <span className="relative">
            trusted
          </span>
          {' '}users Say
        </h2>
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-8 md:pb-0">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center p-8 bg-[#2D6BE4] text-white rounded-2xl mx-2"
              >
                <div className="flex flex-col space-y-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <blockquote className="text-lg">{testimonial.text}</blockquote>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-blue-200">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex lg:hidden justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-[#2D6BE4]' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="hidden lg:flex justify-center space-x-8 mt-12">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-14 h-14 bg-blue-200 hover:bg-blue-300"
          >
            <ChevronLeft className="h-6 w-6 text-blue-700" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full w-14 h-14 bg-blue-200 hover:bg-blue-300"
          >
            <ChevronRight className="h-6 w-6 text-blue-700" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#002B5B] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-8 text-center lg:text-left">
          {/* Logo and Description */}
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <Link href="/" className="flex justify-center lg:justify-start">
              <Image src="/logo-white.png" alt="Whitepace" width={150} height={32} />
            </Link>
            <p className="text-sm max-w-[280px]">
              whitepace was created for the new ways we live and work. We make a better workspace around the world
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-2">
              {["Overview", "Pricing", "Customer stories"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-yellow-200">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              {["Blog", "Guides & tutorials", "Help center"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-yellow-200">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {["About us", "Careers", "Media kit"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-yellow-200">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Try It Today */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold">Try It Today</h3>
            <p className="text-sm">
              Get started for free.<br />
              Add your whole team as your needs grow.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 w-full max-w-[200px]">
              Start today
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex items-center lg:grid-cols-5 gap-6">
            <button className="flex items-center space-x-2 text-sm hover:text-yellow-200">
              <Globe className="h-4 w-4" />
              <span>English</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-sm hover:text-yellow-200">Terms & privacy</Link>
              <Link href="#" className="text-sm hover:text-yellow-200">Security</Link>
              <Link href="#" className="text-sm hover:text-yellow-200">Status</Link>
            </div>
            <span className="text-sm">©2021 Whitepace LLC.</span>
            <div className="ml-auto flex items-center space-x-4">
              <Link href="#" className="hover:text-yellow-200">
                <SiFacebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-yellow-200">
                <SiGitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-yellow-200">
                <SiLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}