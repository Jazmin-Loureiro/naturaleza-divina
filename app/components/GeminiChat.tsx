'use client';
import { useState, useRef, useEffect } from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export default function GeminiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: '¡Hola! 🌟 Soy el asistente virtual de Naturaleza Divina. ¿En qué puedo ayudarte hoy con nuestras fragancias alquímicas?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll hacia el último mensaje recibido
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }]);
    setLoading(true);

    try {
      // Llamamos a nuestra API Route interna que creamos en app/api/chat/route.ts
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { sender: 'bot', text: 'Disculpame, tuve un problema al procesar tu consulta.' }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'No me pude conectar con el servidor. Intentá de nuevo más tarde.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* BOTÓN / BURBUJA FLOTANTE */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-tr from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-amber-400/30"
          aria-label="Abrir asistente virtual"
        >
          {/* Nuevo SVG: Estrella Alquímica / Destello Místico */}
          <svg 
            className="w-7 h-7 fill-current" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2c.4 0 .7.3.9.7l2.2 5.1 5.1 2.2c.4.2.7.5.7.9s-.3.7-.7.9l-5.1 2.2-2.2 5.1c-.2.4-.5.7-.9.7s-.7-.3-.9-.7l-2.2-5.1-5.1-2.2c-.4-.2-.7-.5-.7-.9s.3-.7.7-.9l5.1-2.2 2.2-5.1c.2-.4.5-.7.9-.7zM12 5.2L10.4 9 6.6 10.6l3.8 1.6 1.6 3.8 1.6-3.8 3.8-1.6-3.8-1.6L12 5.2z"/>
          </svg>
        </button>
      )}

      {/* VENTANA DEL CHAT */}
      {isOpen && (
        <div className="bg-[#FFFDF6] border border-stone-200/80 w-[85vw] sm:w-96 h-[450px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Encabezado */}
          <div className="bg-gradient-to-r from-emerald-800 to-emerald-950 p-4 flex items-center justify-between text-white border-b border-stone-200/20">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse"></div>
              <div>
                <h4 className="font-serif text-sm font-medium">Asistente Divino</h4>
                <p className="text-[10px] text-stone-300 font-light">Conexión alquímica con IA</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-stone-300 hover:text-white transition-colors text-sm font-semibold px-2"
            >
              ✕
            </button>
          </div>

          {/* Área de Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-stone-50/50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-xs leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-emerald-700 text-white rounded-tr-none'
                      : 'bg-white text-stone-800 border border-stone-200/60 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-stone-400 border border-stone-200/60 rounded-2xl rounded-tl-none px-4 py-2 text-xs italic flex items-center gap-1">
                  <span className="animate-bounce">●</span>
                  <span className="animate-bounce [animation-delay:0.2s]">●</span>
                  <span className="animate-bounce [animation-delay:0.4s]">●</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Formulario de Entrada */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-stone-100 flex gap-2 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Preguntame sobre un Arcángel o fragancia..."
              className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-emerald-700 text-stone-800"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-emerald-700 text-white p-2 rounded-xl hover:bg-emerald-800 transition-colors disabled:bg-stone-200 disabled:text-stone-400"
            >
              <svg className="w-4 h-4 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>

        </div>
      )}
    </div>
  );
}