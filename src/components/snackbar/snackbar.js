import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

const ICONS = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast() {
  return (
    <div>
      <div>
        <Info size={24} />
      </div>
      <p>16 photos have been uploaded!</p>
      <button>
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
