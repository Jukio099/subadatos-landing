import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatArticleDate, latestNews } from '@/content/noticias';
import { ArrowRight, Newspaper, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const categoryColors: Record<string, string> = {
  'Normatividad': 'from-suba-purple-600 to-suba-purple-700',
  'Tecnología': 'from-suba-green-600 to-suba-green-700',
  'Mercado': 'from-suba-gold-500 to-suba-gold-600',
};

const categoryBadgeColors: Record<string, string> = {
  'Normatividad': 'bg-suba-purple-900/50 text-suba-purple-300 border-suba-purple-500/30',
  'Tecnología': 'bg-suba-green-900/50 text-suba-green-300 border-suba-green-500/30',
  'Mercado': 'bg-suba-gold-900/50 text-suba-gold-300 border-suba-gold-500/30',
};

const NewsPreview = () => {
  const articles = latestNews.slice(0, 3);

  if (articles.length === 0) return null;

  return (
    <section className="section-padding bg-suba-dark-200/50 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-light opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-suba-purple-300 font-semibold uppercase tracking-[0.18em] text-xs mb-3">
              <Sparkles className="h-4 w-4" /> Radar Ganadero
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Noticias que{' '}
              <span className="text-gradient">sí le sirven al ganadero</span>
            </h2>
            <p className="text-white/50 mt-4 text-sm md:text-base">
              Análisis cortos para entender trámites, tecnología, mercado y señales que pueden afectar decisiones de compra, venta o movilización.
            </p>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto border-white/10 text-white hover:bg-white/5 hover:border-suba-purple-500/40 rounded-full">
            <Link to="/noticias">
              Ver todas <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 stagger visible">
          {articles.map((article) => (
            <Card
              key={article.slug}
              className="group overflow-hidden bg-white/5 backdrop-blur-sm border border-white/5 hover:border-suba-purple-500/30 transition-all duration-500 rounded-2xl hover-lift"
            >
              <div className={`h-28 bg-gradient-to-br ${article.coverGradient || categoryColors[article.category] || 'from-suba-purple-600 to-suba-green-500'} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <CardContent className="p-6">
                <Badge
                  variant="outline"
                  className={`mb-4 border ${
                    categoryBadgeColors[article.category] || 'bg-white/10 text-white/70 border-white/20'
                  }`}
                >
                  {article.category}
                </Badge>
                <h3 className="font-bold text-lg leading-tight mb-3 text-white group-hover:text-suba-purple-300 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-5 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/30">
                    {formatArticleDate(article.date)} · {article.readTime}
                  </span>
                  <Link
                    to={`/noticias/${article.slug}`}
                    className="inline-flex items-center text-suba-purple-300 hover:text-suba-purple-200 font-semibold text-sm transition-colors"
                  >
                    Leer <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
