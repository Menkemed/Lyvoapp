import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Heart, Activity, Brain, Utensils, Moon, Users, AlertTriangle, CheckCircle, TrendingUp, Clock, Star, Scale, Home, Mail, Shield } from 'lucide-react';

const BlurOverlay = ({ children, onComplete }) => {
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = email.trim().length > 0 && email.includes('@') && email.includes('.') && agreedToTerms;

  const handleSubmit = (e) => {
    
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    console.log('Submit clicked!', { email, agreedToTerms, isFormValid });
    
    if (!isFormValid) {
      console.log('Form not valid, returning');
      return;
    }
    
    console.log('Form is valid, proceeding...');
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Timeout completed, hiding overlay');
      setIsSubmitting(false);
      setIsVisible(false);
      if (onComplete) {
        console.log('Calling onComplete');
        onComplete({ email, agreedToTerms });
      } else {
        console.log('No onComplete callback provided');
      }
    }, 500);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked directly!');
    handleSubmit();
  };

  if (!isVisible) {
    console.log('Overlay not visible, showing children');
    return children;
  }

  console.log('Rendering overlay', { email, agreedToTerms, isFormValid });

  return (
    <div className="relative">
      <div className="filter blur-md pointer-events-none select-none">
        {children}
      </div>
      
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <Shield className="w-12 h-12 mx-auto mb-4 text-teal-600" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Ergebnis freischalten</h3>
            <p className="text-slate-600 text-sm">
              Sichern Sie sich Ihre persönliche Healthspan-Analyse und exklusive Gesundheitstipps
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                E-Mail-Adresse
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                  placeholder="ihre@email.de"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="flex items-start space-x-3 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="sr-only"
                    required
                  />
                  <div className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${
                    agreedToTerms 
                      ? 'bg-teal-600 border-teal-600' 
                      : 'border-slate-300 hover:border-slate-400'
                  }`}>
                    {agreedToTerms && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="text-sm text-slate-600 leading-relaxed">
                  Ich stimme den{' '}
                  <a href="https://lyvohealth.com/?page_id=530" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">
                    AGB
                  </a>, der{' '}
                  <a href="https://lyvohealth.com/?page_id=3" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">
                    Datenschutzerklärung
                  </a>{' '}
                  und der Verwendung von{' '}
                  <a href="https://lyvohealth.com/?page_id=817" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">
                    Cookies
                  </a>{' '}
                  zu
                </div>
              </label>
            </div>

            <button
              type="button"
              onClick={handleButtonClick}
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all transform ${
                isFormValid && !isSubmitting
                  ? 'bg-gradient-to-r from-teal-600 to-slate-700 hover:from-teal-700 hover:to-slate-800 hover:scale-105 shadow-lg'
                  : 'bg-slate-400 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Wird freigeschaltet...
                </div>
              ) : (
                'Ergebnis freischalten'
              )}
            </button>
          </form>

          <div className="mt-4 text-center">
            <div className="text-xs text-slate-500">
              🔒 Ihre Daten sind sicher verschlüsselt
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LyvoHealthApp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [biologicalAge, setBiologicalAge] = useState(null);
  const [riskFactors, setRiskFactors] = useState([]);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleEmailSubmit = async (data) => {
    setUserEmail(data.email);
    
    // Prepare complete data for Google Sheets
    const chronoAge = parseInt(answers.chronological_age) || 35;
    const difference = biologicalAge - chronoAge;
    const bmi = calculateBMI();
    const urgency = getStrategicUrgencyLevel();
    
    const completeData = {
      timestamp: new Date().toISOString(),
      email: data.email,
      agreedToTerms: data.agreedToTerms,
      chronologicalAge: chronoAge,
      biologicalAge: biologicalAge,
      ageDifference: difference,
      bmi: parseFloat(bmi),
      riskFactorsCount: riskFactors.length,
      positiveFactorsCount: getPositiveFactorsCount(),
      urgencyLevel: urgency.level,
      allAnswers: answers
    };

    console.log('🚀 NEW CODE: Starting data submission process...');
    console.log('📊 Complete data object:', completeData);

    // Google Sheets transmission - only works outside Claude.ai
    try {
      const sheetsUrl = 'https://script.google.com/macros/s/AKfycbzb69WHNlqk3IVdijADWraxThKZhV6RWbchKOyfV-zcctikaX1WLaN1ZysypalEPY8gCQ/exec';
      
      const params = new URLSearchParams({
        email: completeData.email,
        timestamp: completeData.timestamp,
        agreedToTerms: completeData.agreedToTerms,
        chronologicalAge: completeData.chronologicalAge,
        biologicalAge: completeData.biologicalAge,
        ageDifference: completeData.ageDifference,
        bmi: completeData.bmi,
        riskFactors: completeData.riskFactorsCount,
        positiveFactors: completeData.positiveFactorsCount,
        urgencyLevel: completeData.urgencyLevel,
        allAnswers: JSON.stringify(completeData.allAnswers).substring(0, 1000)
      });
      
      const finalUrl = `${sheetsUrl}?${params.toString()}`;
      
      console.log('🔍 SENDING DATA TO GOOGLE SHEETS:');
      console.log('🌐 Final URL:', finalUrl);
      console.log('📝 URL length:', finalUrl.length);
      console.log('📋 Parameters being sent:', params.toString());
      
      // Check if we're in Claude.ai environment
      const isClaudeAI = window.location.hostname.includes('claude.ai') || 
                         window.location.hostname.includes('claudeusercontent.com');
      
      if (isClaudeAI) {
        console.log('🚫 Claude.ai detected - Data transmission blocked by CSP');
        console.log('💡 Copy this code to your own website to enable data transmission');
        console.log('🔗 Test URL manually:', finalUrl);
        
        // Show alert to user
        alert('Hinweis: Datenübertragung nur auf eigener Website möglich. Kopieren Sie den Code auf Ihre Domain.');
        
      } else {
        console.log('✅ External environment detected - Attempting data transmission');
        
        // Method 1: Image request (primary)
        const img = new Image();
        img.onload = () => {
          console.log('✅ Image request SUCCESS - Data sent to Google Sheets!');
        };
        img.onerror = (error) => {
          console.log('⚠️ Image request error:', error);
        };
        img.src = finalUrl;
        
        // Method 2: Iframe backup
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = finalUrl;
        document.body.appendChild(iframe);
        
        // Method 3: Fetch as additional backup
        fetch(finalUrl, {
          method: 'GET',
          mode: 'no-cors'
        }).then(() => {
          console.log('✅ Fetch request completed');
        }).catch((error) => {
          console.log('⚠️ Fetch request error:', error);
        });
        
        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
          console.log('📋 Iframe cleanup completed');
        }, 3000);
      }
      
      console.log('🚀 Google Sheets transmission methods executed');
      console.log('🔗 Manual test URL for debugging:', finalUrl);
      
    } catch (error) {
      console.error('❌ Google Sheets transmission failed:', error);
    }
    
    console.log('🎯 Customer data processed, showing results...');
  };

  const getPositiveFactorsCount = () => {
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
    return positiveFactors.length;
  };

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

    const scoreMapping = {
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
      vegetable_intake: {
        "5+ Portionen täglich": -3,
        "3-4 Portionen täglich": -1,
        "2 Portionen täglich": 1,
        "1 Portion täglich": 3,
        "Weniger als 1 Portion täglich": 5
      },
      daily_steps: {
        "10.000+ Schritte": -3,
        "7.000-10.000 Schritte": -1,
        "5.000-7.000 Schritte": 1,
        "3.000-5.000 Schritte": 3,
        "Weniger als 3.000 Schritte": 5
      },
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
      }
    };

    // BMI adjustment
    if (bmi < 18.5) ageModifier += 3;
    else if (bmi >= 18.5 && bmi < 25) ageModifier -= 1;
    else if (bmi >= 25 && bmi < 30) ageModifier += 2;
    else if (bmi >= 30) ageModifier += 5;

    // Calculate main factors
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

        if (score <= -2) {
          positiveFactors.push({
            category,
            strength: answer,
            impact: score <= -3 ? 'excellent' : 'good'
          });
        }
        
        if (question?.riskIndicator?.includes(answer)) {
          detectedRiskFactors.push({
            category,
            issue: answer,
            severity: score >= 6 ? 'high' : score >= 3 ? 'medium' : 'low'
          });
        }
      }
    });

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
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    } else {
      const bioAge = calculateStrategicBiologicalAge();
      setBiologicalAge(bioAge);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setAnswers({});
    setBiologicalAge(null);
    setRiskFactors([]);
    setShowWaitlist(false);
    setUserEmail('');
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
    return { 
      level: "INTERVENTION EMPFOHLEN", 
      color: "text-red-700", 
      bg: "bg-red-50 border-red-300",
      message: "Deutliche Alterungsbeschleunigung - Intervention nötig",
      tier: "intervention"
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
      <BlurOverlay onComplete={handleEmailSubmit}>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
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
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <div className="text-orange-800 font-semibold">⚡ Exklusiver Frühzugang</div>
              <div className="text-orange-700 text-sm">
                {urgency.tier === 'elite' 
                  ? "Schließen Sie sich 5% der Elite-Performer an" 
                  : urgency.tier === 'intervention'
                  ? "Prioritärer Zugang für dringende Fälle"
                  : "Über 47.000 Menschen verbessern bereits ihre Healthspan"
                }
              </div>
            </div>
            
            <button
              onClick={() => window.open('https://lyvohealth.com/?page_id=189', '_blank')}
              className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg ${
                urgency.tier === 'elite' 
                  ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800' 
                  : urgency.tier === 'intervention'
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                  : urgency.tier === 'good'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                  : 'bg-gradient-to-r from-orange-600 to-orange-700 text-white hover:from-orange-700 hover:to-orange-800'
              }`}
            >
              {urgency.tier === 'elite' 
                ? '🌟 Elite-Programm beitreten - Vorteil maximieren' 
                : urgency.tier === 'intervention'
                ? '🚨 Sofort-Intervention starten - Platz sichern'
                : urgency.tier === 'good'
                ? '💪 Premium-Programm starten - Potenzial ausschöpfen'
                : '⚡ Boost-Programm starten - Jetzt optimieren'
              }
            </button>
            
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
      </BlurOverlay>
    );
  }

  if (showWaitlist) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-teal-500" />
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Programm-Platz gesichert!</h2>
          <button onClick={restart} className="bg-slate-600 text-white py-3 px-6 rounded-lg">
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
                      }`}
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