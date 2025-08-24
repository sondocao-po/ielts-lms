"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  BookOpen,
  Users,
  BarChart3,
  Clock,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Award,
  Target,
  Mail,
  AlertCircle,
  Check,
  Rocket,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Vote,
} from "lucide-react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [currentScreenshot, setCurrentScreenshot] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)
  const [activeFeature, setActiveFeature] = useState(0)
  const [timelineAnimated, setTimelineAnimated] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setSubmitStatus("error")
      setErrorMessage("Please enter your email address")
      return
    }

    if (!validateEmail(email)) {
      setSubmitStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate success (in real app, this would be an actual API call)
      setSubmitStatus("success")
      setEmail("")
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleGetStarted = () => {
    const ctaSection = document.getElementById("cta-section")
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const screenshots = [
    {
      title: "Exercise Builder",
      description: "Create custom IELTS exercises with our intuitive drag-and-drop interface",
      image: "/images/exercise-builder-new.png",
    },
    {
      title: "Student Management",
      description: "Comprehensive student tracking with detailed progress monitoring",
      image: "/images/student-management-new.png",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time insights into student performance and center metrics",
      image: "/images/analytics-dashboard-new.png",
    },
    {
      title: "Exercise Management",
      description: "Organize and manage your IELTS exercise library efficiently",
      image: "/images/exercise-management-new.png",
    },
    {
      title: "Class Management",
      description: "Schedule and manage IELTS classes with advanced scheduling tools",
      image: "/images/class-management-new.png",
    },
  ]

  const features = [
    {
      id: "student-management",
      icon: Users,
      title: "Student Management",
      description: `• Maintain detailed student profiles and enrollment records
• Track attendance and performance across all IELTS skills
• Generate comprehensive progress reports and analytics
• Set up automated reminders for assignments and tests
• Manage student communications and academic history
• Monitor individual learning journeys from enrollment to certification`,
      illustration: "/images/pic1.png", // Updated illustration property
    },
    {
      id: "exercise-builder",
      icon: BookOpen,
      title: "Exercise Builder",
      description: `• Create custom exercises for Reading, Writing, Listening, and Speaking
• Design exercises matching official IELTS format and difficulty
• Use drag-and-drop interface for easy exercise creation
• Integrate audio for listening exercises and recording for speaking
• Access extensive template library to save time
• Share exercises with other teachers in your center`,
      illustration: "/images/pic2.png", // Updated from pic2.svg to pic2.png
    },
    {
      id: "analytics-reports",
      icon: BarChart3,
      title: "Analytics & Reports",
      description: `• Track key performance indicators and learning patterns
• Generate automated reports for students, parents, and administrators
• Monitor class attendance and assignment completion rates
• Compare performance across different classes and time periods
• Identify areas where students need additional support
• Make data-driven decisions to improve teaching methods`,
      illustration: "/images/pic3.png", // Updated illustration property
    },
    {
      id: "class-scheduling",
      icon: Clock,
      title: "Class Scheduling",
      description: `• Create flexible timetables for different skill levels
• Handle recurring classes, one-time sessions, and makeup classes
• Send automated email and SMS reminders to students and teachers
• Track attendance patterns and identify at-risk students
• Integrate with popular calendar applications
• Manage room bookings and resource allocation efficiently`,
      illustration: "/images/pic4.png", // Updated illustration property
    },
    {
      id: "progress-tracking",
      icon: Target,
      title: "Progress Tracking",
      description: `• Monitor real-time student progress across all IELTS components
• Create individualized study plans based on diagnostic results
• Set achievable goals and celebrate student milestones
• Provide detailed feedback and improvement recommendations
• Track strengths and weaknesses with skill breakdowns
• Generate personalized learning paths for each student`,
      illustration: "/images/pic5.png", // Updated illustration property
    },
    {
      id: "certification-system",
      icon: Award,
      title: "Certification System",
      description: `• Generate beautiful, customizable certificates for achievements
• Create certificates for course completion and skill milestones
• Maintain digital portfolio of student accomplishments
• Provide shareable credentials for students
• Set up automated certificate generation based on criteria
• Build student confidence and motivation through recognition`,
      illustration: "/images/pic6.png", // Updated illustration property
    },
  ]

  const milestones = [
    {
      icon: Rocket,
      title: "Public Launch",
      description: "Full platform release to all users",
      status: "upcoming",
      date: "Dec 2025",
    },
    {
      icon: BookOpen,
      title: "Beta Testing",
      description: "Testing with select IELTS centers",
      status: "upcoming",
      date: "Oct 2025",
    },
  ]

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, screenshots.length])

  // Timeline animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !timelineAnimated) {
            setTimelineAnimated(true)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const timelineSection = document.getElementById("timeline-section")
    if (timelineSection) {
      observer.observe(timelineSection)
    }

    return () => {
      if (timelineSection) {
        observer.unobserve(timelineSection)
      }
    }
  }, [timelineAnimated])

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length)
  }

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const handleImageZoom = (imageSrc: string) => {
    setZoomedImage(imageSrc)
  }

  const FeatureIcon = ({ feature }) => {
    const IconComponent = feature.icon
    return <IconComponent className="h-8 w-8 text-primary" />
  }

  const FeatureTitle = ({ feature }) => {
    return <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-primary">IELTS Nook</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#timeline"
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Timeline
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button onClick={handleGetStarted}>Join the Waitlist</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                <a
                  href="#features"
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                >
                  How It Works
                </a>
                <a
                  href="#timeline"
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
                >
                  Timeline
                </a>
                <div className="pt-4 pb-3 border-t">
                  <div className="flex flex-col space-y-2">
                    <Button className="w-full" onClick={handleGetStarted}>
                      Join the Waitlist
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                🚀 Transform Your IELTS Teaching Center
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight">
                The Perfect <span className="text-primary">IELTS Solution</span> for Small & Medium Centers
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                IELTS Nook helps small and medium teaching centers deliver world-class IELTS preparation with less
                effort and better results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto" onClick={handleGetStarted}>
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Personalized demo session
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  No credit card required
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden shadow-2xl"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="relative aspect-video">
                  <img
                    src={screenshots[currentScreenshot].image || "/placeholder.svg"}
                    alt={screenshots[currentScreenshot].title}
                    className="w-full h-full object-cover cursor-zoom-in"
                    onClick={() => handleImageZoom(screenshots[currentScreenshot].image)}
                  />

                  {/* Zoom icon overlay */}
                  <div className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-4 w-4" />
                  </div>

                  {/* Navigation buttons */}
                  <button
                    onClick={prevScreenshot}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextScreenshot}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  {/* Screenshot info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">{screenshots[currentScreenshot].title}</h3>
                    <p className="text-white/90 text-sm">{screenshots[currentScreenshot].description}</p>
                  </div>
                </div>

                {/* Dots indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreenshot(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentScreenshot ? "bg-white" : "bg-white/50"
                      }`}
                      aria-label={`Go to screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary">Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Designed for Small & Medium Centers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              IELTS Nook provides all the tools you need to compete with larger institutions, without the enterprise
              price tag.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Feature Tabs - Single Scrollable Row */}
            <div className="relative mb-8">
              {/* Left Navigation Arrow */}
              <button
                onClick={() => {
                  const container = document.getElementById("feature-tabs-container")
                  if (container) {
                    container.scrollBy({ left: -300, behavior: "smooth" })
                  }
                }}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>

              {/* Scrollable Feature Tabs Container */}
              <div
                id="feature-tabs-container"
                className="flex gap-4 overflow-x-auto scrollbar-hide px-12 py-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={`flex-shrink-0 w-64 p-6 rounded-lg border-2 transition-all text-center ${
                      activeFeature === index
                        ? "border-primary bg-primary/10 shadow-md"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FeatureIcon feature={feature} />
                      </div>
                      <FeatureTitle feature={feature} />
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Navigation Arrow */}
              <button
                onClick={() => {
                  const container = document.getElementById("feature-tabs-container")
                  if (container) {
                    container.scrollBy({ left: 300, behavior: "smooth" })
                  }
                }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Feature Description Area */}
            <div className="bg-white rounded-lg border-2 border-gray-200 p-8 min-h-[400px]">
              {/* Single column on mobile (no illustration), two columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                {/* Left Half - Icon, Title, and Description - Full width on mobile */}
                <div className="flex flex-col pl-0 md:pl-8">
                  {/* Icon and Title */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FeatureIcon feature={features[activeFeature]} />
                    </div>
                    <div>
                      <FeatureTitle feature={features[activeFeature]} />
                      <div className="w-12 h-1 bg-primary rounded-full"></div>
                    </div>
                  </div>

                  {/* Feature Description */}
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                      {features[activeFeature].description}
                    </p>
                  </div>
                </div>

                {/* Right Half - Illustration - Hidden on mobile, visible on desktop */}
                <div className="hidden md:flex items-center justify-center bg-white pr-0 md:pr-8">
                  <img
                    src={features[activeFeature].illustration || "/placeholder.svg"}
                    alt={`${features[activeFeature].title} illustration`}
                    className="w-full h-full max-w-sm max-h-80 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Get Started in Minutes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Setting up your IELTS teaching center has never been easier. Follow these simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up & Setup",
                description: "Create your account and set up your teaching center profile in under 5 minutes.",
              },
              {
                step: "02",
                title: "Add Students & Classes",
                description: "Import your existing student data or add new students and create class schedules.",
              },
              {
                step: "03",
                title: "Start Teaching",
                description: "Begin using our comprehensive tools to deliver exceptional IELTS education.",
              },
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline Section */}
      <section id="timeline" className="py-12 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary">Development Timeline</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Our Journey to Launch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track our progress as we build the perfect IELTS solution for your teaching center.
            </p>
          </div>

          <div className="max-w-6xl mx-auto" id="timeline-section">
            {/* Horizontal Timeline */}
            <div className="relative">
              {/* Background Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>

              {/* Animated Progress Line */}
              <div
                className={`absolute top-1/2 left-0 h-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 transform -translate-y-1/2 transition-all duration-2000 ease-out ${
                  timelineAnimated ? "w-1/2" : "w-0"
                }`}
                style={{ transformOrigin: "left" }}
              ></div>

              {/* Timeline Nodes */}
              <div className="flex justify-center items-center relative space-x-32">
                {/* Node 1: Beta Testing */}
                <div
                  className={`flex flex-col items-center text-center max-w-xs transition-all duration-700 delay-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                    timelineAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500 delay-500 group-hover:shadow-2xl group-hover:bg-gray-800 ${
                        timelineAnimated ? "scale-100 rotate-0" : "scale-0 rotate-180"
                      }`}
                    >
                      <BookOpen className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <div
                    className={`bg-white rounded-lg p-4 shadow-md transition-all duration-500 delay-700 group-hover:shadow-xl ${
                      timelineAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      Beta Testing
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">Testing with select IELTS centers</p>
                    <Badge
                      variant="outline"
                      className="border-gray-400 text-gray-700 group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                    >
                      ⏳ Upcoming
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-2">Oct 2025</p>
                  </div>
                </div>

                {/* Node 2: Public Launch */}
                <div
                  className={`flex flex-col items-center text-center max-w-xs transition-all duration-700 delay-500 hover:scale-105 hover:-translate-y-2 cursor-pointer group ${
                    timelineAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div
                      className={`w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg transition-all duration-500 delay-700 group-hover:shadow-2xl group-hover:bg-gray-800 ${
                        timelineAnimated ? "scale-100 rotate-0" : "scale-0 rotate-180"
                      }`}
                    >
                      <Rocket className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <div
                    className={`bg-white rounded-lg p-4 shadow-md border transition-all duration-500 delay-900 group-hover:shadow-xl group-hover:border-gray-300 ${
                      timelineAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      Public Launch
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">Full platform release to all users</p>
                    <Badge
                      variant="outline"
                      className="border-gray-400 text-gray-700 group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                    >
                      ⏳ Upcoming
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-2">Dec 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div
              className={`text-center mt-12 transition-all duration-700 delay-1100 ${
                timelineAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Stay Updated on Our Progress</h3>
                  <p className="text-muted-foreground mb-4">
                    Join our waitlist to receive regular updates on development milestones and be the first to know when
                    we launch!
                  </p>
                  <Button onClick={handleGetStarted} size="lg">
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Be the First to Know When We Launch!</h2>
            <p className="text-lg opacity-90">
              IELTS Nook is coming soon! Join our waitlist and be among the first to transform your IELTS teaching
              center with our revolutionary platform.
            </p>
            <div className="max-w-md mx-auto space-y-4">
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (submitStatus === "error") {
                        setSubmitStatus("idle")
                        setErrorMessage("")
                      }
                    }}
                    disabled={isSubmitting}
                    className={`bg-primary-foreground text-primary placeholder:text-primary/60 border-primary-foreground ${
                      submitStatus === "error" ? "border-red-500" : ""
                    }`}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Notify Me
                    </>
                  )}
                </Button>
              </form>

              {/* Success State */}
              {submitStatus === "success" && (
                <Alert className="bg-green-50 border-green-200 text-green-800">
                  <Check className="h-4 w-4" />
                  <AlertDescription>{"Thank you! We'll notify you as soon as IELTS Nook is ready."}</AlertDescription>
                </Alert>
              )}

              {/* Error State */}
              {submitStatus === "error" && (
                <Alert className="bg-red-50 border-red-200 text-red-800">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
            </div>
            <p className="text-sm opacity-75">
              {"We'll send you an email as soon as the first version is ready. No spam, we promise!"}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold">IELTS Nook</h3>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                The complete learning management system designed specifically for small and medium IELTS teaching
                centers.
              </p>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 IELTS Nook. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <img
              src={zoomedImage || "/placeholder.svg"}
              alt="Zoomed screenshot"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* Feature Voting Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-shadow"
          onClick={() => window.open("https://forms.gle/xnyr1vnsAy4eSLHq9", "_blank")}
        >
          <Vote className="h-5 w-5 mr-2" />
          Help Us Prioritize!
        </Button>
      </div>

      {/* Custom CSS to hide scrollbars */}
      <style jsx>{`
        #feature-tabs-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
