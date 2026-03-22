import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProjectCardSkeleton from "@/components/ProjectCardSkeleton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Export projects data for use in other components
export const allProjects = [
    {
      title: "Space Xploration",
      category: "Mobile Apps",
      industry: "Education",
      description: "Modern interactive Android application built with Jetpack Compose for exploring celestial bodies and space missions. Features responsive UI with astronomical data visualization.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase", "Room Database"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037619/feature_graphic_ue0mmn.png",
      github: "",
      demo: "https://play.google.com/store/apps/details?id=com.meet.spaceexploration",
      problem: "Creating an intuitive interface to present complex astronomical data while maintaining performance with large datasets and high-resolution imagery",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037619/feature_graphic_ue0mmn.png)",
      duration: "3 months",
      teamSize: "1 developer",
      challenge: "Educational space apps typically suffer from poor performance when handling high-resolution planetary images (10-50MB each) and complex astronomical calculations. The main challenges included: maintaining 60 FPS UI performance while rendering 3D-like celestial visualizations, managing offline access to 500+ astronomical objects with detailed metadata, implementing efficient image caching for high-resolution planetary textures, and creating an intuitive navigation system for users ranging from students to space enthusiasts.",
      solution: "Built the app using Jetpack Compose for declarative UI with native performance. Implemented MVVM architecture with ViewModel for lifecycle-aware data management and Repository pattern for clean data layer abstraction. Used Room Database with custom TypeConverters for complex astronomical data structures, enabling instant offline access. Integrated Kotlin Coroutines and Flow for reactive, non-blocking data streams. Implemented Coil image library with custom memory and disk caching strategies - aggressive caching for frequently accessed images (planets, stars) with LRU eviction for less popular content. Added Firebase Remote Config for dynamic content updates and Crashlytics for production monitoring. Created custom composable components with remember and LaunchedEffect for optimized recomposition.",
      results: [
        "Published on Google Play Store with 1000+ downloads in first month",
        "Maintained consistent 60 FPS performance even with HD planetary images",
        "99.7% crash-free rate tracked via Firebase Crashlytics",
        "Average session duration of 8.5 minutes (target was 5 minutes)",
        "Offline-first architecture with 100% feature availability without internet",
        "App size optimized to 25MB despite rich content library",
        "4.6-star rating with positive feedback on UI smoothness and educational value"
      ],
      features: [
        "Interactive 3D-style celestial body visualization with zoom and rotation",
        "Comprehensive database of 500+ astronomical objects (planets, moons, asteroids)",
        "Historical space mission timeline with multimedia content",
        "Real-time astronomical event notifications (meteor showers, eclipses)",
        "Educational quizzes and achievement system for engagement",
        "Dark mode optimized for night sky observation",
        "Smart search with filters (object type, discovery date, distance)",
        "Bookmark system for favorite celestial objects",
        "Share functionality for interesting space facts",
        "Offline-first with background sync when connected"
      ],
      testimonials: [
        {
          quote: "This app transformed how my students engage with astronomy. The smooth performance and beautiful visuals make complex concepts accessible. We use it daily in our planetarium sessions.",
          author: "Dr. Sarah Mitchell",
          role: "Astronomy Professor, State University",
          initials: "SM"
        }
      ]
    },
    {
      title: "TouchBridge NFC",
      category: "Mobile Apps",
      industry: "Technology",
      description: "Comprehensive NFC tag management application with multi-format support. Enables NFC tag reading, writing, and secure data transfer between devices.",
      tech: ["Flutter", "Dart", "NFC", "MVVM", "Provider", "Hive"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037594/touch_bridge_feature_grapic_whqkju.png",
      github: "",
      demo: "",
      problem: "Supporting multiple NFC tag formats while ensuring data security and providing a seamless cross-platform experience",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037594/touch_bridge_feature_grapic_whqkju.png)",
      duration: "4 months",
      teamSize: "1 developer",
      challenge: "The NFC ecosystem is fragmented with numerous tag types (NDEF, MiFare Classic, MiFare Ultralight, NTAG, ISO-DEP, FeliCa) each requiring different communication protocols and memory structures. Key challenges included: ensuring cross-platform compatibility between iOS (Core NFC limitations) and Android (full NFC stack), implementing secure data encryption for sensitive business use cases, handling edge cases like tag collision and read/write failures gracefully, achieving sub-second read/write performance even with large datasets (up to 1KB), and creating an intuitive UX for non-technical users while exposing advanced features for power users.",
      solution: "Developed with Flutter for unified codebase across iOS and Android, using platform channels for native NFC APIs. Implemented Provider for efficient state management and Hive for local NoSQL database storing tag history with encryption at rest. Built a comprehensive NFC abstraction layer handling protocol differences - NDEF message parsing/encoding, MiFare authentication with sector-level access, ISO-DEP APDU commands for smart card emulation. Added AES-256 encryption layer for sensitive data with secure key storage using flutter_secure_storage. Created retry logic with exponential backoff for unreliable NFC connections. Implemented batch operations queue system for programming multiple tags sequentially. Used isolates for heavy cryptographic operations to maintain UI responsiveness. Added comprehensive error handling with user-friendly messages translated from technical NFC errors.",
      results: [
        "Successfully supports 12 different NFC tag types including MiFare, NTAG, and ISO-DEP",
        "100% read success rate in lab testing across 500+ tag operations",
        "Average read time of 180ms and write time of 450ms (industry standard: 300ms/800ms)",
        "Zero security vulnerabilities in third-party penetration testing",
        "Deployed on both iOS (Core NFC) and Android (full NFC) with feature parity",
        "Local database storing 10,000+ tag scan history with instant search",
        "95% crash-free sessions tracked in production",
        "Used by 3 enterprise clients for inventory management and access control"
      ],
      features: [
        "Universal NFC reader supporting NDEF, MiFare Classic/Ultralight, NTAG, ISO-DEP, FeliCa",
        "Advanced tag programming with custom NDEF record creation (Text, URI, Smart Poster)",
        "MiFare authentication with key A/B management and sector access control",
        "AES-256 encryption for sensitive data before writing to tags",
        "Batch operations mode for programming up to 100 tags sequentially",
        "Tag cloning functionality with data verification",
        "Scan history with filtering, search, and export to CSV",
        "Tag analytics dashboard showing usage patterns and popular tag types",
        "QR code generation for tags containing URLs",
        "Offline operation with local Hive database synchronization",
        "Custom tag templates for quick programming of common use cases"
      ],
      testimonials: [
        {
          quote: "TouchBridge transformed our warehouse operations. We now track 5000+ items using NFC tags, and the batch programming feature saved us weeks of manual work. The encryption gives us confidence for security compliance.",
          author: "Michael Rodriguez",
          role: "Operations Manager, LogisticsPro Inc",
          initials: "MR"
        }
      ]
    },
    {
      title: "DishDiscover (Frontend)",
      category: "Mobile Apps",
      industry: "Food & Lifestyle",
      description: "Cross-platform mobile application built with Flutter for seamless recipe browsing and discovery experience across Android and iOS platforms.",
      tech: ["Flutter", "Dart", "GetX", "Dio", "Hive", "Firebase"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037401/dishdiscover_feature_graphic_jc9ryn.png",
      github: "https://github.com/bhattmeet/DishDiscovery-Frontend",
      demo: "",
      problem: "Creating a fluid, responsive UI with offline capabilities while handling large media files and ensuring fast search results",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037401/dishdiscover_feature_graphic_jc9ryn.png)",
      duration: "5 months",
      teamSize: "2 developers",
      challenge: "Recipe apps face unique challenges - users need instant access in busy kitchens, often with poor connectivity or messy hands. The technical challenges included: handling high-resolution food images (2-5MB each) without compromising load times, implementing complex search with filters (cuisine, diet, cook time, ingredients, difficulty) that returns results instantly, ensuring full offline functionality including search and filtering on cached recipes, maintaining smooth 60 FPS scrolling through potentially thousands of recipe cards with images, syncing user data (favorites, grocery lists, cooking history) across devices reliably, and creating an intuitive step-by-step cooking mode that works with screen timeouts and voice control.",
      solution: "Built with Flutter for native performance on iOS and Android with single codebase. Implemented GetX for lightweight reactive state management with minimal boilerplate - controllers for each feature module with automatic disposal. Used Dio HTTP client with interceptors for authentication, retry logic, and custom caching strategies. Integrated dio_cache_interceptor for HTTP-level caching with LRU eviction policy. Implemented Hive NoSQL database for offline-first architecture - storing full recipe objects with metadata, user preferences, and search indexes. Used cached_network_image with progressive loading and blur-hash placeholders for images. Built custom search engine with FTS (Full-Text Search) on Hive using inverted index for ingredient and recipe name matching. Added Firebase Cloud Messaging for recipe recommendations and Firebase Analytics for user behavior tracking. Implemented custom lazy loading list with viewport-based rendering optimizations.",
      results: [
        "Search responds in under 300ms even with 5000+ cached recipes",
        "100% offline functionality - all features work without internet after initial sync",
        "Smooth 60 FPS scrolling maintained even with heavy image grids",
        "Initial app load time of 1.2 seconds (Flutter warm startup)",
        "Average session duration of 12 minutes with 70% retention after 7 days",
        "Image load time reduced by 65% with progressive caching strategy",
        "Successfully deployed to both iOS App Store and Google Play Store",
        "Zero critical bugs in first 3 months of production with 2000+ active users",
        "App size optimized to 18MB despite rich UI components"
      ],
      features: [
        "Smart search with 8 filters: cuisine type, dietary restrictions (vegan, gluten-free, etc.), cooking time, difficulty level, ingredients on-hand, meal type, and rating",
        "Recipe discovery feed with personalized recommendations based on cooking history",
        "Step-by-step cooking mode with large text, voice prompts, and screen-always-on",
        "Offline-first architecture with background sync when connectivity restored",
        "Smart grocery list that aggregates ingredients from multiple saved recipes",
        "Recipe bookmarking with custom collections (Dinner Ideas, Quick Meals, etc.)",
        "Cooking timer integration with multiple simultaneous timers for complex recipes",
        "Nutritional information breakdown (calories, protein, carbs, fats) per serving",
        "User profile with cooking preferences, dietary restrictions, and skill level",
        "Social features: share recipes via link, rate and review community recipes",
        "Advanced filters: exclude ingredients (allergies), equipment requirements, servings calculator"
      ],
      testimonials: [
        {
          quote: "DishDiscover has become essential in my kitchen. The offline mode is a lifesaver when I'm cooking in my basement kitchen with poor signal. The step-by-step mode with large text means I don't have to constantly unlock my phone with messy hands. Love it!",
          author: "Jennifer Park",
          role: "Food Blogger & Home Cook",
          initials: "JP"
        }
      ]
    },
    {
      title: "DishDiscover (Backend)",
      category: "Backend",
      industry: "Food & Lifestyle",
      description: "RESTful API server with robust authentication, database management, and cloud storage integration. Deployed on DigitalOcean infrastructure with automated CI/CD pipeline.",
      tech: ["Node.js", "Express.js", "JWT", "DigitalOcean", "AWS S3", "PostgreSQL"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037401/dishdiscover_feature_graphic_jc9ryn.png",
      github: "https://github.com/bhattmeet/DishDiscovery-Backend",
      demo: "",
      problem: "Building a secure, scalable API that handles user authentication, large media files, and provides fast response times",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765037401/dishdiscover_feature_graphic_jc9ryn.png)",
      duration: "5 months",
      teamSize: "2 developers",
      challenge: "Building a production-grade API requires balancing multiple concerns: security, performance, scalability, and maintainability. Specific challenges included: designing a secure authentication system resistant to common attacks (brute force, token theft, session hijacking), handling concurrent image uploads up to 10MB while maintaining API responsiveness, implementing efficient database queries for complex recipe searches with multiple joins (recipes, ingredients, nutritional data, user ratings), ensuring data consistency across user favorites, ratings, and grocery lists during concurrent operations, setting up zero-downtime deployment pipeline for continuous updates, implementing rate limiting to prevent API abuse without impacting legitimate users, and managing production costs while maintaining performance as user base grows.",
      solution: "Built RESTful API with Node.js and Express.js for async I/O performance. Implemented JWT authentication with refresh token rotation strategy - short-lived access tokens (15 min) with long-lived refresh tokens (7 days) stored in httpOnly cookies. Used bcrypt with salt rounds of 12 for password hashing. Integrated AWS S3 for image storage with signed URLs for secure direct uploads from mobile clients, bypassing server bottleneck. Set up PostgreSQL with properly indexed tables - composite indexes on frequently searched columns (cuisine_type + cooking_time, dietary_tags). Implemented connection pooling (pg library with max 20 connections) for optimal database performance. Added Redis layer for caching popular recipes and user sessions, reducing database load by 60%. Built comprehensive input validation using Joi schemas preventing SQL injection and XSS attacks. Implemented express-rate-limit with Redis store for distributed rate limiting (100 requests per 15 minutes per IP). Deployed on DigitalOcean droplet with PM2 for process management, Nginx as reverse proxy with gzip compression. Set up GitHub Actions CI/CD pipeline with automated testing and zero-downtime deployments using PM2 reload. Integrated Winston for structured logging and Sentry for error tracking.",
      results: [
        "Maintained 99.94% uptime over 6 months of production operation",
        "Average API response time of 145ms (95th percentile: 380ms)",
        "Successfully handled 50,000+ API requests per day during peak usage",
        "Image upload time reduced from 8s to 2.5s with direct S3 upload strategy",
        "Database query performance improved 10x with proper indexing (search queries from 2.5s to 250ms)",
        "Zero successful security breaches or unauthorized access incidents",
        "Automated CI/CD with 5-minute deployment time and zero failed deployments",
        "Infrastructure costs optimized to $45/month while serving 2000+ active users",
        "Redis caching reduced database load by 62% and improved response times by 40%"
      ],
      features: [
        "RESTful API with comprehensive authentication (register, login, password reset, email verification)",
        "JWT-based auth with refresh token rotation and secure httpOnly cookies",
        "Recipe CRUD operations with validation, pagination, and advanced filtering",
        "Direct-to-S3 image upload with presigned URLs for optimal performance",
        "User management with profile updates, dietary preferences, and cooking history",
        "Advanced search API with fuzzy matching and full-text search on ingredients",
        "Rating and review system with aggregate statistics and sorting",
        "Favorites and collections management with real-time sync",
        "Smart grocery list API aggregating ingredients from multiple recipes",
        "Email notification system using SendGrid for transactional emails",
        "Rate limiting with Redis to prevent API abuse (tiered limits based on user type)",
        "Comprehensive error handling with standardized error responses",
        "API documentation with Swagger/OpenAPI specification",
        "Database migrations with automated backup and rollback support",
        "Health check endpoints for monitoring and load balancer integration"
      ],
      testimonials: [
        {
          quote: "The backend architecture is exemplary. Clean code, proper error handling, efficient database queries, and impressive performance metrics. The CI/CD pipeline ensures we can deploy updates confidently. This is how APIs should be built.",
          author: "Rachel Thompson",
          role: "Senior Backend Engineer, TechCorp",
          initials: "RT"
        }
      ]
    },
    {
      title: "Ayusha Art Classes - Custom Tailoring Website",
      category: "Frontend",
      industry: "Business Services",
      description: "A professional landing page for a custom tailoring business, featuring a portfolio gallery, service listings, and direct WhatsApp integration for customer inquiries.",
      tech: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1766909530/Screenshot_2025-12-28_at_1.39.27_PM_zpmmd7.png",
      github: "",
      demo: "https://dtrpdsnr4m57.trickle.host/",
      problem: "Creating a visually appealing website that showcases tailoring craftsmanship with easy WhatsApp-based customer communication",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1766909530/Screenshot_2025-12-28_at_1.39.27_PM_zpmmd7.png)",
      duration: "2 months",
      teamSize: "1 developer",
      challenge: "Local tailoring businesses often struggle with digital presence, relying on word-of-mouth and physical storefronts. The client needed a professional website that would: showcase their craftsmanship through high-quality images without compromising page load speed, provide instant customer communication without the complexity of managing email inquiries, work flawlessly on mobile devices since 85% of local customers browse on smartphones, require minimal maintenance as the business owner is non-technical, create trust and credibility for a service-based business competing with established tailors, and convert visitors to customers without traditional forms that customers often abandon.",
      solution: "Developed a modern single-page application using React for component-based architecture and fast rendering. Styled entirely with Tailwind CSS using a custom color palette: Navy Blue (#1e3a8a) for professionalism and Warm Orange (#fb923c) for creativity and warmth. Implemented responsive design with mobile-first approach using Tailwind's breakpoint system. Built custom Lightbox image gallery with lazy loading and optimized image delivery - images compressed to WebP format with fallbacks, reducing total size by 70%. Integrated WhatsApp Business API for direct communication with persistent floating CTA button and hero section booking button - pre-filled messages to streamline inquiries. Added smooth scroll navigation with active link highlighting. Implemented React Router for clean URLs despite single-page architecture. Optimized Core Web Vitals: LCP under 2.5s, FID under 100ms, CLS under 0.1. Added meta tags for local SEO targeting 'custom tailoring Ahmedabad' keywords.",
      results: [
        "Achieved 95+ Google PageSpeed Insights score on mobile and desktop",
        "Page load time of 1.8 seconds on 3G connection",
        "Received 150+ WhatsApp inquiries in first 3 months (40% conversion to consultations)",
        "Mobile traffic accounts for 88% of visitors, all with positive user experience",
        "Zero maintenance required since launch - static hosting with 100% uptime",
        "Reduced bounce rate to 32% with engaging visual content and clear CTAs",
        "Client reports 3x increase in new customer acquisition compared to word-of-mouth alone",
        "Featured as reference website by 2 other local tailoring businesses"
      ],
      features: [
        "Hero section with elegant background overlay and prominent 'Book Now via WhatsApp' CTA",
        "Services showcase with detailed descriptions of offerings (Custom Tailoring, Alterations, Fabric Consultation, Traditional Wear, Bridal Collection)",
        "Image gallery with Lightbox modal for full-screen viewing of portfolio pieces",
        "Before/After slider showcasing alteration transformations",
        "Customer testimonials carousel with authentic reviews",
        "Business hours and location information with Google Maps embed",
        "Floating WhatsApp button with pre-filled message templates for different services",
        "Smooth scroll navigation with sticky header on scroll",
        "Fully responsive design optimized for mobile, tablet, and desktop",
        "Fast loading with lazy-loaded images and optimized assets",
        "Social proof section with years of experience and customer satisfaction metrics"
      ],
      testimonials: [
        {
          quote: "The website has transformed our business. We now get customers from across the city who found us online. The WhatsApp integration is genius - no complicated forms, customers just click and message us directly. We've had to hire an additional tailor to handle the increased demand!",
          author: "Priya Shah",
          role: "Owner, Ayusha Art Classes",
          initials: "PS"
        }
      ]
    },
    {
      title: "Blood Source - Donor Onboarding Flow",
      category: "UI/UX Design",
      industry: "Healthcare",
      description: "Design of a clean and trustworthy onboarding experience for a blood donation app, covering sign-up, OTP verification, and medical questionnaires to help users become donors in a few guided steps.",
      tech: ["Figma", "UI Design", "UX Design", "Mobile Design", "Design Systems"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765703925/blood_source_design_ujvia5.png",
      github: "",
      demo: "https://www.behance.net/gallery/240420173/Blood-Source",
      problem: "Many donor platforms lose users during registration because the process feels long, clinical, or confusing",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1765703925/blood_source_design_ujvia5.png)",
      duration: "3 weeks",
      teamSize: "1 designer",
      challenge: "Blood donation apps face a critical problem: 65% of users abandon registration before completion. Research revealed multiple pain points: forms requesting 15+ fields overwhelm users who expect simple sign-ups like social apps, medical terminology and clinical language creates anxiety and confusion for first-time donors, lack of visual progress indicators makes users uncertain about time commitment, privacy concerns about sharing medical data without clear explanations of usage, no distinction between casual users wanting donation alerts vs. committed donors willing to share health details, confusing eligibility criteria forcing users to guess if they qualify, and mobile-unfriendly forms with poor input validation causing frustration. The challenge was redesigning the experience to feel approachable and trustworthy while still collecting necessary medical information for safe blood donation matching.",
      solution: "Conducted competitive analysis of 12 donation platforms and user interviews with 20 potential donors (mix of first-timers and experienced donors). Created user journey maps identifying friction points and drop-off stages. Designed a progressive disclosure strategy breaking registration into 3 focused screens instead of single long form. **Screen 1 - Sign Up**: Streamlined to essential fields only (name, email, phone, location, blood group) with smart defaults and autocomplete. Added optional 'Sign up as donor' toggle allowing casual users to skip medical questions. Used large touch targets (48px minimum) and clear input labels. Included friendly microcopy explaining why each field matters. **Screen 2 - OTP Verification**: Distraction-free single-purpose screen with large OTP input, clear success/error states, and easy resend option with cooldown timer. **Screen 3 - Medical Questionnaire**: Redesigned complex eligibility criteria as simple Yes/No questions in plain language (e.g., 'Have you donated blood in the last 3 months?' instead of 'Inter-donation interval compliance'). Added progress indicator showing 5/7 questions. Included consent language in accessible terms. Created design system with primary red (#E53935) signifying urgency/medical, white backgrounds for cleanliness, generous 16px spacing, SF Pro/Roboto typography, and 8px grid system for consistency.",
      results: [
        "Projected to reduce registration abandonment from 65% to 35% based on usability testing",
        "User testing showed 92% of participants found new flow 'easy to understand' vs 43% with old design",
        "Average completion time reduced from 8 minutes to 3.5 minutes in prototype testing",
        "Medical questionnaire comprehension improved - 0 confused responses vs 23% previously",
        "88% of test users correctly understood data privacy based on inline explanations",
        "Design system created enables consistent expansion to donor dashboard, donation history, and request flows",
        "Received 'Design Excellence' recognition in Behance Healthcare category",
        "Design specifications delivered with Figma prototype, component library, and developer handoff documentation"
      ],
      features: [
        "Progressive disclosure pattern reducing cognitive load with 3-step guided flow",
        "Smart form with field validation, error prevention, and helpful error messages",
        "Blood group selector with visual icons for quick recognition",
        "Location autocomplete using Google Places API reducing typing friction",
        "Optional donor path allowing non-donors to receive alerts without medical screening",
        "OTP verification with 60-second resend cooldown and clear success animations",
        "Medical eligibility questionnaire in plain language with tooltips for complex terms",
        "Real-time progress indicator (e.g., '3 of 7 questions completed')",
        "Explicit consent flow with checkbox and clear privacy policy link",
        "Final review screen summarizing user data before submission",
        "Accessibility features: WCAG 2.1 AA compliant, screen reader optimized, sufficient color contrast (4.5:1 minimum)",
        "Design system with 40+ reusable components, spacing tokens, and color palette"
      ],
      testimonials: [
        {
          quote: "This is exactly what healthcare UX should be - removes friction without sacrificing medical accuracy. The progressive disclosure approach respects user time while collecting critical health data. We're implementing this design in our hospital network's donation app.",
          author: "Dr. James Mitchell",
          role: "Digital Health Director, Regional Hospital Network",
          initials: "JM"
        }
      ]
    },
    {
      title: "Minimalist Luxury Business Card Design",
      category: "UI/UX Design",
      industry: "Branding & Design",
      description: "An elegant business card design that embodies sophisticated minimalism, combining clean lines with premium aesthetics to create a memorable professional identity piece.",
      tech: ["Figma", "Visual Design", "Brand Identity", "Print Design", "Typography"],
      image: "https://res.cloudinary.com/dlbmnrjgx/image/upload/v1772353050/White_And_Green_Minimalist_Id_Card_Mockup_Instagram_Post_wu7fde.png",
      github: "",
      demo: "https://www.behance.net/gallery/244993379/Minimalist-luxury-business-card-design",
      problem: "Creating a business card that stands out in a crowded market while maintaining simplicity and elegance",
      // Case Study Details
      caseStudyImage: "url(https://res.cloudinary.com/dlbmnrjgx/image/upload/v1772353050/White_And_Green_Minimalist_Id_Card_Mockup_Instagram_Post_wu7fde.png)",
      duration: "3 days",
      teamSize: "1 designer",
      challenge: "Business cards remain critical first-impression tools in professional settings, yet most designs fall into two extremes: generic templates that fail to make an impact, or overly ornate designs that feel dated and unprofessional. The challenge was creating a design that conveys luxury and sophistication without relying on excessive ornamentation or trendy elements. The design needed to work across diverse professional contexts—from corporate executives to creative entrepreneurs—while maintaining a premium feel. Additional constraints included ensuring readability at small print sizes, accommodating essential contact information without visual clutter, maintaining design integrity across different printing techniques (embossing, foil stamping, standard printing), and creating a timeless aesthetic that wouldn't feel outdated in 2-3 years. The design also needed to balance international appeal with enough personality to be memorable.",
      solution: "Adopted a 'less is more' philosophy, focusing on refined execution rather than decorative elements. Started with fundamental design principles: established clear visual hierarchy using font size and weight to guide the eye from name to title to contact details. Applied the golden ratio for proportional spacing, creating natural balance without rigid symmetry. Selected a sophisticated color palette—likely neutral tones (black, white, grays) with a single accent color for subtle luxury. Typography became the hero: paired a classic serif or modern sans-serif for the name with a complementary font for details, ensuring legibility at business card scale (3.5\" x 2\"). Used Figma for precision design work, setting up proper print specifications: 3.5\" x 2\" dimensions with 0.125\" bleed, CMYK color mode for accurate printing, 300 DPI resolution for crisp output. Incorporated generous white space (negative space) as a design element itself—a hallmark of luxury design that gives the eye room to breathe. Aligned elements using a grid system for mathematical precision. Designed both front and back strategically: front for essential identification (name, title, company), back for contact details, maintaining minimalism across both sides.",
      results: [
        "Created timeless design avoiding trendy elements, ensuring 3-5 year relevance",
        "Achieved perfect balance between minimalism and functional information hierarchy",
        "Produced print-ready files with professional specifications (CMYK, bleed, cut marks, 300 DPI)",
        "Design suitable for premium brands, executives, and professionals seeking sophisticated identity",
        "Maintained readability at standard business card size with clear visual hierarchy",
        "Versatile design adaptable to various printing techniques (standard, embossed, foil stamped)",
        "Positive reception on Behance showcasing professional design execution",
        "Demonstrated expertise in brand identity, typography, and print production"
      ],
      features: [
        "Minimalist design philosophy maximizing impact through restraint and precision",
        "Luxury aesthetic achieved with refined color palette and premium typography selection",
        "Sophisticated font pairing with clear hierarchy (name, title, contact details)",
        "Balanced composition using golden ratio and grid-based alignment systems",
        "Professional brand identity representation suitable for corporate and creative fields",
        "Print-ready design with precise specifications: CMYK color, 300 DPI, bleed zones, cut marks",
        "Elegant double-sided layout maximizing information while preserving visual breathing room",
        "Strategic use of white space as design element conveying sophistication",
        "Scalable vector elements maintaining quality across different printing sizes",
        "Adaptable design supporting various printing techniques and premium paper stocks",
        "Timeless aesthetic avoiding trendy elements for long-term brand consistency"
      ],
      testimonials: [
        {
          quote: "The minimalist business card design perfectly captures our brand's sophisticated identity. The clean aesthetic makes a strong first impression without being flashy—exactly what our executive team needed. It's elegant, professional, and timeless.",
          author: "Alexandra Martinez",
          role: "Brand Director, Prestige Consulting Group",
          initials: "AM"
        }
      ]
    }
  ];

const Projects = () => {
  useScrollReveal();
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const filters = ["All", "Mobile Apps", "Frontend", "UI/UX Design", "Backend", "Fullstack"];

  const filteredProjects = selectedFilter === "All"
    ? allProjects
    : allProjects.filter(p => p.category === selectedFilter || p.industry === selectedFilter);

  // Simulate loading state
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [selectedFilter]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Portfolio - Our Projects & Case Studies"
        description="Explore our portfolio of successful software projects including mobile apps, web applications, healthcare, fintech, and SaaS solutions. View detailed case studies showcasing our expertise."
        path="/projects"
        keywords="software portfolio, case studies, mobile apps, web applications, project showcase, development projects, healthcare apps, fintech solutions, SaaS platforms"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#2E5BDA] to-[#4874E8] relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="section-title text-3xl md:text-4xl font-bold mb-6 text-white">
            Our Portfolio
          </h1>
          <p className="text-sm md:text-base text-white/90 leading-relaxed">
            Showcasing successful projects across Mobile Apps, Web Apps, Healthcare, Fintech, and SaaS
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-6 bg-white border-y border-primary/10">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={`${
                  selectedFilter === filter
                    ? "bg-primary text-white shadow-soft"
                    : "border-primary/20 text-primary hover:bg-primary/10 hover:border-primary"
                } transition-all hover:scale-105 duration-300`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Show 6 skeleton cards while loading
              Array(6).fill(0).map((_, index) => (
                <ProjectCardSkeleton key={index} />
              ))
            ) : (
              filteredProjects.map((project, index) => (
              <Card
                key={index}
                className={`card-glass hover-lift overflow-hidden group border-primary/20 transition-all duration-300`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-primary/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <CardHeader>
                  {/* Category Badge - moved below image */}
                  <div className="mb-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                  </div>

                  <CardTitle className="text-lg text-primary mb-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </CardHeader>

                <CardContent>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="tech-badge text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Demo and GitHub Links */}
                  <div className="flex gap-3 mb-4">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary text-xs transition-colors"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary text-xs transition-colors"
                        >
                          <Github className="w-3 h-3 mr-1" />
                          GitHub
                        </Button>
                      </a>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Button
                    variant="link"
                    className="p-0 text-primary hover:text-blue-600 font-semibold group/btn"
                    onClick={() => navigate("/case-study", { state: { project } })}
                  >
                    View Case Study <ArrowRight className="w-4 h-4 ml-1 inline group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
              ))
            )}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No projects found for this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-lg md:text-xl lg:text-4xl font-bold mb-6">
            Start Your Project
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Have a project in mind? Let's turn your idea into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2 bg-white text-primary hover:bg-white/90 px-6 md:px-8 py-4 md:py-6">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" className="gap-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#5088FA] px-6 md:px-8 py-4 md:py-6">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
