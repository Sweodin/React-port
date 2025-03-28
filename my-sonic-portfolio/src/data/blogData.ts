import { BlogPost } from "../types";
/*----- Import images directly -----*/
import movingForwardImage from "../assets/images/Blogposts/Moving-forward.jpg";
import keyboardImage from "../assets/images/Blogposts/Keyboard.jpg";
import codingImage from "../assets/images/Blogposts/Coding.jpg";
import motherboardImage from "../assets/images/Blogposts/Motherboard.jpg";
import cellphoneImage from "../assets/images/Blogposts/Cellphone.jpg";
import tltImage from "../assets/images/Blogposts/TLT.jpg";

export const blogData: BlogPost[] = [
  {
    id: "1",
    title:
      "Turning Challenges into Opportunities: My Journey into Web Development",
    excerpt:
      "Reflections on starting my journey as a web developer and the challenges I faced in my first week.",
    date: "September 19, 2024",
    image: movingForwardImage,
    category: "Learning",
    content: `
      <p>Starting something new is never easy, but sometimes life pushes you in just the right direction.
         For me, it all began when I moved back to Helsingborg with my family, determined to give us a fresh start and build a brighter future.
         This wasn't just about a new home — it was about a new beginning for me, my career, and our family.</p>
      
      <h2>The Decision to Study</h2>

        <p>After settling in Helsingborg, I knew it was time to take the leap. 
        My first step? Going back to school at Komvux to boost my grades.
       I wanted to make myself eligible for Högskola (university), and that meant putting in the hard work. 
       Balancing full-time studies and part-time work wasn't exactly a walk in the park, especially with ADHD making its presence felt daily. 
       But I wasn't going to let that hold me back. Instead, I decided to embrace my diagnosis and turn it into a strength.
        ADHD fuels my creativity, my ability to think outside the box, and my determination to keep moving forward.</p>

        <h2>The Grind Pays Off</h2>

        <p>That year was tough.
        Between assignments, exams, work, and family life, there were days I felt like I was running on empty. 
        But every challenge I overcame brought me one step closer to my goal. And finally, the moment came: my grades were good enough to move on to the next stage. 
        In August 2024, I began my studies at Sundsgårdens Folkhögskola, diving headfirst into the world of web development and IT.</p>

        <h2>The Start of Something Great</h2>

        <p>Joining Sundsgården felt like unlocking the door to my dream career. 
        I finally had the chance to focus on what I'm passionate about: tech and problem-solving. 
        From learning the basics of frontend and backend development to building my first projects, every day brings new challenges and victories.</p>

        <h2>Looking Forward</h2>

        <p>As I continue this journey, I'm excited to see where it leads. 
        Web development isn't just a career path for me — it's a passion that aligns perfectly with how my brain works. 
        The constant problem-solving, the creativity, the ability to see immediate results from my code — it all fits.</p>

        <p>So here's to new beginnings, to embracing challenges, and to turning what some might see as obstacles into stepping stones toward success. 
        This blog will document my journey, share what I learn along the way, and hopefully inspire others who might be considering a similar path.</p>

        <p>Stay tuned for more updates on my projects, challenges, and victories in the world of web development!</p>
    `,
  },
  {
    id: "2",
    title: "The Art of Mechanical Keyboards: Why They're Worth the Investment",
    excerpt:
      "Discover why mechanical keyboards are more than just a tool for typing, but a gateway to enhanced productivity and satisfaction.",
    date: "September 15, 2024",
    image: keyboardImage,
    category: "Technology",
    content: `
      <p>If you've ever wondered why some people are so passionate about their keyboards, this post is for you. 
      Mechanical keyboards aren't just about the satisfying "clack" sound (though that's definitely a perk) — they're about creating a typing experience that enhances your work and brings joy to every keystroke.</p>

      <h2>What Makes Mechanical Keyboards Special?</h2>

      <p>Unlike the membrane keyboards that come standard with most computers, mechanical keyboards use individual switches under each key. 
      This design offers several advantages:</p>

      <ul>
        <li><strong>Durability:</strong> Mechanical switches are rated for 50-100 million keystrokes, compared to about 5 million for membrane keyboards.</li>
        <li><strong>Customization:</strong> From switch types (linear, tactile, or clicky) to keycap designs, you can create a keyboard that's uniquely yours.</li>
        <li><strong>Typing Experience:</strong> The tactile feedback and consistent actuation force make typing more precise and comfortable.</li>
        <li><strong>Repairability:</strong> If a switch fails, you can replace just that switch rather than the entire keyboard.</li>
      </ul>

      <h2>Finding Your Perfect Switch</h2>

      <p>The heart of any mechanical keyboard is its switches. Here's a quick guide to the main types:</p>

      <ul>
        <li><strong>Linear (e.g., Cherry MX Red):</strong> Smooth keystroke with no tactile bump or audible click. Popular for gaming.</li>
        <li><strong>Tactile (e.g., Cherry MX Brown):</strong> Provides a noticeable bump when the key actuates, without being too loud. Great for typing and office use.</li>
        <li><strong>Clicky (e.g., Cherry MX Blue):</strong> Combines tactile feedback with an audible click. Satisfying for typing but can be noisy in shared spaces.</li>
      </ul>

      <h2>Beyond Productivity: The Joy Factor</h2>

      <p>There's something deeply satisfying about typing on a well-built mechanical keyboard. 
      The consistent feedback, the solid feel, the sound that matches your typing style — it all adds up to an experience that can make hours of typing feel less like work and more like a craft.</p>

      <p>For developers and writers who spend countless hours at their keyboards, this isn't just about preference — it's about creating a tool that serves your specific needs and brings a bit of joy to your daily work.</p>

      <h2>Getting Started</h2>

      <p>If you're curious about mechanical keyboards, you don't need to dive into the deep end right away. 
      Many affordable options offer a great introduction to mechanical typing. 
      Brands like Keychron, Ducky, and even gaming-focused companies like Razer offer entry-level mechanical keyboards that won't break the bank.</p>

      <p>Have you made the switch to mechanical keyboards? What's your favorite switch type? Let me know in the comments!</p>
    `,
  },
  {
    id: "3",
    title: "5 VS Code Extensions Every Web Developer Should Know",
    excerpt:
      "Boost your productivity and code quality with these essential Visual Studio Code extensions.",
    date: "September 10, 2024",
    image: codingImage,
    category: "Development",
    content: `
      <p>As a web developer, your code editor is your workshop, and having the right tools can make all the difference in your productivity and code quality. 
      Visual Studio Code has become the editor of choice for many developers, largely thanks to its robust extension ecosystem. 
      Here are five extensions I consider essential for web development:</p>

      <h2>1. ESLint</h2>

      <p>Code linting is crucial for maintaining consistent code quality, especially when working in teams. 
      ESLint helps you catch problems before they cause issues, enforcing coding standards and identifying potential bugs. 
      It's highly configurable, allowing you to adapt it to your project's specific needs.</p>

      <h2>2. Prettier</h2>

      <p>While ESLint helps with code quality, Prettier focuses on code formatting. 
      It automatically formats your code according to predefined rules, eliminating debates about styling and letting you focus on what matters: writing functional code. 
      Prettier works with JavaScript, TypeScript, CSS, HTML, and many other languages.</p>

      <h2>3. Live Server</h2>

      <p>This simple but powerful extension launches a local development server with live reload capability. 
      Every time you save changes to your HTML, CSS, or JavaScript files, the browser automatically refreshes to show your updates. 
      It's a small tool that saves you countless manual refreshes throughout the day.</p>

      <h2>4. GitLens</h2>

      <p>GitLens supercharges Git capabilities within VS Code. 
      It helps you visualize code authorship, navigate through file history, explore branches, and understand how your codebase has evolved over time. 
      For collaborative projects, it's invaluable for understanding who changed what and why.</p>

      <h2>5. JavaScript (ES6) code snippets</h2>

      <p>This extension provides snippets for common JavaScript patterns in ES6 syntax. 
      Instead of typing out full function declarations, import statements, or class definitions, you can use shortcuts that expand into properly formatted code. 
      It's a great time-saver and helps maintain consistent patterns in your codebase.</p>

      <h2>Honorable Mentions</h2>

      <ul>
        <li><strong>Auto Rename Tag:</strong> Automatically renames paired HTML/XML tags.</li>
        <li><strong>Path Intellisense:</strong> Autocompletes filenames in your code.</li>
        <li><strong>CSS Peek:</strong> Allows you to peek at CSS definitions directly from HTML.</li>
        <li><strong>Thunder Client:</strong> A lightweight alternative to Postman for API testing.</li>
        <li><strong>Color Highlight:</strong> Visualizes CSS colors directly in your code.</li>
      </ul>

      <p>What are your must-have VS Code extensions? Share your recommendations in the comments!</p>
    `,
  },
  {
    id: "4",
    title: "Understanding Computer Components: A Beginner's Guide",
    excerpt:
      "Demystifying the essential parts that make up a computer and how they work together.",
    date: "September 5, 2024",
    image: motherboardImage,
    category: "Technology",
    content: `
      <p>Whether you're looking to build your own PC, upgrade your current system, or just understand what's happening inside that box, knowing the basics of computer components is valuable knowledge for anyone in tech. 
      Let's break down the essential parts and their functions:</p>

      <h2>The Central Processing Unit (CPU)</h2>

      <p>Often called the "brain" of the computer, the CPU executes instructions from software. 
      Key specifications to understand include:</p>

      <ul>
        <li><strong>Cores:</strong> More cores allow for better multitasking.</li>
        <li><strong>Clock Speed:</strong> Measured in GHz, higher numbers generally mean faster processing.</li>
        <li><strong>Cache:</strong> A small amount of high-speed memory that helps the CPU access frequently used data quickly.</li>
      </ul>

      <p>Popular CPU manufacturers include Intel and AMD, each with various product lines targeting different user needs and budgets.</p>

      <h2>Random Access Memory (RAM)</h2>

      <p>RAM is your computer's short-term memory, storing data that active programs need to access quickly. 
      When people talk about "upgrading their memory," they're usually referring to adding more RAM. 
      More RAM allows you to run more programs simultaneously without slowdowns.</p>

      <p>RAM is measured in gigabytes (GB), with 8GB being a common starting point for modern systems, while 16GB or 32GB is recommended for more demanding tasks like video editing or gaming.</p>

      <h2>Storage Devices</h2>

      <p>Unlike RAM, storage devices retain data even when powered off. There are two main types:</p>

      <ul>
        <li><strong>Hard Disk Drives (HDD):</strong> Traditional storage with mechanical parts. They offer more storage per dollar but are slower and more fragile.</li>
        <li><strong>Solid State Drives (SSD):</strong> No moving parts, much faster read/write speeds, more durable, but typically more expensive per gigabyte than HDDs.</li>
      </ul>

      <p>Many modern systems use a combination: an SSD for the operating system and frequently used programs, and an HDD for large file storage.</p>

      <h2>Graphics Processing Unit (GPU)</h2>

      <p>While CPUs are general-purpose processors, GPUs are specialized for rendering images, videos, and animations. 
      They're crucial for:</p>

      <ul>
        <li>Gaming</li>
        <li>Video editing</li>
        <li>3D rendering</li>
        <li>Machine learning tasks</li>
      </ul>

      <p>NVIDIA and AMD are the primary manufacturers of dedicated GPUs. Many CPUs also include integrated graphics capabilities sufficient for basic computing needs.</p>

      <h2>Motherboard</h2>

      <p>The motherboard is the main circuit board that connects all components. 
      When choosing a motherboard, ensure it's compatible with your CPU and has the right slots and connections for other components you plan to use.</p>

      <h2>Power Supply Unit (PSU)</h2>

      <p>The PSU converts AC power from your wall outlet into DC power that your computer components can use. 
      It's important to choose a PSU with sufficient wattage for your system and from a reputable manufacturer to protect your other components.</p>

      <h2>Putting It All Together</h2>

      <p>These components work in harmony to create a functioning computer. 
      Understanding their roles and relationships helps whether you're troubleshooting problems, planning upgrades, or building a system from scratch.</p>

      <p>In future posts, I'll dive deeper into specific components and how to choose the right ones for different use cases. 
      What aspect of computer hardware would you like to learn more about? Let me know in the comments!</p>
    `,
  },
  {
    id: "5",
    title: "Mobile-First Design: Why It Should Be Your Default Approach",
    excerpt:
      "Exploring the benefits of designing for mobile first and how it improves the overall user experience across all devices.",
    date: "September 1, 2024",
    image: cellphoneImage,
    category: "Design",
    content: `
      <p>In the early days of web design, desktop experiences were the primary focus, with mobile considerations often treated as an afterthought. 
      Today, that approach is not just outdated—it's potentially harmful to your project's success. 
      Let's explore why mobile-first design has become the industry standard and how it benefits both users and developers.</p>

      <h2>What Is Mobile-First Design?</h2>

      <p>Mobile-first design is exactly what it sounds like: designing for the smallest screen first, then progressively enhancing the experience for larger screens. 
      This approach forces designers and developers to focus on content prioritization and essential functionality from the beginning.</p>

      <h2>The Statistical Reality</h2>

      <p>The shift to mobile-first isn't just a design philosophy—it's a response to user behavior. 
      As of 2024, mobile devices account for approximately 60% of global website traffic. 
      For many websites, especially in e-commerce and social media, that percentage is even higher. 
      Designing primarily for desktop means potentially alienating the majority of your users.</p>

      <h2>Benefits of Mobile-First Design</h2>

      <h3>1. Better Content Prioritization</h3>

      <p>Limited screen space forces you to make tough decisions about what truly matters. 
      What content is essential? What actions do users need to take? 
      This clarity of purpose benefits your design across all screen sizes.</p>

      <h3>2. Improved Performance</h3>

      <p>Mobile-first design naturally leads to leaner, more efficient websites. 
      Starting with a minimal approach and adding complexity only when necessary results in faster load times—crucial for both user experience and SEO.</p>

      <h3>3. Future-Proofing</h3>

      <p>As new devices with varying screen sizes continue to emerge, a mobile-first approach provides a solid foundation that can adapt to future technologies.</p>

      <h3>4. SEO Advantages</h3>

      <p>Google uses mobile-first indexing, meaning it predominantly uses the mobile version of a site's content for ranking and indexing. 
      Sites optimized for mobile have a distinct advantage in search rankings.</p>

      <h2>Implementing Mobile-First Design</h2>

      <p>Here are some practical tips for adopting a mobile-first approach:</p>

      <ul>
        <li><strong>Start with mobile wireframes</strong> before considering larger screens.</li>
        <li><strong>Use CSS media queries</strong> to add complexity for larger screens, not to fix problems on smaller ones.</li>
        <li><strong>Prioritize performance</strong> from the beginning, optimizing images and minimizing unnecessary scripts.</li>
        <li><strong>Test on actual devices</strong> whenever possible, not just browser simulations.</li>
        <li><strong>Consider touch interactions</strong> as the primary input method, ensuring buttons and interactive elements are appropriately sized.</li>
      </ul>

      <h2>Common Challenges and Solutions</h2>

      <p>Transitioning to mobile-first design isn't without challenges:</p>

      <ul>
        <li><strong>Complex functionality:</strong> Some features are inherently difficult to implement on small screens. The solution isn't to abandon them but to rethink how they can work within mobile constraints.</li>
        <li><strong>Stakeholder expectations:</strong> Clients or team members might be used to seeing desktop designs first. Education about the benefits of mobile-first can help align expectations.</li>
        <li><strong>Design team workflow:</strong> Shifting to mobile-first requires adjustments to established processes. Start small with one project component to demonstrate the value.</li>
      </ul>

      <h2>Conclusion</h2>

      <p>Mobile-first design isn't just a trend—it's a practical approach that acknowledges how people actually use the web today. 
      By starting with the constraints of mobile devices, we create more focused, efficient, and ultimately more successful digital experiences.</p>

      <p>Have you implemented mobile-first design in your projects? What challenges or benefits have you experienced? Share your thoughts in the comments!</p>
    `,
  },
  {
    id: "6",
    title: "The new Keyboard",
    excerpt: "Out with the Old, In with the New!",
    date: "October 24, 2024",
    image: keyboardImage,
    category: "Technology",
    content: `
      <p>Finally laid my old keyboard to rest!  After years of faithful service (and a few too many sticky keys!), it was time for an upgrade.
      I decided to go with a mechanical keyboard this time around, and I'm already wondering why I waited so long.</p>
      
      <p>The tactile feedback is amazing, and I'm actually typing faster with fewer errors. 
      Plus, the RGB lighting adds a nice ambiance to late-night coding sessions.</p>
      
      <p>For those curious, I went with Cherry MX Brown switches - a nice balance between typing comfort and not annoying everyone within earshot!</p>
      
      <p>Next upgrade: a proper ergonomic chair. My back will thank me later!</p>
    `,
  },
  {
    id: "7",
    title: "Responsive Design Principles in Modern Web Development",
    excerpt:
      "The process behind creating this Sonic-themed portfolio and the lessons learned along the way.",
    date: "November 15, 2024",
    image: tltImage,
    category: "Design",
    content: `
      <p>In today's digital landscape, responsive design isn't just a nice-to-have—it's essential. 
      With users accessing websites from devices ranging from small smartphones to large desktop monitors, 
      ensuring your site looks and functions well across all screen sizes is crucial for providing a positive user experience.</p>
      
      <p>Here are some key principles I've found helpful in my responsive design journey:</p>
      
      <h3>1. Mobile-First Approach</h3>
      <p>Starting with the mobile design forces you to prioritize content and functionality. 
      It's easier to progressively enhance for larger screens than to try to cram a desktop design into a mobile view.</p>
      
      <h3>2. Fluid Grids and Flexible Images</h3>
      <p>Using relative units (percentages, ems, rems) rather than fixed pixels allows your layout to adapt to different screen sizes. 
      Similarly, setting max-width: 100% on images ensures they never exceed their container size.</p>
      
      <h3>3. Strategic Breakpoints</h3>
      <p>Rather than targeting specific devices, set breakpoints where your design starts to break down. 
      This approach ensures your site looks good on current and future devices.</p>
      
      <h3>4. Touch-Friendly Interfaces</h3>
      <p>Remember that mobile users are navigating with fingers, not mouse pointers. 
      Buttons and interactive elements should be large enough (at least 44x44 pixels) and have sufficient spacing.</p>
      
      <h3>5. Performance Optimization</h3>
      <p>Mobile users often have slower connections. Optimize images, minimize HTTP requests, and consider lazy loading for content below the fold.</p>
      
      <p>What responsive design challenges have you faced in your projects? I'd love to hear about your experiences and solutions!</p>
    `,
  },
];
