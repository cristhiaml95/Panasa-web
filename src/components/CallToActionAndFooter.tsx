export default function CallToActionAndFooter() {
  return (
    <div>
      <section className="gradient-bg py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Pruébalo ahora ¡gratuitamente!
              </h2>
              <p className="text-xl leading-relaxed">
                Resuma instantáneamente el contenido al tomar una foto o usar el reconocimiento de voz
              </p>
            </div>
            <div className="flex justify-center">
              <video
                src="/videos/splash2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-80 h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">Copyright 2025 EstudIA</p>
        </div>
      </footer>
    </div>
  );
}
