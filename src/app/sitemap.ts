import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";

export default async function sitemap() {
  const langs = ['en', 'my', 'cn'];
  
  const blogs = getPosts(["src", "app", "[lang]", "blog", "posts"]).flatMap((post) =>
    langs.map((lang) => ({
      url: `https://${baseURL}/${lang}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }))
  );

  const works = getPosts(["src", "app", "[lang]", "work", "projects"]).flatMap((post) =>
    langs.map((lang) => ({
      url: `https://${baseURL}/${lang}/work/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }))
  );

  const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route as keyof typeof routesConfig]);

  const routes = activeRoutes.flatMap((route) =>
    langs.map((lang) => ({
      url: `https://${baseURL}/${lang}${route !== "/" ? route : ""}`,
      lastModified: new Date().toISOString().split("T")[0],
    }))
  );

  return [...routes, ...blogs, ...works];
}
