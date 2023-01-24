export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window !== undefined) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};
