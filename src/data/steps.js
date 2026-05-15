export const steps = [
  {
    id: 1,
    short: "Code",
    title: "Initialize Project",
    description: "Create repo and setup Git version control.",
    details: "This is where the project starts. Git is initialized and connected to GitHub.",
    commands: [
      "git init",
      "git add .",
      "git commit -m 'init'",
      "git remote add origin <repo>",
      "git push -u origin main"
    ],
    logs: [
      "Initializing git repository...",
      "Connecting to GitHub...",
      "Push successful"
    ]
  },
  {
    id: 2,
    short: "GitHub",
    title: "CI Setup",
    description: "GitHub Actions automates builds.",
    details: "CI runs on every push to ensure code quality.",
    commands: ["Create .github/workflows/ci.yml"],
    logs: ["Runner started...", "Dependencies installed...", "Tests passed"]
  },
  {
    id: 3,
    short: "Build",
    title: "Dockerize App",
    description: "Create Docker image for consistent environments.",
    details: "Docker ensures app runs the same everywhere.",
    commands: ["docker build -t app ."],
    logs: ["Building image...", "Image created"]
  },
  {
    id: 4,
    short: "Deploy",
    title: "Push to Registry",
    description: "Upload Docker image to Docker Hub.",
    details: "Image is stored in registry for deployment.",
    commands: ["docker push user/app"],
    logs: ["Authenticating...", "Upload complete"]
  }
];