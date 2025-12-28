'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [openSections, setOpenSections] = useState<number[]>([0]);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const sections = [
    {
      title: "PM2 Production Process Manager",
      content: (
        <div className="bg-black text-white p-4 font-mono text-sm">
          <div className="text-white mb-2">$ npm install -g pm2</div>
          <div className="text-blue-400 mb-2">## PM2 Installation & Setup</div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Basic PM2 Commands</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">pm2 start app.js</span>
              <span className="text-gray-400 text-xs">## Start application with PM2</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">pm2 start app.js --name "my-app"</span>
              <span className="text-gray-400 text-xs">## Start with custom name</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">pm2 restart app.js</span>
              <span className="text-gray-400 text-xs">## Restart application</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">pm2 stop app.js</span>
              <span className="text-gray-400 text-xs">## Stop application</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">pm2 delete app.js</span>
              <span className="text-gray-400 text-xs">## Remove from PM2</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">pm2 list</span>
              <span className="text-gray-400 text-xs">## Show all processes</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">pm2 logs</span>
              <span className="text-gray-400 text-xs">## Show logs</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">pm2 monit</span>
              <span className="text-gray-400 text-xs">## Monitor processes</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># PM2 Ecosystem File (ecosystem.config.js)</div>
            <div>{'{'}</div>
            <div className="ml-4">apps: [</div>
            <div className="ml-8">{'{'}</div>
            <div className="ml-12">name: "my-app",</div>
            <div className="ml-12">script: "app.js",</div>
            <div className="ml-12">instances: "max",</div>            
            <div className="ml-12">autorestart: true,</div>
            <div className="ml-12">watch: false,</div>
            <div className="ml-12">env: {'{'}</div>
            <div className="ml-16">NODE_ENV: "production"</div>
            <div className="ml-12">{'}'}</div>
            <div className="ml-8">{'}'}</div>
            <div className="ml-4">]</div>
            <div>{'}'}</div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 text-green-400">
            <div>{'>'} PM2 installed successfully ✓</div>
            <div>{'>'} Use: pm2 start ecosystem.config.js</div>
            <div>{'>'} Monitor with: pm2 monit</div>
            <div>{'>'} View logs: pm2 logs my-app</div>
          </div>
        </div>
      )
    },
    {
      title: "Git Clone & Repository Setup",
      content: (
        <div className="bg-black text-white p-4 font-mono text-sm">
          <div className="text-white mb-2">$ git clone https://github.com/username/repo.git</div>
          <div className="text-blue-400 mb-2">## Git Repository Setup Steps</div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Clone Repository</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git clone https://github.com/username/repo.git</span>
              <span className="text-gray-400 text-xs">## Clone repository from GitHub</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">cd repo</span>
              <span className="text-gray-400 text-xs">## Navigate to project directory</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">npm install</span>
              <span className="text-gray-400 text-xs">## Install dependencies</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">cp .env.example .env</span>
              <span className="text-gray-400 text-xs">## Copy environment variables</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">npm run dev</span>
              <span className="text-gray-400 text-xs">## Start development server</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Fork & Clone Workflow</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300"># 1. Fork repository on GitHub</span>
              <span className="text-gray-400 text-xs">## Click fork button on GitHub</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300"># 2. Clone your fork</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git clone https://github.com/YOUR_USERNAME/repo.git</span>
              <span className="text-gray-400 text-xs">## Clone your forked repository</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300"># 3. Add upstream remote</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git remote add upstream https://github.com/ORIGINAL/repo.git</span>
              <span className="text-gray-400 text-xs">## Link to original repository</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300"># 4. Create feature branch</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git checkout -b feature/new-feature</span>
              <span className="text-gray-400 text-xs">## Create new branch for changes</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 text-green-400">
            <div>{'>'} Repository cloned successfully ✓</div>
            <div>{'>'} Dependencies installed ✓</div>
            <div>{'>'} Environment configured ✓</div>
            <div>{'>'} Ready to develop! 🚀</div>
          </div>
        </div>
      )
    },
    {
      title: "Docker Commands Cheat Sheet",
      content: (
        <div className="bg-black text-white p-4 font-mono text-sm">
          <div className="text-white mb-2">$ docker --version</div>
          <div className="text-blue-400 mb-2">## Docker Commands Cheat Sheet</div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Docker Container Management Commands</div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">1 docker ps</span>
              <span className="text-gray-400 text-xs"># List running containers</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">2 docker ps -a</span>
              <span className="text-gray-400 text-xs"># List all containers, including stopped ones</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">3 docker run &lt;image&gt;</span>
              <span className="text-gray-400 text-xs"># Start a new container from an image</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">4 docker run -d &lt;image&gt;</span>
              <span className="text-gray-400 text-xs"># Start a new container in detached mode</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">5 docker run -it &lt;image&gt; /bin/bash</span>
              <span className="text-gray-400 text-xs"># Start a new container with an interactive terminal</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">6 docker exec -it &lt;container&gt; /bin/bash</span>
              <span className="text-gray-400 text-xs"># Run a command in a running container</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">7 docker stop &lt;container&gt;</span>
              <span className="text-gray-400 text-xs"># Stop a running container</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">8 docker start &lt;container&gt;</span>
              <span className="text-gray-400 text-xs"># Start a stopped container</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">9 docker restart &lt;container&gt;</span>
              <span className="text-gray-400 text-xs"># Restart a container</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">10 docker rm &lt;container&gt;</span>
              <span className="text-gray-400 text-xs"># Remove a container</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">11 docker logs &lt;container&gt;</span>
              <span className="text-gray-400 text-xs"># View the logs of a container</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">12 docker inspect &lt;container&gt;</span>
              <span className="text-gray-400 text-xs"># Displays detailed information about a container</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Docker Image Management Commands</div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">1 docker images</span>
              <span className="text-gray-400 text-xs"># List all Docker images</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">2 docker pull &lt;image&gt;</span>
              <span className="text-gray-400 text-xs"># Download an image from Docker Hub</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">3 docker build -t &lt;name&gt; .</span>
              <span className="text-gray-400 text-xs"># Build an image from a Dockerfile</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">4 docker rmi &lt;image&gt;</span>
              <span className="text-gray-400 text-xs"># Remove an image</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">5 docker inspect &lt;image&gt;</span>
              <span className="text-gray-400 text-xs"># Displays detailed information about an image</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">6 docker history &lt;image&gt;</span>
              <span className="text-gray-400 text-xs"># Show the history of an image</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Docker Network and Volume Commands</div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">1 docker network ls</span>
              <span className="text-gray-400 text-xs"># List all networks</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">2 docker network create &lt;name&gt;</span>
              <span className="text-gray-400 text-xs"># Create a new network</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">3 docker volume ls</span>
              <span className="text-gray-400 text-xs"># List all volumes</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">4 docker volume create &lt;name&gt;</span>
              <span className="text-gray-400 text-xs"># Create a new volume</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Miscellaneous Docker Commands</div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">1 docker info</span>
              <span className="text-gray-400 text-xs"># Display system wide information</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">2 docker version</span>
              <span className="text-gray-400 text-xs"># Show Docker version and info</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">3 docker stats</span>
              <span className="text-gray-400 text-xs"># Display container resource usage statistics</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">4 docker login</span>
              <span className="text-gray-400 text-xs"># Log in to Docker Hub</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-purple-300">5 docker logout</span>
              <span className="text-gray-400 text-xs"># Log out from Docker Hub</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 text-green-400">
            <div>{'>'} Docker daemon running ✓</div>
            <div>{'>'} Containers managed successfully ✓</div>
            <div>{'>'} Images built and deployed ✓</div>
            <div>{'>'} Ready for containerization! 🐳</div>
          </div>
        </div>
      )
    },
    {
      title: "Essential Git Commands",
      content: (
        <div className="bg-black text-white p-4 font-mono text-sm">
          <div className="text-white mb-2">$ git status</div>
          <div className="text-blue-400 mb-2">## Git Version Control Commands</div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Basic Git Workflow</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git init</span>
              <span className="text-gray-400 text-xs">## Initialize new repository</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git add .</span>
              <span className="text-gray-400 text-xs">## Stage all changes</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git commit -m "Initial commit"</span>
              <span className="text-gray-400 text-xs">## Commit changes with message</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git push origin main</span>
              <span className="text-gray-400 text-xs">## Push to remote repository</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git pull origin main</span>
              <span className="text-gray-400 text-xs">## Pull latest changes</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Branching & Merging</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git branch feature-branch</span>
              <span className="text-gray-400 text-xs">## Create new branch</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git checkout feature-branch</span>
              <span className="text-gray-400 text-xs">## Switch to branch</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git checkout -b feature-branch</span>
              <span className="text-gray-400 text-xs">## Create and switch to branch</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git merge feature-branch</span>
              <span className="text-gray-400 text-xs">## Merge branch into current</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git branch -d feature-branch</span>
              <span className="text-gray-400 text-xs">## Delete branch</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Advanced Git</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git log --oneline</span>
              <span className="text-gray-400 text-xs">## Show commit history</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git reset --hard HEAD~1</span>
              <span className="text-gray-400 text-xs">## Reset to previous commit</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git stash</span>
              <span className="text-gray-400 text-xs">## Save changes temporarily</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git stash pop</span>
              <span className="text-gray-400 text-xs">## Apply stashed changes</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">git rebase main</span>
              <span className="text-gray-400 text-xs">## Rebase current branch</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 text-green-400">
            <div>{'>'} Git repository initialized ✓</div>
            <div>{'>'} Changes tracked and committed ✓</div>
            <div>{'>'} Branches managed successfully ✓</div>
            <div>{'>'} Ready for collaboration! 📝</div>
          </div>
        </div>
      )
    },
    {
      title: "GitHub Repository Setup",
      content: (
        <div className="bg-black text-white p-4 font-mono text-sm">
          <div className="text-white mb-2">$ gh repo create my-project --public</div>
          <div className="text-blue-400 mb-2">## GitHub CLI & Repository Management</div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># GitHub CLI Setup</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">npm install -g @github/cli</span>
              <span className="text-gray-400 text-xs">## Install GitHub CLI globally</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">gh auth login</span>
              <span className="text-gray-400 text-xs">## Authenticate with GitHub</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">gh repo create my-project --public</span>
              <span className="text-gray-400 text-xs">## Create new public repository</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">gh repo clone username/my-project</span>
              <span className="text-gray-400 text-xs">## Clone repository using CLI</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Repository Configuration</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300"># .gitignore</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">node_modules/</span>
              <span className="text-gray-400 text-xs">## Ignore dependencies</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">.env</span>
              <span className="text-gray-400 text-xs">## Ignore environment variables</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">.DS_Store</span>
              <span className="text-gray-400 text-xs">## Ignore macOS files</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">dist/</span>
              <span className="text-gray-400 text-xs">## Ignore build output</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">build/</span>
              <span className="text-gray-400 text-xs">## Ignore build directory</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># GitHub Actions (.github/workflows/deploy.yml)</div>
            <div className="text-gray-300">name: Deploy</div>
            <div className="text-gray-300">on:</div>
            <div className="text-gray-300">  push:</div>
            <div className="text-gray-300">    branches: [main]</div>
            <div className="text-gray-300">jobs:</div>
            <div className="text-gray-300">  deploy:</div>
            <div className="text-gray-300">    runs-on: ubuntu-latest</div>
            <div className="text-gray-300">    steps:</div>
            <div className="text-gray-300">      - uses: actions/checkout@v3</div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 text-green-400">
            <div>{'>'} GitHub CLI installed ✓</div>
            <div>{'>'} Repository created successfully ✓</div>
            <div>{'>'} CI/CD pipeline configured ✓</div>
            <div>{'>'} Ready for deployment! 🚀</div>
          </div>
        </div>
      )
    },
    {
      title: "Node.js & NPM Commands",
      content: (
        <div className="bg-black text-white p-4 font-mono text-sm">
          <div className="text-white mb-2">$ npm init -y</div>
          <div className="text-blue-400 mb-2">## Node.js Package Management</div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Package Management</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">npm init -y</span>
              <span className="text-gray-400 text-xs">## Initialize package.json with defaults</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">npm install express</span>
              <span className="text-gray-400 text-xs">## Install production dependency</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">npm install -D nodemon</span>
              <span className="text-gray-400 text-xs">## Install development dependency</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">npm uninstall package-name</span>
              <span className="text-gray-400 text-xs">## Remove package</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">npm update</span>
              <span className="text-gray-400 text-xs">## Update all packages</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">npm audit fix</span>
              <span className="text-gray-400 text-xs">## Fix security vulnerabilities</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Scripts (package.json)</div>
            <div className="text-gray-300">{'{'}</div>
            <div className="text-gray-300">"scripts": {'{'}</div>
            <div className="text-gray-300">"start": "node app.js",</div>
            <div className="text-gray-300">"dev": "nodemon app.js",</div>
            <div className="text-gray-300">"build": "webpack",</div>
            <div className="text-gray-300">"test": "jest"</div>
            <div className="text-gray-300">{'}'}</div>
            <div className="text-gray-300">{'}'}</div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 text-green-400">
            <div>{'>'} Node.js project initialized ✓</div>
            <div>{'>'} Dependencies installed ✓</div>
            <div>{'>'} Scripts configured ✓</div>
            <div>{'>'} Ready to code! 💻</div>
          </div>
        </div>
      )
    },
    {
      title: "Linux/Unix Commands",
      content: (
        <div className="bg-black text-white p-4 font-mono text-sm">
          <div className="text-white mb-2">$ ls -la</div>
          <div className="text-blue-400 mb-2">## Essential Terminal Commands</div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># File & Directory Management</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">ls -la</span>
              <span className="text-gray-400 text-xs">## List files with details</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">cd /path/to/directory</span>
              <span className="text-gray-400 text-xs">## Change directory</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">mkdir new-folder</span>
              <span className="text-gray-400 text-xs">## Create directory</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">rm -rf folder-name</span>
              <span className="text-gray-400 text-xs">## Remove directory recursively</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">cp source destination</span>
              <span className="text-gray-400 text-xs">## Copy file/directory</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">mv old-name new-name</span>
              <span className="text-gray-400 text-xs">## Move/rename file</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Process Management</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">ps aux</span>
              <span className="text-gray-400 text-xs">## List all processes</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">kill -9 process-id</span>
              <span className="text-gray-400 text-xs">## Force kill process</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">top</span>
              <span className="text-gray-400 text-xs">## Monitor system processes</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">htop</span>
              <span className="text-gray-400 text-xs">## Interactive process viewer</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">nohup command &</span>
              <span className="text-gray-400 text-xs">## Run command in background</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Network & System</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">netstat -tulpn</span>
              <span className="text-gray-400 text-xs">## Show network connections</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">curl http://localhost:3000</span>
              <span className="text-gray-400 text-xs">## Make HTTP request</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">wget https://example.com/file.zip</span>
              <span className="text-gray-400 text-xs">## Download file from URL</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">ssh user@server.com</span>
              <span className="text-gray-400 text-xs">## Connect to remote server</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">scp file.txt user@server:/path/</span>
              <span className="text-gray-400 text-xs">## Copy file to remote server</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 text-green-400">
            <div>{'>'} Terminal commands working ✓</div>
            <div>{'>'} File system navigated ✓</div>
            <div>{'>'} Processes managed ✓</div>
            <div>{'>'} System administration ready! 🖥️</div>
          </div>
        </div>
      )
    },
    {
      title: "MySQL Server Setup & Management",
      content: (
        <div className="bg-black text-white p-4 font-mono text-sm">
          <div className="text-white mb-2">$ sudo apt install mysql-server</div>
          <div className="text-blue-400 mb-2">## MySQL Installation & Configuration</div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Installation (Ubuntu/Debian)</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo apt update</span>
              <span className="text-gray-400 text-xs">## Update package list</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo apt install mysql-server</span>
              <span className="text-gray-400 text-xs">## Install MySQL server</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo mysql_secure_installation</span>
              <span className="text-gray-400 text-xs">## Run security setup script</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl start mysql</span>
              <span className="text-gray-400 text-xs">## Start MySQL service</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl enable mysql</span>
              <span className="text-gray-400 text-xs">## Enable MySQL on boot</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl status mysql</span>
              <span className="text-gray-400 text-xs">## Check MySQL status</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Installation (CentOS/RHEL)</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo yum install mysql-server</span>
              <span className="text-gray-400 text-xs">## Install MySQL on CentOS/RHEL</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl start mysqld</span>
              <span className="text-gray-400 text-xs">## Start MySQL service</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl enable mysqld</span>
              <span className="text-gray-400 text-xs">## Enable MySQL on boot</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Initial Setup & Configuration</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo mysql -u root -p</span>
              <span className="text-gray-400 text-xs">## Login as root user</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';</span>
              <span className="text-gray-400 text-xs">## Set root password</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">FLUSH PRIVILEGES;</span>
              <span className="text-gray-400 text-xs">## Reload privileges</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">CREATE DATABASE my_database;</span>
              <span className="text-gray-400 text-xs">## Create new database</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';</span>
              <span className="text-gray-400 text-xs">## Create new user</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">GRANT ALL PRIVILEGES ON my_database.* TO 'username'@'localhost';</span>
              <span className="text-gray-400 text-xs">## Grant privileges to user</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">FLUSH PRIVILEGES;</span>
              <span className="text-gray-400 text-xs">## Apply changes</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Service Management</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl start mysql</span>
              <span className="text-gray-400 text-xs">## Start MySQL service</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl stop mysql</span>
              <span className="text-gray-400 text-xs">## Stop MySQL service</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl restart mysql</span>
              <span className="text-gray-400 text-xs">## Restart MySQL service</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl status mysql</span>
              <span className="text-gray-400 text-xs">## Check service status</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl enable mysql</span>
              <span className="text-gray-400 text-xs">## Enable auto-start on boot</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl disable mysql</span>
              <span className="text-gray-400 text-xs">## Disable auto-start on boot</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Database Management</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">mysql -u username -p</span>
              <span className="text-gray-400 text-xs">## Connect to MySQL</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">SHOW DATABASES;</span>
              <span className="text-gray-400 text-xs">## List all databases</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">USE database_name;</span>
              <span className="text-gray-400 text-xs">## Select database</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">SHOW TABLES;</span>
              <span className="text-gray-400 text-xs">## List tables in database</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">CREATE DATABASE db_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;</span>
              <span className="text-gray-400 text-xs">## Create database with UTF-8</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">DROP DATABASE db_name;</span>
              <span className="text-gray-400 text-xs">## Delete database</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">SELECT USER(), CURRENT_USER();</span>
              <span className="text-gray-400 text-xs">## Show current user</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># User Management</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';</span>
              <span className="text-gray-400 text-xs">## Create new user</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">CREATE USER 'newuser'@'%' IDENTIFIED BY 'password';</span>
              <span className="text-gray-400 text-xs">## Create user with remote access</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost';</span>
              <span className="text-gray-400 text-xs">## Grant all privileges</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">GRANT SELECT, INSERT, UPDATE ON db.* TO 'user'@'localhost';</span>
              <span className="text-gray-400 text-xs">## Grant specific privileges</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">REVOKE ALL PRIVILEGES ON *.* FROM 'user'@'localhost';</span>
              <span className="text-gray-400 text-xs">## Revoke privileges</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">DROP USER 'user'@'localhost';</span>
              <span className="text-gray-400 text-xs">## Delete user</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">SHOW GRANTS FOR 'user'@'localhost';</span>
              <span className="text-gray-400 text-xs">## Show user privileges</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Create User for Specific Database</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">CREATE DATABASE my_app_db;</span>
              <span className="text-gray-400 text-xs">## Create the database first</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">CREATE USER 'app_user'@'localhost' IDENTIFIED BY 'secure_password';</span>
              <span className="text-gray-400 text-xs">## Create user for specific database</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">GRANT ALL PRIVILEGES ON my_app_db.* TO 'app_user'@'localhost';</span>
              <span className="text-gray-400 text-xs">## Grant all privileges on specific database</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">FLUSH PRIVILEGES;</span>
              <span className="text-gray-400 text-xs">## Apply privilege changes</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300"># Grant specific privileges only (read/write)</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">GRANT SELECT, INSERT, UPDATE, DELETE ON my_app_db.* TO 'app_user'@'localhost';</span>
              <span className="text-gray-400 text-xs">## Grant read/write privileges only</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300"># Grant read-only access</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">GRANT SELECT ON my_app_db.* TO 'readonly_user'@'localhost';</span>
              <span className="text-gray-400 text-xs">## Grant read-only access to database</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300"># Create user with remote access for specific database</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">CREATE USER 'app_user'@'%' IDENTIFIED BY 'secure_password';</span>
              <span className="text-gray-400 text-xs">## User can connect from any host</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">GRANT ALL PRIVILEGES ON my_app_db.* TO 'app_user'@'%';</span>
              <span className="text-gray-400 text-xs">## Grant privileges for remote access</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300"># Verify user can only access specific database</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">SHOW GRANTS FOR 'app_user'@'localhost';</span>
              <span className="text-gray-400 text-xs">## Check user privileges</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300"># Test connection with specific database user</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">mysql -u app_user -p my_app_db</span>
              <span className="text-gray-400 text-xs">## Connect using database-specific user</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Backup & Restore</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">mysqldump -u username -p database_name {'>'} backup.sql</span>
              <span className="text-gray-400 text-xs">## Backup single database</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">mysqldump -u username -p --all-databases {'>'} all_databases.sql</span>
              <span className="text-gray-400 text-xs">## Backup all databases</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">mysql -u username -p database_name {'<'} backup.sql</span>
              <span className="text-gray-400 text-xs">## Restore database from backup</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">mysqldump -u username -p --single-transaction database_name {'>'} backup.sql</span>
              <span className="text-gray-400 text-xs">## Backup without locking tables</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">mysql -u username -p -e "SELECT * FROM table_name" database_name</span>
              <span className="text-gray-400 text-xs">## Execute query from command line</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Configuration Files</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf</span>
              <span className="text-gray-400 text-xs">## Edit MySQL configuration (Ubuntu/Debian)</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo nano /etc/my.cnf</span>
              <span className="text-gray-400 text-xs">## Edit MySQL configuration (CentOS/RHEL)</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300"># bind-address = 127.0.0.1</span>
              <span className="text-gray-400 text-xs">## Comment to allow remote connections</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl restart mysql</span>
              <span className="text-gray-400 text-xs">## Restart after config changes</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 text-green-400">
            <div>{'>'} MySQL server installed successfully ✓</div>
            <div>{'>'} Database and users configured ✓</div>
            <div>{'>'} Service running and enabled ✓</div>
            <div>{'>'} Ready for database operations! 🗄️</div>
          </div>
        </div>
      )
    },
    {
      title: "Nginx Web Server Setup & Configuration",
      content: (
        <div className="bg-black text-white p-4 font-mono text-sm">
          <div className="text-white mb-2">$ sudo apt install nginx</div>
          <div className="text-blue-400 mb-2">## Nginx Installation & Configuration</div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Installation (Ubuntu/Debian)</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo apt update</span>
              <span className="text-gray-400 text-xs">## Update package list</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo apt install nginx</span>
              <span className="text-gray-400 text-xs">## Install Nginx web server</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl start nginx</span>
              <span className="text-gray-400 text-xs">## Start Nginx service</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl enable nginx</span>
              <span className="text-gray-400 text-xs">## Enable Nginx on boot</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl status nginx</span>
              <span className="text-gray-400 text-xs">## Check Nginx status</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Installation (CentOS/RHEL)</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo yum install nginx</span>
              <span className="text-gray-400 text-xs">## Install Nginx on CentOS/RHEL</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl start nginx</span>
              <span className="text-gray-400 text-xs">## Start Nginx service</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl enable nginx</span>
              <span className="text-gray-400 text-xs">## Enable Nginx on boot</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo firewall-cmd --permanent --add-service=http</span>
              <span className="text-gray-400 text-xs">## Allow HTTP traffic</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo firewall-cmd --permanent --add-service=https</span>
              <span className="text-gray-400 text-xs">## Allow HTTPS traffic</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo firewall-cmd --reload</span>
              <span className="text-gray-400 text-xs">## Reload firewall rules</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Service Management</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl start nginx</span>
              <span className="text-gray-400 text-xs">## Start Nginx service</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl stop nginx</span>
              <span className="text-gray-400 text-xs">## Stop Nginx service</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl restart nginx</span>
              <span className="text-gray-400 text-xs">## Restart Nginx service</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl reload nginx</span>
              <span className="text-gray-400 text-xs">## Reload configuration without downtime</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl status nginx</span>
              <span className="text-gray-400 text-xs">## Check service status</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo nginx -t</span>
              <span className="text-gray-400 text-xs">## Test configuration file syntax</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Configuration File Locations</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo nano /etc/nginx/nginx.conf</span>
              <span className="text-gray-400 text-xs">## Main Nginx configuration file</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo nano /etc/nginx/sites-available/default</span>
              <span className="text-gray-400 text-xs">## Default site configuration</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo nano /etc/nginx/sites-available/your-site</span>
              <span className="text-gray-400 text-xs">## Create new site configuration</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">ls -la /etc/nginx/sites-available/</span>
              <span className="text-gray-400 text-xs">## List available site configurations</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">ls -la /etc/nginx/sites-enabled/</span>
              <span className="text-gray-400 text-xs">## List enabled site configurations</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo ln -s /etc/nginx/sites-available/your-site /etc/nginx/sites-enabled/</span>
              <span className="text-gray-400 text-xs">## Enable site configuration</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo rm /etc/nginx/sites-enabled/your-site</span>
              <span className="text-gray-400 text-xs">## Disable site configuration</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Basic Site Configuration</div>
            <div className="text-gray-300"># /etc/nginx/sites-available/your-site</div>
            <div className="text-gray-300">server {'{'}</div>
            <div className="text-gray-300 ml-4">listen 80;</div>
            <div className="text-gray-300 ml-4">server_name yourdomain.com www.yourdomain.com;</div>
            <div className="text-gray-300 ml-4">root /var/www/your-site;</div>
            <div className="text-gray-300 ml-4">index index.html index.htm index.nginx-debian.html;</div>
            <div className="text-gray-300 ml-4">location / {'{'}</div>
            <div className="text-gray-300 ml-8">try_files $uri $uri/ =404;</div>
            <div className="text-gray-300 ml-4">{'}'}</div>
            <div className="text-gray-300">{'}'}</div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Reverse Proxy Configuration</div>
            <div className="text-gray-300"># Proxy to Node.js/Express app</div>
            <div className="text-gray-300">server {'{'}</div>
            <div className="text-gray-300 ml-4">listen 80;</div>
            <div className="text-gray-300 ml-4">server_name yourdomain.com;</div>
            <div className="text-gray-300 ml-4">location / {'{'}</div>
            <div className="text-gray-300 ml-8">proxy_pass http://localhost:3000;</div>
            <div className="text-gray-300 ml-8">proxy_http_version 1.1;</div>
            <div className="text-gray-300 ml-8">proxy_set_header Upgrade $http_upgrade;</div>
            <div className="text-gray-300 ml-8">proxy_set_header Connection 'upgrade';</div>
            <div className="text-gray-300 ml-8">proxy_set_header Host $host;</div>
            <div className="text-gray-300 ml-8">proxy_cache_bypass $http_upgrade;</div>
            <div className="text-gray-300 ml-4">{'}'}</div>
            <div className="text-gray-300">{'}'}</div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># PHP-FPM Configuration</div>
            <div className="text-gray-300"># For PHP applications</div>
            <div className="text-gray-300">server {'{'}</div>
            <div className="text-gray-300 ml-4">listen 80;</div>
            <div className="text-gray-300 ml-4">server_name yourdomain.com;</div>
            <div className="text-gray-300 ml-4">root /var/www/your-site;</div>
            <div className="text-gray-300 ml-4">index index.php index.html;</div>
            <div className="text-gray-300 ml-4">location ~ \.php$ {'{'}</div>
            <div className="text-gray-300 ml-8">include snippets/fastcgi-php.conf;</div>
            <div className="text-gray-300 ml-8">fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;</div>
            <div className="text-gray-300 ml-4">{'}'}</div>
            <div className="text-gray-300">{'}'}</div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># SSL/HTTPS Setup with Let's Encrypt</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo apt install certbot python3-certbot-nginx</span>
              <span className="text-gray-400 text-xs">## Install Certbot for Nginx</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com</span>
              <span className="text-gray-400 text-xs">## Get SSL certificate</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo certbot renew --dry-run</span>
              <span className="text-gray-400 text-xs">## Test certificate renewal</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo certbot renew</span>
              <span className="text-gray-400 text-xs">## Renew SSL certificate</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300"># SSL configuration auto-added by Certbot</span>
            </div>
            <div className="text-gray-300 ml-4">listen 443 ssl;</div>
            <div className="text-gray-300 ml-4">ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;</div>
            <div className="text-gray-300 ml-4">ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;</div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Log Files</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo tail -f /var/log/nginx/access.log</span>
              <span className="text-gray-400 text-xs">## View access logs in real-time</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo tail -f /var/log/nginx/error.log</span>
              <span className="text-gray-400 text-xs">## View error logs in real-time</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo cat /var/log/nginx/error.log</span>
              <span className="text-gray-400 text-xs">## View error log</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo tail -n 100 /var/log/nginx/access.log</span>
              <span className="text-gray-400 text-xs">## View last 100 access log entries</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Common Configuration Tasks</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo nginx -t</span>
              <span className="text-gray-400 text-xs">## Test configuration before reloading</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo systemctl reload nginx</span>
              <span className="text-gray-400 text-xs">## Reload configuration (no downtime)</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo nginx -s reload</span>
              <span className="text-gray-400 text-xs">## Alternative reload command</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo chown -R www-data:www-data /var/www/your-site</span>
              <span className="text-gray-400 text-xs">## Set correct permissions</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo chmod -R 755 /var/www/your-site</span>
              <span className="text-gray-400 text-xs">## Set directory permissions</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo ufw allow 'Nginx Full'</span>
              <span className="text-gray-400 text-xs">## Allow Nginx through firewall (Ubuntu)</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo ufw allow 'Nginx HTTP'</span>
              <span className="text-gray-400 text-xs">## Allow HTTP only</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">sudo ufw allow 'Nginx HTTPS'</span>
              <span className="text-gray-400 text-xs">## Allow HTTPS only</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 text-green-400">
            <div>{'>'} Nginx installed successfully ✓</div>
            <div>{'>'} Configuration files set up ✓</div>
            <div>{'>'} Service running and enabled ✓</div>
            <div>{'>'} Ready to serve web applications! 🌐</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className={`min-h-screen p-4 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div 
          className={`fixed top-4 right-4 rounded-full p-2 cursor-pointer z-50 ${
            theme === 'dark' 
              ? 'bg-gray-800 border border-gray-600' 
              : 'bg-gray-200 border border-gray-300'
          }`}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </div>
        
        <h1 className={`text-2xl font-bold mb-6 text-center font-mono ${
          theme === 'dark' ? 'text-green-400' : 'text-green-600'
        }`}>
          Developer Terminal Commands
        </h1>
        
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={index} className={`border rounded-lg overflow-hidden ${
              theme === 'dark' 
                ? 'bg-black border-gray-700' 
                : 'bg-white border-gray-300'
            }`}>
              <div 
                className={`p-2 cursor-pointer font-mono text-sm border-b flex items-center justify-between ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' 
                    : 'bg-gray-100 border-gray-300'
                }`}
                onClick={() => toggleSection(index)}
              >
                <div className="flex items-center gap-6">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>{section.title}</span>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform ${openSections.includes(index) ? 'rotate-180' : ''} ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {openSections.includes(index) && (
                <div className={theme === 'dark' ? 'bg-black' : 'bg-white'}>
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
