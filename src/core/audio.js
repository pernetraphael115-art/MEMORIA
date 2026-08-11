/* ============================================
   MÉMORÍA — Audio (Google Translate TTS + fallback)
   ============================================ */

let audioElement = null;
let synthFallback = null;
let spanishVoice = null;

/**
 * Initialize audio system
 */
export function initAudio() {
  // Pre-create reusable audio element
  audioElement = new Audio();
  audioElement.crossOrigin = 'anonymous';
  
  // Also prepare Web Speech API as fallback
  if ('speechSynthesis' in window) {
    synthFallback = window.speechSynthesis;
    
    function loadVoices() {
      const voices = synthFallback.getVoices();
      spanishVoice = voices.find(v => v.lang === 'es-ES' && v.localService) ||
                     voices.find(v => v.lang === 'es-ES') ||
                     voices.find(v => v.lang.startsWith('es-'));
    }
    
    loadVoices();
    if (synthFallback.onvoiceschanged !== undefined) {
      synthFallback.onvoiceschanged = loadVoices;
    }
  }
}

/**
 * Speak Spanish text using Google Translate TTS (high quality)
 * Falls back to Web Speech API if Google TTS fails
 */
export function speak(text, rate = 1) {
  if (!text) return;
  
  // Clean text for TTS
  const cleanText = text
    .replace(/\.\.\./g, ' ')
    .replace(/\//g, ' ')
    .trim();
  
  if (!cleanText) return;
  
  // Stop any current playback
  stop();
  
  // Try Google Translate TTS first (much better quality)
  const encoded = encodeURIComponent(cleanText);
  const url = `https://translate.googleapis.com/translate_tts?ie=UTF-8&tl=es-ES&client=gtx&q=${encoded}&ttsspeed=${rate}`;
  
  audioElement.src = url;
  audioElement.playbackRate = rate;
  
  const playPromise = audioElement.play();
  
  if (playPromise) {
    playPromise.catch(() => {
      // Google TTS failed, fallback to Web Speech API
      speakWithSynthesis(cleanText, rate);
    });
  }
}

/**
 * Fallback: Web Speech API synthesis
 */
function speakWithSynthesis(text, rate = 0.9) {
  if (!synthFallback) return;
  
  synthFallback.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-ES';
  utterance.rate = rate;
  utterance.pitch = 1;
  utterance.volume = 1;
  
  if (spanishVoice) {
    utterance.voice = spanishVoice;
  }
  
  synthFallback.speak(utterance);
}

/**
 * Stop all playback
 */
export function stop() {
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
  }
  if (synthFallback) {
    synthFallback.cancel();
  }
}

/**
 * Speak slowly (for learning)
 */
export function speakSlow(text) {
  speak(text, 0.75);
}

/**
 * Check if audio is available
 */
export function isAudioAvailable() {
  return true; // Always true since we have multiple backends
}
