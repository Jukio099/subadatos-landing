import { useEffect } from 'react';

interface PageSeoOptions {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
}

const setMeta = (name: string, content: string) => {
  let tag = document.head.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

export const usePageSeo = ({ title, description, canonical, robots }: PageSeoOptions) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      setMeta('description', description);
    }

    if (robots) {
      setMeta('robots', robots);
    }

    let canonicalTag = document.head.querySelector('link[rel="canonical"]');

    if (canonical) {
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalTag);
      }

      canonicalTag.setAttribute('href', canonical);
    } else if (canonicalTag) {
      canonicalTag.remove();
    }
  }, [canonical, description, robots, title]);
};
