import { ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function WalletOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Agri-Wallet Balance</CardTitle>
        <Wallet className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">₹12,450</div>
        <div className="flex items-center justify-between">
          <CardDescription>Tokens: 250</CardDescription>
          <div className="flex items-center gap-1 text-xs text-green-500">
            <ArrowUpRight className="h-3 w-3" />
            <span>+12.5%</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1 rounded-md bg-primary-light p-2">
            <ArrowUpRight className="h-4 w-4 text-green-600" />
            <div className="text-xs">
              <div className="font-medium">Received</div>
              <div>₹2,500</div>
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-md bg-primary-light p-2">
            <ArrowDownRight className="h-4 w-4 text-accent" />
            <div className="text-xs">
              <div className="font-medium">Spent</div>
              <div>₹1,200</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

