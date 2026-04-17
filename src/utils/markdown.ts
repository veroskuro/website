import fm from 'front-matter';

export interface MarkdownFile<T> {
  attributes: T;
  body: string;
  slug: string;
}

export function parseMarkdownFiles<T>(files: Record<string, string>): MarkdownFile<T>[] {
  return Object.entries(files).map(([filepath, content]) => {
    const { attributes, body } = fm<T>(content);
    // Extract filename without extension for the slug
    const slug = filepath.replace(/^.*[\\/]/, '').replace(/\.md$/, '');
    return {
      attributes,
      body,
      slug
    };
  });
}
