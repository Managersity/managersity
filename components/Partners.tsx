"use client";

const partners = [
  { name: "BGFI Bank",         logo: "https://play-lh.googleusercontent.com/bGTBVAZjP_HcZtiDVRylY7hGPp5l9wpLt2GZydVSzOIh4ZVdUtNpxRsZdvnSdn6VqJGF=w3840-h2160-rw" },
  { name: "Teyliom Group",     logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Logo_Teyliom-Group.png" },
  { name: "Ecobank",           logo: "https://upload.wikimedia.org/wikipedia/commons/9/98/Ecobank_Logo.svg" },
  { name: "NSIA Banque",       logo: "https://logo.clearbit.com/nsia-ci.com" },
  { name: "MTN",               logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/MTN_Logo.svg" },
  { name: "Crédit du Sénégal", logo: "https://apitasolution.com/wp-content/uploads/2025/09/logo.png" },
  { name: "Moov Africa",       logo: "https://logo.clearbit.com/moov.africa" },
  { name: "Orange",            logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg" },
  { name: "Wave",              logo: "https://www.financialafrik.com/wp-content/uploads/2022/07/63915358-45975666.jpg" },
  { name: "UBA",               logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/United_Bank_for_Africa_logo.svg/250px-United_Bank_for_Africa_logo.svg.png" },
  { name: "Société Générale",  logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Soci%C3%A9t%C3%A9_G%C3%A9n%C3%A9rale.svg" },
  { name: "Attijariwafa Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/LogoNew.png" },
  { name: "Coris Bank",        logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Logo_Coris_Bank.svg" },
  { name: "BNP Paribas",       logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/BNP_Paribas.svg" },
  { name: "Mansa Bank",        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxV7FW-rSkCrNLObKghC_iaSDn3oL1UcYvPA&s" },
  { name: "Access Bank",       logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/Access_Bank_Logo.png" },
];

export default function Partners() {
  return (
    <section className="border-y border-gray-100 py-14 bg-white overflow-hidden">
      <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-10">
        Ces entreprises participent à nos formations avec satisfaction
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
        {/* Marquee */}
        <div className="flex gap-14 animate-marquee whitespace-nowrap items-center">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 select-none group"
              title={p.name}
            >
              <img
                src={p.logo}
                alt={p.name}
                className="h-8 w-auto max-w-30 object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "block";
                }}
              />
              <span
                className="hidden text-gray-500 font-bold text-sm tracking-tight uppercase"
              >
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
