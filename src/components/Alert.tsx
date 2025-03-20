


import React from 'react';
import { Button } from "@/components/ui/button";
import { Alert as AlertType } from '@/store/alerts';

// set a const for animate out
const ANIMATE_OUT_MILISECONDS = 3000;
interface AlertProps {
  alert: AlertType;
  onDismiss: (id: string) => void;
}

const colors = {
  info: { bg: '#E7F1FF', border: '#007BFF', icon: 'fa-circle-info' },
  warning: { bg: '#FFF3CD', border: '#FFC107', icon: 'fa-triangle-exclamation' },
  error: { bg: '#F8D7DA', border: '#DC3545', icon: 'fa-circle-xmark' },
};

const formatRelativeTime = (date: Date) => {
  const diff = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  return `${Math.floor(diff / 86400)} days ago`;
};

const addAnimation = (element: HTMLElement) => {
  element.classList.add('animate-out', 'fade-out', `duration-${ANIMATE_OUT_MILISECONDS}`);
  element.childNodes.forEach((child) => {
    if (child instanceof HTMLElement) {
      addAnimation(child);
    }
  });
};



const Alert: React.FC<AlertProps> = ({ alert, onDismiss }) => (
  // // working example
  //   <div
  //     className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out my-2 animate-in fade-in slide-in-from-bottom-4 hover:scale-[1.02]"
  //     style={{ backgroundColor: colors[alert.type].bg }}
  //   >
  //     <div className="p-4 ">
  //       <div className="flex items-center gap-2 mb-2 animate-in zoom-in-75 duration-200">
  //         <i className={`fas ${colors[alert.type].icon}`} style={{ color: colors[alert.type].border }}></i>
  //         <h3 className="font-bold text-sm">{alert.title}</h3>
  //       </div>
  //       <p className="text-xs mb-3 text-gray-700 animate-in fade-in duration-200 delay-100" title={alert.message}>
  //         {alert.message.length > 100 ? `${alert.message.substring(0, 97)}...` : alert.message}
  //       </p>
  //       <div className="text-[10px] italic text-gray-600 mb-3 animate-in fade-in duration-200 delay-200">
  //         {alert.timestamp.toLocaleString()} • {formatRelativeTime(alert.timestamp)}
  //       </div>
  //       <div className="flex gap-2 ">
  //         <Button
  //           variant="outline"
  //           className="!rounded-button text-xs h-8 whitespace-nowrap cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-200"
  //           style={{ borderColor: colors[alert.type].border, color: colors[alert.type].border }}
  //           onClick={() => onDismiss(alert.id)}
  //         >
  //           Dismiss
  //         </Button>
  //         {alert.action && (
  //           <Button
  //             className="!rounded-button text-xs h-8 whitespace-nowrap cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-200"
  //             style={{ backgroundColor: colors[alert.type].border }}
  //             onClick={alert.action.handler}
  //           >
  //             {alert.action.label}
  //           </Button>
  //         )}
  //       </div>
  //     </div>
  //   </div>

  <div
    className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out my-2 animate-in fade-in slide-in-from-bottom-4 hover:scale-[1.02]"
    style={{ backgroundColor: colors[alert.type].bg }}
  >
    <div className="p-4">
      <div className="flex items-center gap-2 mb-2 animate-in zoom-in-75 duration-200">
        <i className={`fas ${colors[alert.type].icon}`} style={{ color: colors[alert.type].border }}></i>
        <h3 className="font-bold text-sm">{alert.title}</h3>
      </div>
      <p className="text-xs mb-3 text-gray-700 animate-in fade-in duration-200 delay-100" title={alert.message}>
        {alert.message.length > 100 ? `${alert.message.substring(0, 97)}...` : alert.message}
      </p>
      <div className="text-[10px] italic text-gray-600 mb-3 animate-in fade-in duration-200 delay-200">
        {alert.timestamp.toLocaleString()} • {formatRelativeTime(alert.timestamp)}
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          className="!rounded-button text-xs h-8 whitespace-nowrap cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-200"
          style={{ borderColor: colors[alert.type].border, color: colors[alert.type].border }}
          onClick={(e) => {
            const alertElement = e.currentTarget.parentElement?.parentElement;
            if (alertElement) {
              // alertElement.classList.add('animate-out', 'slide-out-to-right', 'duration-3000');
              // setTimeout(() => onDismiss(alert.id), 3000); // Remove after 3 seconds
              // alertElement.classList.add('animate-out', 'fade-out', `duration-${ANIMATE_OUT_MILISECONDS}`);

              // start from parent, add animation to everything
              // first get parent
              let parent = alertElement.parentElement;
              

              // recursively add animation to all children
              if (parent) {
                addAnimation(parent);
              }

              
              // also remove the alert after the animation ends
              setTimeout(() => onDismiss(alert.id || ''), ANIMATE_OUT_MILISECONDS);
              
              

            }
          }}
        >
          Dismiss
        </Button>
        {alert.action && (
          <Button
            className="!rounded-button text-xs h-8 whitespace-nowrap cursor-pointer hover:brightness-110 hover:scale-105 transition-all duration-200"
            style={{ backgroundColor: colors[alert.type].border }}
            onClick={alert.action.handler}
          >
            {alert.action.label}
          </Button>
        )}
      </div>
    </div>
  </div>
);

export default Alert;