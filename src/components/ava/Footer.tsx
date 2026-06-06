import { AvaLogo } from "./AvaLogo";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <AvaLogo />
        <div className="text-xs text-muted-foreground">
          <p>AvA Tags © Todos os direitos reservados</p>
          <p className="mt-1 text-muted-foreground/70">
            Ferramenta inteligente para descoberta de hashtags e palavras-chave.
          </p>
        </div>
      </div>
    </footer>
  );
}
