import { useAlertStore } from '@/store/alerts';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const App: React.FC = () => {
  const { alerts, addAlert, dismissAlert } = useAlertStore();
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [keepText, setKeepText] = useState(false); // New state for checkbox

  const addNewAlert = (type: 'info' | 'warning' | 'error') => {
    addAlert({
      type,
      title,
      message,
      timestamp: new Date(),
    });
    // Reset inputs only if keepText is false
    if (!keepText) {
      setTitle('');
      setMessage('');
    }
  };

  return (
    // <div className="min-h-screen bg-gray-50 p-8">
    //   <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6 mb-8">
    //     <h2 className="text-xl font-semibold mb-4">Create New Alert</h2>
    //     <div className="space-y-4">
    //       <div>
    //         <label className="block text-sm font-medium mb-1">Title</label>
    //         <input
    //           type="text"
    //           value={title}
    //           onChange={(e) => setTitle(e.target.value)}
    //           className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
    //           placeholder="Enter alert title"
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-sm font-medium mb-1">Message</label>
    //         <textarea
    //           value={message}
    //           onChange={(e) => setMessage(e.target.value)}
    //           className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
    //           rows={3}
    //           placeholder="Enter alert message"
    //         />
    //       </div>
    //       <div className="flex items-center gap-2">
    //         <input
    //           type="checkbox"
    //           checked={keepText}
    //           onChange={(e) => setKeepText(e.target.checked)}
    //           className="h-4 w-4 text-blue-600 border-gray-300 rounded"
    //         />
    //         <label className="text-sm font-medium">Keep text after adding alert</label>
    //       </div>
    //       <div className="flex gap-3">
    //         <Button
    //           className="!rounded-button flex-1 bg-blue-500 hover:bg-blue-600"
    //           onClick={() => addNewAlert('info')}
    //         >
    //           <i className="fas fa-circle-info mr-2"></i>
    //           Add Info
    //         </Button>
    //         <Button
    //           className="!rounded-button flex-1 bg-yellow-500 hover:bg-yellow-600"
    //           onClick={() => addNewAlert('warning')}
    //         >
    //           <i className="fas fa-triangle-exclamation mr-2"></i>
    //           Add Warning
    //         </Button>
    //         <Button
    //           className="!rounded-button flex-1 bg-red-500 hover:bg-red-600"
    //           onClick={() => addNewAlert('error')}
    //         >
    //           <i className="fas fa-circle-xmark mr-2"></i>
    //           Add Error
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
      
    //   {/* show all current alerts in Json text */}
    //   <pre>{JSON.stringify(alerts, null, 2)}</pre>

      
    // </div>
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 mx-auto">
  <div className="max-w-full sm:max-w-xl mx-auto bg-white rounded-lg shadow p-4 sm:p-6 mb-8">
    <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">Create New Alert</h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900"
          placeholder="Enter alert title"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-900"
          rows={3}
          placeholder="Enter alert message"
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={keepText}
          onChange={(e) => setKeepText(e.target.checked)}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label className="text-sm font-medium text-gray-700">Keep text after adding alert</label>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          className="!rounded-button w-full sm:flex-1 bg-blue-500 hover:bg-blue-600"
          onClick={() => addNewAlert('info')}
        >
          <i className="fas fa-circle-info mr-2"></i>
          Add Info
        </Button>
        <Button
          className="!rounded-button w-full sm:flex-1 bg-yellow-500 hover:bg-yellow-600"
          onClick={() => addNewAlert('warning')}
        >
          <i className="fas fa-triangle-exclamation mr-2"></i>
          Add Warning
        </Button>
        <Button
          className="!rounded-button w-full sm:flex-1 bg-red-500 hover:bg-red-600"
          onClick={() => addNewAlert('error')}
        >
          <i className="fas fa-circle-xmark mr-2"></i>
          Add Error
        </Button>
      </div>
    </div>
  </div>

  {/* Show all current alerts in JSON text */}
  <div className="text-xs sm:text-sm text-gray-700 mb-4">Current Alerts</div>
  <pre className="max-w-full mx-4 sm:mx-auto text-xs sm:text-sm overflow-x-auto text-gray-900">
    {JSON.stringify(alerts, null, 2)}
  </pre>
</div>
  );
};

export default App;
