export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-max section-padding !py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            teras software — {currentYear}
          </p>
          <p className="text-xs text-text-secondary">
            Freelance web, aplikasi, dan UI design
          </p>
        </div>
      </div>
    </footer>
  );
}
