export interface User {
  type: UserTypes; // help review or get reviewed
}

export type UserTypes = "hr" | "gr";
export type OnboardingPhases = "options" | "FOE" | "about";
