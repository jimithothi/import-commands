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
      title: "Docker Commands & Setup",
      content: (
        <div className="bg-black text-white p-4 font-mono text-sm">
          <div className="text-white mb-2">$ docker --version</div>
          <div className="text-blue-400 mb-2">## Docker Container Management</div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Container Management</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker run -d -p 3000:3000 --name my-app node-app</span>
              <span className="text-gray-400 text-xs">## Run container in background with port mapping</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker ps</span>
              <span className="text-gray-400 text-xs">## List running containers</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker stop my-app</span>
              <span className="text-gray-400 text-xs">## Stop container</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker start my-app</span>
              <span className="text-gray-400 text-xs">## Start stopped container</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker rm my-app</span>
              <span className="text-gray-400 text-xs">## Remove container</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker logs my-app</span>
              <span className="text-gray-400 text-xs">## View container logs</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker exec -it my-app bash</span>
              <span className="text-gray-400 text-xs">## Access container shell</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Image Management</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker build -t my-app .</span>
              <span className="text-gray-400 text-xs">## Build Docker image from Dockerfile</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker images</span>
              <span className="text-gray-400 text-xs">## List all images</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker rmi my-app</span>
              <span className="text-gray-400 text-xs">## Remove image</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker pull node:18</span>
              <span className="text-gray-400 text-xs">## Download image from registry</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker push username/my-app</span>
              <span className="text-gray-400 text-xs">## Push image to registry</span>
            </div>
          </div>
          
          <div className="bg-gray-900 border border-gray-700 rounded p-3 my-3 font-mono text-sm">
            <div className="text-green-400"># Docker Compose</div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker-compose up -d</span>
              <span className="text-gray-400 text-xs">## Start services in background</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker-compose down</span>
              <span className="text-gray-400 text-xs">## Stop and remove services</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker-compose logs</span>
              <span className="text-gray-400 text-xs">## View service logs</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-gray-300">docker-compose build</span>
              <span className="text-gray-400 text-xs">## Build service images</span>
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
    }
  ];

  return (
    <div className={`min-h-screen p-4 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-5xl mx-auto">
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
