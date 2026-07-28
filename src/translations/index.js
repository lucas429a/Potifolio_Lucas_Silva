export const translations = {
  pt: {
    header: {
      about: "Sobre",
      video: "Vídeo",
      projects: "Projetos",
      technologies: "Tecnologias",
      architecture: "Arquitetura",
      cases: "Cases",
      contact: "Contato"
    },
    hero: {
      badge: "+1 ano de experiência profissional",
      greeting: "Olá, eu sou",
      name: "Lucas Silva",
      role: "Desenvolvedor Full Stack",
      description1: "Sou desenvolvedor formado pela",
      description1Bold: "Kenzie Academy Brasil",
      description1Rest: ", estudo há mais de 3 anos e tenho mais de um ano de experiência desenvolvendo soluções robustas e escaláveis em ambiente profissional.",
      description2: "Ao longo da minha trajetória, desenvolvi expertise em arquiteturas como",
      description2Rest: ", sempre buscando código limpo e manutenível.",
      description3: "Trabalho com tecnologias modernas no frontend e backend, utilizando TypeScript e Python com frameworks como React, Django e Node — sempre focado em entregar valor através de software de qualidade.",
      viewProjects: "Ver Projetos",
      watchVideo: "Ver Apresentação",
      stats: {
        experience: "Ano de XP",
        technologies: "Tecnologias",
        projects: "Projetos"
      }
    },
    video: {
      tag: "Apresentação",
      title: "Me conheça em",
      titleHighlight: "2 minutos",
      subtitle: "Uma breve apresentação em inglês sobre minha trajetória, minhas habilidades técnicas e o que me motiva como desenvolvedor.",
      note: "Vídeo hospedado no YouTube (não listado)"
    },
    technologies: {
      tag: "Stack Tecnológico",
      title: "Tecnologias que",
      titleHighlight: "Domino",
      subtitle: "Ferramentas e frameworks que utilizo diariamente para construir aplicações robustas e escaláveis",
      frontend: "Frontend",
      backend: "Backend",
      database: "Banco de Dados",
      tools: "Ferramentas & Bibliotecas",
      learning: "Sempre aprendendo novas tecnologias e boas práticas"
    },
    projects: {
      tag: "Portfólio",
      title: "Meus",
      titleHighlight: "Projetos",
      subtitle: "Projetos reais que demonstram minha capacidade de entregar soluções completas, do frontend ao backend",
      featured: "Destaque",
      viewCode: "Ver código",
      demo: "Demo",
      moreOnGithub: "Ver mais no GitHub",
      highlights: "Destaques",
      architectureLabel: "Arquitetura",
      items: {
        gostacker: {
          title: "goStacker",
          subtitle: "Sistema SaaS de Gestão de Filas",
          description: "Plataforma completa para gerenciamento de senhas e agendamentos com painéis em tempo real, múltiplos níveis de usuário e integração de pagamentos.",
          highlights: [
            "Painéis TV e admin com atualizações em tempo real",
            "Checkout com integração Asaas",
            "Temas personalizáveis por cliente",
            "Níveis de acesso: visitante, atendente e admin"
          ],
          architecture: "MVC simplificado no backend; componentização no frontend"
        },
        devstore: {
          title: "Devstore",
          subtitle: "E-commerce Full Stack",
          description: "Loja virtual completa com carrinho persistente, checkout, envio de e-mails e autenticação segura via tokens rotativos.",
          highlights: [
            "Carrinho de compras persistente",
            "Envio de e-mail com Nodemailer",
            "Refresh tokens com httpOnly cookies",
            "Proteção XSS e CSRF"
          ],
          architecture: "MVC simplificado com separação clara de camadas"
        },
        portfolio: {
          title: "Portfólio Pessoal",
          subtitle: "Design & Frontend",
          description: "Este site — projeto focado em UI/UX moderna, animações suaves e apresentação profissional do meu trabalho.",
          highlights: [
            "Animações de scroll suaves",
            "Tema preto & branco com dark mode",
            "Scroll suave entre seções",
            "Foco em UI/UX e micro-interações"
          ],
          architecture: "Componentização com React e TailwindCSS"
        },
        fileManager: {
          title: "FileManager API",
          subtitle: "Backend Enterprise",
          description: "Sistema backend completo para gerenciamento de arquivos multi-empresa, processamento de CSV/XML/ZPL e geração dinâmica de PDFs com templates customizados.",
          highlights: [
            "Clean Architecture + SOLID",
            "25+ geradores de PDF",
            "Multi-empresa com padrão Factory",
            "Precisão submilimétrica em etiquetas"
          ],
          architecture: "Clean Architecture, SOLID, TDD"
        },
        movieDb: {
          title: "Database de Filmes",
          subtitle: "API REST",
          description: "API para gerenciamento de usuários, filmes e compras, com autenticação e sistema de permissões para diferentes tipos de usuário.",
          highlights: [
            "Autenticação JWT",
            "Sistema de permissões",
            "Relacionamentos complexos"
          ],
          architecture: "API REST com Django"
        },
        userCourses: {
          title: "Usuários e Cursos",
          subtitle: "API REST",
          description: "API de controle de usuários e cursos com sistema de matrículas, controle de acessos e permissões de administrador.",
          highlights: [
            "Sistema de matrículas",
            "Permissões de administrador",
            "SQL puro com TypeScript"
          ],
          architecture: "API REST com Node + SQL"
        }
      }
    },
    architecture: {
      tag: "Arquitetura de Software",
      title: "Padrões e",
      titleHighlight: "Boas Práticas",
      subtitle: "Conhecimentos em arquiteturas e metodologias que aplico diariamente para criar código limpo, testável e escalável",
      mainConcepts: "Conceitos principais:",
      cleanCode: "Código Limpo & Manutenível",
      cleanCodeDesc: "Aplicando esses conceitos diariamente em projetos reais",
      solid: {
        name: "SOLID",
        fullName: "SOLID Principles",
        description: "Cinco princípios fundamentais da programação orientada a objetos que tornam o software mais compreensível, flexível e manutenível.",
        principles: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Interface Segregation", "Dependency Inversion"]
      },
      cleanArch: {
        name: "Clean Architecture",
        fullName: "Arquitetura Limpa",
        description: "Separação de responsabilidades em camadas, com o domínio no centro e dependências apontando para dentro.",
        principles: ["Entities (Regras de Negócio)", "Use Cases (Casos de Uso)", "Controllers & Gateways", "Frameworks & Drivers"]
      },
      ddd: {
        name: "DDD",
        fullName: "Domain-Driven Design",
        description: "Abordagem de desenvolvimento focada no domínio do negócio, com linguagem ubíqua e modelagem estratégica.",
        principles: ["Bounded Contexts", "Aggregates & Entities", "Value Objects", "Domain Events"]
      },
      tdd: {
        name: "TDD",
        fullName: "Test-Driven Development",
        description: "Desenvolvimento orientado por testes: escrever testes primeiro, implementar código depois, refatorar.",
        principles: ["Red (Teste falha)", "Green (Código passa)", "Refactor (Melhorar)", "Repeat"]
      }
    },
    cases: {
      tag: "Cases Técnicos",
      title: "Projetos em",
      titleHighlight: "Detalhe",
      subtitle: "Um mergulho técnico nos sistemas que construí — decisões de arquitetura, desafios e soluções reais"
    },
    fileManager: {
      badge: "Backend Enterprise",
      title: "FileManager",
      titleHighlight: "API",
      subtitle: "Sistema backend completo para gerenciamento de arquivos e geração de PDFs utilizando Clean Architecture e padrões SOLID",
      tabs: {
        overview: "Visão Geral",
        upload: "Upload API",
        pdf: "PDF Generator"
      },
      overview: {
        title: "Sistema de Gerenciamento de Arquivos",
        description: "Uma API robusta e escalável para processamento de arquivos de múltiplas empresas, com suporte a diferentes formatos (CSV, XML, ZPL) e geração dinâmica de PDFs com templates customizados.",
        companies: "Empresas",
        companiesLabel: "Suportadas",
        generators: "Geradores",
        generatorsLabel: "de PDF",
        patterns: "Padrões",
        patternsLabel: "de Design",
        fields: "Campos",
        fieldsLabel: "por Template",
        designPatterns: "Padrões de Design Aplicados",
        cleanArchitecture: "Clean Architecture",
        cleanArchitectureDesc: "Camadas bem definidas com separação de responsabilidades",
        layer1: "Entities",
        layer1Desc: "Regras de negócio",
        layer2: "Use Cases",
        layer2Desc: "Lógica de aplicação",
        layer3: "Controllers",
        layer3Desc: "Interface adapters",
        layer4: "Frameworks",
        layer4Desc: "Fastify, Prisma",
        solidPrinciples: "Princípios SOLID",
        solidPrinciplesDesc: "Aplicados em toda a base de código",
        srp: "Single Responsibility",
        srpDesc: "Cada classe tem uma única responsabilidade",
        ocp: "Open/Closed",
        ocpDesc: "Aberto para extensão, fechado para modificação",
        lsp: "Liskov Substitution",
        lspDesc: "Subtipos substituíveis por seus tipos base",
        isp: "Interface Segregation",
        ispDesc: "Interfaces específicas e coesas",
        dip: "Dependency Inversion",
        dipDesc: "Dependência de abstrações, não implementações",
        tdd: "Test-Driven Development",
        tddDesc: "Testes unitários e de integração para garantir qualidade"
      },
      upload: {
        title: "API de Upload de Arquivos",
        description: "Sistema robusto de processamento de arquivos com suporte a múltiplos formatos e empresas, utilizando padrões Factory e Strategy.",
        features: [
          "Padrão Factory para Multi-Empresa",
          "Sistema de Conversores Polimórficos",
          "Detecção Inteligente de Tipo",
          "Merge e Enriquecimento de Dados",
          "Validação de Regras de Negócio",
          "Transaction Safety com Prisma"
        ],
        flow: "Fluxo de Processamento",
        step1: "Upload",
        step2: "Validação",
        step3: "Conversão",
        step4: "Persistência",
        formats: "Formatos Suportados",
        companies: "Empresas Integradas",
        tech: "Tecnologias",
        viewRepository: "Ver Repositório"
      },
      pdf: {
        title: "Gerador de PDFs",
        description: "Sistema avançado de geração de PDFs com templates dinâmicos, suporte a múltiplos layouts e precisão submilimétrica.",
        modes: {
          single: { mode: "Single", desc: "Uma etiqueta" },
          batch: { mode: "Batch", desc: "Múltiplas etiquetas" },
          custom: { mode: "Custom", desc: "Layout personalizado" }
        },
        precision: "Precisão",
        features: [
          "25+ geradores de PDF diferentes",
          "Templates com 50+ campos cada",
          "Fontes customizadas por empresa",
          "QR Codes e barcodes dinâmicos",
          "Precisão submilimétrica",
          "Buffer direto sem gravação em disco"
        ],
        templateFields: "Campos do Template",
        advancedFeatures: "Recursos Avançados",
        fonts: "Fontes Customizadas",
        fontsDesc: "Suporte a fontes específicas por empresa",
        barcodes: "Códigos de Barras",
        barcodesDesc: "QR Codes e barcodes dinâmicos",
        positioning: "Posicionamento Preciso",
        positioningDesc: "Controle submilimétrico de elementos",
        performance: "Performance",
        performanceDesc: "Geração em buffer sem I/O em disco"
      },
      endpoints: "Endpoints Disponíveis"
    },
    imageConverter: {
      badge: "Full Stack",
      title: "Image",
      titleHighlight: "Converter",
      subtitle: "Aplicação web full stack para conversão de imagens entre formatos (PNG, JPEG, WEBP, AVIF) com processamento server-side de alta performance",
      description: "Desenvolvi uma aplicação completa com frontend moderno em Next.js 15 e backend robusto em Node.js + TypeScript, aplicando padrões de projeto e princípios SOLID em um sistema de processamento de imagens de alta qualidade.",
      frontendTitle: "Frontend",
      backendTitle: "Backend",
      frontendFeatures: [
        "Next.js 15 com App Router e Turbopack",
        "React 19 com componentização",
        "Tailwind CSS para estilização",
        "React Dropzone para upload drag & drop",
        "TypeScript em todo o projeto"
      ],
      backendFeatures: [
        "Fastify — rotas, hooks e plugins",
        "Sharp para processamento de imagens",
        "Padrão Adapter (IImageConverter)",
        "Padrão Factory (criação de conversores)",
        "Injeção de dependência (tsyringe)",
        "Validação com Zod",
        "Princípios SOLID aplicados"
      ],
      architecture: "Arquitetura",
      architectureDesc: "O backend utiliza os padrões Adapter e Factory para desacoplar a lógica de conversão, permitindo adicionar novos formatos sem modificar o código existente (Open/Closed Principle). A injeção de dependência com tsyringe garante baixo acoplamento e alta testabilidade.",
      flow: "Fluxo de Conversão",
      flowSteps: ["Upload da imagem", "Validação (Zod)", "Factory seleciona conversor", "Sharp processa", "Download do resultado"],
      formats: "Formatos Suportados"
    },
    sixStrings: {
      badge: "Em Desenvolvimento",
      title: "Projeto",
      titleHighlight: "6 Cordas",
      subtitle: "Aplicação para organização de estudos de violão, gerenciamento de repertório e tablaturas, com acompanhamento de evolução",
      problem: "O Problema",
      problemDesc: "Organizar os estudos de violão, controlar repertório de músicas, gerenciar tablaturas e acompanhar a evolução ao longo do tempo é um desafio real para músicos.",
      solution: "A Solução",
      solutionDesc: "Uma aplicação web full stack onde o usuário pode cadastrar músicas que está estudando, organizar tablaturas, categorizar por artista e gênero musical, e acompanhar seu progresso de aprendizado.",
      featuresTitle: "Funcionalidades",
      features: [
        "Cadastro de músicas em estudo com nome e artista",
        "Gerenciamento de repertório",
        "Controle e organização de tablaturas",
        "Categorização por artista e gênero musical",
        "Sistema de autenticação de usuários",
        "Acompanhamento de evolução e progresso"
      ],
      techTitle: "Tecnologias",
      frontend: "Frontend",
      backend: "Backend",
      database: "Banco de Dados",
      others: "Outros",
      architecture: "Decisões de Arquitetura",
      architectureDesc: "Autenticação segura com JWT e bcrypt. Modelagem relacional no PostgreSQL para relacionamentos entre usuários, músicas, artistas e tablaturas. API RESTful organizada em camadas com TypeScript em todo o projeto.",
      security: "Segurança",
      securityDesc: "JWT + bcrypt para hash de senhas",
      dataModel: "Modelagem",
      dataModelDesc: "PostgreSQL relacional: usuários, músicas, artistas, tablaturas",
      api: "API RESTful",
      apiDesc: "Organizada em camadas com TypeScript"
    },
    footer: {
      description: "Desenvolvedor Full Stack apaixonado por criar soluções robustas e escaláveis com código limpo e boas práticas.",
      navigation: "Navegação",
      contact: "Contato",
      rights: "Feito com",
      codeText: "e muito código."
    }
  },
  en: {
    header: {
      about: "About",
      video: "Video",
      projects: "Projects",
      technologies: "Technologies",
      architecture: "Architecture",
      cases: "Case Studies",
      contact: "Contact"
    },
    hero: {
      badge: "+1 year of professional experience",
      greeting: "Hello, I'm",
      name: "Lucas Silva",
      role: "Full Stack Developer",
      description1: "I'm a developer graduated from",
      description1Bold: "Kenzie Academy Brasil",
      description1Rest: ", I've been studying for over 3 years and have more than a year of professional experience developing robust and scalable solutions.",
      description2: "Throughout my journey, I've developed expertise in architectures such as",
      description2Rest: ", always seeking clean and maintainable code.",
      description3: "I work with modern technologies in frontend and backend, using TypeScript and Python with frameworks like React, Django and Node — always focused on delivering value through quality software.",
      viewProjects: "View Projects",
      watchVideo: "Watch Introduction",
      stats: {
        experience: "Year of XP",
        technologies: "Technologies",
        projects: "Projects"
      }
    },
    video: {
      tag: "Introduction",
      title: "Get to know me in",
      titleHighlight: "2 minutes",
      subtitle: "A short English introduction about my journey, my technical skills and what drives me as a developer.",
      note: "Video hosted on YouTube (unlisted)"
    },
    technologies: {
      tag: "Tech Stack",
      title: "Technologies I",
      titleHighlight: "Master",
      subtitle: "Tools and frameworks I use daily to build robust and scalable applications",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools & Libraries",
      learning: "Always learning new technologies and best practices"
    },
    projects: {
      tag: "Portfolio",
      title: "My",
      titleHighlight: "Projects",
      subtitle: "Real projects that demonstrate my ability to deliver complete solutions, from frontend to backend",
      featured: "Featured",
      viewCode: "View code",
      demo: "Demo",
      moreOnGithub: "See more on GitHub",
      highlights: "Highlights",
      architectureLabel: "Architecture",
      items: {
        gostacker: {
          title: "goStacker",
          subtitle: "Queue Management SaaS",
          description: "Complete platform for ticket and appointment management with real-time panels, multiple user levels and payment integration.",
          highlights: [
            "TV and admin panels with real-time updates",
            "Checkout with Asaas integration",
            "Customizable themes per client",
            "Access levels: visitor, attendant and admin"
          ],
          architecture: "Simplified MVC on backend; componentization on frontend"
        },
        devstore: {
          title: "Devstore",
          subtitle: "Full Stack E-commerce",
          description: "Complete online store with persistent cart, checkout, email delivery and secure authentication with rotating tokens.",
          highlights: [
            "Persistent shopping cart",
            "Email delivery with Nodemailer",
            "Refresh tokens with httpOnly cookies",
            "XSS and CSRF protection"
          ],
          architecture: "Simplified MVC with clear layer separation"
        },
        portfolio: {
          title: "Personal Portfolio",
          subtitle: "Design & Frontend",
          description: "This website — a project focused on modern UI/UX, smooth animations and professional presentation of my work.",
          highlights: [
            "Smooth scroll animations",
            "Black & white theme with dark mode",
            "Smooth section scrolling",
            "Focus on UI/UX and micro-interactions"
          ],
          architecture: "Componentization with React and TailwindCSS"
        },
        fileManager: {
          title: "FileManager API",
          subtitle: "Enterprise Backend",
          description: "Complete backend system for multi-company file management, CSV/XML/ZPL processing and dynamic PDF generation with custom templates.",
          highlights: [
            "Clean Architecture + SOLID",
            "25+ PDF generators",
            "Multi-company with Factory pattern",
            "Sub-millimeter label precision"
          ],
          architecture: "Clean Architecture, SOLID, TDD"
        },
        movieDb: {
          title: "Movie Database",
          subtitle: "REST API",
          description: "API for user, movie and purchase management, with authentication and permission system for different user types.",
          highlights: [
            "JWT authentication",
            "Permission system",
            "Complex relationships"
          ],
          architecture: "REST API with Django"
        },
        userCourses: {
          title: "Users & Courses",
          subtitle: "REST API",
          description: "User and course control API with enrollment system, access control and administrator permissions.",
          highlights: [
            "Enrollment system",
            "Administrator permissions",
            "Raw SQL with TypeScript"
          ],
          architecture: "REST API with Node + SQL"
        }
      }
    },
    architecture: {
      tag: "Software Architecture",
      title: "Patterns and",
      titleHighlight: "Best Practices",
      subtitle: "Knowledge in architectures and methodologies that I apply daily to create clean, testable and scalable code",
      mainConcepts: "Main concepts:",
      cleanCode: "Clean & Maintainable Code",
      cleanCodeDesc: "Applying these concepts daily in real projects",
      solid: {
        name: "SOLID",
        fullName: "SOLID Principles",
        description: "Five fundamental principles of object-oriented programming that make software more understandable, flexible and maintainable.",
        principles: ["Single Responsibility", "Open/Closed", "Liskov Substitution", "Interface Segregation", "Dependency Inversion"]
      },
      cleanArch: {
        name: "Clean Architecture",
        fullName: "Clean Architecture",
        description: "Separation of responsibilities in layers, with the domain at the center and dependencies pointing inward.",
        principles: ["Entities (Business Rules)", "Use Cases", "Controllers & Gateways", "Frameworks & Drivers"]
      },
      ddd: {
        name: "DDD",
        fullName: "Domain-Driven Design",
        description: "Development approach focused on the business domain, with ubiquitous language and strategic modeling.",
        principles: ["Bounded Contexts", "Aggregates & Entities", "Value Objects", "Domain Events"]
      },
      tdd: {
        name: "TDD",
        fullName: "Test-Driven Development",
        description: "Test-driven development: write tests first, implement code later, refactor.",
        principles: ["Red (Test fails)", "Green (Code passes)", "Refactor (Improve)", "Repeat"]
      }
    },
    cases: {
      tag: "Technical Case Studies",
      title: "Projects in",
      titleHighlight: "Depth",
      subtitle: "A technical deep dive into the systems I've built — architecture decisions, challenges and real solutions"
    },
    fileManager: {
      badge: "Enterprise Backend",
      title: "FileManager",
      titleHighlight: "API",
      subtitle: "Complete backend system for file management and PDF generation using Clean Architecture and SOLID patterns",
      tabs: {
        overview: "Overview",
        upload: "Upload API",
        pdf: "PDF Generator"
      },
      overview: {
        title: "File Management System",
        description: "A robust and scalable API for processing files from multiple companies, with support for different formats (CSV, XML, ZPL) and dynamic PDF generation with custom templates.",
        companies: "Companies",
        companiesLabel: "Supported",
        generators: "Generators",
        generatorsLabel: "for PDF",
        patterns: "Patterns",
        patternsLabel: "Design",
        fields: "Fields",
        fieldsLabel: "per Template",
        designPatterns: "Applied Design Patterns",
        cleanArchitecture: "Clean Architecture",
        cleanArchitectureDesc: "Well-defined layers with separation of responsibilities",
        layer1: "Entities",
        layer1Desc: "Business rules",
        layer2: "Use Cases",
        layer2Desc: "Application logic",
        layer3: "Controllers",
        layer3Desc: "Interface adapters",
        layer4: "Frameworks",
        layer4Desc: "Fastify, Prisma",
        solidPrinciples: "SOLID Principles",
        solidPrinciplesDesc: "Applied throughout the codebase",
        srp: "Single Responsibility",
        srpDesc: "Each class has a single responsibility",
        ocp: "Open/Closed",
        ocpDesc: "Open for extension, closed for modification",
        lsp: "Liskov Substitution",
        lspDesc: "Subtypes replaceable by their base types",
        isp: "Interface Segregation",
        ispDesc: "Specific and cohesive interfaces",
        dip: "Dependency Inversion",
        dipDesc: "Depend on abstractions, not implementations",
        tdd: "Test-Driven Development",
        tddDesc: "Unit and integration tests to ensure quality"
      },
      upload: {
        title: "File Upload API",
        description: "Robust file processing system with support for multiple formats and companies, using Factory and Strategy patterns.",
        features: [
          "Factory Pattern for Multi-Company",
          "Polymorphic Converter System",
          "Intelligent Type Detection",
          "Data Merge and Enrichment",
          "Business Rules Validation",
          "Transaction Safety with Prisma"
        ],
        flow: "Processing Flow",
        step1: "Upload",
        step2: "Validation",
        step3: "Conversion",
        step4: "Persistence",
        formats: "Supported Formats",
        companies: "Integrated Companies",
        tech: "Technologies",
        viewRepository: "View Repository"
      },
      pdf: {
        title: "PDF Generator",
        description: "Advanced PDF generation system with dynamic templates, support for multiple layouts and sub-millimeter precision.",
        modes: {
          single: { mode: "Single", desc: "One label" },
          batch: { mode: "Batch", desc: "Multiple labels" },
          custom: { mode: "Custom", desc: "Custom layout" }
        },
        precision: "Precision",
        features: [
          "25+ different PDF generators",
          "Templates with 50+ fields each",
          "Custom fonts per company",
          "Dynamic QR Codes and barcodes",
          "Sub-millimeter precision",
          "Direct buffer without disk writing"
        ],
        templateFields: "Template Fields",
        advancedFeatures: "Advanced Features",
        fonts: "Custom Fonts",
        fontsDesc: "Support for company-specific fonts",
        barcodes: "Barcodes",
        barcodesDesc: "Dynamic QR Codes and barcodes",
        positioning: "Precise Positioning",
        positioningDesc: "Sub-millimeter element control",
        performance: "Performance",
        performanceDesc: "Buffer generation without disk I/O"
      },
      endpoints: "Available Endpoints"
    },
    imageConverter: {
      badge: "Full Stack",
      title: "Image",
      titleHighlight: "Converter",
      subtitle: "Full stack web application for converting images between formats (PNG, JPEG, WEBP, AVIF) with high-performance server-side processing",
      description: "I built a complete application with a modern Next.js 15 frontend and a robust Node.js + TypeScript backend, applying design patterns and SOLID principles in a high-quality image processing system.",
      frontendTitle: "Frontend",
      backendTitle: "Backend",
      frontendFeatures: [
        "Next.js 15 with App Router and Turbopack",
        "React 19 with componentization",
        "Tailwind CSS for styling",
        "React Dropzone for drag & drop upload",
        "TypeScript across the project"
      ],
      backendFeatures: [
        "Fastify — routes, hooks and plugins",
        "Sharp for image processing",
        "Adapter pattern (IImageConverter)",
        "Factory pattern (converter creation)",
        "Dependency injection (tsyringe)",
        "Validation with Zod",
        "SOLID principles applied"
      ],
      architecture: "Architecture",
      architectureDesc: "The backend uses the Adapter and Factory patterns to decouple conversion logic, allowing new formats to be added without modifying existing code (Open/Closed Principle). Dependency injection with tsyringe ensures low coupling and high testability.",
      flow: "Conversion Flow",
      flowSteps: ["Image upload", "Validation (Zod)", "Factory selects converter", "Sharp processes", "Download result"],
      formats: "Supported Formats"
    },
    sixStrings: {
      badge: "In Development",
      title: "Projeto",
      titleHighlight: "6 Cordas",
      subtitle: "Application for organizing guitar studies, managing repertoire and tabs, with progress tracking",
      problem: "The Problem",
      problemDesc: "Organizing guitar studies, managing a song repertoire, handling tabs and tracking progress over time is a real challenge for musicians.",
      solution: "The Solution",
      solutionDesc: "A full stack web application where users can register songs they are studying, organize tabs, categorize by artist and music genre, and track their learning progress.",
      featuresTitle: "Features",
      features: [
        "Register songs being studied with name and artist",
        "Repertoire management",
        "Tab control and organization",
        "Categorization by artist and music genre",
        "User authentication system",
        "Progress and evolution tracking"
      ],
      techTitle: "Technologies",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      others: "Others",
      architecture: "Architecture Decisions",
      architectureDesc: "Secure authentication with JWT and bcrypt. Relational modeling in PostgreSQL for relationships between users, songs, artists and tabs. RESTful API organized in layers with TypeScript across the project.",
      security: "Security",
      securityDesc: "JWT + bcrypt for password hashing",
      dataModel: "Data Modeling",
      dataModelDesc: "Relational PostgreSQL: users, songs, artists, tabs",
      api: "RESTful API",
      apiDesc: "Layered organization with TypeScript"
    },
    footer: {
      description: "Full Stack Developer passionate about creating robust and scalable solutions with clean code and best practices.",
      navigation: "Navigation",
      contact: "Contact",
      rights: "Made with",
      codeText: "and lots of code."
    }
  }
};

export function useTranslation(language) {
  return translations[language] || translations.pt;
}
