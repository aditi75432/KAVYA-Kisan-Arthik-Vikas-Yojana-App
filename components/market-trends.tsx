"use client"

import { TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { date: "Jan", wheat: 2100, rice: 3200, cotton: 5800 },
  { date: "Feb", wheat: 2200, rice: 3100, cotton: 5900 },
  { date: "Mar", wheat: 2300, rice: 3300, cotton: 6000 },
  { date: "Apr", wheat: 2150, rice: 3400, cotton: 5950 },
  { date: "May", wheat: 2250, rice: 3200, cotton: 6100 },
  { date: "Jun", wheat: 2400, rice: 3300, cotton: 6200 },
]

export function MarketTrends() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Market Trends</CardTitle>
        <TrendingUp className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            wheat: {
              label: "Wheat (₹/quintal)",
              color: "hsl(var(--primary))",
            },
            rice: {
              label: "Rice (₹/quintal)",
              color: "hsl(var(--accent))",
            },
            cotton: {
              label: "Cotton (₹/quintal)",
              color: "hsl(var(--muted-foreground))",
            },
          }}
          className="h-[200px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="wheat"
                strokeWidth={2}
                activeDot={{ r: 6, style: { fill: "var(--color-wheat)", opacity: 0.8 } }}
                style={{ stroke: "var(--color-wheat)" }}
              />
              <Line
                type="monotone"
                dataKey="rice"
                strokeWidth={2}
                activeDot={{ r: 6, style: { fill: "var(--color-rice)", opacity: 0.8 } }}
                style={{ stroke: "var(--color-rice)" }}
              />
              <Line
                type="monotone"
                dataKey="cotton"
                strokeWidth={2}
                activeDot={{ r: 6, style: { fill: "var(--color-cotton)", opacity: 0.8 } }}
                style={{ stroke: "var(--color-cotton)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-2 text-xs text-muted-foreground">
          AI Prediction: Wheat prices expected to rise by 8% in the next 2 weeks
        </div>
      </CardContent>
    </Card>
  )
}

