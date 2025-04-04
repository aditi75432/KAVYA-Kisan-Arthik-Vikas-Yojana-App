import { Header } from "@/components/header"
import { VoiceAssistant } from "@/components/voice-assistant"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowDownLeft, ArrowUpRight, Download, Upload, Wallet, Info, RefreshCw } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const transactions = [
  {
    id: "1",
    type: "credit",
    description: "Wheat sale to Buyer",
    amount: "₹5,000",
    tokens: "+100",
    date: "2 Apr 2025",
    status: "completed",
  },
  {
    id: "2",
    type: "credit",
    description: "PM Kisan Subsidy",
    amount: "₹2,000",
    tokens: "+40",
    date: "28 Mar 2025",
    status: "completed",
  },
  {
    id: "3",
    type: "debit",
    description: "Fertilizer Purchase",
    amount: "₹1,200",
    tokens: "-24",
    date: "25 Mar 2025",
    status: "completed",
  },
  {
    id: "4",
    type: "credit",
    description: "Rice sale to Mandi",
    amount: "₹3,500",
    tokens: "+70",
    date: "20 Mar 2025",
    status: "completed",
  },
  {
    id: "5",
    type: "debit",
    description: "Seed Purchase",
    amount: "₹800",
    tokens: "-16",
    date: "15 Mar 2025",
    status: "completed",
  },
]

export default function WalletPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary-dark">Agri-Wallet</h1>
              <p className="text-muted-foreground">Manage your tokens and transactions</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Add Funds
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <Upload className="h-4 w-4" />
                Withdraw
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <RefreshCw className="h-4 w-4" />
                Transfer
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Wallet Balance: ₹12,450</CardTitle>
                <div className="text-sm text-muted-foreground">Last Updated: 3 April 2025 - 10:30 AM</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-center gap-2 rounded-lg border p-3">
                  <div className="rounded-full bg-primary-light p-2 text-primary">
                    <Wallet className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Token Balance</div>
                    <div className="text-xl font-bold">250 Tokens</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-3">
                  <div className="rounded-full bg-green-100 p-2 text-green-600">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Total Earned</div>
                    <div className="text-xl font-bold">₹15,500</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-3">
                  <div className="rounded-full bg-red-100 p-2 text-red-600">
                    <ArrowDownLeft className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Total Spent</div>
                    <div className="text-xl font-bold">₹3,050</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Transactions</CardTitle>
              <CardDescription>View your recent transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="credits">Credits</TabsTrigger>
                  <TabsTrigger value="debits">Debits</TabsTrigger>
                  <TabsTrigger value="subsidies">Subsidies</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`rounded-full p-2 ${
                            transaction.type === "credit" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                          }`}
                        >
                          {transaction.type === "credit" ? (
                            <ArrowUpRight className="h-4 w-4" />
                          ) : (
                            <ArrowDownLeft className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{transaction.description}</div>
                          <div className="text-sm text-muted-foreground">{transaction.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}
                        >
                          {transaction.amount}
                        </div>
                        <div className={`text-sm ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>
                          {transaction.tokens} Tokens
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="credits" className="space-y-4">
                  {transactions
                    .filter((t) => t.type === "credit")
                    .map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-green-100 p-2 text-green-600">
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium">{transaction.description}</div>
                            <div className="text-sm text-muted-foreground">{transaction.date}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-600">{transaction.amount}</div>
                          <div className="text-sm text-green-600">{transaction.tokens} Tokens</div>
                        </div>
                      </div>
                    ))}
                </TabsContent>
                <TabsContent value="debits" className="space-y-4">
                  {transactions
                    .filter((t) => t.type === "debit")
                    .map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-red-100 p-2 text-red-600">
                            <ArrowDownLeft className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium">{transaction.description}</div>
                            <div className="text-sm text-muted-foreground">{transaction.date}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-red-600">{transaction.amount}</div>
                          <div className="text-sm text-red-600">{transaction.tokens} Tokens</div>
                        </div>
                      </div>
                    ))}
                </TabsContent>
                <TabsContent value="subsidies" className="space-y-4">
                  {transactions
                    .filter((t) => t.description.includes("Subsidy"))
                    .map((transaction) => (
                      <div key={transaction.id} className="flex items-center justify-between rounded-lg border p-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-green-100 p-2 text-green-600">
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium">{transaction.description}</div>
                            <div className="text-sm text-muted-foreground">{transaction.date}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-green-600">{transaction.amount}</div>
                          <div className="text-sm text-green-600">{transaction.tokens} Tokens</div>
                        </div>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Alert className="bg-neutral-soft">
            <Info className="h-4 w-4" />
            <AlertTitle>How It Works?</AlertTitle>
            <AlertDescription>
              Your Agri-Wallet combines government subsidies and market earnings. Tokens can be used for purchases,
              traded with other farmers, or redeemed for cash. All transactions are secured with blockchain technology.
            </AlertDescription>
          </Alert>

          <Alert className="bg-primary-light">
            <AlertTitle>AI Insights</AlertTitle>
            <AlertDescription>
              You saved 30% more this month compared to last month! Consider investing in crop insurance before the
              monsoon season starts.
            </AlertDescription>
          </Alert>
        </div>
      </main>
      <VoiceAssistant />
    </div>
  )
}

