export const pipelineSteps = [
  {
    id: 1,
    name: "Initialize Repo",
    layer: "Git Layer",
    logs: [
      "Initializing git repository...",
      "Adding remote origin...",
      "Pushing to GitHub..."
    ]
  },
  {
    id: 2,
    name: "Install Dependencies",
    layer: "Build Layer",
    logs: [
      "Installing npm packages...",
      "Resolving dependencies...",
      "Dependencies installed successfully"
    ]
  },
  {
    id: 3,
    name: "Run Tests",
    layer: "CI Layer",
    logs: [
      "Running unit tests...",
      "All tests passed ✅"
    ]
  },
  {
    id: 4,
    name: "Docker Build",
    layer: "Container Layer",
    logs: [
      "Building Docker image...",
      "Tagging image...",
      "Image built successfully"
    ]
  },
  {
    id: 5,
    name: "Push Image",
    layer: "Registry Layer",
    logs: [
      "Authenticating Docker Hub...",
      "Pushing image...",
      "Upload complete"
    ]
  },
  {
    id: 6,
    name: "Deploy",
    layer: "Deploy Layer",
    logs: [
      "Connecting to server...",
      "Pulling image...",
      "Deployment successful 🚀"
    ]
  }
];