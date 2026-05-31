// ReactaQuest: SG Chem Balancer - Game Engine
// Integrates game state, audio synthesis, particle effects, dynamic rendering, and syllabus-compliant validation.

document.addEventListener("DOMContentLoaded", () => {
  // --- GAME STATE ---
  const state = {
    xp: 0,
    level: 1,
    streak: 0,
    highestStreak: 0,
    solvedCount: 0,
    activeEquation: null,
    history: [],
    unlockedBadges: [],
    soundEnabled: true
  };

  // --- SINGAPOREAN BADGES DEFINITIONS ---
  const BADGES = [
    {
      id: "first-step",
      name: "Teh C Novice",
      icon: "☕",
      desc: "Solve your first chemical equation correctly!",
      condition: (s) => s.solvedCount >= 1
    },
    {
      id: "streak-3",
      name: "Chope Champion",
      icon: "🔖",
      desc: "Get a streak of 3 equations correct in a row!",
      condition: (s) => s.streak >= 3
    },
    {
      id: "kiasu-chemist",
      name: "Kiasu Chemist",
      icon: "🔥",
      desc: "Get a streak of 5 equations correct!",
      condition: (s) => s.streak >= 5
    },
    {
      id: "milo-dino",
      name: "Milo Dinosaur",
      icon: "🦖",
      desc: "Accumulate 100 XP from solving equations!",
      condition: (s) => s.xp >= 100
    },
    {
      id: "double-confirm",
      name: "Double Confirm",
      icon: "✔️",
      desc: "Solve 10 equations in total!",
      condition: (s) => s.solvedCount >= 10
    },
    {
      id: "sg-chem-legend",
      name: "SG Chem Legend",
      icon: "👑",
      desc: "Solve 20 equations and master balancing!",
      condition: (s) => s.solvedCount >= 20
    }
  ];

  // --- SINGAPORE CLASSROOM COACH COMMENTS ---
  const COACH_SUCCESS_COMMENTS = [
    "Swee! Perfectly balanced, just like my cup of Teh C! ☕",
    "Wah, steady lah! You balance chemical equation faster than people chope table! 🔖",
    "Excellent! You really got the Chemistry mojo today! 🧪",
    "Siaoz! Your chemistry so powerful already, O-Levels no horse run! 🐎",
    "Eh, very standard! Perfectly balanced! Keep the streak going!",
    "Loba loba, you balance so fast! Confirmed A1 for Chemistry! 🎓"
  ];

  const COACH_ERROR_COMMENTS = [
    "Alamak! Don't anyhow guess, verify the number of atoms on both sides! 🤦‍♂️",
    "Double confirm your subscripts again! Remember, we cannot change the chemical formula itself!",
    "Subscripts and coefficients of 1 are WRONG! Leave them completely blank, okay? 🚫",
    "A bit kiasu, check the state symbols properly! Is it (aq), (s), (l), or (g)?",
    "Atoms are missing! Remember the law of conservation of mass! Cannot vanish into thin air!",
    "Eh, count properly! The reactants must equal the products. Don't play play! 🧐"
  ];

  // --- AUDIO SYNTHESIZER (WEB AUDIO API) ---
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  function playSound(type) {
    if (!state.soundEnabled) return;
    initAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    
    switch (type) {
      case "success":
        // A nice sparkling ascending synthesizer chime
        synthTone(523.25, "sine", now, 0.15); // C5
        synthTone(659.25, "sine", now + 0.1, 0.15); // E5
        synthTone(783.99, "sine", now + 0.2, 0.15); // G5
        synthTone(1046.50, "sine", now + 0.3, 0.3); // C6
        break;
      case "error":
        // A gentle retro-style error buzz
        synthTone(150, "triangle", now, 0.15);
        synthTone(110, "sawtooth", now + 0.08, 0.2);
        break;
      case "streak":
        // High-pitched celebratory ping
        synthTone(880, "sine", now, 0.1);
        synthTone(1320, "sine", now + 0.05, 0.1);
        synthTone(1760, "sine", now + 0.1, 0.25);
        break;
      case "levelup":
        // Short triumphant fanfare
        synthTone(261.63, "square", now, 0.15); // C4
        synthTone(329.63, "square", now + 0.15, 0.15); // E4
        synthTone(392.00, "square", now + 0.3, 0.15); // G4
        synthTone(523.25, "square", now + 0.45, 0.4); // C5
        break;
    }
  }

  function synthTone(freq, type, start, duration) {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    
    // Smooth volume envelope to prevent clicking
    gainNode.gain.setValueAtTime(0, start);
    gainNode.gain.linearRampToValueAtTime(0.12, start + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, start + duration);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start(start);
    osc.stop(start + duration);
  }

  // --- VISUAL EFFECTS (CONFETTI CANVAS) ---
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  let animationFrameId = null;
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 8 + 4;
      this.color = ["#00f3ff", "#f000ff", "#39ff14", "#ffaa00", "#ff3366"][Math.floor(Math.random() * 5)];
      this.speedX = Math.random() * 10 - 5;
      this.speedY = Math.random() * -12 - 5;
      this.gravity = 0.3;
      this.opacity = 1;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 8 - 4;
    }

    update() {
      this.x += this.speedX;
      this.speedY += this.gravity;
      this.y += this.speedY;
      this.opacity -= 0.015;
      this.rotation += this.rotationSpeed;
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }

  function triggerConfetti() {
    // Stop any existing loop
    cancelAnimationFrame(animationFrameId);
    particles = [];
    
    // Spawn particles from center of equation
    const equationCard = document.querySelector(".equation-card");
    const rect = equationCard.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    for (let i = 0; i < 85; i++) {
      particles.push(new Particle(startX, startY));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let active = false;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.opacity > 0) {
          p.update();
          p.draw();
          active = true;
        }
      }

      if (active) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    animate();
  }

  // --- EQUATION RENDERING ENGINE ---
  const equationContainer = document.getElementById("equation-container");
  const wordQuestionText = document.getElementById("word-question");
  const topicBadge = document.getElementById("topic-badge");
  const difficultyBadge = document.getElementById("difficulty-badge");

  function renderEquation(eq) {
    equationContainer.innerHTML = "";
    
    // Update question word headers
    wordQuestionText.textContent = eq.wordQuestion;
    topicBadge.textContent = eq.topic;
    
    difficultyBadge.textContent = eq.difficulty;
    difficultyBadge.className = "difficulty-badge " + eq.difficulty.toLowerCase();

    // RENDER REACTANTS
    eq.reactants.forEach((molecule, index) => {
      if (index > 0) {
        renderOperator("+");
      }
      renderMolecule(molecule, "reactant");
    });

    // RENDER REACTION ARROW
    renderOperator("→");

    // RENDER PRODUCTS
    eq.products.forEach((molecule, index) => {
      if (index > 0) {
        renderOperator("+");
      }
      renderMolecule(molecule, "product");
    });
  }

  function renderOperator(op) {
    const span = document.createElement("span");
    span.className = "equation-operator";
    if (op === "+") {
      span.classList.add("operator-plus");
      span.textContent = "+";
    } else {
      span.classList.add("operator-arrow");
      span.textContent = "→";
    }
    equationContainer.appendChild(span);
  }

  function renderMolecule(molecule, role) {
    const molDiv = document.createElement("div");
    molDiv.className = `molecule ${role}`;

    // 1. Coefficient Input (left of formula)
    const coeffInput = document.createElement("input");
    coeffInput.type = "text";
    coeffInput.className = "chem-input coeff-input";
    coeffInput.maxLength = 2;
    coeffInput.dataset.type = "coefficient";
    coeffInput.dataset.target = molecule.coefficient;
    coeffInput.placeholder = " ";
    coeffInput.autocomplete = "off";
    molDiv.appendChild(coeffInput);

    // 2. Molecule Formula Subscripts
    molecule.parts.forEach(part => {
      if (part.isBracket) {
        const bracketSpan = document.createElement("span");
        bracketSpan.className = "chem-bracket";
        bracketSpan.textContent = part.symbol;
        molDiv.appendChild(bracketSpan);

        // If it's a closing bracket, it might have a subscript target
        if (part.symbol === ")" && part.subscript !== undefined) {
          const wrapper = document.createElement("div");
          wrapper.className = "subscript-wrapper";
          
          const subInput = document.createElement("input");
          subInput.type = "text";
          subInput.className = "chem-input sub-input";
          subInput.maxLength = 2;
          subInput.dataset.type = "subscript";
          subInput.dataset.target = part.subscript;
          subInput.autocomplete = "off";
          
          wrapper.appendChild(subInput);
          molDiv.appendChild(wrapper);
        }
      } else {
        // Element symbol
        const elementSpan = document.createElement("span");
        elementSpan.className = "chem-symbol";
        elementSpan.textContent = part.symbol;
        molDiv.appendChild(elementSpan);

        // Subscript target for this element symbol
        const wrapper = document.createElement("div");
        wrapper.className = "subscript-wrapper";
        
        const subInput = document.createElement("input");
        subInput.type = "text";
        subInput.className = "chem-input sub-input";
        subInput.maxLength = 2;
        subInput.dataset.type = "subscript";
        subInput.dataset.target = part.subscript;
        subInput.autocomplete = "off";
        
        wrapper.appendChild(subInput);
        molDiv.appendChild(wrapper);
      }
    });

    // 3. State Symbol Input (right of formula)
    const stateWrapper = document.createElement("span");
    stateWrapper.className = "state-wrapper";
    stateWrapper.appendChild(document.createTextNode("("));

    const stateInput = document.createElement("input");
    stateInput.type = "text";
    stateInput.className = "chem-input state-input";
    stateInput.maxLength = 4;
    stateInput.dataset.type = "state";
    stateInput.dataset.target = molecule.state;
    stateInput.autocomplete = "off";

    stateWrapper.appendChild(stateInput);
    stateWrapper.appendChild(document.createTextNode(")"));
    molDiv.appendChild(stateWrapper);

    equationContainer.appendChild(molDiv);
  }

  // --- VALIDATION ENGINE ---
  const checkBtn = document.getElementById("check-btn");
  const hintBtn = document.getElementById("hint-btn");
  const nextBtn = document.getElementById("next-btn");
  const feedbackCard = document.getElementById("feedback-card");
  const coachComment = document.getElementById("coach-comment");
  const explanationText = document.getElementById("explanation-text");

  function checkAnswers() {
    const inputs = equationContainer.querySelectorAll(".chem-input");
    let allCorrect = true;
    let anyEmpty = false;

    // Reset styles
    inputs.forEach(input => {
      input.classList.remove("is-correct", "is-incorrect");
      if (input.value.trim() === "") {
        anyEmpty = true;
      }
    });

    inputs.forEach(input => {
      const type = input.dataset.type;
      const target = parseInt(input.dataset.target) || input.dataset.target;
      let rawVal = input.value.trim();

      let isCorrect = false;

      if (type === "coefficient" || type === "subscript") {
        // Strict evaluation rules:
        // Subscripts/coefficients of 1 must NOT be written (blank only).
        // Entering "1" is marked as WRONG.
        const intTarget = parseInt(target);
        
        if (intTarget === 1) {
          if (rawVal === "") {
            isCorrect = true; // correct notation!
          } else {
            isCorrect = false; // written "1" is wrong!
          }
        } else {
          // Greater than 1, student must match the integer exactly
          if (parseInt(rawVal) === intTarget) {
            isCorrect = true;
          } else {
            isCorrect = false;
          }
        }
      } else if (type === "state") {
        // State validation: Case-insensitive, ignores outer parentheses if entered
        let cleanVal = rawVal.toLowerCase().replace(/[()]/g, "");
        if (cleanVal === target.toLowerCase()) {
          isCorrect = true;
        }
      }

      if (isCorrect) {
        input.classList.add("is-correct");
      } else {
        input.classList.add("is-incorrect");
        allCorrect = false;
      }
    });

    if (allCorrect) {
      handleSuccess();
    } else {
      handleFailure();
    }
  }

  function handleSuccess() {
    playSound("success");
    triggerConfetti();

    // Increment streaks
    state.streak++;
    state.solvedCount++;
    if (state.streak > state.highestStreak) {
      state.highestStreak = state.streak;
    }

    // Award XP based on active equation difficulty
    let xpGain = 10;
    if (state.activeEquation.difficulty === "Medium") xpGain = 20;
    if (state.activeEquation.difficulty === "Hard") xpGain = 30;
    state.xp += xpGain;

    // Check level progression (Level up every 50 XP)
    const oldLevel = state.level;
    state.level = Math.floor(state.xp / 50) + 1;
    if (state.level > oldLevel) {
      setTimeout(() => playSound("levelup"), 650);
    }

    // Update state HUD
    updateHUD();

    // Check Badges Unlocking
    checkAndUnlockBadges();

    // Enable next button, hide check/hint buttons
    checkBtn.style.display = "none";
    hintBtn.style.display = "none";
    nextBtn.style.display = "flex";

    // Dynamic Success feedback panel
    const randomComment = COACH_SUCCESS_COMMENTS[Math.floor(Math.random() * COACH_SUCCESS_COMMENTS.length)];
    coachComment.textContent = randomComment;
    explanationText.innerHTML = `<strong>Topic: ${state.activeEquation.topic}</strong><br><br>${state.activeEquation.explanation}`;
    
    feedbackCard.style.display = "block";
    feedbackCard.className = "card feedback-card success";
    feedbackCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function handleFailure() {
    playSound("error");
    
    // Reset streak
    state.streak = 0;
    updateHUD();

    // Select suitable error comment
    const randomComment = COACH_ERROR_COMMENTS[Math.floor(Math.random() * COACH_ERROR_COMMENTS.length)];
    coachComment.textContent = randomComment;
    explanationText.innerHTML = `Double-check your subscripts (formulas), balancing numbers (coefficients) and states! <br><br>💡 <strong>Tip</strong>: If the number of atoms or molecules is 1, leave the textbox **completely blank**! DO NOT type '1'.`;
    
    feedbackCard.style.display = "block";
    feedbackCard.className = "card feedback-card error";
    feedbackCard.style.borderColor = "var(--neon-red)";
    feedbackCard.querySelector(".feedback-title").style.color = "var(--neon-red)";
    feedbackCard.querySelector(".feedback-title").style.textShadow = "0 0 10px rgba(255, 51, 102, 0.2)";
    feedbackCard.querySelector(".feedback-title").innerHTML = "❌ Almost There! Try Again!";
    feedbackCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function showHint() {
    playSound("streak");
    // Generate high quality hint based on reactants/products atom counting
    const eq = state.activeEquation;
    let hintHTML = `💡 <strong>Teacher's Hint:</strong><br>`;
    
    // Count atoms correct formula counts
    let reactantList = eq.reactants.map(r => r.formulaDisplay || getFormulaString(r)).join(", ");
    let productList = eq.products.map(p => p.formulaDisplay || getFormulaString(p)).join(", ");

    hintHTML += `The reactants are <strong>${reactantList}</strong>.<br>`;
    hintHTML += `The products are <strong>${productList}</strong>.<br><br>`;
    
    hintHTML += `Remember: <br>`;
    hintHTML += `1. Balance the atoms that appear in only one chemical substance first.<br>`;
    hintHTML += `2. Leave the coefficients/subscripts **completely empty/blank** if they are 1!`;

    coachComment.textContent = "Take a breath and read the hint below. You can do this! 💪";
    explanationText.innerHTML = hintHTML;

    feedbackCard.style.display = "block";
    feedbackCard.className = "card feedback-card hint";
    feedbackCard.style.borderColor = "var(--neon-orange)";
    feedbackCard.querySelector(".feedback-title").style.color = "var(--neon-orange)";
    feedbackCard.querySelector(".feedback-title").style.textShadow = "0 0 10px rgba(255, 170, 0, 0.2)";
    feedbackCard.querySelector(".feedback-title").innerHTML = "💡 Useful Chemistry Hint";
    feedbackCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function getFormulaString(molecule) {
    let s = "";
    molecule.parts.forEach(part => {
      s += part.symbol;
      if (part.subscript > 1) s += `<sub>${part.subscript}</sub>`;
    });
    return s;
  }

  // --- GAME SYSTEM PROGRESSION ---
  function updateHUD() {
    document.getElementById("streak-count").textContent = state.streak;
    document.getElementById("xp-points").textContent = state.xp;
    document.getElementById("level-value").textContent = state.level;
    document.getElementById("highest-streak").textContent = state.highestStreak;
    document.getElementById("total-solved").textContent = state.solvedCount;

    // Save progression
    saveLocalState();
  }

  function loadNextEquation() {
    // Hide feedback
    feedbackCard.style.display = "none";
    
    // Restore button modes
    checkBtn.style.display = "flex";
    hintBtn.style.display = "flex";
    nextBtn.style.display = "none";

    // Choose next equation from database (avoid repeating if possible, otherwise randomize)
    let available = window.CHEMICAL_EQUATIONS.filter(eq => !state.history.includes(eq.id));
    if (available.length === 0) {
      // Clear history to repeat
      state.history = [];
      available = window.CHEMICAL_EQUATIONS;
    }

    const randomIndex = Math.floor(Math.random() * available.length);
    const chosen = available[randomIndex];
    
    state.activeEquation = chosen;
    state.history.push(chosen.id);

    renderEquation(chosen);
  }

  function checkAndUnlockBadges() {
    BADGES.forEach(badge => {
      if (!state.unlockedBadges.includes(badge.id)) {
        if (badge.condition(state)) {
          state.unlockedBadges.push(badge.id);
          unlockBadgeUI(badge);
        }
      }
    });
  }

  function unlockBadgeUI(badge) {
    const badgeEl = document.getElementById(`badge-${badge.id}`);
    if (badgeEl) {
      badgeEl.classList.add("unlocked");
      badgeEl.title = `${badge.name}: ${badge.desc}`;
      // Glow and visual pulse
      badgeEl.style.animation = "badgePulse 1.5s ease-out 3";
    }
  }

  // --- PERSISTENCE LAYER ---
  function saveLocalState() {
    try {
      localStorage.setItem("reactaquest_xp", state.xp);
      localStorage.setItem("reactaquest_level", state.level);
      localStorage.setItem("reactaquest_highest_streak", state.highestStreak);
      localStorage.setItem("reactaquest_solved_count", state.solvedCount);
      localStorage.setItem("reactaquest_unlocked_badges", JSON.stringify(state.unlockedBadges));
    } catch(e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  function loadLocalState() {
    try {
      const savedXp = localStorage.getItem("reactaquest_xp");
      const savedLevel = localStorage.getItem("reactaquest_level");
      const savedHighestStreak = localStorage.getItem("reactaquest_highest_streak");
      const savedSolvedCount = localStorage.getItem("reactaquest_solved_count");
      const savedBadges = localStorage.getItem("reactaquest_unlocked_badges");

      if (savedXp) state.xp = parseInt(savedXp);
      if (savedLevel) state.level = parseInt(savedLevel);
      if (savedHighestStreak) state.highestStreak = parseInt(savedHighestStreak);
      if (savedSolvedCount) state.solvedCount = parseInt(savedSolvedCount);
      if (savedBadges) state.unlockedBadges = JSON.parse(savedBadges);

      updateHUD();
      
      // Update UI unlocked badges state
      state.unlockedBadges.forEach(badgeId => {
        const badge = BADGES.find(b => b.id === badgeId);
        if (badge) unlockBadgeUI(badge);
      });
    } catch(e) {
      console.warn("Could not load from localStorage", e);
    }
  }

  // --- AUDIO MUTING TOGGLE ---
  const soundToggle = document.getElementById("sound-toggle");
  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      state.soundEnabled = !state.soundEnabled;
      if (state.soundEnabled) {
        soundToggle.innerHTML = "🔊";
        soundToggle.title = "Mute sound effects";
      } else {
        soundToggle.innerHTML = "🔇";
        soundToggle.title = "Unmute sound effects";
      }
    });
  }

  // --- BIND DOM EVENTS ---
  checkBtn.addEventListener("click", checkAnswers);
  hintBtn.addEventListener("click", showHint);
  nextBtn.addEventListener("click", loadNextEquation);

  // Initialize!
  loadLocalState();
  loadNextEquation();
});
