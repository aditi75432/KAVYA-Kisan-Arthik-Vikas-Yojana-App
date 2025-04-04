import { Gauge } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function CreditScore() {
  const score = 720 // Example score
  const maxScore = 900
  const percentage = (score / maxScore) * 100

  // Determine color based on score
  let color = "text-red-500"
  if (score > 750) color = "text-green-500"
  else if (score > 650) color = "text-yellow-500"

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">AI Credit Score</CardTitle>
        <Gauge className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="relative h-24 w-24">
            <svg className="h-full w-full" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="10" />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke={color.replace("text-", "")}
                strokeWidth="10"
                strokeDasharray={`${(2 * Math.PI * 45 * percentage) / 100} ${(2 * Math.PI * 45 * (100 - percentage)) / 100}`}
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
                {score}
              </text>
            </svg>
          </div>
          <div className={`mt-2 text-sm font-medium ${color}`}>Good</div>
          <CardDescription className="mt-1 text-center">Eligible for loans up to ₹50,000</CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}

