export const translations = {
  pt: {
    header: {
      about: "Sobre",
      technologies: "Tecnologias",
      architecture: "Arquitetura",
      projects: "Projetos",
      fileManager: "FileManager",
      contact: "Contato"
    },
    hero: {
      badge: "+1 ano de experiência profissional",
      greeting: "Olá, eu sou",
      name: "Lucas Silva",
      role: "Desenvolvedor Full Stack",
      description1: "Sou desenvolvedor formado pela",
      description1Bold: "Kenzie Academy Brasil",
      description1Rest: ", estudo a mais de 3 anos e tenho mais de um ano de experiência trabalhando em uma empresa desenvolvendo soluções robustas e escaláveis.",
      description2: "Ao longo da minha trajetória, desenvolvi expertise em arquiteturas como",
      description2Rest: ", sempre buscando código limpo e manutenível.",
      description3: "Trabalho com tecnologias modernas no frontend e backend, utilizando TS e Python e com frameworks como React, Django e Node, sempre focado em entregar valor através de software de qualidade.",
      viewProjects: "Ver Projetos",
      viewTechnologies: "Tecnologias",
      stats: {
        experience: "Ano de XP",
        technologies: "Tecnologias",
        projects: "Projetos"
      }
    },
    technologies: {
      badge: "Stack Tecnológico",
      title: "Tecnologias que",
      titleHighlight: "Domino",
      subtitle: "Ferramentas e frameworks que utilizo diariamente para construir aplicações robustas e escaláveis",
      frontend: "Frontend",
      backend: "Backend",
      database: "Banco de Dados",
      tools: "Ferramentas & Bibliotecas",
      learning: "Sempre aprendendo novas tecnologias e boas práticas"
    },
    architecture: {
      badge: "Arquitetura de Software",
      title: "Padrões e",
      titleHighlight: "Boas Práticas",
      subtitle: "Conhecimentos em arquiteturas e metodologias que aplico diariamente para criar código limpo, testável e escalável",
      mainConcepts: "Conceitos principais:",
      cleanCode: "Código Limpo & Manutenível",
      cleanCodeDesc: "Aplicando esses conceitos diariamente em projetos reais",
      viewFileManager: "Ver Projeto FileManager",
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
    projects: {
      badge: "Portfólio",
      title: "Meus",
      titleHighlight: "Projetos",
      subtitle: "Uma seleção dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e arquiteturas",
      featured: "Destaque",
      viewDetails: "Ver detalhes",
      viewCode: "Ver código",
      demo: "Demo",
      moreOnGithub: "Ver mais no GitHub",
      fileManager: {
        title: "FileManager API",
        description: "Sistema backend completo para gerenciamento de arquivos multi-empresa, processamento de CSV/XML/ZPL e geração dinâmica de PDFs com templates customizados. Utiliza Clean Architecture, SOLID e padrões de design avançados."
      },
      movieDb: {
        title: "Database de Filmes",
        description: "API para gerenciamento de usuários, filmes e compras, com autenticação e sistema de permissões para diferentes tipos de usuário."
      },
      userCourses: {
        title: "Banco de Usuários e Cursos",
        description: "API de controle de usuários e cursos com sistema de matrículas, controle de acessos e permissões de administrador utilizando TypeScript e SQL."
      }
    },
    fileManager: {
      badge: "Projeto em Destaque",
      title: "FileManager",
      titleHighlight: "API",
      subtitle: "Sistema backend completo para gerenciamento de arquivos e geração de PDFs utilizando Clean Architecture e padrões SOLID",
      tabs: {
        overview: "Visão Geral",
        upload: "Upload API",
        pdf: "PDF Generator",
        future: "Em Construção"
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
        designPatterns: "Padrões de Design Aplicados"
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
        ]
      },
      pdf: {
        title: "Gerador de PDFs",
        description: "Sistema avançado de geração de PDFs com templates dinâmicos, suporte a múltiplos layouts e precisão submilimétrica.",
        modes: {
          single: { mode: "Single", desc: "Uma etiqueta" },
          batch: { mode: "Batch", desc: "Múltiplas etiquetas" },
          custom: { mode: "Custom", desc: "Layout personalizado" }
        },
        features: [
          "25+ geradores de PDF diferentes",
          "Templates com 50+ campos cada",
          "Fontes customizadas por empresa",
          "QR Codes e barcodes dinâmicos",
          "Precisão submilimétrica",
          "Buffer direto sem gravação em disco"
        ]
      },
      endpoints: "Endpoints Disponíveis"
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
      technologies: "Technologies",
      architecture: "Architecture",
      projects: "Projects",
      fileManager: "FileManager",
      contact: "Contact"
    },
    hero: {
      badge: "+1 year of professional experience",
      greeting: "Hello, I'm",
      name: "Lucas Silva",
      role: "Full Stack Developer",
      description1: "I'm a developer graduated from",
      description1Bold: "Kenzie Academy Brasil",
      description1Rest: ", I've been studying for over 3 years and have more than a year of experience working at a company developing robust and scalable solutions.",
      description2: "Throughout my journey, I've developed expertise in architectures such as",
      description2Rest: ", always seeking clean and maintainable code.",
      description3: "I work with modern technologies in frontend and backend, using TS and Python and frameworks like React, Django and Node, always focused on delivering value through quality software.",
      viewProjects: "View Projects",
      viewTechnologies: "Technologies",
      stats: {
        experience: "Year of XP",
        technologies: "Technologies",
        projects: "Projects"
      }
    },
    technologies: {
      badge: "Tech Stack",
      title: "Technologies I",
      titleHighlight: "Master",
      subtitle: "Tools and frameworks I use daily to build robust and scalable applications",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools & Libraries",
      learning: "Always learning new technologies and best practices"
    },
    architecture: {
      badge: "Software Architecture",
      title: "Patterns and",
      titleHighlight: "Best Practices",
      subtitle: "Knowledge in architectures and methodologies that I apply daily to create clean, testable and scalable code",
      mainConcepts: "Main concepts:",
      cleanCode: "Clean & Maintainable Code",
      cleanCodeDesc: "Applying these concepts daily in real projects",
      viewFileManager: "View FileManager Project",
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
    projects: {
      badge: "Portfolio",
      title: "My",
      titleHighlight: "Projects",
      subtitle: "A selection of projects I've developed, demonstrating my skills in different technologies and architectures",
      featured: "Featured",
      viewDetails: "View details",
      viewCode: "View code",
      demo: "Demo",
      moreOnGithub: "See more on GitHub",
      fileManager: {
        title: "FileManager API",
        description: "Complete backend system for multi-company file management, CSV/XML/ZPL processing and dynamic PDF generation with custom templates. Uses Clean Architecture, SOLID and advanced design patterns."
      },
      movieDb: {
        title: "Movie Database",
        description: "API for user, movie and purchase management, with authentication and permission system for different user types."
      },
      userCourses: {
        title: "Users and Courses Database",
        description: "User and course control API with enrollment system, access control and administrator permissions using TypeScript and SQL."
      }
    },
    fileManager: {
      badge: "Featured Project",
      title: "FileManager",
      titleHighlight: "API",
      subtitle: "Complete backend system for file management and PDF generation using Clean Architecture and SOLID patterns",
      tabs: {
        overview: "Overview",
        upload: "Upload API",
        pdf: "PDF Generator",
        future: "Coming Soon"
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
        designPatterns: "Applied Design Patterns"
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
        ]
      },
      pdf: {
        title: "PDF Generator",
        description: "Advanced PDF generation system with dynamic templates, support for multiple layouts and sub-millimeter precision.",
        modes: {
          single: { mode: "Single", desc: "One label" },
          batch: { mode: "Batch", desc: "Multiple labels" },
          custom: { mode: "Custom", desc: "Custom layout" }
        },
        features: [
          "25+ different PDF generators",
          "Templates with 50+ fields each",
          "Custom fonts per company",
          "Dynamic QR Codes and barcodes",
          "Sub-millimeter precision",
          "Direct buffer without disk writing"
        ]
      },
      endpoints: "Available Endpoints"
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
