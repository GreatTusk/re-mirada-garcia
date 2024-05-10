export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center pt-24 pb-16">
      {children}
    </div>
  );
}
