import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatArticleDate, latestNews } from '@/content/noticias';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsPreview = () => {
  const articles = latestNews.slice(0, 3);

  if (articles.length === 0) return null;

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-nature-700 font-semibold uppercase tracking-[0.18em] text-sm mb-3">
              <Newspaper className="h-4 w-4" /> Radar Ganadero
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Noticias que sí le sirven al ganadero</h2>
            <p className="text-muted-foreground mt-4">
              Análisis cortos para entender trámites, tecnología, mercado y señales que pueden afectar decisiones de compra, venta o movilización.
            </p>
          </div>
          <Button asChild variant="outline" className="self-start md:self-auto">
            <Link to="/noticias">Ver todas <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.slug} className="overflow-hidden border-nature-100 hover:shadow-lg transition-shadow bg-white">
              <div className={`h-28 bg-gradient-to-br ${article.coverGradient}`} />
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4">{article.category}</Badge>
                <h3 className="font-bold text-xl leading-tight mb-3">{article.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">{article.description}</p>
                <div className="text-xs text-muted-foreground mb-5">{formatArticleDate(article.date)} · {article.readTime}</div>
                <Link to={`/noticias/${article.slug}`} className="inline-flex items-center text-nature-700 font-semibold hover:text-nature-900">
                  Leer análisis <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;
