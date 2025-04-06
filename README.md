# Thanh Nguyen's Portfolio Website

A modern, professional portfolio website showcasing academic research, publications, projects, and professional accomplishments. Built with Docusaurus 3, this site serves as a comprehensive digital presence for academic and research work.

## 📑 Table of Contents
- [Thanh Nguyen's Portfolio Website](#thanh-nguyens-portfolio-website)
  - [📑 Table of Contents](#-table-of-contents)
  - [🚀 Features](#-features)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [📋 Requirements](#-requirements)
  - [🔧 Setup](#-setup)
  - [📝 Development Commands](#-development-commands)
  - [🚢 Deployment](#-deployment)
  - [📂 Project Structure](#-project-structure)
  - [🔄 Content Updates](#-content-updates)
  - [🤝 Contributing](#-contributing)
  - [📄 License](#-license)

## 🚀 Features

- **Research Showcase**: Publications, projects, and presentations in blockchain fraud detection, quantum computing, and more
- **Professional Profile**: Academic background, skills, and accomplishments
- **Responsive Design**: Mobile-friendly and accessible across devices
- **Easy Maintenance**: MDX-based content for simple updates
- **Memory Bank System**: Built-in documentation system to maintain project context

## 🛠️ Tech Stack

- **[Docusaurus 3](https://docusaurus.io/)**: Modern static site generator
- **[React 19](https://reactjs.org/)**: UI framework
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript
- **[MDX](https://mdxjs.com/)**: Markdown with JSX for rich content
- **[FontAwesome](https://fontawesome.com/)**: Icon library

## 📋 Requirements

- Node.js ≥ 18.0
- Yarn package manager
- Git

## 🔧 Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/NNCT2904/nnct2904.github.io.git
   cd nnct2904.github.io
   ```

2. **Install dependencies**
   ```bash
   yarn
   ```

3. **Start local development server**
   ```bash
   yarn start
   ```

4. **View the site**
   Open your browser and navigate to `http://localhost:3000`

## 📝 Development Commands

- `yarn start` - Start development server
- `yarn build` - Build production-ready site
- `yarn serve` - Serve built website locally
- `yarn clear` - Clear Docusaurus cache
- `yarn deploy` - Deploy to GitHub Pages
- `yarn swizzle` - Customize components (use cautiously)
- `yarn write-translations` - Write translation files
- `yarn write-heading-ids` - Write heading IDs

## 🚢 Deployment

The site is configured for GitHub Pages deployment:

**Using SSH:**
```bash
USE_SSH=true yarn deploy
```

**Without SSH:**
```bash
GIT_USER=<Your GitHub username> yarn deploy
```

## 📂 Project Structure

```
.
├── docs/                 # Main content (MDX files)
├── src/
│   ├── components/       # Custom React components
│   ├── css/              # Global styles
│   ├── pages/            # Custom pages
│   └── theme/            # Theme customizations
├── static/               # Static assets (images, documents, etc.)
├── docusaurus.config.ts  # Docusaurus configuration
├── sidebars.ts           # Sidebar configuration
└── package.json          # Dependencies and scripts
```

## 🔄 Content Updates

To update the portfolio:

1. Edit or add MDX files in the `docs/` directory
2. Add new assets to the `static/` directory
3. Run `yarn build` to verify changes
4. Deploy to GitHub Pages

## 🤝 Contributing

This is a personal portfolio site, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request with detailed description

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.
