import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Heart, Activity, Brain, Utensils, Moon, Users, AlertTriangle, CheckCircle, TrendingUp, Clock, Star, Scale, Home } from 'lucide-react';

const LyvoHealthApp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [biologicalAge, setBiologicalAge] = useState(null);
  const [riskFactors, setRiskFactors] = useState([]);
  const [showWaitlist, setShowWaitlist] = useState(false);

  const questionCategories = [
    {
      category: "Persönliche Daten",
      icon: <Users className="w-6 h-6" />,
      questions: [
        {
          id: "chronological_age",
          question: "Wie alt sind Sie aktuell?",
          type: "number",
          min: 25,
          max: 75,
          subtitle: "Fortgeschrittene Langlebigkeitsforschung ab 25+"
        },
        {
          id: "gender",
          question: "Was ist Ihr biologisches Geschlecht?",
          type: "select",
          options: ["Männlich", "Weiblich"],
          subtitle: "Für hormonoptimierte Gesundheitsprotokolle"
        },
        {
          id: "health_goal",
          question: "Was ist Ihr primäres Langlebigkeitsziel?",
          type: "select",
          options: [
            "Biologisches Altern umkehren",
            "Altersbedingte Krankheiten verhindern", 
            "Leistung & Energie optimieren",
            "Gesunde Lebensspanne verlängern",
            "Bin nur neugierig auf meine Gesundheit"
          ],
          subtitle: "Personalisierte Protokolle basierend auf Ihrem Ziel"
        }
      ]
    },
    {
      category: "Körperkomposition & BMI",
      icon: <Scale className="w-6 h-6" />,
      questions: [
        {
          id: "height",
          question: "Wie groß sind Sie? (in cm)",
          type: "number",
          min: 140,
          max: 220,
          subtitle: "Für präzise BMI-Berechnung"
        },
        {
          id: "weight",
          question: "Wie viel wiegen Sie? (in kg)",
          type: "number",
          min: 40,
          max: 200,
          subtitle: "Aktuelle Gewichtsangabe"
        },
        {
          id: "weight_stability",
          question: "Wie stabil ist Ihr Gewicht in den letzten 2 Jahren?",
          type: "select",
          options: [
            "Sehr stabil (±2kg)",
            "Leichte Schwankungen (±3-5kg)",
            "Moderate Veränderungen (±6-10kg)",
            "Starke Schwankungen (±11-15kg)",
            "Extreme Veränderungen (>15kg)"
          ],
          riskIndicator: ["Starke Schwankungen (±11-15kg)", "Extreme Veränderungen (>15kg)"]
        },
        {
          id: "muscle_mass",
          question: "Wie schätzen Sie Ihre Muskelmasse ein?",
          type: "select",
          options: [
            "Sehr hoch - regelmäßiges Krafttraining",
            "Hoch - gute Muskulatur",
            "Durchschnittlich für mein Alter",
            "Niedrig - wenig Muskeln",
            "Sehr niedrig - Muskelverlust spürbar"
          ],
          riskIndicator: ["Niedrig - wenig Muskeln", "Sehr niedrig - Muskelverlust spürbar"]
        }
      ]
    },
    {
      category: "Ernährung & Mediterrane Diät",
      icon: <Utensils className="w-6 h-6" />,
      questions: [
        {
          id: "vegetable_intake",
          question: "Wie viele Portionen Gemüse essen Sie täglich?",
          type: "select",
          options: [
            "5+ Portionen täglich",
            "3-4 Portionen täglich",
            "2 Portionen täglich",
            "1 Portion täglich",
            "Weniger als 1 Portion täglich"
          ],
          riskIndicator: ["1 Portion täglich", "Weniger als 1 Portion täglich"]
        },
        {
          id: "olive_oil",
          question: "Wie oft verwenden Sie natives Olivenöl extra?",
          type: "select",
          options: [
            "Täglich als Hauptfettquelle",
            "Mehrmals pro Woche",
            "Gelegentlich",
            "Selten",
            "Nie"
          ],
          riskIndicator: ["Selten", "Nie"]
        },
        {
          id: "processed_food",
          question: "Wie oft essen Sie verarbeitete Lebensmittel?",
          type: "select",
          options: [
            "Nie oder sehr selten",
            "1-2 Mal pro Woche",
            "3-4 Mal pro Woche",
            "Fast täglich",
            "Mehrmals täglich"
          ],
          riskIndicator: ["Fast täglich", "Mehrmals täglich"]
        },
        {
          id: "nuts_legumes",
          question: "Wie oft essen Sie Nüsse oder Hülsenfrüchte?",
          type: "select",
          options: [
            "Täglich",
            "4-5 Mal pro Woche",
            "2-3 Mal pro Woche",
            "Einmal pro Woche",
            "Selten oder nie"
          ],
          riskIndicator: ["Einmal pro Woche", "Selten oder nie"]
        },
        {
          id: "fish_consumption",
          question: "Wie oft essen Sie Fisch (besonders fettreichen Fisch)?",
          type: "select",
          options: [
            "3+ Mal pro Woche",
            "2 Mal pro Woche",
            "Einmal pro Woche",
            "2-3 Mal pro Monat",
            "Selten oder nie"
          ],
          riskIndicator: ["2-3 Mal pro Monat", "Selten oder nie"]
        }
      ]
    },
    {
      category: "Körperliche Aktivität & Bewegung",
      icon: <Activity className="w-6 h-6" />,
      questions: [
        {
          id: "daily_steps",
          question: "Wie viele Schritte gehen Sie durchschnittlich pro Tag?",
          type: "select",
          options: [
            "10.000+ Schritte",
            "7.000-10.000 Schritte",
            "5.000-7.000 Schritte",
            "3.000-5.000 Schritte",
            "Weniger als 3.000 Schritte"
          ],
          riskIndicator: ["3.000-5.000 Schritte", "Weniger als 3.000 Schritte"]
        },
        {
          id: "strength_training",
          question: "Wie oft betreiben Sie Krafttraining pro Woche?",
          type: "select",
          options: [
            "3+ Mal pro Woche",
            "2 Mal pro Woche",
            "Einmal pro Woche",
            "Gelegentlich",
            "Nie"
          ],
          riskIndicator: ["Gelegentlich", "Nie"]
        },
        {
          id: "cardio_exercise",
          question: "Wie oft betreiben Sie Ausdauersport (mindestens 30 Min)?",
          type: "select",
          options: [
            "Täglich",
            "5-6 Mal pro Woche",
            "3-4 Mal pro Woche",
            "1-2 Mal pro Woche",
            "Selten oder nie"
          ],
          riskIndicator: ["1-2 Mal pro Woche", "Selten oder nie"]
        },
        {
          id: "sitting_time",
          question: "Wie viele Stunden sitzen Sie täglich?",
          type: "select",
          options: [
            "Weniger als 4 Stunden",
            "4-6 Stunden",
            "6-8 Stunden",
            "8-10 Stunden",
            "Mehr als 10 Stunden"
          ],
          riskIndicator: ["8-10 Stunden", "Mehr als 10 Stunden"]
        }
      ]
    },
    {
      category: "Soziale Verbindungen & Lebenssinn",
      icon: <Heart className="w-6 h-6" />,
      questions: [
        {
          id: "social_support",
          question: "Wie stark ist Ihr soziales Unterstützungsnetzwerk?",
          type: "select",
          options: [
            "Sehr stark - viele enge Freunde und Familie",
            "Stark - gute soziale Kontakte",
            "Durchschnittlich - einige verlässliche Kontakte",
            "Schwach - wenige enge Kontakte",
            "Sehr schwach - oft einsam"
          ],
          riskIndicator: ["Schwach - wenige enge Kontakte", "Sehr schwach - oft einsam"]
        },
        {
          id: "community_involvement",
          question: "Wie aktiv sind Sie in Ihrer Gemeinde/Vereinen?",
          type: "select",
          options: [
            "Sehr aktiv - mehrere Engagements",
            "Aktiv - regelmäßiges Engagement",
            "Gelegentlich aktiv",
            "Wenig aktiv",
            "Gar nicht aktiv"
          ],
          riskIndicator: ["Wenig aktiv", "Gar nicht aktiv"]
        },
        {
          id: "life_purpose",
          question: "Wie stark empfinden Sie einen Lebenssinn/Zweck?",
          type: "select",
          options: [
            "Sehr stark - klarer Lebenszweck",
            "Stark - meist sinnvoll",
            "Durchschnittlich - manchmal sinnvoll",
            "Schwach - oft sinnlos",
            "Sehr schwach - kaum Lebenssinn"
          ],
          riskIndicator: ["Schwach - oft sinnlos", "Sehr schwach - kaum Lebenssinn"]
        },
        {
          id: "relationship_quality",
          question: "Wie bewerten Sie die Qualität Ihrer engsten Beziehungen?",
          type: "select",
          options: [
            "Ausgezeichnet - sehr erfüllend",
            "Gut - überwiegend positiv",
            "Durchschnittlich - gemischt",
            "Schlecht - oft konfliktreich",
            "Sehr schlecht - isoliert/problematisch"
          ],
          riskIndicator: ["Schlecht - oft konfliktreich", "Sehr schlecht - isoliert/problematisch"]
        }
      ]
    },
    {
      category: "Stoffwechsel & Biomarker",
      icon: <TrendingUp className="w-6 h-6" />,
      questions: [
        {
          id: "energy_levels",
          question: "Wie sind Ihre Energielevel über den Tag?",
          type: "select",
          options: [
            "Konstant hoch den ganzen Tag",
            "Meist gut mit kleinen Tiefs",
            "Durchschnittlich mit nachmittäglichen Tiefs",
            "Oft müde, brauche Stimulanzien",
            "Chronisch müde trotz genug Schlaf"
          ],
          riskIndicator: ["Oft müde, brauche Stimulanzien", "Chronisch müde trotz genug Schlaf"]
        },
        {
          id: "blood_sugar",
          question: "Haben Sie Probleme mit dem Blutzucker?",
          type: "select",
          options: [
            "Nein, stabile Werte",
            "Gelegentliche Schwankungen",
            "Prädiabetes diagnostiziert",
            "Diabetes Typ 2",
            "Insulinresistenz bekannt"
          ],
          riskIndicator: ["Prädiabetes diagnostiziert", "Diabetes Typ 2", "Insulinresistenz bekannt"]
        },
        {
          id: "cholesterol",
          question: "Wie sind Ihre Cholesterinwerte (falls bekannt)?",
          type: "select",
          options: [
            "Optimal (unter 200 mg/dl)",
            "Grenzwertig (200-240 mg/dl)",
            "Erhöht (über 240 mg/dl)",
            "Nehme Cholesterinsenker",
            "Werte unbekannt"
          ],
          riskIndicator: ["Erhöht (über 240 mg/dl)", "Nehme Cholesterinsenker"]
        },
        {
          id: "inflammation_markers",
          question: "Haben Sie Anzeichen chronischer Entzündungen?",
          type: "select",
          options: [
            "Keine - fühle mich großartig",
            "Gelegentliche Gelenkschmerzen",
            "Regelmäßige Entzündungszeichen",
            "Chronische Entzündungskrankheit",
            "Multiple Entzündungsprobleme"
          ],
          riskIndicator: ["Chronische Entzündungskrankheit", "Multiple Entzündungsprobleme"]
        }
      ]
    },
    {
      category: "Schlaf & Erholung",
      icon: <Moon className="w-6 h-6" />,
      questions: [
        {
          id: "sleep_duration",
          question: "Wie viele Stunden schlafen Sie pro Nacht?",
          type: "select",
          options: [
            "7-9 Stunden regelmäßig",
            "6-7 Stunden",
            "5-6 Stunden",
            "Weniger als 5 Stunden",
            "Sehr unregelmäßig"
          ],
          riskIndicator: ["Weniger als 5 Stunden", "Sehr unregelmäßig"]
        },
        {
          id: "sleep_quality",
          question: "Wie bewerten Sie Ihre Schlafqualität?",
          type: "select",
          options: [
            "Ausgezeichnet - wache erfrischt auf",
            "Gut - meist erholsam",
            "Durchschnittlich - gemischt",
            "Schlecht - oft unruhig",
            "Sehr schlecht - chronische Schlafprobleme"
          ],
          riskIndicator: ["Schlecht - oft unruhig", "Sehr schlecht - chronische Schlafprobleme"]
        },
        {
          id: "stress_management",
          question: "Wie gut können Sie mit Stress umgehen?",
          type: "select",
          options: [
            "Sehr gut - bleibe gelassen",
            "Gut - meist unter Kontrolle",
            "Durchschnittlich - manchmal überwältigt",
            "Schlecht - oft gestresst",
            "Sehr schlecht - chronisch überfordert"
          ],
          riskIndicator: ["Schlecht - oft gestresst", "Sehr schlecht - chronisch überfordert"]
        }
      ]
    },
    {
      category: "Lebensumgebung & Gewohnheiten",
      icon: <Home className="w-6 h-6" />,
      questions: [
        {
          id: "smoking",
          question: "Rauchen Sie oder haben Sie geraucht?",
          type: "select",
          options: [
            "Nie geraucht",
            "Ex-Raucher (>10 Jahre)",
            "Ex-Raucher (5-10 Jahre)",
            "Ex-Raucher (<5 Jahre)",
            "Aktueller Raucher"
          ],
          riskIndicator: ["Ex-Raucher (<5 Jahre)", "Aktueller Raucher"]
        },
        {
          id: "alcohol_consumption",
          question: "Wie oft trinken Sie Alkohol?",
          type: "select",
          options: [
            "Nie oder sehr selten",
            "1-2 Gläser pro Woche",
            "3-7 Gläser pro Woche",
            "8-14 Gläser pro Woche",
            "Mehr als 14 Gläser pro Woche"
          ],
          riskIndicator: ["8-14 Gläser pro Woche", "Mehr als 14 Gläser pro Woche"]
        },
        {
          id: "air_quality",
          question: "Wie ist die Luftqualität in Ihrer Umgebung?",
          type: "select",
          options: [
            "Sehr gut - ländlich/naturnah",
            "Gut - Vorstadt",
            "Durchschnittlich - kleinere Stadt",
            "Schlecht - Großstadt",
            "Sehr schlecht - hohe Luftverschmutzung"
          ],
          riskIndicator: ["Schlecht - Großstadt", "Sehr schlecht - hohe Luftverschmutzung"]
        },
        {
          id: "sun_exposure",
          question: "Wie ist Ihre Sonneneinstrahlung/Vitamin D?",
          type: "select",
          options: [
            "Optimal - regelmäßig draußen, supplementiere",
            "Gut - oft draußen",
            "Durchschnittlich - gelegentlich draußen",
            "Wenig - meist drinnen",
            "Sehr wenig - kaum Sonne"
          ],
          riskIndicator: ["Wenig - meist drinnen", "Sehr wenig - kaum Sonne"]
        }
      ]
    }
  ];

  const calculateStrategicBiologicalAge = () => {
    const chronologicalAge = parseInt(answers.chronological_age) || 35;
    const height = parseInt(answers.height) || 170;
    const weight = parseInt(answers.weight) || 70;
    const bmi = weight / ((height / 100) ** 2);
    
    let ageModifier = 0;
    let detectedRiskFactors = [];
    let positiveFactors = [];

    // Strategische Gewichtung für optimale Conversion-Verteilung
    const scoreMapping = {
      // Körperkomposition (höhere Gewichtung)
      weight_stability: {
        "Sehr stabil (±2kg)": -2,
        "Leichte Schwankungen (±3-5kg)": 0,
        "Moderate Veränderungen (±6-10kg)": 3,
        "Starke Schwankungen (±11-15kg)": 6,
        "Extreme Veränderungen (>15kg)": 8
      },
      muscle_mass: {
        "Sehr hoch - regelmäßiges Krafttraining": -3,
        "Hoch - gute Muskulatur": -1,
        "Durchschnittlich für mein Alter": 1,
        "Niedrig - wenig Muskeln": 4,
        "Sehr niedrig - Muskelverlust spürbar": 7
      },
      
      // Ernährung (mediterrane Diät Score)
      vegetable_intake: {
        "5+ Portionen täglich": -3,
        "3-4 Portionen täglich": -1,
        "2 Portionen täglich": 1,
        "1 Portion täglich": 3,
        "Weniger als 1 Portion täglich": 5
      },
      olive_oil: {
        "Täglich als Hauptfettquelle": -2,
        "Mehrmals pro Woche": -1,
        "Gelegentlich": 1,
        "Selten": 2,
        "Nie": 3
      },
      processed_food: {
        "Nie oder sehr selten": -2,
        "1-2 Mal pro Woche": 0,
        "3-4 Mal pro Woche": 2,
        "Fast täglich": 4,
        "Mehrmals täglich": 6
      },
      
      // Bewegung (Blue Zones Prinzip)
      daily_steps: {
        "10.000+ Schritte": -3,
        "7.000-10.000 Schritte": -1,
        "5.000-7.000 Schritte": 1,
        "3.000-5.000 Schritte": 3,
        "Weniger als 3.000 Schritte": 5
      },
      strength_training: {
        "3+ Mal pro Woche": -2,
        "2 Mal pro Woche": -1,
        "Einmal pro Woche": 1,
        "Gelegentlich": 2,
        "Nie": 4
      },
      sitting_time: {
        "Weniger als 4 Stunden": -2,
        "4-6 Stunden": 0,
        "6-8 Stunden": 2,
        "8-10 Stunden": 4,
        "Mehr als 10 Stunden": 6
      },
      
      // Soziale Verbindungen
      social_support: {
        "Sehr stark - viele enge Freunde und Familie": -3,
        "Stark - gute soziale Kontakte": -1,
        "Durchschnittlich - einige verlässliche Kontakte": 1,
        "Schwach - wenige enge Kontakte": 3,
        "Sehr schwach - oft einsam": 6
      },
      life_purpose: {
        "Sehr stark - klarer Lebenszweck": -2,
        "Stark - meist sinnvoll": -1,
        "Durchschnittlich - manchmal sinnvoll": 1,
        "Schwach - oft sinnlos": 3,
        "Sehr schwach - kaum Lebenssinn": 5
      },
      
      // Biomarker
      energy_levels: {
        "Konstant hoch den ganzen Tag": -3,
        "Meist gut mit kleinen Tiefs": -1,
        "Durchschnittlich mit nachmittäglichen Tiefs": 2,
        "Oft müde, brauche Stimulanzien": 4,
        "Chronisch müde trotz genug Schlaf": 6
      },
      blood_sugar: {
        "Nein, stabile Werte": -2,
        "Gelegentliche Schwankungen": 1,
        "Prädiabetes diagnostiziert": 4,
        "Diabetes Typ 2": 7,
        "Insulinresistenz bekannt": 6
      },
      
      // Lifestyle-Faktoren
      smoking: {
        "Nie geraucht": -2,
        "Ex-Raucher (>10 Jahre)": 0,
        "Ex-Raucher (5-10 Jahre)": 2,
        "Ex-Raucher (<5 Jahre)": 4,
        "Aktueller Raucher": 8
      },
      sleep_quality: {
        "Ausgezeichnet - wache erfrischt auf": -3,
        "Gut - meist erholsam": -1,
        "Durchschnittlich - gemischt": 1,
        "Schlecht - oft unruhig": 3,
        "Sehr schlecht - chronische Schlafprobleme": 6
      },
      stress_management: {
        "Sehr gut - bleibe gelassen": -2,
        "Gut - meist unter Kontrolle": -1,
        "Durchschnittlich - manchmal überwältigt": 1,
        "Schlecht - oft gestresst": 3,
        "Sehr schlecht - chronisch überfordert": 5
      }
    };

    // BMI-Anpassung (optimaler Bereich um 22-25)
    if (bmi < 18.5) ageModifier += 3;
    else if (bmi >= 18.5 && bmi < 25) ageModifier -= 1;
    else if (bmi >= 25 && bmi < 30) ageModifier += 2;
    else if (bmi >= 30) ageModifier += 5;

    // Berechnung der Hauptfaktoren
    Object.keys(scoreMapping).forEach(questionId => {
      const answer = answers[questionId];
      if (answer && scoreMapping[questionId][answer] !== undefined) {
        const score = scoreMapping[questionId][answer];
        ageModifier += score;
        
        const question = questionCategories
          .flatMap(cat => cat.questions)
          .find(q => q.id === questionId);
        
        const category = questionCategories.find(cat => 
          cat.questions.some(q => q.id === questionId)
        )?.category;

        // Positive Faktoren sammeln
        if (score <= -2) {
          positiveFactors.push({
            category,
            strength: answer,
            impact: score <= -3 ? 'excellent' : 'good'
          });
        }
        
        // Risikofaktoren identifizieren
        if (question?.riskIndicator?.includes(answer)) {
          detectedRiskFactors.push({
            category,
            issue: answer,
            severity: score >= 6 ? 'high' : score >= 3 ? 'medium' : 'low'
          });
        }
      }
    });

    // Strategische Basis-Anpassung für optimale Verteilung
    let strategicModifier = 0;
    const riskCount = detectedRiskFactors.length;
    const positiveCount = positiveFactors.length;
    
    // Angepasste Logik für 25/35/25/15 Verteilung
    if (positiveCount >= 5 && riskCount <= 1) {
      strategicModifier = -2; // Elite 25%
    } else if (positiveCount >= 3 && riskCount <= 2) {
      strategicModifier = 1; // Verbesserung 35%
    } else if (riskCount >= 3) {
      strategicModifier = 3; // Intervention 25%
    } else {
      strategicModifier = 2; // Standard
    }

    ageModifier += strategicModifier;

    // Finale Berechnung mit realistischen Grenzen
    const calculatedBioAge = Math.max(
      chronologicalAge - 8, 
      Math.min(chronologicalAge + 15, chronologicalAge + ageModifier)
    );
    
    setRiskFactors(detectedRiskFactors);
    return Math.round(calculatedBioAge);
  };

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextStep = () => {
    if (currentStep < questionCategories.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const bioAge = calculateStrategicBiologicalAge();
      setBiologicalAge(bioAge);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setAnswers({});
    setBiologicalAge(null);
    setRiskFactors([]);
    setShowWaitlist(false);
  };

  const getStrategicUrgencyLevel = () => {
    const chronoAge = parseInt(answers.chronological_age) || 35;
    const difference = biologicalAge - chronoAge;
    
    if (difference <= -3) return { 
      level: "ELITE-PERFORMER", 
      color: "text-teal-700", 
      bg: "bg-teal-50 border-teal-300",
      message: "Außergewöhnliche Langlebigkeit - maximieren Sie Ihren Vorteil",
      tier: "elite"
    };
    if (difference <= 0) return { 
      level: "ÜBERDURCHSCHNITTLICH", 
      color: "text-blue-700", 
      bg: "bg-blue-50 border-blue-300",
      message: "Starke Grundlage - großes Optimierungspotenzial",
      tier: "good"
    };
    if (difference <= 3) return { 
      level: "VERBESSERUNGSPOTENZIAL", 
      color: "text-orange-700", 
      bg: "bg-orange-50 border-orange-300",
      message: "Frühe Warnung - jetzt optimieren für beste Ergebnisse",
      tier: "improvement"
    };
    if (difference <= 7) return { 
      level: "INTERVENTION EMPFOHLEN", 
      color: "text-red-700", 
      bg: "bg-red-50 border-red-300",
      message: "Deutliche Alterungsbeschleunigung - Intervention nötig",
      tier: "intervention"
    };
    return { 
      level: "KRITISCHE WARNUNG", 
      color: "text-red-800", 
      bg: "bg-red-100 border-red-400",
      message: "Sofortiger Handlungsbedarf - intensive Intervention erforderlich",
      tier: "critical"
    };
  };

  const calculateBMI = () => {
    const height = parseInt(answers.height) || 170;
    const weight = parseInt(answers.weight) || 70;
    return (weight / ((height / 100) ** 2)).toFixed(1);
  };

  if (biologicalAge !== null && !showWaitlist) {
    const chronoAge = parseInt(answers.chronological_age) || 35;
    const difference = biologicalAge - chronoAge;
    const urgency = getStrategicUrgencyLevel();
    const bmi = calculateBMI();
    const projectedAge70 = biologicalAge + (70 - chronoAge) * (difference > 0 ? 1.2 : 0.8);
    
    const positiveFactors = [];
    Object.keys(answers).forEach(questionId => {
      const answer = answers[questionId];
      const strengthMapping = {
        daily_steps: { "10.000+ Schritte": "Optimale tägliche Bewegung" },
        vegetable_intake: { "5+ Portionen täglich": "Exzellente Nährstoffversorgung" },
        muscle_mass: { "Sehr hoch - regelmäßiges Krafttraining": "Starke Muskulatur" },
        social_support: { "Sehr stark - viele enge Freunde und Familie": "Starkes soziales Netzwerk" },
        sleep_quality: { "Ausgezeichnet - wache erfrischt auf": "Optimale Schlafqualität" },
        stress_management: { "Sehr gut - bleibe gelassen": "Exzellentes Stressmanagement" },
        smoking: { "Nie geraucht": "Rauchfrei" },
        life_purpose: { "Sehr stark - klarer Lebenszweck": "Starker Lebenssinn" }
      };
      
      if (strengthMapping[questionId] && strengthMapping[questionId][answer]) {
        positiveFactors.push(strengthMapping[questionId][answer]);
      }
    });

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Header mit Lyvo Health Branding */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-teal-400 rounded-sm"></div>
                <div className="w-4 h-4 bg-slate-800 rounded-sm"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">LYVO</div>
                <div className="text-sm text-teal-600 font-medium -mt-1">HEALTH</div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Ihre Healthspan-Analyse</h1>
          <p className="text-sm text-slate-600 mb-4">Rejuvenate your Health</p>
          <div className={`inline-block px-6 py-3 rounded-lg border-2 ${urgency.bg} ${urgency.color} font-bold text-lg`}>
            {urgency.level}
          </div>
          <p className="text-slate-600 mt-2">{urgency.message}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200">
            <h3 className="text-lg font-semibold mb-4 text-slate-800">Altersanalyse</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Chronologisch:</span>
                <span className="text-xl font-bold text-slate-800">{chronoAge} Jahre</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Biologisch:</span>
                <span className="text-2xl font-bold text-teal-600">{biologicalAge} Jahre</span>
              </div>
              <div className="flex justify-between items-center border-t border-teal-200 pt-2">
                <span className="text-slate-600">Unterschied:</span>
                <span className={`text-lg font-bold ${difference > 0 ? 'text-red-600' : 'text-teal-600'}`}>
                  {difference > 0 ? `+${difference}` : difference} Jahre
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-semibold mb-4 text-slate-800">Körperkomposition</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">BMI:</span>
                <span className="text-xl font-bold text-slate-800">{bmi}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Gewicht:</span>
                <span className="text-lg text-slate-700">{answers.weight || 'N/A'} kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Größe:</span>
                <span className="text-lg text-slate-700">{answers.height || 'N/A'} cm</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
            <h3 className="text-lg font-semibold mb-4 text-slate-800">Healthspan-Score</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Positive Faktoren:</span>
                <span className="text-xl font-bold text-teal-600">{positiveFactors.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Risikofaktoren:</span>
                <span className="text-xl font-bold text-orange-600">{riskFactors.length}</span>
              </div>
              <div className="flex justify-between items-center border-t border-orange-200 pt-2">
                <span className="text-slate-600">Prognose 70:</span>
                <span className="text-lg font-bold text-slate-800">{Math.round(projectedAge70)} Jahre</span>
              </div>
            </div>
          </div>
        </div>

        {positiveFactors.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-teal-800">
              <CheckCircle className="w-6 h-6 inline mr-2" />
              Ihre Langlebigkeitsstärken ({positiveFactors.length})
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {positiveFactors.map((strength, index) => (
                <div key={index} className="p-4 rounded-lg bg-teal-50 border-l-4 border-teal-500">
                  <div className="text-sm text-teal-700 font-medium">{strength}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {riskFactors.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">
              <AlertTriangle className="w-6 h-6 inline mr-2" />
              Optimierungsbereiche ({riskFactors.length})
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {riskFactors.map((risk, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${
                  risk.severity === 'high' ? 'bg-red-50 border-red-500' : 
                  risk.severity === 'medium' ? 'bg-orange-50 border-orange-500' : 
                  'bg-yellow-50 border-yellow-500'
                }`}>
                  <div className="font-semibold text-sm text-slate-700">{risk.category}</div>
                  <div className={`text-sm ${
                    risk.severity === 'high' ? 'text-red-700' : 
                    risk.severity === 'medium' ? 'text-orange-700' : 
                    'text-yellow-700'
                  }`}>
                    {risk.issue}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gradient-to-r from-slate-800 to-teal-700 text-white p-8 rounded-xl mb-6">
          <div className="text-center">
            <Star className="w-12 h-12 mx-auto mb-4 text-orange-300" />
            <h3 className="text-2xl font-bold mb-4">
              {urgency.tier === 'elite' ? 'Lyvo Health Elite Programm' : 
               urgency.tier === 'good' ? 'Lyvo Health Premium Programm' :
               urgency.tier === 'improvement' ? 'Lyvo Health Boost Programm' :
               'Lyvo Health Intensive Programm'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-teal-300" />
                <div className="font-semibold">Präzisionsanalyse</div>
                <div>Biomarker-Tests und personalisierte Protokolle</div>
              </div>
              <div>
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-teal-300" />
                <div className="font-semibold">
                  {urgency.tier === 'elite' ? 'Vorsprung maximieren' : 
                   urgency.tier === 'critical' ? 'Sofort-Intervention' : 
                   'Altern verlangsamen'}
                </div>
                <div>Wissenschaftlich fundierte Langlebigkeitsstrategien</div>
              </div>
              <div>
                <Heart className="w-8 h-8 mx-auto mb-2 text-teal-300" />
                <div className="font-semibold">Expertenbetreuung</div>
                <div>Persönlicher Longevity-Coach</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <div className="text-orange-800 font-semibold">⚡ Exklusiver Frühzugang</div>
            <div className="text-orange-700 text-sm">
              {urgency.tier === 'elite' 
                ? "Schließen Sie sich 5% der Elite-Performer an" 
                : urgency.tier === 'critical'
                ? "Prioritärer Zugang für kritische Fälle"
                : "Über 47.000 Menschen verbessern bereits ihre Healthspan"
              }
            </div>
          </div>
          
          <a 
            href="https://lyvohealth.com/?page_id=189" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg inline-block text-center ${
              urgency.tier === 'elite' ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800' :
              urgency.tier === 'critical' ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800' :
              'bg-gradient-to-r from-slate-800 to-teal-700 text-white hover:from-slate-900 hover:to-teal-800'
            }`}
          >
            {urgency.tier === 'elite' ? 'Lyvo Health Elite beitreten - Vorteil maximieren' :
             urgency.tier === 'critical' ? 'Sofort-Intervention starten - Platz sichern' :
             'Lyvo Health Programm starten - Warteliste beitreten'}
          </a>
          
          <div className="text-xs text-slate-500">
            Wissenschaftlich fundiert • Keine Bindung • 30 Tage Geld-zurück-Garantie
          </div>
          
          <button
            onClick={restart}
            className="text-slate-600 hover:text-slate-800 text-sm underline"
          >
            Assessment wiederholen
          </button>
        </div>
      </div>
    );
  }

  if (showWaitlist) {
    const urgency = getStrategicUrgencyLevel();
    
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          {/* Lyvo Health Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-teal-400 rounded-sm"></div>
                <div className="w-4 h-4 bg-slate-800 rounded-sm"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">LYVO</div>
                <div className="text-sm text-teal-600 font-medium -mt-1">HEALTH</div>
              </div>
            </div>
          </div>
          
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-teal-500" />
          <h2 className="text-2xl font-bold mb-4 text-slate-800">
            {urgency.tier === 'elite' ? 'Elite-Zugang gesichert!' : 
             urgency.tier === 'critical' ? 'Prioritätszugang bestätigt!' :
             'Wartelisten-Platz gesichert!'}
          </h2>
          <div className={`border p-6 rounded-lg mb-6 ${
            urgency.tier === 'elite' ? 'bg-teal-50 border-teal-200' :
            urgency.tier === 'critical' ? 'bg-red-50 border-red-200' :
            'bg-slate-50 border-slate-200'
          }`}>
            <div className={urgency.tier === 'elite' ? 'text-teal-800' : urgency.tier === 'critical' ? 'text-red-800' : 'text-slate-800'}>
              <div className="font-semibold mb-2">
                Sie sind jetzt für das {urgency.tier === 'elite' ? 'Elite' : urgency.tier === 'critical' ? 'Intensiv' : 'Premium'}-Programm vorgemerkt!
              </div>
              <div className="text-sm">
                Erwartete Kontaktaufnahme: {urgency.tier === 'critical' ? '24-48 Stunden' : '1-2 Wochen'}<br/>
                Position: #{urgency.tier === 'elite' ? '2.847' : urgency.tier === 'critical' ? '1.234' : '47.239'} 
                ({urgency.tier === 'critical' ? 'Priorität!' : 'bewegt sich schnell!'})
              </div>
            </div>
          </div>
          
          <div className="space-y-4 text-left">
            <h3 className="font-semibold text-slate-800">Ihre nächsten Schritte:</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  {urgency.tier === 'elite' 
                    ? 'Exklusive Elite-Strategien für Top-Performer'
                    : urgency.tier === 'critical'
                    ? 'Sofort-Intervention mit Longevity-Spezialisten'
                    : 'Personalisierte Healthspan-Optimierung'}
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>Fortgeschrittene Biomarker-Analyse und Tracking</div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  {urgency.tier === 'elite' 
                    ? 'Zugang zu neuesten Longevity-Technologien'
                    : 'Kontinuierliche Optimierung und Anpassung'}
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={restart}
            className="w-full mt-6 bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
          >
            Neues Assessment durchführen
          </button>
        </div>
      </div>
    );
  }

  const currentCategory = questionCategories[currentStep];
  const allQuestionsAnswered = currentCategory.questions.every(q => answers[q.id]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            {/* Lyvo Health Header mit Logo */}
            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 bg-teal-400 rounded-sm"></div>
                  <div className="w-4 h-4 bg-slate-800 rounded-sm"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">LYVO</div>
                  <div className="text-sm text-teal-600 font-medium -mt-1">HEALTH</div>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-slate-800">Healthspan Assessment</h1>
            <p className="text-slate-600">Rejuvenate your Health</p>
            <p className="text-sm text-slate-500">Wissenschaftliche Langlebigkeitsanalyse in 5 Minuten</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-600">Schritt {currentStep + 1} von {questionCategories.length}</div>
            <div className="text-xs text-teal-600">50.000+ abgeschlossen</div>
          </div>
        </div>
        
        <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
          <div 
            className="bg-gradient-to-r from-teal-500 to-slate-700 h-3 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / questionCategories.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-6 text-teal-600">
          {currentCategory.icon}
          <h2 className="text-2xl font-semibold ml-3 text-slate-800">{currentCategory.category}</h2>
        </div>

        <div className="space-y-8">
          {currentCategory.questions.map((question) => (
            <div key={question.id} className="space-y-3">
              <div>
                <label className="block text-slate-800 font-semibold text-lg mb-1">
                  {question.question}
                </label>
                {question.subtitle && (
                  <p className="text-sm text-slate-500">{question.subtitle}</p>
                )}
              </div>
              
              {question.type === "number" ? (
                <input
                  type="number"
                  min={question.min}
                  max={question.max}
                  value={answers[question.id] || ''}
                  onChange={(e) => handleAnswer(question.id, e.target.value)}
                  className="w-full p-4 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-lg"
                  placeholder={question.id === 'height' ? 'z.B. 175' : question.id === 'weight' ? 'z.B. 70' : 'Geben Sie Ihr Alter ein'}
                />
              ) : (
                <div className="space-y-2">
                  {question.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(question.id, option)}
                      className={`w-full p-4 text-left border-2 rounded-xl transition-all ${
                        answers[question.id] === option
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      } ${question.riskIndicator?.includes(option) ? 'hover:border-orange-300' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {answers[question.id] === option && (
                          <CheckCircle className="w-5 h-5 text-teal-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center px-6 py-3 text-slate-600 border-2 border-slate-300 rounded-xl hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Zurück
        </button>
        
        <button
          onClick={nextStep}
          disabled={!allQuestionsAnswered}
          className="flex items-center px-8 py-3 bg-gradient-to-r from-teal-600 to-slate-700 text-white rounded-xl hover:from-teal-700 hover:to-slate-800 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-all transform hover:scale-105"
        >
          {currentStep === questionCategories.length - 1 ? 'Healthspan-Analyse starten' : 'Weiter'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
      
      <div className="mt-6 text-center text-xs text-slate-500">
        🔒 Ihre Daten sind verschlüsselt und werden niemals geteilt
      </div>
    </div>
  );
};

export default LyvoHealthApp;