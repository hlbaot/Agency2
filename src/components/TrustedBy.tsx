const trustedProfiles = [
  { src: "/img/trusted-baoviet.svg", alt: "Bao Viet Dental TikTok profile" },
  { src: "/img/trusted-cuongkido.svg", alt: "Cuong Kido TikTok profile" },
  { src: "/img/trusted-ngado.svg", alt: "Ngado TikTok profile" },
  { src: "/img/trusted-haisan.svg", alt: "Hai San Dai Duong TikTok profile" },
];

export default function TrustedBy() {
  return (
    <section className="py-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-widest mb-10">
          Được tin tưởng bởi
        </p>
        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <div className="marquee-track animate-marquee">
            {[0, 1, 2].map((groupIndex) => (
              <div key={groupIndex} className="marquee-group">
                {trustedProfiles.map((profile) => (
                  <div key={`${groupIndex}-${profile.alt}`} className="flex-shrink-0">
                    <img
                      src={profile.src}
                      alt={profile.alt}
                      className="h-[158px] w-auto rounded-[28px] border border-black/10 bg-black object-cover shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
