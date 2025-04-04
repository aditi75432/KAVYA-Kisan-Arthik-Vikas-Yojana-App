import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  Calendar,
  AlertTriangle,
  TrendingUp,
  BarChart2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Header } from "@/components/header"
import { VoiceAssistant } from "@/components/voice-assistant"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-light">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-primary-dark sm:text-5xl xl:text-6xl/none">
                    Empowering Farmers with AI & Financial Security
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl">
                    Use Smart Agri-Wallet to access subsidies, loans, and track mandi prices with AI insights.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button className="bg-primary hover:bg-primary-dark">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                  <Link href="#contact">
                    <Button variant="outline">Contact Support</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] rounded-full bg-white p-6 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-primary">KAVYA</div>
                      <div className="mt-2 text-lg text-gray-600">Your AI Financial Assistant</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl">Featured Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access all the financial tools you need to grow your farm business
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="rounded-full bg-primary p-2 text-white">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-primary-dark">Agri-Wallet</CardTitle>
                  <CardDescription>Track Your Earnings & Govt Benefits</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Manage your finances, track subsidies, and monitor your savings all in one place.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/wallet">
                    <Button className="w-full bg-primary">View Wallet</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="rounded-full bg-primary p-2 text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-primary-dark">Loans & Credit</CardTitle>
                  <CardDescription>Get Instant, Low-Interest Farm Loans</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Access loans based on your AI credit score without traditional collateral.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/loans">
                    <Button className="w-full bg-primary">Apply for Loan</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="rounded-full bg-primary p-2 text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-primary-dark">Govt Schemes</CardTitle>
                  <CardDescription>Find & Apply for Subsidies Easily</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Discover government schemes you're eligible for and apply with just a few clicks.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/schemes">
                    <Button className="w-full bg-primary">Find Govt Schemes</Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="rounded-full bg-primary p-2 text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-primary-dark">Market Trends</CardTitle>
                  <CardDescription>Track Live Prices & Avoid Middlemen</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Get real-time market prices and AI predictions to sell at the best time.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/market">
                    <Button className="w-full bg-primary">Track Market Prices</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Smart Recommendations */}
        <section className="w-full py-8 bg-neutral-soft/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter text-primary-dark">AI Smart Recommendations</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2">
              <Alert className="bg-primary-light border-primary">
                <Calendar className="h-4 w-4" />
                <AlertTitle>Best time to sell Wheat: 10-Apr to 20-Apr</AlertTitle>
                <AlertDescription>
                  Our AI analysis predicts wheat prices will peak during this period. Plan your sales accordingly.
                </AlertDescription>
              </Alert>

              <Alert className="bg-primary-light border-primary">
                <Calendar className="h-4 w-4" />
                <AlertTitle>Govt Crop Insurance Deadline: Apply Before 15-Apr!</AlertTitle>
                <AlertDescription>
                  Don't miss the deadline for the Pradhan Mantri Fasal Bima Yojana application.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Latest News & Alerts */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter text-primary-dark">Latest News & Alerts</h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2">
              <Alert className="bg-white border-accent">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertTitle>Govt MSP for Wheat Raised by 8% This Year!</AlertTitle>
                <AlertDescription>
                  The government has announced an increase in the Minimum Support Price for wheat, benefiting farmers
                  across the country.
                </AlertDescription>
              </Alert>

              <Alert className="bg-white border-accent">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertTitle>Heavy Rains Expected – Protect Stored Crops!</AlertTitle>
                <AlertDescription>
                  Meteorological Department predicts heavy rainfall in the next week. Take necessary precautions to
                  protect your harvested crops.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>

        {/* Location-Based Crop Price Analysis */}
        <section className="w-full py-8 bg-primary-light/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary-dark">Location-Based Crop Price Analysis</h3>
                  </div>
                  <Badge className="mt-2 md:mt-0 bg-primary">Your Location: Amritsar, Punjab</Badge>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-md bg-gray-50 p-4">
                    <div className="text-sm text-gray-500">Your nearest mandi price for Wheat:</div>
                    <div className="text-2xl font-bold text-primary-dark">₹2,000/qtl</div>
                    <div className="mt-2 flex items-center text-sm text-green-600">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      <span>5% higher than last week</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between rounded-md bg-gray-50 p-4">
                    <div>
                      <div className="text-sm text-gray-500">AI Price Prediction (Next 7 Days):</div>
                      <div className="text-lg font-medium text-primary-dark">Expected to rise by 3-5%</div>
                    </div>
                    <Button className="mt-2 bg-primary">
                      Compare with Other Mandis
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Farmer Testimonials */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary-dark">Farmer Testimonials</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how Smart Agri-Wallet is helping farmers across India
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary-light p-2">
                    <div className="h-12 w-12 rounded-full bg-primary text-center text-xl font-bold text-white flex items-center justify-center">
                      RS
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Ramesh Singh</h3>
                    <p className="text-sm text-gray-500">Wheat Farmer, Punjab</p>
                    <p className="mt-2 text-gray-700">
                      "Thanks to Smart Agri-Wallet, I secured a ₹20,000 loan in just 5 minutes! The AI credit scoring
                      system recognized my farming history even though I had no formal credit record."
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary-light p-2">
                    <div className="h-12 w-12 rounded-full bg-primary text-center text-xl font-bold text-white flex items-center justify-center">
                      SP
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Sunita Patel</h3>
                    <p className="text-sm text-gray-500">Rice Farmer, Tamil Nadu</p>
                    <p className="mt-2 text-gray-700">
                      "I saved ₹5,000 last month with the AI Financial Assistant! It alerted me about better prices at a
                      nearby mandi and helped me avoid middlemen who were offering much less."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Helpdesk Support */}
        <section id="contact" className="w-full py-12 md:py-24 bg-neutral-soft/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-primary-dark">Contact & Helpdesk Support</h2>
                <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Need help applying for subsidies? Call or message us anytime!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="rounded-full bg-primary p-2 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <CardTitle>Toll-Free Helpline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold">1800-XXX-XXXX</p>
                  <p className="text-sm text-gray-500">24/7 Farmer Support</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Call Now
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="rounded-full bg-primary p-2 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <CardTitle>Email Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold">support@kavya.org</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Email Us
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="rounded-full bg-primary p-2 text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <CardTitle>WhatsApp Chatbot</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold">+91 XXXXX XXXXX</p>
                  <p className="text-sm text-gray-500">Ask AI Assistant for Scheme Details</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Chat Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary">KAVYA</h3>
              <p className="text-sm text-gray-500">Kisan Arthik Vikas Yojana Assistant - Empowering Farmers with AI</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase text-gray-500">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-gray-500 hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-500 hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-500 hover:text-primary">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-500 hover:text-primary">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase text-gray-500">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/wallet" className="text-gray-500 hover:text-primary">
                    Agri-Wallet
                  </Link>
                </li>
                <li>
                  <Link href="/loans" className="text-gray-500 hover:text-primary">
                    Loans & Credit
                  </Link>
                </li>
                <li>
                  <Link href="/schemes" className="text-gray-500 hover:text-primary">
                    Govt Schemes
                  </Link>
                </li>
                <li>
                  <Link href="/market" className="text-gray-500 hover:text-primary">
                    Market Trends
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase text-gray-500">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
              <p className="text-sm text-gray-500">© 2025 Smart Agri-Wallet. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <VoiceAssistant />
    </div>
  )
}

