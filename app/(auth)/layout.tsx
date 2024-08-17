import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/for-bankin-app.svg"
            alt="Auth image"
            width={900}
            height={700}
            className="rounded-1-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}