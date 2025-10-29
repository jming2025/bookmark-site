window.SITES_DATA = {
  categories: [
    {
      id: "chatbots",
      label: "Chatbots",
      icon: "fas fa-robot",
      title: "Chatbots & Language Models",
      priority: 1,
      items: [
        { href: "https://chat.openai.com", title: "ChatGPT", desc: "OpenAI's powerful language model", icon: "https://chat.openai.com/favicon.ico" },
        { href: "https://claude.ai", title: "Claude", desc: "Anthropic's AI assistant", icon: "https://claude.ai/favicon.ico" },
        { href: "https://bard.google.com", title: "Google Bard", desc: "Google's AI chatbot", icon: "https://bard.google.com/favicon.ico" },
        { href: "https://www.perplexity.ai", title: "Perplexity", desc: "AI answer engine with up-to-date web results", icon: "https://www.perplexity.ai/favicon.ico" },
        { href: "https://poe.com", title: "Poe", desc: "Chat with many different models in one place", icon: "https://poe.com/favicon.ico" },
        { href: "https://copilot.microsoft.com", title: "Microsoft Copilot", desc: "Microsoft's AI assistant grounded by Bing search", icon: "https://copilot.microsoft.com/favicon.ico" },
        { href: "https://beta.character.ai", title: "Character.AI", desc: "Create and chat with character-based AI personas", icon: "https://beta.character.ai/favicon.ico" },
        { href: "https://gemini.google.com", title: "Google Gemini", desc: "Google's multimodal AI assistant for chat and tasks", icon: "https://gemini.google.com/favicon.ico" }
      ]
    },
    {
      id: "codegen",
      label: "Code Gen",
      icon: "fas fa-code",
      title: "代码生成 Code Generation",
      priority: 3,
      items: [
        { href: "https://github.com/features/copilot", title: "GitHub Copilot", desc: "AI pair programmer inside your IDE", icon: "https://github.com/favicon.ico" },
        { href: "https://codeium.com", title: "Codeium", desc: "Free AI code completion and chat for developers", icon: "https://codeium.com/favicon.ico" },
        { href: "https://www.tabnine.com", title: "Tabnine", desc: "AI code completions trained on permissive code", icon: "https://www.tabnine.com/favicon.ico" },
        { href: "https://aws.amazon.com/codewhisperer/", title: "CodeWhisperer", desc: "Amazon's AI coding companion for AWS and IDEs", icon: "https://aws.amazon.com/favicon.ico" },
        { href: "https://sourcegraph.com/cody", title: "Cody", desc: "Sourcegraph's AI coding assistant with codebase context", icon: "https://sourcegraph.com/favicon.ico" },
        { href: "https://www.cursor.com", title: "Cursor", desc: "AI-first IDE for writing and refactoring code", icon: "https://www.cursor.com/favicon.ico" },
        { href: "https://replit.com/site/ai", title: "Replit AI", desc: "Code generation, explain, and refactor in the browser", icon: "https://replit.com/favicon.ico" },
        { href: "https://www.jetbrains.com/ai/", title: "JetBrains AI", desc: "AI features integrated across JetBrains IDEs", icon: "https://www.jetbrains.com/favicon.ico" }
      ]
    },
    {
      id: "labeling",
      label: "Labeling",
      icon: "fas fa-tags",
      title: "数据标注 Data Labeling",
      priority: 10,
      items: [
        { href: "https://labelstud.io", title: "Label Studio", desc: "Open-source data labeling for images, text, audio, video", icon: "https://labelstud.io/favicon.ico" },
        { href: "https://scale.com", title: "Scale AI", desc: "Training data platform and services for AI", icon: "https://scale.com/favicon.ico" },
        { href: "https://labelbox.com", title: "Labelbox", desc: "Collaborative data labeling and data engine", icon: "https://labelbox.com/favicon.ico" },
        { href: "https://snorkel.ai", title: "Snorkel", desc: "Programmatic labeling and data-centric AI platform", icon: "https://snorkel.ai/favicon.ico" },
        { href: "https://prodi.gy", title: "Prodigy", desc: "Scriptable, efficient annotation tool by Explosion", icon: "https://prodi.gy/favicon.ico" },
        { href: "https://aws.amazon.com/sagemaker/groundtruth/", title: "Ground Truth", desc: "Amazon SageMaker managed data labeling", icon: "https://aws.amazon.com/favicon.ico" },
        { href: "https://dataloop.ai", title: "Dataloop", desc: "End-to-end data engine for unstructured data", icon: "https://dataloop.ai/favicon.ico" },
        { href: "https://supervise.ly", title: "Supervisely", desc: "Computer vision labeling and MLOps platform", icon: "https://supervise.ly/favicon.ico" }
      ]
    },
    {
      id: "eval-monitoring",
      label: "Eval/Monitoring",
      icon: "fas fa-chart-line",
      title: "监控评测 Monitoring & Evaluation",
      priority: 7,
      items: [
        { href: "https://smith.langchain.com", title: "LangSmith", desc: "Tracing, evaluation, and dataset management for LLM apps", icon: "https://www.langchain.com/favicon.ico" },
        { href: "https://langfuse.com", title: "Langfuse", desc: "Open-source LLM observability, tracing and analytics", icon: "https://langfuse.com/favicon.ico" },
        { href: "https://www.helicone.ai", title: "Helicone", desc: "Logging, analytics, and cost tracking for LLMs", icon: "https://www.helicone.ai/favicon.ico" },
        { href: "https://phoenix.arize.com", title: "Arize Phoenix", desc: "Open-source observability and evaluation for LLMs", icon: "https://phoenix.arize.com/favicon.ico" },
        { href: "https://www.trulens.org", title: "TruLens", desc: "Open-source framework for LLM evaluation and feedback", icon: "https://www.trulens.org/favicon.ico" },
        { href: "https://promptfoo.dev", title: "promptfoo", desc: "Test and evaluate prompts and LLM apps", icon: "https://promptfoo.dev/favicon.ico" },
        { href: "https://github.com/openai/evals", title: "OpenAI Evals", desc: "Framework for evaluating LLMs and systems (GitHub)", icon: "https://github.com/favicon.ico" },
        { href: "https://evidentlyai.com", title: "Evidently AI", desc: "Open-source ML monitoring and evaluation dashboards", icon: "https://evidentlyai.com/favicon.ico" }
      ]
    },
    {
      id: "speech-video",
      label: "Speech/Video",
      icon: "fas fa-microphone",
      title: "Speech & Video AI",
      priority: 6,
      items: [
        { href: "https://elevenlabs.io", title: "ElevenLabs", desc: "High-quality AI text-to-speech and voice cloning", icon: "https://elevenlabs.io/favicon.ico" },
        { href: "https://play.ht", title: "PlayHT", desc: "Realistic TTS and voice avatars via API", icon: "https://play.ht/favicon.ico" },
        { href: "https://pika.art", title: "Pika", desc: "AI video generation from text and images", icon: "https://pika.art/favicon.ico" },
        { href: "https://www.heygen.com", title: "HeyGen", desc: "Create talking avatar videos from scripts", icon: "https://www.heygen.com/favicon.ico" },
        { href: "https://www.descript.com", title: "Descript", desc: "AI-powered audio/video editing and transcription", icon: "https://www.descript.com/favicon.ico" },
        { href: "https://openai.com/research/whisper", title: "Whisper", desc: "Open-source automatic speech recognition by OpenAI", icon: "https://openai.com/favicon.ico" },
        { href: "https://krisp.ai", title: "Krisp", desc: "AI noise cancellation for calls and recordings", icon: "https://krisp.ai/favicon.ico" },
        { href: "https://soundraw.io", title: "SOUNDRAW", desc: "Generate royalty-free music with AI", icon: "https://soundraw.io/favicon.ico" }
      ]
    },
    {
      id: "education",
      label: "Education",
      icon: "fas fa-graduation-cap",
      title: "AI Education & Courses",
      priority: 9,
      items: [
        { href: "https://www.deeplearning.ai", title: "DeepLearning.AI", desc: "AI and ML courses by Andrew Ng and partners", icon: "https://www.deeplearning.ai/favicon.ico" },
        { href: "https://www.fast.ai", title: "fast.ai", desc: "Practical deep learning courses and library", icon: "https://www.fast.ai/favicon.ico" },
        { href: "https://www.kaggle.com/learn", title: "Kaggle Learn", desc: "Short hands-on courses for data science and ML", icon: "https://www.kaggle.com/favicon.ico" },
        { href: "https://web.stanford.edu/class/cs224n/", title: "CS224n", desc: "Stanford NLP with Deep Learning course", icon: "https://web.stanford.edu/favicon.ico" },
        { href: "https://introtodeeplearning.com", title: "MIT 6.S191", desc: "MIT's Introduction to Deep Learning", icon: "https://introtodeeplearning.com/favicon.ico" },
        { href: "https://www.coursera.org/specializations/machine-learning-introduction", title: "Coursera ML Specialization", desc: "Foundational machine learning specialization by Andrew Ng", icon: "https://www.coursera.org/favicon.ico" },
        { href: "https://cookbook.openai.com", title: "OpenAI Cookbook", desc: "Code examples and guides for building with OpenAI", icon: "https://cookbook.openai.com/favicon.ico" }
      ]
    },
    {
      id: "agents",
      label: "Agents",
      icon: "fas fa-diagram-project",
      title: "Agent Frameworks",
      priority: 4,
      items: [
        { href: "https://www.langchain.com", title: "LangChain", desc: "Framework for building production LLM applications", icon: "https://www.langchain.com/favicon.ico" },
        { href: "https://www.llamaindex.ai", title: "LlamaIndex", desc: "Data framework for building retrieval-augmented LLM apps", icon: "https://www.llamaindex.ai/favicon.ico" },
        { href: "https://microsoft.github.io/autogen", title: "AutoGen", desc: "Multi-agent framework for building LLM applications", icon: "https://microsoft.github.io/autogen/favicon.ico" },
        { href: "https://crewai.com", title: "CrewAI", desc: "Open-source framework for multi-agent collaboration", icon: "https://crewai.com/favicon.ico" },
        { href: "https://haystack.deepset.ai", title: "Haystack", desc: "Open-source NLP framework with agents, RAG, and pipelines", icon: "https://haystack.deepset.ai/favicon.ico" },
        { href: "https://langchain-ai.github.io/langgraph", title: "LangGraph", desc: "Stateful multi-agent workflows on top of LangChain", icon: "https://langchain-ai.github.io/langgraph/favicon.ico" },
        { href: "https://www.langflow.org", title: "LangFlow", desc: "Visual builder for LLM apps and agents", icon: "https://www.langflow.org/favicon.ico" },
        { href: "https://superagi.com", title: "SuperAGI", desc: "Open-source autonomous AI agents framework", icon: "https://superagi.com/favicon.ico" }
      ]
    },
    {
      id: "image-generation",
      label: "Images",
      icon: "fas fa-image",
      title: "Image Generation",
      priority: 5,
      items: [
        { href: "https://midjourney.com", title: "Midjourney", desc: "AI art generation", icon: "https://midjourney.com/favicon.ico" },
        { href: "https://stability.ai", title: "Stable Diffusion", desc: "Open-source image generation", icon: "https://stability.ai/favicon.ico" },
        { href: "https://www.dall-e.com", title: "DALL-E", desc: "OpenAI's image generation", icon: "https://www.dall-e.com/favicon.ico" },
        { href: "https://leonardo.ai", title: "Leonardo AI", desc: "Generate high-quality creative assets with custom models", icon: "https://leonardo.ai/favicon.ico" },
        { href: "https://firefly.adobe.com", title: "Adobe Firefly", desc: "Generative images and effects integrated into Adobe tools", icon: "https://firefly.adobe.com/favicon.ico" },
        { href: "https://playgroundai.com", title: "Playground AI", desc: "Create images for free using Stable Diffusion", icon: "https://playgroundai.com/favicon.ico" },
        { href: "https://runwayml.com", title: "Runway", desc: "Generative video and image tools for creators", icon: "https://runwayml.com/favicon.ico" },
        { href: "https://ideogram.ai", title: "Ideogram", desc: "Text-to-image generation with strong text rendering", icon: "https://ideogram.ai/favicon.ico" }
      ]
    },
    {
      id: "research",
      label: "Research",
      icon: "fas fa-flask",
      title: "AI Research & News",
      priority: 8,
      items: [
        { href: "https://arxiv.org", title: "arXiv", desc: "AI research papers", icon: "https://arxiv.org/favicon.ico" },
        { href: "https://www.paperswithcode.com", title: "Papers with Code", desc: "Research papers with code", icon: "https://www.paperswithcode.com/favicon.ico" },
        { href: "https://venturebeat.com/ai", title: "VentureBeat AI", desc: "AI news and analysis", icon: "https://venturebeat.com/favicon.ico" },
        { href: "https://openai.com/research", title: "OpenAI Research", desc: "Research publications, evaluations, and project updates", icon: "https://openai.com/favicon.ico" },
        { href: "https://deepmind.google", title: "Google DeepMind", desc: "Research breakthroughs and blog from DeepMind", icon: "https://deepmind.google/favicon.ico" },
        { href: "https://openreview.net", title: "OpenReview", desc: "Open peer review platform for ML conferences", icon: "https://openreview.net/favicon.ico" },
        { href: "https://thegradient.pub", title: "The Gradient", desc: "Essays and interviews on AI research and practice", icon: "https://thegradient.pub/favicon.ico" },
        { href: "https://www.alignmentforum.org", title: "Alignment Forum", desc: "Discussions on AI safety and alignment research", icon: "https://www.alignmentforum.org/favicon.ico" }
      ]
    },
    {
      id: "tools",
      label: "Tools",
      icon: "fas fa-tools",
      title: "AI Tools & Platforms",
      priority: 2,
      items: [
        { href: "https://huggingface.co", title: "Hugging Face", desc: "AI models and datasets", icon: "https://huggingface.co/favicon.ico" },
        { href: "https://www.tensorflow.org", title: "TensorFlow", desc: "Google's ML framework", icon: "https://www.tensorflow.org/favicon.ico" },
        { href: "https://pytorch.org", title: "PyTorch", desc: "Facebook's ML framework", icon: "https://pytorch.org/favicon.ico" },
        { href: "https://platform.openai.com", title: "OpenAI Platform", desc: "APIs, docs, and models for building with OpenAI", icon: "https://platform.openai.com/favicon.ico" },
        { href: "https://www.anthropic.com", title: "Anthropic", desc: "Claude models and developer resources", icon: "https://www.anthropic.com/favicon.ico" },
        { href: "https://cohere.com", title: "Cohere", desc: "LLM platform and embeddings for enterprise", icon: "https://cohere.com/favicon.ico" },
        { href: "https://replicate.com", title: "Replicate", desc: "Run open-source models in the cloud via API", icon: "https://replicate.com/favicon.ico" },
        { href: "https://www.langchain.com", title: "LangChain", desc: "Framework for building production LLM applications", icon: "https://www.langchain.com/favicon.ico" },
        { href: "https://wandb.ai", title: "Weights & Biases", desc: "Experiment tracking and model management", icon: "https://wandb.ai/favicon.ico" },
        { href: "https://www.kaggle.com", title: "Kaggle", desc: "Datasets, notebooks, and ML competitions", icon: "https://www.kaggle.com/favicon.ico" },
        { href: "https://cloud.google.com/vertex-ai", title: "Vertex AI", desc: "Managed ML platform on Google Cloud", icon: "https://cloud.google.com/favicon.ico" }
      ]
    }
  ]
};
