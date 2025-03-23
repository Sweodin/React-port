import { BlogPost } from "../types";
/*----- Import images directly -----*/

function getImagePath(imageName: string) {
  return new URL(`../assets/images/Blogposts/${imageName}`, import.meta.url)
    .href;
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    title:
      "Turning Challenges into Opportunities: My Journey into Web Development",
    excerpt:
      "Reflections on starting my journey as a web developer and the challenges I faced in my first week.",
    date: "September 19, 2024",
    image: getImagePath("Moving-forward.jpg"),
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
        From learning the basics of frontend and backend development to building my first projects, every day felt like a step closer to the future I'd always envisioned.
        This journey hasn't just been about learning HTML or JavaScript. 
        It's been about resilience, growth, and proving to myself that I'm capable of achieving great things — even when the odds aren't in my favor.</p>

        <h2>Moving Forward</h2>

        <p>Looking back, I'm proud of how far I've come. Moving cities, balancing family life, and managing ADHD while pursuing my dreams hasn't been easy, but it's been worth every late night and early morning. 
        I'm excited about what's to come and ready to continue pushing forward.
        To anyone else out there who might feel like their goals are out of reach: don't give up. 
        Challenges are just opportunities in disguise. Embrace them, grow from them, and use them to fuel your journey forward. 
        If I can do it, so can you.</p>
        
        <p>Here's to building a career in IT and tech — one line of code at a time.</p>
      
    `,
  },
  {
    id: "2",
    title: "The new Keyboard",
    excerpt: "Out with the Old, In with the New!",
    date: "October 24, 2024",
    image: getImagePath("Keyboard.jpg"),
    category: "Technology",
    content: `
      <p>Finally laid my old keyboard to rest!  After years of faithful service (and a few too many sticky keys!), it was time for an upgrade.
          I'm thrilled to introduce my new companion in code: the Asus ROG 75%!</p>
      
      <h2>First Impressions: ROG 75% Keyboard Bliss</h2>
      <p>
        What a difference a keyboard makes!  The ROG 75% is a dream to type on.
        It's made a noticeable difference in my typing speed and comfort, which is crucial when you're spending hours writing code.
          Plus, let's be honest, the customizable RGB lighting is pretty awesome and adds a bit of fun to my setup!
      </p>

      <h2>Coding Progress Update: Frontend Focus</h2>

      <p>
        On the coding front, things are really clicking.
        I've been diving deeper into frontend technologies, really getting comfortable with HTML, Sass, and React.
        I recently tackled a challenge working with these technologies.
        It's incredibly satisfying to see ideas come to life on the screen, and these tools are making the process more efficient and enjoyable.
      </p>

      <h2>Looking Ahead: Web Development and Beyond</h2>

      <p>
      But that's all part of the learning process, right?  
      I'm excited to share more updates as the game project progresses and as I continue my journey into the world of web development! Stay tuned!
      </p>
    `,
  },
  {
    id: "3",
    title: "The Art of Responsive Design",
    excerpt:
      "The process behind creating this Sonic-themed portfolio and the lessons learned along the way.",
    date: "November 15, 2024",
    image: getImagePath("TLT.jpg"),
    category: "Design",
    content: `
      <p>In today's digital landscape, responsive design isn't just a nice-to-have—it's essential. 
        With users accessing websites from various devices, we need to ensure our designs adapt seamlessly to different screen sizes.</p>

        <h2>Key Principles of Responsive Design</h2>

        <ul>
          <li>Fluid Grids</li>
          <li>Flexible Images</li>
          <li>Media Queries</li>
          <li>Mobile-First Approach</li>
        </ul>

        <p>One of the most important aspects of responsive design is understanding breakpoints. 
         Here's a common approach I use:</p>

        <code>
        /* Mobile First */
        .container {
          width: 100%;
        }

        /* Tablet */
        @media (min-width: 768px) {
          .container {
            width: 750px;
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .container {
            width: 970px;
          }
        }
        </code>

        <h2>Testing Across Devices</h2>
        <p>A responsive design is only as good as its testing process.
        I always ensure to test my designs across multiple devices and browsers to guarantee a consistent experience.</p>
    `,
  },
];
