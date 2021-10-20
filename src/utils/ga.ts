export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag: any;
  }
}

interface PageEvent {
  action?: string;
  category?: string;
  label?: string;
  value?: string | number;
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const handlePageView = (url: string) => {
  if (process.env.NODE_ENV === 'development') return;

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const handlePageEvent = ({
  action,
  category,
  label,
  value,
}: PageEvent) => {
  if (process.env.NODE_ENV === 'development') return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
