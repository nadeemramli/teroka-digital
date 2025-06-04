import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";
import { Meta } from "@/once-ui/modules";
import { home, baseURL } from "@/app/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
