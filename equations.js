// ReactaQuest: SG Chem Balancer - 50 Common Singapore O-Level/IP Chemistry Equations
// Structured for dynamic UI rendering and strict validation of coefficients, subscripts, and state symbols.

const CHEMICAL_EQUATIONS = [
  // --- ACIDS, BASES, AND SALTS ---
  {
    id: 1,
    topic: "Acids, Bases and Salts",
    difficulty: "Easy",
    wordQuestion: "Aqueous hydrochloric acid reacts with aqueous sodium hydroxide to produce aqueous sodium chloride and liquid water.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "H", subscript: 1 }, { symbol: "Cl", subscript: 1 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "Na", subscript: 1 }, { symbol: "O", subscript: 1 }, { symbol: "H", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Na", subscript: 1 }, { symbol: "Cl", subscript: 1 }] },
      { coefficient: 1, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "This is a classic acid-base neutralisation reaction. The hydrogen ions (H⁺) from the hydrochloric acid react with the hydroxide ions (OH⁻) from the sodium hydroxide to form neutral water (H₂O). The salt sodium chloride (NaCl) remains dissolved as spectator ions."
  },
  {
    id: 2,
    topic: "Acids, Bases and Salts",
    difficulty: "Easy",
    wordQuestion: "Solid magnesium reacts with aqueous hydrochloric acid to produce aqueous magnesium chloride and hydrogen gas.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Mg", subscript: 1 }] },
      { coefficient: 2, state: "aq", parts: [{ symbol: "H", subscript: 1 }, { symbol: "Cl", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Mg", subscript: 1 }, { symbol: "Cl", subscript: 2 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "H", subscript: 2 }] }
    ],
    explanation: "This is an acid-metal reaction. Reactive metals above hydrogen in the reactivity series displace hydrogen from acids, producing a soluble salt and hydrogen gas. You can test for hydrogen using a lighted splint, which extinguished with a 'pop' sound."
  },
  {
    id: 3,
    topic: "Acids, Bases and Salts",
    difficulty: "Medium",
    wordQuestion: "Solid calcium carbonate reacts with aqueous hydrochloric acid to form aqueous calcium chloride, carbon dioxide gas, and liquid water.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Ca", subscript: 1 }, { symbol: "C", subscript: 1 }, { symbol: "O", subscript: 3 }] },
      { coefficient: 2, state: "aq", parts: [{ symbol: "H", subscript: 1 }, { symbol: "Cl", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Ca", subscript: 1 }, { symbol: "Cl", subscript: 2 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] },
      { coefficient: 1, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "This is an acid-carbonate reaction. Carbonates react with acids to form a salt, carbon dioxide, and water. Limewater is used to test for carbon dioxide, turning cloudy due to the formation of insoluble calcium carbonate."
  },
  {
    id: 4,
    topic: "Acids, Bases and Salts",
    difficulty: "Easy",
    wordQuestion: "Aqueous sodium carbonate reacts with aqueous sulfuric acid to yield aqueous sodium sulfate, carbon dioxide gas, and liquid water.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Na", subscript: 2 }, { symbol: "C", subscript: 1 }, { symbol: "O", subscript: 3 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "H", subscript: 2 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Na", subscript: 2 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] },
      { coefficient: 1, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "An acid-soluble carbonate reaction. Since both reactants are in aqueous solutions, the reaction occurs rapidly, releasing carbon dioxide gas bubbles (effervescence) and leaving dissolved sodium sulfate salt behind."
  },
  {
    id: 5,
    topic: "Acids, Bases and Salts",
    difficulty: "Medium",
    wordQuestion: "Aqueous nitric acid reacts with solid copper(II) carbonate to form aqueous copper(II) nitrate, carbon dioxide gas, and liquid water.",
    reactants: [
      { coefficient: 2, state: "aq", parts: [{ symbol: "H", subscript: 1 }, { symbol: "N", subscript: 1 }, { symbol: "O", subscript: 3 }] },
      { coefficient: 1, state: "s", parts: [{ symbol: "Cu", subscript: 1 }, { symbol: "C", subscript: 1 }, { symbol: "O", subscript: 3 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Cu", subscript: 1 }, { symbol: "(", isBracket: true }, { symbol: "N", subscript: 1 }, { symbol: "O", subscript: 3 }, { symbol: ")", isBracket: true, subscript: 2 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] },
      { coefficient: 1, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "Green copper(II) carbonate powder dissolves in colorless nitric acid, forming a blue solution of copper(II) nitrate, alongside bubbles of CO₂ and water. Pay close attention to the polyatomic nitrate group, (NO₃)₂, which has a subscript of 2!"
  },
  {
    id: 6,
    topic: "Acids, Bases and Salts",
    difficulty: "Medium",
    wordQuestion: "Solid copper(II) oxide dissolves in aqueous sulfuric acid to yield a blue solution of copper(II) sulfate and liquid water.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Cu", subscript: 1 }, { symbol: "O", subscript: 1 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "H", subscript: 2 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Cu", subscript: 1 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] },
      { coefficient: 1, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "Copper(II) oxide (CuO) is a basic oxide that does not dissolve in water but dissolves readily in acids. This reaction is a key step in preparing soluble copper(II) sulfate crystals in the school lab."
  },
  {
    id: 7,
    topic: "Acids, Bases and Salts",
    difficulty: "Easy",
    wordQuestion: "Aqueous sodium hydroxide reacts with aqueous nitric acid to form aqueous sodium nitrate and liquid water.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Na", subscript: 1 }, { symbol: "O", subscript: 1 }, { symbol: "H", subscript: 1 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "H", subscript: 1 }, { symbol: "N", subscript: 1 }, { symbol: "O", subscript: 3 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Na", subscript: 1 }, { symbol: "N", subscript: 1 }, { symbol: "O", subscript: 3 }] },
      { coefficient: 1, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "A neutralisation reaction between a strong alkali (NaOH) and a strong acid (HNO₃). It is 1:1 balanced naturally, meaning all coefficients are omitted (blank)!"
  },
  {
    id: 8,
    topic: "Acids, Bases and Salts",
    difficulty: "Medium",
    wordQuestion: "Aqueous calcium hydroxide reacts with aqueous hydrochloric acid to form aqueous calcium chloride and liquid water.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Ca", subscript: 1 }, { symbol: "(", isBracket: true }, { symbol: "O", subscript: 1 }, { symbol: "H", subscript: 1 }, { symbol: ")", isBracket: true, subscript: 2 }] },
      { coefficient: 2, state: "aq", parts: [{ symbol: "H", subscript: 1 }, { symbol: "Cl", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Ca", subscript: 1 }, { symbol: "Cl", subscript: 2 }] },
      { coefficient: 2, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "Limewater (aqueous calcium hydroxide) neutralizes hydrochloric acid. Because calcium has a valency of +2, it forms Ca(OH)₂ and CaCl₂, requiring a coefficient of 2 for HCl and H₂O to balance the hydrogen and chlorine atoms."
  },
  {
    id: 9,
    topic: "Acids, Bases and Salts",
    difficulty: "Medium",
    wordQuestion: "Aqueous barium chloride reacts with aqueous sodium sulfate to precipitate solid white barium sulfate and leave aqueous sodium chloride.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Ba", subscript: 1 }, { symbol: "Cl", subscript: 2 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "Na", subscript: 2 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] }
    ],
    products: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Ba", subscript: 1 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] },
      { coefficient: 2, state: "aq", parts: [{ symbol: "Na", subscript: 1 }, { symbol: "Cl", subscript: 1 }] }
    ],
    explanation: "This is a classic precipitation (double displacement) reaction. Insoluble salts like barium sulfate (BaSO₄) are prepared by mixing two soluble salt solutions. The ionic equation is Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)."
  },
  {
    id: 10,
    topic: "Acids, Bases and Salts",
    difficulty: "Easy",
    wordQuestion: "Aqueous silver nitrate reacts with aqueous sodium chloride to form a white precipitate of solid silver chloride and aqueous sodium nitrate.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Ag", subscript: 1 }, { symbol: "N", subscript: 1 }, { symbol: "O", subscript: 3 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "Na", subscript: 1 }, { symbol: "Cl", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Ag", subscript: 1 }, { symbol: "Cl", subscript: 1 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "Na", subscript: 1 }, { symbol: "N", subscript: 1 }, { symbol: "O", subscript: 3 }] }
    ],
    explanation: "This precipitation reaction is the standard test for chloride ions. Adding silver nitrate to a solution containing chloride ions yields a distinct, curdy white precipitate of silver chloride (AgCl) which is insoluble in water."
  },
  {
    id: 11,
    topic: "Acids, Bases and Salts",
    difficulty: "Medium",
    wordQuestion: "Aqueous lead(II) nitrate reacts with aqueous potassium iodide to yield a bright yellow precipitate of solid lead(II) iodide and aqueous potassium nitrate.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Pb", subscript: 1 }, { symbol: "(", isBracket: true }, { symbol: "N", subscript: 1 }, { symbol: "O", subscript: 3 }, { symbol: ")", isBracket: true, subscript: 2 }] },
      { coefficient: 2, state: "aq", parts: [{ symbol: "K", subscript: 1 }, { symbol: "I", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Pb", subscript: 1 }, { symbol: "I", subscript: 2 }] },
      { coefficient: 2, state: "aq", parts: [{ symbol: "K", subscript: 1 }, { symbol: "N", subscript: 1 }, { symbol: "O", subscript: 3 }] }
    ],
    explanation: "Mixing two colorless solutions of lead(II) nitrate and potassium iodide instantly forms a brilliant yellow precipitate of lead(II) iodide (PbI₂). This reaction beautifully demonstrates double displacement in chemistry."
  },
  {
    id: 12,
    topic: "Acids, Bases and Salts",
    difficulty: "Medium",
    wordQuestion: "Aqueous copper(II) sulfate reacts with aqueous sodium hydroxide to precipitate blue solid copper(II) hydroxide and leave aqueous sodium sulfate.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Cu", subscript: 1 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] },
      { coefficient: 2, state: "aq", parts: [{ symbol: "Na", subscript: 1 }, { symbol: "O", subscript: 1 }, { symbol: "H", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Cu", subscript: 1 }, { symbol: "(", isBracket: true }, { symbol: "O", subscript: 1 }, { symbol: "H", subscript: 1 }, { symbol: ")", isBracket: true, subscript: 2 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "Na", subscript: 2 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] }
    ],
    explanation: "This is the precipitation test for copper(II) ions (Cu²⁺). Adding sodium hydroxide alkali forms a light blue precipitate of copper(II) hydroxide, which is insoluble in excess sodium hydroxide."
  },
  {
    id: 13,
    topic: "Acids, Bases and Salts",
    difficulty: "Medium",
    wordQuestion: "Aqueous ammonium chloride reacts with aqueous sodium hydroxide, releasing ammonia gas, aqueous sodium chloride, and liquid water.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "N", subscript: 1 }, { symbol: "H", subscript: 4 }, { symbol: "Cl", subscript: 1 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "Na", subscript: 1 }, { symbol: "O", subscript: 1 }, { symbol: "H", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Na", subscript: 1 }, { symbol: "Cl", subscript: 1 }] },
      { coefficient: 1, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "N", subscript: 1 }, { symbol: "H", subscript: 3 }] }
    ],
    explanation: "This is the reaction of an ammonium salt with an alkali, which is a major chemical test. Heating the mixture releases ammonia gas (NH₃), which is identified by its pungent smell and its ability to turn damp red litmus paper blue."
  },
  {
    id: 14,
    topic: "Acids, Bases and Salts",
    difficulty: "Hard",
    wordQuestion: "Solid aluminium reacts with aqueous sulfuric acid to yield aqueous aluminium sulfate and hydrogen gas.",
    reactants: [
      { coefficient: 2, state: "s", parts: [{ symbol: "Al", subscript: 1 }] },
      { coefficient: 3, state: "aq", parts: [{ symbol: "H", subscript: 2 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Al", subscript: 2 }, { symbol: "(", isBracket: true }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }, { symbol: ")", isBracket: true, subscript: 3 }] },
      { coefficient: 3, state: "g", parts: [{ symbol: "H", subscript: 2 }] }
    ],
    explanation: "Aluminium has a +3 charge, while sulfate has a -2 charge, making the salt Al₂(SO₄)₃. Balancing this requires matching 2 aluminiums on the left, and 3 sulfate groups, resulting in 3 H₂ gas molecules. Quite a tricky one!"
  },
  {
    id: 15,
    topic: "Acids, Bases and Salts",
    difficulty: "Easy",
    wordQuestion: "Aqueous ammonia reacts with aqueous hydrochloric acid to form aqueous ammonium chloride.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "N", subscript: 1 }, { symbol: "H", subscript: 3 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "H", subscript: 1 }, { symbol: "Cl", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "N", subscript: 1 }, { symbol: "H", subscript: 4 }, { symbol: "Cl", subscript: 1 }] }
    ],
    explanation: "Ammonia is a weak base that dissolves in water to react with acids. This is an acid-base addition reaction, forming only one product: the highly soluble salt ammonium chloride (NH₄Cl)."
  },

  // --- METALS AND REACTIVITY ---
  {
    id: 16,
    topic: "Metals",
    difficulty: "Medium",
    wordQuestion: "Solid sodium reacts vigorously with liquid water to produce aqueous sodium hydroxide and hydrogen gas.",
    reactants: [
      { coefficient: 2, state: "s", parts: [{ symbol: "Na", subscript: 1 }] },
      { coefficient: 2, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    products: [
      { coefficient: 2, state: "aq", parts: [{ symbol: "Na", subscript: 1 }, { symbol: "O", subscript: 1 }, { symbol: "H", subscript: 1 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "H", subscript: 2 }] }
    ],
    explanation: "Sodium is an extremely reactive alkali metal. When added to water, it darts around on the water surface, melts into a silvery sphere, and reacts vigorously, releasing hydrogen gas and creating an alkaline NaOH solution."
  },
  {
    id: 17,
    topic: "Metals",
    difficulty: "Medium",
    wordQuestion: "Solid calcium reacts with liquid water to form aqueous calcium hydroxide and hydrogen gas.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Ca", subscript: 1 }] },
      { coefficient: 2, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Ca", subscript: 1 }, { symbol: "(", isBracket: true }, { symbol: "O", subscript: 1 }, { symbol: "H", subscript: 1 }, { symbol: ")", isBracket: true, subscript: 2 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "H", subscript: 2 }] }
    ],
    explanation: "Calcium reacts steadily with cold water. The calcium sinks and bubbles of hydrogen gas quickly coat it, carrying it to the surface. A cloudy precipitate of Ca(OH)₂ (limewater) forms as the calcium hydroxide dissolves slowly."
  },
  {
    id: 18,
    topic: "Metals",
    difficulty: "Easy",
    wordQuestion: "Solid magnesium reacts slowly with steam (gaseous water) to produce solid white magnesium oxide and hydrogen gas.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Mg", subscript: 1 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Mg", subscript: 1 }, { symbol: "O", subscript: 1 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "H", subscript: 2 }] }
    ],
    explanation: "While magnesium reacts extremely slowly with cold water, it reacts vigorously with steam (gaseous H₂O). It burns with a bright white flame to produce white solid magnesium oxide (MgO) powder and hydrogen gas."
  },
  {
    id: 19,
    topic: "Metals",
    difficulty: "Easy",
    wordQuestion: "Solid zinc reacts with steam (gaseous water) to form solid zinc oxide and hydrogen gas.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Zn", subscript: 1 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Zn", subscript: 1 }, { symbol: "O", subscript: 1 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "H", subscript: 2 }] }
    ],
    explanation: "Zinc reacts only when heated strongly in steam. The resulting zinc oxide (ZnO) is unique because it is yellow when hot, but turns back to white when it cools down!"
  },
  {
    id: 20,
    topic: "Metals",
    difficulty: "Hard",
    wordQuestion: "Solid iron reacts with steam when heated to form solid triiron tetraoxide (iron(II,III) oxide) and hydrogen gas.",
    reactants: [
      { coefficient: 3, state: "s", parts: [{ symbol: "Fe", subscript: 1 }] },
      { coefficient: 4, state: "g", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Fe", subscript: 3 }, { symbol: "O", subscript: 4 }] },
      { coefficient: 4, state: "g", parts: [{ symbol: "H", subscript: 2 }] }
    ],
    explanation: "Red-hot iron reacts reversibly with steam to form magnetic black triiron tetraoxide (Fe₃O₄), which is a mixed oxide containing both Fe²⁺ and Fe³⁺ ions. This requires 3 iron atoms and 4 steam molecules to balance."
  },
  {
    id: 21,
    topic: "Metals",
    difficulty: "Easy",
    wordQuestion: "Solid iron reacts with aqueous copper(II) sulfate to displace red-brown solid copper and form aqueous iron(II) sulfate.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Fe", subscript: 1 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "Cu", subscript: 1 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Fe", subscript: 1 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] },
      { coefficient: 1, state: "s", parts: [{ symbol: "Cu", subscript: 1 }] }
    ],
    explanation: "This is a metal displacement reaction. Since iron is more reactive than copper in the reactivity series, it displaces copper from its sulfate solution. The blue solution fades to a light green, and red-brown solid deposits on the iron."
  },
  {
    id: 22,
    topic: "Metals",
    difficulty: "Easy",
    wordQuestion: "Solid zinc reacts with aqueous copper(II) sulfate, forming aqueous zinc sulfate and depositing solid copper.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Zn", subscript: 1 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "Cu", subscript: 1 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Zn", subscript: 1 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] },
      { coefficient: 1, state: "s", parts: [{ symbol: "Cu", subscript: 1 }] }
    ],
    explanation: "Zinc is more reactive than copper. It loses electrons more readily to become Zn²⁺ ions, displacing Cu²⁺ ions. The blue color of the CuSO₄ solution gradually disappears as colorless zinc sulfate (ZnSO₄) is formed."
  },
  {
    id: 23,
    topic: "Metals",
    difficulty: "Easy",
    wordQuestion: "Solid magnesium reacts with aqueous iron(II) sulfate to displace solid iron and form aqueous magnesium sulfate.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Mg", subscript: 1 }] },
      { coefficient: 1, state: "aq", parts: [{ symbol: "Fe", subscript: 1 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Mg", subscript: 1 }, { symbol: "S", subscript: 1 }, { symbol: "O", subscript: 4 }] },
      { coefficient: 1, state: "s", parts: [{ symbol: "Fe", subscript: 1 }] }
    ],
    explanation: "Magnesium sits high up in the reactivity series. It easily displaces iron from aqueous iron(II) sulfate, leaving a deposit of black/grey iron powder and a clear, colorless magnesium sulfate solution."
  },
  {
    id: 24,
    topic: "Metals",
    difficulty: "Hard",
    wordQuestion: "Solid iron(III) oxide (hematite) reacts with gaseous carbon monoxide in the blast furnace to yield liquid iron and carbon dioxide gas.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Fe", subscript: 2 }, { symbol: "O", subscript: 3 }] },
      { coefficient: 3, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 1 }] }
    ],
    products: [
      { coefficient: 2, state: "l", parts: [{ symbol: "Fe", subscript: 1 }] },
      { coefficient: 3, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] }
    ],
    explanation: "This is the primary reduction reaction inside the blast furnace. Carbon monoxide acts as the reducing agent, stripping oxygen from hematite (Fe₂O₃) to extract molten iron (liquid due to extreme furnace temperatures) and producing CO₂."
  },
  {
    id: 25,
    topic: "Metals",
    difficulty: "Easy",
    wordQuestion: "Carbon dioxide gas reacts with solid carbon (coke) in the blast furnace to form carbon monoxide gas.",
    reactants: [
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] },
      { coefficient: 1, state: "s", parts: [{ symbol: "C", subscript: 1 }] }
    ],
    products: [
      { coefficient: 2, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "This endothermic reaction occurs in the middle zone of the blast furnace. Rising carbon dioxide gas reacts with the descending hot coke (carbon) to produce carbon monoxide, which is the essential reducing agent for iron extraction."
  },
  {
    id: 26,
    topic: "Metals",
    difficulty: "Easy",
    wordQuestion: "Solid calcium oxide (lime) reacts with solid silicon dioxide (sand) in the blast furnace to form liquid calcium silicate (slag).",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Ca", subscript: 1 }, { symbol: "O", subscript: 1 }] },
      { coefficient: 1, state: "s", parts: [{ symbol: "Si", subscript: 1 }, { symbol: "O", subscript: 2 }] }
    ],
    products: [
      { coefficient: 1, state: "l", parts: [{ symbol: "Ca", subscript: 1 }, { symbol: "Si", subscript: 1 }, { symbol: "O", subscript: 3 }] }
    ],
    explanation: "Silicon dioxide (SiO₂) is an acidic impurity in iron ore. Calcium oxide (CaO), a basic oxide formed by decomposing limestone, reacts with it to form molten calcium silicate (CaSiO₃, slag), which floats on top of the heavier molten iron."
  },
  {
    id: 27,
    topic: "Metals",
    difficulty: "Medium",
    wordQuestion: "Solid iron(III) oxide reacts with solid aluminium in the thermite reaction to yield solid aluminium oxide and molten liquid iron.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Fe", subscript: 2 }, { symbol: "O", subscript: 3 }] },
      { coefficient: 2, state: "s", parts: [{ symbol: "Al", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Al", subscript: 2 }, { symbol: "O", subscript: 3 }] },
      { coefficient: 2, state: "l", parts: [{ symbol: "Fe", subscript: 1 }] }
    ],
    explanation: "The thermite reaction is highly exothermic. Aluminium is much more reactive than iron, displacing it and releasing massive amounts of heat, melting the iron produced. This reaction is famously used to weld railway tracks together!"
  },
  {
    id: 28,
    topic: "Metals",
    difficulty: "Medium",
    wordQuestion: "Solid iron reacts with oxygen gas to form solid iron(III) oxide (rusting, simplified).",
    reactants: [
      { coefficient: 4, state: "s", parts: [{ symbol: "Fe", subscript: 1 }] },
      { coefficient: 3, state: "g", parts: [{ symbol: "O", subscript: 2 }] }
    ],
    products: [
      { coefficient: 2, state: "s", parts: [{ symbol: "Fe", subscript: 2 }, { symbol: "O", subscript: 3 }] }
    ],
    explanation: "Rusting is the slow oxidation of iron in the presence of oxygen and water. In this simplified representation, 4 atoms of iron react with 3 molecules of oxygen gas to produce 2 formula units of iron(III) oxide (Fe₂O₃)."
  },

  // --- COMBUSTION AND ENVIRONMENT ---
  {
    id: 29,
    topic: "Air and Atmosphere",
    difficulty: "Easy",
    wordQuestion: "Solid carbon (coke) burns in oxygen gas to produce carbon dioxide gas.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "C", subscript: 1 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "O", subscript: 2 }] }
    ],
    products: [
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] }
    ],
    explanation: "This is the complete combustion of carbon. It is a highly exothermic reaction that provides the intense heat required at the bottom of the blast furnace to melt iron."
  },
  {
    id: 30,
    topic: "Air and Atmosphere",
    difficulty: "Medium",
    wordQuestion: "Hydrogen gas burns in oxygen gas to form liquid water.",
    reactants: [
      { coefficient: 2, state: "g", parts: [{ symbol: "H", subscript: 2 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "O", subscript: 2 }] }
    ],
    products: [
      { coefficient: 2, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "Hydrogen is a clean fuel because its combustion produces only non-polluting water. The reaction is fast and energetic, requiring a 2:1:2 ratio to balance the oxygen atoms."
  },
  {
    id: 31,
    topic: "Air and Atmosphere",
    difficulty: "Medium",
    wordQuestion: "Methane gas (natural gas) burns completely in oxygen gas to produce carbon dioxide gas and gaseous water (steam).",
    reactants: [
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "H", subscript: 4 }] },
      { coefficient: 2, state: "g", parts: [{ symbol: "O", subscript: 2 }] }
    ],
    products: [
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] },
      { coefficient: 2, state: "g", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "Methane (CH₄) is the simplest alkane. Complete combustion in excess oxygen yields carbon dioxide and steam. Note the coefficient of 2 for both O₂ and H₂O to balance the 4 hydrogen and 4 oxygen atoms."
  },
  {
    id: 32,
    topic: "Air and Atmosphere",
    difficulty: "Easy",
    wordQuestion: "Gaseous carbon monoxide reacts with oxygen gas to yield carbon dioxide gas.",
    reactants: [
      { coefficient: 2, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 1 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "O", subscript: 2 }] }
    ],
    products: [
      { coefficient: 2, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] }
    ],
    explanation: "Carbon monoxide is a toxic gas formed by incomplete combustion. It can be further oxidized to carbon dioxide gas when ignited in the presence of oxygen."
  },
  {
    id: 33,
    topic: "Air and Atmosphere",
    difficulty: "Hard",
    wordQuestion: "Aqueous glucose reacts with oxygen gas during respiration to produce carbon dioxide gas and liquid water.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "C", subscript: 6 }, { symbol: "H", subscript: 12 }, { symbol: "O", subscript: 6 }] },
      { coefficient: 6, state: "g", parts: [{ symbol: "O", subscript: 2 }] }
    ],
    products: [
      { coefficient: 6, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] },
      { coefficient: 6, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "Cellular respiration is a slow, controlled combustion process occurring in cells to release energy. The chemical formula for glucose is C₆H₁₂O₆, which requires a coefficient of 6 for O₂, CO₂, and H₂O to balance."
  },
  {
    id: 34,
    topic: "Air and Atmosphere",
    difficulty: "Hard",
    wordQuestion: "Carbon dioxide gas reacts with liquid water in plants during photosynthesis to produce solid glucose and oxygen gas.",
    reactants: [
      { coefficient: 6, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] },
      { coefficient: 6, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "s", parts: [{ symbol: "C", subscript: 6 }, { symbol: "H", subscript: 12 }, { symbol: "O", subscript: 6 }] },
      { coefficient: 6, state: "g", parts: [{ symbol: "O", subscript: 2 }] }
    ],
    explanation: "Photosynthesis is the chemical opposite of respiration. Using light energy absorbed by chlorophyll, plants convert carbon dioxide and water into glucose (food) and oxygen gas."
  },
  {
    id: 35,
    topic: "Air and Atmosphere",
    difficulty: "Medium",
    wordQuestion: "Gaseous carbon monoxide and nitrogen monoxide pollutants react inside a catalytic converter to produce carbon dioxide and nitrogen gases.",
    reactants: [
      { coefficient: 2, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 1 }] },
      { coefficient: 2, state: "g", parts: [{ symbol: "N", subscript: 1 }, { symbol: "O", subscript: 1 }] }
    ],
    products: [
      { coefficient: 2, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "N", subscript: 2 }] }
    ],
    explanation: "Catalytic converters in car exhaust systems contain platinum/rhodium catalysts. They convert toxic carbon monoxide (CO) and nitrogen monoxide (NO) gases into non-toxic carbon dioxide (CO₂) and nitrogen (N₂)."
  },

  // --- HALOGENS & DISPLACEMENTS ---
  {
    id: 36,
    topic: "Redox and Halogens",
    difficulty: "Medium",
    wordQuestion: "Chlorine gas reacts with aqueous potassium bromide to displace liquid bromine and form aqueous potassium chloride.",
    reactants: [
      { coefficient: 1, state: "g", parts: [{ symbol: "Cl", subscript: 2 }] },
      { coefficient: 2, state: "aq", parts: [{ symbol: "K", subscript: 1 }, { symbol: "Br", subscript: 1 }] }
    ],
    products: [
      { coefficient: 2, state: "aq", parts: [{ symbol: "K", subscript: 1 }, { symbol: "Cl", subscript: 1 }] },
      { coefficient: 1, state: "l", parts: [{ symbol: "Br", subscript: 2 }] }
    ],
    explanation: "This is a halogen displacement reaction. Chlorine is more reactive than bromine because it is higher up in Group 17, so it readily displaces bromide ions, turning the solution from colorless to orange-brown."
  },
  {
    id: 37,
    topic: "Redox and Halogens",
    difficulty: "Medium",
    wordQuestion: "Chlorine gas reacts with aqueous potassium iodide to displace solid iodine and form aqueous potassium chloride.",
    reactants: [
      { coefficient: 1, state: "g", parts: [{ symbol: "Cl", subscript: 2 }] },
      { coefficient: 2, state: "aq", parts: [{ symbol: "K", subscript: 1 }, { symbol: "I", subscript: 1 }] }
    ],
    products: [
      { coefficient: 2, state: "aq", parts: [{ symbol: "K", subscript: 1 }, { symbol: "Cl", subscript: 1 }] },
      { coefficient: 1, state: "s", parts: [{ symbol: "I", subscript: 2 }] }
    ],
    explanation: "Chlorine is far more reactive than iodine. When chlorine gas is bubbled into a colorless potassium iodide solution, iodide ions are oxidized to elemental iodine (I₂), which darkens the solution to red-brown/black."
  },
  {
    id: 38,
    topic: "Redox and Halogens",
    difficulty: "Medium",
    wordQuestion: "Aqueous bromine reacts with aqueous potassium iodide to displace solid iodine and form aqueous potassium bromide.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "Br", subscript: 2 }] },
      { coefficient: 2, state: "aq", parts: [{ symbol: "K", subscript: 1 }, { symbol: "I", subscript: 1 }] }
    ],
    products: [
      { coefficient: 2, state: "aq", parts: [{ symbol: "K", subscript: 1 }, { symbol: "Br", subscript: 1 }] },
      { coefficient: 1, state: "s", parts: [{ symbol: "I", subscript: 2 }] }
    ],
    explanation: "Bromine is more reactive than iodine (higher up in Group 17). Thus, orange-brown bromine water reacts with colorless potassium iodide solution to release dark brown dissolved iodine (I₂)."
  },

  // --- THERMAL DECOMPOSITION ---
  {
    id: 39,
    topic: "Thermal Decomposition",
    difficulty: "Easy",
    wordQuestion: "Solid calcium carbonate undergoes thermal decomposition to form solid calcium oxide and carbon dioxide gas.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Ca", subscript: 1 }, { symbol: "C", subscript: 1 }, { symbol: "O", subscript: 3 }] }
    ],
    products: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Ca", subscript: 1 }, { symbol: "O", subscript: 1 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] }
    ],
    explanation: "Thermal decomposition is the breaking down of a substance using heat. Calcium carbonate (limestone) decomposes at high temperatures (around 900°C) into calcium oxide (quicklime) and carbon dioxide gas."
  },
  {
    id: 40,
    topic: "Thermal Decomposition",
    difficulty: "Easy",
    wordQuestion: "Solid copper(II) carbonate decomposes upon heating to form solid black copper(II) oxide and carbon dioxide gas.",
    reactants: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Cu", subscript: 1 }, { symbol: "C", subscript: 1 }, { symbol: "O", subscript: 3 }] }
    ],
    products: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Cu", subscript: 1 }, { symbol: "O", subscript: 1 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] }
    ],
    explanation: "Heating green copper(II) carbonate powder results in a color change to black as it decomposes into copper(II) oxide (CuO), alongside the evolution of CO₂ gas."
  },
  {
    id: 41,
    topic: "Thermal Decomposition",
    difficulty: "Hard",
    wordQuestion: "Solid sodium hydrogencarbonate (baking soda) decomposes when heated to form solid sodium carbonate, carbon dioxide gas, and gaseous water.",
    reactants: [
      { coefficient: 2, state: "s", parts: [{ symbol: "Na", subscript: 1 }, { symbol: "H", subscript: 1 }, { symbol: "C", subscript: 1 }, { symbol: "O", subscript: 3 }] }
    ],
    products: [
      { coefficient: 1, state: "s", parts: [{ symbol: "Na", subscript: 2 }, { symbol: "C", subscript: 1 }, { symbol: "O", subscript: 3 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "Baking soda (NaHCO₃) decomposes on heating. The carbon dioxide gas released makes cakes rise! You need 2 units of sodium hydrogencarbonate to balance this equation properly."
  },
  {
    id: 42,
    topic: "Thermal Decomposition",
    difficulty: "Hard",
    wordQuestion: "Solid lead(II) nitrate decomposes when heated to yield solid yellow lead(II) oxide, nitrogen dioxide gas, and oxygen gas.",
    reactants: [
      { coefficient: 2, state: "s", parts: [{ symbol: "Pb", subscript: 1 }, { symbol: "(", isBracket: true }, { symbol: "N", subscript: 1 }, { symbol: "O", subscript: 3 }, { symbol: ")", isBracket: true, subscript: 2 }] }
    ],
    products: [
      { coefficient: 2, state: "s", parts: [{ symbol: "Pb", subscript: 1 }, { symbol: "O", subscript: 1 }] },
      { coefficient: 4, state: "g", parts: [{ symbol: "N", subscript: 1 }, { symbol: "O", subscript: 2 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "O", subscript: 2 }] }
    ],
    explanation: "Decomposing white lead(II) nitrate crystals produces crackling sounds (decrepitation), brown nitrogen dioxide fumes (NO₂), an oxygen gas that relights a glowing splint, and a residue of lead(II) oxide (yellow when cold)."
  },
  {
    id: 43,
    topic: "Thermal Decomposition",
    difficulty: "Medium",
    wordQuestion: "Aqueous hydrogen peroxide decomposes in the presence of a manganese(IV) oxide catalyst to yield liquid water and oxygen gas.",
    reactants: [
      { coefficient: 2, state: "aq", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 2 }] }
    ],
    products: [
      { coefficient: 2, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "O", subscript: 2 }] }
    ],
    explanation: "Hydrogen peroxide decomposes slowly at room temperature, but adding a tiny spatula of black MnO₂ catalyst causes extremely rapid bubbling, releasing oxygen gas. This is a common way to prepare oxygen in the lab."
  },

  // --- ORGANIC CHEMISTRY ---
  {
    id: 44,
    topic: "Organic Chemistry",
    difficulty: "Hard",
    wordQuestion: "Liquid ethanol burns completely in oxygen gas to yield carbon dioxide gas and gaseous water.",
    reactants: [
      { coefficient: 1, state: "l", parts: [{ symbol: "C", subscript: 2 }, { symbol: "H", subscript: 5 }, { symbol: "O", subscript: 1 }, { symbol: "H", subscript: 1 }] },
      { coefficient: 3, state: "g", parts: [{ symbol: "O", subscript: 2 }] }
    ],
    products: [
      { coefficient: 2, state: "g", parts: [{ symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }] },
      { coefficient: 3, state: "g", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "Ethanol (C₂H₅OH) is a biofuel. Complete combustion converts it entirely into CO₂ and steam. Pay close attention to the formula: there are 5 hydrogens in the ethyl group and 1 in the hydroxyl group, making 6 hydrogens in total!"
  },
  {
    id: 45,
    topic: "Organic Chemistry",
    difficulty: "Medium",
    wordQuestion: "Aqueous ethanol is oxidized by atmospheric oxygen to produce aqueous ethanoic acid and liquid water.",
    reactants: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "C", subscript: 2 }, { symbol: "H", subscript: 5 }, { symbol: "O", subscript: 1 }, { symbol: "H", subscript: 1 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "O", subscript: 2 }] }
    ],
    products: [
      { coefficient: 1, state: "aq", parts: [{ symbol: "C", subscript: 1 }, { symbol: "H", subscript: 3 }, { symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }, { symbol: "H", subscript: 1 }] },
      { coefficient: 1, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "This reaction explains why opened wine turns sour. Bacteria (like Acetobacter) use oxygen from the air to oxidize ethanol (alcohol) into ethanoic acid (vinegar, CH₃COOH)."
  },
  {
    id: 46,
    topic: "Organic Chemistry",
    difficulty: "Medium",
    wordQuestion: "Liquid ethanoic acid and liquid ethanol react in the presence of a concentrated sulfuric acid catalyst to form liquid ethyl ethanoate and liquid water.",
    reactants: [
      { coefficient: 1, state: "l", parts: [{ symbol: "C", subscript: 1 }, { symbol: "H", subscript: 3 }, { symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }, { symbol: "H", subscript: 1 }] },
      { coefficient: 1, state: "l", parts: [{ symbol: "C", subscript: 2 }, { symbol: "H", subscript: 5 }, { symbol: "O", subscript: 1 }, { symbol: "H", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "l", parts: [{ symbol: "C", subscript: 1 }, { symbol: "H", subscript: 3 }, { symbol: "C", subscript: 1 }, { symbol: "O", subscript: 2 }, { symbol: "C", subscript: 2 }, { symbol: "H", subscript: 5 }] },
      { coefficient: 1, state: "l", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    explanation: "This is an esterification (condensation) reaction. An organic acid and an alcohol join together, releasing a small water molecule. The product, ethyl ethanoate (CH₃COOC₂H₅), is an ester with a pleasant fruity smell."
  },
  {
    id: 47,
    topic: "Organic Chemistry",
    difficulty: "Easy",
    wordQuestion: "Gaseous ethene reacts with bromine gas during an addition reaction to form liquid 1,2-dibromoethane.",
    reactants: [
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 2 }, { symbol: "H", subscript: 4 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "Br", subscript: 2 }] }
    ],
    products: [
      { coefficient: 1, state: "l", parts: [{ symbol: "C", subscript: 2 }, { symbol: "H", subscript: 4 }, { symbol: "Br", subscript: 2 }] }
    ],
    explanation: "This addition reaction is the standard test to distinguish unsaturated hydrocarbons (alkenes) from saturated ones (alkanes). Ethene decolourizes reddish-brown bromine water instantly."
  },
  {
    id: 48,
    topic: "Organic Chemistry",
    difficulty: "Easy",
    wordQuestion: "Gaseous ethene reacts with steam in the presence of a phosphoric acid catalyst to produce gaseous ethanol.",
    reactants: [
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 2 }, { symbol: "H", subscript: 4 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "H", subscript: 2 }, { symbol: "O", subscript: 1 }] }
    ],
    products: [
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 2 }, { symbol: "H", subscript: 5 }, { symbol: "O", subscript: 1 }, { symbol: "H", subscript: 1 }] }
    ],
    explanation: "This is the industrial hydration of ethene to manufacture synthetic ethanol. The reaction requires specific conditions: 300°C temperature, 60 atmospheres pressure, and a solid H₃PO₄ catalyst."
  },
  {
    id: 49,
    topic: "Organic Chemistry",
    difficulty: "Easy",
    wordQuestion: "Gaseous ethene reacts with hydrogen gas in the presence of a nickel catalyst to form gaseous ethane.",
    reactants: [
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 2 }, { symbol: "H", subscript: 4 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "H", subscript: 2 }] }
    ],
    products: [
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 2 }, { symbol: "H", subscript: 6 }] }
    ],
    explanation: "This is an addition hydrogenation reaction. Alkenes add hydrogen across their carbon-carbon double bond (C=C) to become saturated alkanes. This chemical process is used to manufacture margarine from vegetable oils."
  },
  {
    id: 50,
    topic: "Organic Chemistry",
    difficulty: "Hard",
    wordQuestion: "Liquid decane undergoes catalytic cracking to yield liquid octane and ethene gas.",
    reactants: [
      { coefficient: 1, state: "l", parts: [{ symbol: "C", subscript: 10 }, { symbol: "H", subscript: 22 }] }
    ],
    products: [
      { coefficient: 1, state: "l", parts: [{ symbol: "C", subscript: 8 }, { symbol: "H", subscript: 18 }] },
      { coefficient: 1, state: "g", parts: [{ symbol: "C", subscript: 2 }, { symbol: "H", subscript: 4 }] }
    ],
    explanation: "Cracking breaks down long-chain hydrocarbons (like decane, C₁₀H₂₂ found in petroleum fractions) into smaller, more useful short-chain alkanes (like octane, C₈H₁₈ for petrol) and alkenes (like ethene for plastics)."
  }
];

// Export for module systems or attach to global scope for browser compatibility
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CHEMICAL_EQUATIONS };
} else {
  window.CHEMICAL_EQUATIONS = CHEMICAL_EQUATIONS;
}
