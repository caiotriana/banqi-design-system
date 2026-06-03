// Torna os globais do Jest (describe/it/expect/jest) visíveis ao TypeScript.
// O auto-include de @types/* não está pegando @types/jest neste setup (TS 6),
// então referenciamos explicitamente.
/// <reference types="jest" />
