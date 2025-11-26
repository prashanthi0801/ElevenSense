import TextType from './components/TextType';
import LiquidEther from './components/LiquidEther';
import ScrollFloat from './components/ScrollFloat';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';

import './App.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <div className="app">

      {/* Background */}
      <div className="ether-bg">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={70}
          isViscous={false}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
        />
      </div>

      {/* NAVBAR */}
      <nav>
        <div className="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">ElevenSense</span>
        </div>

        <div className="menu">
          <button>Features</button>
          <button>How it works</button>
        </div>

        <button className="cta-button">Get Started</button>
      </nav>

      <div className="hero-glow"></div>

      {/* HERO */}
      <div className="hero-wrapper">
        <div className="hero-pill">Powered by Advanced AI</div>

        <h1 className="hero-title">
          <span>News </span>
          <TextType
            text={['Reimagined', 'Made Smarter', 'Upgraded with AI']}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            className="inline-text-type"
          />
        </h1>

        <p className="hero-description">
          Get AI-powered summaries of the latest news, personalized to your interests.
          Stay informed faster with ElevenSense.
        </p>
      </div>

      {/* space before features */}
      <div style={{ height: "20vh" }} />

      {/* FEATURES TITLE */}
      <ScrollFloat
        animationDuration={1.6}
        ease='back.inOut(1.5)'
        scrollStart='top 85%'
        scrollEnd='bottom 60%'
        stagger={0.08}
      >
        Features
      </ScrollFloat>

      {/* FEATURES STACK */}
      <ScrollStack useWindowScroll={true}>
        <ScrollStackItem>
          <h2>Lightning-Fast AI Summaries</h2>
          <p>Instant breakdowns of global events in seconds.</p>
        </ScrollStackItem>

        <ScrollStackItem>
          <h2>Personalized News Feed</h2>
          <p>Your interests determine the stories you see.</p>
        </ScrollStackItem>

        <ScrollStackItem>
          <h2>Deep Context & Insights</h2>
          <p>Understand the “why” behind major events.</p>
        </ScrollStackItem>
      </ScrollStack>

      {/* bottom space */}
      <div style={{ height: "50vh" }} />
    </div>
  );
}

