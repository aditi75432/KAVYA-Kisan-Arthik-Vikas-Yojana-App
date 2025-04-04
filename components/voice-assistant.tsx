"use client"

import { useState, useEffect } from "react"
import { Mic, MicOff, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/contexts/language-context"

// Sample responses in different languages
const sampleResponses = {
  en: {
    loan: "Several loan options are available to you. For the Kisan Credit Card, you can get a loan of up to ₹1.6 lakh. Would you like to apply?",
    subsidy:
      "PM Kisan Yojana is available in your area, which will give you ₹6,000 annually. Would you like more information?",
    market:
      "Currently, the price of wheat in your area is ₹2,100 per quintal. Our AI analysis suggests it may increase to ₹2,300 in the next 2 weeks.",
    weather: "There's a good chance of rain in your area for the next 5 days. Plan your crop irrigation accordingly.",
    default: "I'm here to help you. You can ask about loans, subsidies, market prices, or weather.",
  },
  hi: {
    loan: "आपके लिए कई ऋण विकल्प उपलब्ध हैं। किसान क्रेडिट कार्ड के लिए आप 1.6 लाख रुपये तक का ऋण प्राप्त कर सकते हैं। क्या आप आवेदन करना चाहेंगे?",
    subsidy: "आपके क्षेत्र में PM किसान योजना उपलब्ध है, जिसमें आपको सालाना 6,000 रुपये मिलेंगे। क्या आप अधिक जानकारी चाहते हैं?",
    market:
      "वर्तमान में आपके क्षेत्र में गेहूं का मूल्य 2,100 रुपये प्रति क्विंटल है। हमारा AI विश्लेषण बताता है कि अगले 2 हफ्तों में यह बढ़कर 2,300 रुपये हो सकता है।",
    weather: "आपके क्षेत्र में अगले 5 दिनों में अच्छी बारिश की संभावना है। फसल की सिंचाई की योजना बनाएं।",
    default: "मैं आपकी सहायता के लिए हूँ। आप ऋण, सब्सिडी, बाजार मूल्य या मौसम के बारे में पूछ सकते हैं।",
  },
  ta: {
    loan: "உங்களுக்கு பல கடன் விருப்பங்கள் உள்ளன. கிசான் கிரெடிட் கார்டுக்கு, நீங்கள் ₹1.6 லட்சம் வரை கடன் பெறலாம். நீங்கள் விண்ணப்பிக்க விரும்புகிறீர்களா?",
    subsidy: "உங்கள் பகுதியில் பிஎம் கிசான் திட்டம் உள்ளது, இதில் உங்களுக்கு ஆண்டுக்கு ₹6,000 கிடைக்கும். மேலும் தகவல் வேண்டுமா?",
    market:
      "தற்போது உங்கள் பகுதியில் கோதுமை விலை குவிண்டாலுக்கு ₹2,100. அடுத்த 2 வாரங்களில் இது ₹2,300 ஆக உயரலாம் என்று எங்கள் AI பகுப்பாய்வு கூறுகிறது.",
    weather: "அடுத்த 5 நாட்களுக்கு உங்கள் பகுதியில் நல்ல மழை பெய்யும் வாய்ப்பு உள்ளது. பயிர் பாசனத்திற்கான திட்டம்.",
    default: "நான் உங்களுக்கு உதவ இங்கே இருக்கிறேன். நீங்கள் கடன்கள், மானியங்கள், சந்தை விலைகள் அல்லது வானிலை பற்றி கேட்கலாம்.",
  },
  // Add more languages as needed
}

// Default to English if language not available
const getResponseInLanguage = (language: string, type: string) => {
  if (sampleResponses[language] && sampleResponses[language][type]) {
    return sampleResponses[language][type]
  }
  return sampleResponses.en[type]
}

export function VoiceAssistant() {
  const { currentLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
  const [input, setInput] = useState("")

  // Update initial message when language changes
  useEffect(() => {
    setMessages([
      {
        role: "assistant",
        content: t("assistant.greeting"),
      },
    ])
  }, [currentLanguage, t])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages([...messages, { role: "user", content: input }])

    // Simulate AI response
    setTimeout(() => {
      let responseType = "default"

      if (
        input.toLowerCase().includes("loan") ||
        input.toLowerCase().includes("ऋण") ||
        input.toLowerCase().includes("கடன்")
      ) {
        responseType = "loan"
      } else if (
        input.toLowerCase().includes("subsidy") ||
        input.toLowerCase().includes("scheme") ||
        input.toLowerCase().includes("योजना") ||
        input.toLowerCase().includes("திட்டம்")
      ) {
        responseType = "subsidy"
      } else if (
        input.toLowerCase().includes("price") ||
        input.toLowerCase().includes("market") ||
        input.toLowerCase().includes("मूल्य") ||
        input.toLowerCase().includes("விலை")
      ) {
        responseType = "market"
      } else if (
        input.toLowerCase().includes("weather") ||
        input.toLowerCase().includes("rain") ||
        input.toLowerCase().includes("मौसम") ||
        input.toLowerCase().includes("வானிலை")
      ) {
        responseType = "weather"
      }

      const response = getResponseInLanguage(currentLanguage, responseType)
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    }, 1000)

    setInput("")
  }

  const toggleListening = () => {
    setIsListening(!isListening)
    // In a real implementation, this would start/stop speech recognition

    if (!isListening) {
      // Simulate voice recognition after 2 seconds
      setTimeout(() => {
        const demoQuestions = {
          en: "What is the current market price for wheat?",
          hi: "गेहूं का वर्तमान बाजार मूल्य क्या है?",
          ta: "கோதுமைக்கான தற்போதைய சந்தை விலை என்ன?",
        }

        const question = demoQuestions[currentLanguage] || demoQuestions.en
        setInput(question)

        // Auto-send after another second
        setTimeout(() => {
          handleSend()
          setIsListening(false)
        }, 1000)
      }, 2000)
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary-dark"
      >
        <Mic className="h-6 w-6" />
        <span className="sr-only">Open Voice Assistant</span>
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-primary">
              {t("app.name")} - {t("app.fullName")}
            </DialogTitle>
            <DialogDescription className="text-center">{t("assistant.hint")}</DialogDescription>
          </DialogHeader>
          <div className="flex h-[300px] flex-col gap-4 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === "user" ? "bg-primary text-white" : "bg-primary-light text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={toggleListening} className={isListening ? "bg-red-100" : ""}>
              {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </Button>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("assistant.placeholder")}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <Button size="icon" onClick={handleSend}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

