import { CalendarClock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const subsidies = [
  {
    name: "PM Kisan Yojana",
    amount: "₹2,000",
    date: "15 May 2025",
    status: "upcoming",
  },
  {
    name: "Fasal Bima Yojana",
    amount: "₹1,500",
    date: "30 May 2025",
    status: "pending",
  },
  {
    name: "Soil Health Card Scheme",
    amount: "₹500",
    date: "10 June 2025",
    status: "upcoming",
  },
]

export function UpcomingSubsidies() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Upcoming Subsidies</CardTitle>
        <CalendarClock className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {subsidies.map((subsidy, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{subsidy.name}</div>
                <div className="text-sm text-muted-foreground">{subsidy.date}</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="font-medium">{subsidy.amount}</div>
                <Badge variant={subsidy.status === "upcoming" ? "outline" : "secondary"}>
                  {subsidy.status === "upcoming" ? "Upcoming" : "Pending"}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

