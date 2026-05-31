import { getSettings } from "@/models/settings";
import ContactFormSkeleton from "@/Templates/Primary/Pages/Contact/ContactFormSkeleton";
import { Suspense } from "react";

/**
 *
 */
export default async function Contact() {
  const SETTINGS = await getSettings();
  const CONTACT_COMPONENT = await import(
    `@/Templates/${SETTINGS.templateName}/Pages/Contact/Contact`
  );
  const CONTACT = CONTACT_COMPONENT.default;

  return (
    <Suspense fallback={<ContactFormSkeleton/>}>
      <CONTACT />
    </Suspense>
  );
}
