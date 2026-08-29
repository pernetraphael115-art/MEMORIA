/* ============================================
   MÉMORÍA — Audio (Web Speech API + Google TTS fallback)
   ============================================ */

let synthReady = false;
let spanishVoice = null;
let frenchVoice = null;

/**
 * Initialize audio system
 */
export function initAudio() {
  if ('speechSynthesis' in window) {
    function loadVoices() {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length === 0) return;
      
      // Find best Spanish voice
      spanishVoice = voices.find(v => v.lang === 'es-ES' && v.localService) ||
                     voices.find(v => v.lang === 'es-ES') ||
                     voices.find(v => v.lang === 'es-MX') ||
                     voices.find(v => v.lang.startsWith('es'));
      
      // Find best French voice
      frenchVoice = voices.find(v => v.lang === 'fr-FR' && v.localService) ||
                    voices.find(v => v.lang === 'fr-FR') ||
                    voices.find(v => v.lang.startsWith('fr'));
      
      synthReady = true;
    }
    
    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    
    // iOS Safari needs a user interaction to unlock speech
    // We set a flag so that the first call to speak() can retry
    setTimeout(loadVoices, 500);
  }
}

/**
 * Speak text using Web Speech API
 * @param {string} text - Text to speak
 * @param {number} rate - Speech rate (0.5 to 2)
 * @param {string} lang - Language code ('es' or 'fr')
 */
export function speak(text, rate = 1, lang = 'es') {
  if (!text || !('speechSynthesis' in window)) return;
  
  // Clean text for TTS
  const cleanText = text
    .replace(/\.\.\./g, ' ')
    .replace(/\//g, ' ')
    .replace(/[""«»]/g, '')
    .trim();
  
  if (!cleanText) return;
  
  // Stop any current playback
  stop();
  
  // Use Web Speech API
  const utterance = new SpeechSynthesisUtterance(cleanText);
  
  if (lang === 'fr') {
    utterance.lang = 'fr-FR';
    if (frenchVoice) utterance.voice = frenchVoice;
  } else {
    utterance.lang = 'es-ES';
    if (spanishVoice) utterance.voice = spanishVoice;
  }
  
  utterance.rate = rate;
  utterance.pitch = 1;
  utterance.volume = 1;
  
  // iOS Safari workaround: cancel + speak
  window.speechSynthesis.cancel();
  
  // Small delay to let cancel take effect
  setTimeout(() => {
    window.speechSynthesis.speak(utterance);
  }, 50);
}

/**
 * Stop all playback
 */
export function stop() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

/**
 * Speak slowly (for learning)
 */
export function speakSlow(text, lang = 'es') {
  speak(text, 0.75, lang);
}

/**
 * Check if audio is available
 */
export function isAudioAvailable() {
  return 'speechSynthesis' in window;
}
