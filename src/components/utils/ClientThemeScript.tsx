"use client";

export const ClientThemeScript = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              // Only update theme after DOM is loaded to avoid hydration mismatch
              document.addEventListener('DOMContentLoaded', function() {
                const theme = localStorage.getItem('theme');
                if (theme && theme !== document.documentElement.getAttribute('data-theme')) {
                  const root = document.documentElement;
                  if (theme === 'system') {
                    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
                  } else {
                    root.setAttribute('data-theme', theme);
                  }
                }
              });
            } catch (e) {
              // Fallback - do nothing to avoid hydration mismatch
            }
          })();
        `,
      }}
    />
  );
};
