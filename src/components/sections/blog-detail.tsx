"use client";

import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, BookOpen, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BlogCard, type BlogCardPost } from "@/components/blog/blog-card";
import { Markdown } from "@/components/ui/markdown";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  authorName: string;
  authorBio: string;
  authorAvatar: string;
  authorTitle: string;
  tags: string[];
  datePublished: string;
  readTime: number;
  slug: string;
  views: number;
  likes: number;
  comments: number;
  thumbnail: string;
}

const blogPosts: Record<string, BlogPost> = {
  'spanish-consulting-business-success': {
    id: "1",
    title: "How I Built a 6-Figure Spanish Consulting Business",
    excerpt: "From teaching basics to strategic business consulting - discover the proven framework I used to scale my Spanish expertise into a thriving consultancy serving Fortune 500 companies.",
    content: `## The Journey from Teacher to Strategic Consultant

When I started teaching Spanish five years ago, I never imagined I'd be consulting for Fortune 500 companies today. The transformation didn't happen overnight, but with the right strategy and mindset, it became inevitable.

### The Turning Point

The breakthrough came when I realized that businesses don't just need language skills—they need cultural intelligence and strategic communication frameworks. This insight changed everything.

> "Language is just the beginning. True value comes from understanding the cultural nuances that drive business decisions in different markets."

### The 3-Pillar Framework

Here's the exact framework I used to scale from $30/hour tutoring to $300/hour strategic consulting:

#### 1. Specialized Expertise Development

Instead of being a general Spanish teacher, I focused on three high-value niches:

- Cross-border M&A communication
- Latin American market entry strategies
- Executive presentation coaching for Spanish-speaking markets

#### 2. Strategic Positioning

I repositioned myself from "Spanish teacher" to "Cultural Intelligence Advisor." This shift in language attracted C-suite executives instead of casual learners.

#### 3. Value-Based Pricing

Rather than charging by the hour, I started pricing based on business outcomes. A successful market entry strategy is worth millions—pricing should reflect that value.

### The Results

Within 18 months of implementing this framework:

- Revenue increased from $45K to $180K annually
- Client base shifted from individuals to Fortune 500 companies
- Hourly rate increased by 900%
- Waitlist of 3+ months for new clients

### Key Lessons Learned

The biggest lesson? Stop thinking like a teacher and start thinking like a strategic partner. Your language expertise is the foundation, but business acumen is what commands premium pricing.

If you're ready to make this transformation, start by identifying one specific business problem your language skills can solve. Then position yourself as the solution, not just another language instructor.

### What's Next?

I'm currently developing a comprehensive course for language professionals who want to make this same transition. If you're interested in learning more about the specific strategies and frameworks I used, feel free to reach out.`,
    authorName: "Maria Rodriguez",
    authorBio: "Strategic consultant specializing in Latin American market expansion and cross-cultural business communication. Former Spanish teacher turned 6-figure consultant helping Fortune 500 companies navigate Spanish-speaking markets.",
    authorAvatar: "/images/teacher-maria.jpg",
    authorTitle: "Business Strategy Consultant & Cultural Intelligence Advisor",
    tags: ["Business Strategy", "Success Story", "Entrepreneurship"],
    datePublished: "2024-12-15",
    readTime: 8,
    slug: "spanish-consulting-business-success",
    views: 2847,
    likes: 156,
    comments: 23,
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  'cultural-intelligence-global-leaders': {
    id: "2",
    title: "Cultural Intelligence: The Secret Weapon of Global Leaders",
    excerpt: "Why cultural fluency matters more than language fluency in international business. Learn the frameworks top executives use to navigate cross-cultural negotiations.",
    content: `## Beyond Language: The Power of Cultural Intelligence

In my 15 years of working with global executives, I've observed a consistent pattern: the most successful international leaders aren't necessarily the most linguistically gifted, but they possess something far more valuable—cultural intelligence.

### What is Cultural Intelligence?

Cultural Intelligence (CQ) is the capability to function effectively in culturally diverse settings. It's the difference between knowing how to say "hello" in French and understanding why a French business partner might interpret your directness as rudeness.

> "Language gets you in the door. Cultural intelligence gets you the deal."

### The Four Dimensions of Cultural Intelligence

#### 1. CQ Drive (Motivation)

The interest and confidence to adapt to multicultural situations. Leaders with high CQ Drive actively seek out cross-cultural experiences and view cultural differences as opportunities rather than obstacles.

#### 2. CQ Knowledge (Cognition)

Understanding cultural systems and differences. This includes knowledge of history, politics, economics, and social norms that shape behavior in different cultures.

#### 3. CQ Strategy (Metacognition)

The ability to plan and monitor cross-cultural interactions. High CQ Strategy leaders can read cultural cues and adjust their approach in real-time.

#### 4. CQ Action (Behavior)

The capability to adapt verbal and non-verbal behavior appropriately. This is where cultural knowledge transforms into effective action.

### Real-World Application: The $50M Negotiation

Last year, I consulted on a merger between a German automotive company and a Japanese electronics firm. The German team was frustrated by what they perceived as "indecisiveness" from their Japanese counterparts.

The reality? The Japanese team was following their cultural norm of nemawashi—building consensus behind the scenes before formal meetings. Once the German team understood this, they adapted their approach, leading to a successful $50 million deal.

### Developing Your Cultural Intelligence

#### Start with Self-Awareness

Understand your own cultural biases and assumptions. What you consider "professional" or "efficient" might be perceived differently in other cultures.

#### Invest in Deep Cultural Learning

Go beyond surface-level cultural facts. Understand the historical and social contexts that shape behavior in your target markets.

#### Practice Active Observation

In cross-cultural interactions, pay attention to non-verbal cues, communication patterns, and decision-making processes.

#### Seek Feedback

Regularly ask for feedback from colleagues and partners from different cultures. Their insights are invaluable for improving your CQ.

### The Business Impact

Companies with culturally intelligent leaders see measurable benefits:

- 23% higher revenue from international markets
- 67% fewer failed international ventures
- 45% better employee retention in diverse teams
- 31% more successful cross-border M&A transactions

### Your Next Step

Cultural intelligence isn't just a nice-to-have in today's global economy—it's essential for leadership success. Start developing your CQ today by choosing one culture you work with regularly and committing to deeper understanding beyond language basics.`,
    authorName: "Jean-Pierre Dubois",
    authorBio: "Cultural Intelligence expert and international business consultant with 15+ years of experience helping global leaders navigate cross-cultural challenges. Former diplomat turned strategic advisor for Fortune 500 companies.",
    authorAvatar: "/images/teacher-jean.jpg",
    authorTitle: "Cultural Intelligence Advisor & International Business Consultant",
    tags: ["Cultural Intelligence", "Leadership", "Global Business"],
    datePublished: "2024-12-10",
    readTime: 10,
    slug: "cultural-intelligence-global-leaders",
    views: 3456,
    likes: 198,
    comments: 34,
    thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  'esl-to-executive-coach-transformation': {
    id: "3",
    title: "From ESL Teacher to Executive Coach: My $200K Transformation",
    excerpt: "The strategic pivot that transformed my English teaching career into a high-impact executive coaching practice. Real numbers, proven strategies, actionable insights.",
    content: `## The $200K Transformation: From ESL to Executive Coaching

Three years ago, I was earning $35,000 annually as an ESL teacher. Today, my executive coaching practice generates over $200,000 per year. This isn't a get-rich-quick story—it's a strategic transformation built on leveraging existing skills in new, high-value contexts.

### The Wake-Up Call

The transformation began with a sobering realization: I was trading time for money with no scalability. Despite helping hundreds of students improve their English, I was financially stuck. The breaking point came when I calculated that even working 60 hours per week, I'd never reach my income goals.

> "The skills that make you an excellent language teacher are the same skills that make you an exceptional executive coach—you just need to reframe them."

### The Strategic Pivot Framework

#### Phase 1: Skills Audit and Reframing

I mapped my ESL teaching skills to high-value business applications:

- **Communication coaching** → Executive presence and presentation skills
- **Error correction** → Performance feedback and improvement strategies
- **Curriculum design** → Leadership development programs
- **Cultural sensitivity** → Inclusive leadership coaching

#### Phase 2: Niche Identification

Instead of general executive coaching, I specialized in:

- Communication coaching for non-native English speaking executives
- Cross-cultural leadership development
- Presentation skills for international business contexts

#### Phase 3: Credential Building

I invested in professional development:

- ICF-accredited coaching certification ($8,000)
- Leadership assessment tools training ($3,000)
- Business communication workshops ($2,000)

### The Marketing Strategy That Changed Everything

#### Content Marketing

I started sharing insights on LinkedIn about communication challenges facing international executives. My first viral post about "The Hidden Cost of Communication Barriers in Global Teams" generated 50,000+ views and 20+ inquiries.

#### Speaking Engagements

I began speaking at diversity and inclusion conferences, positioning myself as an expert in cross-cultural communication. Each speaking opportunity led to 3-5 high-value coaching inquiries.

#### Strategic Partnerships

I partnered with immigration law firms and international relocation companies who regularly worked with executives needing communication support.

### The Numbers: Year-by-Year Breakdown

#### Year 1: Foundation Building

- Revenue: $45,000 (still teaching part-time)
- Coaching clients: 8
- Average session rate: $125

#### Year 2: Momentum Building

- Revenue: $95,000
- Coaching clients: 15
- Average session rate: $200
- Corporate contracts: 2

#### Year 3: Full Transformation

- Revenue: $210,000
- Coaching clients: 12 (higher-value, longer engagements)
- Average session rate: $350
- Corporate contracts: 5
- Group coaching programs: 3

### Key Success Factors

#### 1. Leverage Your Unique Background

My ESL background gave me credibility with international executives that traditional business coaches lacked. Your teaching experience is an asset, not a limitation.

#### 2. Focus on Business Outcomes

I learned to articulate my value in business terms: "improved leadership effectiveness," "enhanced team communication," "increased executive presence." This shift in language attracted corporate clients.

#### 3. Invest in Professional Development

The $13,000 I invested in certifications and training generated over $300,000 in additional revenue. The ROI was extraordinary.

#### 4. Build Systems for Scale

I developed assessment tools, coaching frameworks, and group programs that allowed me to serve more clients without proportionally increasing my time investment.

### Common Pitfalls to Avoid

#### 1. Underpricing Your Services

I initially priced my coaching sessions at $75/hour—the same rate I charged for ESL tutoring. This was a mistake. Executive coaching commands premium pricing because of the business value it delivers.

#### 2. Trying to Serve Everyone

My early marketing was too broad. Success came when I niched down to serve international executives specifically.

#### 3. Neglecting Business Skills

Teaching skills aren't enough. I had to learn sales, marketing, and business development. These skills are learnable but require dedicated effort.

### Your Action Plan

#### Week 1-2: Skills Audit

List all your teaching skills and map them to potential business applications. Think broadly about transferable skills.

#### Week 3-4: Market Research

Identify your ideal client profile. What specific challenges do they face that your background uniquely positions you to solve?

#### Week 5-8: Credential Building

Research and enroll in relevant certification programs. This investment will pay dividends in credibility and pricing power.

#### Week 9-12: Content Creation

Start sharing insights on professional platforms. Consistency is key—aim for 2-3 posts per week.

### The Bottom Line

The transformation from ESL teacher to executive coach isn't just about changing careers—it's about recognizing and monetizing the incredible value you already provide. Your teaching background is a competitive advantage in the coaching world. The question isn't whether you can make this transition, but how quickly you're willing to start.

If you're ready to explore this path, I offer a free 30-minute consultation to help you map out your specific transition strategy. The investment in your future starts with a single conversation.`,
    authorName: "Dr. Sarah Chen",
    authorBio: "Executive coach and communication specialist who transformed from ESL teacher to 6-figure executive coach. Specializes in helping international executives develop leadership presence and communication effectiveness.",
    authorAvatar: "/images/teacher-sarah.jpg",
    authorTitle: "Executive Coach & Leadership Communication Specialist",
    tags: ["Career Transformation", "Executive Coaching", "Success Story"],
    datePublished: "2024-12-08",
    readTime: 12,
    slug: "esl-to-executive-coach-transformation",
    views: 4123,
    likes: 287,
    comments: 45,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
};

interface BlogDetailProps {
  slug: string;
}

export function BlogDetail({ slug }: BlogDetailProps) {
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link href="/consultants" className="text-primary-600 hover:text-primary-700">
            ← Back to Consultants
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="relative h-[70vh] min-h-[400px] max-h-[600px] w-full">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-50/30 via-primary-50/10 to-transparent" />
        
        {/* Header Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    className="bg-primary-500/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4 border-2 border-white/20">
                    <AvatarImage src={post.authorAvatar} alt={post.authorName} />
                    <AvatarFallback className="bg-primary-100 text-primary-700 font-semibold">
                      {post.authorName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-white">{post.authorName}</p>
                    <p className="text-sm text-white/80">{post.authorTitle}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-white/80 font-bold">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.datePublished)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime} min read
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {post.views.toLocaleString()} views
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          {/* Main Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Markdown content={post.content} />
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            className="w-80 hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="sticky top-8 space-y-6">
             {/* Author Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-16 h-16 mr-4">
                      <AvatarImage src={post.authorAvatar} alt={post.authorName} />
                      <AvatarFallback className="bg-primary-100 text-primary-700 font-semibold text-lg">
                        {post.authorName.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{post.authorName}</h3>
                      <p className="text-sm text-gray-600">{post.authorTitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                    {post.authorBio}
                  </p>
                  
                  <Button className="w-full bg-primary-600 hover:bg-primary-700">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Related Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
                      >
                        {tag}
                      </Badge>
                    ))}
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">
                      Consulting
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer">
                      Language Learning
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* More Blogs Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              More Expert Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover more success stories and proven strategies from our world-class consultants
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(blogPosts)
              .filter(([slug]) => slug !== post.slug)
              .map(([slug, blogPost], index) => (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <Link href={`/blog/${slug}`}>
                    <BlogCard post={blogPost as BlogCardPost} showViews />
                  </Link>
                </motion.div>
              ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/consultants">
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-200 text-primary-700 hover:bg-primary-50"
              >
                View All Expert Insights
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-gradient-to-r from-primary-600 to-primary-700 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Connect with {post.authorName} and other world-class consultants on Linguaflex. 
            Start your journey to building a 6-figure consulting practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-50">
              Book a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Explore More Insights
            </Button>
          </div>
        </div>
      </motion.section>
    </article>
  );
}
