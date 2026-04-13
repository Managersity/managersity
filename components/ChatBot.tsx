"use client";

import { useState, useRef, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/221771017188";
const MAIL_URL = "mailto:contact@managersity.com";

type Message = {
  from: "bot" | "user";
  text: string;
  actions?: { label: string; url: string; icon: "wa" | "mail" }[];
};

const GREETING: Message = {
  from: "bot",
  text: "Bonjour 👋 Je suis l'assistant Managersity ! Comment puis-je vous aider ?\n\nVoici quelques sujets fréquents :",
  actions: undefined,
};

const QUICK_REPLIES = [
  "Voir les formations",
  "Prix & paiement",
  "Certifications",
  "Accéder à mon cours",
  "Parler à un conseiller",
];

const ESCALATION: Message = {
  from: "bot",
  text: "Je vais vous mettre en relation avec notre équipe. Choisissez votre moyen de contact préféré :",
  actions: [
    { label: "WhatsApp", url: WHATSAPP_URL, icon: "wa" },
    { label: "Envoyer un mail", url: MAIL_URL, icon: "mail" },
  ],
};

function matchReply(input: string): Message {
  const q = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (/bonjour|salut|hello|bonsoir|coucou|yo/.test(q)) {
    return { from: "bot", text: "Bonjour ! 😊 Ravi de vous accueillir sur Managersity. Comment puis-je vous aider aujourd'hui ?" };
  }

  if (/formation|cours|apprendre|catalogue|collection|module|programme/.test(q)) {
    return {
      from: "bot",
      text: "Managersity propose plus de 100 modules de formation en management, leadership, développement personnel, transformation digitale et bien plus.\n\n👉 Consultez toutes nos formations ici :",
      actions: [{ label: "Voir les formations", url: "https://www.managersity.com/tous-les-cours", icon: "wa" }],
    };
  }

  if (/prix|tarif|cout|combien|paiement|payer|mobile money|wave|orange money|mtn|moov|carte/.test(q)) {
    return {
      from: "bot",
      text: "Nos formations sont accessibles à partir de 14 900 FCFA.\n\n💳 Moyens de paiement acceptés :\n• Carte bancaire (Visa / Mastercard)\n• Wave, Orange Money, MTN Money, Moov Money\n• Paiement in USD disponible\n\nPour connaître le tarif d'une formation spécifique, consultez sa page ou contactez-nous.",
    };
  }

  if (/certif|diplome|attestation|reconnaissance|valide/.test(q)) {
    return {
      from: "bot",
      text: "✅ Oui, toutes nos formations donnent droit à une certification !\n\nAprès avoir suivi la formation, passez le test d'évaluation avec au moins 70% de réussite pour obtenir votre certificat Managersity, délivré par H&C Executive Education.\n\nNos certifications sont reconnues par des entreprises comme Orange, Ecobank, MTN, Rawbank, Attijariwafa Bank et bien d'autres.",
    };
  }

  if (/acces|plateforme|connexion|compte|login|mot de passe|inscription|s'inscrire|s inscrire|enroll/.test(q)) {
    return {
      from: "bot",
      text: "Après votre achat, vous recevez un email avec vos identifiants de connexion pour accéder à la plateforme en ligne.\n\nSi vous n'avez pas reçu vos accès ou si vous avez un problème de connexion, notre équipe est là pour vous aider 👇",
      actions: [
        { label: "WhatsApp", url: WHATSAPP_URL, icon: "wa" },
        { label: "Envoyer un mail", url: MAIL_URL, icon: "mail" },
      ],
    };
  }

  if (/duree|temps|long|heure|semaine/.test(q)) {
    return {
      from: "bot",
      text: "⏱️ La durée varie selon la formation : de quelques heures pour un module certifiant à plusieurs semaines pour un parcours complet.\n\nChaque formation est accessible à votre rythme, sans contrainte d'horaire.",
    };
  }

  if (/langue|francais|anglais/.test(q)) {
    return { from: "bot", text: "Toutes nos formations sont dispensées en français. 🇫🇷" };
  }

  if (/remboursement|satisfait|garantie/.test(q)) {
    return {
      from: "bot",
      text: "Pour toute question concernant notre politique de remboursement ou des garanties, notre équipe vous répondra directement :",
      actions: [
        { label: "WhatsApp", url: WHATSAPP_URL, icon: "wa" },
        { label: "Envoyer un mail", url: MAIL_URL, icon: "mail" },
      ],
    };
  }

  if (/conseiller|humain|contact|aide|probleme|problème|question|besoin|parler|agent|support/.test(q)) {
    return ESCALATION;
  }

  // Default fallback
  return {
    from: "bot",
    text: "Je n'ai pas de réponse précise à cette question pour le moment. Notre équipe sera ravie de vous aider directement :",
    actions: [
      { label: "WhatsApp", url: WHATSAPP_URL, icon: "wa" },
      { label: "Envoyer un mail", url: MAIL_URL, icon: "mail" },
    ],
  };
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send(text: string) {
    if (!text.trim()) return;
    setShowQuickReplies(false);
    const userMsg: Message = { from: "user", text: text.trim() };

    // Special quick reply: "Voir les formations"
    if (text === "Voir les formations") {
      setMessages((m) => [
        ...m,
        userMsg,
        { from: "bot", text: "Consultez toutes nos formations ici 👇", actions: [{ label: "Voir les formations", url: "https://www.managersity.com/tous-les-cours", icon: "wa" }] },
      ]);
      setInput("");
      return;
    }

    // Special quick reply: "Parler à un conseiller"
    if (text === "Parler à un conseiller") {
      setMessages((m) => [...m, userMsg, ESCALATION]);
      setInput("");
      return;
    }

    const reply = matchReply(text);
    setMessages((m) => [...m, userMsg, reply]);
    setInput("");
  }

  function handleAction(url: string) {
    if (url.startsWith("http") || url.startsWith("mailto")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Ouvrir le chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-green text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-1.5rem)] flex flex-col rounded-2xl shadow-2xl border border-gray-200 overflow-hidden bg-white">
          {/* Header */}
          <div className="bg-brand-green px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-sm shrink-0">M</div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">Assistant Managersity</p>
              <p className="text-white/70 text-xs">Répond instantanément</p>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-white/70 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 max-h-80 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] ${msg.from === "user" ? "bg-brand-green text-white" : "bg-white text-gray-800 border border-gray-200"} rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  {msg.actions && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {msg.actions.map((action, j) => (
                        <button
                          key={j}
                          onClick={() => handleAction(action.url)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                            action.icon === "wa"
                              ? "bg-[#25D366] hover:bg-[#1ebe5d] text-white"
                              : "bg-brand-green hover:bg-brand-green/90 text-white"
                          }`}
                        >
                          {action.icon === "wa" ? <WaIcon /> : <MailIcon />}
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Quick replies */}
            {showQuickReplies && (
              <div className="flex flex-wrap gap-1.5 mt-1">
                {QUICK_REPLIES.map((r) => (
                  <button
                    key={r}
                    onClick={() => send(r)}
                    className="bg-white border border-brand-green/40 text-brand-green text-xs font-medium px-3 py-1.5 rounded-full hover:bg-brand-green hover:text-white transition-colors"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="px-3 py-3 bg-white border-t border-gray-200 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question…"
              className="flex-1 text-sm bg-gray-100 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-brand-green/40 text-gray-800 placeholder:text-gray-400"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-9 h-9 rounded-full bg-brand-green text-white flex items-center justify-center hover:bg-brand-green/90 disabled:opacity-40 transition-colors shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 rotate-90">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
