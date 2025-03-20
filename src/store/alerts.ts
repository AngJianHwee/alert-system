import { create } from 'zustand';
import { v4 as uuid } from 'uuid';


interface Alert {
  id?: string;
  type: 'info' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  action?: {
    label: string;
    handler: () => void;
  };
}

interface AlertState {
  alerts: Alert[];
  addAlert: (alert: Alert) => void;
  dismissAlert: (id: string) => void;
}

export const useAlertStore = create<AlertState>((set) => ({
  alerts: [],
  addAlert: (alert) => {
    if (!alert.id) {
      alert.id = uuid();
    }
    set((state) => ({ alerts: [...state.alerts, alert] }));
  },
    // set((state) => ({ alerts: [ ...state.alerts, alert] })),
  dismissAlert: (id) => set((state) => ({ alerts: state.alerts.filter((a) => a.id !== id) })),
}));

// export alert
export type { Alert };