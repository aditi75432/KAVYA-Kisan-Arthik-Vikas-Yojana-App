import { Header } from "@/components/header"
import { VoiceAssistant } from "@/components/voice-assistant"
import { WalletOverview } from "@/components/wallet-overview"
import { CreditScore } from "@/components/credit-score"
import { UpcomingSubsidies } from "@/components/upcoming-subsidies"
import { MarketTrends } from "@/components/market-trends"
import { QuickActions } from "@/components/quick-actions"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-full">
            <h1 className="text-2xl font-bold text-primary-dark">Welcome, Ramesh</h1>
            <p className="text-muted-foreground">Here's your financial overview</p>
          </div>
          <div className="md:col-span-1">
            <WalletOverview />
          </div>
          <div className="md:col-span-1">
            <CreditScore />
          </div>
          <div className="md:col-span-2">
            <UpcomingSubsidies />
          </div>
          <div className="col-span-full">
            <QuickActions />
          </div>
          <div className="col-span-full">
            <MarketTrends />
          </div>
        </div>
      </main>
      <VoiceAssistant />
    </div>
  )
}

