import { Header } from "@/components/header"
import { VoiceAssistant } from "@/components/voice-assistant"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { FileText, AlertTriangle, CheckCircle, Info } from "lucide-react"

const loanOffers = [
  {
    id: "1",
    bank: "AgriBank Loan",
    amount: "₹20,000",
    interest: "3%",
    status: "pre-approved",
    term: "12 months",
    description: "Low-interest loan for agricultural inputs",
  },
  {
    id: "2",
    bank: "Kisan MicroLoan",
    amount: "₹15,000",
    interest: "5%",
    status: "pending",
    term: "6 months",
    description: "Quick approval, flexible repayment options",
  },
  {
    id: "3",
    bank: "Govt Zero-Interest",
    amount: "₹10,000",
    interest: "0%",
    status: "apply",
    term: "24 months",
    description: "Government-backed interest-free loan for small farmers",
  },
]

const loanRepayments = [
  {
    id: "3456",
    amount: "₹3,000",
    dueDate: "15 Apr 2025",
    status: "upcoming",
  },
  {
    id: "2312",
    amount: "₹5,000",
    dueDate: "01 Apr 2025",
    status: "overdue",
  },
]

export default function LoansPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-4">
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">Loans & Credit</h1>
            <p className="text-muted-foreground">Check loan eligibility, apply, and track repayments</p>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Your Credit Score</CardTitle>
              <CardDescription>Based on AI analysis of your financial behavior</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center md:flex-row md:justify-between">
                <div className="flex flex-col items-center">
                  <div className="relative h-24 w-24">
                    <svg className="h-full w-full" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="10" />
                      {/* Progress circle - 80% of 900 = 720 */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#71873f"
                        strokeWidth="10"
                        strokeDasharray={`${(2 * Math.PI * 45 * 80) / 100} ${(2 * Math.PI * 45 * 20) / 100}`}
                        strokeDashoffset={(2 * Math.PI * 45 * 25) / 100}
                        transform="rotate(-90 50 50)"
                      />
                      <text
                        x="50"
                        y="50"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="20"
                        fontWeight="bold"
                        fill="currentColor"
                      >
                        720
                      </text>
                    </svg>
                  </div>
                  <div className="mt-2 text-lg font-medium text-green-600">Good</div>
                </div>

                <div className="mt-4 md:mt-0 md:max-w-md">
                  <h3 className="mb-2 text-lg font-medium">AI Risk Analysis</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Regular savings pattern detected</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Consistent crop yield history</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Timely loan repayments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-blue-600" />
                      <span>Eligible for loans up to ₹50,000</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loan Offers (Personalized)</CardTitle>
              <CardDescription>Based on your credit score and farming profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {loanOffers.map((loan) => (
                  <div key={loan.id} className="rounded-lg border p-4">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-medium">{loan.bank}</h3>
                          <Badge
                            variant={
                              loan.status === "pre-approved"
                                ? "default"
                                : loan.status === "pending"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={loan.status === "pre-approved" ? "bg-green-600" : ""}
                          >
                            {loan.status === "pre-approved"
                              ? "Pre-approved"
                              : loan.status === "pending"
                                ? "Pending Approval"
                                : "Apply Now"}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{loan.description}</p>
                        <div className="mt-2 flex flex-wrap gap-4">
                          <div>
                            <div className="text-sm text-muted-foreground">Amount</div>
                            <div className="font-medium">{loan.amount}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Interest Rate</div>
                            <div className="font-medium">{loan.interest}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Term</div>
                            <div className="font-medium">{loan.term}</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <FileText className="h-4 w-4" />
                          View Terms
                        </Button>
                        <Button
                          size="sm"
                          className={
                            loan.status === "pre-approved"
                              ? "bg-primary"
                              : loan.status === "pending"
                                ? "bg-gray-500"
                                : "bg-accent"
                          }
                          disabled={loan.status === "pending"}
                        >
                          {loan.status === "pre-approved" ? "Accept" : loan.status === "pending" ? "Pending" : "Apply"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loan Repayment Schedule</CardTitle>
              <CardDescription>Upcoming and overdue payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {loanRepayments.map((repayment) => (
                  <div
                    key={repayment.id}
                    className={`flex items-center justify-between rounded-lg border p-4 ${
                      repayment.status === "overdue" ? "border-red-200 bg-red-50" : ""
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Loan #{repayment.id}</h3>
                        {repayment.status === "overdue" && <AlertTriangle className="h-4 w-4 text-red-600" />}
                      </div>
                      <div className="text-sm text-muted-foreground">Due: {repayment.dueDate}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-medium">{repayment.amount}</div>
                        <div
                          className={`text-sm ${
                            repayment.status === "overdue" ? "text-red-600 font-medium" : "text-muted-foreground"
                          }`}
                        >
                          {repayment.status === "overdue" ? "Overdue! Pay Now" : "Due"}
                        </div>
                      </div>
                      <Button size="sm" className={repayment.status === "overdue" ? "bg-red-600" : "bg-primary"}>
                        Pay Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Alert className="bg-primary-light">
            <Info className="h-4 w-4" />
            <AlertTitle>Financial Literacy</AlertTitle>
            <AlertDescription>
              <h3 className="font-medium">How to manage farm loans wisely?</h3>
              <ul className="mt-2 list-disc pl-5 text-sm">
                <li>Use loans only for productive farm activities</li>
                <li>Set calendar reminders for repayment dates</li>
                <li>Pay on time to improve your credit score</li>
                <li>Consider seasonal repayment schedules aligned with harvest times</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </main>
      <VoiceAssistant />
    </div>
  )
}

