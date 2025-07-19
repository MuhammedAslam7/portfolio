"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  ExternalLink,
  Download,
  Code,
  Database,
  Globe,
  Smartphone,
  Menu,
  X,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast, Toaster } from "sonner"

interface Skill {
  name: string
  level: number
  category: string
}

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  features: string[]
  status?: string
}

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

interface Stat {
  number: string
  label: string
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const skills: Skill[] = [
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React.js", level: 85, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "MongoDB", level: 75, category: "database" },
    { name: "Express.js", level: 80, category: "backend" },
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "TypeScript", level: 70, category: "frontend" },
    { name: "Next.js", level: 75, category: "frontend" },
    { name: "MySQL", level: 70, category: "database" },
    { name: "Git/GitHub", level: 85, category: "tools" },
    { name: "AWS", level: 65, category: "cloud" },
    { name: "Docker", level: 60, category: "tools" },
  ]

  const projects: Project[] = [
    {
      title: "AudioHub E-commerce Platform",
      description:
        "A comprehensive full-stack e-commerce solution for audio devices built with the MERN stack. Features advanced product management, secure payment processing, real-time inventory tracking, and an intuitive admin dashboard.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT", "Redux", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Advanced User Authentication & Authorization",
        "Dynamic Product Catalog with Search & Filters",
        "Secure Shopping Cart & Checkout Process",
        "Stripe Payment Gateway Integration",
        "Real-time Inventory Management",
        "Comprehensive Admin Dashboard",
        "Order Tracking & Management System",
        "Responsive Mobile-First Design",
      ],
    },
    {
      title: "SocialConnect Platform",
      description:
        "A modern, feature-rich social media web application currently live and serving users. Built with MERN stack, featuring real-time messaging, content sharing, and advanced social networking capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Cloudinary", "JWT", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live",
      features: [
        "Real-time Chat & Notifications System",
        "Advanced Post Creation & Media Sharing",
        "User Profiles & Social Following System",
        "Image/Video Upload with Cloudinary",
        "Like, Comment & Share Functionality",
        "News Feed Algorithm",
        "Privacy Controls & Settings",
        "Progressive Web App (PWA) Support",
      ],
    },
  ]

  const services: Service[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Web Development",
      description:
        "End-to-end web application development using MERN stack with scalable architecture, modern best practices, and performance optimization.",
      features: ["Custom Web Applications", "API Development", "Database Design", "Performance Optimization"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Creating stunning, responsive user interfaces using React.js, Next.js, and modern CSS frameworks with focus on user experience.",
      features: ["React Applications", "Responsive Design", "UI/UX Implementation", "Performance Optimization"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Building robust, scalable server-side applications with Node.js, Express.js, and comprehensive database management solutions.",
      features: ["RESTful APIs", "Database Management", "Authentication Systems", "Server Architecture"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description:
        "Ensuring your applications work flawlessly across all devices with responsive design and progressive web app capabilities.",
      features: ["Responsive Design", "PWA Development", "Cross-browser Testing", "Mobile Optimization"],
    },
  ]

  const stats: Stat[] = [
    { number: "2+", label: "Years Experience" },
    { number: "15+", label: "Projects Completed" },
    { number: "2", label: "Live Applications" },
    { number: "100%", label: "Client Satisfaction" },
  ]

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Message sent successfully!", {
        description: "Thank you for your message. I'll get back to you within 24 hours.",
      })
      e.currentTarget.reset()
    } catch (error) {
      console.log(error)
      toast.error("Error sending message", {
        description: "Please try again later or contact me directly.",
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "services", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About", "Skills", "Projects", "Services", "Contact"]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-white"
            >
              Muhammed Aslam
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    activeSection === item.toLowerCase() ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-800"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm font-medium transition-colors hover:text-white ${
                      activeSection === item.toLowerCase() ? "text-white" : "text-gray-400"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Full Screen Background Image */}
        <div className="absolute inset-0">
          <img
            src="IMG_20230407_172701.jpg"
            alt="Developer Workspace"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="container mx-auto px-6 text-left relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Muhammed Aslam
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              <span className="text-white font-semibold">MERN Stack Developer</span> & Full-Stack Engineer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-400 mb-8 leading-relaxed"
            >
              Passionate full-stack developer specializing in MongoDB, Express.js, React, and Node.js. Creating
              scalable, high-performance web applications with modern technologies and industry best practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent font-semibold"
              >
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">About Me</h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <img
                  src="Aslam.jpg"
                  alt="About Muhammed Aslam"
                  className="w-80 h-80 rounded-full shadow-2xl object-cover border-4 border-gray-700"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-white">Professional MERN Stack Developer</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I am a passionate and highly skilled MERN Stack Developer with expertise in creating robust, scalable
                  web applications. With a solid foundation in computer science and hands-on experience in modern web
                  technologies, I excel in dynamic and collaborative environments.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My strong analytical skills and commitment to continuous learning enable me to deliver innovative
                  solutions that meet user needs and exceed expectations. I am dedicated to leveraging my technical
                  expertise to develop high-quality projects and drive technological advancements.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <span className="font-semibold text-white w-20">Age:</span>
                      <span>22 years</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="font-semibold text-white w-20">Location:</span>
                      <span>Kerala, India</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="font-semibold text-white w-20">Education:</span>
                      <span>BCom Computer Application</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <span className="font-semibold text-white w-20">Experience:</span>
                      <span>2+ Years</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="font-semibold text-white w-20">Freelance:</span>
                      <span className="text-green-400">Available</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <span className="font-semibold text-white w-20">Languages:</span>
                      <span>English, Hindi, Malayalam</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 pt-6">
                  <a
                    href="https://www.linkedin.com/in/muhammed-aslam-10a524313/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" className="bg-gray-800 hover:bg-gray-700 text-white">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </a>
                  <a href="https://github.com/muhammedaslamka" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-gray-800 hover:bg-gray-700 text-white">
                      <Github className="w-4 h-4" />
                    </Button>
                  </a>
                  <a href="https://www.instagram.com/aslu_7" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-gray-800 hover:bg-gray-700 text-white">
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </a>
                  <a href="https://www.facebook.com/aslamaslu1215/" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="bg-gray-800 hover:bg-gray-700 text-white">
                      <Facebook className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Skills & Technologies</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold text-lg">{skill.name}</span>
                    <span className="text-gray-400 font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Technology Stack</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "MongoDB",
                  "Express.js",
                  "React.js",
                  "Node.js",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "HTML5",
                  "CSS3",
                  "Tailwind CSS",
                  "Bootstrap",
                  "Material-UI",
                  "Redux",
                  "Context API",
                  "REST APIs",
                  "GraphQL",
                  "JWT",
                  "OAuth",
                  "MySQL",
                  "PostgreSQL",
                  "Firebase",
                  "AWS",
                  "Docker",
                  "Git",
                  "GitHub",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700 px-4 py-2 text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Featured Projects</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 overflow-hidden h-full">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      {project.status && (
                        <Badge className="absolute top-4 right-4 bg-green-600 text-white">{project.status}</Badge>
                      )}
                    </div>
                    <div className="p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-white text-xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-gray-300 text-sm leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-gray-600 text-gray-300 bg-gray-700/50 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="border-gray-600 text-gray-300 bg-gray-700/50 text-xs">
                              +{project.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                          <div className="grid grid-cols-1 gap-1">
                            {project.features.slice(0, 4).map((feature, idx) => (
                              <div key={idx} className="flex items-center text-gray-300">
                                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-xs">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-3 pt-4">
                          <Button size="sm" className="bg-white text-black hover:bg-gray-200 font-semibold">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live Demo
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                          >
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300 h-full">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-4 bg-gray-800 rounded-full w-fit">
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <CardTitle className="text-white text-xl mb-3">{service.title}</CardTitle>
                      <CardDescription className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Get In Touch</h2>

            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8">Let's Work Together</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    I'm always interested in new opportunities and exciting projects. Whether you need a full-stack web
                    application, want to discuss a project, or just want to say hello, feel free to reach out.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gray-800 rounded-full">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Location</p>
                        <p className="text-gray-400">Ernakulam, Pallikkara, Kerala 683565</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gray-800 rounded-full">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-gray-400">aslamaslu1215@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gray-800 rounded-full">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">Phone</p>
                        <p className="text-gray-400">+91 7025399314</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/muhammed-aslam-10a524313/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" className="bg-gray-800 hover:bg-gray-700 text-white">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href="https://github.com/muhammedaslamka" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-gray-800 hover:bg-gray-700 text-white">
                        <Github className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href="https://www.instagram.com/aslu_7" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-gray-800 hover:bg-gray-700 text-white">
                        <Instagram className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href="https://www.facebook.com/aslamaslu1215/" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-gray-800 hover:bg-gray-700 text-white">
                        <Facebook className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl">Send a Message</CardTitle>
                    <CardDescription className="text-gray-400">I'll get back to you within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input
                          name="name"
                          placeholder="Your Name"
                          required
                          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-white"
                        />
                        <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          required
                          className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-white"
                        />
                      </div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-white"
                      />
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={6}
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-white resize-none"
                      />
                      <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3">
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">© 2024 Muhammed Aslam. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">Built with Next.js, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}
