// Portfolio Data Configuration
// Edit this file to update your portfolio content

const portfolioData = {
  // Personal Information
  personal: {
    name: "Bijay Khanal",
    title: "Machine Learning Engineer & Data Scientist",
    tagline: "Specializing in LLMs, Computer Vision & Deep Learning",
    email: "contact@khanalbijay.com.np",
    profileImage: "imgs/bijay.jpg",
    about: {
      paragraphs: [
        "Currently pursuing <strong>M.Sc. Computer Engineering with Data Science Specialization</strong> at Pulchowk Campus, I am a passionate Machine Learning Engineer and Data Scientist with expertise in building intelligent systems that solve real-world problems.",
        "With experience as an <strong>LLM Expert, Competitive Coder, and Data Analyst</strong>, I specialize in developing advanced AI solutions including document retrieval systems, computer vision applications, and autonomous navigation systems. My background in Electronics & Communications Engineering provides a strong foundation for IoT and embedded systems development.",
        "I am driven by the intersection of <strong>research and practical application</strong>, focusing on making cutting-edge machine learning technologies accessible and impactful for businesses and society."
      ],
      highlights: [
        {
          title: "Current Focus",
          items: [
            "Large Language Models (LLMs) & RAG Systems",
            "Advanced Computer Vision & Deep Learning"
          ]
        },
        {
          title: "Research Interests",
          items: [
            "Natural Language Processing & Generation",
            "Computer Vision & 3D Reconstruction",
            "Distributed AI Systems"
          ]
        }
      ]
    }
  },

  // Social Links
  social: {
    github: "https://github.com/KhanalBijay",
    linkedin: "https://www.linkedin.com/in/khanal-bijay/",
    huggingface: "https://huggingface.co/Bijay13"
  },

  // Education
  education: [
    {
      degree: "M.Sc. Computer Engineering",
      specialization: "Data Science Specialization",
      institution: "Pulchowk Campus",
      duration: "2024 - Present",
      description: "Pursuing advanced studies in machine learning algorithms, deep learning architectures, and data science methodologies with focus on practical applications."
    },
    {
      degree: "B.E. Electronics & Communications",
      institution: "Thapathali Campus",
      duration: "2015 - 2019",
      description: "Comprehensive foundation in electronics engineering, signal processing, communication systems, and embedded systems design."
    }
  ],

  // Technical Skills
  skills: [
    {
      category: "ML/DS Stack",
      badges: [
        { name: "Python", level: "primary" },
        { name: "PyTorch", level: "primary" },
        { name: "TensorFlow", level: "primary" },
        { name: "Keras", level: "primary" },
        { name: "Scikit-Learn", level: "primary" }
      ]
    },
    {
      category: "LLM/NLP",
      badges: [
        { name: "RAG Systems", level: "primary" },
        { name: "Document Retrieval", level: "primary" },
        { name: "Chatbots", level: "primary" },
        { name: "NLP", level: "primary" },
        { name: "Hugging Face", level: "secondary" }
      ]
    },
    {
      category: "Computer Vision",
      badges: [
        { name: "OpenCV", level: "primary" },
        { name: "Face Recognition", level: "primary" },
        { name: "Object Detection", level: "primary" },
        { name: "SLAM", level: "primary" },
        { name: "YOLO", level: "secondary" }
      ]
    },
    {
      category: "IoT/Embedded",
      badges: [
        { name: "C", level: "secondary" },
        { name: "C++", level: "secondary" },
        { name: "ROS", level: "secondary" },
        { name: "Arduino", level: "secondary" },
        { name: "ESP32", level: "secondary" }
      ]
    },
    {
      category: "Tools & Platforms",
      badges: [
        { name: "Jupyter", level: "secondary" },
        { name: "Git", level: "secondary" },
        { name: "Docker", level: "secondary" },
        { name: "Linux", level: "secondary" },
        { name: "AWS", level: "secondary" }
      ]
    }
  ],

  // Featured Projects
  projects: [
    {
      title: "Advanced LLM/RAG Systems",
      description: "Developed sophisticated document retrieval and chatbot systems using advanced RAG (Retrieval-Augmented Generation) techniques. Implemented vector databases, semantic search, and multi-document conversation capabilities with optimized performance for real-time applications.",
      image: "imgs/llm-rag-system.webp",
      tags: ["Python", "LangChain", "Vector DBs", "NLP", "RAG"],
      link: "https://github.com/KhanalBijay",
      featured: true
    },
    {
      title: "Whisper ASR Model Fine-tuning",
      description: "End-to-end implementation of fine-tuning OpenAI's Whisper model for Nepali speech recognition. Features custom dataset processing, optimized training pipeline, and production-ready deployment on Hugging Face Spaces for real-time transcription.",
      image: "imgs/whisper-finetune.webp",
      tags: ["Whisper", "PyTorch", "ASR", "Hugging Face", "Deployment"],
      link: "https://huggingface.co/Bijay13",
      featured: true
    },
    {
      title: "Real-time Face Recognition System",
      description: "Implemented high-performance face recognition system with real-time detection capabilities. Optimized for ARM processors with edge computing deployment, achieving sub-100ms inference time while maintaining 99%+ accuracy across diverse lighting conditions.",
      image: "imgs/face-recognition.webp",
      tags: ["Computer Vision", "OpenCV", "Deep Learning", "ARM Optimization"],
      link: "https://github.com/KhanalBijay",
      featured: false
    },
    {
      title: "Autonomous SLAM Navigation",
      description: "Developed comprehensive Simultaneous Localization and Mapping (SLAM) system for autonomous navigation using ROS framework. Integrated LiDAR, IMU, and camera sensors for robust mapping in complex environments with dynamic obstacle avoidance.",
      image: "imgs/slam-navigation.webp",
      tags: ["ROS", "SLAM", "Robotics", "Sensor Fusion", "LiDAR"],
      link: "https://github.com/KhanalBijay",
      featured: false
    },
    {
      title: "IoT Smart Home System",
      description: "Built comprehensive smart home automation system with sensor monitoring, video streaming, and intelligent control capabilities. Integrated multiple sensor types, real-time data processing, and mobile dashboard for remote monitoring and control.",
      image: "imgs/iot-smart-home.webp",
      tags: ["IoT", "ESP32", "Sensors", "Real-time Data", "Dashboard"],
      link: "https://github.com/KhanalBijay",
      featured: false
    },
    {
      title: "3D Reconstruction with RGBD Imaging",
      description: "Implemented advanced 3D reconstruction system using Azure Kinect RGBD sensors. Developed point cloud processing, mesh generation, and surface reconstruction algorithms for precise 3D modeling applications in robotics and computer vision.",
      image: "imgs/3d-reconstruction.webp",
      tags: ["3D Vision", "Azure Kinect", "Point Clouds", "Depth Processing", "Mesh Generation"],
      link: "https://github.com/KhanalBijay",
      featured: false
    }
  ],

  // Work Experience
  experience: [
    {
      role: "LLM Expert, Competitive Coder & Data Analyst",
      company: "Upwork (Freelance)",
      duration: "2023 - Present",
      description: "Specializing in Large Language Model implementation, competitive programming solutions, and advanced data analysis projects. Delivered cutting-edge AI solutions for diverse client requirements across multiple industries."
    },
    {
      role: "IoT & Computer Vision Engineer",
      company: "Ekbana Solutions",
      duration: "2019 - 2023",
      description: "Developed innovative IoT solutions and computer vision applications. Led projects in smart home automation, industrial monitoring systems, and embedded AI deployment on resource-constrained devices."
    }
  ],

  // Navigation Menu
  navigation: [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ],

  // Contact Section
  contact: {
    title: "Let's Collaborate",
    subtitle: "Ready to work on your next ML/DS project?",
    description: "I'm always interested in discussing new opportunities, research collaborations, and innovative AI projects. Let's connect and explore how we can work together to solve complex technical challenges."
  },

  // Optional: Blog Posts (add when needed)
  blogs: [
    // Example structure - uncomment and fill when adding blog posts
    // {
    //   title: "Understanding RAG Systems",
    //   date: "2024-01-15",
    //   excerpt: "A deep dive into Retrieval-Augmented Generation systems...",
    //   link: "/blog/understanding-rag-systems",
    //   tags: ["LLM", "RAG", "NLP"]
    // }
  ],

  // Optional: Research Papers (add when needed)
  research: [
    // Example structure - uncomment and fill when adding research papers
    // {
    //   title: "Novel Approach to SLAM in Dynamic Environments",
    //   authors: ["Bijay Khanal", "Co-Author Name"],
    //   venue: "Conference/Journal Name",
    //   year: "2024",
    //   link: "https://arxiv.org/...",
    //   pdf: "/papers/slam-paper.pdf",
    //   abstract: "This paper presents..."
    // }
  ]
};

// Make data available globally
if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
