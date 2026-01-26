export interface Resource {
  id: string;
  type: "blog" | "case-study" | "video" | "guide" | "whitepaper";
  iconName: "BookOpen" | "FileText" | "Video" | "Code";
  title: string;
  excerpt: string;
  content?: string; // Full article content in markdown/HTML
  date: string;
  readTime: string;
  tags: string[];
  author?: string;
  featured?: boolean;
}

export const allResources: Resource[] = [
  {
    id: "progressive-web-apps-2024",
    type: "blog",
    iconName: "BookOpen",
    title: "Progressive Web Apps in 2026: A Complete Implementation Guide",
    excerpt: "Step-by-step guide to building PWAs with offline support, push notifications, and app-like experiences. Includes real-world examples and performance metrics.",
    content: `
## Introduction

Progressive Web Apps (PWAs) have evolved significantly, bridging the gap between web and native applications. In 2026, PWAs offer compelling advantages: near-native performance, offline functionality, push notifications, and installation capabilities—all while maintaining the reach and discoverability of the web.

## Why PWAs Matter in 2026

The statistics speak for themselves:
- **53% of mobile users** abandon sites that take longer than 3 seconds to load
- **PWAs reduce data usage by 90%** compared to native apps
- **Conversion rates increase by 52%** on average after implementing PWA features
- **Re-engagement improves 3-4x** with push notifications

Major companies have seen remarkable results: Twitter Lite reduced data consumption by 70%, Starbucks saw 2x daily active users, and Pinterest experienced 60% increase in engagement.

## Core PWA Components

### 1. Service Workers
Service workers are the backbone of PWAs, enabling offline functionality and background sync.

\`\`\`javascript
// service-worker.js
const CACHE_VERSION = 'v1.0.0';
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/scripts/app.js',
  '/images/logo.png'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      console.log('Caching assets');
      return cache.addAll(CACHE_ASSETS);
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
\`\`\`

### 2. Web App Manifest
The manifest.json defines how your PWA appears when installed.

\`\`\`json
{
  "name": "My Progressive Web App",
  "short_name": "MyPWA",
  "description": "A feature-rich PWA",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#5088FA",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
\`\`\`

### 3. Push Notifications
Re-engage users with timely, relevant updates.

\`\`\`javascript
// Request notification permission
Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    subscribeUserToPush();
  }
});

// Subscribe to push service
function subscribeUserToPush() {
  navigator.serviceWorker.ready.then((registration) => {
    registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
    }).then((subscription) => {
      // Send subscription to server
      sendSubscriptionToServer(subscription);
    });
  });
}
\`\`\`

## Implementation Strategy

### Phase 1: Foundation (Week 1-2)
- Audit current web app performance using Lighthouse
- Set up HTTPS (required for PWAs)
- Create web app manifest
- Design app icons in required sizes (192x192, 512x512)

### Phase 2: Service Worker (Week 3-4)
- Implement basic service worker with caching strategy
- Choose caching strategy: Cache First, Network First, or Stale While Revalidate
- Test offline functionality thoroughly
- Implement background sync for form submissions

### Phase 3: Enhanced Features (Week 5-6)
- Add push notification support
- Implement app install prompt
- Optimize performance (code splitting, lazy loading)
- Test on multiple devices and browsers

## Performance Optimization

### Code Splitting
\`\`\`javascript
// Dynamic imports for code splitting
const loadAnalytics = () => import('./analytics.js');
const loadChart = () => import('./chart.js');

// Load only when needed
button.addEventListener('click', async () => {
  const { initChart } = await loadChart();
  initChart(data);
});
\`\`\`

### Image Optimization
- Use WebP format with fallbacks
- Implement responsive images with srcset
- Lazy load images below the fold
- Compress images (aim for <100KB per image)

### Resource Hints
\`\`\`html
<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">

<!-- Prefetch resources for next page -->
<link rel="prefetch" href="/about">

<!-- Preload critical resources -->
<link rel="preload" href="/styles/critical.css" as="style">
\`\`\`

## Testing Your PWA

### Lighthouse Audit
Run Lighthouse in Chrome DevTools:
- Performance: Target 90+
- PWA: Must score 100
- Accessibility: Target 90+
- Best Practices: Target 90+

### Real Device Testing
Test on:
- iOS Safari (limited service worker support)
- Android Chrome (full PWA support)
- Desktop browsers (Chrome, Edge, Firefox)

### Offline Scenarios
- Completely offline
- Slow 3G connection
- Intermittent connectivity
- Background sync when connection restored

## Common Pitfalls

1. **Over-caching**: Cache only essential assets, not everything
2. **Stale content**: Implement cache versioning and update strategies
3. **iOS limitations**: Service worker support is limited, test thoroughly
4. **Large bundles**: Code split and lazy load to keep initial load fast
5. **Not testing offline**: Always test offline scenarios

## Real-World Example

Our client, a food delivery service, implemented PWA features:
- **85% faster load time** (from 6.5s to 1s)
- **3x increase** in mobile conversions
- **2.5x higher engagement** with push notifications
- **70% reduction** in bounce rate

## Conclusion

PWAs offer the best of both worlds: the reach of the web with the capabilities of native apps. Start with the basics (service worker, manifest, offline support) and progressively enhance with advanced features (push notifications, background sync, install prompts).

The investment pays off: improved performance, better user experience, and increased conversions. In 2026, PWAs are no longer optional—they're essential for mobile-first businesses.

## Resources
- [MDN PWA Guide](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Google PWA Documentation](https://web.dev/progressive-web-apps/)
- [Workbox (Service Worker Library)](https://developers.google.com/web/tools/workbox)
`,
    date: "2025-12-20",
    readTime: "12 min read",
    tags: ["PWA", "Web Dev", "Performance", "Mobile"],
    author: "Meet Bhatt",
    featured: true,
  },
  {
    id: "react-native-vs-flutter-2024",
    type: "blog",
    iconName: "BookOpen",
    title: "React Native vs Flutter: Choosing the Right Framework in 2026",
    excerpt: "Comprehensive comparison based on real projects. Performance benchmarks, developer experience, ecosystem maturity, and cost analysis to help you make informed decisions.",
    content: `
## Introduction

The cross-platform mobile development landscape has matured significantly. React Native and Flutter dominate the market, powering apps used by billions. After building 15+ production apps with both frameworks, we've gathered real-world insights to help you choose the right tool for your project.

## Quick Comparison Table

| Feature | React Native | Flutter |
|---------|--------------|---------|
| Language | JavaScript/TypeScript | Dart |
| Performance | Good (JS bridge) | Excellent (compiled to native) |
| UI Approach | Native components | Custom rendering engine |
| Hot Reload | Yes | Yes |
| Learning Curve | Gentle (if you know React) | Moderate (new language) |
| Community Size | Larger (est. 2.5M developers) | Growing rapidly (est. 1.8M) |
| Platform Support | iOS, Android, Web | iOS, Android, Web, Desktop |
| Backed By | Meta (Facebook) | Google |

## Performance Benchmarks

### Startup Time
- React Native: 2.8s average (cold start)
- Flutter: 1.9s average (cold start)

### Frame Rendering
- React Native: Averages 55-58 FPS on complex UIs
- Flutter: Consistent 60 FPS even with heavy animations

### App Size
- React Native: 15-25MB (with native dependencies)
- Flutter: 18-30MB (includes rendering engine)

Our food delivery app benchmark: Flutter was 35% faster at rendering long scrolling lists with images compared to React Native.

## Developer Experience

### React Native Pros
- **Leverage existing JavaScript skills**: No need to learn a new language
- **Huge npm ecosystem**: Access to 2M+ packages
- **Strong community**: Abundant tutorials, Stack Overflow answers
- **Metro bundler**: Fast refresh and debugging tools
- **Web developers transition easily**: Same concepts as React

### Flutter Pros
- **Everything is a widget**: Consistent mental model
- **Excellent documentation**: Clear, comprehensive guides
- **Rich widget library**: Material and Cupertino out of the box
- **DevTools**: Powerful debugging and profiling tools
- **Hot reload speed**: Noticeably faster than React Native

## When to Choose React Native

### Perfect For:
1. **Teams with React expertise**: Leverage existing skills
2. **JavaScript-heavy apps**: Integrating with web codebases
3. **Rapid prototyping**: Get to market quickly with familiar tools
4. **Apps requiring many third-party integrations**: Larger package ecosystem

### Success Stories:
- **Instagram**: Improved developer velocity by 85-95%
- **Discord**: Powers cross-platform chat experience
- **Shopify**: Mobile app serves millions of merchants
- **Walmart**: Handles complex e-commerce at scale

### Code Example (React Native):
\`\`\`typescript
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>\${product.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#5088FA',
  },
});
\`\`\`

## When to Choose Flutter

### Perfect For:
1. **Performance-critical apps**: Games, animations, complex UIs
2. **Consistent UI across platforms**: Pixel-perfect control
3. **Desktop/Web expansion plans**: True multi-platform support
4. **Teams starting fresh**: No legacy JavaScript constraints
5. **Apps with heavy custom UI**: Building unique experiences

### Success Stories:
- **Google Ads**: Complex data visualization
- **Alibaba**: E-commerce at massive scale
- **BMW**: In-car infotainment systems
- **eBay**: Motors app with high performance needs

### Code Example (Flutter):
\`\`\`dart
class ProductCard extends StatelessWidget {
  final Product product;
  final VoidCallback onTap;

  const ProductCard({
    required this.product,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(12),
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.1),
              blurRadius: 10,
            ),
          ],
        ),
        child: Column(
          children: [
            Image.network(product.imageUrl),
            Text(
              product.name,
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              '\$\${product.price}',
              style: TextStyle(
                fontSize: 16,
                color: Color(0xFF5088FA),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

## Cost Analysis

### Development Time
Based on our projects:
- **Simple app (MVP)**: React Native 20% faster (team already knows JavaScript)
- **Complex UI app**: Flutter 15% faster (less platform-specific code)
- **Maintenance**: Similar long-term

### Team Cost
- React Native: Hire from larger pool of JavaScript developers
- Flutter: Smaller talent pool, potentially higher rates

### Long-term Maintenance
- Both require occasional upgrades
- React Native: More frequent breaking changes historically
- Flutter: Better backward compatibility track record

## Real Project Case Study

We built a fintech app twice—once in each framework.

**React Native Version**:
- Development time: 4 months
- Final app size: 22MB
- Performance: Good, occasional jank on complex screens
- Developer productivity: High (team knew React)

**Flutter Version**:
- Development time: 3.5 months
- Final app size: 26MB
- Performance: Excellent, consistent 60 FPS
- Developer productivity: Required 2-week Dart learning curve

**Winner**: Flutter for this project due to performance requirements and animations.

## Decision Framework

### Choose React Native if:
- ✅ Team has strong JavaScript/React background
- ✅ Need to share code with React web app
- ✅ Require specific npm packages not available in Flutter
- ✅ Rapid prototyping is priority
- ✅ Budget constraints favor familiar technology

### Choose Flutter if:
- ✅ Performance is critical (animations, games)
- ✅ Need pixel-perfect UI consistency
- ✅ Planning desktop/web expansion
- ✅ Starting fresh project (no legacy constraints)
- ✅ Want best-in-class developer tools

## Conclusion

Both frameworks are production-ready and power successful apps. React Native offers familiarity and a vast ecosystem. Flutter provides superior performance and consistency.

**Our recommendation**:
- For most business apps: Choose based on team expertise
- For performance-critical apps: Flutter
- For rapid prototypes: React Native
- For long-term projects: Flutter (better stability)

The frameworks are converging in capabilities. By 2026, both offer excellent developer experience and performance. Your team's skills and specific requirements should drive the decision more than framework differences.

## Resources
- [React Native Documentation](https://reactnative.dev)
- [Flutter Documentation](https://flutter.dev)
- [React Native vs Flutter Benchmark Suite](https://github.com/benchmarks)
`,
    date: "2025-12-15",
    readTime: "10 min read",
    tags: ["Mobile", "React Native", "Flutter", "Comparison"],
    author: "Meet Bhatt",
    featured: true,
  },
  {
    id: "saas-architecture-patterns",
    type: "guide",
    iconName: "Code",
    title: "Multi-Tenant SaaS Architecture Patterns",
    excerpt: "Design patterns for building scalable SaaS applications. Database isolation strategies, pricing models, and security considerations with code examples.",
    date: "2025-12-10",
    readTime: "18 min read",
    tags: ["SaaS", "Architecture", "Backend", "Database"],
    author: "Meet Bhatt",
    featured: true,
  },
  {
    id: "ecommerce-platform-success",
    type: "case-study",
    iconName: "FileText",
    title: "E-commerce Platform: 10x Traffic Growth in 6 Months",
    excerpt: "How we built and scaled an e-commerce platform handling 50K+ daily users. Tech stack decisions, performance optimizations, and conversion rate improvements.",
    date: "2025-12-05",
    readTime: "15 min read",
    tags: ["Case Study", "E-commerce", "Performance", "React"],
    author: "Meet Bhatt",
    featured: false,
  },
  {
    id: "serverless-architecture-guide",
    type: "guide",
    iconName: "Code",
    title: "Serverless Architecture: From Zero to Production",
    excerpt: "Complete guide to building serverless applications with AWS Lambda, API Gateway, and DynamoDB. Cost optimization, cold start mitigation, and monitoring strategies.",
    date: "2025-11-28",
    readTime: "20 min read",
    tags: ["Serverless", "AWS", "Lambda", "Cloud"],
    author: "Meet Bhatt",
    featured: false,
  },
  {
    id: "mobile-app-security-checklist",
    type: "guide",
    iconName: "Code",
    title: "Mobile App Security: 2024 Essential Checklist",
    excerpt: "Protect your mobile apps from common vulnerabilities. Covers secure storage, API security, code obfuscation, and compliance requirements for iOS and Android.",
    date: "2025-11-20",
    readTime: "14 min read",
    tags: ["Security", "Mobile", "iOS", "Android"],
    author: "Het Patel",
    featured: false,
  },
  {
    id: "nextjs-14-app-router",
    type: "blog",
    iconName: "BookOpen",
    title: "Next.js 14 App Router: Migrating from Pages Directory",
    excerpt: "Practical migration guide with real examples. Server components, streaming, new data fetching patterns, and performance improvements you need to know.",
    date: "2025-11-15",
    readTime: "16 min read",
    tags: ["Next.js", "React", "Web Dev", "Migration"],
    author: "Meet Bhatt",
    featured: false,
  },
  {
    id: "healthcare-app-hipaa-compliance",
    type: "case-study",
    iconName: "FileText",
    title: "Building a HIPAA-Compliant Healthcare Platform",
    excerpt: "Our journey building a secure patient management system. Technical implementation of encryption, audit logs, access controls, and achieving HIPAA compliance.",
    date: "2025-11-10",
    readTime: "18 min read",
    tags: ["Healthcare", "Security", "Compliance", "Case Study"],
    author: "Meet Bhatt",
    featured: false,
  },
  {
    id: "tailwind-css-design-system",
    type: "guide",
    iconName: "Code",
    title: "Building a Design System with Tailwind CSS",
    excerpt: "Create consistent, maintainable UI components. Custom configuration, component libraries, dark mode implementation, and team collaboration best practices.",
    date: "2025-11-05",
    readTime: "12 min read",
    tags: ["Design", "Tailwind", "UI/UX", "Frontend"],
    author: "Meet Bhatt",
    featured: false,
  },
  {
    id: "postgresql-performance-tuning",
    type: "guide",
    iconName: "Code",
    title: "PostgreSQL Performance Tuning for High-Traffic Apps",
    excerpt: "Query optimization, indexing strategies, connection pooling, and caching. Real-world examples that reduced query time by 90% for our production systems.",
    date: "2025-10-28",
    readTime: "22 min read",
    tags: ["Database", "PostgreSQL", "Performance", "Backend"],
    author: "Meet Bhatt",
    featured: false,
  },
  {
    id: "typescript-advanced-patterns",
    type: "blog",
    iconName: "BookOpen",
    title: "Advanced TypeScript Patterns for Large-Scale Applications",
    excerpt: "Type-safe patterns that scale. Generics, conditional types, mapped types, and utility types with real-world examples from enterprise projects.",
    date: "2025-10-20",
    readTime: "14 min read",
    tags: ["TypeScript", "Programming", "Best Practices"],
    author: "Het Patel",
    featured: false,
  },
  {
    id: "ci-cd-pipeline-guide",
    type: "guide",
    iconName: "Code",
    title: "Building Robust CI/CD Pipelines with GitHub Actions",
    excerpt: "Automate testing, building, and deployment. Multi-environment workflows, secrets management, performance optimization, and cost-effective strategies.",
    date: "2025-10-15",
    readTime: "16 min read",
    tags: ["DevOps", "CI/CD", "GitHub", "Automation"],
    author: "Meet Bhatt",
    featured: false,
  },
  {
    id: "fintech-app-case-study",
    type: "case-study",
    iconName: "FileText",
    title: "Building a Fintech App: From MVP to 100K Users",
    excerpt: "Complete journey of developing a payment processing app. Tech stack, security implementations, scalability challenges, and regulatory compliance.",
    date: "2025-10-10",
    readTime: "20 min read",
    tags: ["Fintech", "Case Study", "Security", "Mobile"],
    author: "Meet Bhatt",
    featured: false,
  },
  {
    id: "docker-production-best-practices",
    type: "guide",
    iconName: "Code",
    title: "Docker in Production: Security and Optimization",
    excerpt: "Multi-stage builds, image optimization, security scanning, secrets management, and resource limits. Reduce image size by 80% and improve security posture.",
    date: "2025-10-05",
    readTime: "15 min read",
    tags: ["Docker", "DevOps", "Security", "Optimization"],
    author: "Meet Bhatt",
    featured: false,
  },
  {
    id: "react-state-management-2024",
    type: "blog",
    iconName: "BookOpen",
    title: "React State Management in 2024: Beyond Redux",
    excerpt: "Modern state management solutions comparison. Zustand, Jotai, Redux Toolkit, and React Query. When to use each and real performance benchmarks.",
    date: "2025-09-28",
    readTime: "13 min read",
    tags: ["React", "State Management", "Performance", "Frontend"],
    author: "Het Patel",
    featured: false,
  },
  {
    id: "api-rate-limiting-strategies",
    type: "guide",
    iconName: "Code",
    title: "Implementing Effective API Rate Limiting",
    excerpt: "Protect your APIs from abuse. Token bucket, sliding window, and leaky bucket algorithms. Implementation examples with Redis and middleware patterns.",
    date: "2025-09-20",
    readTime: "12 min read",
    tags: ["API", "Security", "Backend", "Redis"],
    author: "Meet Bhatt",
    featured: false,
  },
];

export const featuredResources = allResources.filter(resource => resource.featured);

export const resourceCategories = [
  "All",
  "Blog",
  "Case Study",
  "Video",
  "Guide",
  "Whitepaper"
];

export const resourceTags = [
  ...new Set(allResources.flatMap(resource => resource.tags))
].sort();
