"use client";

export const ClientThemeScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const theme = localStorage.getItem('theme') || 'system';
              const root = document.documentElement;
              if (theme === 'system') {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                root.setAttribute('data-theme', isDark ? 'dark' : 'light');
              } else {
                root.setAttribute('data-theme', theme);
              }
            } catch (e) {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          })();
        `,
      }}
    />
  );
};
