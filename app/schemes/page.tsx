import { Header } from "@/components/header"
import { VoiceAssistant } from "@/components/voice-assistant"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Search, CheckCircle, Clock, Info } from "lucide-react"

const schemes = [
  {
    id: "1",
    name: "PM Kisan Samman Nidhi",
    description: "₹6,000 Direct Benefit Transfer annually to farmer families",
    status: "applied",
    eligibility: "All small and marginal farmers",
    documents: ["Aadhaar Card", "Land Records", "Bank Account"],
  },
  {
    id: "2",
    name: "Fasal Bima Yojana",
    description: "Crop insurance scheme to protect against natural calamities",
    status: "active",
    eligibility: "All farmers growing notified crops",
    documents: ["Aadhaar Card", "Land Records", "Bank Account"],
  },
  {
    id: "3",
    name: "KCC Loan Scheme",
    description: "Credit up to ₹3 lakh at 4% interest rate for farming activities",
    status: "apply",
    eligibility: "All farmers with land ownership",
    documents: ["Aadhaar Card", "Land Records", "Bank Account", "Passport Size Photo"],
  },
  {
    id: "4",
    name: "PM Kusum Yojana",
    description: "Subsidy for solar pumps and grid-connected solar power plants",
    status: "apply",
    eligibility: "Farmers with irrigation needs",
    documents: ["Aadhaar Card", "Land Records", "Bank Account", "Electricity Bill"],
  },
]

const subsidyHistory = [
  {
    id: "1",
    name: "Wheat Subsidy",
    amount: "₹5,000",
    date: "25 Mar 2025",
    status: "credited",
  },
  {
    id: "2",
    name: "Equipment Subsidy",
    amount: "₹10,000",
    date: "15 Mar 2025",
    status: "pending",
  },
]

export default function SchemesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-4">
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">Government Schemes</h1>
            <p className="text-muted-foreground">Find, apply for, and track government schemes</p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search Government Schemes" className="pl-8" />
            </div>
            <Button>Check Eligibility</Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Government Yojanas (Personalized)</CardTitle>
              <CardDescription>Schemes you are eligible for based on your profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schemes.map((scheme) => (
                  <div key={scheme.id} className="rounded-lg border p-4">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-medium">{scheme.name}</h3>
                          <Badge
                            variant={
                              scheme.status === "applied"
                                ? "secondary"
                                : scheme.status === "active"
                                  ? "default"
                                  : "outline"
                            }
                            className={scheme.status === "active" ? "bg-green-600" : ""}
                          >
                            {scheme.status === "applied"
                              ? "Applied ✓"
                              : scheme.status === "active"
                                ? "Active ✓"
                                : "Apply Now"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{scheme.description}</p>

                        <div className="mt-2">
                          <div className="text-sm font-medium">Eligibility:</div>
                          <div className="text-sm text-muted-foreground">{scheme.eligibility}</div>
                        </div>

                        <div className="mt-2">
                          <div className="text-sm font-medium">Required Documents:</div>
                          <div className="flex flex-wrap gap-2">
                            {scheme.documents.map((doc, index) => (
                              <Badge key={index} variant="outline" className="bg-primary-light">
                                {doc}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        {scheme.status === "apply" && <Button className="bg-primary">Apply Now</Button>}
                        {scheme.status === "applied" && (
                          <div className="flex items-center gap-2 rounded-md bg-gray-100 p-2 text-sm">
                            <Clock className="h-4 w-4 text-primary-dark" />
                            <span>Application in process</span>
                          </div>
                        )}
                        {scheme.status === "active" && (
                          <div className="flex items-center gap-2 rounded-md bg-green-100 p-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Benefits active</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subsidy History</CardTitle>
              <CardDescription>Track your subsidies and benefits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subsidyHistory.map((subsidy) => (
                  <div key={subsidy.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">{subsidy.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {subsidy.status === "credited"
                          ? `Credited on ${subsidy.date}`
                          : `Pending since ${subsidy.date}`}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-medium">{subsidy.amount}</div>
                        <Badge
                          variant={subsidy.status === "credited" ? "default" : "secondary"}
                          className={subsidy.status === "credited" ? "bg-green-600" : ""}
                        >
                          {subsidy.status === "credited" ? "Credited" : "Pending"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Alert className="bg-neutral-soft">
            <Info className="h-4 w-4" />
            <AlertTitle>New: Government to Increase MSP Rates for 2025!</AlertTitle>
            <AlertDescription>
              The government has announced plans to increase Minimum Support Prices for major crops by 5-10% for the
              2025 season. This will benefit farmers growing wheat, rice, pulses, and oilseeds.
            </AlertDescription>
          </Alert>
        </div>
      </main>
      <VoiceAssistant />
    </div>
  )
}

