import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { WHATSAPP_GENERAL } from '@/config/constants';
import { formatArticleDate, getNewsArticleBySlug, latestNews } from '@/content/noticias';
import { usePageSeo } from '@/hooks/use-page-seo';
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock, ExternalLink, MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const NoticiaDetalle = () => {
  const { slug = '' } = useParams();
  const article = getNewsArticleBySlug(slug);

  usePageSeo({
    title: article?.metaTitle ?? 'Noticia ganadera no encontrada | SubaDatos',
    description: article?.description ?? 'La noticia ganadera que buscas no está disponible.',
    canonical: article ? `https://www.subadatos.com/noticias/${article.slug}` : 'https://www.subadatos.com/noticias',
    robots: article ? 'index, follow' : 'noindex, follow',
  });

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F8F8F5]">
        <Navbar />
        <main className="container-custom pt-32 pb-20 text-center">
          <Badge className="mb-4 bg-nature-100 text-nature-800">Radar Ganadero</Badge>
          <h1 className="text-4xl font-bold mb-4">No encontramos esta noticia</h1>
          <p className="text-muted-foreground mb-8">Puede que el enlace haya cambiado o que el artículo todavía no esté publicado.</p>
          <Button asChild className="bg-nature-600 hover:bg-nature-700 text-white">
            <Link to="/noticias"><ArrowLeft className="mr-2 h-4 w-4" /> Volver a noticias</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const related = latestNews.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-foreground">
      <Navbar />

      <main className="pt-24">
        <article>
          <header className={`relative overflow-hidden bg-gradient-to-br ${article.coverGradient} text-white`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />
            <div className="container-custom relative py-14 md:py-20">
              <Button asChild variant="ghost" className="text-white hover:bg-white/10 hover:text-white mb-8 -ml-4">
                <Link to="/noticias"><ArrowLeft className="mr-2 h-4 w-4" /> Todas las noticias</Link>
              </Button>
              <div className="max-w-4xl">
                <Badge className="mb-5 bg-white/16 text-white border border-white/20">{article.category}</Badge>
                <p className="text-sm uppercase tracking-[0.22em] text-white/70">{article.heroKicker}</p>
                <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">{article.title}</h1>
                <p className="mt-6 text-lg md:text-xl text-white/86 leading-relaxed max-w-3xl">{article.intro}</p>
                <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/78">
                  <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />{formatArticleDate(article.date)}</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{article.readTime}</span>
                  <span>{article.sourceLabel}</span>
                </div>
              </div>
            </div>
          </header>

          <div className="container-custom py-10 md:py-14">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 items-start">
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-7 md:p-9">
                    <p className="text-nature-700 font-semibold uppercase tracking-[0.18em] text-sm mb-4">Claves rápidas</p>
                    <div className="grid gap-4">
                      {article.keyTakeaways.map((takeaway) => (
                        <div key={takeaway} className="flex gap-3">
                          <CheckCircle2 className="h-5 w-5 text-nature-600 flex-shrink-0 mt-0.5" />
                          <p className="text-muted-foreground">{takeaway}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardContent className="p-7 md:p-10 prose prose-green max-w-none">
                    {article.sections.map((section) => (
                      <section key={section.heading} className="mb-10 last:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{section.heading}</h2>
                        {section.paragraphs?.map((paragraph) => (
                          <p key={paragraph} className="text-muted-foreground leading-8 mb-4 text-lg">{paragraph}</p>
                        ))}
                        {section.bullets && (
                          <ul className="space-y-3 mt-4">
                            {section.bullets.map((bullet) => (
                              <li key={bullet} className="flex gap-3 text-muted-foreground leading-7">
                                <span className="mt-2 h-2 w-2 rounded-full bg-nature-600 flex-shrink-0" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </section>
                    ))}

                    <div className="rounded-2xl bg-nature-50 border border-nature-100 p-6 my-10">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-nature-700 mb-2">Pregunta para debate</p>
                      <p className="text-xl font-semibold text-foreground">{article.debateQuestion}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <aside className="lg:sticky lg:top-28 space-y-5">
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <p className="font-bold text-lg mb-3">¿Quiere aterrizar esto a su finca o negocio?</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">{article.ctaText}</p>
                    <Button asChild className="w-full bg-nature-600 hover:bg-nature-700 text-white">
                      <a href={WHATSAPP_GENERAL} target="_blank" rel="noopener noreferrer" data-event="whatsapp_article" data-source={article.slug}>
                        <MessageCircle className="mr-2 h-4 w-4" /> Escribir por WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-nature-100">
                  <CardContent className="p-6">
                    <p className="font-bold mb-3">Fuentes consultadas</p>
                    <div className="space-y-3">
                      {article.sources.map((source) => (
                        <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 text-sm text-nature-700 hover:text-nature-900">
                          <span>{source.label}</span>
                          <ExternalLink className="h-4 w-4 flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {related.length > 0 && (
                  <Card className="border-nature-100">
                    <CardContent className="p-6">
                      <p className="font-bold mb-4">También puede leer</p>
                      <div className="space-y-4">
                        {related.map((item) => (
                          <Link key={item.slug} to={`/noticias/${item.slug}`} className="block group">
                            <p className="text-sm font-semibold group-hover:text-nature-700 leading-snug">{item.title}</p>
                            <span className="text-xs text-muted-foreground">{formatArticleDate(item.date)}</span>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </aside>
            </div>
          </div>
        </article>

        <section className="bg-[#2B2344] text-white py-12">
          <div className="container-custom flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-white/65 uppercase tracking-[0.18em] text-sm">SubaDatos</p>
              <h2 className="text-3xl font-bold mt-2">Datos ganaderos para decidir mejor.</h2>
            </div>
            <Button asChild className="bg-[#16A34A] hover:bg-[#13863f] text-white">
              <Link to="/">Conocer servicios <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NoticiaDetalle;
