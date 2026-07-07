export type PublicReporting = {
  marketing: {
    schools: number;
    activeSchools?: number;
    students: number;
    savedHours: number;
    satisfactionRate: number;
  };
  dashboard: {
    students: number;
    attendanceRate: number;
    pendingTasks: number;
    pendingPayments?: number;
    pendingAbsences?: number;
    pendingConvocations?: number;
    pendingReclamations?: number;
    bulletinsReady?: number;
    paymentsValidated?: number;
  };
  updatedAt?: string;
};

type WrappedResponse<T> = T | { data?: T; success?: boolean };

export async function fetchPublicReporting(): Promise<PublicReporting> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api';
  const response = await fetch(`${baseUrl.replace(/\/$/, '')}/reporting/public`, {
    headers: { Accept: 'application/json' },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Reporting request failed with ${response.status}`);
  }

  const payload = (await response.json()) as WrappedResponse<PublicReporting>;
  if ('marketing' in payload) return payload;
  if (payload.data) return payload.data;
  throw new Error('Reporting response is empty');
}

export function formatNumber(value: number, suffix = '') {
  return `${Math.round(value).toLocaleString('fr-FR')}${suffix}`;
}

export function formatOptionalNumber(value: number | undefined, suffix = '') {
  return typeof value === 'number' ? formatNumber(value, suffix) : '...';
}
