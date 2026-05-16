import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { latestNews, formatArticleDate } from '@/content/noticias';
import { usePageSeo } from '@/hooks/use-page-seo';
import { ArrowRight, CalendarDays, Clock, Newspaper, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Noticias = () => {
  usePageSeo({
    title: 'Noticias ganaderas y Radar Ganadero | SubaDatos',
    description:
      'Radar Ganadero de SubaDatos: noticias, análisis y guías prácticas para productores ganaderos colombianos.',
    canonical: 'https://www.subadatos.com/noticias',
    robots: 'index, follow',
  });

  const featured = latestNews[0];
  const rest = latestNews.slice(1);

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-foreground">
      <Navbar />

      <main className="pt-24">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2B2344] via-[#164E35] to-[#009E5A] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(22,163,74,0.32),transparent_34%)]" />
          <div className="container-custom relative py-16 md:py-24">
            <Badge className="mb-5 bg-white/15 text-white hover:bg-white/20 border border-white/20">
              Radar Ganadero SubaDatos
            </Badge>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Noticias ganaderas para decidir mejor, no solo para estar informado.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/86 max-w-2xl">
                Señales del mercado, cambios institucionales, tecnología y guías prácticas explicadas en lenguaje de productor.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl">
              <div className="rounded-2xl bg-white/12 border border-white/15 p-4 backdrop-blur-sm">
                <Search className="h-5 w-5 mb-2" />
                <p className="font-semibold">Radar diario</p>
                <p className="text-sm text-white/75">Detectamos temas útiles antes de volverlos contenido.</p>
              </div>
              <div className="rounded-2xl bg-white/12 border border-white/15 p-4 backdrop-blur-sm">
                <Newspaper className="h-5 w-5 mb-2" />
                <p className="font-semibold">Análisis práctico</p>
                <p className="text-sm text-white/75">Traducimos trámites y noticias a decisiones de finca.</p>
              </div>
              <div className="rounded-2xl bg-white/12 border border-white/15 p-4 backdrop-blur-sm">
                <ArrowRight className="h-5 w-5 mb-2" />
                <p className="font-semibold">Contenido accionable</p>
                <p className="text-sm text-white/75">Cada artículo conecta con WhatsApp, precios o asesoría.</p>
              </div>
            </div>
          </div>
        </section>

        {featured && (
          <section className="container-custom -mt-10 relative z-10 pb-8">
            <Card className="overflow-hidden shadow-xl border-0 bg-white">
              <div className="grid md:grid-cols-[0.95fr_1.25fr]">
                <div className={`min-h-[280px] bg-gradient-to-br ${featured.coverGradient} p-8 text-white flex flex-col justify-between`}>
                  <div>
                    <Badge className="bg-white/18 text-white border border-white/20">Destacado</Badge>
                    <p className="mt-8 text-sm uppercase tracking-[0.22em] text-white/70">{featured.heroKicker}</p>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">{featured.title}</h2>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {featured.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-xs text-white/85">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" />{formatArticleDate(featured.date)}</span>
                    <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{featured.readTime}</span>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{featured.description}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild className="bg-nature-600 hover:bg-nature-700 text-white">
                      <Link to={`/noticias/${featured.slug}`}>Leer análisis completo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/">Ver servicios SubaDatos</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </section>
        )}

        <section className="container-custom section-padding pt-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-nature-700 font-semibold uppercase tracking-[0.18em] text-sm">Últimos análisis</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Radar Ganadero</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Card key={article.slug} className="overflow-hidden hover:shadow-lg transition-shadow border-nature-100">
                <div className={`h-36 bg-gradient-to-br ${article.coverGradient}`} />
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4">{article.category}</Badge>
                  <h3 className="text-xl font-bold leading-tight mb-3">{article.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{article.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-5">
                    <span>{formatArticleDate(article.date)}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/noticias/${article.slug}`}>Leer noticia <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Noticias;
