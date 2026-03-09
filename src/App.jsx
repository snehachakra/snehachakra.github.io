import React from 'react'

const experiences = [
  {
    title: 'Undergraduate Research Assistant',
    org: 'PARSES Lab, Northeastern University',
    date: 'Aug 2025 – Present',
    description:
      'Designing embedded sensing and control systems for a wearable robotic splint, with a focus on power optimization, pneumatic actuation, and sensor fusion.',
    bullets: [
      'Designed sleep-protocol programs in C++ on an ESP32-S2 using GPIO interrupts and sensor-driven data to reduce power consumption.',
      'Implemented pressure-controlled actuation using sensors, MOSFET drivers, and air pumps for safe pneumatic regulation.',
      'Integrated multiple 9-DoF IMUs over I2C and developed Kalman-filter-based sensor fusion for cleaner joint-angle estimation.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'Google',
    date: 'May 2025 – Aug 2025',
    description:
      'Worked on Android product development for Google Photos, collaborating across engineering and UX to build polished user-facing experiences.',
    bullets: [
      'Implemented selection logic and real-time logging in Kotlin/Java and tested on Android hardware.',
      'Designed dialogs, undo flows, and entry points to improve usability and reduce user error.',
      'Authored technical documentation and collaborated with backend engineers and UX designers for consistency across product and code.',
    ],
  },
  {
    title: 'STEM Instructor',
    org: 'iD Tech Camps',
    date: 'May 2024 – Aug 2024',
    description:
      'Taught robotics and programming in a fun, hands-on environment for students across a wide range of ages and experience levels.',
    bullets: [
      'Taught VEX Robotics, C++, Java, and Virtual Robotics to students ages 7–17.',
      'Designed engaging curricula and facilitated interactive programming and robotics labs.',
      'Adapted instruction across different skill levels while building confidence in STEM.',
    ],
  },
  {
    title: 'Tutor',
    org: 'Diamond Tutoring',
    date: 'Aug 2021 – May 2022',
    description:
      'Supported middle and high school students in STEM subjects through personalized guidance and problem-solving practice.',
    bullets: [
      'Guided students through STEM coursework and study strategies.',
      'Helped students build confidence and stronger problem-solving habits.',
    ],
  },
]

const projects = [
  {
    title: 'Lunar Robot',
    subtitle: 'NU SEDS Lunabotics',
    description:
      'A NASA competition rover project combining embedded systems, robotics, control, and board-level design.',
    bullets: [
      'Designed CAN bus interface circuitry for STM32-based control boards in KiCAD.',
      'Developed ROS2 control nodes for excavation and deposition subsystems.',
      'Contributed to system architecture, subsystem integration, and requirements planning for competition readiness.',
    ],
  },
  {
    title: 'ECG Filter',
    subtitle: 'Circuits & Signals',
    description:
      'An analog front end and signal-processing project for cleaning and measuring bioelectric signals.',
    bullets: [
      'Designed an AD627 instrumentation amplifier stage for ECG signal amplification.',
      'Implemented a 2nd-order active bandpass filter from 0.1–250 Hz.',
      'Verified hardware performance using oscilloscope measurements and NI USB-6001 acquisition before MATLAB processing.',
    ],
  },
  {
    title: 'Spider Hexapod Robot',
    subtitle: 'Embedded Design',
    description:
      'An FPGA-based motion-control project focused on PWM generation, motor control, and hardware interfacing.',
    bullets: [
      'Designed hardware-level PWM modules on a DE1-SoC FPGA for DC motor control through H-bridge circuitry.',
      'Implemented calibrated PWM position control for RC servos.',
      'Integrated level shifters and power interface circuitry for reliable signal translation.',
    ],
  },
  {
    title: 'Interactive Honeybee Sustainability Exhibit',
    subtitle: 'Engineering Design Project',
    description:
      'A playful educational exhibit for kids that combined embedded systems, storytelling, and interactive design.',
    bullets: [
      'Built embedded C++ serial communication to integrate Arduino-controlled LEDs, joystick input, and buttons.',
      'Designed an interactive game with SFML graphics for elementary students.',
      'Documented the engineering process in a 200+ page report and design notebook.',
    ],
  },
  {
    title: 'Image Processing Application',
    subtitle: 'Software Project',
    description:
      'A Java MVC application for image transformations, histogram visualization, and multi-format support.',
    bullets: [
      'Developed a Java Swing app supporting BMP, JPG, PNG, and PPM files.',
      'Implemented grayscale, sepia, blurring, sharpening, brightness adjustment, and histogram visualization.',
      'Packaged the application as a JAR for easier deployment and testing.',
    ],
  },
]

const skills = {
  hardware: ['KiCAD', 'PSpice', 'LTSpice', 'Arduino', 'AutoCAD', 'SolidWorks', 'Xilinx Vivado'],
  programming: ['C', 'C++', 'MATLAB', 'Java', 'Python', 'SystemVerilog'],
  lab: ['Oscilloscopes', 'Multimeters', 'Power Supplies', 'Function Generators'],
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}

function SkillGroup({ title, items }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="tag-list">
        {items.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">Sneha Chakrabarty</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div>
            <p className="hero-pill">
              whimsical engineer • embedded systems • robotics • creative builder
            </p>
            <h1>
              Hi, I’m <span>Sneha</span>.
            </h1>
            <p className="hero-text">
              I’m an Electrical and Computer Engineering student at Northeastern University
              with a Computer Science minor. I love building things that live at the
              intersection of hardware, embedded software, robotics, and human-centered design.
            </p>
            <p className="hero-subtext">
              My work spans wearable robotics research, lunar rover subsystems, FPGA motor
              control, circuits and signal processing, Android development, and interactive
              educational exhibits. I like making technical work feel thoughtful, creative,
              and genuinely meaningful.
            </p>

            <div className="hero-buttons">
              <a className="button primary" href="mailto:snehachakrab@gmail.com">
                Email Me
              </a>
              <a className="button secondary" href="#projects">
                View Projects
              </a>
            </div>

            <div className="contact-chips">
              <span>Boston, MA / Lathrop, CA</span>
              <span>snehachakrab@gmail.com</span>
              <span>(510) 755-3549</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-inner">
              <p className="small-label">Currently</p>
              <h3>Building toward embedded systems, robotics, and space-focused engineering.</h3>
              <div className="mini-card">
                <strong>Education</strong>
                <p>B.S. in Electrical and Computer Engineering</p>
                <p>Minor in Computer Science</p>
                <p>Northeastern University • Expected May 2027 • GPA: 3.53</p>
              </div>
              <div className="mini-card">
                <strong>Favorite engineering spaces</strong>
                <p>Embedded systems, robotics, circuits, control, sensing, and hardware-software co-design.</p>
              </div>
              <div className="mini-card">
                <strong>Outside engineering</strong>
                <p>Cooking, music, travel, hikes, animals, design, and making technical work feel creative and human.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section id="about" className="section">
          <SectionTitle
            eyebrow="About"
            title="A little bit about how I build"
            description="I’m especially drawn to projects that combine careful engineering with real-world impact. I love the technical depth of embedded systems and hardware design, but I also care about storytelling, usability, and making things feel intuitive and alive."
          />

          <div className="three-grid">
            <div className="card">
              <h3>Hardware-minded</h3>
              <p>
                I enjoy working close to the physical system: sensors, signal flow, motor control,
                board-level design, timing, and power constraints.
              </p>
            </div>
            <div className="card">
              <h3>Systems-oriented</h3>
              <p>
                I like understanding how components fit together into a larger architecture, whether
                that’s a rover, a wearable device, or an interactive exhibit.
              </p>
            </div>
            <div className="card">
              <h3>Creative and collaborative</h3>
              <p>
                I bring a mix of technical rigor, communication, visual instinct, and curiosity. I care
                about making complex ideas approachable and well-designed.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <SectionTitle
            eyebrow="Experience"
            title="Where I’ve learned, built, and taught"
            description="Each experience has shaped the way I approach engineering: with curiosity, care, and a strong bias toward building things that work in the real world."
          />

          <div className="stack">
            {experiences.map((item) => (
              <div key={`${item.title}-${item.org}`} className="card experience-card">
                <div className="experience-header">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="org">{item.org}</p>
                  </div>
                  <span className="date-badge">{item.date}</span>
                </div>
                <p className="experience-description">{item.description}</p>
                <ul className="bullet-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle
            eyebrow="Projects"
            title="A few things I’ve built"
            description="These projects span embedded systems, robotics, circuits, software, and educational design. Together, they reflect the kind of engineer I’m becoming: technical, interdisciplinary, and very excited about complex systems."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <div key={project.title} className="card project-card">
                <p className="project-subtitle">{project.subtitle}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="bullet-list">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle
            eyebrow="Skills"
            title="Tools I like having in my toolbox"
            description="I enjoy moving between hardware, software, and test environments. I’m most energized when I can use several of these together to bring a system to life."
          />

          <div className="three-grid">
            <SkillGroup title="Hardware & Design" items={skills.hardware} />
            <SkillGroup title="Programming Languages" items={skills.programming} />
            <SkillGroup title="Laboratory Equipment" items={skills.lab} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-card">
          <div>
            <p className="eyebrow footer-eyebrow">Looking ahead</p>
            <h2>I’m especially excited by embedded systems, robotics, and engineering for space applications.</h2>
            <p className="footer-text">
              Long term, I hope to pursue graduate study and research in electrical engineering and
              robotics, especially in areas connected to space exploration, extreme-environment
              systems, and human-centered robotics.
            </p>
          </div>
          <div className="footer-contact">
            <p><strong>Email:</strong> snehachakrab@gmail.com</p>
            <p><strong>Phone:</strong> (510) 755-3549</p>
            <p><strong>Location:</strong> Boston, MA / Lathrop, CA</p>
          </div>
        </div>
      </footer>
    </div>
  )
}