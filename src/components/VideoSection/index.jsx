import { useLanguage } from '../../contexts/LanguageContext';
import { useTranslation } from '../../translations';

const YOUTUBE_VIDEO_ID = "SEU_VIDEO_ID_AQUI";

export function VideoSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="video" className="py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-reveal>
          <span className="section-tag">{t.video.tag}</span>
          <h2 className="section-title">
            {t.video.title}{" "}
            <span className="underline decoration-4 underline-offset-8">{t.video.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{t.video.subtitle}</p>
        </div>

        <div data-reveal="zoom" data-reveal-delay="150">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-neutral-900">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                title="Lucas Silva — Introduction"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-4">
            {t.video.note}
          </p>
        </div>
      </div>
    </section>
  );
}
