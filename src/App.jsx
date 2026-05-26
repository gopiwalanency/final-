import { useEffect, useState } from 'react'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import FocusMarquee from './components/FocusMarquee'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import IntroScreen from './components/IntroScreen'
import ProjectDetailPage from './components/ProjectDetailPage'
import ProjectsSection from './components/ProjectsSection'
import { projects } from './data/portfolioData'
import './App.css'

function App() {
  const [activePath, setActivePath] = useState(window.location.pathname)
  const [showIntro, setShowIntro] = useState(true)
  const [isIntroLeaving, setIsIntroLeaving] = useState(false)

  useEffect(() => {
    const handlePopState = () => {
      setActivePath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    if (!showIntro) {
      return undefined
    }

    const leaveTimer = window.setTimeout(() => {
      setIsIntroLeaving(true)
    }, 2200)

    const hideTimer = window.setTimeout(() => {
      setShowIntro(false)
    }, 2900)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(hideTimer)
    }
  }, [showIntro])

  const navigateTo = (path) => {
    window.history.pushState({}, '', path)
    setActivePath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openProject = (slug) => {
    navigateTo(`/projects/${slug}`)
  }

  const currentProject = projects.find(
    (project) => activePath === `/projects/${project.slug}`,
  )

  const renderPage = () => {
    switch (activePath) {
      case '/about':
        return <AboutSection />
      case '/projects':
        return (
          <ProjectsSection
            projects={projects}
            onProjectSelect={openProject}
          />
        )
      case '/contact':
        return <ContactSection />
      default:
        if (activePath.startsWith('/projects/')) {
          return (
            <ProjectDetailPage
              project={currentProject}
              onBack={() => navigateTo('/projects')}
            />
          )
        }

        return (
          <>
            <HeroSection onNavigate={navigateTo} />
            <FocusMarquee />
            <ProjectsSection
              projects={projects}
              onProjectSelect={openProject}
            />
          </>
        )
    }
  }

  return (
    <main>
      {showIntro && <IntroScreen isLeaving={isIntroLeaving} />}
      <Header activePath={activePath} onNavigate={navigateTo} />
      {renderPage()}
    </main>
  )
}

export default App
