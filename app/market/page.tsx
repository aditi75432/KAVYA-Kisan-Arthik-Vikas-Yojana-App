"use client"

import { Header } from "@/components/header"
import { VoiceAssistant } from "@/components/voice-assistant"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { TrendingUp, TrendingDown, AlertTriangle, Info, Calendar } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const marketPrices = [
  {
    crop: "Wheat",
    currentPrice: "₹2,000/qtl",
    lastWeekPrice: "₹1,800/qtl",
    change: "+10%",
    trend: "up",
  },
  {
    crop: "Rice",
    currentPrice: "₹1,800/qtl",
    lastWeekPrice: "₹1,900/qtl",
    change: "-5%",
    trend: "down",
  },
  {
    crop: "Mustard",
    currentPrice: "₹4,500/qtl",
    lastWeekPrice: "₹4,300/qtl",
    change: "+4%",
    trend: "up",
  },
  {
    crop: "Cotton",
    currentPrice: "₹6,200/qtl",
    lastWeekPrice: "₹6,000/qtl",
    change: "+3%",
    trend: "up",
  },
  {
    crop: "Soybean",
    currentPrice: "₹3,800/qtl",
    lastWeekPrice: "₹3,900/qtl",
    change: "-2%",
    trend: "down",
  },
]

const priceData = [
  { month: "Jan", wheat: 1800, rice: 1700, mustard: 4000 },
  { month: "Feb", wheat: 1850, rice: 1750, mustard: 4100 },
  { month: "Mar", wheat: 1900, rice: 1800, mustard: 4200 },
  { month: "Apr", wheat: 2000, rice: 1800, mustard: 4500 },
  { month: "May", wheat: 2100, rice: 1850, mustard: 4600 },
  { month: "Jun", wheat: 2050, rice: 1900, mustard: 4550 },
]

const marketAlerts = [
  {
    id: "1",
    title: "Govt MSP Increase Expected Next Month",
    description: "Government is planning to increase MSP for wheat and rice by 5-7%",
    type: "info",
  },
  {
    id: "2",
    title: "Heavy Rain Forecast in Punjab - Store Crops Safely",
    description: "Meteorological Department predicts heavy rainfall in the next week",
    type: "warning",
  },
]

export default function MarketPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-4">
          <div>
            <h1 className="text-2xl font-bold text-primary-dark">{t("app.market")}</h1>
            <p className="text-muted-foreground">Stay informed about mandi prices and trends</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t("market.prices")}</CardTitle>
              <CardDescription>Current prices from government data APIs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketPrices.map((crop, index) => (
                  <div key={index} className="flex items-center justify-between rounded-lg border p-4">
                    <div>
                      <div className="font-medium">{crop.crop}</div>
                      <div className="text-sm text-muted-foreground">
                        {t("market.lastWeek")}: {crop.lastWeekPrice}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-medium">{crop.currentPrice}</div>
                        <div
                          className={`flex items-center text-sm ${
                            crop.trend === "up" ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {crop.trend === "up" ? (
                            <TrendingUp className="mr-1 h-3 w-3" />
                          ) : (
                            <TrendingDown className="mr-1 h-3 w-3" />
                          )}
                          {crop.change}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Button className="bg-primary">
              <Calendar className="mr-2 h-4 w-4" />
              {t("market.trends")}
            </Button>
            <Button className="bg-accent">
              <TrendingUp className="mr-2 h-4 w-4" />
              {t("market.prediction")}
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t("market.trends")} (Last 6 Months)</CardTitle>
              <CardDescription>Track how crop prices have changed over time</CardDescription>
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
                  mustard: {
                    label: "Mustard (₹/quintal)",
                    color: "hsl(var(--muted-foreground))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
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
                      dataKey="mustard"
                      strokeWidth={2}
                      activeDot={{ r: 6, style: { fill: "var(--color-mustard)", opacity: 0.8 } }}
                      style={{ stroke: "var(--color-mustard)" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Alert className="bg-primary-light">
            <Info className="h-4 w-4" />
            <AlertTitle>{t("market.insights")}</AlertTitle>
            <AlertDescription>
              <span className="font-medium">Best time to sell Wheat: 10-Apr to 20-Apr</span>
              <p className="mt-1 text-sm">
                Based on historical data and current market trends, our AI predicts wheat prices will peak in mid-April.
                Consider storing your harvest until then for maximum profit.
              </p>
            </AlertDescription>
          </Alert>

          <Card>
            <CardHeader>
              <CardTitle>{t("market.news")}</CardTitle>
              <CardDescription>Important updates that may affect crop prices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {marketAlerts.map((alert) => (
                  <Alert
                    key={alert.id}
                    className={alert.type === "warning" ? "bg-red-50 border-red-200" : "bg-blue-50 border-blue-200"}
                  >
                    {alert.type === "warning" ? (
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                    ) : (
                      <Info className="h-4 w-4 text-blue-600" />
                    )}
                    <AlertTitle className={alert.type === "warning" ? "text-red-800" : "text-blue-800"}>
                      {alert.title}
                    </AlertTitle>
                    <AlertDescription className="text-sm">{alert.description}</AlertDescription>
                  </Alert>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <VoiceAssistant />
    </div>
  )
}

