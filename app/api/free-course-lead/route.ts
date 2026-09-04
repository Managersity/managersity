import { NextResponse } from "next/server";

type Lead = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  role?: string;
};

const requiredFields: Array<keyof Lead> = ["firstName", "lastName", "email", "phone", "role"];

export async function POST(request: Request) {
  let lead: Lead;
  try {
    lead = await request.json();
  } catch {
    return NextResponse.json({ error: "Données de formulaire invalides." }, { status: 400 });
  }

  if (requiredFields.some((field) => !lead[field]?.trim())) {
    return NextResponse.json({ error: "Tous les champs sont obligatoires." }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(lead.email!)) {
    return NextResponse.json({ error: "Adresse e-mail invalide." }, { status: 400 });
  }

  // Champs provenant directement du code d'intégration Kartra fourni.
  // Kartra ne fournit pas de champ « nom » dans ce formulaire : prénom et nom y sont donc enregistrés ensemble.
  const fields = new URLSearchParams({
    aaddress_url: "",
    first_name: `${lead.firstName!.trim()} ${lead.lastName!.trim()}`,
    email: lead.email!,
    custom_801: lead.phone!,
    custom_913: lead.role!,
  });

  try {
    const kartraResponse = await fetch("https://app.kartra.com/process/add_lead/Q6a8qIiUY3Za", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: fields.toString(),
      cache: "no-store",
    });

    if (!kartraResponse.ok) {
      return NextResponse.json({ error: "L'inscription n'a pas pu être enregistrée." }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "Le service d'inscription est indisponible." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
