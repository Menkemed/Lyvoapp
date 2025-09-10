import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Heart, Activity, Brain, Utensils, Moon, Users, AlertTriangle, CheckCircle, TrendingUp, Clock, Star, Scale, Home, Mail, Shield, Globe } from 'lucide-react';

const translations = {
  de: {
    title: "LYVO HEALTH",
    subtitle: "Rejuvenate your Health",
    assessmentTitle: "Healthspan Assessment",
    scientificAnalysis: "Wissenschaftliche Langlebigkeitsanalyse in 5 Minuten",
    stepOf: "Schritt",
    von: "von",
    completed: "abgeschlossen",
    back: "Zurück",
    continue: "Weiter",
    startAnalysis: "Healthspan-Analyse starten",
    dataSecure: "Ihre Daten sind verschlüsselt und werden niemals geteilt",
    unlockResult: "Ergebnis freischalten",
    emailLabel: "E-Mail-Adresse",
    emailPlaceholder: "ihre@email.de",
    agreeToTerms: "Ich stimme den",
    terms: "AGB",
    privacy: "Datenschutzerklärung",
    cookies: "Cookies",
    agreeTo: "zu",
    and: "und der Verwendung von",
    unlocking: "Wird freigeschaltet...",
    unlockButton: "Ergebnis freischalten",
    dataEncrypted: "Ihre Daten sind sicher verschlüsselt",
    exclusiveAccess: "Sichern Sie sich Ihre persönliche Healthspan-Analyse und exklusive Gesundheitstipps",
    yourAnalysis: "Ihre Healthspan-Analyse",
    ageAnalysis: "Altersanalyse",
    chronological: "Chronologisch:",
    biological: "Biologisch:",
    difference: "Unterschied:",
    years: "Jahre",
    bodyComposition: "Körperkomposition",
    healthspanScore: "Healthspan-Score",
    positiveFactors: "Positive Faktoren:",
    riskFactors: "Risikofaktoren:",
    weight: "Gewicht:",
    height: "Größe:",
    exclusiveEarlyAccess: "Exklusiver Frühzugang",
    elitePerformers: "Schließen Sie sich 5% der Elite-Performer an",
    priorityAccess: "Prioritärer Zugang für dringende Fälle",
    improvingHealthspan: "Über 47.000 Menschen verbessern bereits ihre Healthspan",
    eliteProgram: "Elite-Programm beitreten - Vorteil maximieren",
    interventionProgram: "Sofort-Intervention starten - Platz sichern",
    premiumProgram: "Premium-Programm starten - Potenzial ausschöpfen",
    boostProgram: "Boost-Programm starten - Jetzt optimieren",
    guarantee: "Wissenschaftlich fundiert • Keine Bindung • 30 Tage Geld-zurück-Garantie",
    repeatAssessment: "Assessment wiederholen",
    urgencyLevels: {
      elite: {
        level: "ELITE-PERFORMER",
        message: "Außergewöhnliche Langlebigkeit - maximieren Sie Ihren Vorteil"
      },
      good: {
        level: "ÜBERDURCHSCHNITTLICH",
        message: "Starke Grundlage - großes Optimierungspotenzial"
      },
      improvement: {
        level: "VERBESSERUNGSPOTENZIAL",
        message: "Frühe Warnung - jetzt optimieren für beste Ergebnisse"
      },
      intervention: {
        level: "INTERVENTION EMPFOHLEN",
        message: "Deutliche Alterungsbeschleunigung - Intervention nötig"
      }
    },
    categories: {
      personal: "Persönliche Daten",
      body: "Körperkomposition & BMI",
      nutrition: "Ernährung & Mediterrane Diät",
      activity: "Körperliche Aktivität & Bewegung",
      social: "Soziale Verbindungen & Lebenssinn",
      metabolism: "Stoffwechsel & Biomarker",
      sleep: "Schlaf & Erholung",
      environment: "Lebensumgebung & Gewohnheiten"
    }
  },
  en: {
    title: "LYVO HEALTH",
    subtitle: "Rejuvenate your Health",
    assessmentTitle: "Healthspan Assessment",
    scientificAnalysis: "Scientific longevity analysis in 5 minutes",
    stepOf: "Step",
    von: "of",
    completed: "completed",
    back: "Back",
    continue: "Continue",
    startAnalysis: "Start Healthspan Analysis",
    dataSecure: "Your data is encrypted and never shared",
    unlockResult: "Unlock Results",
    emailLabel: "Email Address",
    emailPlaceholder: "your@email.com",
    agreeToTerms: "I agree to the",
    terms: "Terms",
    privacy: "Privacy Policy",
    cookies: "Cookies",
    agreeTo: "",
    and: "and the use of",
    unlocking: "Unlocking...",
    unlockButton: "Unlock Results",
    dataEncrypted: "Your data is securely encrypted",
    exclusiveAccess: "Secure your personal Healthspan analysis and exclusive health tips",
    yourAnalysis: "Your Healthspan Analysis",
    ageAnalysis: "Age Analysis",
    chronological: "Chronological:",
    biological: "Biological:",
    difference: "Difference:",
    years: "Years",
    bodyComposition: "Body Composition",
    healthspanScore: "Healthspan Score",
    positiveFactors: "Positive Factors:",
    riskFactors: "Risk Factors:",
    weight: "Weight:",
    height: "Height:",
    exclusiveEarlyAccess: "Exclusive Early Access",
    elitePerformers: "Join the top 5% of elite performers",
    priorityAccess: "Priority access for urgent cases",
    improvingHealthspan: "Over 47,000 people are already improving their healthspan",
    eliteProgram: "Join Elite Program - Maximize Advantage",
    interventionProgram: "Start Immediate Intervention - Secure Spot",
    premiumProgram: "Start Premium Program - Unlock Potential",
    boostProgram: "Start Boost Program - Optimize Now",
    guarantee: "Scientifically proven • No commitment • 30-day money-back guarantee",
    repeatAssessment: "Repeat Assessment",
    urgencyLevels: {
      elite: {
        level: "ELITE PERFORMER",
        message: "Exceptional longevity - maximize your advantage"
      },
      good: {
        level: "ABOVE AVERAGE",
        message: "Strong foundation - great optimization potential"
      },
      improvement: {
        level: "IMPROVEMENT POTENTIAL",
        message: "Early warning - optimize now for best results"
      },
      intervention: {
        level: "INTERVENTION RECOMMENDED",
        message: "Significant aging acceleration - intervention needed"
      }
    },
    categories: {
      personal: "Personal Data",
      body: "Body Composition & BMI",
      nutrition: "Nutrition & Mediterranean Diet",
      activity: "Physical Activity & Movement",
      social: "Social Connections & Life Purpose",
      metabolism: "Metabolism & Biomarkers",
      sleep: "Sleep & Recovery",
      environment: "Environment & Habits"
    }
  },
  fr: {
    title: "LYVO HEALTH",
    subtitle: "Rejuvenate your Health",
    assessmentTitle: "Évaluation de la Durée de Vie en Bonne Santé",
    scientificAnalysis: "Analyse scientifique de longévité en 5 minutes",
    stepOf: "Étape",
    von: "de",
    completed: "terminées",
    back: "Retour",
    continue: "Continuer",
    startAnalysis: "Commencer l'Analyse",
    dataSecure: "Vos données sont cryptées et jamais partagées",
    unlockResult: "Débloquer les Résultats",
    emailLabel: "Adresse Email",
    emailPlaceholder: "votre@email.fr",
    agreeToTerms: "J'accepte les",
    terms: "CGU",
    privacy: "Politique de Confidentialité",
    cookies: "Cookies",
    agreeTo: "",
    and: "et l'utilisation des",
    unlocking: "Déverrouillage...",
    unlockButton: "Débloquer les Résultats",
    dataEncrypted: "Vos données sont cryptées en sécurité",
    exclusiveAccess: "Sécurisez votre analyse personnelle et conseils de santé exclusifs",
    yourAnalysis: "Votre Analyse de Santé",
    ageAnalysis: "Analyse d'Âge",
    chronological: "Chronologique:",
    biological: "Biologique:",
    difference: "Différence:",
    years: "Ans",
    bodyComposition: "Composition Corporelle",
    healthspanScore: "Score de Santé",
    positiveFactors: "Facteurs Positifs:",
    riskFactors: "Facteurs de Risque:",
    weight: "Poids:",
    height: "Taille:",
    exclusiveEarlyAccess: "Accès Exclusif Anticipé",
    elitePerformers: "Rejoignez les 5% d'élite",
    priorityAccess: "Accès prioritaire pour les cas urgents",
    improvingHealthspan: "Plus de 47 000 personnes améliorent déjà leur santé",
    eliteProgram: "Rejoindre le Programme Elite - Maximiser l'Avantage",
    interventionProgram: "Commencer l'Intervention Immédiate - Sécuriser la Place",
    premiumProgram: "Commencer le Programme Premium - Libérer le Potentiel",
    boostProgram: "Commencer le Programme Boost - Optimiser Maintenant",
    guarantee: "Scientifiquement prouvé • Sans engagement • Garantie de remboursement 30 jours",
    repeatAssessment: "Répéter l'Évaluation",
    urgencyLevels: {
      elite: {
        level: "PERFORMER D'ÉLITE",
        message: "Longévité exceptionnelle - maximisez votre avantage"
      },
      good: {
        level: "AU-DESSUS DE LA MOYENNE",
        message: "Base solide - grand potentiel d'optimisation"
      },
      improvement: {
        level: "POTENTIEL D'AMÉLIORATION",
        message: "Alerte précoce - optimisez maintenant pour de meilleurs résultats"
      },
      intervention: {
        level: "INTERVENTION RECOMMANDÉE",
        message: "Accélération significative du vieillissement - intervention nécessaire"
      }
    },
    categories: {
      personal: "Données Personnelles",
      body: "Composition Corporelle & IMC",
      nutrition: "Nutrition & Régime Méditerranéen",
      activity: "Activité Physique & Mouvement",
      social: "Connexions Sociales & But de Vie",
      metabolism: "Métabolisme & Biomarqueurs",
      sleep: "Sommeil & Récupération",
      environment: "Environnement & Habitudes"
    }
  },
  es: {
    title: "LYVO HEALTH",
    subtitle: "Rejuvenate your Health",
    assessmentTitle: "Evaluación de Vida Saludable",
    scientificAnalysis: "Análisis científico de longevidad en 5 minutos",
    stepOf: "Paso",
    von: "de",
    completed: "completados",
    back: "Atrás",
    continue: "Continuar",
    startAnalysis: "Iniciar Análisis",
    dataSecure: "Sus datos están encriptados y nunca compartidos",
    unlockResult: "Desbloquear Resultados",
    emailLabel: "Dirección de Email",
    emailPlaceholder: "su@email.es",
    agreeToTerms: "Acepto los",
    terms: "Términos",
    privacy: "Política de Privacidad",
    cookies: "Cookies",
    agreeTo: "",
    and: "y el uso de",
    unlocking: "Desbloqueando...",
    unlockButton: "Desbloquear Resultados",
    dataEncrypted: "Sus datos están encriptados de forma segura",
    exclusiveAccess: "Asegure su análisis personal y consejos de salud exclusivos",
    yourAnalysis: "Su Análisis de Salud",
    ageAnalysis: "Análisis de Edad",
    chronological: "Cronológica:",
    biological: "Biológica:",
    difference: "Diferencia:",
    years: "Años",
    bodyComposition: "Composición Corporal",
    healthspanScore: "Puntuación de Salud",
    positiveFactors: "Factores Positivos:",
    riskFactors: "Factores de Riesgo:",
    weight: "Peso:",
    height: "Altura:",
    exclusiveEarlyAccess: "Acceso Exclusivo Anticipado",
    elitePerformers: "Únase al 5% de élite",
    priorityAccess: "Acceso prioritario para casos urgentes",
    improvingHealthspan: "Más de 47,000 personas ya están mejorando su salud",
    eliteProgram: "Unirse al Programa Elite - Maximizar Ventaja",
    interventionProgram: "Iniciar Intervención Inmediata - Asegurar Lugar",
    premiumProgram: "Iniciar Programa Premium - Liberar Potencial",
    boostProgram: "Iniciar Programa Boost - Optimizar Ahora",
    guarantee: "Científicamente probado • Sin compromiso • Garantía de devolución de 30 días",
    repeatAssessment: "Repetir Evaluación",
    urgencyLevels: {
      elite: {
        level: "PERFORMER ÉLITE",
        message: "Longevidad excepcional - maximice su ventaja"
      },
      good: {
        level: "SOBRE EL PROMEDIO",
        message: "Base sólida - gran potencial de optimización"
      },
      improvement: {
        level: "POTENCIAL DE MEJORA",
        message: "Advertencia temprana - optimice ahora para mejores resultados"
      },
      intervention: {
        level: "INTERVENCIÓN RECOMENDADA",
        message: "Aceleración significativa del envejecimiento - intervención necesaria"
      }
    },
    categories: {
      personal: "Datos Personales",
      body: "Composición Corporal & IMC",
      nutrition: "Nutrición & Dieta Mediterránea",
      activity: "Actividad Física & Movimiento",
      social: "Conexiones Sociales & Propósito de Vida",
      metabolism: "Metabolismo & Biomarcadores",
      sleep: "Sueño & Recuperación",
      environment: "Ambiente & Hábitos"
    }
  },
  it: {
    title: "LYVO HEALTH",
    subtitle: "Rejuvenate your Health",
    assessmentTitle: "Valutazione della Durata della Vita Sana",
    scientificAnalysis: "Analisi scientifica della longevità in 5 minuti",
    stepOf: "Passo",
    von: "di",
    completed: "completati",
    back: "Indietro",
    continue: "Continua",
    startAnalysis: "Inizia Analisi",
    dataSecure: "I tuoi dati sono crittografati e mai condivisi",
    unlockResult: "Sblocca Risultati",
    emailLabel: "Indirizzo Email",
    emailPlaceholder: "tua@email.it",
    agreeToTerms: "Accetto i",
    terms: "Termini",
    privacy: "Privacy Policy",
    cookies: "Cookies",
    agreeTo: "",
    and: "e l'uso dei",
    unlocking: "Sbloccando...",
    unlockButton: "Sblocca Risultati",
    dataEncrypted: "I tuoi dati sono crittografati in sicurezza",
    exclusiveAccess: "Assicurati la tua analisi personale e consigli di salute esclusivi",
    yourAnalysis: "La Tua Analisi della Salute",
    ageAnalysis: "Analisi dell'Età",
    chronological: "Cronologica:",
    biological: "Biologica:",
    difference: "Differenza:",
    years: "Anni",
    bodyComposition: "Composizione Corporea",
    healthspanScore: "Punteggio Salute",
    positiveFactors: "Fattori Positivi:",
    riskFactors: "Fattori di Rischio:",
    weight: "Peso:",
    height: "Altezza:",
    exclusiveEarlyAccess: "Accesso Esclusivo Anticipato",
    elitePerformers: "Unisciti al 5% dell'élite",
    priorityAccess: "Accesso prioritario per casi urgenti",
    improvingHealthspan: "Oltre 47.000 persone stanno già migliorando la loro salute",
    eliteProgram: "Unisciti al Programma Elite - Massimizza il Vantaggio",
    interventionProgram: "Inizia Intervento Immediato - Assicura il Posto",
    premiumProgram: "Inizia Programma Premium - Sblocca il Potenziale",
    boostProgram: "Inizia Programma Boost - Ottimizza Ora",
    guarantee: "Scientificamente provato • Nessun impegno • Garanzia soddisfatti o rimborsati 30 giorni",
    repeatAssessment: "Ripeti Valutazione",
    urgencyLevels: {
      elite: {
        level: "PERFORMER D'ÉLITE",
        message: "Longevità eccezionale - massimizza il tuo vantaggio"
      },
      good: {
        level: "SOPRA LA MEDIA",
        message: "Base solida - grande potenziale di ottimizzazione"
      },
      improvement: {
        level: "POTENZIALE DI MIGLIORAMENTO",
        message: "Avviso precoce - ottimizza ora per migliori risultati"
      },
      intervention: {
        level: "INTERVENTO RACCOMANDATO",
        message: "Accelerazione significativa dell'invecchiamento - intervento necessario"
      }
    },
    categories: {
      personal: "Dati Personali",
      body: "Composizione Corporea & BMI",
      nutrition: "Nutrizione & Dieta Mediterranea",
      activity: "Attività Fisica & Movimento",
      social: "Connessioni Sociali & Scopo della Vita",
      metabolism: "Metabolismo & Biomarcatori",
      sleep: "Sonno & Recupero",
      environment: "Ambiente & Abitudini"
    }
  }
};

const BlurOverlay = ({ children, onComplete, currentLanguage }) => {
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = translations[currentLanguage];
  const isFormValid = email.trim().length > 0 && email.includes('@') && email.includes('.') && agreedToTerms;

  const handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    if (!isFormValid) {
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsVisible(false);
      if (onComplete) {
        onComplete({ email, agreedToTerms });
      }
    }, 500);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleSubmit();
  };

  if (!isVisible) {
    return children;
  }

  return (
    <div className="relative">
      <div className="filter blur-md pointer-events-none select-none">
        {children}
      </div>
      
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <Shield className="w-12 h-12 mx-auto mb-4 text-teal-600" />
            <h3 className="text-2xl font-bold text-slate-800 mb-2">{t.unlockResult}</h3>
            <p className="text-slate-600 text-sm">
              {t.exclusiveAccess}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                {t.emailLabel}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                  placeholder={t.emailPlaceholder}
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
                  {t.agreeToTerms}{' '}
                  <a href="https://lyvohealth.com/?page_id=530" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">
                    {t.terms}
                  </a>, {currentLanguage === 'de' ? 'der' : currentLanguage === 'fr' ? 'la' : currentLanguage === 'es' ? 'la' : currentLanguage === 'it' ? 'la' : 'the'}{' '}
                  <a href="https://lyvohealth.com/?page_id=3" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">
                    {t.privacy}
                  </a>{' '}
                  {t.and}{' '}
                  <a href="https://lyvohealth.com/?page_id=817" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 underline">
                    {t.cookies}
                  </a>{' '}
                  {t.agreeTo}
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
                  {t.unlocking}
                </div>
              ) : (
                t.unlockButton
              )}
            </button>
          </form>

          <div className="mt-4 text-center">
            <div className="text-xs text-slate-500">
              🔒 {t.dataEncrypted}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LyvoHealthApp = () => {
  const [currentLanguage, setCurrentLanguage] = useState('de');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [biologicalAge, setBiologicalAge] = useState(null);
  const [riskFactors, setRiskFactors] = useState([]);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const t = translations[currentLanguage];

  const languageFlags = {
    de: '🇩🇪',
    en: '🇬🇧',
    fr: '🇫🇷',
    es: '🇪🇸',
    it: '🇮🇹'
  };

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
      language: currentLanguage,
      agreedToTerms: data.agreedToTerms,
      chronologicalAge: chronoAge,
      biologicalAge: biologicalAge,
      ageDifference: difference,
      bmi: parseFloat(bmi),
      riskFactorsCount: riskFactors.length,
      positiveFactorsCount: getPositiveFactorsCount(),
      urgencyLevel: urgency.level,
      urgencyTier: urgency.tier,
      allAnswers: answers
    };

    console.log('🚀 Starting data submission process...');
    console.log('📊 Complete data object:', completeData);

    // Google Sheets transmission - works outside Claude.ai
    try {
      const sheetsUrl = 'https://script.google.com/macros/s/AKfycbzb69WHNlqk3IVdijADWraxThKZhV6RWbchKOyfV-zcctikaX1WLaN1ZysypalEPY8gCQ/exec';
      
      const params = new URLSearchParams({
        email: completeData.email,
        timestamp: completeData.timestamp,
        language: completeData.language,
        agreedToTerms: completeData.agreedToTerms,
        chronologicalAge: completeData.chronologicalAge,
        biologicalAge: completeData.biologicalAge,
        ageDifference: completeData.ageDifference,
        bmi: completeData.bmi,
        riskFactors: completeData.riskFactorsCount,
        positiveFactors: completeData.positiveFactorsCount,
        urgencyLevel: completeData.urgencyLevel,
        urgencyTier: completeData.urgencyTier,
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
        
        // Show alert to user based on language
        const alertMessage = currentLanguage === 'de' ? 
          'Hinweis: Datenübertragung nur auf eigener Website möglich. Kopieren Sie den Code auf Ihre Domain.' :
          currentLanguage === 'en' ? 
          'Note: Data transmission only possible on own website. Copy code to your domain.' :
          currentLanguage === 'fr' ? 
          'Note: Transmission de données uniquement possible sur votre site web. Copiez le code sur votre domaine.' :
          currentLanguage === 'es' ? 
          'Nota: Transmisión de datos solo posible en su propio sitio web. Copie el código a su dominio.' :
          'Nota: Trasmissione dati possibile solo sul proprio sito web. Copia il codice sul tuo dominio.';
        
        alert(alertMessage);
        
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
        daily_steps: { "10.000+ Schritte": "Optimal daily movement" },
        vegetable_intake: { "5+ Portionen täglich": "Excellent nutrition" },
        muscle_mass: { "Sehr hoch - regelmäßiges Krafttraining": "Strong muscles" },
        social_support: { "Sehr stark - viele enge Freunde und Familie": "Strong social network" },
        sleep_quality: { "Ausgezeichnet - wache erfrischt auf": "Optimal sleep quality" },
        stress_management: { "Sehr gut - bleibe gelassen": "Excellent stress management" },
        smoking: { "Nie geraucht": "Non-smoker" },
        life_purpose: { "Sehr stark - klarer Lebenszweck": "Strong life purpose" }
      };
      
      if (strengthMapping[questionId] && strengthMapping[questionId][answer]) {
        positiveFactors.push(strengthMapping[questionId][answer]);
      }
    });
    return positiveFactors.length;
  };

  const questionCategories = [
    {
      category: t.categories.personal,
      icon: <Users className="w-6 h-6" />,
      questions: [
        {
          id: "chronological_age",
          question: currentLanguage === 'de' ? "Wie alt sind Sie aktuell?" :
                   currentLanguage === 'en' ? "What is your current age?" :
                   currentLanguage === 'fr' ? "Quel est votre âge actuel?" :
                   currentLanguage === 'es' ? "¿Cuál es su edad actual?" :
                   "Qual è la sua età attuale?",
          type: "number",
          min: 25,
          max: 75,
          subtitle: currentLanguage === 'de' ? "Fortgeschrittene Langlebigkeitsforschung ab 25+" :
                   currentLanguage === 'en' ? "Advanced longevity research for 25+" :
                   currentLanguage === 'fr' ? "Recherche avancée sur la longévité pour 25+" :
                   currentLanguage === 'es' ? "Investigación avanzada de longevidad para 25+" :
                   "Ricerca avanzata sulla longevità per 25+"
        },
        {
          id: "gender",
          question: currentLanguage === 'de' ? "Was ist Ihr biologisches Geschlecht?" :
                   currentLanguage === 'en' ? "What is your biological sex?" :
                   currentLanguage === 'fr' ? "Quel est votre sexe biologique?" :
                   currentLanguage === 'es' ? "¿Cuál es su sexo biológico?" :
                   "Qual è il suo sesso biologico?",
          type: "select",
          options: currentLanguage === 'de' ? ["Männlich", "Weiblich"] :
                  currentLanguage === 'en' ? ["Male", "Female"] :
                  currentLanguage === 'fr' ? ["Masculin", "Féminin"] :
                  currentLanguage === 'es' ? ["Masculino", "Femenino"] :
                  ["Maschile", "Femminile"],
          subtitle: currentLanguage === 'de' ? "Für hormonoptimierte Gesundheitsprotokolle" :
                   currentLanguage === 'en' ? "For hormone-optimized health protocols" :
                   currentLanguage === 'fr' ? "Pour des protocoles de santé optimisés hormonalement" :
                   currentLanguage === 'es' ? "Para protocolos de salud optimizados hormonalmente" :
                   "Per protocolli sanitari ottimizzati ormonalmente"
        },
        {
          id: "health_goal",
          question: currentLanguage === 'de' ? "Was ist Ihr primäres Langlebigkeitsziel?" :
                   currentLanguage === 'en' ? "What is your primary longevity goal?" :
                   currentLanguage === 'fr' ? "Quel est votre objectif principal de longévité?" :
                   currentLanguage === 'es' ? "¿Cuál es su objetivo principal de longevidad?" :
                   "Qual è il tuo obiettivo principale di longevità?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Biologisches Altern umkehren",
            "Altersbedingte Krankheiten verhindern", 
            "Leistung & Energie optimieren",
            "Gesunde Lebensspanne verlängern",
            "Bin nur neugierig auf meine Gesundheit"
          ] :
          currentLanguage === 'en' ? [
            "Reverse biological aging",
            "Prevent age-related diseases",
            "Optimize performance & energy",
            "Extend healthy lifespan",
            "Just curious about my health"
          ] :
          currentLanguage === 'fr' ? [
            "Inverser le vieillissement biologique",
            "Prévenir les maladies liées à l'âge",
            "Optimiser performance & énergie",
            "Prolonger la durée de vie saine",
            "Simplement curieux de ma santé"
          ] :
          currentLanguage === 'es' ? [
            "Revertir el envejecimiento biológico",
            "Prevenir enfermedades relacionadas con la edad",
            "Optimizar rendimiento y energía",
            "Extender vida saludable",
            "Solo curioso sobre mi salud"
          ] : [
            "Invertire l'invecchiamento biologico",
            "Prevenire malattie legate all'età",
            "Ottimizzare prestazioni ed energia",
            "Estendere la durata della vita sana",
            "Solo curioso della mia salute"
          ],
          subtitle: currentLanguage === 'de' ? "Personalisierte Protokolle basierend auf Ihrem Ziel" :
                   currentLanguage === 'en' ? "Personalized protocols based on your goal" :
                   currentLanguage === 'fr' ? "Protocoles personnalisés basés sur votre objectif" :
                   currentLanguage === 'es' ? "Protocolos personalizados basados en su objetivo" :
                   "Protocolli personalizzati basati sul tuo obiettivo"
        }
      ]
    },
    {
      category: t.categories.body,
      icon: <Scale className="w-6 h-6" />,
      questions: [
        {
          id: "height",
          question: currentLanguage === 'de' ? "Wie groß sind Sie? (in cm)" :
                   currentLanguage === 'en' ? "What is your height? (in cm)" :
                   currentLanguage === 'fr' ? "Quelle est votre taille? (en cm)" :
                   currentLanguage === 'es' ? "¿Cuál es su altura? (en cm)" :
                   "Qual è la sua altezza? (in cm)",
          type: "number",
          min: 140,
          max: 220,
          subtitle: currentLanguage === 'de' ? "Für präzise BMI-Berechnung" :
                   currentLanguage === 'en' ? "For precise BMI calculation" :
                   currentLanguage === 'fr' ? "Pour un calcul précis de l'IMC" :
                   currentLanguage === 'es' ? "Para cálculo preciso del IMC" :
                   "Per calcolo preciso del BMI"
        },
        {
          id: "weight",
          question: currentLanguage === 'de' ? "Wie viel wiegen Sie? (in kg)" :
                   currentLanguage === 'en' ? "What is your weight? (in kg)" :
                   currentLanguage === 'fr' ? "Quel est votre poids? (en kg)" :
                   currentLanguage === 'es' ? "¿Cuál es su peso? (en kg)" :
                   "Qual è il suo peso? (in kg)",
          type: "number",
          min: 40,
          max: 200,
          subtitle: currentLanguage === 'de' ? "Aktuelle Gewichtsangabe" :
                   currentLanguage === 'en' ? "Current weight" :
                   currentLanguage === 'fr' ? "Poids actuel" :
                   currentLanguage === 'es' ? "Peso actual" :
                   "Peso attuale"
        },
        {
          id: "weight_stability",
          question: currentLanguage === 'de' ? "Wie stabil ist Ihr Gewicht in den letzten 2 Jahren?" :
                   currentLanguage === 'en' ? "How stable has your weight been in the last 2 years?" :
                   currentLanguage === 'fr' ? "Quelle est la stabilité de votre poids ces 2 dernières années?" :
                   currentLanguage === 'es' ? "¿Qué tan estable ha sido su peso en los últimos 2 años?" :
                   "Quanto è stato stabile il tuo peso negli ultimi 2 anni?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Sehr stabil (±2kg)",
            "Leichte Schwankungen (±3-5kg)",
            "Moderate Veränderungen (±6-10kg)",
            "Starke Schwankungen (±11-15kg)",
            "Extreme Veränderungen (>15kg)"
          ] :
          currentLanguage === 'en' ? [
            "Very stable (±2kg)",
            "Slight fluctuations (±3-5kg)",
            "Moderate changes (±6-10kg)",
            "Strong fluctuations (±11-15kg)",
            "Extreme changes (>15kg)"
          ] :
          currentLanguage === 'fr' ? [
            "Très stable (±2kg)",
            "Légères fluctuations (±3-5kg)",
            "Changements modérés (±6-10kg)",
            "Fortes fluctuations (±11-15kg)",
            "Changements extrêmes (>15kg)"
          ] :
          currentLanguage === 'es' ? [
            "Muy estable (±2kg)",
            "Fluctuaciones leves (±3-5kg)",
            "Cambios moderados (±6-10kg)",
            "Fluctuaciones fuertes (±11-15kg)",
            "Cambios extremos (>15kg)"
          ] : [
            "Molto stabile (±2kg)",
            "Fluttuazioni lievi (±3-5kg)",
            "Cambiamenti moderati (±6-10kg)",
            "Forti fluttuazioni (±11-15kg)",
            "Cambiamenti estremi (>15kg)"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Starke Schwankungen (±11-15kg)", "Extreme Veränderungen (>15kg)"] :
                        currentLanguage === 'en' ? ["Strong fluctuations (±11-15kg)", "Extreme changes (>15kg)"] :
                        currentLanguage === 'fr' ? ["Fortes fluctuations (±11-15kg)", "Changements extrêmes (>15kg)"] :
                        currentLanguage === 'es' ? ["Fluctuaciones fuertes (±11-15kg)", "Cambios extremos (>15kg)"] :
                        ["Forti fluttuazioni (±11-15kg)", "Cambiamenti estremi (>15kg)"]
        },
        {
          id: "muscle_mass",
          question: currentLanguage === 'de' ? "Wie schätzen Sie Ihre Muskelmasse ein?" :
                   currentLanguage === 'en' ? "How do you rate your muscle mass?" :
                   currentLanguage === 'fr' ? "Comment évaluez-vous votre masse musculaire?" :
                   currentLanguage === 'es' ? "¿Cómo evalúa su masa muscular?" :
                   "Come valuti la tua massa muscolare?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Sehr hoch - regelmäßiges Krafttraining",
            "Hoch - gute Muskulatur",
            "Durchschnittlich für mein Alter",
            "Niedrig - wenig Muskeln",
            "Sehr niedrig - Muskelverlust spürbar"
          ] :
          currentLanguage === 'en' ? [
            "Very high - regular strength training",
            "High - good musculature",
            "Average for my age",
            "Low - little muscle",
            "Very low - noticeable muscle loss"
          ] :
          currentLanguage === 'fr' ? [
            "Très élevée - entraînement régulier",
            "Élevée - bonne musculature",
            "Moyenne pour mon âge",
            "Faible - peu de muscles",
            "Très faible - perte musculaire notable"
          ] :
          currentLanguage === 'es' ? [
            "Muy alta - entrenamiento regular",
            "Alta - buena musculatura",
            "Promedio para mi edad",
            "Baja - pocos músculos",
            "Muy baja - pérdida muscular notable"
          ] : [
            "Molto alta - allenamento regolare",
            "Alta - buona muscolatura",
            "Media per la mia età",
            "Bassa - pochi muscoli",
            "Molto bassa - perdita muscolare evidente"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Niedrig - wenig Muskeln", "Sehr niedrig - Muskelverlust spürbar"] :
                        currentLanguage === 'en' ? ["Low - little muscle", "Very low - noticeable muscle loss"] :
                        currentLanguage === 'fr' ? ["Faible - peu de muscles", "Très faible - perte musculaire notable"] :
                        currentLanguage === 'es' ? ["Baja - pocos músculos", "Muy baja - pérdida muscular notable"] :
                        ["Bassa - pochi muscoli", "Molto bassa - perdita muscolare evidente"]
        }
      ]
    },
    {
      category: t.categories.nutrition,
      icon: <Utensils className="w-6 h-6" />,
      questions: [
        {
          id: "vegetable_intake",
          question: currentLanguage === 'de' ? "Wie viele Portionen Gemüse essen Sie täglich?" :
                   currentLanguage === 'en' ? "How many portions of vegetables do you eat daily?" :
                   currentLanguage === 'fr' ? "Combien de portions de légumes mangez-vous par jour?" :
                   currentLanguage === 'es' ? "¿Cuántas porciones de verduras come diariamente?" :
                   "Quante porzioni di verdure mangi al giorno?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "5+ Portionen täglich",
            "3-4 Portionen täglich",
            "2 Portionen täglich",
            "1 Portion täglich",
            "Weniger als 1 Portion täglich"
          ] :
          currentLanguage === 'en' ? [
            "5+ portions daily",
            "3-4 portions daily",
            "2 portions daily",
            "1 portion daily",
            "Less than 1 portion daily"
          ] :
          currentLanguage === 'fr' ? [
            "5+ portions par jour",
            "3-4 portions par jour",
            "2 portions par jour",
            "1 portion par jour",
            "Moins d'1 portion par jour"
          ] :
          currentLanguage === 'es' ? [
            "5+ porciones diarias",
            "3-4 porciones diarias",
            "2 porciones diarias",
            "1 porción diaria",
            "Menos de 1 porción diaria"
          ] : [
            "5+ porzioni al giorno",
            "3-4 porzioni al giorno",
            "2 porzioni al giorno",
            "1 porzione al giorno",
            "Meno di 1 porzione al giorno"
          ],
          riskIndicator: currentLanguage === 'de' ? ["1 Portion täglich", "Weniger als 1 Portion täglich"] :
                        currentLanguage === 'en' ? ["1 portion daily", "Less than 1 portion daily"] :
                        currentLanguage === 'fr' ? ["1 portion par jour", "Moins d'1 portion par jour"] :
                        currentLanguage === 'es' ? ["1 porción diaria", "Menos de 1 porción diaria"] :
                        ["1 porzione al giorno", "Meno di 1 porzione al giorno"]
        },
        {
          id: "olive_oil",
          question: currentLanguage === 'de' ? "Wie oft verwenden Sie natives Olivenöl extra?" :
                   currentLanguage === 'en' ? "How often do you use extra virgin olive oil?" :
                   currentLanguage === 'fr' ? "À quelle fréquence utilisez-vous l'huile d'olive extra vierge?" :
                   currentLanguage === 'es' ? "¿Con qué frecuencia usa aceite de oliva extra virgen?" :
                   "Quanto spesso usi olio d'oliva extra vergine?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Täglich als Hauptfettquelle",
            "Mehrmals pro Woche",
            "Gelegentlich",
            "Selten",
            "Nie"
          ] :
          currentLanguage === 'en' ? [
            "Daily as main fat source",
            "Several times per week",
            "Occasionally",
            "Rarely",
            "Never"
          ] :
          currentLanguage === 'fr' ? [
            "Quotidiennement comme source principale",
            "Plusieurs fois par semaine",
            "Occasionnellement",
            "Rarement",
            "Jamais"
          ] :
          currentLanguage === 'es' ? [
            "Diariamente como fuente principal",
            "Varias veces por semana",
            "Ocasionalmente",
            "Raramente",
            "Nunca"
          ] : [
            "Quotidianamente come fonte principale",
            "Più volte a settimana",
            "Occasionalmente",
            "Raramente",
            "Mai"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Selten", "Nie"] :
                        currentLanguage === 'en' ? ["Rarely", "Never"] :
                        currentLanguage === 'fr' ? ["Rarement", "Jamais"] :
                        currentLanguage === 'es' ? ["Raramente", "Nunca"] :
                        ["Raramente", "Mai"]
        },
        {
          id: "processed_food",
          question: currentLanguage === 'de' ? "Wie oft essen Sie verarbeitete Lebensmittel?" :
                   currentLanguage === 'en' ? "How often do you eat processed foods?" :
                   currentLanguage === 'fr' ? "À quelle fréquence mangez-vous des aliments transformés?" :
                   currentLanguage === 'es' ? "¿Con qué frecuencia come alimentos procesados?" :
                   "Quanto spesso mangi cibi processati?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Nie oder sehr selten",
            "1-2 Mal pro Woche",
            "3-4 Mal pro Woche",
            "Fast täglich",
            "Mehrmals täglich"
          ] :
          currentLanguage === 'en' ? [
            "Never or very rarely",
            "1-2 times per week",
            "3-4 times per week",
            "Almost daily",
            "Multiple times daily"
          ] :
          currentLanguage === 'fr' ? [
            "Jamais ou très rarement",
            "1-2 fois par semaine",
            "3-4 fois par semaine",
            "Presque quotidiennement",
            "Plusieurs fois par jour"
          ] :
          currentLanguage === 'es' ? [
            "Nunca o muy raramente",
            "1-2 veces por semana",
            "3-4 veces por semana",
            "Casi diariamente",
            "Varias veces al día"
          ] : [
            "Mai o molto raramente",
            "1-2 volte a settimana",
            "3-4 volte a settimana",
            "Quasi quotidianamente",
            "Più volte al giorno"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Fast täglich", "Mehrmals täglich"] :
                        currentLanguage === 'en' ? ["Almost daily", "Multiple times daily"] :
                        currentLanguage === 'fr' ? ["Presque quotidiennement", "Plusieurs fois par jour"] :
                        currentLanguage === 'es' ? ["Casi diariamente", "Varias veces al día"] :
                        ["Quasi quotidianamente", "Più volte al giorno"]
        },
        {
          id: "nuts_legumes",
          question: currentLanguage === 'de' ? "Wie oft essen Sie Nüsse oder Hülsenfrüchte?" :
                   currentLanguage === 'en' ? "How often do you eat nuts or legumes?" :
                   currentLanguage === 'fr' ? "À quelle fréquence mangez-vous des noix ou légumineuses?" :
                   currentLanguage === 'es' ? "¿Con qué frecuencia come nueces o legumbres?" :
                   "Quanto spesso mangi noci o legumi?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Täglich",
            "4-5 Mal pro Woche",
            "2-3 Mal pro Woche",
            "Einmal pro Woche",
            "Selten oder nie"
          ] :
          currentLanguage === 'en' ? [
            "Daily",
            "4-5 times per week",
            "2-3 times per week",
            "Once per week",
            "Rarely or never"
          ] :
          currentLanguage === 'fr' ? [
            "Quotidiennement",
            "4-5 fois par semaine",
            "2-3 fois par semaine",
            "Une fois par semaine",
            "Rarement ou jamais"
          ] :
          currentLanguage === 'es' ? [
            "Diariamente",
            "4-5 veces por semana",
            "2-3 veces por semana",
            "Una vez por semana",
            "Raramente o nunca"
          ] : [
            "Quotidianamente",
            "4-5 volte a settimana",
            "2-3 volte a settimana",
            "Una volta a settimana",
            "Raramente o mai"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Einmal pro Woche", "Selten oder nie"] :
                        currentLanguage === 'en' ? ["Once per week", "Rarely or never"] :
                        currentLanguage === 'fr' ? ["Une fois par semaine", "Rarement ou jamais"] :
                        currentLanguage === 'es' ? ["Una vez por semana", "Raramente o nunca"] :
                        ["Una volta a settimana", "Raramente o mai"]
        },
        {
          id: "fish_consumption",
          question: currentLanguage === 'de' ? "Wie oft essen Sie Fisch (besonders fettreichen Fisch)?" :
                   currentLanguage === 'en' ? "How often do you eat fish (especially fatty fish)?" :
                   currentLanguage === 'fr' ? "À quelle fréquence mangez-vous du poisson (surtout gras)?" :
                   currentLanguage === 'es' ? "¿Con qué frecuencia come pescado (especialmente graso)?" :
                   "Quanto spesso mangi pesce (specialmente grasso)?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "3+ Mal pro Woche",
            "2 Mal pro Woche",
            "Einmal pro Woche",
            "2-3 Mal pro Monat",
            "Selten oder nie"
          ] :
          currentLanguage === 'en' ? [
            "3+ times per week",
            "2 times per week",
            "Once per week",
            "2-3 times per month",
            "Rarely or never"
          ] :
          currentLanguage === 'fr' ? [
            "3+ fois par semaine",
            "2 fois par semaine",
            "Une fois par semaine",
            "2-3 fois par mois",
            "Rarement ou jamais"
          ] :
          currentLanguage === 'es' ? [
            "3+ veces por semana",
            "2 veces por semana",
            "Una vez por semana",
            "2-3 veces por mes",
            "Raramente o nunca"
          ] : [
            "3+ volte a settimana",
            "2 volte a settimana",
            "Una volta a settimana",
            "2-3 volte al mese",
            "Raramente o mai"
          ],
          riskIndicator: currentLanguage === 'de' ? ["2-3 Mal pro Monat", "Selten oder nie"] :
                        currentLanguage === 'en' ? ["2-3 times per month", "Rarely or never"] :
                        currentLanguage === 'fr' ? ["2-3 fois par mois", "Rarement ou jamais"] :
                        currentLanguage === 'es' ? ["2-3 veces por mes", "Raramente o nunca"] :
                        ["2-3 volte al mese", "Raramente o mai"]
        }
      ]
    },
    {
      category: t.categories.activity,
      icon: <Activity className="w-6 h-6" />,
      questions: [
        {
          id: "daily_steps",
          question: currentLanguage === 'de' ? "Wie viele Schritte gehen Sie durchschnittlich pro Tag?" :
                   currentLanguage === 'en' ? "How many steps do you walk on average per day?" :
                   currentLanguage === 'fr' ? "Combien de pas marchez-vous en moyenne par jour?" :
                   currentLanguage === 'es' ? "¿Cuántos pasos camina en promedio por día?" :
                   "Quanti passi cammini in media al giorno?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "10.000+ Schritte",
            "7.000-10.000 Schritte",
            "5.000-7.000 Schritte",
            "3.000-5.000 Schritte",
            "Weniger als 3.000 Schritte"
          ] :
          currentLanguage === 'en' ? [
            "10,000+ steps",
            "7,000-10,000 steps",
            "5,000-7,000 steps",
            "3,000-5,000 steps",
            "Less than 3,000 steps"
          ] :
          currentLanguage === 'fr' ? [
            "10 000+ pas",
            "7 000-10 000 pas",
            "5 000-7 000 pas",
            "3 000-5 000 pas",
            "Moins de 3 000 pas"
          ] :
          currentLanguage === 'es' ? [
            "10,000+ pasos",
            "7,000-10,000 pasos",
            "5,000-7,000 pasos",
            "3,000-5,000 pasos",
            "Menos de 3,000 pasos"
          ] : [
            "10.000+ passi",
            "7.000-10.000 passi",
            "5.000-7.000 passi",
            "3.000-5.000 passi",
            "Meno di 3.000 passi"
          ],
          riskIndicator: currentLanguage === 'de' ? ["3.000-5.000 Schritte", "Weniger als 3.000 Schritte"] :
                        currentLanguage === 'en' ? ["3,000-5,000 steps", "Less than 3,000 steps"] :
                        currentLanguage === 'fr' ? ["3 000-5 000 pas", "Moins de 3 000 pas"] :
                        currentLanguage === 'es' ? ["3,000-5,000 pasos", "Menos de 3,000 pasos"] :
                        ["3.000-5.000 passi", "Meno di 3.000 passi"]
        },
        {
          id: "strength_training",
          question: currentLanguage === 'de' ? "Wie oft betreiben Sie Krafttraining pro Woche?" :
                   currentLanguage === 'en' ? "How often do you do strength training per week?" :
                   currentLanguage === 'fr' ? "Combien de fois faites-vous de la musculation par semaine?" :
                   currentLanguage === 'es' ? "¿Con qué frecuencia hace entrenamiento de fuerza por semana?" :
                   "Quante volte fai allenamento di forza a settimana?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "3+ Mal pro Woche",
            "2 Mal pro Woche",
            "Einmal pro Woche",
            "Gelegentlich",
            "Nie"
          ] :
          currentLanguage === 'en' ? [
            "3+ times per week",
            "2 times per week",
            "Once per week",
            "Occasionally",
            "Never"
          ] :
          currentLanguage === 'fr' ? [
            "3+ fois par semaine",
            "2 fois par semaine",
            "Une fois par semaine",
            "Occasionnellement",
            "Jamais"
          ] :
          currentLanguage === 'es' ? [
            "3+ veces por semana",
            "2 veces por semana",
            "Una vez por semana",
            "Ocasionalmente",
            "Nunca"
          ] : [
            "3+ volte a settimana",
            "2 volte a settimana",
            "Una volta a settimana",
            "Occasionalmente",
            "Mai"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Gelegentlich", "Nie"] :
                        currentLanguage === 'en' ? ["Occasionally", "Never"] :
                        currentLanguage === 'fr' ? ["Occasionnellement", "Jamais"] :
                        currentLanguage === 'es' ? ["Ocasionalmente", "Nunca"] :
                        ["Occasionalmente", "Mai"]
        },
        {
          id: "cardio_exercise",
          question: currentLanguage === 'de' ? "Wie oft betreiben Sie Ausdauersport (mindestens 30 Min)?" :
                   currentLanguage === 'en' ? "How often do you do cardio exercise (at least 30 min)?" :
                   currentLanguage === 'fr' ? "Combien de fois faites-vous du cardio (au moins 30 min)?" :
                   currentLanguage === 'es' ? "¿Con qué frecuencia hace ejercicio cardiovascular (al menos 30 min)?" :
                   "Quante volte fai esercizio cardio (almeno 30 min)?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Täglich",
            "5-6 Mal pro Woche",
            "3-4 Mal pro Woche",
            "1-2 Mal pro Woche",
            "Selten oder nie"
          ] :
          currentLanguage === 'en' ? [
            "Daily",
            "5-6 times per week",
            "3-4 times per week",
            "1-2 times per week",
            "Rarely or never"
          ] :
          currentLanguage === 'fr' ? [
            "Quotidiennement",
            "5-6 fois par semaine",
            "3-4 fois par semaine",
            "1-2 fois par semaine",
            "Rarement ou jamais"
          ] :
          currentLanguage === 'es' ? [
            "Diariamente",
            "5-6 veces por semana",
            "3-4 veces por semana",
            "1-2 veces por semana",
            "Raramente o nunca"
          ] : [
            "Quotidianamente",
            "5-6 volte a settimana",
            "3-4 volte a settimana",
            "1-2 volte a settimana",
            "Raramente o mai"
          ],
          riskIndicator: currentLanguage === 'de' ? ["1-2 Mal pro Woche", "Selten oder nie"] :
                        currentLanguage === 'en' ? ["1-2 times per week", "Rarely or never"] :
                        currentLanguage === 'fr' ? ["1-2 fois par semaine", "Rarement ou jamais"] :
                        currentLanguage === 'es' ? ["1-2 veces por semana", "Raramente o nunca"] :
                        ["1-2 volte a settimana", "Raramente o mai"]
        },
        {
          id: "sitting_time",
          question: currentLanguage === 'de' ? "Wie viele Stunden sitzen Sie täglich?" :
                   currentLanguage === 'en' ? "How many hours do you sit daily?" :
                   currentLanguage === 'fr' ? "Combien d'heures restez-vous assis par jour?" :
                   currentLanguage === 'es' ? "¿Cuántas horas se sienta al día?" :
                   "Quante ore stai seduto al giorno?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Weniger als 4 Stunden",
            "4-6 Stunden",
            "6-8 Stunden",
            "8-10 Stunden",
            "Mehr als 10 Stunden"
          ] :
          currentLanguage === 'en' ? [
            "Less than 4 hours",
            "4-6 hours",
            "6-8 hours",
            "8-10 hours",
            "More than 10 hours"
          ] :
          currentLanguage === 'fr' ? [
            "Moins de 4 heures",
            "4-6 heures",
            "6-8 heures",
            "8-10 heures",
            "Plus de 10 heures"
          ] :
          currentLanguage === 'es' ? [
            "Menos de 4 horas",
            "4-6 horas",
            "6-8 horas",
            "8-10 horas",
            "Más de 10 horas"
          ] : [
            "Meno di 4 ore",
            "4-6 ore",
            "6-8 ore",
            "8-10 ore",
            "Più di 10 ore"
          ],
          riskIndicator: currentLanguage === 'de' ? ["8-10 Stunden", "Mehr als 10 Stunden"] :
                        currentLanguage === 'en' ? ["8-10 hours", "More than 10 hours"] :
                        currentLanguage === 'fr' ? ["8-10 heures", "Plus de 10 heures"] :
                        currentLanguage === 'es' ? ["8-10 horas", "Más de 10 horas"] :
                        ["8-10 ore", "Più di 10 ore"]
        }
      ]
    },
    {
      category: t.categories.social,
      icon: <Heart className="w-6 h-6" />,
      questions: [
        {
          id: "social_support",
          question: currentLanguage === 'de' ? "Wie stark ist Ihr soziales Unterstützungsnetzwerk?" :
                   currentLanguage === 'en' ? "How strong is your social support network?" :
                   currentLanguage === 'fr' ? "Quelle est la force de votre réseau de soutien social?" :
                   currentLanguage === 'es' ? "¿Qué tan fuerte es su red de apoyo social?" :
                   "Quanto è forte la tua rete di supporto sociale?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Sehr stark - viele enge Freunde und Familie",
            "Stark - gute soziale Kontakte",
            "Durchschnittlich - einige verlässliche Kontakte",
            "Schwach - wenige enge Kontakte",
            "Sehr schwach - oft einsam"
          ] :
          currentLanguage === 'en' ? [
            "Very strong - many close friends and family",
            "Strong - good social contacts",
            "Average - some reliable contacts",
            "Weak - few close contacts",
            "Very weak - often lonely"
          ] :
          currentLanguage === 'fr' ? [
            "Très fort - beaucoup d'amis proches et famille",
            "Fort - bons contacts sociaux",
            "Moyen - quelques contacts fiables",
            "Faible - peu de contacts proches",
            "Très faible - souvent seul"
          ] :
          currentLanguage === 'es' ? [
            "Muy fuerte - muchos amigos cercanos y familia",
            "Fuerte - buenos contactos sociales",
            "Promedio - algunos contactos confiables",
            "Débil - pocos contactos cercanos",
            "Muy débil - a menudo solo"
          ] : [
            "Molto forte - molti amici stretti e famiglia",
            "Forte - buoni contatti sociali",
            "Medio - alcuni contatti affidabili",
            "Debole - pochi contatti stretti",
            "Molto debole - spesso solo"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Schwach - wenige enge Kontakte", "Sehr schwach - oft einsam"] :
                        currentLanguage === 'en' ? ["Weak - few close contacts", "Very weak - often lonely"] :
                        currentLanguage === 'fr' ? ["Faible - peu de contacts proches", "Très faible - souvent seul"] :
                        currentLanguage === 'es' ? ["Débil - pocos contactos cercanos", "Muy débil - a menudo solo"] :
                        ["Debole - pochi contatti stretti", "Molto debole - spesso solo"]
        },
        {
          id: "community_involvement",
          question: currentLanguage === 'de' ? "Wie aktiv sind Sie in Ihrer Gemeinde/Vereinen?" :
                   currentLanguage === 'en' ? "How active are you in your community/associations?" :
                   currentLanguage === 'fr' ? "À quel point êtes-vous actif dans votre communauté/associations?" :
                   currentLanguage === 'es' ? "¿Qué tan activo es en su comunidad/asociaciones?" :
                   "Quanto sei attivo nella tua comunità/associazioni?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Sehr aktiv - mehrere Engagements",
            "Aktiv - regelmäßiges Engagement",
            "Gelegentlich aktiv",
            "Wenig aktiv",
            "Gar nicht aktiv"
          ] :
          currentLanguage === 'en' ? [
            "Very active - multiple engagements",
            "Active - regular engagement",
            "Occasionally active",
            "Somewhat active",
            "Not active at all"
          ] :
          currentLanguage === 'fr' ? [
            "Très actif - plusieurs engagements",
            "Actif - engagement régulier",
            "Occasionnellement actif",
            "Peu actif",
            "Pas du tout actif"
          ] :
          currentLanguage === 'es' ? [
            "Muy activo - múltiples compromisos",
            "Activo - compromiso regular",
            "Ocasionalmente activo",
            "Algo activo",
            "Para nada activo"
          ] : [
            "Molto attivo - più impegni",
            "Attivo - impegno regolare",
            "Occasionalmente attivo",
            "Poco attivo",
            "Per niente attivo"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Wenig aktiv", "Gar nicht aktiv"] :
                        currentLanguage === 'en' ? ["Somewhat active", "Not active at all"] :
                        currentLanguage === 'fr' ? ["Peu actif", "Pas du tout actif"] :
                        currentLanguage === 'es' ? ["Algo activo", "Para nada activo"] :
                        ["Poco attivo", "Per niente attivo"]
        },
        {
          id: "life_purpose",
          question: currentLanguage === 'de' ? "Wie stark empfinden Sie einen Lebenssinn/Zweck?" :
                   currentLanguage === 'en' ? "How strongly do you feel a sense of life purpose?" :
                   currentLanguage === 'fr' ? "À quel point ressentez-vous un sens/but dans la vie?" :
                   currentLanguage === 'es' ? "¿Qué tan fuerte siente un propósito en la vida?" :
                   "Quanto forte senti un senso di scopo nella vita?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Sehr stark - klarer Lebenszweck",
            "Stark - meist sinnvoll",
            "Durchschnittlich - manchmal sinnvoll",
            "Schwach - oft sinnlos",
            "Sehr schwach - kaum Lebenssinn"
          ] :
          currentLanguage === 'en' ? [
            "Very strong - clear life purpose",
            "Strong - mostly meaningful",
            "Average - sometimes meaningful",
            "Weak - often meaningless",
            "Very weak - little life purpose"
          ] :
          currentLanguage === 'fr' ? [
            "Très fort - but de vie clair",
            "Fort - généralement significatif",
            "Moyen - parfois significatif",
            "Faible - souvent sans sens",
            "Très faible - peu de sens de la vie"
          ] :
          currentLanguage === 'es' ? [
            "Muy fuerte - propósito de vida claro",
            "Fuerte - generalmente significativo",
            "Promedio - a veces significativo",
            "Débil - a menudo sin sentido",
            "Muy débil - poco propósito de vida"
          ] : [
            "Molto forte - scopo di vita chiaro",
            "Forte - per lo più significativo",
            "Medio - a volte significativo",
            "Debole - spesso senza senso",
            "Molto debole - poco scopo nella vita"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Schwach - oft sinnlos", "Sehr schwach - kaum Lebenssinn"] :
                        currentLanguage === 'en' ? ["Weak - often meaningless", "Very weak - little life purpose"] :
                        currentLanguage === 'fr' ? ["Faible - souvent sans sens", "Très faible - peu de sens de la vie"] :
                        currentLanguage === 'es' ? ["Débil - a menudo sin sentido", "Muy débil - poco propósito de vida"] :
                        ["Debole - spesso senza senso", "Molto debole - poco scopo nella vita"]
        },
        {
          id: "relationship_quality",
          question: currentLanguage === 'de' ? "Wie bewerten Sie die Qualität Ihrer engsten Beziehungen?" :
                   currentLanguage === 'en' ? "How do you rate the quality of your closest relationships?" :
                   currentLanguage === 'fr' ? "Comment évaluez-vous la qualité de vos relations les plus proches?" :
                   currentLanguage === 'es' ? "¿Cómo califica la calidad de sus relaciones más cercanas?" :
                   "Come valuti la qualità delle tue relazioni più strette?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Ausgezeichnet - sehr erfüllend",
            "Gut - überwiegend positiv",
            "Durchschnittlich - gemischt",
            "Schlecht - oft konfliktreich",
            "Sehr schlecht - isoliert/problematisch"
          ] :
          currentLanguage === 'en' ? [
            "Excellent - very fulfilling",
            "Good - mostly positive",
            "Average - mixed",
            "Poor - often conflicted",
            "Very poor - isolated/problematic"
          ] :
          currentLanguage === 'fr' ? [
            "Excellent - très épanouissant",
            "Bon - généralement positif",
            "Moyen - mitigé",
            "Mauvais - souvent conflictuel",
            "Très mauvais - isolé/problématique"
          ] :
          currentLanguage === 'es' ? [
            "Excelente - muy satisfactorio",
            "Bueno - mayormente positivo",
            "Promedio - mixto",
            "Malo - a menudo conflictivo",
            "Muy malo - aislado/problemático"
          ] : [
            "Eccellente - molto appagante",
            "Buono - per lo più positivo",
            "Medio - misto",
            "Scarso - spesso conflittuale",
            "Molto scarso - isolato/problematico"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Schlecht - oft konfliktreich", "Sehr schlecht - isoliert/problematisch"] :
                        currentLanguage === 'en' ? ["Poor - often conflicted", "Very poor - isolated/problematic"] :
                        currentLanguage === 'fr' ? ["Mauvais - souvent conflictuel", "Très mauvais - isolé/problématique"] :
                        currentLanguage === 'es' ? ["Malo - a menudo conflictivo", "Muy malo - aislado/problemático"] :
                        ["Scarso - spesso conflittuale", "Molto scarso - isolato/problematico"]
        }
      ]
    },
    {
      category: t.categories.metabolism,
      icon: <TrendingUp className="w-6 h-6" />,
      questions: [
        {
          id: "energy_levels",
          question: currentLanguage === 'de' ? "Wie sind Ihre Energielevel über den Tag?" :
                   currentLanguage === 'en' ? "How are your energy levels throughout the day?" :
                   currentLanguage === 'fr' ? "Comment sont vos niveaux d'énergie tout au long de la journée?" :
                   currentLanguage === 'es' ? "¿Cómo están sus niveles de energía durante el día?" :
                   "Come sono i tuoi livelli di energia durante il giorno?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Konstant hoch den ganzen Tag",
            "Meist gut mit kleinen Tiefs",
            "Durchschnittlich mit nachmittäglichen Tiefs",
            "Oft müde, brauche Stimulanzien",
            "Chronisch müde trotz genug Schlaf"
          ] :
          currentLanguage === 'en' ? [
            "Consistently high all day",
            "Mostly good with small dips",
            "Average with afternoon dips",
            "Often tired, need stimulants",
            "Chronically tired despite enough sleep"
          ] :
          currentLanguage === 'fr' ? [
            "Constamment élevé toute la journée",
            "Généralement bon avec petites baisses",
            "Moyen avec baisses d'après-midi",
            "Souvent fatigué, besoin de stimulants",
            "Chroniquement fatigué malgré assez de sommeil"
          ] :
          currentLanguage === 'es' ? [
            "Consistentemente alto todo el día",
            "Mayormente bueno con pequeñas caídas",
            "Promedio con caídas vespertinas",
            "A menudo cansado, necesito estimulantes",
            "Crónicamente cansado a pesar de dormir suficiente"
          ] : [
            "Costantemente alto tutto il giorno",
            "Per lo più buono con piccoli cali",
            "Medio con cali pomeridiani",
            "Spesso stanco, ho bisogno di stimolanti",
            "Cronicamente stanco nonostante sonno sufficiente"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Oft müde, brauche Stimulanzien", "Chronisch müde trotz genug Schlaf"] :
                        currentLanguage === 'en' ? ["Often tired, need stimulants", "Chronically tired despite enough sleep"] :
                        currentLanguage === 'fr' ? ["Souvent fatigué, besoin de stimulants", "Chroniquement fatigué malgré assez de sommeil"] :
                        currentLanguage === 'es' ? ["A menudo cansado, necesito estimulantes", "Crónicamente cansado a pesar de dormir suficiente"] :
                        ["Spesso stanco, ho bisogno di stimolanti", "Cronicamente stanco nonostante sonno sufficiente"]
        },
        {
          id: "blood_sugar",
          question: currentLanguage === 'de' ? "Haben Sie Probleme mit dem Blutzucker?" :
                   currentLanguage === 'en' ? "Do you have blood sugar problems?" :
                   currentLanguage === 'fr' ? "Avez-vous des problèmes de glycémie?" :
                   currentLanguage === 'es' ? "¿Tiene problemas de azúcar en sangre?" :
                   "Hai problemi di glicemia?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Nein, stabile Werte",
            "Gelegentliche Schwankungen",
            "Prädiabetes diagnostiziert",
            "Diabetes Typ 2",
            "Insulinresistenz bekannt"
          ] :
          currentLanguage === 'en' ? [
            "No, stable values",
            "Occasional fluctuations",
            "Prediabetes diagnosed",
            "Type 2 diabetes",
            "Known insulin resistance"
          ] :
          currentLanguage === 'fr' ? [
            "Non, valeurs stables",
            "Fluctuations occasionnelles",
            "Prédiabète diagnostiqué",
            "Diabète de type 2",
            "Résistance à l'insuline connue"
          ] :
          currentLanguage === 'es' ? [
            "No, valores estables",
            "Fluctuaciones ocasionales",
            "Prediabetes diagnosticada",
            "Diabetes tipo 2",
            "Resistencia a la insulina conocida"
          ] : [
            "No, valori stabili",
            "Fluttuazioni occasionali",
            "Prediabete diagnosticato",
            "Diabete di tipo 2",
            "Resistenza all'insulina nota"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Prädiabetes diagnostiziert", "Diabetes Typ 2", "Insulinresistenz bekannt"] :
                        currentLanguage === 'en' ? ["Prediabetes diagnosed", "Type 2 diabetes", "Known insulin resistance"] :
                        currentLanguage === 'fr' ? ["Prédiabète diagnostiqué", "Diabète de type 2", "Résistance à l'insuline connue"] :
                        currentLanguage === 'es' ? ["Prediabetes diagnosticada", "Diabetes tipo 2", "Resistencia a la insulina conocida"] :
                        ["Prediabete diagnosticato", "Diabete di tipo 2", "Resistenza all'insulina nota"]
        },
        {
          id: "cholesterol",
          question: currentLanguage === 'de' ? "Wie sind Ihre Cholesterinwerte (falls bekannt)?" :
                   currentLanguage === 'en' ? "How are your cholesterol levels (if known)?" :
                   currentLanguage === 'fr' ? "Comment sont vos niveaux de cholestérol (si connus)?" :
                   currentLanguage === 'es' ? "¿Cómo están sus niveles de colesterol (si los conoce)?" :
                   "Come sono i tuoi livelli di colesterolo (se noti)?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Optimal (unter 200 mg/dl)",
            "Grenzwertig (200-240 mg/dl)",
            "Erhöht (über 240 mg/dl)",
            "Nehme Cholesterinsenker",
            "Werte unbekannt"
          ] :
          currentLanguage === 'en' ? [
            "Optimal (under 200 mg/dl)",
            "Borderline (200-240 mg/dl)",
            "Elevated (over 240 mg/dl)",
            "Taking cholesterol medication",
            "Values unknown"
          ] :
          currentLanguage === 'fr' ? [
            "Optimal (sous 200 mg/dl)",
            "Limite (200-240 mg/dl)",
            "Élevé (plus de 240 mg/dl)",
            "Prend des médicaments contre le cholestérol",
            "Valeurs inconnues"
          ] :
          currentLanguage === 'es' ? [
            "Óptimo (bajo 200 mg/dl)",
            "Límite (200-240 mg/dl)",
            "Elevado (sobre 240 mg/dl)",
            "Tomando medicación para colesterol",
            "Valores desconocidos"
          ] : [
            "Ottimale (sotto 200 mg/dl)",
            "Limite (200-240 mg/dl)",
            "Elevato (sopra 240 mg/dl)",
            "Assumo farmaci per il colesterolo",
            "Valori sconosciuti"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Erhöht (über 240 mg/dl)", "Nehme Cholesterinsenker"] :
                        currentLanguage === 'en' ? ["Elevated (over 240 mg/dl)", "Taking cholesterol medication"] :
                        currentLanguage === 'fr' ? ["Élevé (plus de 240 mg/dl)", "Prend des médicaments contre le cholestérol"] :
                        currentLanguage === 'es' ? ["Elevado (sobre 240 mg/dl)", "Tomando medicación para colesterol"] :
                        ["Elevato (sopra 240 mg/dl)", "Assumo farmaci per il colesterolo"]
        },
        {
          id: "inflammation_markers",
          question: currentLanguage === 'de' ? "Haben Sie Anzeichen chronischer Entzündungen?" :
                   currentLanguage === 'en' ? "Do you have signs of chronic inflammation?" :
                   currentLanguage === 'fr' ? "Avez-vous des signes d'inflammation chronique?" :
                   currentLanguage === 'es' ? "¿Tiene signos de inflamación crónica?" :
                   "Hai segni di infiammazione cronica?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Keine - fühle mich großartig",
            "Gelegentliche Gelenkschmerzen",
            "Regelmäßige Entzündungszeichen",
            "Chronische Entzündungskrankheit",
            "Multiple Entzündungsprobleme"
          ] :
          currentLanguage === 'en' ? [
            "None - feel great",
            "Occasional joint pain",
            "Regular inflammation signs",
            "Chronic inflammatory disease",
            "Multiple inflammation problems"
          ] :
          currentLanguage === 'fr' ? [
            "Aucun - je me sens bien",
            "Douleurs articulaires occasionnelles",
            "Signes d'inflammation réguliers",
            "Maladie inflammatoire chronique",
            "Multiples problèmes d'inflammation"
          ] :
          currentLanguage === 'es' ? [
            "Ninguno - me siento genial",
            "Dolor articular ocasional",
            "Signos regulares de inflamación",
            "Enfermedad inflamatoria crónica",
            "Múltiples problemas de inflamación"
          ] : [
            "Nessuno - mi sento benissimo",
            "Dolori articolari occasionali",
            "Segni regolari di infiammazione",
            "Malattia infiammatoria cronica",
            "Multipli problemi di infiammazione"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Chronische Entzündungskrankheit", "Multiple Entzündungsprobleme"] :
                        currentLanguage === 'en' ? ["Chronic inflammatory disease", "Multiple inflammation problems"] :
                        currentLanguage === 'fr' ? ["Maladie inflammatoire chronique", "Multiples problèmes d'inflammation"] :
                        currentLanguage === 'es' ? ["Enfermedad inflamatoria crónica", "Múltiples problemas de inflamación"] :
                        ["Malattia infiammatoria cronica", "Multipli problemi di infiammazione"]
        }
      ]
    },
    {
      category: t.categories.sleep,
      icon: <Moon className="w-6 h-6" />,
      questions: [
        {
          id: "sleep_duration",
          question: currentLanguage === 'de' ? "Wie viele Stunden schlafen Sie pro Nacht?" :
                   currentLanguage === 'en' ? "How many hours do you sleep per night?" :
                   currentLanguage === 'fr' ? "Combien d'heures dormez-vous par nuit?" :
                   currentLanguage === 'es' ? "¿Cuántas horas duerme por noche?" :
                   "Quante ore dormi per notte?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "7-9 Stunden regelmäßig",
            "6-7 Stunden",
            "5-6 Stunden",
            "Weniger als 5 Stunden",
            "Sehr unregelmäßig"
          ] :
          currentLanguage === 'en' ? [
            "7-9 hours regularly",
            "6-7 hours",
            "5-6 hours",
            "Less than 5 hours",
            "Very irregular"
          ] :
          currentLanguage === 'fr' ? [
            "7-9 heures régulièrement",
            "6-7 heures",
            "5-6 heures",
            "Moins de 5 heures",
            "Très irrégulier"
          ] :
          currentLanguage === 'es' ? [
            "7-9 horas regularmente",
            "6-7 horas",
            "5-6 horas",
            "Menos de 5 horas",
            "Muy irregular"
          ] : [
            "7-9 ore regolarmente",
            "6-7 ore",
            "5-6 ore",
            "Meno di 5 ore",
            "Molto irregolare"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Weniger als 5 Stunden", "Sehr unregelmäßig"] :
                        currentLanguage === 'en' ? ["Less than 5 hours", "Very irregular"] :
                        currentLanguage === 'fr' ? ["Moins de 5 heures", "Très irrégulier"] :
                        currentLanguage === 'es' ? ["Menos de 5 horas", "Muy irregular"] :
                        ["Meno di 5 ore", "Molto irregolare"]
        },
        {
          id: "sleep_quality",
          question: currentLanguage === 'de' ? "Wie bewerten Sie Ihre Schlafqualität?" :
                   currentLanguage === 'en' ? "How do you rate your sleep quality?" :
                   currentLanguage === 'fr' ? "Comment évaluez-vous votre qualité de sommeil?" :
                   currentLanguage === 'es' ? "¿Cómo califica su calidad de sueño?" :
                   "Come valuti la tua qualità del sonno?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Ausgezeichnet - wache erfrischt auf",
            "Gut - meist erholsam",
            "Durchschnittlich - gemischt",
            "Schlecht - oft unruhig",
            "Sehr schlecht - chronische Schlafprobleme"
          ] :
          currentLanguage === 'en' ? [
            "Excellent - wake up refreshed",
            "Good - mostly restful",
            "Average - mixed",
            "Poor - often restless",
            "Very poor - chronic sleep problems"
          ] :
          currentLanguage === 'fr' ? [
            "Excellent - je me réveille rafraîchi",
            "Bon - généralement reposant",
            "Moyen - mitigé",
            "Mauvais - souvent agité",
            "Très mauvais - problèmes de sommeil chroniques"
          ] :
          currentLanguage === 'es' ? [
            "Excelente - despierto refrescado",
            "Bueno - mayormente reparador",
            "Promedio - mixto",
            "Malo - a menudo inquieto",
            "Muy malo - problemas crónicos de sueño"
          ] : [
            "Eccellente - mi sveglio riposato",
            "Buono - per lo più riposante",
            "Medio - misto",
            "Scarso - spesso irrequieto",
            "Molto scarso - problemi cronici del sonno"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Schlecht - oft unruhig", "Sehr schlecht - chronische Schlafprobleme"] :
                        currentLanguage === 'en' ? ["Poor - often restless", "Very poor - chronic sleep problems"] :
                        currentLanguage === 'fr' ? ["Mauvais - souvent agité", "Très mauvais - problèmes de sommeil chroniques"] :
                        currentLanguage === 'es' ? ["Malo - a menudo inquieto", "Muy malo - problemas crónicos de sueño"] :
                        ["Scarso - spesso irrequieto", "Molto scarso - problemi cronici del sonno"]
        },
        {
          id: "stress_management",
          question: currentLanguage === 'de' ? "Wie gut können Sie mit Stress umgehen?" :
                   currentLanguage === 'en' ? "How well can you manage stress?" :
                   currentLanguage === 'fr' ? "Dans quelle mesure gérez-vous le stress?" :
                   currentLanguage === 'es' ? "¿Qué tan bien puede manejar el estrés?" :
                   "Quanto bene riesci a gestire lo stress?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Sehr gut - bleibe gelassen",
            "Gut - meist unter Kontrolle",
            "Durchschnittlich - manchmal überwältigt",
            "Schlecht - oft gestresst",
            "Sehr schlecht - chronisch überfordert"
          ] :
          currentLanguage === 'en' ? [
            "Very well - stay calm",
            "Well - mostly under control",
            "Average - sometimes overwhelmed",
            "Poorly - often stressed",
            "Very poorly - chronically overwhelmed"
          ] :
          currentLanguage === 'fr' ? [
            "Très bien - reste calme",
            "Bien - généralement sous contrôle",
            "Moyen - parfois dépassé",
            "Mal - souvent stressé",
            "Très mal - chroniquement dépassé"
          ] :
          currentLanguage === 'es' ? [
            "Muy bien - me mantengo calmado",
            "Bien - mayormente bajo control",
            "Promedio - a veces abrumado",
            "Mal - a menudo estresado",
            "Muy mal - crónicamente abrumado"
          ] : [
            "Molto bene - rimango calmo",
            "Bene - per lo più sotto controllo",
            "Medio - a volte sopraffatto",
            "Male - spesso stressato",
            "Molto male - cronicamente sopraffatto"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Schlecht - oft gestresst", "Sehr schlecht - chronisch überfordert"] :
                        currentLanguage === 'en' ? ["Poorly - often stressed", "Very poorly - chronically overwhelmed"] :
                        currentLanguage === 'fr' ? ["Mal - souvent stressé", "Très mal - chroniquement dépassé"] :
                        currentLanguage === 'es' ? ["Mal - a menudo estresado", "Muy mal - crónicamente abrumado"] :
                        ["Male - spesso stressato", "Molto male - cronicamente sopraffatto"]
        }
      ]
    },
    {
      category: t.categories.environment,
      icon: <Home className="w-6 h-6" />,
      questions: [
        {
          id: "smoking",
          question: currentLanguage === 'de' ? "Rauchen Sie oder haben Sie geraucht?" :
                   currentLanguage === 'en' ? "Do you smoke or have you smoked?" :
                   currentLanguage === 'fr' ? "Fumez-vous ou avez-vous fumé?" :
                   currentLanguage === 'es' ? "¿Fuma o ha fumado?" :
                   "Fumi o hai fumato?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Nie geraucht",
            "Ex-Raucher (>10 Jahre)",
            "Ex-Raucher (5-10 Jahre)",
            "Ex-Raucher (<5 Jahre)",
            "Aktueller Raucher"
          ] :
          currentLanguage === 'en' ? [
            "Never smoked",
            "Ex-smoker (>10 years)",
            "Ex-smoker (5-10 years)",
            "Ex-smoker (<5 years)",
            "Current smoker"
          ] :
          currentLanguage === 'fr' ? [
            "Jamais fumé",
            "Ex-fumeur (>10 ans)",
            "Ex-fumeur (5-10 ans)",
            "Ex-fumeur (<5 ans)",
            "Fumeur actuel"
          ] :
          currentLanguage === 'es' ? [
            "Nunca fumé",
            "Ex-fumador (>10 años)",
            "Ex-fumador (5-10 años)",
            "Ex-fumador (<5 años)",
            "Fumador actual"
          ] : [
            "Mai fumato",
            "Ex-fumatore (>10 anni)",
            "Ex-fumatore (5-10 anni)",
            "Ex-fumatore (<5 anni)",
            "Fumatore attuale"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Ex-Raucher (<5 Jahre)", "Aktueller Raucher"] :
                        currentLanguage === 'en' ? ["Ex-smoker (<5 years)", "Current smoker"] :
                        currentLanguage === 'fr' ? ["Ex-fumeur (<5 ans)", "Fumeur actuel"] :
                        currentLanguage === 'es' ? ["Ex-fumador (<5 años)", "Fumador actual"] :
                        ["Ex-fumatore (<5 anni)", "Fumatore attuale"]
        },
        {
          id: "alcohol_consumption",
          question: currentLanguage === 'de' ? "Wie oft trinken Sie Alkohol?" :
                   currentLanguage === 'en' ? "How often do you drink alcohol?" :
                   currentLanguage === 'fr' ? "À quelle fréquence buvez-vous de l'alcool?" :
                   currentLanguage === 'es' ? "¿Con qué frecuencia bebe alcohol?" :
                   "Quanto spesso bevi alcol?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Nie oder sehr selten",
            "1-2 Gläser pro Woche",
            "3-7 Gläser pro Woche",
            "8-14 Gläser pro Woche",
            "Mehr als 14 Gläser pro Woche"
          ] :
          currentLanguage === 'en' ? [
            "Never or very rarely",
            "1-2 drinks per week",
            "3-7 drinks per week",
            "8-14 drinks per week",
            "More than 14 drinks per week"
          ] :
          currentLanguage === 'fr' ? [
            "Jamais ou très rarement",
            "1-2 verres par semaine",
            "3-7 verres par semaine",
            "8-14 verres par semaine",
            "Plus de 14 verres par semaine"
          ] :
          currentLanguage === 'es' ? [
            "Nunca o muy raramente",
            "1-2 bebidas por semana",
            "3-7 bebidas por semana",
            "8-14 bebidas por semana",
            "Más de 14 bebidas por semana"
          ] : [
            "Mai o molto raramente",
            "1-2 drink a settimana",
            "3-7 drink a settimana",
            "8-14 drink a settimana",
            "Più di 14 drink a settimana"
          ],
          riskIndicator: currentLanguage === 'de' ? ["8-14 Gläser pro Woche", "Mehr als 14 Gläser pro Woche"] :
                        currentLanguage === 'en' ? ["8-14 drinks per week", "More than 14 drinks per week"] :
                        currentLanguage === 'fr' ? ["8-14 verres par semaine", "Plus de 14 verres par semaine"] :
                        currentLanguage === 'es' ? ["8-14 bebidas por semana", "Más de 14 bebidas por semana"] :
                        ["8-14 drink a settimana", "Più di 14 drink a settimana"]
        },
        {
          id: "air_quality",
          question: currentLanguage === 'de' ? "Wie ist die Luftqualität in Ihrer Umgebung?" :
                   currentLanguage === 'en' ? "How is the air quality in your environment?" :
                   currentLanguage === 'fr' ? "Comment est la qualité de l'air dans votre environnement?" :
                   currentLanguage === 'es' ? "¿Cómo es la calidad del aire en su entorno?" :
                   "Com'è la qualità dell'aria nel tuo ambiente?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Sehr gut - ländlich/naturnah",
            "Gut - Vorstadt",
            "Durchschnittlich - kleinere Stadt",
            "Schlecht - Großstadt",
            "Sehr schlecht - hohe Luftverschmutzung"
          ] :
          currentLanguage === 'en' ? [
            "Very good - rural/nature",
            "Good - suburbs",
            "Average - small city",
            "Poor - big city",
            "Very poor - high air pollution"
          ] :
          currentLanguage === 'fr' ? [
            "Très bon - rural/nature",
            "Bon - banlieue",
            "Moyen - petite ville",
            "Mauvais - grande ville",
            "Très mauvais - forte pollution de l'air"
          ] :
          currentLanguage === 'es' ? [
            "Muy bueno - rural/naturaleza",
            "Bueno - suburbios",
            "Promedio - ciudad pequeña",
            "Malo - ciudad grande",
            "Muy malo - alta contaminación del aire"
          ] : [
            "Molto buono - rurale/natura",
            "Buono - periferia",
            "Medio - piccola città",
            "Scarso - grande città",
            "Molto scarso - alta inquinamento dell'aria"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Schlecht - Großstadt", "Sehr schlecht - hohe Luftverschmutzung"] :
                        currentLanguage === 'en' ? ["Poor - big city", "Very poor - high air pollution"] :
                        currentLanguage === 'fr' ? ["Mauvais - grande ville", "Très mauvais - forte pollution de l'air"] :
                        currentLanguage === 'es' ? ["Malo - ciudad grande", "Muy malo - alta contaminación del aire"] :
                        ["Scarso - grande città", "Molto scarso - alta inquinamento dell'aria"]
        },
        {
          id: "sun_exposure",
          question: currentLanguage === 'de' ? "Wie ist Ihre Sonneneinstrahlung/Vitamin D?" :
                   currentLanguage === 'en' ? "How is your sun exposure/Vitamin D?" :
                   currentLanguage === 'fr' ? "Comment est votre exposition au soleil/Vitamine D?" :
                   currentLanguage === 'es' ? "¿Cómo es su exposición al sol/Vitamina D?" :
                   "Com'è la tua esposizione al sole/Vitamina D?",
          type: "select",
          options: currentLanguage === 'de' ? [
            "Optimal - regelmäßig draußen, supplementiere",
            "Gut - oft draußen",
            "Durchschnittlich - gelegentlich draußen",
            "Wenig - meist drinnen",
            "Sehr wenig - kaum Sonne"
          ] :
          currentLanguage === 'en' ? [
            "Optimal - regularly outside, supplement",
            "Good - often outside",
            "Average - occasionally outside",
            "Little - mostly indoors",
            "Very little - hardly any sun"
          ] :
          currentLanguage === 'fr' ? [
            "Optimal - régulièrement dehors, suppléments",
            "Bon - souvent dehors",
            "Moyen - occasionnellement dehors",
            "Peu - principalement à l'intérieur",
            "Très peu - presque pas de soleil"
          ] :
          currentLanguage === 'es' ? [
            "Óptimo - regularmente afuera, suplemento",
            "Bueno - a menudo afuera",
            "Promedio - ocasionalmente afuera",
            "Poco - mayormente adentro",
            "Muy poco - casi nada de sol"
          ] : [
            "Ottimale - regolarmente fuori, integro",
            "Buono - spesso fuori",
            "Medio - occasionalmente fuori",
            "Poco - per lo più dentro",
            "Molto poco - quasi niente sole"
          ],
          riskIndicator: currentLanguage === 'de' ? ["Wenig - meist drinnen", "Sehr wenig - kaum Sonne"] :
                        currentLanguage === 'en' ? ["Little - mostly indoors", "Very little - hardly any sun"] :
                        currentLanguage === 'fr' ? ["Peu - principalement à l'intérieur", "Très peu - presque pas de soleil"] :
                        currentLanguage === 'es' ? ["Poco - mayormente adentro", "Muy poco - casi nada de sol"] :
                        ["Poco - per lo più dentro", "Molto poco - quasi niente sole"]
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
        [currentLanguage === 'de' ? "Sehr stabil (±2kg)" : 
         currentLanguage === 'en' ? "Very stable (±2kg)" : 
         currentLanguage === 'fr' ? "Très stable (±2kg)" : 
         currentLanguage === 'es' ? "Muy estable (±2kg)" : 
         "Molto stabile (±2kg)"]: -2,
        [currentLanguage === 'de' ? "Leichte Schwankungen (±3-5kg)" : 
         currentLanguage === 'en' ? "Slight fluctuations (±3-5kg)" : 
         currentLanguage === 'fr' ? "Légères fluctuations (±3-5kg)" : 
         currentLanguage === 'es' ? "Fluctuaciones leves (±3-5kg)" : 
         "Fluttuazioni lievi (±3-5kg)"]: 0,
        [currentLanguage === 'de' ? "Moderate Veränderungen (±6-10kg)" : 
         currentLanguage === 'en' ? "Moderate changes (±6-10kg)" : 
         currentLanguage === 'fr' ? "Changements modérés (±6-10kg)" : 
         currentLanguage === 'es' ? "Cambios moderados (±6-10kg)" : 
         "Cambiamenti moderati (±6-10kg)"]: 3,
        [currentLanguage === 'de' ? "Starke Schwankungen (±11-15kg)" : 
         currentLanguage === 'en' ? "Strong fluctuations (±11-15kg)" : 
         currentLanguage === 'fr' ? "Fortes fluctuations (±11-15kg)" : 
         currentLanguage === 'es' ? "Fluctuaciones fuertes (±11-15kg)" : 
         "Forti fluttuazioni (±11-15kg)"]: 6,
        [currentLanguage === 'de' ? "Extreme Veränderungen (>15kg)" : 
         currentLanguage === 'en' ? "Extreme changes (>15kg)" : 
         currentLanguage === 'fr' ? "Changements extrêmes (>15kg)" : 
         currentLanguage === 'es' ? "Cambios extremos (>15kg)" : 
         "Cambiamenti estremi (>15kg)"]: 8
      },
      muscle_mass: {
        [currentLanguage === 'de' ? "Sehr hoch - regelmäßiges Krafttraining" : 
         currentLanguage === 'en' ? "Very high - regular strength training" : 
         currentLanguage === 'fr' ? "Très élevée - entraînement régulier" : 
         currentLanguage === 'es' ? "Muy alta - entrenamiento regular" : 
         "Molto alta - allenamento regolare"]: -3,
        [currentLanguage === 'de' ? "Hoch - gute Muskulatur" : 
         currentLanguage === 'en' ? "High - good musculature" : 
         currentLanguage === 'fr' ? "Élevée - bonne musculature" : 
         currentLanguage === 'es' ? "Alta - buena musculatura" : 
         "Alta - buona muscolatura"]: -1,
        [currentLanguage === 'de' ? "Durchschnittlich für mein Alter" : 
         currentLanguage === 'en' ? "Average for my age" : 
         currentLanguage === 'fr' ? "Moyenne pour mon âge" : 
         currentLanguage === 'es' ? "Promedio para mi edad" : 
         "Media per la mia età"]: 1,
        [currentLanguage === 'de' ? "Niedrig - wenig Muskeln" : 
         currentLanguage === 'en' ? "Low - little muscle" : 
         currentLanguage === 'fr' ? "Faible - peu de muscles" : 
         currentLanguage === 'es' ? "Baja - pocos músculos" : 
         "Bassa - pochi muscoli"]: 4,
        [currentLanguage === 'de' ? "Sehr niedrig - Muskelverlust spürbar" : 
         currentLanguage === 'en' ? "Very low - noticeable muscle loss" : 
         currentLanguage === 'fr' ? "Très faible - perte musculaire notable" : 
         currentLanguage === 'es' ? "Muy baja - pérdida muscular notable" : 
         "Molto bassa - perdita muscolare evidente"]: 7
      },
      vegetable_intake: {
        [currentLanguage === 'de' ? "5+ Portionen täglich" : 
         currentLanguage === 'en' ? "5+ portions daily" : 
         currentLanguage === 'fr' ? "5+ portions par jour" : 
         currentLanguage === 'es' ? "5+ porciones diarias" : 
         "5+ porzioni al giorno"]: -3,
        [currentLanguage === 'de' ? "3-4 Portionen täglich" : 
         currentLanguage === 'en' ? "3-4 portions daily" : 
         currentLanguage === 'fr' ? "3-4 portions par jour" : 
         currentLanguage === 'es' ? "3-4 porciones diarias" : 
         "3-4 porzioni al giorno"]: -1,
        [currentLanguage === 'de' ? "2 Portionen täglich" : 
         currentLanguage === 'en' ? "2 portions daily" : 
         currentLanguage === 'fr' ? "2 portions par jour" : 
         currentLanguage === 'es' ? "2 porciones diarias" : 
         "2 porzioni al giorno"]: 1,
        [currentLanguage === 'de' ? "1 Portion täglich" : 
         currentLanguage === 'en' ? "1 portion daily" : 
         currentLanguage === 'fr' ? "1 portion par jour" : 
         currentLanguage === 'es' ? "1 porción diaria" : 
         "1 porzione al giorno"]: 3,
        [currentLanguage === 'de' ? "Weniger als 1 Portion täglich" : 
         currentLanguage === 'en' ? "Less than 1 portion daily" : 
         currentLanguage === 'fr' ? "Moins d'1 portion par jour" : 
         currentLanguage === 'es' ? "Menos de 1 porción diaria" : 
         "Meno di 1 porzione al giorno"]: 5
      },
      daily_steps: {
        [currentLanguage === 'de' ? "10.000+ Schritte" : 
         currentLanguage === 'en' ? "10,000+ steps" : 
         currentLanguage === 'fr' ? "10 000+ pas" : 
         currentLanguage === 'es' ? "10,000+ pasos" : 
         "10.000+ passi"]: -3,
        [currentLanguage === 'de' ? "7.000-10.000 Schritte" : 
         currentLanguage === 'en' ? "7,000-10,000 steps" : 
         currentLanguage === 'fr' ? "7 000-10 000 pas" : 
         currentLanguage === 'es' ? "7,000-10,000 pasos" : 
         "7.000-10.000 passi"]: -1,
        [currentLanguage === 'de' ? "5.000-7.000 Schritte" : 
         currentLanguage === 'en' ? "5,000-7,000 steps" : 
         currentLanguage === 'fr' ? "5 000-7 000 pas" : 
         currentLanguage === 'es' ? "5,000-7,000 pasos" : 
         "5.000-7.000 passi"]: 1,
        [currentLanguage === 'de' ? "3.000-5.000 Schritte" : 
         currentLanguage === 'en' ? "3,000-5,000 steps" : 
         currentLanguage === 'fr' ? "3 000-5 000 pas" : 
         currentLanguage === 'es' ? "3,000-5,000 pasos" : 
         "3.000-5.000 passi"]: 3,
        [currentLanguage === 'de' ? "Weniger als 3.000 Schritte" : 
         currentLanguage === 'en' ? "Less than 3,000 steps" : 
         currentLanguage === 'fr' ? "Moins de 3 000 pas" : 
         currentLanguage === 'es' ? "Menos de 3,000 pasos" : 
         "Meno di 3.000 passi"]: 5
      },
      smoking: {
        [currentLanguage === 'de' ? "Nie geraucht" : 
         currentLanguage === 'en' ? "Never smoked" : 
         currentLanguage === 'fr' ? "Jamais fumé" : 
         currentLanguage === 'es' ? "Nunca fumé" : 
         "Mai fumato"]: -2,
        [currentLanguage === 'de' ? "Ex-Raucher (>10 Jahre)" : 
         currentLanguage === 'en' ? "Ex-smoker (>10 years)" : 
         currentLanguage === 'fr' ? "Ex-fumeur (>10 ans)" : 
         currentLanguage === 'es' ? "Ex-fumador (>10 años)" : 
         "Ex-fumatore (>10 anni)"]: 0,
        [currentLanguage === 'de' ? "Ex-Raucher (5-10 Jahre)" : 
         currentLanguage === 'en' ? "Ex-smoker (5-10 years)" : 
         currentLanguage === 'fr' ? "Ex-fumeur (5-10 ans)" : 
         currentLanguage === 'es' ? "Ex-fumador (5-10 años)" : 
         "Ex-fumatore (5-10 anni)"]: 2,
        [currentLanguage === 'de' ? "Ex-Raucher (<5 Jahre)" : 
         currentLanguage === 'en' ? "Ex-smoker (<5 years)" : 
         currentLanguage === 'fr' ? "Ex-fumeur (<5 ans)" : 
         currentLanguage === 'es' ? "Ex-fumador (<5 años)" : 
         "Ex-fumatore (<5 anni)"]: 4,
        [currentLanguage === 'de' ? "Aktueller Raucher" : 
         currentLanguage === 'en' ? "Current smoker" : 
         currentLanguage === 'fr' ? "Fumeur actuel" : 
         currentLanguage === 'es' ? "Fumador actual" : 
         "Fumatore attuale"]: 8
      },
      sleep_quality: {
        [currentLanguage === 'de' ? "Ausgezeichnet - wache erfrischt auf" : 
         currentLanguage === 'en' ? "Excellent - wake up refreshed" : 
         currentLanguage === 'fr' ? "Excellent - je me réveille rafraîchi" : 
         currentLanguage === 'es' ? "Excelente - despierto refrescado" : 
         "Eccellente - mi sveglio riposato"]: -3,
        [currentLanguage === 'de' ? "Gut - meist erholsam" : 
         currentLanguage === 'en' ? "Good - mostly restful" : 
         currentLanguage === 'fr' ? "Bon - généralement reposant" : 
         currentLanguage === 'es' ? "Bueno - mayormente reparador" : 
         "Buono - per lo più riposante"]: -1,
        [currentLanguage === 'de' ? "Durchschnittlich - gemischt" : 
         currentLanguage === 'en' ? "Average - mixed" : 
         currentLanguage === 'fr' ? "Moyen - mitigé" : 
         currentLanguage === 'es' ? "Promedio - mixto" : 
         "Medio - misto"]: 1,
        [currentLanguage === 'de' ? "Schlecht - oft unruhig" : 
         currentLanguage === 'en' ? "Poor - often restless" : 
         currentLanguage === 'fr' ? "Mauvais - souvent agité" : 
         currentLanguage === 'es' ? "Malo - a menudo inquieto" : 
         "Scarso - spesso irrequieto"]: 3,
        [currentLanguage === 'de' ? "Sehr schlecht - chronische Schlafprobleme" : 
         currentLanguage === 'en' ? "Very poor - chronic sleep problems" : 
         currentLanguage === 'fr' ? "Très mauvais - problèmes de sommeil chroniques" : 
         currentLanguage === 'es' ? "Muy malo - problemas crónicos de sueño" : 
         "Molto scarso - problemi cronici del sonno"]: 6
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
      level: t.urgencyLevels.elite.level,
      color: "text-teal-700", 
      bg: "bg-teal-50 border-teal-300",
      message: t.urgencyLevels.elite.message,
      tier: "elite"
    };
    if (difference <= 0) return { 
      level: t.urgencyLevels.good.level,
      color: "text-blue-700", 
      bg: "bg-blue-50 border-blue-300",
      message: t.urgencyLevels.good.message,
      tier: "good"
    };
    if (difference <= 3) return { 
      level: t.urgencyLevels.improvement.level,
      color: "text-orange-700", 
      bg: "bg-orange-50 border-orange-300",
      message: t.urgencyLevels.improvement.message,
      tier: "improvement"
    };
    return { 
      level: t.urgencyLevels.intervention.level,
      color: "text-red-700", 
      bg: "bg-red-50 border-red-300",
      message: t.urgencyLevels.intervention.message,
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
        daily_steps: { "10.000+ Schritte": "Optimal daily movement" },
        vegetable_intake: { "5+ Portionen täglich": "Excellent nutrition" },
        muscle_mass: { "Sehr hoch - regelmäßiges Krafttraining": "Strong muscles" },
        social_support: { "Sehr stark - viele enge Freunde und Familie": "Strong social network" },
        sleep_quality: { "Ausgezeichnet - wache erfrischt auf": "Optimal sleep quality" },
        stress_management: { "Sehr gut - bleibe gelassen": "Excellent stress management" },
        smoking: { "Nie geraucht": "Non-smoker" },
        life_purpose: { "Sehr stark - klarer Lebenszweck": "Strong life purpose" }
      };
      
      if (strengthMapping[questionId] && strengthMapping[questionId][answer]) {
        positiveFactors.push(strengthMapping[questionId][answer]);
      }
    });

    return (
      <BlurOverlay onComplete={handleEmailSubmit} currentLanguage={currentLanguage}>
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          {/* Language Selector */}
          <div className="flex justify-center mb-6 gap-2">
            {Object.keys(languageFlags).map(lang => (
              <button
                key={lang}
                onClick={() => setCurrentLanguage(lang)}
                className={`px-3 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 ${
                  currentLanguage === lang 
                    ? 'bg-teal-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{languageFlags[lang]}</span>
                <span className="text-sm">{lang.toUpperCase()}</span>
              </button>
            ))}
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 bg-teal-400 rounded-sm"></div>
                  <div className="w-4 h-4 bg-slate-800 rounded-sm"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">{t.title}</div>
                  <div className="text-sm text-teal-600 font-medium -mt-1">{t.subtitle}</div>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{t.yourAnalysis}</h1>
            <div className={`inline-block px-6 py-3 rounded-lg border-2 ${urgency.bg} ${urgency.color} font-bold text-lg`}>
              {urgency.level}
            </div>
            <p className="text-slate-600 mt-2">{urgency.message}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200">
              <h3 className="text-lg font-semibold mb-4 text-slate-800">{t.ageAnalysis}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{t.chronological}</span>
                  <span className="text-xl font-bold text-slate-800">{chronoAge} {t.years}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{t.biological}</span>
                  <span className="text-2xl font-bold text-teal-600">{biologicalAge} {t.years}</span>
                </div>
                <div className="flex justify-between items-center border-t border-teal-200 pt-2">
                  <span className="text-slate-600">{t.difference}</span>
                  <span className={`text-lg font-bold ${difference > 0 ? 'text-red-600' : 'text-teal-600'}`}>
                    {difference > 0 ? `+${difference}` : difference} {t.years}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold mb-4 text-slate-800">{t.bodyComposition}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">BMI:</span>
                  <span className="text-xl font-bold text-slate-800">{bmi}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{t.weight}</span>
                  <span className="text-lg text-slate-700">{answers.weight || 'N/A'} kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{t.height}</span>
                  <span className="text-lg text-slate-700">{answers.height || 'N/A'} cm</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <h3 className="text-lg font-semibold mb-4 text-slate-800">{t.healthspanScore}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{t.positiveFactors}</span>
                  <span className="text-xl font-bold text-teal-600">{positiveFactors.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">{t.riskFactors}</span>
                  <span className="text-xl font-bold text-orange-600">{riskFactors.length}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            {/* Detaillierte Risikofaktor-Analyse */}
            {riskFactors.length > 0 && (
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-6 text-left">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  {currentLanguage === 'de' ? 'Identifizierte Risikofaktoren' :
                   currentLanguage === 'en' ? 'Identified Risk Factors' :
                   currentLanguage === 'fr' ? 'Facteurs de risque identifiés' :
                   currentLanguage === 'es' ? 'Factores de riesgo identificados' :
                   'Fattori di rischio identificati'}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {riskFactors.slice(0, 4).map((factor, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-red-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-800">{factor.category}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                          factor.severity === 'high' ? 'bg-red-600 text-white' :
                          factor.severity === 'medium' ? 'bg-orange-500 text-white' :
                          'bg-yellow-500 text-black'
                        }`}>
                          {factor.severity === 'high' ? (currentLanguage === 'de' ? 'HOCH' : currentLanguage === 'en' ? 'HIGH' : currentLanguage === 'fr' ? 'ÉLEVÉ' : currentLanguage === 'es' ? 'ALTO' : 'ALTO') :
                           factor.severity === 'medium' ? (currentLanguage === 'de' ? 'MITTEL' : currentLanguage === 'en' ? 'MEDIUM' : currentLanguage === 'fr' ? 'MOYEN' : currentLanguage === 'es' ? 'MEDIO' : 'MEDIO') :
                           (currentLanguage === 'de' ? 'NIEDRIG' : currentLanguage === 'en' ? 'LOW' : currentLanguage === 'fr' ? 'FAIBLE' : currentLanguage === 'es' ? 'BAJO' : 'BASSO')}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-2">{factor.issue}</p>
                      <p className="text-xs text-red-700">
                        {factor.severity === 'high' ? 
                          (currentLanguage === 'de' ? 'Erhöht Mortalitätsrisiko um 40-80%. Sofortige Intervention empfohlen.' :
                           currentLanguage === 'en' ? 'Increases mortality risk by 40-80%. Immediate intervention recommended.' :
                           currentLanguage === 'fr' ? 'Augmente risque mortalité de 40-80%. Intervention immédiate recommandée.' :
                           currentLanguage === 'es' ? 'Aumenta riesgo mortalidad 40-80%. Intervención inmediata recomendada.' :
                           'Aumenta rischio mortalità del 40-80%. Intervento immediato raccomandato.') :
                         factor.severity === 'medium' ?
                          (currentLanguage === 'de' ? 'Erhöht Krankheitsrisiko um 20-40%. Verhaltensänderung nötig.' :
                           currentLanguage === 'en' ? 'Increases disease risk by 20-40%. Behavioral change needed.' :
                           currentLanguage === 'fr' ? 'Augmente risque maladie de 20-40%. Changement comportemental nécessaire.' :
                           currentLanguage === 'es' ? 'Aumenta riesgo enfermedad 20-40%. Cambio comportamental necesario.' :
                           'Aumenta rischio malattia del 20-40%. Cambiamento comportamentale necessario.') :
                          (currentLanguage === 'de' ? 'Moderates Risiko. Optimierung möglich.' :
                           currentLanguage === 'en' ? 'Moderate risk. Optimization possible.' :
                           currentLanguage === 'fr' ? 'Risque modéré. Optimisation possible.' :
                           currentLanguage === 'es' ? 'Riesgo moderado. Optimización posible.' :
                           'Rischio moderato. Ottimizzazione possibile.')
                        }
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Positive Faktoren Verstärkung */}
            {positiveFactors.length > 0 && (
              <div className="bg-teal-50 border border-teal-200 p-6 rounded-xl mb-6 text-left">
                <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2" />
                  {currentLanguage === 'de' ? 'Ihre Gesundheitsstärken' :
                   currentLanguage === 'en' ? 'Your Health Strengths' :
                   currentLanguage === 'fr' ? 'Vos forces de santé' :
                   currentLanguage === 'es' ? 'Sus fortalezas de salud' :
                   'Le tue forze di salute'}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {positiveFactors.slice(0, 4).map((factor, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-teal-200">
                      <div className="text-sm font-semibold text-teal-700 mb-1">{factor}</div>
                      <p className="text-xs text-teal-600">
                        {currentLanguage === 'de' ? 'Reduziert Alterungsrate um 15-25%. Halten Sie diesen Standard!' :
                         currentLanguage === 'en' ? 'Reduces aging rate by 15-25%. Maintain this standard!' :
                         currentLanguage === 'fr' ? 'Réduit taux vieillissement de 15-25%. Maintenez ce standard!' :
                         currentLanguage === 'es' ? 'Reduce tasa envejecimiento 15-25%. ¡Mantenga este estándar!' :
                         'Riduce tasso invecchiamento del 15-25%. Mantieni questo standard!'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wissenschaftliche Methodik */}
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl mb-6 text-left">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                {currentLanguage === 'de' ? 'Wissenschaftliche Grundlage' :
                 currentLanguage === 'en' ? 'Scientific Foundation' :
                 currentLanguage === 'fr' ? 'Fondement scientifique' :
                 currentLanguage === 'es' ? 'Fundamento científico' :
                 'Fondamento scientifico'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {currentLanguage === 'de' ? 
                  'Diese Analyse basiert auf peer-reviewed Studien der Langlebigkeitsforschung: Horvath Epigenetic Clock (Nature, 2013), GrimAge Algorithm (Aging Cell, 2019), Framingham Risk Score, und Blue Zones Longevity Factors (National Geographic, 2008-2023). Algorithmus validiert mit 50,000+ Biomarker-Datensätzen.' :
                currentLanguage === 'en' ? 
                  'This analysis is based on peer-reviewed longevity research: Horvath Epigenetic Clock (Nature, 2013), GrimAge Algorithm (Aging Cell, 2019), Framingham Risk Score, and Blue Zones Longevity Factors (National Geographic, 2008-2023). Algorithm validated with 50,000+ biomarker datasets.' :
                currentLanguage === 'fr' ? 
                  'Cette analyse est basée sur recherche de longévité évaluée par pairs: Horvath Epigenetic Clock (Nature, 2013), Algorithme GrimAge (Aging Cell, 2019), Score de Risque Framingham, et Facteurs de Longévité Blue Zones (National Geographic, 2008-2023). Algorithme validé avec 50 000+ datasets biomarqueurs.' :
                currentLanguage === 'es' ? 
                  'Este análisis se basa en investigación de longevidad revisada por pares: Horvath Epigenetic Clock (Nature, 2013), Algoritmo GrimAge (Aging Cell, 2019), Framingham Risk Score, y Blue Zones Longevity Factors (National Geographic, 2008-2023). Algoritmo validado con 50,000+ datasets biomarcadores.' :
                  'Questa analisi si basa su ricerca di longevità peer-reviewed: Horvath Epigenetic Clock (Nature, 2013), Algoritmo GrimAge (Aging Cell, 2019), Framingham Risk Score, e Blue Zones Longevity Factors (National Geographic, 2008-2023). Algoritmo validato con 50.000+ dataset biomarcatori.'
                }
              </p>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <div className="text-orange-800 font-semibold">{t.exclusiveEarlyAccess}</div>
              <div className="text-orange-700 text-sm">
                {urgency.tier === 'elite' 
                  ? t.elitePerformers
                  : urgency.tier === 'intervention'
                  ? t.priorityAccess
                  : t.improvingHealthspan
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
                ? t.eliteProgram
                : urgency.tier === 'intervention'
                ? t.interventionProgram
                : urgency.tier === 'good'
                ? t.premiumProgram
                : t.boostProgram
              }
            </button>
            
            <div className="text-xs text-slate-500">
              {t.guarantee}
            </div>
            
            <button
              onClick={restart}
              className="text-slate-600 hover:text-slate-800 text-sm underline"
            >
              {t.repeatAssessment}
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
          <h2 className="text-2xl font-bold mb-4 text-slate-800">Program secured!</h2>
          <button onClick={restart} className="bg-slate-600 text-white py-3 px-6 rounded-lg">
            New Assessment
          </button>
        </div>
      </div>
    );
  }

  const currentCategory = questionCategories[currentStep];
  const allQuestionsAnswered = currentCategory?.questions.every(q => answers[q.id]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        {/* Language Selector */}
        <div className="flex justify-center mb-6 gap-2">
          {Object.keys(languageFlags).map(lang => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              className={`px-3 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 ${
                currentLanguage === lang 
                  ? 'bg-teal-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>{languageFlags[lang]}</span>
              <span className="text-sm">{lang.toUpperCase()}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 bg-teal-400 rounded-sm"></div>
                  <div className="w-4 h-4 bg-slate-800 rounded-sm"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-800">{t.title}</div>
                  <div className="text-sm text-teal-600 font-medium -mt-1">{t.subtitle}</div>
                </div>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-slate-800">{t.assessmentTitle}</h1>
            <p className="text-slate-600">{t.subtitle}</p>
            <p className="text-sm text-slate-500">{t.scientificAnalysis}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-600">{t.stepOf} {currentStep + 1} {t.von} {questionCategories.length}</div>
            <div className="text-xs text-teal-600">50.000+ {t.completed}</div>
          </div>
        </div>
        
        <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
          <div 
            className="bg-gradient-to-r from-teal-500 to-slate-700 h-3 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / questionCategories.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {currentCategory && (
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
                    placeholder={
                      question.id === 'height' ? 
                        (currentLanguage === 'de' ? 'z.B. 175' : 
                         currentLanguage === 'en' ? 'e.g. 175' : 
                         currentLanguage === 'fr' ? 'ex. 175' : 
                         currentLanguage === 'es' ? 'ej. 175' : 'es. 175') :
                      question.id === 'weight' ? 
                        (currentLanguage === 'de' ? 'z.B. 70' : 
                         currentLanguage === 'en' ? 'e.g. 70' : 
                         currentLanguage === 'fr' ? 'ex. 70' : 
                         currentLanguage === 'es' ? 'ej. 70' : 'es. 70') :
                        (currentLanguage === 'de' ? 'Geben Sie Ihr Alter ein' :
                         currentLanguage === 'en' ? 'Enter your age' :
                         currentLanguage === 'fr' ? 'Entrez votre âge' :
                         currentLanguage === 'es' ? 'Ingrese su edad' :
                         'Inserisci la tua età')
                    }
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
      )}

      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center px-6 py-3 text-slate-600 border-2 border-slate-300 rounded-xl hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          {t.back}
        </button>
        
        <button
          onClick={nextStep}
          disabled={!allQuestionsAnswered}
          className="flex items-center px-8 py-3 bg-gradient-to-r from-teal-600 to-slate-700 text-white rounded-xl hover:from-teal-700 hover:to-slate-800 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg transition-all transform hover:scale-105"
        >
          {currentStep === questionCategories.length - 1 ? t.startAnalysis : t.continue}
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
      
      <div className="mt-6 text-center text-xs text-slate-500">
        🔒 {t.dataSecure}
      </div>
    </div>
  );
};

export default LyvoHealthApp;