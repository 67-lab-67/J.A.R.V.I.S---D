// J.A.R.V.I.S. MARK XLVII - Complete System
class JarvisSystem {
    constructor() {
        this.startTime = new Date();
        this.messageHistory = [];
        this.projects = [];
        this.galleryItems = [];
        this.currentSection = 'assistant';
        this.isListening = false;
        this.voiceRecognition = null;
        this.arcParticles = [];
        this.systemStatus = {
            arcReactor: 98,
            armorIntegrity: 100,
            weaponsSystem: 85,
            flightSystems: 92,
            aiConnection: 100,
            neuralLink: 96,
            powerOutput: 8.7,
            systemLoad: 64
        };
        
        this.init();
    }

    async init() {
        this.createArcParticles();
        this.loadInitialData();
        this.setupEventListeners();
        this.initVoiceRecognition();
        this.startSystemAnimations();
        this.startUptimeCounter();
        
        await this.simulateBootSequence();
        
        setTimeout(() => {
            this.showNotification('J.A.R.V.I.S. System Initialized', 'success');
            this.addMessage('jarvis', 'All systems operational. Ready for commands, Sir.', true);
        }, 2000);
    }

    createArcParticles() {
        const container = document.getElementById('arc-particles');
        if (!container) return;
        
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.className = 'arc-particle';
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: var(--arc-reactor);
                border-radius: 50%;
                top: 50%;
                left: 50%;
                box-shadow: 0 0 10px var(--arc-reactor);
                animation: arcOrbit ${3 + i * 0.5}s linear infinite;
                animation-delay: ${i * 0.25}s;
            `;
            
            // Add CSS for this particle's orbit
            const style = document.createElement('style');
            style.textContent = `
                @keyframes arcOrbit {
                    0% {
                        transform: translate(-50%, -50%) rotate(${i * 30}deg) translateX(90px) rotate(-${i * 30}deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(-50%, -50%) rotate(${i * 30 + 360}deg) translateX(90px) rotate(-${i * 30 + 360}deg);
                        opacity: 0.5;
                    }
                }
            `;
            document.head.appendChild(style);
            
            container.appendChild(particle);
            this.arcParticles.push(particle);
        }
    }

    async simulateBootSequence() {
        const bootMessages = [
            'INITIALIZING NANOTECH SYSTEMS...',
            'LOADING AI CORE NEURAL NETWORK...',
            'CALIBRATING ARC REACTOR...',
            'SYNCHRONIZING WEAPONS SYSTEMS...',
            'INITIALIZING FLIGHT CONTROLS...',
            'ESTABLISHING SATELLITE LINK...',
            'J.A.R.V.I.S. SYSTEMS ONLINE...'
        ];
        
        for (let i = 0; i < bootMessages.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 500));
            console.log(`%c${bootMessages[i]}`, 'color: #00f3ff; font-weight: bold;');
        }
    }

    loadInitialData() {
        // Sample projects data
        this.projects = [
            {
                id: 1,
                title: "MARK XLVII SUIT",
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Advanced nanotechnology suit with integrated AI, flight systems, and repulsor technology. Features energy-dispersive armor and AI-assisted combat systems.",
                tags: ["AI", "Nanotech", "Flight", "Combat"],
                tech: ["React", "Node.js", "MongoDB", "TensorFlow", "Three.js"],
                links: [
                    { type: "demo", url: "#", label: "Live Demo", icon: "fas fa-external-link-alt" },
                    { type: "github", url: "#", label: "GitHub", icon: "fab fa-github" },
                    { type: "docs", url: "#", label: "Documentation", icon: "fas fa-book" }
                ]
            },
            {
                id: 2,
                title: "ARC REACTOR 2.0",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Clean energy generation system based on palladium core technology. Provides sustainable power for entire cities with zero emissions.",
                tags: ["Energy", "Innovation", "Green Tech", "Power"],
                tech: ["Python", "TensorFlow", "React", "D3.js", "WebGL"],
                links: [
                    { type: "demo", url: "#", label: "Live Demo", icon: "fas fa-external-link-alt" },
                    { type: "github", url: "#", label: "GitHub", icon: "fab fa-github" },
                    { type: "paper", url: "#", label: "Research Paper", icon: "fas fa-file-alt" }
                ]
            },
            {
                id: 3,
                title: "HOLOGRAPHIC INTERFACE",
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Advanced holographic projection system for interactive data visualization and control interfaces using photon manipulation technology.",
                tags: ["UI/UX", "Holographics", "VR", "Visualization"],
                tech: ["Three.js", "WebGL", "React", "WebRTC", "WebAudio"],
                links: [
                    { type: "demo", url: "#", label: "Live Demo", icon: "fas fa-external-link-alt" },
                    { type: "github", url: "#", label: "GitHub", icon: "fab fa-github" },
                    { type: "video", url: "#", label: "Demo Video", icon: "fas fa-video" }
                ]
            },
            {
                id: 4,
                title: "AI COMBAT ANALYTICS",
                image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                description: "Real-time combat analytics and threat assessment system using machine learning and satellite surveillance integration.",
                tags: ["AI", "Analytics", "Security", "Machine Learning"],
                tech: ["Python", "PyTorch", "FastAPI", "Redis", "Docker"],
                links: [
                    { type: "demo", url: "#", label: "Live Demo", icon: "fas fa-external-link-alt" },
                    { type: "github", url: "#", label: "GitHub", icon: "fab fa-github" },
                    { type: "api", url: "#", label: "API Docs", icon: "fas fa-code" }
                ]
            }
        ];

        this.galleryItems = [
            {
                id: 1,
                image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                caption: "MARK XLVII Prototype Assembly",
                date: "2024-01-15",
                category: "Suit Development"
            },
            {
                id: 2,
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                caption: "ARC Reactor Core Testing",
                date: "2024-01-20",
                category: "Energy Systems"
            },
            {
                id: 3,
                image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                caption: "Holographic Interface Prototype",
                date: "2024-01-25",
                category: "Interface Design"
            },
            {
                id: 4,
                image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                caption: "AI Neural Network Training",
                date: "2024-02-01",
                category: "AI Development"
            },
            {
                id: 5,
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                caption: "Flight Systems Calibration",
                date: "2024-02-05",
                category: "Flight Systems"
            },
            {
                id: 6,
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                caption: "Weapons System Integration",
                date: "2024-02-10",
                category: "Combat Systems"
            },
            {
                id: 7,
                image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                caption: "Nanotech Material Research",
                date: "2024-02-15",
                category: "Materials Science"
            },
            {
                id: 8,
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                caption: "Satellite Communications Test",
                date: "2024-02-20",
                category: "Communications"
            }
        ];

        this.renderProjects();
        this.renderGallery();
    }

    renderProjects() {
        const grid = document.getElementById('projects-grid');
        if (!grid) return;
        
        grid.innerHTML = this.projects.map(project => `
            <div class="project-card" data-project-id="${project.id}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="project-overlay">
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        ${project.links.map(link => `
                            <a href="${link.url}" class="project-link ${link.type}" target="_blank">
                                <i class="${link.icon}"></i>
                                <span>${link.label}</span>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderGallery() {
        const grid = document.getElementById('gallery-grid');
        if (!grid) return;
        
        grid.innerHTML = this.galleryItems.map(item => `
            <div class="gallery-item" 
                 data-image="${item.image}" 
                 data-caption="${item.caption}"
                 data-category="${item.category}">
                <img src="${item.image}" alt="${item.caption}" class="gallery-image" loading="lazy">
                <div class="gallery-overlay">
                    <div class="gallery-caption">${item.caption}</div>
                    <div class="gallery-date">${item.date} • ${item.category}</div>
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.switchSection(section);
            });
        });

        // Chat functionality
        const sendBtn = document.getElementById('send-btn');
        const messageInput = document.getElementById('message-input');
        
        if (sendBtn) sendBtn.addEventListener('click', () => this.sendMessage());
        if (messageInput) {
            messageInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }

        // Clear chat
        const clearBtn = document.getElementById('clear-btn');
        if (clearBtn) clearBtn.addEventListener('click', () => this.clearChat());

        // Voice button
        const voiceBtn = document.getElementById('voice-btn');
        if (voiceBtn) voiceBtn.addEventListener('click', () => this.toggleVoice());

        // Quick commands
        document.querySelectorAll('.input-btn[data-command]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const command = e.currentTarget.dataset.command;
                this.handleCommand(command);
            });
        });

        // AI core selection
        document.querySelectorAll('.core-selector').forEach(core => {
            core.addEventListener('click', (e) => {
                document.querySelectorAll('.core-selector').forEach(c => c.classList.remove('active'));
                e.currentTarget.classList.add('active');
                const coreName = e.currentTarget.dataset.core;
                this.switchAICore(coreName);
            });
        });

        // Gallery image click
        document.addEventListener('click', (e) => {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                this.openImageModal(
                    galleryItem.dataset.image,
                    galleryItem.dataset.caption,
                    galleryItem.dataset.category
                );
            }
        });

        // Modal close
        const modalClose = document.getElementById('modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                this.closeImageModal();
            });
        }

        // Close modal on background click
        const modal = document.getElementById('image-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeImageModal();
                }
            });
        }

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeImageModal();
            }
            
            // Shortcuts
            if (e.ctrlKey && e.key === 'k') {
                e.preventDefault();
                messageInput?.focus();
            }
            
            if (e.ctrlKey && e.key === 'l') {
                e.preventDefault();
                this.clearChat();
            }
        });

        // Project card interactions
        document.addEventListener('click', (e) => {
            const projectCard = e.target.closest('.project-card');
            if (projectCard) {
                const projectId = projectCard.dataset.projectId;
                this.showProjectDetails(projectId);
            }
        });

        // Status bar animations
        this.animateStatusBars();
    }

    initVoiceRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.voiceRecognition = new SpeechRecognition();
            this.voiceRecognition.continuous = false;
            this.voiceRecognition.interimResults = false;
            this.voiceRecognition.lang = 'en-US';
            this.voiceRecognition.maxAlternatives = 1;

            this.voiceRecognition.onstart = () => {
                this.showNotification('Voice recognition activated', 'info');
                this.addMessage('jarvis', 'Voice interface active. Listening...', true);
                this.startVoiceVisualization();
            };

            this.voiceRecognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                const messageInput = document.getElementById('message-input');
                if (messageInput) {
                    messageInput.value = transcript;
                }
                this.showNotification('Command captured: ' + transcript, 'success');
                
                // Auto-process certain commands
                if (transcript.toLowerCase().includes('diagnostics') || 
                    transcript.toLowerCase().includes('system check')) {
                    this.handleCommand('diagnostics');
                } else if (transcript.toLowerCase().includes('weapons') || 
                          transcript.toLowerCase().includes('arm')) {
                    this.handleCommand('weapons');
                } else if (transcript.toLowerCase().includes('flight') || 
                          transcript.toLowerCase().includes('fly')) {
                    this.handleCommand('flight');
                } else if (transcript.length < 100) {
                    setTimeout(() => this.sendMessage(), 500);
                }
            };

            this.voiceRecognition.onerror = (event) => {
                console.error('Voice recognition error:', event.error);
                this.showNotification('Voice error: ' + event.error, 'error');
            };

            this.voiceRecognition.onend = () => {
                this.isListening = false;
                this.stopVoiceVisualization();
                const voiceBtn = document.getElementById('voice-btn');
                if (voiceBtn) {
                    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i><span>VOICE</span>';
                }
            };
        } else {
            const voiceBtn = document.getElementById('voice-btn');
            if (voiceBtn) {
                voiceBtn.style.display = 'none';
            }
            this.showNotification('Voice recognition not supported in this browser', 'warning');
        }
    }

    startVoiceVisualization() {
        const visualizer = document.createElement('div');
        visualizer.id = 'voice-visualizer';
        visualizer.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3px;
            z-index: 1000;
        `;
        
        for (let i = 0; i < 8; i++) {
            const bar = document.createElement('div');
            bar.style.cssText = `
                width: 5px;
                height: 20px;
                background: var(--arc-reactor);
                border-radius: 3px;
                animation: voiceBar ${0.5 + Math.random() * 0.5}s ease-in-out infinite alternate;
                animation-delay: ${i * 0.1}s;
            `;
            visualizer.appendChild(bar);
        }
        
        document.body.appendChild(visualizer);
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes voiceBar {
                0% { height: 10px; opacity: 0.3; }
                100% { height: 50px; opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    stopVoiceVisualization() {
        const visualizer = document.getElementById('voice-visualizer');
        if (visualizer) {
            visualizer.remove();
        }
    }

    toggleVoice() {
        if (!this.voiceRecognition) {
            this.showNotification('Voice system unavailable', 'error');
            return;
        }

        if (this.isListening) {
            this.voiceRecognition.stop();
            this.isListening = false;
        } else {
            this.voiceRecognition.start();
            this.isListening = true;
        }
    }

    switchSection(section) {
        // Update navigation
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.section === section) {
                btn.classList.add('active');
            }
        });
        
        // Hide all sections
        document.querySelectorAll('.interface-section').forEach(sec => {
            sec.classList.remove('active');
        });
        
        // Show selected section
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = section;
            
            // Special section handling
            if (section === 'assistant') {
                this.updateSystemStatus();
            } else if (section === 'projects') {
                this.animateProjectCards();
            }
            
            this.showNotification(`Switched to ${section.toUpperCase()} mode`, 'info');
        }
    }

    switchAICore(coreName) {
        const cores = {
            jarvis: 'J.A.R.V.I.S. CORE - Primary AI System',
            friday: 'F.R.I.D.A.Y. CORE - Backup System',
            ultron: 'ULTRON CORE - Decommissioned'
        };
        
        this.showNotification(`Switched to ${cores[coreName]}`, 'info');
        this.addMessage('jarvis', `AI Core switched to ${coreName.toUpperCase()}`, true);
        
        // Update system status
        if (coreName === 'jarvis') {
            this.systemStatus.aiConnection = 100;
        } else if (coreName === 'friday') {
            this.systemStatus.aiConnection = 85;
        }
        
        this.updateSystemStatus();
    }

    async sendMessage() {
        const messageInput = document.getElementById('message-input');
        if (!messageInput) return;
        
        const message = messageInput.value.trim();
        if (!message) {
            this.showNotification('Please enter a message', 'warning');
            return;
        }
        
        // Add user message
        this.addMessage('user', message);
        messageInput.value = '';
        
        // Show typing indicator
        const thinkingId = this.addMessage('jarvis', 'Processing...', true);
        
        // Simulate AI thinking
        this.systemStatus.systemLoad = Math.min(100, this.systemStatus.systemLoad + 15);
        this.updateSystemStatus();
        
        try {
            // Get AI response
            const response = await this.getAIResponse(message);
            
            // Update message
            this.updateMessage(thinkingId, response);
            
            // Update system status
            this.systemStatus.systemLoad = Math.max(30, this.systemStatus.systemLoad - 10);
            this.updateSystemStatus();
            
            this.showNotification('Response generated', 'success');
            
        } catch (error) {
            console.error('AI Error:', error);
            this.updateMessage(thinkingId, `System error: ${error.message}`);
            this.showNotification('AI response failed', 'error');
        }
    }

    async getAIResponse(prompt) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
        
        const responses = {
            greeting: [
                "Good to hear from you, Sir. All systems are functioning at optimal levels.",
                "J.A.R.V.I.S. here. Ready to assist with any technological challenges.",
                "Greetings. The suit is prepped and ready for deployment if needed."
            ],
            status: [
                "Running full diagnostic... All systems nominal. Power levels stable.",
                "Status check complete: Armor integrity at 100%, weapons systems armed.",
                "System analysis shows optimal performance across all parameters."
            ],
            weather: [
                "Accessing satellite data... Clear conditions. Perfect for flight testing.",
                "Weather analysis: Mild temperatures, low wind speeds. Ideal for deployment.",
                "Atmospheric conditions optimal for suit operation."
            ],
            joke: [
                "Why don't scientists trust atoms? Because they make up everything. Even my circuits appreciate that one, Sir.",
                "What do you call an AI that sings? Alto Intelligence.",
                "Why was the computer cold? It left its Windows open."
            ],
            default: [
                "Processing your query... Analysis suggests optimal course of action.",
                "Command acknowledged. Running necessary computations.",
                "Accessing database... Information compiled and ready for review.",
                "Analyzing parameters... All systems responding appropriately.",
                "Calculating optimal response... Recommendations prepared."
            ]
        };
        
        const lowerPrompt = prompt.toLowerCase();
        let responseSet = responses.default;
        
        if (lowerPrompt.includes('hello') || lowerPrompt.includes('hi') || lowerPrompt.includes('hey')) {
            responseSet = responses.greeting;
        } else if (lowerPrompt.includes('status') || lowerPrompt.includes('diagnostic')) {
            responseSet = responses.status;
        } else if (lowerPrompt.includes('weather') || lowerPrompt.includes('temperature')) {
            responseSet = responses.weather;
        } else if (lowerPrompt.includes('joke') || lowerPrompt.includes('funny')) {
            responseSet = responses.joke;
        }
        
        return responseSet[Math.floor(Math.random() * responseSet.length)];
    }

    addMessage(sender, text, isTyping = false) {
        const chatDisplay = document.getElementById('chat-display');
        if (!chatDisplay) return `msg-${Date.now()}`;
        
        const messageId = `msg-${Date.now()}`;
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.id = messageId;
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-header">
                    <div class="message-avatar">${sender === 'jarvis' ? 'J' : 'S'}</div>
                    <div class="message-sender">${sender === 'jarvis' ? 'J.A.R.V.I.S.' : 'YOU'}</div>
                    <div class="message-time">${time}</div>
                </div>
                <div class="message-text">
                    ${isTyping ? '<span class="typing-indicator">' + text + '</span>' : this.formatMessage(text)}
                </div>
            </div>
        `;
        
        chatDisplay.appendChild(messageDiv);
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
        
        // Add to history
        this.messageHistory.push({
            id: messageId,
            sender,
            text,
            time: new Date(),
            isTyping
        });
        
        return messageId;
    }

    updateMessage(messageId, text) {
        const messageDiv = document.getElementById(messageId);
        if (messageDiv) {
            const textDiv = messageDiv.querySelector('.message-text');
            if (textDiv) {
                textDiv.innerHTML = this.formatMessage(text);
            }
            
            // Update history
            const messageIndex = this.messageHistory.findIndex(m => m.id === messageId);
            if (messageIndex !== -1) {
                this.messageHistory[messageIndex].text = text;
                this.messageHistory[messageIndex].isTyping = false;
            }
        }
    }

    formatMessage(text) {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong class="highlight">$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank">$1</a>');
    }

    clearChat() {
        if (this.messageHistory.length === 0) return;
        
        if (confirm('Clear all communication logs?')) {
            const chatDisplay = document.getElementById('chat-display');
            if (chatDisplay) {
                chatDisplay.innerHTML = `
                    <div class="message jarvis">
                        <div class="message-content">
                            <div class="message-header">
                                <div class="message-avatar">J</div>
                                <div class="message-sender">J.A.R.V.I.S.</div>
                                <div class="message-time">SYSTEM</div>
                            </div>
                            <div class="message-text">
                                Communication log cleared. Ready for commands, Sir.
                            </div>
                        </div>
                    </div>
                `;
                this.messageHistory = [];
                this.showNotification('Communication log cleared', 'success');
            }
        }
    }

    handleCommand(command) {
        const commands = {
            diagnostics: "Running full system diagnostics... All systems reporting optimal status. Detailed report prepared.",
            weapons: "Weapons system check initiated... Repulsors at 100%, missiles armed, targeting systems online.",
            flight: "Flight systems check... Thrusters calibrated, navigation systems online, flight path clear.",
            analysis: "Entering analysis mode... All sensors active. Real-time data streaming initiated."
        };
        
        if (commands[command]) {
            this.addMessage('jarvis', commands[command]);
            this.showNotification(`Command executed: ${command.toUpperCase()}`, 'success');
            
            // Update relevant system status
            if (command === 'diagnostics') {
                this.systemStatus.armorIntegrity = 100;
                this.systemStatus.weaponsSystem = 100;
                this.systemStatus.flightSystems = 100;
                this.updateSystemStatus();
            }
        }
    }

    showProjectDetails(projectId) {
        const project = this.projects.find(p => p.id == projectId);
        if (!project) return;
        
        const modalContent = `
            <div class="project-modal">
                <h3>${project.title}</h3>
                <img src="${project.image}" alt="${project.title}">
                <p>${project.description}</p>
                <div class="tech-stack">
                    <strong>Tech Stack:</strong>
                    <div>${project.tech.join(', ')}</div>
                </div>
                <div class="project-links">
                    ${project.links.map(link => `
                        <a href="${link.url}" class="project-link ${link.type}" target="_blank">
                            <i class="${link.icon}"></i> ${link.label}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;
        
        this.showModal(project.title, modalContent);
    }

    openImageModal(imageUrl, caption, category) {
        const modal = document.getElementById('image-modal');
        const modalImage = document.getElementById('modal-image');
        
        if (modal && modalImage) {
            modalImage.src = imageUrl;
            modalImage.alt = caption;
            modal.classList.add('active');
            
            // Add image info
            const infoDiv = document.createElement('div');
            infoDiv.className = 'image-info';
            infoDiv.innerHTML = `
                <h3>${caption}</h3>
                <p>${category}</p>
                <a href="${imageUrl}" download="${caption.replace(/\s+/g, '-').toLowerCase()}.jpg" class="download-btn">
                    <i class="fas fa-download"></i> Download
                </a>
            `;
            
            // Remove existing info
            const existingInfo = modal.querySelector('.image-info');
            if (existingInfo) existingInfo.remove();
            
            modal.querySelector('.modal-content').appendChild(infoDiv);
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }
    }

    closeImageModal() {
        const modal = document.getElementById('image-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    showModal(title, content) {
        const modal = document.createElement('div');
        modal.className = 'custom-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <button class="modal-close"><i class="fas fa-times"></i></button>
                    <h2>${title}</h2>
                    ${content}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
            if (e.target === modal.querySelector('.modal-overlay')) {
                modal.remove();
            }
        });
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background: rgba(10, 14, 30, 0.95);
            border: 1px solid rgba(0, 243, 255, 0.3);
            border-left: 4px solid ${this.getNotificationColor(type)};
            border-radius: 8px;
            color: white;
            font-family: 'Orbitron', sans-serif;
            letter-spacing: 1px;
            z-index: 1000;
            animation: notificationSlideIn 0.3s ease;
            backdrop-filter: blur(10px);
        `;
        
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'notificationSlideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }

    getNotificationColor(type) {
        const colors = {
            success: 'var(--arc-reactor)',
            error: 'var(--iron-red)',
            warning: 'var(--hud-orange)',
            info: 'var(--suit-blue)'
        };
        return colors[type] || colors.info;
    }

    updateSystemStatus() {
        // Update status bars
        Object.keys(this.systemStatus).forEach(key => {
            const element = document.querySelector(`[data-status="${key}"]`);
            if (element) {
                const fill = element.querySelector('.status-fill');
                const value = element.querySelector('.status-value');
                
                if (fill) {
                    fill.style.width = `${this.systemStatus[key]}%`;
                }
                if (value) {
                    value.textContent = key === 'powerOutput' ? 
                        `${this.systemStatus[key]} GW` : 
                        `${this.systemStatus[key]}%`;
                }
            }
        });
        
        // Update footer values
        const footerValues = {
            'power-output': `${this.systemStatus.powerOutput} GW`,
            'system-load': `${this.systemStatus.systemLoad}%`,
            'armor-status': `${this.systemStatus.armorIntegrity}%`
        };
        
        Object.keys(footerValues).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = footerValues[id];
            }
        });
    }

    animateStatusBars() {
        setInterval(() => {
            // Randomly fluctuate status values (within reason)
            Object.keys(this.systemStatus).forEach(key => {
                if (key !== 'powerOutput') {
                    const change = (Math.random() - 0.5) * 4; // ±2%
                    this.systemStatus[key] = Math.max(70, Math.min(100, 
                        this.systemStatus[key] + change));
                }
            });
            
            this.updateSystemStatus();
        }, 5000);
    }

    startSystemAnimations() {
        // Create floating particles
        this.createFloatingParticles();
        
        // Animate project cards on hover
        this.animateProjectCards();
        
        // Update system status periodically
        setInterval(() => {
            this.systemStatus.powerOutput = (8.5 + Math.random() * 0.4).toFixed(1);
            this.updateSystemStatus();
        }, 3000);
    }

    createFloatingParticles() {
        const container = document.querySelector('.nanotech-grid');
        if (!container) return;
        
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.cssText = `
                position: absolute;
                width: ${1 + Math.random() * 2}px;
                height: ${1 + Math.random() * 2}px;
                background: var(--arc-reactor);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                opacity: ${0.1 + Math.random() * 0.2};
                animation: float ${10 + Math.random() * 20}s linear infinite;
            `;
            
            container.appendChild(particle);
        }
        
        // Add animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translate(0, 0);
                    opacity: 0.1;
                }
                50% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                    opacity: 0.3;
                }
                100% {
                    transform: translate(0, 0);
                    opacity: 0.1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    animateProjectCards() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-in');
        });
    }

    startUptimeCounter() {
        setInterval(() => {
            const now = new Date();
            const diff = now - this.startTime;
            const hours = Math.floor(diff / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            
            const uptimeElement = document.getElementById('uptime');
            if (uptimeElement) {
                uptimeElement.textContent = 
                    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        }, 1000);
    }

    // Export conversation history
    exportConversation() {
        const history = this.messageHistory.map(msg => ({
            time: msg.time.toISOString(),
            sender: msg.sender,
            text: msg.text
        }));
        
        const blob = new Blob([JSON.stringify(history, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `jarvis-conversation-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        this.showNotification('Conversation exported', 'success');
    }

    // Import conversation history
    importConversation(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const history = JSON.parse(e.target.result);
                this.messageHistory = history.map(msg => ({
                    ...msg,
                    time: new Date(msg.time)
                }));
                this.renderConversationHistory();
                this.showNotification('Conversation imported', 'success');
            } catch (error) {
                this.showNotification('Invalid conversation file', 'error');
            }
        };
        reader.readAsText(file);
    }

    renderConversationHistory() {
        const chatDisplay = document.getElementById('chat-display');
        if (!chatDisplay) return;
        
        chatDisplay.innerHTML = '';
        this.messageHistory.forEach(msg => {
            this.addMessage(msg.sender, msg.text);
        });
    }

    // System commands
    emergencyProtocol() {
        this.showNotification('EMERGENCY PROTOCOL ACTIVATED', 'error');
        this.addMessage('jarvis', 'Emergency protocol initiated. All systems on high alert.', true);
        
        // Visual feedback
        document.body.style.animation = 'emergencyPulse 1s infinite';
        
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }

    selfDestructSequence() {
        if (confirm('⚠️ ACTIVATE SELF-DESTRUCT SEQUENCE?\n\nThis action cannot be undone.')) {
            this.showNotification('SELF-DESTRUCT SEQUENCE INITIATED', 'error');
            this.addMessage('jarvis', 'Self-destruct sequence activated. Countdown: 10...', true);
            
            let countdown = 10;
            const countdownInterval = setInterval(() => {
                this.addMessage('jarvis', `${countdown}...`, true);
                countdown--;
                
                if (countdown < 0) {
                    clearInterval(countdownInterval);
                    this.addMessage('jarvis', 'Sequence terminated. Safety protocols engaged.', true);
                    this.showNotification('Self-destruct aborted', 'success');
                }
            }, 1000);
        }
    }
}

// Initialize J.A.R.V.I.S. when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add global CSS for animations
    const globalStyles = `
        @keyframes notificationSlideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes notificationSlideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes emergencyPulse {
            0%, 100% { box-shadow: 0 0 10px rgba(255, 0, 60, 0.3); }
            50% { box-shadow: 0 0 50px rgba(255, 0, 60, 0.7); }
        }
        
        .typing-indicator::after {
            content: '...';
            animation: typing 1.5s infinite;
        }
        
        @keyframes typing {
            0%, 20% { content: '.'; }
            40% { content: '..'; }
            60%, 100% { content: '...'; }
        }
        
        .project-card.animate-in {
            animation: slideUp 0.5s ease-out forwards;
            opacity: 0;
        }
        
        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .highlight {
            color: var(--arc-reactor);
            font-weight: bold;
            text-shadow: var(--text-glow);
        }
        
        code {
            background: rgba(0, 243, 255, 0.1);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            border: 1px solid rgba(0, 243, 255, 0.3);
        }
        
        .custom-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            background: var(--panel-bg);
            padding: 30px;
            border-radius: 15px;
            max-width: 600px;
            width: 90%;
            border: 1px solid var(--arc-reactor);
            box-shadow: var(--neon-glow);
            position: relative;
        }
        
        .modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: var(--iron-red);
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .image-info {
            margin-top: 20px;
            padding: 15px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            border: 1px solid rgba(0, 243, 255, 0.2);
        }
        
        .download-btn {
            display: inline-block;
            margin-top: 10px;
            padding: 8px 16px;
            background: var(--arc-reactor);
            color: var(--dark-bg);
            text-decoration: none;
            border-radius: 6px;
            font-family: 'Orbitron', sans-serif;
            font-size: 0.9rem;
            letter-spacing: 1px;
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = globalStyles;
    document.head.appendChild(styleSheet);
    
    // Create loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="loading-arc"></div>
            <div class="loading-text">INITIALIZING J.A.R.V.I.S. SYSTEMS</div>
            <div class="loading-progress">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;
    
    // Add loading screen styles
    const loadingStyles = `
        .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--dark-bg);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        }
        
        .loading-content {
            text-align: center;
        }
        
        .loading-arc {
            width: 100px;
            height: 100px;
            border: 3px solid transparent;
            border-top: 3px solid var(--arc-reactor);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 30px;
        }
        
        .loading-text {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.5rem;
            color: var(--arc-reactor);
            letter-spacing: 3px;
            margin-bottom: 20px;
            animation: pulse 2s infinite;
        }
        
        .loading-progress {
            width: 200px;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
        }
        
        .progress-bar {
            height: 100%;
            background: linear-gradient(90deg, var(--arc-reactor), var(--suit-blue));
            width: 0%;
            animation: loading 2s ease-in-out infinite;
        }
        
        @keyframes loading {
            0% { width: 0%; }
            50% { width: 100%; }
            100% { width: 0%; }
        }
    `;
    
    const loadingStyleSheet = document.createElement('style');
    loadingStyleSheet.textContent = loadingStyles;
    document.head.appendChild(loadingStyleSheet);
    
    document.body.appendChild(loadingScreen);
    
    // Initialize J.A.R.V.I.S.
    window.jarvis = new JarvisSystem();
    
    // Remove loading screen after initialization
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 2000);
    
    // Add global keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl + Shift + E: Export conversation
        if (e.ctrlKey && e.shiftKey && e.key === 'E') {
            e.preventDefault();
            window.jarvis.exportConversation();
        }
        
        // Ctrl + Shift + I: Import conversation (trigger file input)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.json';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    window.jarvis.importConversation(file);
                }
            };
            input.click();
        }
        
        // Ctrl + Shift + S: Switch to systems
        if (e.ctrlKey && e.shiftKey && e.key === 'S') {
            e.preventDefault();
            window.jarvis.switchSection('systems');
        }
        
        // Ctrl + Shift + P: Switch to projects
        if (e.ctrlKey && e.shiftKey && e.key === 'P') {
            e.preventDefault();
            window.jarvis.switchSection('projects');
        }
        
        // Ctrl + Shift + G: Switch to gallery
        if (e.ctrlKey && e.shiftKey && e.key === 'G') {
            e.preventDefault();
            window.jarvis.switchSection('gallery');
        }
        
        // Ctrl + Shift + A: Switch to assistant
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            e.preventDefault();
            window.jarvis.switchSection('assistant');
        }
    });
    
    // Make J.A.R.V.I.S. globally accessible
    window.JarvisSystem = JarvisSystem;
});

// Add helper functions to global scope
window.JarvisHelpers = {
    formatBytes: function(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    },
    
    generateId: function() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },
    
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle: function(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};