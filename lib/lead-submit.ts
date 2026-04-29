export type LeadFormType =
  | "contact"
  | "get_in_touch"
  | "list_your_property"
  | "international_properties"
  | "sell_property";

export async function submitLead(
  formType: LeadFormType,
  payload: Record<string, string>,
): Promise<void> {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      formType,
      payload,
      sourcePath: window.location.pathname,
    }),
  });

  if (!res.ok) {
    throw new Error("Lead submission failed");
  }
}
