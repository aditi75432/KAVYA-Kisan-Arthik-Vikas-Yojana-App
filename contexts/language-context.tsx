"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = {
  code: string
  name: string
}

export const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी" },
  { code: "ta", name: "தமிழ்" },
  { code: "te", name: "తెలుగు" },
  { code: "mr", name: "मराठी" },
  { code: "bn", name: "বাংলা" },
]

type LanguageContextType = {
  currentLanguage: string
  setLanguage: (code: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const translations: Record<string, Record<string, string>> = {
  en: {
    // Common
    "app.name": "KAVYA",
    "app.fullName": "Kisan Arthik Vikas Yojana Assistant",
    "app.welcome": "Welcome",
    "app.dashboard": "Dashboard",
    "app.wallet": "Wallet",
    "app.loans": "Loans",
    "app.schemes": "Schemes",
    "app.market": "Market",
    "app.profile": "Profile",
    "app.settings": "Settings",
    "app.logout": "Logout",
    "app.notifications": "Notifications",
    "app.help": "Help",
    "app.search": "Search",

    // Wallet
    "wallet.balance": "Wallet Balance",
    "wallet.lastUpdated": "Last Updated",
    "wallet.transactions": "Transactions",
    "wallet.addFunds": "Add Funds",
    "wallet.withdraw": "Withdraw",
    "wallet.transfer": "Transfer",
    "wallet.howItWorks": "How It Works?",
    "wallet.insights": "AI Insights",
    "wallet.tokenBalance": "Token Balance",
    "wallet.totalEarned": "Total Earned",
    "wallet.totalSpent": "Total Spent",
    "wallet.all": "All",
    "wallet.credits": "Credits",
    "wallet.debits": "Debits",
    "wallet.tokens": "Tokens",

    // Loans
    "loans.creditScore": "Your Credit Score",
    "loans.riskAnalysis": "AI Risk Analysis",
    "loans.offers": "Loan Offers",
    "loans.terms": "View Loan Terms",
    "loans.apply": "Apply",
    "loans.repayment": "Loan Repayment Schedule",
    "loans.literacy": "Financial Literacy",
    "loans.preApproved": "Pre-approved",
    "loans.pendingApproval": "Pending Approval",
    "loans.applyNow": "Apply Now",
    "loans.due": "Due",
    "loans.overdue": "Overdue! Pay Now",

    // Schemes
    "schemes.yojanas": "Government Yojanas",
    "schemes.search": "Search Government Schemes",
    "schemes.checkEligibility": "Check Eligibility",
    "schemes.subsidyHistory": "Subsidy History",
    "schemes.applied": "Applied",
    "schemes.active": "Active",
    "schemes.pending": "Pending Approval",
    "schemes.credited": "Credited on",

    // Market
    "market.prices": "Live Mandi Prices",
    "market.trends": "Historical Price Trends",
    "market.prediction": "AI Price Prediction",
    "market.insights": "AI Insights",
    "market.news": "News & Market Alerts",
    "market.lastWeek": "Last Week",

    // Voice Assistant
    "assistant.greeting": "Hello! I'm your agricultural financial assistant KAVYA. How can I help you?",
    "assistant.placeholder": "Type your message...",
    "assistant.hint": "You can ask me about loans, subsidies, market prices or weather",
  },
  hi: {
    // Common
    "app.name": "KAVYA",
    "app.fullName": "किसान आर्थिक विकास योजना सहायक",
    "app.welcome": "स्वागत है",
    "app.dashboard": "डैशबोर्ड",
    "app.wallet": "वॉलेट",
    "app.loans": "ऋण",
    "app.schemes": "योजनाएँ",
    "app.market": "बाज़ार",
    "app.profile": "प्रोफाइल",
    "app.settings": "सेटिंग्स",
    "app.logout": "लॉगआउट",
    "app.notifications": "सूचनाएँ",
    "app.help": "सहायता",
    "app.search": "खोजें",

    // Wallet
    "wallet.balance": "वॉलेट बैलेंस",
    "wallet.lastUpdated": "अंतिम अपडेट",
    "wallet.transactions": "लेनदेन",
    "wallet.addFunds": "फंड जोड़ें",
    "wallet.withdraw": "निकासी",
    "wallet.transfer": "ट्रांसफर",
    "wallet.howItWorks": "यह कैसे काम करता है?",
    "wallet.insights": "AI अंतर्दृष्टि",
    "wallet.tokenBalance": "टोकन बैलेंस",
    "wallet.totalEarned": "कुल कमाई",
    "wallet.totalSpent": "कुल खर्च",
    "wallet.all": "सभी",
    "wallet.credits": "क्रेडिट",
    "wallet.debits": "डेबिट",
    "wallet.tokens": "टोकन",

    // Loans
    "loans.creditScore": "आपका क्रेडिट स्कोर",
    "loans.riskAnalysis": "AI जोखिम विश्लेषण",
    "loans.offers": "ऋण प्रस्ताव",
    "loans.terms": "ऋण शर्तें देखें",
    "loans.apply": "आवेदन करें",
    "loans.repayment": "ऋण चुकौती अनुसूची",
    "loans.literacy": "वित्तीय साक्षरता",
    "loans.preApproved": "पूर्व-स्वीकृत",
    "loans.pendingApproval": "स्वीकृति लंबित",
    "loans.applyNow": "अभी आवेदन करें",
    "loans.due": "देय",
    "loans.overdue": "अतिदेय! अभी भुगतान करें",

    // Schemes
    "schemes.yojanas": "सरकारी योजनाएँ",
    "schemes.search": "सरकारी योजनाएँ खोजें",
    "schemes.checkEligibility": "पात्रता जाँचें",
    "schemes.subsidyHistory": "सब्सिडी इतिहास",
    "schemes.applied": "आवेदित",
    "schemes.active": "सक्रिय",
    "schemes.pending": "स्वीकृति लंबित",
    "schemes.credited": "जमा किया गया",

    // Market
    "market.prices": "लाइव मंडी मूल्य",
    "market.trends": "ऐतिहासिक मूल्य रुझान",
    "market.prediction": "AI मूल्य भविष्यवाणी",
    "market.insights": "AI अंतर्दृष्टि",
    "market.news": "समाचार और बाजार अलर्ट",
    "market.lastWeek": "पिछले सप्ताह",

    // Voice Assistant
    "assistant.greeting": "नमस्ते! मैं आपकी कृषि वित्तीय सहायक KAVYA हूँ। मैं आपकी कैसे मदद कर सकती हूँ?",
    "assistant.placeholder": "अपना संदेश टाइप करें...",
    "assistant.hint": "आप मुझसे ऋण, सब्सिडी, बाजार मूल्य या मौसम के बारे में पूछ सकते हैं",
  },
  // Add more languages as needed
}

// Add basic translations for other languages
languages.forEach((lang) => {
  if (!translations[lang.code] && lang.code !== "en" && lang.code !== "hi") {
    translations[lang.code] = translations.en
  }
})

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en")

  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && languages.some((lang) => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const setLanguage = (code: string) => {
    setCurrentLanguage(code)
    localStorage.setItem("language", code)
  }

  const t = (key: string) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key
  }

  return <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

