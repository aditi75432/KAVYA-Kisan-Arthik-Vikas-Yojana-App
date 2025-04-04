import Link from "next/link"
import { CreditCard, Landmark, Umbrella, Sprout, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const actions = [
  {
    icon: CreditCard,
    title: "Apply for Loan",
    description: "Quick loans up to ₹50,000",
    href: "/loans",
    color: "bg-primary text-white",
  },
  {
    icon: Landmark,
    title: "Govt. Schemes",
    description: "Check eligible subsidies",
    href: "/schemes",
    color: "bg-primary-light text-primary-dark",
  },
  {
    icon: Umbrella,
    title: "Crop Insurance",
    description: "Protect against crop loss",
    href: "/insurance",
    color: "bg-accent text-white",
  },
  {
    icon: Sprout,
    title: "Farm Advisory",
    description: "AI-powered crop tips",
    href: "/advisory",
    color: "bg-primary-dark text-white",
  },
  {
    icon: BarChart3,
    title: "Market Prices",
    description: "Live mandi rates",
    href: "/market",
    color: "bg-neutral-soft text-primary-dark",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
        <CardDescription>Access common services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {actions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="flex flex-col items-center rounded-lg p-3 text-center transition-colors hover:bg-muted/50"
            >
              <div className={`mb-2 rounded-full p-2 ${action.color}`}>
                <action.icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-medium">{action.title}</div>
              <div className="text-xs text-muted-foreground">{action.description}</div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

