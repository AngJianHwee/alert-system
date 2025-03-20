import React, { useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import Alert from './Alert';
import { useAlertStore } from '@/store/alerts';

const AlertList: React.FC = () => {
  const { alerts, addAlert, dismissAlert } = useAlertStore();

  // Demo alerts (for testing)
  useEffect(() => {
    // const demoAlerts = [
    //   {
    //     id: '1',
    //     type: 'info' as const,
    //     title: 'New Feature Available',
    //     message: 'We’ve just launched our new dashboard analytics feature. Check it out!',
    //     timestamp: new Date(),
    //     action: { label: 'View Feature', handler: () => console.log('Navigating to feature') },
    //   },
    //   {
    //     id: '2',
    //     type: 'warning' as const,
    //     title: 'Storage Space Low',
    //     message: 'Your storage is almost full. Please free up some space.',
    //     timestamp: new Date(Date.now() - 5 * 60 * 1000),
    //     action: { label: 'Manage Storage', handler: () => console.log('Opening storage') },
    //   },
    //   {
    //     id: '3',
    //     type: 'error' as const,
    //     title: 'Connection Error',
    //     message: 'Unable to connect to the server. Check your connection.',
    //     timestamp: new Date(Date.now() - 10 * 60 * 1000),
    //     action: { label: 'Retry Connection', handler: () => console.log('Retrying') },
    //   },
    // ];
    // demoAlerts.forEach((alert) => addAlert(alert));
  }, []);

  return (
    
    <div className="fixed bottom-4 right-4 space-x-2.5 space-y-2.5 w-80">
      <ScrollArea className="max-h-[calc(100vh-2rem)] space-x-2.5 space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="animate-in fade-in slide-in-from-bottom-4 duration-300 ease-out"
            style={{ animationFillMode: 'forwards' }}
          >
            <Alert alert={alert} onDismiss={dismissAlert} />
          </div>
        ))}
      </ScrollArea>
    </div>
    // <div className="fixed bottom-4 right-4 space-y-2.5 w-80">
    //   {/* <ScrollArea className="max-h-[calc(100vh-2rem)]"> */}
    //   {/* add y seperation between alert */}
    //     <ScrollArea className="max-h-[calc(100vh-2rem)] space-y-2">
    //     {alerts.map((alert) => (
    //       <Alert key={alert.id} alert={alert} onDismiss={dismissAlert} />
    //     ))}
    //   </ScrollArea>
    // </div>
  );
};

export default AlertList;